
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const { toast } = useToast();
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support Request Submitted",
      description: "We'll get back to you within 24 hours.",
    });
    setSupportForm({ name: '', email: '', subject: '', message: '', priority: 'medium' });
  };

  const faqItems = [
    {
      question: "How do I set up budget alerts?",
      answer: "Go to Budget Planner, click on any category, and set your alert threshold. You'll receive notifications when you're approaching your limit.",
      category: "Budgeting"
    },
    {
      question: "Why is my credit score not updating?",
      answer: "Credit scores are typically updated monthly. If it's been more than 30 days, please contact support for a manual refresh.",
      category: "Credit"
    },
    {
      question: "How do I link my FNB account?",
      answer: "Use your FNB online banking credentials to securely link your account. We use bank-level encryption to protect your data.",
      category: "Account"
    },
    {
      question: "Can I export my financial data?",
      answer: "Yes! Go to Settings > Data Export to download your financial data in CSV or PDF format.",
      category: "Data"
    },
    {
      question: "How accurate are the investment recommendations?",
      answer: "Our recommendations are based on your income, risk profile, and market analysis. Always consult with a financial advisor for personalized advice.",
      category: "Investments"
    },
    {
      question: "Is my financial data secure?",
      answer: "Absolutely. We use bank-level encryption and never store your banking passwords. Your data is protected by the same security standards as FNB.",
      category: "Security"
    }
  ];

  const contactOptions = [
    {
      method: "Live Chat",
      availability: "24/7",
      responseTime: "Immediate",
      description: "Chat with our AI assistant for quick answers",
      action: "Start Chat"
    },
    {
      method: "Phone Support",
      availability: "8 AM - 6 PM",
      responseTime: "Immediate",
      description: "Speak directly with a financial advisor",
      action: "Call Now"
    },
    {
      method: "Email Support",
      availability: "24/7",
      responseTime: "24 hours",
      description: "Detailed support for complex issues",
      action: "Send Email"
    },
    {
      method: "Video Call",
      availability: "By Appointment",
      responseTime: "Same day",
      description: "Screen sharing for technical assistance",
      action: "Schedule"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Support Center</h1>
          <p className="text-muted-foreground">Get help with Masheleng and FNB services</p>
        </div>
        <Button className="bg-success hover:bg-success/90">
          Emergency Support
        </Button>
      </div>

      <Tabs defaultValue="help" className="space-y-6">
        <TabsList>
          <TabsTrigger value="help">Get Help</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
          <TabsTrigger value="status">System Status</TabsTrigger>
        </TabsList>

        <TabsContent value="help" className="space-y-6">
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="shadow-financial cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">🤖</div>
                <h3 className="font-semibold mb-2">AI Assistant</h3>
                <p className="text-sm text-muted-foreground mb-4">Get instant answers to common questions</p>
                <Button className="w-full">Chat Now</Button>
              </CardContent>
            </Card>

            <Card className="shadow-financial cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">👨‍💼</div>
                <h3 className="font-semibold mb-2">Financial Advisor</h3>
                <p className="text-sm text-muted-foreground mb-4">Speak with a human expert</p>
                <Button className="w-full" variant="secondary">Book Call</Button>
              </CardContent>
            </Card>

            <Card className="shadow-financial cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="font-semibold mb-2">Help Center</h3>
                <p className="text-sm text-muted-foreground mb-4">Browse guides and tutorials</p>
                <Button className="w-full" variant="outline">Browse</Button>
              </CardContent>
            </Card>
          </div>

          {/* Support Form */}
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Submit Support Request</CardTitle>
              <p className="text-sm text-muted-foreground">Describe your issue and we'll help you resolve it</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={supportForm.name}
                      onChange={(e) => setSupportForm({...supportForm, name: e.target.value})}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={supportForm.email}
                      onChange={(e) => setSupportForm({...supportForm, email: e.target.value})}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={supportForm.subject}
                      onChange={(e) => setSupportForm({...supportForm, subject: e.target.value})}
                      placeholder="Brief description of your issue"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="priority">Priority</Label>
                    <select 
                      id="priority"
                      className="w-full p-2 border rounded-md"
                      value={supportForm.priority}
                      onChange={(e) => setSupportForm({...supportForm, priority: e.target.value})}
                    >
                      <option value="low">Low - General question</option>
                      <option value="medium">Medium - Account issue</option>
                      <option value="high">High - Urgent problem</option>
                      <option value="critical">Critical - Security concern</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={supportForm.message}
                    onChange={(e) => setSupportForm({...supportForm, message: e.target.value})}
                    placeholder="Please provide detailed information about your issue..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full md:w-auto">
                  Submit Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="faq" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {['All', 'Account', 'Budgeting', 'Credit', 'Investments', 'Security'].map((category) => (
              <Button key={category} variant="outline" size="sm">
                {category}
              </Button>
            ))}
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="shadow-financial">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold">{item.question}</h3>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="ghost">👍 Helpful</Button>
                    <Button size="sm" variant="ghost">👎 Not helpful</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactOptions.map((option, index) => (
              <Card key={index} className="shadow-financial hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{option.method}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Availability:</span>
                      <span className="text-sm font-medium">{option.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Response Time:</span>
                      <span className="text-sm font-medium">{option.responseTime}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">{option.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emergency Contact */}
          <Card className="shadow-financial border-destructive/20">
            <CardHeader>
              <CardTitle className="text-destructive">Emergency Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                For urgent security issues, fraud alerts, or account lockouts, contact us immediately:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <h3 className="font-medium">24/7 Emergency Hotline</h3>
                  <p className="text-lg font-bold text-destructive">+267 390 0000</p>
                  <p className="text-xs text-muted-foreground">For fraud and security issues</p>
                </div>
                
                <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                  <h3 className="font-medium">WhatsApp Support</h3>
                  <p className="text-lg font-bold text-warning">+267 71 234 567</p>
                  <p className="text-xs text-muted-foreground">Quick assistance via messaging</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="status" className="space-y-6">
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <p className="text-sm text-muted-foreground">Current status of Masheleng services</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Core Banking Services</p>
                    <p className="text-sm text-muted-foreground">Account data and transactions</p>
                  </div>
                  <Badge className="bg-success/10 text-success">Operational</Badge>
                </div>
                
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Budget & Analytics</p>
                    <p className="text-sm text-muted-foreground">Spending analysis and insights</p>
                  </div>
                  <Badge className="bg-success/10 text-success">Operational</Badge>
                </div>
                
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Credit Score Updates</p>
                    <p className="text-sm text-muted-foreground">Credit monitoring and reports</p>
                  </div>
                  <Badge className="bg-warning/10 text-warning">Maintenance</Badge>
                </div>
                
                <div className="flex justify-between items-center p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Mobile App</p>
                    <p className="text-sm text-muted-foreground">iOS and Android applications</p>
                  </div>
                  <Badge className="bg-success/10 text-success">Operational</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Updates */}
          <Card className="shadow-financial">
            <CardHeader>
              <CardTitle>Recent Updates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 border-l-4 border-primary pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">New Investment Tools Released</p>
                      <p className="text-sm text-muted-foreground">Enhanced portfolio tracking and recommendations</p>
                    </div>
                    <span className="text-xs text-muted-foreground">2 hours ago</span>
                  </div>
                </div>
                
                <div className="p-3 border-l-4 border-info pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Scheduled Maintenance Complete</p>
                      <p className="text-sm text-muted-foreground">All systems running smoothly</p>
                    </div>
                    <span className="text-xs text-muted-foreground">1 day ago</span>
                  </div>
                </div>
                
                <div className="p-3 border-l-4 border-success pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">Security Enhancement Update</p>
                      <p className="text-sm text-muted-foreground">Improved fraud detection algorithms</p>
                    </div>
                    <span className="text-xs text-muted-foreground">3 days ago</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Support;
