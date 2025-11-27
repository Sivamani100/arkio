import { Link } from 'react-router-dom';
import { Instagram } from 'iconsax-react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">arkio.in<span className="text-vibgyor-blue">.</span></h3>
            <p className="text-sm text-primary-foreground/80">
              Join our innovative team and be part of something extraordinary. We're always looking for talented individuals who share our vision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/about" className="hover:text-vibgyor-blue transition-colors">
                About Us
              </Link>
              <Link to="/team" className="hover:text-vibgyor-indigo transition-colors">
                Team
              </Link>
              <Link to="/contact" className="hover:text-vibgyor-green transition-colors">
                Contact
              </Link>
              <Link to="/terms" className="hover:text-vibgyor-yellow transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="hover:text-vibgyor-orange transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-vibgyor-blue transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-vibgyor-red transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} variant="Bold" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} arkio.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;