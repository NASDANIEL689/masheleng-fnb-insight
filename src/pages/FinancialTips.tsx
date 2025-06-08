
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FinancialTips = () => {
  const weeklyTips = [
    {
      title: "Emergency Fund Essentials",
      category: "Savings",
      difficulty: "Beginner",
      readTime: "3 min",
      content: "Learn why having 3-6 months of expenses saved is crucial for financial security.",
      tips: [
        "Start with a goal of P1,000 as your initial emergency fund",
        "Automate transfers to build the habit",
        "Keep emergency funds in a separate, easily accessible account",
        "Only use for true emergencies - unexpected medical bills, job loss, major repairs"
      ]
    },
    {
      title: "Budgeting with the 50/30/20 Rule",
      category: "Budgeting",
      difficulty: "Beginner",
      readTime: "4 min",
      content: "Master the simple budgeting rule that allocates your income effectively.",
      tips: [
        "50% for needs: rent, groceries, utilities, minimum debt payments",
        "30% for wants: dining out, entertainment, hobbies",
        "20% for savings and debt repayment",
        "Adjust percentages based on your personal situation"
      ]
    },
    {
      title: "Understanding Credit Scores",
      category: "Credit",
      difficulty: "Intermediate",
      readTime: "5 min",
      content: "Discover how credit scores work and how to improve yours.",
      tips: [
        "Payment history accounts for 35% of your score",
        "Keep credit utilization below 30%",
        "Don't close old credit cards",
        "Check your credit report regularly for errors"
      ]
    },
    {
      title: "Investment Basics for Beginners",
      category: "Investing",
      difficulty: "Intermediate",
      readTime: "6 min",
      content: "Start your investment journey with these fundamental concepts.",
      tips: [
        "Start investing even with small amounts",
        "Diversify across different asset classes",
        "Understand your risk tolerance",
        "Think long-term and avoid emotional decisions"
      ]
    }
  ];

  const categories = [
    { name: "Budgeting", icon: "💰", count: 12 },
    { name: "Savings", icon: "🏦", count: 8 },
    { name: "Investing", icon: "📈", count: 10 },
    { name: "Credit", icon: "💳", count: 6 },
    { name: "Debt Management", icon: "📋", count: 5 },
    { name: "Tax Planning", icon: "📊", count: 4 },
  ];

  const quickTips = [
    "Track every expense for one week to understand your spending patterns",
    "Set up automatic transfers to savings on payday",
    "Review and cancel unused subscriptions monthly",
    "Use the 24-hour rule before making large purchases",
    "Compare prices from at least 3 sources before buying",
    "Negotiate bills like insurance and utilities annually"
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Financial Literacy</h1>
          <p className="text-muted-foreground">Learn and improve your financial knowledge</p>
        </div>
      </div>

      <Tabs defaultValue="tips" className="space-y-6">
        <TabsList>
          <TabsTrigger value="tips">Weekly Tips</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="quick">Quick Tips</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="tips" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeklyTips.map((tip, index) => (
              <Card key={index} className="shadow-financial hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Badge className="bg-primary/10 text-primary mb-2">{tip.category}</Badge>
                      <CardTitle className="text-lg">{tip.title}</CardTitle>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">{tip.difficulty}</Badge>
                    <Badge variant="outline">{tip.readTime}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{tip.content}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Key Points:</h4>
                    <ul className="space-y-1">
                      {tip.tips.slice(0, 2).map((point, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    Read Full Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="shadow-financial hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} articles</p>
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    Explore Topics
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Articles */}
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Featured This Month</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <h3 className="font-medium mb-2">Retirement Planning in Your 20s</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Why starting early makes a huge difference in your retirement savings.
                  </p>
                  <Button size="sm" variant="outline">Read More</Button>
                </div>
                
                <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                  <h3 className="font-medium mb-2">Side Hustles That Actually Work</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Practical ways to increase your income in Botswana.
                  </p>
                  <Button size="sm" variant="outline">Read More</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="quick" className="space-y-6">
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Daily Financial Tips</CardTitle>
              <p className="text-sm text-muted-foreground">Quick actions you can take today</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {quickTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold mt-1">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{tip}</p>
                  </div>
                  <Button size="sm" variant="ghost" className="text-xs">
                    Done
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Money Mindset</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                  <p className="text-sm font-medium">💡 Think abundance, not scarcity</p>
                  <p className="text-xs text-muted-foreground mt-1">Focus on growing income rather than just cutting expenses</p>
                </div>
                
                <div className="p-3 bg-info/10 border border-info/20 rounded-lg">
                  <p className="text-sm font-medium">🎯 Set specific financial goals</p>
                  <p className="text-xs text-muted-foreground mt-1">Vague goals lead to vague results</p>
                </div>
                
                <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                  <p className="text-sm font-medium">⏰ Automate good financial habits</p>
                  <p className="text-xs text-muted-foreground mt-1">Make saving and investing effortless</p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Weekly Challenges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium">No-Spend Challenge</p>
                    <Badge className="bg-primary/10 text-primary">This Week</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Try not to spend on non-essentials for 3 days</p>
                </div>
                
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium">Receipt Review</p>
                    <Badge variant="outline">Next Week</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Review all receipts and categorize expenses</p>
                </div>
                
                <div className="p-3 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm font-medium">Future Self Planning</p>
                    <Badge variant="outline">Week 3</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">Write a letter to yourself 5 years from now</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Recommended Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Expense Tracking App</p>
                      <p className="text-xs text-muted-foreground">Track spending on-the-go</p>
                    </div>
                    <Button size="sm" variant="outline">Download</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Budget Calculator</p>
                      <p className="text-xs text-muted-foreground">Plan your monthly budget</p>
                    </div>
                    <Button size="sm" variant="outline">Use Tool</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Investment Simulator</p>
                      <p className="text-xs text-muted-foreground">See how investments grow</p>
                    </div>
                    <Button size="sm" variant="outline">Try Now</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>External Resources</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Bank of Botswana - Financial Education</p>
                    <p className="text-xs text-muted-foreground">Official financial literacy resources</p>
                    <Button size="sm" variant="ghost" className="mt-1">Visit Website</Button>
                  </div>
                  
                  <div>
                    <p className="font-medium">FNB Learning Centre</p>
                    <p className="text-xs text-muted-foreground">Online courses and webinars</p>
                    <Button size="sm" variant="ghost" className="mt-1">Access Courses</Button>
                  </div>
                  
                  <div>
                    <p className="font-medium">Financial Planning Books</p>
                    <p className="text-xs text-muted-foreground">Recommended reading list</p>
                    <Button size="sm" variant="ghost" className="mt-1">View List</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Learning Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="text-2xl font-bold text-primary">8</p>
                  <p className="text-sm text-muted-foreground">Articles Read</p>
                </div>
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <p className="text-2xl font-bold text-secondary">3</p>
                  <p className="text-sm text-muted-foreground">Challenges Completed</p>
                </div>
                <div className="text-center p-4 bg-success/10 rounded-lg">
                  <p className="text-2xl font-bold text-success">75%</p>
                  <p className="text-sm text-muted-foreground">Knowledge Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FinancialTips;
