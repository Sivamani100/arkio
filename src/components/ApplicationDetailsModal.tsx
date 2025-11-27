import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { DocumentDownload, Link as LinkIcon, User, Call, Sms, Building, Location, Calendar, Book, Layer, Cup, Award } from 'iconsax-react';

interface Application {
  id: string;
  full_name: string;
  phone_number: string;
  official_email: string;
  college_name: string;
  college_pin_code: string;
  photo_url: string | null;
  resume_url: string | null;
  linkedin_profile: string | null;
  graduation_year: number | null;
  field_of_study: string | null;
  current_semester: string | null;
  experience_level: string | null;
  skills: string[] | null;
  status: string | null;
  created_at: string | null;
}

interface ApplicationDetailsModalProps {
  application: Application | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ApplicationDetailsModal = ({ application, open, onOpenChange }: ApplicationDetailsModalProps) => {
  if (!application) return null;

  const statusColors: { [key: string]: string } = {
    pending: 'bg-yellow-500',
    accepted: 'bg-green-500',
    rejected: 'bg-red-500',
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <User size={24} className="text-primary" />
            Application Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Profile Section */}
          <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
            {application.photo_url && (
              <img
                src={application.photo_url}
                alt={application.full_name}
                className="w-24 h-24 rounded-lg object-cover border-2 border-primary"
              />
            )}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground">{application.full_name}</h3>
              <Badge className={`mt-2 ${statusColors[application.status || 'pending']}`}>
                {application.status || 'pending'}
              </Badge>
              {application.created_at && (
                <p className="text-sm text-muted-foreground mt-2">
                  Applied on {new Date(application.created_at).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>

          <Separator />

          {/* Contact Information */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Sms size={20} className="text-primary" />
              Contact Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-7">
              <div className="flex items-center gap-2">
                <Sms size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Email:</span>
                <a href={`mailto:${application.official_email}`} className="text-sm text-primary hover:underline">
                  {application.official_email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Call size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Phone:</span>
                <a href={`tel:${application.phone_number}`} className="text-sm text-primary hover:underline">
                  {application.phone_number}
                </a>
              </div>
            </div>
          </div>

          <Separator />

          {/* Education Details */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Building size={20} className="text-primary" />
              Education Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-7">
              <div>
                <p className="text-sm text-muted-foreground">College/University</p>
                <p className="font-medium">{application.college_name}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <Location size={14} />
                  PIN Code
                </p>
                <p className="font-medium">{application.college_pin_code}</p>
              </div>
              {application.field_of_study && (
                <div>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Book size={14} />
                    Field of Study
                  </p>
                  <p className="font-medium">{application.field_of_study}</p>
                </div>
              )}
              {application.current_semester && (
                <div>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Layer size={14} />
                    Current Semester
                  </p>
                  <p className="font-medium">{application.current_semester}</p>
                </div>
              )}
              {application.graduation_year && (
                <div>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Calendar size={14} />
                    Graduation Year
                  </p>
                  <p className="font-medium">{application.graduation_year}</p>
                </div>
              )}
              {application.experience_level && (
                <div>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Cup size={14} />
                    Experience Level
                  </p>
                  <p className="font-medium capitalize">{application.experience_level}</p>
                </div>
              )}
            </div>
          </div>

          {/* Skills */}
          {application.skills && application.skills.length > 0 && (
            <>
              <Separator />
              <div className="space-y-3">
                <h4 className="font-semibold text-lg flex items-center gap-2">
                  <Award size={20} className="text-primary" />
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2 ml-7">
                  {application.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}

          <Separator />

          {/* Documents & Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <DocumentDownload size={20} className="text-primary" />
              Documents & Links
            </h4>
            <div className="flex flex-wrap gap-3 ml-7">
              {application.resume_url && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(application.resume_url!, '_blank')}
                  className="flex items-center gap-2"
                >
                  <DocumentDownload size={16} />
                  Download Resume
                </Button>
              )}
              {application.linkedin_profile && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(application.linkedin_profile!, '_blank')}
                  className="flex items-center gap-2"
                >
                  <LinkIcon size={16} />
                  LinkedIn Profile
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationDetailsModal;
