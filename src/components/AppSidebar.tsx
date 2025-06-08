
import { useState } from "react";
import { 
  Home, 
  Calculator, 
  Target, 
  TrendingUp, 
  CreditCard, 
  Award, 
  BarChart3, 
  BookOpen, 
  HeadphonesIcon 
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Budget Planner", url: "/budget", icon: Calculator },
  { title: "Financial Goals", url: "/goals", icon: Target },
  { title: "Investments", url: "/investments", icon: TrendingUp },
  { title: "Loan Estimator", url: "/loan-estimator", icon: CreditCard },
  { title: "Credit Score", url: "/credit-score", icon: Award },
  { title: "Spending Analysis", url: "/spending-analysis", icon: BarChart3 },
  { title: "Financial Tips", url: "/financial-tips", icon: BookOpen },
  { title: "Support", url: "/support", icon: HeadphonesIcon },
];

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavClass = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground font-medium hover:bg-primary/90" 
      : "hover:bg-accent hover:text-accent-foreground transition-colors";

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} border-r border-border transition-all duration-300`}
      collapsible
    >
      <SidebarContent className="bg-sidebar">
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-sidebar-foreground">Masheleng</h1>
                <p className="text-xs text-sidebar-foreground/70">FNB Financial Manager</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60 px-4">
            {!collapsed && "Financial Tools"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="mx-2">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={getNavClass}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
