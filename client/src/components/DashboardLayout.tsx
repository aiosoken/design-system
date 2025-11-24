import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Home, Palette, Type, Box, Image, FileText } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "ホーム", href: "/", icon: Home },
  { name: "カラーシステム", href: "/colors", icon: Palette },
  { name: "タイポグラフィ", href: "/typography", icon: Type },
  { name: "コンポーネント", href: "/components", icon: Box },
  { name: "ロゴガイドライン", href: "/logo", icon: Image },
  { name: "ドキュメント", href: "/documentation", icon: FileText },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-sidebar">
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center border-b border-sidebar-border px-6">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded"></div>
                </div>
                <span className="font-bold text-sidebar-foreground">AIO総研</span>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {navigation.map((item) => {
              const isActive = location === item.href;
              const Icon = item.icon;
              
              return (
                <Link key={item.name} href={item.href}>
                  <div
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="border-t border-sidebar-border p-4">
            <p className="text-xs text-sidebar-foreground/60">
              © 2024 AIO総研 Research Institute Inc.
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
