import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface NavigationBarProps {
  logo?: string;
  links?: Array<{ label: string; href: string }>;
  onBookNow?: () => void;
}

const NavigationBar = ({
  logo = "https://api.dicebear.com/7.x/initials/svg?seed=BS",
  links = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  onBookNow = () => console.log("Book Now clicked"),
}: NavigationBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={
        `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"}` +
        " from-[0%] opacity-100 bg-none via-[0%] from-transparent"
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full"
              src={logo}
              alt="Beauty Salon Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={onBookNow}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4">
                <Button
                  onClick={() => {
                    onBookNow();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
