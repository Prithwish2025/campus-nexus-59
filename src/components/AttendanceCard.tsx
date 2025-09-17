import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface AttendanceCardProps {
  role: 'student' | 'teacher';
  attendanceData: {
    present?: number;
    total?: number;
    percentage?: number;
    classAverage?: number;
    totalStudents?: number;
    threshold?: { low: number; moderate: number };
  };
}

const AttendanceCard = ({ role, attendanceData }: AttendanceCardProps) => {
  const getAttendanceStatus = (percentage: number, threshold?: { low: number; moderate: number }) => {
    if (!threshold) {
      // Default thresholds
      if (percentage < 75) return { color: 'attendance-low', icon: TrendingDown, label: 'Low' };
      if (percentage < 85) return { color: 'attendance-moderate', icon: Minus, label: 'Moderate' };
      return { color: 'attendance-good', icon: TrendingUp, label: 'Good' };
    }
    
    if (percentage < threshold.low) return { color: 'attendance-low', icon: TrendingDown, label: 'Low' };
    if (percentage < threshold.moderate) return { color: 'attendance-moderate', icon: Minus, label: 'Moderate' };
    return { color: 'attendance-good', icon: TrendingUp, label: 'Good' };
  };

  if (role === 'student') {
    const { present = 0, total = 0, percentage = 0 } = attendanceData;
    const status = getAttendanceStatus(percentage);
    const StatusIcon = status.icon;

    return (
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-primary" />
            Attendance Overview
          </CardTitle>
          <CardDescription>Your attendance tracking</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{percentage}%</div>
            <Badge className={status.color}>
              <StatusIcon className="h-3 w-3 mr-1" />
              {status.label}
            </Badge>
          </div>
          
          <Progress value={percentage} className="h-3" />
          
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Present: {present}/{total}</span>
            <span>Classes: {total}</span>
          </div>

          {/* Attendance Legend */}
          <div className="space-y-2 pt-2 border-t">
            <div className="text-xs font-medium text-muted-foreground mb-2">Status Guide:</div>
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-danger"></div>
                <span>Low (&lt;75%)</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-warning"></div>
                <span>Moderate (75-85%)</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span>Good (&gt;85%)</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Teacher view
  const { classAverage = 0, totalStudents = 0, threshold } = attendanceData;
  const status = getAttendanceStatus(classAverage, threshold);
  const StatusIcon = status.icon;

  return (
    <Card className="card-gradient">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="h-5 w-5 mr-2 text-primary" />
          Class Attendance
        </CardTitle>
        <CardDescription>Overall class performance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">{classAverage}%</div>
          <Badge className={status.color}>
            <StatusIcon className="h-3 w-3 mr-1" />
            Class {status.label}
          </Badge>
        </div>
        
        <Progress value={classAverage} className="h-3" />
        
        <div className="text-center text-sm text-muted-foreground">
          Total Students: {totalStudents}
        </div>

        {/* Threshold Display */}
        {threshold && (
          <div className="space-y-2 pt-2 border-t">
            <div className="text-xs font-medium text-muted-foreground mb-2">Current Thresholds:</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-danger"></div>
                <span>Low: &lt;{threshold.low}%</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-warning"></div>
                <span>Mod: {threshold.low}-{threshold.moderate}%</span>
              </div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span>Good: &gt;{threshold.moderate}%</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AttendanceCard;