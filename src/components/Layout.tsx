
import { ReactNode } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";
import { ChatBot } from "./ChatBot";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-6 bg-background overflow-auto">
          {children}
        </main>
      </div>
      <ChatBot />
    </>
  );
};

export default Layout;
