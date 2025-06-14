
import { Heart, MessageCircle, Star, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface PhotoCardProps {
  photo: {
    id: string;
    image: string;
    dishName: string;
    restaurant: string;
    rating: number;
    likes: number;
    comments: number;
    user: {
      name: string;
      avatar: string;
    };
    timeAgo: string;
  };
}

const PhotoCard = ({ photo }: PhotoCardProps) => {
  return (
    <Card className="overflow-hidden rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
      <div className="relative overflow-hidden">
        <img 
          src={photo.image} 
          alt={photo.dishName}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-3 right-3">
          <div className="flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
            <Star className="w-4 h-4 fill-saffron-400 text-saffron-400" />
            <span className="text-white text-sm font-medium">{photo.rating}</span>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center space-x-3 mb-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src={photo.user.avatar} alt={photo.user.name} />
            <AvatarFallback>
              <User className="w-4 h-4" />
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="font-medium text-sm">{photo.user.name}</p>
            <p className="text-xs text-gray-500">{photo.timeAgo}</p>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-1">{photo.dishName}</h3>
        <p className="text-sm text-gray-600 mb-3">at {photo.restaurant}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="p-0 h-auto">
              <Heart className="w-5 h-5 mr-1 text-tomato-500" />
              <span className="text-sm">{photo.likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="p-0 h-auto">
              <MessageCircle className="w-5 h-5 mr-1 text-blueberry-500" />
              <span className="text-sm">{photo.comments}</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
