
import { useState } from 'react';
import { Plus, MapPin, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import RestaurantCard from '@/components/RestaurantCard';
import FilterBar from '@/components/FilterBar';
import { Badge } from '@/components/ui/badge';

const Discover = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('rating');

  const sampleRestaurants = [
    {
      id: '1',
      name: 'Bella Vista Ristorante',
      cuisine: 'Italian',
      rating: 4.8,
      priceRange: '$$$',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      location: 'Downtown',
      distance: '0.5 mi',
      openHours: 'Open until 10 PM',
      featured: true
    },
    {
      id: '2',
      name: 'Sakura Sushi Bar',
      cuisine: 'Japanese',
      rating: 4.6,
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      location: 'Midtown',
      distance: '1.2 mi',
      openHours: 'Open until 11 PM'
    },
    {
      id: '3',
      name: 'Green Garden Cafe',
      cuisine: 'Vegetarian',
      rating: 4.7,
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop',
      location: 'Uptown',
      distance: '2.1 mi',
      openHours: 'Open until 9 PM'
    },
    {
      id: '4',
      name: 'Taco Libre',
      cuisine: 'Mexican',
      rating: 4.4,
      priceRange: '$',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      location: 'West Side',
      distance: '1.8 mi',
      openHours: 'Open until 12 AM'
    },
    {
      id: '5',
      name: 'Le Petit Bistro',
      cuisine: 'French',
      rating: 4.9,
      priceRange: '$$$$',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
      location: 'French Quarter',
      distance: '2.5 mi',
      openHours: 'Open until 11 PM',
      featured: true
    },
    {
      id: '6',
      name: 'Spice Route',
      cuisine: 'Indian',
      rating: 4.5,
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
      location: 'India Town',
      distance: '3.2 mi',
      openHours: 'Open until 10 PM'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-r from-tomato-500 via-saffron-500 to-avocado-500">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Amazing Restaurants
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Find the perfect dining experience near you with our smart search and filtering
          </p>
          
          {/* Quick Search */}
          <div className="max-w-2xl mx-auto bg-white rounded-full p-2 shadow-lg">
            <div className="flex items-center space-x-2">
              <Input 
                placeholder="Search restaurants, cuisines, or dishes..."
                className="border-0 rounded-full flex-1 text-lg"
              />
              <Button className="rounded-full px-6 bg-tomato-500 hover:bg-tomato-600">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        {/* Stats Bar */}
        <div className="flex flex-wrap gap-4 mb-6">
          <Badge variant="secondary" className="bg-tomato-100 text-tomato-700 px-4 py-2">
            <MapPin className="w-4 h-4 mr-2" />
            {sampleRestaurants.length} restaurants nearby
          </Badge>
          <Badge variant="secondary" className="bg-avocado-100 text-avocado-700 px-4 py-2">
            <Star className="w-4 h-4 mr-2" />
            Average rating: 4.6
          </Badge>
          <Badge variant="secondary" className="bg-saffron-100 text-saffron-700 px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            Most open until 10 PM
          </Badge>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Restaurants Near You</h2>
          <div className="flex items-center space-x-4">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-tomato-400"
            >
              <option value="rating">Sort by Rating</option>
              <option value="distance">Sort by Distance</option>
              <option value="price">Sort by Price</option>
              <option value="name">Sort by Name</option>
            </select>
            <Button variant="outline" className="rounded-full">
              <Plus className="w-4 h-4 mr-2" />
              Add Restaurant
            </Button>
          </div>
        </div>

        <FilterBar />

        <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'} mt-6 animate-fade-in`}>
          {sampleRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-8 hover:bg-tomato-50 hover:border-tomato-300 transition-colors"
          >
            Load More Restaurants
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Discover;
