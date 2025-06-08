
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BudgetPlanner = () => {
  const [budgets, setBudgets] = useState([
    { category: 'Food & Dining', budget: 2500, spent: 2400, id: 1 },
    { category: 'Transportation', budget: 2000, spent: 1800, id: 2 },
    { category: 'Shopping', budget: 1500, spent: 1200, id: 3 },
    { category: 'Entertainment', budget: 1000, spent: 800, id: 4 },
    { category: 'Bills & Utilities', budget: 2000, spent: 1500, id: 5 },
  ]);

  const [newBudget, setNewBudget] = useState({ category: '', amount: '' });

  const addBudget = () => {
    if (newBudget.category && newBudget.amount) {
      setBudgets([...budgets, {
        category: newBudget.category,
        budget: parseFloat(newBudget.amount),
        spent: 0,
        id: Date.now()
      }]);
      setNewBudget({ category: '', amount: '' });
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-destructive';
    if (percentage >= 75) return 'bg-warning';
    return 'bg-success';
  };

  const getStatusBadge = (percentage: number) => {
    if (percentage >= 90) return <Badge className="bg-destructive/10 text-destructive">Over Budget</Badge>;
    if (percentage >= 75) return <Badge className="bg-warning/10 text-warning">Warning</Badge>;
    return <Badge className="bg-success/10 text-success">On Track</Badge>;
  };

  const totalBudget = budgets.reduce((sum, item) => sum + item.budget, 0);
  const totalSpent = budgets.reduce((sum, item) => sum + item.spent, 0);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Budget Planner</h1>
          <p className="text-muted-foreground">Track and manage your spending across categories</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="manage">Manage Budgets</TabsTrigger>
          <TabsTrigger value="forecast">Forecast</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Budget Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-financial">
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">P{totalBudget.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Total Budget</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-financial">
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">P{totalSpent.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Total Spent</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-financial">
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-success">P{(totalBudget - totalSpent).toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Remaining</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Budget Categories */}
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Budget Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {budgets.map((budget) => {
                const percentage = (budget.spent / budget.budget) * 100;
                return (
                  <div key={budget.id} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{budget.category}</h3>
                        <p className="text-sm text-muted-foreground">
                          P{budget.spent.toLocaleString()} of P{budget.budget.toLocaleString()}
                        </p>
                      </div>
                      {getStatusBadge(percentage)}
                    </div>
                    <Progress 
                      value={percentage} 
                      className={`h-3 ${getProgressColor(percentage)}`}
                    />
                    <div className="text-right text-sm text-muted-foreground">
                      {percentage.toFixed(1)}% used
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="manage" className="space-y-6">
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Add New Budget Category</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category Name</Label>
                  <Input
                    id="category"
                    value={newBudget.category}
                    onChange={(e) => setNewBudget({...newBudget, category: e.target.value})}
                    placeholder="e.g., Groceries, Gas, etc."
                  />
                </div>
                <div>
                  <Label htmlFor="amount">Monthly Budget (P)</Label>
                  <Input
                    id="amount"
                    type="number"
                    value={newBudget.amount}
                    onChange={(e) => setNewBudget({...newBudget, amount: e.target.value})}
                    placeholder="0.00"
                  />
                </div>
              </div>
              <Button onClick={addBudget} className="w-full md:w-auto">
                Add Budget Category
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Budget Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Alert Threshold</Label>
                  <Input type="number" placeholder="75" />
                  <p className="text-xs text-muted-foreground mt-1">Get alerts when spending reaches this % of budget</p>
                </div>
                <div>
                  <Label>Budget Period</Label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Monthly</option>
                    <option>Weekly</option>
                    <option>Quarterly</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecast" className="space-y-6">
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Budget Forecast</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
                  <h3 className="font-medium text-info">Next Month Projection</h3>
                  <p className="text-sm mt-2">Based on current spending patterns, you're projected to spend P{(totalSpent * 1.1).toLocaleString()} next month.</p>
                </div>
                
                <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                  <h3 className="font-medium text-warning">Budget Recommendations</h3>
                  <ul className="text-sm mt-2 space-y-1">
                    <li>• Consider reducing dining budget by P200</li>
                    <li>• Increase transportation budget by P100 for fuel price changes</li>
                    <li>• Set aside P500 for emergency expenses</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BudgetPlanner;
