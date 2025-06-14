
import { useEffect } from 'react';
import { User, MapPin, Calendar, Star, Edit2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Profile = () => {
  useEffect(() => {
    document.title = 'My Profile - FoodieFlow | Personal Dashboard';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Profile Header */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-tomato-400 to-orange-400 flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">John Doe</h1>
                  <p className="text-gray-600 mb-4">Food enthusiast and culinary explorer</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                    <Badge variant="secondary" className="bg-tomato-100 text-tomato-700">
                      <MapPin className="w-3 h-3 mr-1" />
                      New York, NY
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      <Calendar className="w-3 h-3 mr-1" />
                      Member since 2023
                    </Badge>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                      <Star className="w-3 h-3 mr-1" />
                      Food Critic Level
                    </Badge>
                  </div>
                  <Button>
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-tomato-600">127</CardTitle>
                <p className="text-gray-600">Restaurants Visited</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-blue-600">43</CardTitle>
                <p className="text-gray-600">Reviews Written</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-green-600">89</CardTitle>
                <p className="text-gray-600">Photos Shared</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-purple-600">15</CardTitle>
                <p className="text-gray-600">Bucket List Items</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
