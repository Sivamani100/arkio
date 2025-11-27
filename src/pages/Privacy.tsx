import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Privacy <span className="text-vibgyor-blue">Policy</span>
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At TeamPortal, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application portal and services. Please read this policy carefully to understand our practices regarding your personal data.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  By using our platform, you consent to the data practices described in this policy. If you do not agree with our policies and practices, please do not use our services. We may update this Privacy Policy from time to time, and we will notify you of any significant changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect several types of information from and about users of our platform:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li><strong>Personal Identification Information:</strong> Name, email address, phone number, college/university information, and PIN code.</li>
                  <li><strong>Professional Information:</strong> Resume, LinkedIn profile, field of study, graduation year, skills, experience level, and current semester.</li>
                  <li><strong>Documents and Media:</strong> Profile photos, resumes, and other documents you upload during the application process.</li>
                  <li><strong>Authentication Data:</strong> Information from your Google account when you sign in using Google OAuth (name, email, profile picture).</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage data collected through cookies and similar technologies.</li>
                  <li><strong>Communication Data:</strong> Messages you send us through our contact form or other communication channels.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li>Processing and evaluating your job application</li>
                  <li>Communicating with you about your application status and recruitment process</li>
                  <li>Verifying your credentials and conducting background checks when necessary</li>
                  <li>Improving our platform's functionality and user experience</li>
                  <li>Complying with legal obligations and enforcing our terms and conditions</li>
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Sending you important updates and notices about our services</li>
                  <li>Analyzing usage patterns to enhance our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. How We Share Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li><strong>Internal Teams:</strong> Your application information may be shared with our hiring managers, HR team, and relevant department heads for evaluation purposes.</li>
                  <li><strong>Service Providers:</strong> We may share your data with trusted third-party service providers who assist us in operating our platform, conducting background checks, or providing other services, subject to confidentiality agreements.</li>
                  <li><strong>Legal Requirements:</strong> We may disclose your information if required by law, court order, or governmental regulation, or if we believe such action is necessary to comply with legal process.</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li>Encryption of data in transit and at rest using industry-standard protocols</li>
                  <li>Regular security assessments and penetration testing</li>
                  <li>Access controls and authentication mechanisms to limit access to authorized personnel only</li>
                  <li>Regular backups and disaster recovery procedures</li>
                  <li>Employee training on data protection and privacy best practices</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  However, please note that no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your personal information, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Specifically:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li>Application data is retained for the duration of the recruitment process and for a reasonable period thereafter to maintain a candidate pool for future opportunities.</li>
                  <li>If you are hired, your application data becomes part of your employee record and is retained according to our employee data retention policies.</li>
                  <li>Contact form submissions are retained for customer service and quality assurance purposes.</li>
                  <li>Technical and usage data may be retained in aggregate or anonymized form for analytical purposes.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Your Privacy Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-muted-foreground">
                  <li><strong>Access:</strong> You have the right to request a copy of the personal information we hold about you.</li>
                  <li><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete information.</li>
                  <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to legal obligations.</li>
                  <li><strong>Objection:</strong> You have the right to object to certain processing of your personal information.</li>
                  <li><strong>Data Portability:</strong> You may request that we provide your data in a structured, machine-readable format.</li>
                  <li><strong>Withdraw Consent:</strong> If we process your data based on your consent, you can withdraw that consent at any time.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at privacy@teamportal.com. We will respond to your request within a reasonable timeframe and in accordance with applicable law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our platform. Cookies are small data files stored on your device that help us remember your preferences, understand how you use our services, and improve functionality.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You can configure your browser to refuse cookies or alert you when cookies are being sent. However, some features of our platform may not function properly without cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform may contain links to third-party websites or services (such as LinkedIn or Google). We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately so we can delete such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. These countries may have data protection laws that differ from those in your jurisdiction. By using our services, you consent to the transfer of your information to these countries. We ensure appropriate safeguards are in place to protect your data during such transfers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of our platform after such changes constitutes your acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Email: privacy@teamportal.com<br />
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

export default Privacy;