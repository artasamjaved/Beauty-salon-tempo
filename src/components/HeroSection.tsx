import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  onBookNow?: () => void;
}

const HeroSection = ({
  title = "Experience Luxury Beauty Care",
  subtitle = "Indulge in our premium beauty treatments and transform your look",
  backgroundImage = "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400&auto=format&fit=crop&q=80",
  onBookNow = () => console.log("Book Now clicked"),
}: HeroSectionProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] bg-gray-100">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={backgroundImage}
          alt="Salon Interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <Button
            onClick={onBookNow}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
          >
            Book Now
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto mt-1" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
