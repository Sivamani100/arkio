import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const Team = () => {
  const founders = [
    {
      name: 'Sarah Johnson',
      role: 'Co-Founder & CEO',
      bio: 'Sarah brings over 15 years of experience in tech leadership and has been instrumental in scaling multiple successful startups. Her vision for TeamPortal emerged from her passion for building diverse, high-performing teams. With an MBA from Stanford and a background in computer science, she combines technical expertise with strategic business acumen. Sarah is committed to creating an inclusive workplace where innovation thrives and every team member can reach their full potential.',
      color: 'vibgyor-violet',
    },
    {
      name: 'Michael Chen',
      role: 'Co-Founder & CTO',
      bio: 'As our technical visionary, Michael has architected systems serving millions of users globally. His expertise in scalable architecture and emerging technologies has been crucial to our technical success. Before co-founding TeamPortal, Michael led engineering teams at top tech companies and contributed to several open-source projects. He holds a PhD in Computer Science and is passionate about mentoring the next generation of engineers. Michael believes in writing clean, maintainable code and building systems that stand the test of time.',
      color: 'vibgyor-blue',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Co-Founder & CPO',
      bio: 'Emily is a product design expert with a keen eye for user experience and a track record of launching successful products. Her human-centered approach to product development ensures that everything we build truly serves our users needs. With a background in design thinking and psychology, Emily bridges the gap between what users want and what technology can deliver. She has won multiple industry awards for her innovative designs and is a frequent speaker at design conferences worldwide.',
      color: 'vibgyor-green',
    },
    {
      name: 'David Kim',
      role: 'Co-Founder & COO',
      bio: 'David ensures our operations run smoothly and efficiently, bringing structure to our ambitious goals. His background in operations management and strategic planning has been invaluable in scaling our organization. Before TeamPortal, David optimized operations for Fortune 500 companies and startups alike. He is passionate about building sustainable systems and processes that enable growth without sacrificing quality. David also champions our commitment to social responsibility and environmental sustainability.',
      color: 'vibgyor-orange',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-vibgyor-violet/5 via-vibgyor-blue/5 to-vibgyor-indigo/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our <span className="text-vibgyor-blue">Founders</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The visionaries behind TeamPortal. Our founders bring decades of combined experience and a shared passion for building innovative solutions and exceptional teams.
              </p>
            </div>
          </div>
        </section>

        {/* Founders Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              {founders.map((founder, index) => (
                <Card
                  key={index}
                  className={`p-8 hover:shadow-lg transition-shadow ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Photo placeholder */}
                    <div
                      className={`bg-${founder.color}/10 rounded-[5px] aspect-square flex items-center justify-center`}
                    >
                      <div className="text-center">
                        <div className={`text-6xl font-bold text-${founder.color} mb-2`}>
                          {founder.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="text-sm text-muted-foreground">Photo</div>
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="md:col-span-2">
                      <h2 className="text-2xl font-bold mb-2">{founder.name}</h2>
                      <p className={`text-${founder.color} font-bold mb-4`}>{founder.role}</p>
                      <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Culture Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Our Team <span className="text-vibgyor-indigo">Culture</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  At TeamPortal, we've built a culture that celebrates diversity, encourages innovation, and supports continuous learning. Our founders have created an environment where every team member feels valued and empowered to contribute their unique perspectives and talents.
                </p>
                
                <p>
                  We believe that great teams are built on trust, transparency, and mutual respect. Regular team activities, open communication channels, and collaborative decision-making processes ensure that everyone has a voice. We celebrate successes together and learn from challenges as a united team.
                </p>
                
                <p>
                  Professional development is not just encouraged; it's actively supported through mentorship programs, learning budgets, and opportunities to work on cutting-edge projects. Our founders are committed to helping each team member grow their skills and advance their careers within the organization.
                </p>
                
                <p>
                  Work-life balance is a priority. We understand that our team members have lives outside of work, and we've implemented flexible working arrangements, generous time-off policies, and wellness programs to ensure everyone can perform at their best while maintaining a healthy lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Want to Work With <span className="text-vibgyor-blue">Our Team?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team. If you're passionate about innovation and want to work with inspiring leaders, we'd love to hear from you.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;