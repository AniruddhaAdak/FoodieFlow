
import { Clock, Users, Star, Bookmark } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface RecipeCardProps {
  recipe: {
    id: string;
    title: string;
    description: string;
    image: string;
    cookTime: string;
    servings: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    rating: number;
    reviews: number;
    cuisine: string;
  };
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const difficultyColors = {
    Easy: 'bg-avocado-500',
    Medium: 'bg-saffron-500',
    Hard: 'bg-tomato-500'
  };

  return (
    <Card className="group overflow-hidden rounded-xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale">
      <div className="relative overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge className={`${difficultyColors[recipe.difficulty]} text-white`}>
            {recipe.difficulty}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Button size="sm" variant="secondary" className="rounded-full p-2 bg-white/80 hover:bg-white">
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-tomato-600 transition-colors">
            {recipe.title}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-saffron-400 text-saffron-400" />
            <span className="text-sm font-medium">{recipe.rating}</span>
            <span className="text-sm text-gray-500">({recipe.reviews})</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{recipe.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.cookTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{recipe.servings} servings</span>
            </div>
          </div>
          <Badge variant="outline" className="text-xs">
            {recipe.cuisine}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
