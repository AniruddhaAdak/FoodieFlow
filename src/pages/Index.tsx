
import { useState } from 'react';
import Header from '@/components/Header';
import RestaurantCard from '@/components/RestaurantCard';
import PhotoCard from '@/components/PhotoCard';
import BucketListItem from '@/components/BucketListItem';
import RecipeCard from '@/components/RecipeCard';
import FilterBar from '@/components/FilterBar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Plus, Utensils, Camera, ListChecks, ChefHat } from 'lucide-react';

const Index = () => {
  // Sample data
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
    }
  ];

  const samplePhotos = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop',
      dishName: 'Truffle Pasta',
      restaurant: 'Bella Vista Ristorante',
      rating: 4.9,
      likes: 23,
      comments: 5,
      user: { name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b812b4c6?w=100&h=100&fit=crop' },
      timeAgo: '2 hours ago'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop',
      dishName: 'Dragon Roll',
      restaurant: 'Sakura Sushi Bar',
      rating: 4.7,
      likes: 18,
      comments: 3,
      user: { name: 'Mike Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
      timeAgo: '4 hours ago'
    }
  ];

  const sampleBucketList = [
    {
      id: '1',
      title: 'Try authentic Ramen in Tokyo',
      description: 'Experience the best tonkotsu ramen in Shibuya district',
      location: 'Tokyo, Japan',
      category: 'International',
      priority: 'High' as const,
      completed: false,
      targetDate: 'Dec 2024',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop'
    },
    {
      id: '2',
      title: 'Master homemade pasta',
      description: 'Learn to make fresh pasta from scratch',
      location: 'Home Kitchen',
      category: 'Cooking',
      priority: 'Medium' as const,
      completed: true,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=200&fit=crop'
    }
  ];

  const sampleRecipes = [
    {
      id: '1',
      title: 'Classic Margherita Pizza',
      description: 'Authentic Neapolitan pizza with fresh basil and mozzarella',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop',
      cookTime: '45 min',
      servings: 4,
      difficulty: 'Medium' as const,
      rating: 4.8,
      reviews: 127,
      cuisine: 'Italian'
    },
    {
      id: '2',
      title: 'Avocado Toast Supreme',
      description: 'Elevated avocado toast with poached egg and everything seasoning',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
      cookTime: '15 min',
      servings: 2,
      difficulty: 'Easy' as const,
      rating: 4.5,
      reviews: 89,
      cuisine: 'Modern'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 food-gradient opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-tomato-500 via-saffron-500 to-blueberry-500 bg-clip-text text-transparent">
              Discover Your Next
            </span>
            <br />
            <span className="text-gray-900">Culinary Adventure</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Find amazing restaurants, share your foodie moments, and create your ultimate culinary bucket list
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-tomato-500 hover:bg-tomato-600 text-white rounded-full px-8">
              Start Exploring
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-20">
        <Tabs defaultValue="discover" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-white rounded-full p-1 shadow-lg">
            <TabsTrigger value="discover" className="flex items-center space-x-2 rounded-full">
              <Utensils className="w-4 h-4" />
              <span className="hidden sm:inline">Discover</span>
            </TabsTrigger>
            <TabsTrigger value="photos" className="flex items-center space-x-2 rounded-full">
              <Camera className="w-4 h-4" />
              <span className="hidden sm:inline">Photos</span>
            </TabsTrigger>
            <TabsTrigger value="bucketlist" className="flex items-center space-x-2 rounded-full">
              <ListChecks className="w-4 h-4" />
              <span className="hidden sm:inline">Bucket List</span>
            </TabsTrigger>
            <TabsTrigger value="recipes" className="flex items-center space-x-2 rounded-full">
              <ChefHat className="w-4 h-4" />
              <span className="hidden sm:inline">Recipes</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="discover" className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Discover Restaurants</h2>
              <Button variant="outline" className="rounded-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Restaurant
              </Button>
            </div>
            <FilterBar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {sampleRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="photos" className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Food Photos</h2>
              <Button variant="outline" className="rounded-full">
                <Plus className="w-4 h-4 mr-2" />
                Share Photo
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {samplePhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bucketlist" className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Culinary Bucket List</h2>
              <Button variant="outline" className="rounded-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Goal
              </Button>
            </div>
            <div className="space-y-4">
              {sampleBucketList.map((item) => (
                <BucketListItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recipes" className="animate-fade-in">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Popular Recipes</h2>
              <Button variant="outline" className="rounded-full">
                <Plus className="w-4 h-4 mr-2" />
                Add Recipe
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default Index;
