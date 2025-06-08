
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your Masheleng AI assistant. I can help you navigate FNB services, answer financial questions, and guide you through our tools. How can I assist you today?',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('budget') || lowerMessage.includes('spend')) {
      return 'I can help you with budget planning! Visit our Budget Planner to set spending limits, track expenses, and get alerts when you\'re approaching your limits. Would you like me to guide you there?';
    }
    
    if (lowerMessage.includes('loan') || lowerMessage.includes('credit')) {
      return 'For loan information, I recommend using our Loan Estimator tool. It can help you calculate loan amounts, interest rates, and monthly payments. You can also check your credit score to see what rates you might qualify for.';
    }
    
    if (lowerMessage.includes('save') || lowerMessage.includes('goal')) {
      return 'Great! Setting financial goals is important. Use our Financial Goals tracker to set targets for savings, investments, or major purchases. I can help you create a plan to reach them faster!';
    }
    
    if (lowerMessage.includes('invest')) {
      return 'FNB offers various investment options including unit trusts, fixed deposits, and retirement annuities. Visit our Investments section for personalized recommendations based on your risk profile and income.';
    }
    
    return 'I understand you need help with that. You can explore our various financial tools in the sidebar, or I can connect you with a human advisor through our Support section. What specific area would you like help with?';
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
        size="icon"
      >
        💬
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-96 flex flex-col shadow-financial animate-fade-in">
      <div className="gradient-primary text-white p-4 rounded-t-lg flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Masheleng AI Assistant</h3>
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
            Online
          </Badge>
        </div>
        <Button
          onClick={() => setIsOpen(false)}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20"
        >
          ✕
        </Button>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  message.isBot
                    ? 'bg-secondary/10 text-foreground'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask me anything about FNB services..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="sm">
            Send
          </Button>
        </div>
      </div>
    </Card>
  );
};
