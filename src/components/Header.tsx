
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  return (
    <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="text-primary hover:bg-accent" />
        <div className="gradient-primary text-white px-4 py-2 rounded-lg font-semibold text-lg">
          Masheleng
        </div>
        <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
          Good morning, Daniel!
        </Badge>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium">Available Balance</p>
          <p className="text-2xl font-bold text-primary">P55,001.00</p>
        </div>
        
        <Avatar className="h-10 w-10 border-2 border-primary/20">
          <AvatarImage src="/placeholder.svg" alt="User" />
          <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
            D
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
