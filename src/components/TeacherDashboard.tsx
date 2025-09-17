import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Calendar, 
  Upload, 
  Settings, 
  BookOpen,
  FileText,
  User,
  LogOut,
  Plus,
  Edit,
  BarChart3
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import AttendanceCard from './AttendanceCard';

interface TeacherData {
  name: string;
}

interface TeacherDashboardProps {
  teacherData: TeacherData;
  onLogout: () => void;
}

const TeacherDashboard = ({ teacherData, onLogout }: TeacherDashboardProps) => {
  const [attendanceThreshold, setAttendanceThreshold] = useState({ low: 75, moderate: 85 });
  const [selectedClass, setSelectedClass] = useState('CS-A');
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', dueDate: '', subject: '' });
  const { toast } = useToast();

  const [classes] = useState([
    { id: 'CS-A', name: 'Computer Science - Section A', students: 45 },
    { id: 'CS-B', name: 'Computer Science - Section B', students: 42 },
    { id: 'IT-A', name: 'Information Technology - Section A', students: 38 },
  ]);

  const [recentSubmissions] = useState([
    { student: 'John Doe (CS001)', assignment: 'React Project', submitted: '2025-01-15', status: 'pending' },
    { student: 'Jane Smith (CS002)', assignment: 'Database Design', submitted: '2025-01-14', status: 'graded' },
    { student: 'Mike Johnson (CS003)', assignment: 'Algorithm Analysis', submitted: '2025-01-13', status: 'pending' },
  ]);

  const [upcomingMeetings] = useState([
    { id: 1, title: 'Parent-Teacher Conference', date: '2025-01-20', time: '2:00 PM' },
    { id: 2, title: 'Faculty Meeting', date: '2025-01-22', time: '10:00 AM' },
    { id: 3, title: 'Project Review Session', date: '2025-01-25', time: '11:00 AM' },
  ]);

  const handleThresholdUpdate = () => {
    toast({
      title: "Settings Updated",
      description: "Attendance thresholds have been updated successfully.",
    });
  };

  const handleCreateAssignment = () => {
    if (!newAssignment.title || !newAssignment.dueDate) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Assignment Created",
      description: `Assignment "${newAssignment.title}" has been created successfully.`,
    });

    setNewAssignment({ title: '', description: '', dueDate: '', subject: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <User className="h-8 w-8" />
              <div>
                <h1 className="text-2xl font-poppins font-bold">Teacher Dashboard</h1>
                <p className="opacity-90">Welcome, {teacherData.name}!</p>
              </div>
            </div>
            <Button 
              onClick={onLogout}
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Class Management */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Class Management
                </CardTitle>
                <CardDescription>Manage your classes and students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Label htmlFor="class-select">Select Class:</Label>
                    <select 
                      id="class-select"
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                      className="px-3 py-1 border rounded-md bg-background"
                    >
                      {classes.map((cls) => (
                        <option key={cls.id} value={cls.id}>
                          {cls.name} ({cls.students} students)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button className="btn-hero h-20 flex-col space-y-2">
                      <Upload className="h-6 w-6" />
                      Upload Attendance
                    </Button>
                    <Button className="btn-success h-20 flex-col space-y-2">
                      <Edit className="h-6 w-6" />
                      Grade Assignments
                    </Button>
                    <Button className="btn-warning h-20 flex-col space-y-2">
                      <BarChart3 className="h-6 w-6" />
                      View Reports
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Create Assignment */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  Create New Assignment
                </CardTitle>
                <CardDescription>Assign work to your students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="assignment-title">Assignment Title *</Label>
                    <Input
                      id="assignment-title"
                      value={newAssignment.title}
                      onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
                      placeholder="Enter assignment title"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assignment-subject">Subject</Label>
                    <Input
                      id="assignment-subject"
                      value={newAssignment.subject}
                      onChange={(e) => setNewAssignment({ ...newAssignment, subject: e.target.value })}
                      placeholder="Subject name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assignment-due">Due Date *</Label>
                    <Input
                      id="assignment-due"
                      type="date"
                      value={newAssignment.dueDate}
                      onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
                    />
                  </div>
                  <div className="flex items-end">
                    <Button onClick={handleCreateAssignment} className="btn-hero w-full">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Assignment
                    </Button>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="assignment-desc">Description</Label>
                    <Textarea
                      id="assignment-desc"
                      value={newAssignment.description}
                      onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
                      placeholder="Assignment description and requirements"
                      rows={3}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Submissions */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Recent Submissions
                </CardTitle>
                <CardDescription>Review and grade student work</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentSubmissions.map((submission, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg border">
                      <div>
                        <h4 className="font-medium text-sm">{submission.student}</h4>
                        <p className="text-xs text-muted-foreground">{submission.assignment}</p>
                        <p className="text-xs text-muted-foreground">Submitted: {submission.submitted}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={submission.status === 'graded' ? 'btn-success' : 'bg-warning text-warning-foreground'}>
                          {submission.status}
                        </Badge>
                        {submission.status === 'pending' && (
                          <Button size="sm" className="btn-hero">
                            Grade
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Attendance Overview */}
            <AttendanceCard 
              role="teacher"
              attendanceData={{
                classAverage: 82,
                totalStudents: 45,
                threshold: attendanceThreshold
              }}
            />

            {/* Attendance Settings */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-primary" />
                  Attendance Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="low-threshold">Low Threshold (%)</Label>
                  <Input
                    id="low-threshold"
                    type="number"
                    value={attendanceThreshold.low}
                    onChange={(e) => setAttendanceThreshold({ 
                      ...attendanceThreshold, 
                      low: parseInt(e.target.value) 
                    })}
                    min="0"
                    max="100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="moderate-threshold">Moderate Threshold (%)</Label>
                  <Input
                    id="moderate-threshold"
                    type="number"
                    value={attendanceThreshold.moderate}
                    onChange={(e) => setAttendanceThreshold({ 
                      ...attendanceThreshold, 
                      moderate: parseInt(e.target.value) 
                    })}
                    min="0"
                    max="100"
                  />
                </div>
                <Button onClick={handleThresholdUpdate} className="btn-hero w-full">
                  Update Settings
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Meetings */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Upcoming Meetings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingMeetings.map((meeting) => (
                    <div key={meeting.id} className="p-3 bg-background rounded-lg border">
                      <h4 className="font-medium text-sm">{meeting.title}</h4>
                      <div className="flex items-center mt-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {meeting.date} at {meeting.time}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;