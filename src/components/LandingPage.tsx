import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Users, 
  Calendar, 
  Award, 
  Target, 
  CheckCircle,
  GraduationCap,
  BarChart3,
  FileText,
  Clock
} from 'lucide-react';
import Navigation from './Navigation';
import LoginModal from './LoginModal';
import AboutModal from './AboutModal';

interface LandingPageProps {
  onLogin: (role: 'student' | 'teacher', data: any) => void;
}

const LandingPage = ({ onLogin }: LandingPageProps) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const features = [
    {
      icon: BookOpen,
      title: 'Assignment Management',
      description: 'Submit and manage assignments with deadline tracking'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Color-coded attendance tracking with customizable thresholds'
    },
    {
      icon: Calendar,
      title: 'Schedule Management',
      description: 'Organize meetings and track important academic events'
    },
    {
      icon: Award,
      title: 'Grade Tracking',
      description: 'Monitor academic performance and progress over time'
    },
    {
      icon: Users,
      title: 'Class Management',
      description: 'Efficient tools for teachers to manage their classes'
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Set and track academic goals with performance metrics'
    }
  ];

  const benefits = [
    'Streamlined academic workflow',
    'Real-time attendance monitoring',
    'Efficient assignment submission',
    'Comprehensive grade tracking',
    'Meeting schedule management',
    'Customizable performance thresholds'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        onLoginClick={() => setShowLoginModal(true)}
        onAboutClick={() => setShowAboutModal(true)}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <GraduationCap className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-poppins font-bold text-primary mb-6">
              Welcome to EduPortal
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Your comprehensive digital platform for educational management.<br />
              Connecting students and teachers for a better learning experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowLoginModal(true)}
                size="lg"
                className="btn-hero px-8 py-4 text-lg font-semibold"
              >
                Get Started
              </Button>
              <Button 
                onClick={() => setShowAboutModal(true)}
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-4">
              Powerful Features for Modern Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage academic activities efficiently and effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-gradient hover:shadow-lg transition-all duration-300 animate-slide-in-right">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 mr-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-6">
                Why Choose EduPortal?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our platform is designed with both students and teachers in mind, 
                providing intuitive tools that make academic management seamless and efficient.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="card-primary p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">1000+</h3>
                <p className="text-muted-foreground">Active Users</p>
              </Card>
              <Card className="card-primary p-6 text-center">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground">Institutions</p>
              </Card>
              <Card className="card-primary p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">95%</h3>
                <p className="text-muted-foreground">Satisfaction Rate</p>
              </Card>
              <Card className="card-primary p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-primary mb-2">24/7</h3>
                <p className="text-muted-foreground">Support</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Ready to Transform Your Educational Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students and teachers already using EduPortal
          </p>
          <Button 
            onClick={() => setShowLoginModal(true)}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold"
          >
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 bg-secondary border-t">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="text-2xl font-poppins font-bold text-primary">EduPortal</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Empowering education through technology. Connect, learn, and grow with our 
                comprehensive student-teacher management platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>📧 support@eduportal.com</li>
                <li>📞 +1-234-567-8900</li>
                <li>📍 Education District, Learning City</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 EduPortal. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={onLogin}
      />
      
      <AboutModal 
        isOpen={showAboutModal}
        onClose={() => setShowAboutModal(false)}
      />
    </div>
  );
};

export default LandingPage;