import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

type Founder = {
  name: string;
  role: string;
  bio: string;
  color: string;
};

const Team = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [founders, setFounders] = useState<Founder[]>([]);

  useEffect(() => {
    // Simulate API fetch
    const fetchFounders = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/founders');
        // const data = await response.json();
        
        // Mock data
        const mockFounders: Founder[] = [
          {
            name: 'Sivamanikanta Mallipurapu',
            role: 'Co-Founder & CEO',
            bio: 'Sivamanikanta brings over 18 years of experience in tech leadership and has been instrumental in scaling multiple successful startups. His vision for TeamPortal emerged from his passion for building diverse, high-performing teams. With an MBA from Stanford and a background in computer science, he combines technical expertise with strategic business acumen.',
            color: 'vibgyor-violet',
          },
          {
            name: 'Shaik Gafur Anaruddin',
            role: 'Co-Founder & CTO',
            bio: 'As our technical visionary, Gafur has architected systems serving millions of users globally. His expertise in scalable architecture and emerging technologies has been crucial to our technical success. He holds a PhD in Computer Science and is passionate about mentoring the next generation of engineers.',
            color: 'vibgyor-blue',
          },
        ];
        
        setFounders(mockFounders);
        setIsLoading(false);
      } catch (err) {
        console.error('Failed to load team data:', err);
        setError('Failed to load team information. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchFounders();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-vibgyor-blue"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 max-w-md">
          <div className="text-red-500 text-4xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
          <p className="text-muted-foreground mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-vibgyor-blue text-white rounded-md hover:bg-vibgyor-blue/90 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-vibgyor-violet/5 via-vibgyor-blue/5 to-vibgyor-indigo/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Meet Our <span className="text-vibgyor-blue">Leadership</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                The visionaries behind our success. Our leaders bring decades of combined experience and a shared passion for building innovative solutions and exceptional teams.
              </p>
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Our <span className="text-vibgyor-indigo">Founders</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {founders.map((founder, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row h-full">
                    <div 
                      className={`w-full md:w-1/3 bg-${founder.color}/10 flex items-center justify-center p-6`}
                    >
                      <div className="text-center">
                        <div 
                          className={`text-5xl font-bold text-${founder.color} mb-2 transition-transform group-hover:scale-110`}
                        >
                          {founder.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {founder.role.split('&')[0].trim()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 p-6">
                      <h3 className="text-xl font-bold mb-2">{founder.name}</h3>
                      <p className={`text-sm font-medium text-${founder.color} mb-4`}>
                        {founder.role}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {founder.bio}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Our <span className="text-vibgyor-indigo">Core Values</span>
              </h2>
              <p className="text-muted-foreground">
                Guiding principles that shape our culture and drive our success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: 'Innovation',
                  description: 'We embrace creativity and continuously seek new ways to solve problems and improve our work.'
                },
                {
                  title: 'Integrity',
                  description: 'We conduct ourselves with honesty, transparency, and ethical behavior in all our interactions.'
                },
                {
                  title: 'Excellence',
                  description: 'We strive for the highest standards in everything we do, delivering quality and value.'
                },
                {
                  title: 'Collaboration',
                  description: 'We believe in the power of teamwork and diverse perspectives to achieve great results.'
                },
                {
                  title: 'Growth',
                  description: 'We are committed to continuous learning and personal development for all team members.'
                },
                {
                  title: 'Impact',
                  description: 'We focus on creating meaningful, positive change for our customers and communities.'
                }
              ].map((value, index) => (
                <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-vibgyor-violet/5 to-vibgyor-blue/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Join Our <span className="text-vibgyor-blue">Team</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                We're always looking for talented individuals who share our passion and values. If you're ready to make an impact, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/careers"
                  className="px-6 py-3 bg-vibgyor-blue text-white rounded-md hover:bg-vibgyor-blue/90 transition-colors"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="px-6 py-3 border border-vibgyor-blue text-vibgyor-blue rounded-md hover:bg-vibgyor-blue/5 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;