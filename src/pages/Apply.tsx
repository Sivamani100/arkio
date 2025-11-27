import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DocumentUpload, Profile, Call, Sms, Building, Location, Link as LinkIcon, Calendar, Book, Code, Award } from 'iconsax-react';

const Apply = () => {
  const { user, userRole, loading } = useAuth();
  const navigate = useNavigate();
  const [hasApplied, setHasApplied] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    full_name: '',
    phone_number: '',
    official_email: '',
    college_name: '',
    college_pin_code: '',
    linkedin_profile: '',
    graduation_year: '',
    field_of_study: '',
    current_semester: '',
    experience_level: 'beginner',
    skills: '',
  });

  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/auth');
        return;
      }
      
      if (userRole === 'admin') {
        navigate('/admin');
        return;
      }

      // Check if user has already applied
      supabase
        .from('applications')
        .select('id')
        .eq('user_id', user.id)
        .single()
        .then(({ data }) => {
          if (data) {
            setHasApplied(true);
          }
        });
    }
  }, [user, userRole, loading, navigate]);

  const uploadFile = async (file: File, bucket: string, folder: string) => {
    const fileExt = file.name.split('.').pop();
    // User ID must be the first folder for RLS policy to work
    const fileName = `${user!.id}/${folder}/${Date.now()}.${fileExt}`;
    
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(fileName, file, { upsert: true });

    if (error) throw error;
    return data.path;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Upload files
      let photoUrl = '';
      let resumeUrl = '';

      if (photoFile) {
        setUploading(true);
        photoUrl = await uploadFile(photoFile, 'profile-photos', 'photos');
      }

      if (resumeFile) {
        setUploading(true);
        resumeUrl = await uploadFile(resumeFile, 'resumes', 'resumes');
      }

      setUploading(false);

      // Verify user is authenticated before inserting
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user) {
        throw new Error('You must be logged in to submit an application');
      }

      // Create application
      const { error } = await supabase.from('applications').insert({
        user_id: session.user.id,
        full_name: formData.full_name,
        phone_number: formData.phone_number,
        official_email: formData.official_email,
        college_name: formData.college_name,
        college_pin_code: formData.college_pin_code,
        linkedin_profile: formData.linkedin_profile,
        graduation_year: parseInt(formData.graduation_year),
        field_of_study: formData.field_of_study,
        current_semester: formData.current_semester,
        experience_level: formData.experience_level,
        skills: formData.skills.split(',').map(s => s.trim()),
        photo_url: photoUrl,
        resume_url: resumeUrl,
      });

      if (error) throw error;

      toast.success('Application submitted successfully!');
      navigate('/');
    } catch (error: any) {
      console.error('Application error:', error);
      toast.error(error.message || 'Failed to submit application');
    } finally {
      setSubmitting(false);
      setUploading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (hasApplied) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16 flex items-center justify-center py-20">
          <Card className="max-w-md p-8 text-center">
            <div className="bg-vibgyor-green/10 w-20 h-20 rounded-[5px] flex items-center justify-center mx-auto mb-6">
              <Award size={40} className="text-vibgyor-green" variant="Bold" />
            </div>
            <h1 className="text-2xl font-bold mb-3">Application Already Submitted</h1>
            <p className="text-muted-foreground mb-6">
              You've already submitted your application. We'll review it and get back to you soon.
            </p>
            <Button onClick={() => navigate('/')}>Return to Home</Button>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Application <span className="text-vibgyor-blue">Form</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Complete the form below to submit your application. All fields marked with * are required.
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Profile size={24} className="text-vibgyor-violet" variant="Bold" />
                    Personal Information
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="full_name">Full Name *</Label>
                      <Input
                        id="full_name"
                        required
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone_number" className="flex items-center gap-2">
                          <Call size={16} variant="Bold" />
                          Phone Number *
                        </Label>
                        <Input
                          id="phone_number"
                          required
                          type="tel"
                          value={formData.phone_number}
                          onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                          placeholder="+1 234 567 8900"
                        />
                      </div>

                      <div>
                        <Label htmlFor="official_email" className="flex items-center gap-2">
                          <Sms size={16} variant="Bold" />
                          Official Email *
                        </Label>
                        <Input
                          id="official_email"
                          required
                          type="email"
                          value={formData.official_email}
                          onChange={(e) => setFormData({ ...formData, official_email: e.target.value })}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="photo">Profile Photo *</Label>
                      <Input
                        id="photo"
                        required
                        type="file"
                        accept="image/*"
                        onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
                      />
                    </div>
                  </div>
                </div>

                {/* Education Information */}
                <div className="pt-6 border-t">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Building size={24} className="text-vibgyor-blue" variant="Bold" />
                    Education Details
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="college_name">College/University Name *</Label>
                        <Input
                          id="college_name"
                          required
                          value={formData.college_name}
                          onChange={(e) => setFormData({ ...formData, college_name: e.target.value })}
                          placeholder="University of Example"
                        />
                      </div>

                      <div>
                        <Label htmlFor="college_pin_code" className="flex items-center gap-2">
                          <Location size={16} variant="Bold" />
                          College PIN Code *
                        </Label>
                        <Input
                          id="college_pin_code"
                          required
                          value={formData.college_pin_code}
                          onChange={(e) => setFormData({ ...formData, college_pin_code: e.target.value })}
                          placeholder="123456"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="graduation_year" className="flex items-center gap-2">
                          <Calendar size={16} variant="Bold" />
                          Graduation Year *
                        </Label>
                        <Input
                          id="graduation_year"
                          required
                          type="number"
                          min="2020"
                          max="2030"
                          value={formData.graduation_year}
                          onChange={(e) => setFormData({ ...formData, graduation_year: e.target.value })}
                          placeholder="2025"
                        />
                      </div>

                      <div>
                        <Label htmlFor="field_of_study" className="flex items-center gap-2">
                          <Book size={16} variant="Bold" />
                          Field of Study *
                        </Label>
                        <Input
                          id="field_of_study"
                          required
                          value={formData.field_of_study}
                          onChange={(e) => setFormData({ ...formData, field_of_study: e.target.value })}
                          placeholder="Computer Science"
                        />
                      </div>

                      <div>
                        <Label htmlFor="current_semester">Current Semester *</Label>
                        <Input
                          id="current_semester"
                          required
                          value={formData.current_semester}
                          onChange={(e) => setFormData({ ...formData, current_semester: e.target.value })}
                          placeholder="5th"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="pt-6 border-t">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Code size={24} className="text-vibgyor-green" variant="Bold" />
                    Professional Details
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="linkedin_profile" className="flex items-center gap-2">
                        <LinkIcon size={16} variant="Bold" />
                        LinkedIn Profile URL *
                      </Label>
                      <Input
                        id="linkedin_profile"
                        required
                        type="url"
                        value={formData.linkedin_profile}
                        onChange={(e) => setFormData({ ...formData, linkedin_profile: e.target.value })}
                        placeholder="https://linkedin.com/in/johndoe"
                      />
                    </div>

                    <div>
                      <Label htmlFor="skills">
                        <Code size={16} variant="Bold" className="inline mr-2" />
                        Skills (comma-separated) *
                      </Label>
                      <Input
                        id="skills"
                        required
                        value={formData.skills}
                        onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                        placeholder="JavaScript, React, Python, Design"
                      />
                    </div>

                    <div>
                      <Label htmlFor="experience_level">Experience Level *</Label>
                      <select
                        id="experience_level"
                        required
                        value={formData.experience_level}
                        onChange={(e) => setFormData({ ...formData, experience_level: e.target.value })}
                        className="w-full px-3 py-2 border border-input bg-background rounded-[5px]"
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="expert">Expert</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="resume" className="flex items-center gap-2">
                        <DocumentUpload size={16} variant="Bold" />
                        Resume (PDF) *
                      </Label>
                      <Input
                        id="resume"
                        required
                        type="file"
                        accept=".pdf"
                        onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting || uploading}
                    className="w-full bg-vibgyor-blue hover:bg-vibgyor-indigo text-white"
                  >
                    {uploading ? 'Uploading Files...' : submitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Apply;