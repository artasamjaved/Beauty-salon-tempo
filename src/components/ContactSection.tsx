import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

interface ContactSectionProps {
  businessHours?: { day: string; hours: string }[];
  address?: string;
  phone?: string;
  email?: string;
  mapUrl?: string;
}

const ContactSection = ({
  businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ],
  address = "123 Beauty Lane, Styleville, ST 12345",
  phone = "(555) 123-4567",
  email = "contact@beautysalon.com",
  mapUrl = "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=60",
}: ContactSectionProps) => {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Map and Info */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-0">
                <img
                  src={mapUrl}
                  alt="Salon location"
                  className="w-full h-[300px] object-cover rounded-t-lg"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-1 text-primary" />
                    <p className="text-gray-600">{address}</p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 mt-1 text-primary" />
                    <div className="space-y-2">
                      {businessHours.map((schedule, index) => (
                        <p key={index} className="text-gray-600">
                          <span className="font-medium">{schedule.day}:</span>{" "}
                          {schedule.hours}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <p className="text-gray-600">{phone}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <p className="text-gray-600">{email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
