
import { useState } from 'react';
import { Lock, User, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface DoctorLoginProps {
  onLogin: () => void;
}

export const DoctorLogin = ({ onLogin }: DoctorLoginProps) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    twoFA: ''
  });
  const [showTwoFA, setShowTwoFA] = useState(false);
  const { toast } = useToast();

  const handleInitialLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate authentication check
    if (credentials.username === 'doctor' && credentials.password === 'password') {
      setShowTwoFA(true);
      toast({
        title: "2FA Code Sent",
        description: "Please check your mobile device for the authentication code.",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password.",
        variant: "destructive"
      });
    }
  };

  const handleTwoFASubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate 2FA verification
    if (credentials.twoFA === '123456') {
      toast({
        title: "Login Successful",
        description: "Welcome to the Harhour Emergency Dashboard.",
      });
      onLogin();
    } else {
      toast({
        title: "2FA Failed",
        description: "Invalid authentication code.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <CardTitle className="text-2xl">Doctor Portal</CardTitle>
          <CardDescription>
            Secure access to Harhour Emergency Dashboard
          </CardDescription>
        </CardHeader>

        <CardContent>
          {!showTwoFA ? (
            <form onSubmit={handleInitialLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="username"
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                    placeholder="Enter your username"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    placeholder="Enter your password"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                Login
              </Button>

              <div className="text-center text-sm text-gray-600">
                <p>Demo credentials: doctor / password</p>
              </div>
            </form>
          ) : (
            <form onSubmit={handleTwoFASubmit} className="space-y-4">
              <div>
                <Label htmlFor="twoFA">2FA Authentication Code</Label>
                <Input
                  id="twoFA"
                  type="text"
                  value={credentials.twoFA}
                  onChange={(e) => setCredentials({...credentials, twoFA: e.target.value})}
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Verify & Login
              </Button>

              <div className="text-center text-sm text-gray-600">
                <p>Demo 2FA code: 123456</p>
                <Button 
                  variant="link" 
                  onClick={() => setShowTwoFA(false)}
                  className="text-sm"
                >
                  Back to login
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
