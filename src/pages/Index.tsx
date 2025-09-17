import { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import StudentDashboard from '@/components/StudentDashboard';
import TeacherDashboard from '@/components/TeacherDashboard';

interface User {
  role: 'student' | 'teacher';
  data: any;
}

const Index = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const handleLogin = (role: 'student' | 'teacher', data: any) => {
    setCurrentUser({ role, data });
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  // Show appropriate dashboard based on user role
  if (currentUser) {
    if (currentUser.role === 'student') {
      return (
        <StudentDashboard 
          studentData={currentUser.data}
          onLogout={handleLogout}
        />
      );
    } else if (currentUser.role === 'teacher') {
      return (
        <TeacherDashboard 
          teacherData={currentUser.data}
          onLogout={handleLogout}
        />
      );
    }
  }

  // Show landing page if not logged in
  return <LandingPage onLogin={handleLogin} />;
};

export default Index;
