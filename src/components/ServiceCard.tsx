import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Clock, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface ServiceCardProps {
  title?: string;
  description?: string;
  price?: number;
  duration?: number;
  imageUrl?: string;
  onBook?: () => void;
}

const ServiceCard = ({
  title = "Luxury Facial Treatment",
  description = "Rejuvenating facial treatment with premium products",
  price = 120,
  duration = 60,
  imageUrl = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  onBook = () => console.log("Book clicked"),
}: ServiceCardProps) => {
  return (
    <Card className="w-full sm:w-[350px] h-[400px] bg-white/80 backdrop-blur-sm overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <CardHeader className="space-y-1 pt-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-5 w-5 text-gray-400 hover:text-gray-600" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Click for more details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="h-4 w-4" />
          <span>{duration} minutes</span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-semibold">${price}</span>
        <Button
          onClick={onBook}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
