import { Toaster } from "@lib/components/sonner";
import { TooltipProvider } from "@lib/components/tooltip";
import { SidebarProvider } from "@lib/components/sidebar";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import DashboardLayout from "./components/DashboardLayout";
import Home from "./pages/Home";
import Colors from "./pages/Colors";
import Typography from "./pages/Typography";
import Spacing from "./pages/Spacing";
import Components from "./pages/Components";
import Logo from "./pages/Logo";
import Documentation from "./pages/Documentation";

function Router() {
  return (
    <SidebarProvider>
      <DashboardLayout>
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/colors"} component={Colors} />
          <Route path={"/typography"} component={Typography} />
          <Route path={"/spacing"} component={Spacing} />
          <Route path={"/components"} component={Components} />
          <Route path={"/logo"} component={Logo} />
          <Route path={"/documentation"} component={Documentation} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </DashboardLayout>
    </SidebarProvider>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
