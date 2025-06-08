
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "./ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, User } from "lucide-react";

export const Header = () => {
  const { user, signOut } = useAuth();

  const getUserInitials = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name
        .split(' ')
        .map((name: string) => name[0])
        .join('')
        .toUpperCase();
    }
    return user?.email?.[0]?.toUpperCase() || 'U';
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const getUserName = () => {
    return user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User';
  };

  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-primary hover:bg-accent" />
        <div className="gradient-primary text-white px-4 py-2 rounded-lg font-semibold text-lg">
          Masheleng
        </div>
        <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
          {getGreeting()}, {getUserName()}!
        </Badge>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium">Available Balance</p>
          <p className="text-2xl font-bold text-primary">P55,001.00</p>
        </div>
        
        <ThemeToggle />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10 border-2 border-primary/20">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                  {getUserInitials()}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuItem className="flex items-center gap-2" disabled>
              <User className="h-4 w-4" />
              <div className="flex flex-col">
                <p className="text-sm font-medium">{getUserName()}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={signOut} className="flex items-center gap-2 text-red-600">
              <LogOut className="h-4 w-4" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
