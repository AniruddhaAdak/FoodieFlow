
import { Check, MapPin, Calendar, Trash2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BucketListItemProps {
  item: {
    id: string;
    title: string;
    description: string;
    location: string;
    category: string;
    priority: 'High' | 'Medium' | 'Low';
    completed: boolean;
    targetDate?: string;
    image: string;
  };
}

const BucketListItem = ({ item }: BucketListItemProps) => {
  const priorityColors = {
    High: 'bg-tomato-500',
    Medium: 'bg-saffron-500',
    Low: 'bg-avocado-500'
  };

  return (
    <Card className={`overflow-hidden rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${item.completed ? 'opacity-75' : ''}`}>
      <div className="flex">
        <div className="relative w-32 h-32 flex-shrink-0">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {item.completed && (
            <div className="absolute inset-0 bg-avocado-500/80 flex items-center justify-center">
              <Check className="w-8 h-8 text-white" />
            </div>
          )}
        </div>
        
        <CardContent className="flex-1 p-4">
          <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
              <h3 className={`font-semibold text-lg ${item.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            </div>
            <div className="flex items-center space-x-2 ml-4">
              <Badge className={`${priorityColors[item.priority]} text-white`}>
                {item.priority}
              </Badge>
              <Button variant="ghost" size="sm" className="p-1 h-auto text-gray-400 hover:text-tomato-500">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>{item.location}</span>
              </div>
              {item.targetDate && (
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{item.targetDate}</span>
                </div>
              )}
            </div>
            
            <Badge variant="outline" className="text-xs">
              {item.category}
            </Badge>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default BucketListItem;
