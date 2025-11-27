import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, People, Award, Global } from 'iconsax-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/hooks/useAuth';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

const Landing = () => {
  const { user, userRole } = useAuth();
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    if (user && userRole === 'user') {
      supabase
        .from('applications')
        .select('id')
        .eq('user_id', user.id)
        .single()
        .then(({ data }) => {
          setHasApplied(!!data);
        });
    }
  }, [user, userRole]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-vibgyor-violet/5 via-vibgyor-blue/5 to-vibgyor-green/5" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Join Our <span className="text-vibgyor-blue">Innovative</span> Team
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Be part of a dynamic team that's shaping the future. We're looking for passionate individuals who want to make a real impact.
              </p>
              
              {user ? (
                userRole === 'user' ? (
                  hasApplied ? (
                    <div className="inline-block">
                      <Card className="p-6 bg-vibgyor-green/10 border-vibgyor-green">
                        <p className="text-lg font-bold text-vibgyor-green">
                          ✓ You've Already Applied
                        </p>
                        <p className="text-sm text-muted-foreground mt-2">
                          We'll review your application and get back to you soon.
                        </p>
                      </Card>
                    </div>
                  ) : (
                    <Link to="/apply">
                      <Button size="lg" className="bg-vibgyor-blue hover:bg-vibgyor-indigo text-white text-lg px-8 py-6">
                        Apply Now <ArrowRight className="ml-2" size={20} />
                      </Button>
                    </Link>
                  )
                ) : (
                  <Link to="/admin">
                    <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                      Go to Admin Dashboard
                    </Button>
                  </Link>
                )
              ) : (
                <Link to="/auth">
                  <Button size="lg" className="bg-vibgyor-blue hover:bg-vibgyor-indigo text-white text-lg px-8 py-6">
                    Get Started <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Join <span className="text-vibgyor-indigo">Our Team?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="bg-vibgyor-violet/10 w-16 h-16 rounded-[5px] flex items-center justify-center mb-6">
                  <People size={32} className="text-vibgyor-violet" variant="Bold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Collaborative Culture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Work with talented individuals from diverse backgrounds. Our collaborative environment fosters innovation and creativity, ensuring every voice is heard and valued.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="bg-vibgyor-blue/10 w-16 h-16 rounded-[5px] flex items-center justify-center mb-6">
                  <Award size={32} className="text-vibgyor-blue" variant="Bold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Continuous learning and professional development are at our core. We invest in your growth with mentorship programs, training, and opportunities to lead exciting projects.
                </p>
              </Card>

              <Card className="p-8 hover:shadow-lg transition-shadow">
                <div className="bg-vibgyor-green/10 w-16 h-16 rounded-[5px] flex items-center justify-center mb-6">
                  <Global size={32} className="text-vibgyor-green" variant="Bold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Impact</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Make a difference on a global scale. Our projects reach millions of users worldwide, and your contributions will help shape the future of our industry.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Simple <span className="text-vibgyor-orange">Application Process</span>
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {[
                  { step: 1, title: 'Create Account', desc: 'Sign up using your Google account - quick and secure.', color: 'vibgyor-violet' },
                  { step: 2, title: 'Fill Application', desc: 'Complete the application form with your details, resume, and relevant information.', color: 'vibgyor-blue' },
                  { step: 3, title: 'Submit & Wait', desc: 'Submit your application and our team will review it carefully.', color: 'vibgyor-green' },
                  { step: 4, title: 'Get Response', desc: "We'll reach out to promising candidates for the next steps.", color: 'vibgyor-orange' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 items-start">
                    <div className={`bg-${item.color}/10 text-${item.color} w-12 h-12 rounded-[5px] flex items-center justify-center font-bold text-xl flex-shrink-0`}>
                      {item.step}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;