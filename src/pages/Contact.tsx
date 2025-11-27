import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Sms, Call, Location } from 'iconsax-react';

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (error) throw error;

      toast.success('Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('Contact form error:', error);
      toast.error(error.message || 'Failed to send message');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-vibgyor-green/5 via-vibgyor-blue/5 to-vibgyor-violet/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in <span className="text-vibgyor-blue">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions or want to learn more about joining our team? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Send Us a <span className="text-vibgyor-indigo">Message</span>
                </h2>
                
                <Card className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Sms size={16} variant="Bold" />
                        Your Email *
                      </Label>
                      <Input
                        id="email"
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="w-full bg-vibgyor-blue hover:bg-vibgyor-indigo text-white"
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Contact <span className="text-vibgyor-green">Information</span>
                </h2>
                
                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-vibgyor-blue/10 w-12 h-12 rounded-[5px] flex items-center justify-center flex-shrink-0">
                        <Sms size={24} className="text-vibgyor-blue" variant="Bold" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Email Us</h3>
                        <p className="text-muted-foreground">hello@teamportal.com</p>
                        <p className="text-muted-foreground">support@teamportal.com</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-vibgyor-green/10 w-12 h-12 rounded-[5px] flex items-center justify-center flex-shrink-0">
                        <Call size={24} className="text-vibgyor-green" variant="Bold" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Call Us</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-muted-foreground">Mon-Fri, 9AM-6PM EST</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-vibgyor-violet/10 w-12 h-12 rounded-[5px] flex items-center justify-center flex-shrink-0">
                        <Location size={24} className="text-vibgyor-violet" variant="Bold" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Visit Us</h3>
                        <p className="text-muted-foreground">123 Innovation Street</p>
                        <p className="text-muted-foreground">Tech City, TC 12345</p>
                        <p className="text-muted-foreground">United States</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Frequently Asked <span className="text-vibgyor-orange">Questions</span>
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-3">How long does the application process take?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our application review process typically takes 1-2 weeks. We carefully review each application to ensure we find the best fit for both the candidate and our team. You'll receive updates throughout the process.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-3">What should I include in my application?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Make sure to complete all required fields, upload a current resume, and provide accurate contact information. Highlighting relevant skills and experience that align with our values will strengthen your application.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-3">Can I apply for multiple positions?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You can submit one application through our portal. During the review process, we'll consider you for all positions that match your qualifications and interests.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-3">Do you offer remote work opportunities?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes! We support flexible work arrangements including remote, hybrid, and in-office options. Specific details depend on the role and team requirements.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;