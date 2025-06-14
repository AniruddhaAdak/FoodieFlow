
import { useState, useEffect } from 'react';
import { Plus, MapPin, Clock, Star, Filter, Grid, List, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import RestaurantCard from '@/components/RestaurantCard';
import FilterBar from '@/components/FilterBar';
import { Badge } from '@/components/ui/badge';

const Discover = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('rating');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Enhanced sample data with more variety
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
      featured: true,
      specialties: ['Pasta', 'Wine', 'Seafood']
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
      openHours: 'Open until 11 PM',
      specialties: ['Sushi', 'Ramen', 'Sake']
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
      openHours: 'Open until 9 PM',
      specialties: ['Organic', 'Vegan', 'Smoothies']
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
      openHours: 'Open until 12 AM',
      specialties: ['Tacos', 'Margaritas', 'Street Food']
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
      featured: true,
      specialties: ['Fine Dining', 'Wine Pairing', 'Desserts']
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
      openHours: 'Open until 10 PM',
      specialties: ['Curry', 'Tandoor', 'Spices']
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => setIsLoading(false), 1000);
  };

  // SEO Enhancement - Update document title
  useEffect(() => {
    document.title = 'Discover Restaurants - FoodieFlow | Find Amazing Dining Experiences';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover amazing restaurants near you with FoodieFlow. Filter by cuisine, price, rating, and location. Find your perfect dining experience today!');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-tomato-500 via-saffron-500 to-avocado-500 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/50 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Discover Amazing 
              <span className="block bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                Restaurants
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Find the perfect dining experience near you with our smart search, 
              authentic reviews, and curated recommendations from food lovers
            </p>
          </div>
          
          {/* Enhanced Search Bar */}
          <div className="max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSearch} className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-2xl border border-white/20">
              <div className="flex items-center space-x-3">
                <Input 
                  placeholder="Search restaurants, cuisines, or dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border-0 rounded-xl flex-1 text-lg py-3 px-4 focus:ring-2 focus:ring-tomato-400"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="rounded-xl px-8 bg-tomato-500 hover:bg-tomato-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                  disabled={isLoading}
                >
                  {isLoading ? 'Searching...' : 'Search'}
                </Button>
              </div>
            </form>
          </div>

          {/* Trending Searches */}
          <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-white/80 mb-3">Trending searches:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Italian Pizza', 'Sushi Night', 'Brunch Spots', 'Food Trucks', 'Fine Dining'].map((trend) => (
                <button
                  key={trend}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm hover:bg-white/30 transition-all duration-200 hover:scale-105"
                  onClick={() => setSearchQuery(trend)}
                >
                  #{trend}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        {/* Enhanced Stats Bar */}
        <div className="flex flex-wrap gap-4 mb-8 animate-fade-in">
          <Badge variant="secondary" className="bg-tomato-100 text-tomato-700 px-6 py-3 text-base hover:bg-tomato-200 transition-colors">
            <MapPin className="w-5 h-5 mr-2" />
            {sampleRestaurants.length} restaurants nearby
          </Badge>
          <Badge variant="secondary" className="bg-avocado-100 text-avocado-700 px-6 py-3 text-base hover:bg-avocado-200 transition-colors">
            <Star className="w-5 h-5 mr-2" />
            Average rating: 4.6
          </Badge>
          <Badge variant="secondary" className="bg-saffron-100 text-saffron-700 px-6 py-3 text-base hover:bg-saffron-200 transition-colors">
            <Clock className="w-5 h-5 mr-2" />
            Most open until 10 PM
          </Badge>
          <Badge variant="secondary" className="bg-blueberry-100 text-blueberry-700 px-6 py-3 text-base hover:bg-blueberry-200 transition-colors">
            <TrendingUp className="w-5 h-5 mr-2" />
            Trending in your area
          </Badge>
        </div>

        {/* Enhanced Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Restaurants Near You</h2>
            <p className="text-gray-600">Discover your next favorite dining spot</p>
          </div>
          
          <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* View Mode Toggle */}
            <div className="flex border rounded-lg overflow-hidden">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>

            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-tomato-400 bg-white shadow-sm"
            >
              <option value="rating">Sort by Rating</option>
              <option value="distance">Sort by Distance</option>
              <option value="price">Sort by Price</option>
              <option value="name">Sort by Name</option>
            </select>
            
            <Button variant="outline" className="rounded-full hover:bg-tomato-50 hover:border-tomato-300 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Add Restaurant
            </Button>
          </div>
        </div>

        <FilterBar />

        {/* Enhanced Restaurant Grid */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-6'
        } mt-8`}>
          {sampleRestaurants.map((restaurant, index) => (
            <div 
              key={restaurant.id} 
              className="animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>

        {/* Enhanced Load More */}
        <div className="text-center mt-16 animate-fade-in">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full px-12 py-4 hover:bg-tomato-50 hover:border-tomato-300 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Load More Restaurants
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Discover;
