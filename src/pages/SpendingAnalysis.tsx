
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';

const SpendingAnalysis = () => {
  const categoryData = [
    { category: 'Food & Dining', amount: 2400, percentage: 32, color: '#FF8C00' },
    { category: 'Transportation', amount: 1800, percentage: 24, color: '#1E90FF' },
    { category: 'Shopping', amount: 1200, percentage: 16, color: '#32CD32' },
    { category: 'Bills & Utilities', amount: 1500, percentage: 20, color: '#FFD700' },
    { category: 'Entertainment', amount: 600, percentage: 8, color: '#FF6347' },
  ];

  const monthlyTrend = [
    { month: 'Jan', amount: 6800 },
    { month: 'Feb', amount: 7200 },
    { month: 'Mar', amount: 6900 },
    { month: 'Apr', amount: 7500 },
    { month: 'May', amount: 7100 },
    { month: 'Jun', amount: 7500 },
  ];

  const merchants = [
    { name: 'Pick n Pay', amount: 850, category: 'Groceries', frequency: 12 },
    { name: 'Shell Fuel Station', amount: 650, category: 'Transportation', frequency: 8 },
    { name: 'Woolworths', amount: 420, category: 'Shopping', frequency: 6 },
    { name: 'Game Stores', amount: 380, category: 'Shopping', frequency: 4 },
    { name: 'KFC', amount: 320, category: 'Food & Dining', frequency: 10 },
  ];

  const unusualSpending = [
    { merchant: 'Online Shopping', amount: 450, date: '2024-06-15', flag: 'high' },
    { merchant: 'Fuel Station', amount: 180, date: '2024-06-12', flag: 'unusual_time' },
    { merchant: 'Restaurant', amount: 320, date: '2024-06-10', flag: 'high' },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Spending Analysis</h1>
          <p className="text-muted-foreground">Understand your spending patterns and habits</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="merchants">Merchants</TabsTrigger>
          <TabsTrigger value="alerts">Spending Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Monthly Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="shadow-financial">
              <CardContent className="p-6 text-center">
                <p className="text-2xl font-bold text-primary">P7,500</p>
                <p className="text-sm text-muted-foreground">This Month</p>
                <Badge className="bg-warning/10 text-warning mt-2">+5.3%</Badge>
              </CardContent>
            </Card>
            
            <Card className="shadow-financial">
              <CardContent className="p-6 text-center">
                <p className="text-2xl font-bold text-secondary">P7,100</p>
                <p className="text-sm text-muted-foreground">Last Month</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-financial">
              <CardContent className="p-6 text-center">
                <p className="text-2xl font-bold text-success">P42,500</p>
                <p className="text-sm text-muted-foreground">6-Month Total</p>
              </CardContent>
            </Card>

            <Card className="shadow-financial">
              <CardContent className="p-6 text-center">
                <p className="text-2xl font-bold text-info">P7,083</p>
                <p className="text-sm text-muted-foreground">Monthly Average</p>
              </CardContent>
            </Card>
          </div>

          {/* Spending Trend */}
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Monthly Spending Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Line 
                    type="monotone" 
                    dataKey="amount" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Spending by Category */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Spending by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      dataKey="amount"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Category Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {categoryData.map((category, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: category.color }}
                      ></div>
                      <span className="text-sm font-medium">{category.category}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">P{category.amount.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">{category.percentage}%</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Detailed Category Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={categoryData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="category" type="category" width={120} />
                  <Bar dataKey="amount" fill="hsl(var(--primary))" radius={4} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Highest Spending Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {categoryData.slice(0, 3).map((category, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium">{category.category}</h3>
                      <Badge className="bg-primary/10 text-primary">#{index + 1}</Badge>
                    </div>
                    <p className="text-2xl font-bold">P{category.amount.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{category.percentage}% of total spending</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Category Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                  <h3 className="font-medium text-warning">High Food Spending</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your dining expenses are 15% above average. Consider cooking more at home.
                  </p>
                </div>
                
                <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                  <h3 className="font-medium text-success">Good Utility Management</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your utility costs are well within recommended limits.
                  </p>
                </div>
                
                <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
                  <h3 className="font-medium text-info">Transportation Optimization</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Consider carpooling or public transport to reduce fuel costs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="merchants" className="space-y-6">
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Top Merchants</CardTitle>
              <p className="text-sm text-muted-foreground">Your most frequent spending locations</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {merchants.map((merchant, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div>
                    <h3 className="font-medium">{merchant.name}</h3>
                    <p className="text-sm text-muted-foreground">{merchant.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">P{merchant.amount.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{merchant.frequency} transactions</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Merchant Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Grocery Stores</span>
                  <span className="font-medium">P1,270</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Fuel Stations</span>
                  <span className="font-medium">P830</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Restaurants</span>
                  <span className="font-medium">P740</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Retail Stores</span>
                  <span className="font-medium">P800</span>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Spending Patterns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-sm font-medium">Peak Spending Day</p>
                  <p className="text-lg font-bold">Friday</p>
                  <p className="text-xs text-muted-foreground">Average P180/day</p>
                </div>
                
                <div className="p-3 bg-secondary/10 border border-secondary/20 rounded-lg">
                  <p className="text-sm font-medium">Most Active Time</p>
                  <p className="text-lg font-bold">6-8 PM</p>
                  <p className="text-xs text-muted-foreground">After work hours</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Spending Alerts & Warnings</CardTitle>
              <p className="text-sm text-muted-foreground">Flagged transactions requiring attention</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {unusualSpending.map((transaction, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium">{transaction.merchant}</h3>
                      <p className="text-sm text-muted-foreground">{transaction.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">P{transaction.amount}</p>
                      <Badge className={
                        transaction.flag === 'high' ? 'bg-destructive/10 text-destructive' :
                        'bg-warning/10 text-warning'
                      }>
                        {transaction.flag === 'high' ? 'High Amount' : 'Unusual Time'}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {transaction.flag === 'high' 
                      ? 'This transaction is significantly higher than your usual spending at this merchant.'
                      : 'This transaction occurred outside your normal spending hours.'
                    }
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Alert Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">High amount transactions</span>
                    <Badge className="bg-success/10 text-success">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Unusual merchant</span>
                    <Badge className="bg-success/10 text-success">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Overseas transactions</span>
                    <Badge className="bg-success/10 text-success">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Budget threshold alerts</span>
                    <Badge className="bg-muted/10 text-muted-foreground">Disabled</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Security Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-destructive">🔒</span>
                    <div>
                      <p className="text-sm font-medium">Review Alerts Promptly</p>
                      <p className="text-xs text-muted-foreground">Check flagged transactions within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-warning">⚠️</span>
                    <div>
                      <p className="text-sm font-medium">Report Suspicious Activity</p>
                      <p className="text-xs text-muted-foreground">Contact FNB immediately for unauthorized transactions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-info">📱</span>
                    <div>
                      <p className="text-sm font-medium">Enable Push Notifications</p>
                      <p className="text-xs text-muted-foreground">Get instant alerts on your mobile device</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SpendingAnalysis;
