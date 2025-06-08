
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { useState } from 'react';

const monthlyData = [
  { month: 'Jan', income: 8500, spending: 6200 },
  { month: 'Feb', income: 9200, spending: 7100 },
  { month: 'Mar', income: 8800, spending: 6800 },
  { month: 'Apr', income: 9500, spending: 7300 },
  { month: 'May', income: 9100, spending: 6900 },
  { month: 'Jun', income: 9400, spending: 7200 },
];

const spendingData = [
  { category: 'Food & Dining', amount: 2400, color: '#FF8C00' },
  { category: 'Transportation', amount: 1800, color: '#1E90FF' },
  { category: 'Shopping', amount: 1200, color: '#32CD32' },
  { category: 'Bills & Utilities', amount: 1500, color: '#FFD700' },
  { category: 'Entertainment', amount: 800, color: '#FF6347' },
];

const Dashboard = () => {
  const [trendView, setTrendView] = useState('income');

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Daniel!</h1>
          <p className="text-muted-foreground">Here's your financial overview for today</p>
        </div>
        <Badge variant="outline" className="bg-success/10 text-success border-success/20">
          All systems healthy
        </Badge>
      </div>

      {/* Account Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="gradient-card text-white shadow-financial">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-white/80 text-sm">Available Balance</p>
                <p className="text-3xl font-bold">P55,001.00</p>
                <div className="flex gap-2 mt-3">
                  <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                    Add Bank Account
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                    Split Bill
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-financial hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Personal Account</p>
                <p className="text-2xl font-bold text-foreground">P2,000.00</p>
                <p className="text-xs text-muted-foreground mt-1">***9983 • 04/12/04</p>
              </div>
              <div className="w-12 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">VISA</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-financial hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Family Account</p>
                <p className="text-2xl font-bold text-foreground">P30,000.00</p>
                <p className="text-xs text-muted-foreground mt-1">***9983 • 04/12/04</p>
              </div>
              <div className="w-12 h-8 bg-secondary rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">VISA</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-financial hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-muted-foreground">Savings Account</p>
                <p className="text-2xl font-bold text-foreground">P9,000.00</p>
                <p className="text-xs text-muted-foreground mt-1">***9983 • 04/12/04</p>
              </div>
              <div className="w-12 h-8 bg-success rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">VISA</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Income/Spending Chart */}
        <Card className="lg:col-span-2 shadow-financial">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Income vs Spending</CardTitle>
              <div className="flex items-center gap-3">
                <Select value={trendView} onValueChange={setTrendView}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="income">Income</SelectItem>
                    <SelectItem value="spending">Spending</SelectItem>
                  </SelectContent>
                </Select>
                <Badge variant="outline">Last 6 months</Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Line 
                  type="monotone" 
                  dataKey={trendView} 
                  stroke={trendView === 'income' ? 'hsl(var(--primary))' : 'hsl(var(--secondary))'} 
                  strokeWidth={3}
                  dot={{ fill: trendView === 'income' ? 'hsl(var(--primary))' : 'hsl(var(--secondary))', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="shadow-financial">
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Credit Score</span>
                <Badge className="bg-success/10 text-success">Good</Badge>
              </div>
              <p className="text-2xl font-bold">730</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Loan Payment</span>
                <span className="text-sm font-medium">5%</span>
              </div>
              <Progress value={5} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Monthly Budget</span>
                <span className="text-sm font-medium">P5000</span>
              </div>
              <p className="text-sm text-muted-foreground">Spent: P3970</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Spending Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-financial">
          <CardHeader>
            <CardTitle>Spending by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={spendingData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="amount"
                  label={({ category, amount }) => `${category}: P${amount}`}
                >
                  {spendingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-financial">
          <CardHeader>
            <CardTitle>Recent Alerts & Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
              <div className="flex items-center gap-2">
                <Badge className="bg-warning/20 text-warning">⚠️ Budget Alert</Badge>
              </div>
              <p className="text-sm mt-2">You've spent 80% of your dining budget this month.</p>
            </div>

            <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
              <div className="flex items-center gap-2">
                <Badge className="bg-success/20 text-success">✅ Goal Progress</Badge>
              </div>
              <p className="text-sm mt-2">You're 15% ahead on your vacation savings goal!</p>
            </div>

            <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
              <div className="flex items-center gap-2">
                <Badge className="bg-info/20 text-info">💡 Savings Tip</Badge>
              </div>
              <p className="text-sm mt-2">Consider our daily round-up savings to boost your emergency fund.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
