
import { useState, useEffect } from 'react';
import { Plus, MapPin, Star, Clock, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BucketList = () => {
  const [bucketListItems, setBucketListItems] = useState([
    {
      id: '1',
      name: 'Michelin Star Tasting Menu',
      restaurant: 'Le Bernardin',
      location: 'New York, NY',
      priority: 'high',
      notes: 'Special occasion dinner',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop'
    },
    {
      id: '2',
      name: 'Authentic Ramen Experience',
      restaurant: 'Ichiran Ramen',
      location: 'Tokyo, Japan',
      priority: 'medium',
      notes: 'Travel bucket list item',
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop'
    },
    {
      id: '3',
      name: 'Street Food Tour',
      restaurant: 'Bangkok Street Markets',
      location: 'Bangkok, Thailand',
      priority: 'high',
      notes: 'Adventure dining experience',
      image: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=400&h=300&fit=crop'
    }
  ]);

  useEffect(() => {
    document.title = 'My Bucket List - FoodieFlow | Dream Dining Experiences';
  }, []);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My Food 
            <span className="block bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
              Bucket List
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Dream dining experiences and culinary adventures waiting to be discovered
          </p>
          <Button 
            size="lg"
            className="rounded-full px-8 bg-white text-purple-600 hover:bg-gray-100 font-semibold shadow-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Experience
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">My Dream Experiences</h2>
            <p className="text-gray-600">{bucketListItems.length} experiences on your list</p>
          </div>
          <div className="flex space-x-4">
            <Badge variant="secondary" className="bg-red-100 text-red-700 px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              High Priority: {bucketListItems.filter(item => item.priority === 'high').length}
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bucketListItems.map((item, index) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getPriorityColor(item.priority)}>
                    {item.priority}
                  </Badge>
                </div>
                <button className="absolute top-4 left-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-4 h-4 text-red-500" />
                </button>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.name}</CardTitle>
                <div className="flex items-center text-gray-600 space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{item.restaurant}</span>
                </div>
                <div className="flex items-center text-gray-500 space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.notes}</p>
                <Button className="w-full bg-tomato-500 hover:bg-tomato-600">
                  Plan This Experience
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BucketList;
