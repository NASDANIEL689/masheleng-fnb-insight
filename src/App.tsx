
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import BudgetPlanner from "./pages/BudgetPlanner";
import Goals from "./pages/Goals";
import Investments from "./pages/Investments";
import LoanEstimator from "./pages/LoanEstimator";
import CreditScore from "./pages/CreditScore";
import SpendingAnalysis from "./pages/SpendingAnalysis";
import FinancialTips from "./pages/FinancialTips";
import Support from "./pages/Support";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="masheleng-ui-theme">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route
                path="/*"
                element={
                  <ProtectedRoute>
                    <SidebarProvider>
                      <div className="min-h-screen flex w-full bg-background">
                        <Layout>
                          <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/budget" element={<BudgetPlanner />} />
                            <Route path="/goals" element={<Goals />} />
                            <Route path="/investments" element={<Investments />} />
                            <Route path="/loan-estimator" element={<LoanEstimator />} />
                            <Route path="/credit-score" element={<CreditScore />} />
                            <Route path="/spending-analysis" element={<SpendingAnalysis />} />
                            <Route path="/financial-tips" element={<FinancialTips />} />
                            <Route path="/support" element={<Support />} />
                            <Route path="*" element={<NotFound />} />
                          </Routes>
                        </Layout>
                      </div>
                    </SidebarProvider>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
