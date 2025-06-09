
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Upload, User, Phone, CreditCard, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const Profile = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    idNumber: "",
    phoneNumber: "",
    profilePicture: null as File | null,
    idDocument: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (field: string, file: File | null) => {
    setProfileData(prev => ({
      ...prev,
      [field]: file
    }));
  };

  const validateForm = () => {
    const { idNumber, phoneNumber, profilePicture, idDocument } = profileData;
    
    if (!idNumber || idNumber.length !== 13) {
      toast.error("Please enter a valid 13-digit ID number");
      return false;
    }
    
    if (!phoneNumber || phoneNumber.length < 10) {
      toast.error("Please enter a valid phone number");
      return false;
    }
    
    if (!profilePicture) {
      toast.error("Please upload a profile picture");
      return false;
    }
    
    if (!idDocument) {
      toast.error("Please upload a copy of your ID document");
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate submission process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsVerified(true);
      toast.success("Profile submitted successfully! Verification in progress.");
    } catch (error) {
      toast.error("Failed to submit profile. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormComplete = profileData.idNumber && 
                        profileData.phoneNumber && 
                        profileData.profilePicture && 
                        profileData.idDocument;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Profile Management</h1>
        <p className="text-muted-foreground mt-2">
          Complete your profile to access all features and get verified
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Profile Overview Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Profile Overview
            </CardTitle>
            <CardDescription>
              Your current profile status
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                {profileData.profilePicture ? (
                  <AvatarImage 
                    src={URL.createObjectURL(profileData.profilePicture)} 
                    alt="Profile" 
                  />
                ) : (
                  <AvatarFallback>
                    <User className="h-8 w-8" />
                  </AvatarFallback>
                )}
              </Avatar>
              <div>
                <p className="font-medium">{user?.email}</p>
                <div className="flex items-center gap-2 mt-2">
                  {isVerified ? (
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  ) : (
                    <Badge variant="secondary">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      Pending Verification
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Profile Completion</span>
                <span className="text-sm font-medium">
                  {isFormComplete ? "100%" : "0%"}
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div 
                  className={`bg-primary h-2 rounded-full transition-all duration-300 ${
                    isFormComplete ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Form Card */}
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Complete your profile information for verification
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* ID Number */}
              <div className="space-y-2">
                <Label htmlFor="idNumber" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  ID Number
                </Label>
                <Input
                  id="idNumber"
                  type="text"
                  placeholder="1234567890123"
                  maxLength={13}
                  value={profileData.idNumber}
                  onChange={(e) => handleInputChange("idNumber", e.target.value)}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground">
                  Enter your 13-digit South African ID number
                </p>
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="0123456789"
                  value={profileData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Profile Picture Upload */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  Profile Picture
                </Label>
                <div className="flex items-center space-x-4">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange("profilePicture", e.target.files?.[0] || null)}
                    className="flex-1"
                  />
                  {profileData.profilePicture && (
                    <Badge variant="outline" className="text-green-600">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Uploaded
                    </Badge>
                  )}
                </div>
              </div>

              {/* ID Document Upload */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  ID Document
                </Label>
                <div className="flex items-center space-x-4">
                  <Input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => handleFileChange("idDocument", e.target.files?.[0] || null)}
                    className="flex-1"
                  />
                  {profileData.idDocument && (
                    <Badge variant="outline" className="text-green-600">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Uploaded
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Upload a clear copy of your ID document (front side)
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={!isFormComplete || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit for Verification"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Verification Process Card */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Verification Process</CardTitle>
          <CardDescription>
            What happens after you submit your information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                1
              </div>
              <div>
                <h4 className="font-medium">Submit Information</h4>
                <p className="text-sm text-muted-foreground">
                  Complete all required fields and upload documents
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                2
              </div>
              <div>
                <h4 className="font-medium">Review Process</h4>
                <p className="text-sm text-muted-foreground">
                  Our team will review your documents (1-3 business days)
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                3
              </div>
              <div>
                <h4 className="font-medium">Get Verified</h4>
                <p className="text-sm text-muted-foreground">
                  Receive verification status and unlock all features
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
