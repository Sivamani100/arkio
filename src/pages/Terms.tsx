import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Terms & <span className="text-vibgyor-blue">Conditions</span>
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to TeamPortal. These Terms and Conditions ("Terms") govern your use of our application portal and services. By accessing or using our platform, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our services.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  These Terms constitute a legally binding agreement between you and TeamPortal. We reserve the right to modify these Terms at any time, and we will notify users of any significant changes. Your continued use of the platform after such modifications constitutes your acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Eligibility and Account Registration</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To use our application portal, you must be at least 18 years old or have reached the age of majority in your jurisdiction. By creating an account, you represent and warrant that you meet these eligibility requirements.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Application Process</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When submitting an application through our portal, you agree that all information provided is truthful, accurate, and complete to the best of your knowledge. Providing false or misleading information may result in the rejection of your application and potential legal consequences.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We reserve the right to verify all information submitted in your application. You authorize us to conduct background checks, verify credentials, and contact references as part of our evaluation process. Submission of an application does not guarantee employment or any obligation on our part to offer a position.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content, features, and functionality of our platform, including but not limited to text, graphics, logos, icons, images, and software, are the exclusive property of TeamPortal and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our platform without prior written consent, except as necessary for your personal, non-commercial use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. User Content and Submissions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By uploading, submitting, or otherwise making available any content through our platform (including your resume, photos, and other application materials), you grant TeamPortal a worldwide, non-exclusive, royalty-free license to use, reproduce, store, and process such content for the purpose of evaluating your application and managing our recruitment process.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You retain all rights to your submitted content, and you may request deletion of your application and associated materials at any time by contacting us. We will comply with such requests subject to any legal obligations to retain certain information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Privacy and Data Protection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your use of our platform is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using our services, you consent to the practices described in our Privacy Policy.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We implement industry-standard security measures to protect your data. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security of your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Prohibited Activities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree not to engage in any of the following prohibited activities: (a) submitting false, misleading, or fraudulent information; (b) attempting to gain unauthorized access to our systems or other users' accounts; (c) using automated systems or software to extract data from our platform; (d) interfering with or disrupting the platform's functionality; (e) violating any applicable laws or regulations; or (f) impersonating another person or entity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to suspend or terminate your account and access to our platform at any time, with or without cause, and with or without notice, if we believe you have violated these Terms or engaged in any prohibited activities. Upon termination, your right to use the platform will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the platform will be uninterrupted, error-free, or free of viruses or other harmful components.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, TeamPortal shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of or inability to use our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Governing Law and Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which TeamPortal operates, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our platform shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Email: legal@teamportal.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Address: 123 Innovation Street, Tech City, TC 12345, United States
                </p>
              </section>

              <section className="mt-8 pt-8 border-t">
                <p className="text-sm text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;