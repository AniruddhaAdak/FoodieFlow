
import { Star, MapPin, Clock, Heart, Bookmark } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface RestaurantCardProps {
  restaurant: {
    id: string;
    name: string;
    cuisine: string;
    rating: number;
    priceRange: string;
    image: string;
    location: string;
    distance: string;
    openHours: string;
    featured?: boolean;
  };
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Card className="group overflow-hidden rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
      <div className="relative overflow-hidden">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          {restaurant.featured && (
            <Badge className="bg-saffron-500 text-white">Featured</Badge>
          )}
        </div>
        <div className="absolute top-3 right-3 flex space-x-2">
          <Button size="sm" variant="secondary" className="rounded-full p-2 bg-white/80 hover:bg-white">
            <Heart className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="secondary" className="rounded-full p-2 bg-white/80 hover:bg-white">
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
        <div className="absolute bottom-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-800">
            {restaurant.cuisine}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-tomato-600 transition-colors">
            {restaurant.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-saffron-400 text-saffron-400" />
            <span className="text-sm font-medium">{restaurant.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{restaurant.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{restaurant.distance}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-avocado-600">{restaurant.priceRange}</span>
          <span className="text-sm text-gray-500">{restaurant.openHours}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;
