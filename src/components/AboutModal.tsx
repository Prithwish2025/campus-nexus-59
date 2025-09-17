import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, BookOpen, Calendar, Award, Target } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-poppins text-center text-primary mb-4">
            About EduPortal
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Mission Statement */}
          <Card className="card-gradient">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-3 text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                EduPortal is designed to bridge the gap between students and teachers by providing 
                a comprehensive digital platform for educational management. We aim to streamline 
                academic processes, enhance communication, and improve the overall learning experience.
              </p>
            </CardContent>
          </Card>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-6 w-6 text-primary mr-3" />
                  <h4 className="font-semibold">For Students</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Submit assignments and projects</li>
                  <li>• Track attendance with color-coded indicators</li>
                  <li>• View academic marks and grades</li>
                  <li>• Access meeting schedules</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gradient">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Users className="h-6 w-6 text-primary mr-3" />
                  <h4 className="font-semibold">For Teachers</h4>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Manage student attendance</li>
                  <li>• Assign projects and homework</li>
                  <li>• Upload and track student marks</li>
                  <li>• Schedule and manage meetings</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <Card className="card-primary">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-center">Key Features</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h5 className="font-medium mb-1">Smart Analytics</h5>
                  <p className="text-sm text-muted-foreground">
                    Color-coded attendance tracking and performance metrics
                  </p>
                </div>
                <div className="text-center">
                  <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h5 className="font-medium mb-1">Schedule Management</h5>
                  <p className="text-sm text-muted-foreground">
                    Organized meeting schedules and deadline tracking
                  </p>
                </div>
                <div className="text-center">
                  <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h5 className="font-medium mb-1">Goal Oriented</h5>
                  <p className="text-sm text-muted-foreground">
                    Customizable thresholds and performance targets
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="card-gradient">
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
              <p className="text-muted-foreground mb-2">
                Have questions or need support? We're here to help!
              </p>
              <div className="flex justify-center space-x-4 text-sm">
                <span>📧 support@eduportal.com</span>
                <span>📞 +1-234-567-8900</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutModal;