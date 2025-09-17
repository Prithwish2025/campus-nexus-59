import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Calendar, 
  Upload, 
  Award, 
  Clock,
  FileText,
  CheckCircle,
  AlertCircle,
  User,
  LogOut
} from 'lucide-react';
import AttendanceCard from './AttendanceCard';

interface StudentData {
  rollNo: string;
  name?: string;
}

interface StudentDashboardProps {
  studentData: StudentData;
  onLogout: () => void;
}

const StudentDashboard = ({ studentData, onLogout }: StudentDashboardProps) => {
  const [assignments] = useState([
    { id: 1, title: 'React Components Assignment', subject: 'Web Development', dueDate: '2025-01-20', status: 'pending', priority: 'high' },
    { id: 2, title: 'Database Design Project', subject: 'Database Systems', dueDate: '2025-01-25', status: 'submitted', priority: 'medium' },
    { id: 3, title: 'Algorithm Analysis', subject: 'DSA', dueDate: '2025-01-30', status: 'pending', priority: 'low' },
  ]);

  const [marks] = useState([
    { subject: 'Web Development', marks: 85, total: 100 },
    { subject: 'Database Systems', marks: 92, total: 100 },
    { subject: 'DSA', marks: 78, total: 100 },
    { subject: 'Mobile Development', marks: 88, total: 100 },
  ]);

  const [meetings] = useState([
    { id: 1, title: 'Project Review', date: '2025-01-18', time: '10:00 AM', teacher: 'Dr. Smith' },
    { id: 2, title: 'Career Guidance', date: '2025-01-22', time: '2:00 PM', teacher: 'Prof. Johnson' },
    { id: 3, title: 'Exam Discussion', date: '2025-01-25', time: '11:30 AM', teacher: 'Dr. Brown' },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-success text-success-foreground';
      case 'pending': return 'bg-warning text-warning-foreground';
      case 'overdue': return 'bg-danger text-danger-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-danger text-danger-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-success text-success-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
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
                <h1 className="text-2xl font-poppins font-bold">Student Dashboard</h1>
                <p className="opacity-90">Welcome back, {studentData.rollNo}!</p>
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
            {/* Assignments & Projects */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  Assignments & Projects
                </CardTitle>
                <CardDescription>Submit your work and track progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments.map((assignment) => (
                    <div key={assignment.id} className="flex items-center justify-between p-4 bg-background rounded-lg border">
                      <div className="flex-1">
                        <h4 className="font-medium">{assignment.title}</h4>
                        <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          Due: {assignment.dueDate}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge className={getPriorityColor(assignment.priority)}>
                          {assignment.priority}
                        </Badge>
                        <Badge className={getStatusColor(assignment.status)}>
                          {assignment.status === 'submitted' ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <AlertCircle className="h-3 w-3 mr-1" />
                          )}
                          {assignment.status}
                        </Badge>
                        {assignment.status === 'pending' && (
                          <Button size="sm" className="btn-hero">
                            <Upload className="h-3 w-3 mr-1" />
                            Submit
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Academic Performance */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Academic Performance
                </CardTitle>
                <CardDescription>Your marks and grades overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {marks.map((mark, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{mark.subject}</span>
                        <span className="text-sm font-semibold">{mark.marks}/{mark.total}</span>
                      </div>
                      <Progress 
                        value={(mark.marks / mark.total) * 100} 
                        className="h-2"
                      />
                      <div className="text-right text-xs text-muted-foreground">
                        {((mark.marks / mark.total) * 100).toFixed(1)}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Attendance Card */}
            <AttendanceCard 
              role="student"
              attendanceData={{
                present: 42,
                total: 50,
                percentage: 84
              }}
            />

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
                  {meetings.map((meeting) => (
                    <div key={meeting.id} className="p-3 bg-background rounded-lg border">
                      <h4 className="font-medium text-sm">{meeting.title}</h4>
                      <p className="text-xs text-muted-foreground">{meeting.teacher}</p>
                      <div className="flex items-center mt-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {meeting.date} at {meeting.time}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-primary">
              <CardHeader>
                <CardTitle className="text-sm">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="ghost">
                  <FileText className="h-4 w-4 mr-2" />
                  Download Syllabus
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Timetable
                </Button>
                <Button className="w-full justify-start" variant="ghost">
                  <Award className="h-4 w-4 mr-2" />
                  Grade Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;