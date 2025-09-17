import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { UserCheck, GraduationCap, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (role: 'student' | 'teacher', data: any) => void;
}

const LoginModal = ({ isOpen, onClose, onLogin }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [studentData, setStudentData] = useState({ rollNo: '', password: '' });
  const [teacherData, setTeacherData] = useState({ name: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleStudentLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentData.rollNo || !studentData.password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      onLogin('student', { rollNo: studentData.rollNo, encrypted: btoa(studentData.password) });
      setIsLoading(false);
      onClose();
      toast({
        title: "Welcome Student!",
        description: `Successfully logged in as ${studentData.rollNo}`,
      });
    }, 1000);
  };

  const handleTeacherLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!teacherData.name || !teacherData.password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      onLogin('teacher', { name: teacherData.name, encrypted: btoa(teacherData.password) });
      setIsLoading(false);
      onClose();
      toast({
        title: "Welcome Teacher!",
        description: `Successfully logged in as ${teacherData.name}`,
      });
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-poppins text-center">Login to EduPortal</DialogTitle>
        </DialogHeader>
        
        <Tabs defaultValue="student" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="student" className="flex items-center space-x-2">
              <GraduationCap className="h-4 w-4" />
              <span>Student</span>
            </TabsTrigger>
            <TabsTrigger value="teacher" className="flex items-center space-x-2">
              <UserCheck className="h-4 w-4" />
              <span>Teacher</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="student">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Student Login</CardTitle>
                <CardDescription>Enter your roll number and password</CardDescription>
                <div className="mt-2 p-2 bg-primary-light/20 rounded-lg border border-primary/20">
                  <p className="text-xs font-medium text-primary mb-1">Demo Credentials:</p>
                  <p className="text-xs text-muted-foreground">Roll No: <span className="font-mono">CS001</span> | Password: <span className="font-mono">student123</span></p>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleStudentLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="rollNo">Roll Number</Label>
                    <Input
                      id="rollNo"
                      type="text"
                      placeholder="Enter your roll number"
                      value={studentData.rollNo}
                      onChange={(e) => setStudentData({ ...studentData, rollNo: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="studentPassword">Password</Label>
                    <div className="relative">
                      <Input
                        id="studentPassword"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={studentData.password}
                        onChange={(e) => setStudentData({ ...studentData, password: e.target.value })}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <Button type="submit" disabled={isLoading} className="w-full btn-hero">
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teacher">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Teacher Login</CardTitle>
                <CardDescription>Enter your name and password</CardDescription>
                <div className="mt-2 p-2 bg-success-light/20 rounded-lg border border-success/20">
                  <p className="text-xs font-medium text-success mb-1">Demo Credentials:</p>
                  <p className="text-xs text-muted-foreground">Name: <span className="font-mono">Dr. Sarah Johnson</span> | Password: <span className="font-mono">teacher123</span></p>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTeacherLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="teacherName">Full Name</Label>
                    <Input
                      id="teacherName"
                      type="text"
                      placeholder="Enter your full name"
                      value={teacherData.name}
                      onChange={(e) => setTeacherData({ ...teacherData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teacherPassword">Password</Label>
                    <div className="relative">
                      <Input
                        id="teacherPassword"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={teacherData.password}
                        onChange={(e) => setTeacherData({ ...teacherData, password: e.target.value })}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                  <Button type="submit" disabled={isLoading} className="w-full btn-hero">
                    {isLoading ? 'Signing in...' : 'Sign In'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;