import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Award, People, TrendUp, Star } from 'iconsax-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-vibgyor-violet/5 via-vibgyor-blue/5 to-vibgyor-indigo/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-vibgyor-blue">TeamPortal</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are a forward-thinking organization dedicated to building innovative solutions that make a real difference in people's lives. Our mission is to bring together talented individuals who share our vision of creating meaningful impact through technology and collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Our <span className="text-vibgyor-indigo">Story</span>
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded with a vision to revolutionize the industry, TeamPortal began as a small group of passionate individuals who believed in the power of innovation. Over the years, we've grown into a dynamic organization that continues to push boundaries and set new standards in our field.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our journey has been marked by continuous learning, adaptation, and growth. We've successfully completed numerous projects, partnered with leading organizations, and most importantly, built a culture that values creativity, collaboration, and continuous improvement. Every member of our team plays a crucial role in our success story.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Today, we stand as a testament to what can be achieved when talented people come together with a shared purpose. We're not just building products; we're building relationships, careers, and a better future. Our commitment to excellence drives everything we do, from the projects we undertake to the team members we welcome aboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Core <span className="text-vibgyor-green">Values</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-vibgyor-violet/10 w-14 h-14 rounded-[5px] flex items-center justify-center mb-4">
                  <Award size={28} className="text-vibgyor-violet" variant="Bold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We strive for excellence in everything we do, setting high standards and consistently delivering quality results that exceed expectations.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-vibgyor-blue/10 w-14 h-14 rounded-[5px] flex items-center justify-center mb-4">
                  <People size={28} className="text-vibgyor-blue" variant="Bold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Teamwork is at our core. We believe in the power of diverse perspectives coming together to create innovative solutions.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-vibgyor-green/10 w-14 h-14 rounded-[5px] flex items-center justify-center mb-4">
                  <TrendUp size={28} className="text-vibgyor-green" variant="Bold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We embrace change and constantly seek new ways to improve. Innovation is not just encouraged; it's expected from every team member.
                </p>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="bg-vibgyor-orange/10 w-14 h-14 rounded-[5px] flex items-center justify-center mb-4">
                  <Star size={28} className="text-vibgyor-orange" variant="Bold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain the highest ethical standards in all our interactions, building trust through transparency and accountability.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                What <span className="text-vibgyor-yellow">We Do</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  At TeamPortal, we specialize in creating cutting-edge solutions that address real-world challenges. Our expertise spans multiple domains, including software development, digital innovation, and strategic consulting. We work with clients ranging from startups to established enterprises, helping them achieve their goals through technology and innovation.
                </p>
                
                <p>
                  Our approach is collaborative and client-focused. We take the time to understand each project's unique requirements and challenges, developing customized solutions that deliver measurable results. Whether it's building a new product from scratch, scaling an existing platform, or optimizing business processes, we bring the expertise and dedication needed to succeed.
                </p>
                
                <p>
                  We're also deeply committed to research and development, constantly exploring new technologies and methodologies. This commitment to staying at the forefront of innovation ensures that our clients benefit from the latest advancements in the field. Our team regularly contributes to open-source projects, publishes research papers, and participates in industry conferences.
                </p>
                
                <p>
                  Beyond technical excellence, we pride ourselves on building lasting relationships with our clients and partners. We view every project as an opportunity to create value and make a positive impact. Our success is measured not just by the solutions we deliver, but by the long-term partnerships we build along the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-vibgyor-violet/10 via-vibgyor-blue/10 to-vibgyor-green/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our <span className="text-vibgyor-blue">Team?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence. Explore our current openings and start your journey with us today.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;