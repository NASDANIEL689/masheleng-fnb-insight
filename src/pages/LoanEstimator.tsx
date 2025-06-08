
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LoanEstimator = () => {
  const [loanAmount, setLoanAmount] = useState([100000]);
  const [loanTerm, setLoanTerm] = useState([24]);
  const [interestRate, setInterestRate] = useState([12]);
  const [monthlyIncome, setMonthlyIncome] = useState('');

  const calculateMonthlyPayment = () => {
    const principal = loanAmount[0];
    const monthlyRate = interestRate[0] / 100 / 12;
    const numPayments = loanTerm[0];
    
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    return monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalPayment = monthlyPayment * loanTerm[0];
  const totalInterest = totalPayment - loanAmount[0];

  const loanTypes = [
    {
      name: "Personal Loan",
      rate: "10-15%",
      maxAmount: "P200,000",
      term: "6-60 months",
      description: "For personal expenses, debt consolidation, or emergencies"
    },
    {
      name: "Vehicle Finance",
      rate: "8-12%",
      maxAmount: "P500,000",
      term: "12-72 months",
      description: "Finance your dream car with competitive rates"
    },
    {
      name: "Home Loan",
      rate: "6-10%",
      maxAmount: "P2,000,000",
      term: "5-30 years",
      description: "Make your homeownership dreams a reality"
    },
    {
      name: "Student Loan",
      rate: "5-8%",
      maxAmount: "P100,000",
      term: "12-84 months",
      description: "Invest in your education and future"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Loan Estimator</h1>
          <p className="text-muted-foreground">Calculate loan payments and explore your options</p>
        </div>
      </div>

      <Tabs defaultValue="calculator" className="space-y-6">
        <TabsList>
          <TabsTrigger value="calculator">Loan Calculator</TabsTrigger>
          <TabsTrigger value="types">Loan Types</TabsTrigger>
          <TabsTrigger value="eligibility">Eligibility Check</TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Calculator Inputs */}
            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Loan Calculator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Loan Amount: P{loanAmount[0].toLocaleString()}</Label>
                  <Slider
                    value={loanAmount}
                    onValueChange={setLoanAmount}
                    max={500000}
                    min={1000}
                    step={1000}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>P1,000</span>
                    <span>P500,000</span>
                  </div>
                </div>

                <div>
                  <Label>Loan Term: {loanTerm[0]} months</Label>
                  <Slider
                    value={loanTerm}
                    onValueChange={setLoanTerm}
                    max={72}
                    min={6}
                    step={6}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>6 months</span>
                    <span>72 months</span>
                  </div>
                </div>

                <div>
                  <Label>Interest Rate: {interestRate[0]}%</Label>
                  <Slider
                    value={interestRate}
                    onValueChange={setInterestRate}
                    max={20}
                    min={5}
                    step={0.5}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>5%</span>
                    <span>20%</span>
                  </div>
                </div>

                <div>
                  <Label htmlFor="income">Monthly Income (optional)</Label>
                  <Input
                    id="income"
                    type="number"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                    placeholder="Enter your monthly income"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-financial">
              <CardHeader>
                <CardTitle>Loan Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <p className="text-2xl font-bold text-primary">P{monthlyPayment.toFixed(0)}</p>
                    <p className="text-sm text-muted-foreground">Monthly Payment</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-lg">
                    <p className="text-2xl font-bold text-secondary">P{totalPayment.toFixed(0)}</p>
                    <p className="text-sm text-muted-foreground">Total Payment</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Amount:</span>
                    <span className="font-medium">P{loanAmount[0].toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Interest:</span>
                    <span className="font-medium">P{totalInterest.toFixed(0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Term:</span>
                    <span className="font-medium">{loanTerm[0]} months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate:</span>
                    <span className="font-medium">{interestRate[0]}%</span>
                  </div>
                </div>

                {monthlyIncome && (
                  <div className="p-4 bg-info/10 border border-info/20 rounded-lg">
                    <p className="text-sm font-medium">Debt-to-Income Ratio</p>
                    <p className="text-2xl font-bold text-info">
                      {((monthlyPayment / parseFloat(monthlyIncome)) * 100).toFixed(1)}%
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {((monthlyPayment / parseFloat(monthlyIncome)) * 100) < 30 ? 
                        "Excellent! Well within recommended limits" : 
                        "Consider a lower loan amount or longer term"}
                    </p>
                  </div>
                )}

                <Button className="w-full" size="lg">
                  Apply for This Loan
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="types" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {loanTypes.map((loan, index) => (
              <Card key={index} className="shadow-financial hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{loan.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{loan.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Interest Rate</p>
                      <p className="font-medium">{loan.rate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Maximum Amount</p>
                      <p className="font-medium">{loan.maxAmount}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-muted-foreground">Repayment Term</p>
                      <p className="font-medium">{loan.term}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">Learn More</Button>
                    <Button size="sm" variant="outline" className="flex-1">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="eligibility" className="space-y-6">
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Loan Eligibility Checker</CardTitle>
              <p className="text-sm text-muted-foreground">Check if you qualify for FNB loans</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" type="number" placeholder="25" />
                </div>
                <div>
                  <Label htmlFor="employment">Employment Status</Label>
                  <select id="employment" className="w-full p-2 border rounded-md">
                    <option>Permanently Employed</option>
                    <option>Self Employed</option>
                    <option>Contract Worker</option>
                    <option>Unemployed</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="salary">Monthly Salary</Label>
                  <Input id="salary" type="number" placeholder="15000" />
                </div>
                <div>
                  <Label htmlFor="expenses">Monthly Expenses</Label>
                  <Input id="expenses" type="number" placeholder="8000" />
                </div>
                <div>
                  <Label htmlFor="credit-history">Credit History</Label>
                  <select id="credit-history" className="w-full p-2 border rounded-md">
                    <option>Excellent</option>
                    <option>Good</option>
                    <option>Fair</option>
                    <option>Poor</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="existing-loans">Existing Loans</Label>
                  <Input id="existing-loans" type="number" placeholder="0" />
                </div>
              </div>
              
              <Button className="w-full">Check Eligibility</Button>
              
              <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                <h3 className="font-medium text-success">Pre-qualification Requirements</h3>
                <ul className="text-sm mt-2 space-y-1 text-muted-foreground">
                  <li>• Be 18-65 years old</li>
                  <li>• Have a minimum monthly income of P3,000</li>
                  <li>• Be employed for at least 3 months</li>
                  <li>• Have a good credit record</li>
                  <li>• Provide proof of income and identity</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoanEstimator;
