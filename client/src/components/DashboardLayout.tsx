import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Home, Palette, Type, Ruler, Box, Image, FileText } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@lib/components/sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "ホーム", href: "/", icon: Home },
  { name: "カラーシステム", href: "/colors", icon: Palette },
  { name: "タイポグラフィ", href: "/typography", icon: Type },
  { name: "スペーシング", href: "/spacing", icon: Ruler },
  { name: "コンポーネント", href: "/components", icon: Box },
  { name: "ロゴガイドライン", href: "/logo", icon: Image },
  { name: "ドキュメント", href: "/documentation", icon: FileText },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();

  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer px-2 py-2">
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded"></div>
              <span className="font-bold text-sidebar-foreground">AIO総研</span>
            </div>
          </Link>
        </SidebarHeader>

        <SidebarContent>
          <SidebarMenu>
            {navigation.map((item) => {
              const isActive = location === item.href;
              const Icon = item.icon;

              return (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild isActive={isActive}>
                    <Link href={item.href}>
                      <Icon />
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter>
          <p className="text-xs text-sidebar-foreground/60 px-2">
            © 2024 AIO総研 Research Institute Inc.
          </p>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <div className="container py-8">
          {children}
        </div>
      </SidebarInset>
    </>
  );
}
