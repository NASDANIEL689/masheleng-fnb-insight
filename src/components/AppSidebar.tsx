
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
  { title: "Profile", url: "/profile", icon: Award },
  { title: "Support", url: "/support", icon: HeadphonesIcon },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar
      className="border-r border-border bg-card"
      collapsible="icon"
    >
      <SidebarContent className="bg-card">
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            {!collapsed && (
              <div>
                <h1 className="font-bold text-foreground">Masheleng</h1>
                <p className="text-xs text-muted-foreground">FNB Financial Manager</p>
              </div>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground px-4 py-2">
            {!collapsed && "Financial Tools"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="w-full">
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                          isActive 
                            ? "bg-primary text-primary-foreground font-medium" 
                            : "text-primary hover:bg-accent hover:text-accent-foreground"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
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
