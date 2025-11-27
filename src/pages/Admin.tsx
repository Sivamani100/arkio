import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApplicationDetailsModal from '@/components/ApplicationDetailsModal';
import { Eye, TickCircle, CloseCircle, MessageText } from 'iconsax-react';
import { toast } from 'sonner';

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

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  status: string | null;
  created_at: string | null;
}

const Admin = () => {
  const { user, userRole, loading } = useAuth();
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!user || userRole !== 'admin') {
        navigate('/');
        return;
      }
      loadData();
    }
  }, [user, userRole, loading, navigate]);

  const loadData = async () => {
    try {
      const [appsResult, contactsResult] = await Promise.all([
        supabase.from('applications').select('*').order('created_at', { ascending: false }),
        supabase.from('contact_submissions').select('*').order('created_at', { ascending: false }),
      ]);

      if (appsResult.data) setApplications(appsResult.data);
      if (contactsResult.data) setContacts(contactsResult.data);
    } catch (error) {
      console.error('Error loading data:', error);
      toast.error('Failed to load data');
    } finally {
      setLoadingData(false);
    }
  };

  const updateApplicationStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('applications')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      setApplications(applications.map(app => 
        app.id === id ? { ...app, status } : app
      ));
      toast.success(`Application ${status}`);
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const markContactAsRead = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status: 'read' })
        .eq('id', id);

      if (error) throw error;

      setContacts(contacts.map(contact => 
        contact.id === id ? { ...contact, status: 'read' } : contact
      ));
      toast.success('Marked as read');
    } catch (error) {
      console.error('Error marking as read:', error);
      toast.error('Failed to mark as read');
    }
  };

  if (loading || loadingData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-16 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-foreground">
            Admin <span className="text-vibgyor-blue">Dashboard</span>
          </h1>

          <Tabs defaultValue="applications" className="space-y-6">
            <TabsList className="bg-card">
              <TabsTrigger value="applications">
                Applications ({applications.length})
              </TabsTrigger>
              <TabsTrigger value="contacts">
                Contact Submissions ({contacts.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="applications" className="space-y-4">
              {applications.length === 0 ? (
                <Card className="p-8 text-center text-muted-foreground bg-card">
                  No applications yet
                </Card>
              ) : (
                applications.map((app) => (
                  <Card key={app.id} className="p-4 bg-card border-border hover:border-vibgyor-blue transition-colors">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-foreground">{app.full_name}</h3>
                        <p className="text-sm text-muted-foreground">{app.official_email}</p>
                        <p className="text-sm text-muted-foreground">{app.college_name}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge 
                            variant={
                              app.status === 'accepted' ? 'default' : 
                              app.status === 'rejected' ? 'destructive' : 
                              'secondary'
                            }
                            className={
                              app.status === 'accepted' ? 'bg-vibgyor-green' :
                              app.status === 'rejected' ? 'bg-vibgyor-red' :
                              'bg-vibgyor-yellow text-foreground'
                            }
                          >
                            {app.status || 'pending'}
                          </Badge>
                          {app.created_at && (
                            <span className="text-xs text-muted-foreground">
                              {new Date(app.created_at).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedApplication(app);
                            setDetailsModalOpen(true);
                          }}
                          className="flex items-center gap-2 border-vibgyor-blue text-vibgyor-blue hover:bg-vibgyor-blue hover:text-white"
                        >
                          <Eye size={16} />
                          View Details
                        </Button>
                        {app.status !== 'accepted' && (
                          <Button
                            size="sm"
                            onClick={() => updateApplicationStatus(app.id, 'accepted')}
                            className="flex items-center gap-2 bg-vibgyor-green hover:bg-vibgyor-green/90"
                          >
                            <TickCircle size={16} />
                            Accept
                          </Button>
                        )}
                        {app.status !== 'rejected' && (
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => updateApplicationStatus(app.id, 'rejected')}
                            className="flex items-center gap-2 bg-vibgyor-red hover:bg-vibgyor-red/90"
                          >
                            <CloseCircle size={16} />
                            Reject
                          </Button>
                        )}
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </TabsContent>

            <TabsContent value="contacts" className="space-y-4">
              {contacts.length === 0 ? (
                <Card className="p-8 text-center text-muted-foreground bg-card">
                  No contact submissions yet
                </Card>
              ) : (
                contacts.map((contact) => (
                  <Card key={contact.id} className="p-4 bg-card border-border hover:border-vibgyor-green transition-colors">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <MessageText size={20} className="text-vibgyor-blue" />
                          <h3 className="font-semibold text-lg text-foreground">{contact.name}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">{contact.email}</p>
                        {contact.subject && (
                          <p className="text-sm font-medium mt-1 text-foreground">{contact.subject}</p>
                        )}
                        <p className="text-sm mt-2 text-muted-foreground">{contact.message}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge 
                            variant={contact.status === 'read' ? 'default' : 'secondary'}
                            className={contact.status === 'read' ? 'bg-vibgyor-green' : 'bg-vibgyor-yellow text-foreground'}
                          >
                            {contact.status || 'unread'}
                          </Badge>
                          {contact.created_at && (
                            <span className="text-xs text-muted-foreground">
                              {new Date(contact.created_at).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </div>
                      <Button
                        size="sm"
                        onClick={() => markContactAsRead(contact.id)}
                        disabled={contact.status === 'read'}
                        className="flex items-center gap-2 bg-vibgyor-green hover:bg-vibgyor-green/90"
                      >
                        <TickCircle size={16} />
                        Mark as Read
                      </Button>
                    </div>
                  </Card>
                ))
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
      
      <ApplicationDetailsModal
        application={selectedApplication}
        open={detailsModalOpen}
        onOpenChange={setDetailsModalOpen}
      />
    </div>
  );
};

export default Admin;
