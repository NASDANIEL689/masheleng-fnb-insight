
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Investments = () => {
  const investmentOptions = [
    {
      name: "FNB Unit Trust Growth Fund",
      risk: "Medium",
      expectedReturn: "8-12%",
      minAmount: 500,
      description: "Diversified portfolio focusing on growth stocks",
      recommended: true
    },
    {
      name: "Fixed Deposit Account",
      risk: "Low",
      expectedReturn: "5-7%",
      minAmount: 1000,
      description: "Guaranteed returns with capital protection",
      recommended: false
    },
    {
      name: "FNB Retirement Annuity",
      risk: "Medium",
      expectedReturn: "10-15%",
      minAmount: 300,
      description: "Tax-efficient retirement savings",
      recommended: true
    }
  ];

  const portfolio = [
    { name: "Unit Trust Growth", value: 25000, allocation: 45, change: "+5.2%" },
    { name: "Fixed Deposit", value: 15000, allocation: 27, change: "+2.1%" },
    { name: "Retirement Annuity", value: 16000, allocation: 28, change: "+7.8%" }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Investment Portfolio</h1>
          <p className="text-muted-foreground">Grow your wealth with smart investment choices</p>
        </div>
      </div>

      <Tabs defaultValue="portfolio" className="space-y-6">
        <TabsList>
          <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="education">Investment Education</TabsTrigger>
        </TabsList>

        <TabsContent value="portfolio" className="space-y-6">
          {/* Portfolio Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-financial">
              <CardContent className="p-6 text-center">
                <p className="text-2xl font-bold text-primary">P56,000</p>
                <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
                <Badge className="bg-success/10 text-success mt-2">+12.5%</Badge>
              </CardContent>
            </Card>
            
            <Card className="shadow-financial">
              <CardContent className="p-6 text-center">
                <p className="text-2xl font-bold text-success">+P6,200</p>
                <p className="text-sm text-muted-foreground">Total Gains</p>
                <p className="text-xs text-muted-foreground mt-1">This year</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-financial">
              <CardContent className="p-6 text-center">
                <p className="text-2xl font-bold text-info">8.5%</p>
                <p className="text-sm text-muted-foreground">Average Return</p>
                <p className="text-xs text-muted-foreground mt-1">Annualized</p>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio Breakdown */}
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Portfolio Allocation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {portfolio.map((investment, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{investment.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        P{investment.value.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge className={investment.change.startsWith('+') ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}>
                        {investment.change}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">{investment.allocation}%</p>
                    </div>
                  </div>
                  <Progress value={investment.allocation} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Personalized Investment Recommendations</CardTitle>
              <p className="text-sm text-muted-foreground">Based on your income level and risk profile</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {investmentOptions.map((option, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold flex items-center gap-2">
                        {option.name}
                        {option.recommended && <Badge className="bg-primary/10 text-primary">Recommended</Badge>}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{option.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Risk Level</p>
                      <Badge variant={option.risk === 'Low' ? 'secondary' : option.risk === 'Medium' ? 'default' : 'destructive'}>
                        {option.risk}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Expected Return</p>
                      <p className="font-medium">{option.expectedReturn}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Minimum</p>
                      <p className="font-medium">P{option.minAmount}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button size="sm">Learn More</Button>
                    <Button size="sm" variant="outline">Invest Now</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Investment Basics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <h3 className="font-medium">Understanding Risk vs Return</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Higher potential returns typically come with higher risk. Diversification helps manage risk.
                  </p>
                </div>
                
                <div className="p-4 bg-secondary/10 border border-secondary/20 rounded-lg">
                  <h3 className="font-medium">Compound Interest</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Starting early gives your money more time to grow exponentially through compounding.
                  </p>
                </div>
                
                <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                  <h3 className="font-medium">Dollar-Cost Averaging</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Investing a fixed amount regularly reduces the impact of market volatility.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Investment Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-primary">💡</span>
                    <div>
                      <p className="text-sm font-medium">Start with your emergency fund</p>
                      <p className="text-xs text-muted-foreground">Ensure 3-6 months of expenses saved before investing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-primary">📊</span>
                    <div>
                      <p className="text-sm font-medium">Diversify your portfolio</p>
                      <p className="text-xs text-muted-foreground">Don't put all eggs in one basket</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-primary">⏰</span>
                    <div>
                      <p className="text-sm font-medium">Think long-term</p>
                      <p className="text-xs text-muted-foreground">Markets fluctuate, but tend to grow over time</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-primary">📚</span>
                    <div>
                      <p className="text-sm font-medium">Continue learning</p>
                      <p className="text-xs text-muted-foreground">Stay informed about your investments</p>
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

export default Investments;
