
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Goals = () => {
  const [goals, setGoals] = useState([
    { 
      id: 1, 
      name: 'Emergency Fund', 
      target: 50000, 
      current: 32000, 
      deadline: '2025-12-31',
      category: 'savings'
    },
    { 
      id: 2, 
      name: 'Vacation to Cape Town', 
      target: 15000, 
      current: 8500, 
      deadline: '2025-07-15',
      category: 'travel'
    },
    { 
      id: 3, 
      name: 'New Car Down Payment', 
      target: 80000, 
      current: 45000, 
      deadline: '2025-10-01',
      category: 'major_purchase'
    }
  ]);

  const [newGoal, setNewGoal] = useState({
    name: '',
    target: '',
    deadline: '',
    category: 'savings'
  });

  const addGoal = () => {
    if (newGoal.name && newGoal.target && newGoal.deadline) {
      setGoals([...goals, {
        id: Date.now(),
        name: newGoal.name,
        target: parseFloat(newGoal.target),
        current: 0,
        deadline: newGoal.deadline,
        category: newGoal.category
      }]);
      setNewGoal({ name: '', target: '', deadline: '', category: 'savings' });
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 75) return 'bg-success';
    if (percentage >= 50) return 'bg-info';
    if (percentage >= 25) return 'bg-warning';
    return 'bg-destructive';
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'savings': return '💰';
      case 'travel': return '✈️';
      case 'major_purchase': return '🏠';
      case 'education': return '🎓';
      default: return '🎯';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Financial Goals</h1>
          <p className="text-muted-foreground">Track and achieve your financial aspirations</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">My Goals</TabsTrigger>
          <TabsTrigger value="create">Create Goal</TabsTrigger>
          <TabsTrigger value="strategies">Strategies</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Goals Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-financial">
              <CardContent className="p-6 text-center">
                <p className="text-2xl font-bold text-primary">{goals.length}</p>
                <p className="text-sm text-muted-foreground">Active Goals</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-financial">
              <CardContent className="p-6 text-center">
                <p className="text-2xl font-bold text-success">
                  P{goals.reduce((sum, goal) => sum + goal.current, 0).toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">Total Saved</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-financial">
              <CardContent className="p-6 text-center">
                <p className="text-2xl font-bold text-info">
                  {Math.round(goals.reduce((sum, goal) => sum + (goal.current / goal.target * 100), 0) / goals.length)}%
                </p>
                <p className="text-sm text-muted-foreground">Average Progress</p>
              </CardContent>
            </Card>
          </div>

          {/* Goals List */}
          <div className="space-y-6">
            {goals.map((goal) => {
              const percentage = (goal.current / goal.target) * 100;
              const daysLeft = Math.ceil((new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
              
              return (
                <Card key={goal.id} className="shadow-financial hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{getCategoryIcon(goal.category)}</span>
                        <div>
                          <h3 className="font-semibold text-lg">{goal.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            P{goal.current.toLocaleString()} of P{goal.target.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={daysLeft > 30 ? "secondary" : "destructive"}>
                          {daysLeft > 0 ? `${daysLeft} days left` : 'Overdue'}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">
                          Due: {new Date(goal.deadline).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">{percentage.toFixed(1)}%</span>
                      </div>
                      <Progress 
                        value={percentage} 
                        className={`h-3 ${getProgressColor(percentage)}`}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>P{(goal.target - goal.current).toLocaleString()} remaining</span>
                        <span>P{Math.round((goal.target - goal.current) / Math.max(daysLeft / 30, 1)).toLocaleString()}/month needed</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-4">
                      <Button size="sm" variant="outline">Add Funds</Button>
                      <Button size="sm" variant="outline">Adjust Target</Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Create New Financial Goal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="goalName">Goal Name</Label>
                  <Input
                    id="goalName"
                    value={newGoal.name}
                    onChange={(e) => setNewGoal({...newGoal, name: e.target.value})}
                    placeholder="e.g., Emergency Fund, Vacation"
                  />
                </div>
                <div>
                  <Label htmlFor="targetAmount">Target Amount (P)</Label>
                  <Input
                    id="targetAmount"
                    type="number"
                    value={newGoal.target}
                    onChange={(e) => setNewGoal({...newGoal, target: e.target.value})}
                    placeholder="10000"
                  />
                </div>
                <div>
                  <Label htmlFor="deadline">Target Date</Label>
                  <Input
                    id="deadline"
                    type="date"
                    value={newGoal.deadline}
                    onChange={(e) => setNewGoal({...newGoal, deadline: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <select 
                    id="category"
                    className="w-full p-2 border rounded-md"
                    value={newGoal.category}
                    onChange={(e) => setNewGoal({...newGoal, category: e.target.value})}
                  >
                    <option value="savings">Savings</option>
                    <option value="travel">Travel</option>
                    <option value="major_purchase">Major Purchase</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <Button onClick={addGoal} className="w-full md:w-auto">
                Create Goal
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strategies" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Savings Strategies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <h3 className="font-medium">Round-Up Savings</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Automatically round up purchases and save the change
                  </p>
                  <Button size="sm" className="mt-2">Enable</Button>
                </div>
                
                <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                  <h3 className="font-medium">Daily Save Challenge</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Save P10 every day to reach P3,650 annually
                  </p>
                  <Button size="sm" variant="secondary" className="mt-2">Start Challenge</Button>
                </div>
                
                <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                  <h3 className="font-medium">Automatic Transfers</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Set up automatic transfers to your savings goals
                  </p>
                  <Button size="sm" variant="outline" className="mt-2">Configure</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Goal Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
                  <h3 className="font-medium">Emergency Fund Priority</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    You're 64% towards your emergency fund. Consider prioritizing this goal.
                  </p>
                </div>
                
                <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                  <h3 className="font-medium">Vacation Goal Alert</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    You need to save P1,625/month to reach your vacation goal on time.
                  </p>
                </div>
                
                <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                  <h3 className="font-medium">Investment Opportunity</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Consider investing your emergency fund surplus in low-risk options.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Goals;
