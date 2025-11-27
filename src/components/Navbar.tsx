import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import UserProfile from '@/components/UserProfile';
import arkioLogo from '@/assets/arkio-logo-dark.png';

const Navbar = () => {
  const { user, userRole, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={arkioLogo} alt="ARKIO" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-vibgyor-violet transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-vibgyor-blue transition-colors">
              About Us
            </Link>
            <Link to="/team" className="text-foreground hover:text-vibgyor-indigo transition-colors">
              Team
            </Link>
            <Link to="/contact" className="text-foreground hover:text-vibgyor-green transition-colors">
              Contact
            </Link>
            
            {user ? (
              <UserProfile />
            ) : (
              <Link to="/auth">
                <Button size="sm">Sign In</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-foreground hover:text-vibgyor-violet transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-foreground hover:text-vibgyor-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/team"
                className="text-foreground hover:text-vibgyor-indigo transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Team
              </Link>
              <Link
                to="/contact"
                className="text-foreground hover:text-vibgyor-green transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              {user ? (
                <>
                  {userRole === 'admin' && (
                    <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" size="sm" className="w-full">
                        Admin Dashboard
                      </Button>
                    </Link>
                  )}
                  {userRole === 'user' && (
                    <Link to="/apply" onClick={() => setMobileMenuOpen(false)}>
                      <Button size="sm" className="w-full bg-vibgyor-blue hover:bg-vibgyor-indigo text-white">
                        My Application
                      </Button>
                    </Link>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                    }}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full">Sign In</Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;