import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  review: string;
  rating: number;
  beforeImage: string;
  afterImage: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    review:
      "Amazing transformation! The facial treatment was so relaxing and the results are incredible.",
    rating: 5,
    beforeImage:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=500&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=500&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Emily Davis",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    review:
      "The team here is absolutely wonderful. My skin has never looked better!",
    rating: 5,
    beforeImage:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1605635543937-49d1c66e47d0?w=500&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Michelle Wong",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michelle",
    review:
      "Professional service with amazing results. Highly recommend their treatments!",
    rating: 5,
    beforeImage:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1620331311520-246422fd82f9?w=500&auto=format&fit=crop",
  },
];

const TestimonialsSection = ({
  testimonials = defaultTestimonials,
}: TestimonialsSectionProps) => {
  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Testimonials
        </h2>

        <Carousel className="w-full max-w-5xl mx-auto relative">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <Card className="bg-white">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                            <AvatarImage
                              src={testimonial.avatar}
                              alt={testimonial.name}
                            />
                            <AvatarFallback>
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-sm sm:text-base">
                              {testimonial.name}
                            </h3>
                            <div className="flex space-x-1">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 italic text-sm sm:text-base">
                          "{testimonial.review}"
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 sm:gap-4">
                        <div className="space-y-2">
                          <p className="text-xs sm:text-sm font-medium text-center">
                            Before
                          </p>
                          <img
                            src={testimonial.beforeImage}
                            alt="Before treatment"
                            className="w-full h-32 sm:h-48 object-cover rounded-lg"
                          />
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs sm:text-sm font-medium text-center">
                            After
                          </p>
                          <img
                            src={testimonial.afterImage}
                            alt="After treatment"
                            className="w-full h-32 sm:h-48 object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:-left-12 sm:flex" />
          <CarouselNext className="hidden sm:-right-12 sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
