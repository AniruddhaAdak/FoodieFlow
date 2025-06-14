
import { useState } from 'react';
import { Plus, Camera, Heart, MessageCircle, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PhotoCard from '@/components/PhotoCard';

const Photos = () => {
  const [activeTab, setActiveTab] = useState('trending');

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
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop',
      dishName: 'Gourmet Tacos',
      restaurant: 'Taco Libre',
      rating: 4.6,
      likes: 31,
      comments: 8,
      user: { name: 'Alex Rivera', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
      timeAgo: '6 hours ago'
    },
    {
      id: '4',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=400&fit=crop',
      dishName: 'Coq au Vin',
      restaurant: 'Le Petit Bistro',
      rating: 4.8,
      likes: 42,
      comments: 12,
      user: { name: 'Emma Wilson', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
      timeAgo: '1 day ago'
    },
    {
      id: '5',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop',
      dishName: 'Butter Chicken',
      restaurant: 'Spice Route',
      rating: 4.5,
      likes: 27,
      comments: 6,
      user: { name: 'Raj Patel', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
      timeAgo: '1 day ago'
    },
    {
      id: '6',
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=400&fit=crop',
      dishName: 'Quinoa Power Bowl',
      restaurant: 'Green Garden Cafe',
      rating: 4.7,
      likes: 19,
      comments: 4,
      user: { name: 'Lisa Green', avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop' },
      timeAgo: '2 days ago'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-r from-camera-500 via-blueberry-500 to-tomato-500">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Share Your Foodie Moments
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Capture, share, and discover amazing food photography from the community
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8">
              <Camera className="w-5 h-5 mr-2" />
              Take Photo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 rounded-full px-8">
              <Upload className="w-5 h-5 mr-2" />
              Upload Photo
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3 bg-white rounded-full p-1 shadow-lg">
              <TabsTrigger value="trending" className="rounded-full">
                🔥 Trending
              </TabsTrigger>
              <TabsTrigger value="recent" className="rounded-full">
                ⏰ Recent
              </TabsTrigger>
              <TabsTrigger value="following" className="rounded-full">
                👥 Following
              </TabsTrigger>
            </TabsList>
            
            <Button variant="outline" className="rounded-full">
              <Plus className="w-4 h-4 mr-2" />
              Share Photo
            </Button>
          </div>

          <TabsContent value="trending" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {samplePhotos.map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...samplePhotos].reverse().map((photo) => (
                <PhotoCard key={photo.id} photo={photo} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="following" className="animate-fade-in">
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No photos yet</h3>
              <p className="text-gray-500 mb-6">Follow other food enthusiasts to see their latest photos here</p>
              <Button className="rounded-full">
                Discover People to Follow
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Community Stats */}
        <section className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Community Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-tomato-500 mb-2">2,847</div>
              <div className="text-gray-600">Photos Shared</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-avocado-500 mb-2">1,293</div>
              <div className="text-gray-600">Active Foodies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-saffron-500 mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blueberry-500 mb-2">356</div>
              <div className="text-gray-600">Restaurants Featured</div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Photos;
