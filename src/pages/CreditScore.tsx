
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const CreditScore = () => {
  const creditData = [
    { month: 'Jan', score: 680 },
    { month: 'Feb', score: 695 },
    { month: 'Mar', score: 710 },
    { month: 'Apr', score: 720 },
    { month: 'May', score: 725 },
    { month: 'Jun', score: 730 },
  ];

  const creditFactors = [
    { factor: 'Payment History', impact: 35, score: 'Excellent', color: 'bg-success' },
    { factor: 'Credit Utilization', impact: 30, score: 'Good', color: 'bg-info' },
    { factor: 'Length of Credit History', impact: 15, score: 'Fair', color: 'bg-warning' },
    { factor: 'Credit Mix', impact: 10, score: 'Good', color: 'bg-info' },
    { factor: 'New Credit Inquiries', impact: 10, score: 'Excellent', color: 'bg-success' },
  ];

  const recommendations = [
    {
      title: "Pay Bills on Time",
      description: "Continue your excellent payment history to maintain your score",
      impact: "High",
      action: "Set up automatic payments"
    },
    {
      title: "Reduce Credit Utilization",
      description: "Keep credit card balances below 30% of your limit",
      impact: "Medium",
      action: "Pay down existing balances"
    },
    {
      title: "Avoid New Credit Applications",
      description: "Too many credit inquiries can temporarily lower your score",
      impact: "Low",
      action: "Wait 6 months before applying"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Credit Score</h1>
          <p className="text-muted-foreground">Monitor and improve your creditworthiness</p>
        </div>
        <Button>Get Free Credit Report</Button>
      </div>

      {/* Credit Score Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-financial">
          <CardHeader>
            <CardTitle>Credit Score Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-4xl font-bold text-primary">730</p>
                <p className="text-sm text-muted-foreground">Current Score</p>
                <Badge className="bg-success/10 text-success mt-2">Good</Badge>
              </div>
              <div className="text-right">
                <p className="text-success font-medium">+50 points</p>
                <p className="text-sm text-muted-foreground">Last 6 months</p>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={creditData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[650, 750]} />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-financial">
          <CardHeader>
            <CardTitle>Score Range</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Poor (300-579)</span>
                <div className="w-4 h-4 bg-destructive rounded"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Fair (580-669)</span>
                <div className="w-4 h-4 bg-warning rounded"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Good (670-739)</span>
                <div className="w-4 h-4 bg-success rounded"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Very Good (740-799)</span>
                <div className="w-4 h-4 bg-info rounded"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Excellent (800-850)</span>
                <div className="w-4 h-4 bg-primary rounded"></div>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <p className="text-sm font-medium mb-2">Your Position</p>
              <Progress value={((730 - 300) / (850 - 300)) * 100} className="h-3" />
              <p className="text-xs text-muted-foreground mt-1">730 out of 850</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Credit Factors */}
      <Card className="shadow-financial">
        <CardHeader>
          <CardTitle>Credit Score Factors</CardTitle>
          <p className="text-sm text-muted-foreground">What impacts your credit score</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {creditFactors.map((factor, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{factor.factor}</h3>
                    <p className="text-sm text-muted-foreground">{factor.impact}% of your score</p>
                  </div>
                  <Badge className={
                    factor.score === 'Excellent' ? 'bg-success/10 text-success' :
                    factor.score === 'Good' ? 'bg-info/10 text-info' :
                    factor.score === 'Fair' ? 'bg-warning/10 text-warning' :
                    'bg-destructive/10 text-destructive'
                  }>
                    {factor.score}
                  </Badge>
                </div>
                <Progress value={factor.impact * 2.5} className={`h-2 ${factor.color}`} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="shadow-financial">
        <CardHeader>
          <CardTitle>Improvement Recommendations</CardTitle>
          <p className="text-sm text-muted-foreground">Actions to boost your credit score</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{rec.title}</h3>
                <Badge variant={
                  rec.impact === 'High' ? 'destructive' :
                  rec.impact === 'Medium' ? 'default' : 'secondary'
                }>
                  {rec.impact} Impact
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-primary">{rec.action}</p>
                <Button size="sm" variant="outline">Take Action</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Credit Monitoring */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-financial">
          <CardHeader>
            <CardTitle>Credit Monitoring</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <h3 className="font-medium">Free Credit Monitoring</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Get alerts when your credit score changes
              </p>
              <Button size="sm" className="mt-2">Enable Alerts</Button>
            </div>
            
            <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
              <h3 className="font-medium">Identity Protection</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Monitor for suspicious activity on your accounts
              </p>
              <Button size="sm" variant="secondary" className="mt-2">Learn More</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-financial">
          <CardHeader>
            <CardTitle>Credit Benefits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-success">✅</span>
                <div>
                  <p className="text-sm font-medium">Better Loan Rates</p>
                  <p className="text-xs text-muted-foreground">Save thousands on interest</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-success">✅</span>
                <div>
                  <p className="text-sm font-medium">Credit Card Approval</p>
                  <p className="text-xs text-muted-foreground">Access to premium cards</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-success">✅</span>
                <div>
                  <p className="text-sm font-medium">Higher Credit Limits</p>
                  <p className="text-xs text-muted-foreground">More purchasing power</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-success">✅</span>
                <div>
                  <p className="text-sm font-medium">Better Insurance Rates</p>
                  <p className="text-xs text-muted-foreground">Lower premiums</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreditScore;
