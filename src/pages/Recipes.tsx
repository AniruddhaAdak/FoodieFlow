
import { useState, useEffect } from 'react';
import { Plus, Clock, Users, ChefHat, Star, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'breakfast', 'lunch', 'dinner', 'dessert', 'snacks'];
  
  const recipes = [
    {
      id: '1',
      title: 'Truffle Pasta Carbonara',
      category: 'dinner',
      cookTime: '25 mins',
      servings: 4,
      difficulty: 'medium',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop',
      description: 'Luxurious pasta with black truffle and creamy carbonara sauce'
    },
    {
      id: '2',
      title: 'Avocado Toast Supreme',
      category: 'breakfast',
      cookTime: '10 mins',
      servings: 2,
      difficulty: 'easy',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=300&fit=crop',
      description: 'Perfect breakfast with perfectly ripe avocados and artisan bread'
    },
    {
      id: '3',
      title: 'Chocolate Lava Cake',
      category: 'dessert',
      cookTime: '30 mins',
      servings: 6,
      difficulty: 'hard',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop',
      description: 'Decadent dessert with molten chocolate center'
    }
  ];

  useEffect(() => {
    document.title = 'Recipe Collection - FoodieFlow | Culinary Inspiration';
  }, []);

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'hard': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Recipe 
            <span className="block bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
              Collection
            </span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discover, save, and share your favorite recipes from around the world
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search recipes, ingredients, cuisine..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg rounded-full border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70"
              />
            </div>
          </div>

          <Button 
            size="lg"
            className="rounded-full px-8 bg-white text-orange-600 hover:bg-gray-100 font-semibold shadow-lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add New Recipe
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full capitalize"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-4 mb-8">
          <Badge variant="secondary" className="bg-orange-100 text-orange-700 px-4 py-2">
            <ChefHat className="w-4 h-4 mr-2" />
            {filteredRecipes.length} Recipes
          </Badge>
        </div>

        {/* Recipe Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe, index) => (
            <Card key={recipe.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getDifficultyColor(recipe.difficulty)}>
                    {recipe.difficulty}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{recipe.rating}</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{recipe.title}</CardTitle>
                <p className="text-gray-600">{recipe.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.cookTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings} servings</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  View Recipe
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Recipes;
