import React from "react";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

interface Service {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: number;
  imageUrl: string;
}

interface ServicesGridProps {
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    id: 1,
    title: "Luxury Facial Treatment",
    description: "Rejuvenating facial treatment with premium products",
    price: 120,
    duration: 60,
    imageUrl:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 2,
    title: "Deep Tissue Massage",
    description: "Therapeutic massage targeting deep muscle tension",
    price: 90,
    duration: 75,
    imageUrl:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 3,
    title: "Hair Styling & Treatment",
    description: "Professional styling with nourishing hair treatment",
    price: 150,
    duration: 90,
    imageUrl:
      "https://images.unsplash.com/photo-1560869713-da86c87c4275?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 4,
    title: "Manicure & Pedicure",
    description: "Complete nail care treatment for hands and feet",
    price: 80,
    duration: 60,
    imageUrl:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 5,
    title: "Anti-Aging Treatment",
    description: "Advanced skincare for youthful appearance",
    price: 200,
    duration: 90,
    imageUrl:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    id: 6,
    title: "Body Scrub & Wrap",
    description: "Full body exfoliation and moisturizing treatment",
    price: 140,
    duration: 120,
    imageUrl:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
];

const ServicesGrid = ({ services = defaultServices }: ServicesGridProps) => {
  return (
    <section className="w-full min-h-screen bg-gray-50 py-16 px-4 md:px-8 relative overflow-hidden">
      <motion.div
        animate={{
          y: ["-2%", "2%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #000 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our range of luxury treatments designed to enhance your
            natural beauty and provide ultimate relaxation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                price={service.price}
                duration={service.duration}
                imageUrl={service.imageUrl}
                onBook={() => console.log(`Booking service: ${service.title}`)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
