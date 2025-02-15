import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

interface PortfolioItem {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
}

interface PortfolioSectionProps {
  items?: PortfolioItem[];
}

const defaultItems: PortfolioItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
    category: "Hair Styling",
    title: "Modern Bob Cut",
    description: "Trendy bob cut with natural highlights",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800",
    category: "Facial",
    title: "Rejuvenating Treatment",
    description: "Anti-aging facial with natural ingredients",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800",
    category: "Makeup",
    title: "Wedding Makeup",
    description: "Elegant bridal makeup transformation",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800",
    category: "Spa",
    title: "Luxury Spa Day",
    description: "Full body relaxation treatment",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800",
    category: "Nails",
    title: "Artistic Nail Design",
    description: "Custom nail art and care",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800",
    category: "Massage",
    title: "Deep Tissue Massage",
    description: "Professional therapeutic massage",
  },
];

const PortfolioSection = ({ items = defaultItems }: PortfolioSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of stunning transformations and beautiful
            results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <Card className="overflow-hidden cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-center"
                      >
                        <span className="text-sm font-medium text-white mb-3 inline-block">
                          {item.category}
                        </span>
                        <h3 className="text-2xl font-bold mb-3 text-white">
                          {item.title}
                        </h3>
                        <p className="text-base text-white/90">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
