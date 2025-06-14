
import { Search, MapPin, User, Heart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full food-gradient"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-tomato-500 to-blueberry-500 bg-clip-text text-transparent">
              FoodieFlow
            </h1>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                type="text" 
                placeholder="Search restaurants, dishes, recipes..."
                className="pl-10 pr-4 py-2 w-full rounded-full border-gray-200 focus:border-tomato-400"
              />
            </div>
            <Button variant="outline" size="sm" className="rounded-full">
              <MapPin className="w-4 h-4 mr-2" />
              Location
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Heart className="w-4 h-4 mr-2" />
              Wishlist
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Calendar className="w-4 h-4 mr-2" />
              Bookings
            </Button>
            <Button variant="outline" size="sm" className="rounded-full">
              <User className="w-4 h-4" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
