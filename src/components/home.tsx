import React from "react";
import NavigationBar from "./NavigationBar";
import HeroSection from "./HeroSection";
import ServicesGrid from "./ServicesGrid";
import TestimonialsSection from "./TestimonialsSection";
import ContactSection from "./ContactSection";
import PortfolioSection from "./PortfolioSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <NavigationBar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Grid */}
      <div id="services">
        <ServicesGrid />
      </div>

      {/* Portfolio Section */}
      <div id="portfolio">
        <PortfolioSection />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Beauty Salon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
