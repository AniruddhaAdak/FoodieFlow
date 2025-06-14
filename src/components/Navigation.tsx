
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, MapPin, User, Heart, Calendar, Utensils, Camera, ListChecks, ChefHat, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { label: 'Discover', href: '/discover', icon: Utensils },
    { label: 'Photos', href: '/photos', icon: Camera },
    { label: 'Bucket List', href: '/bucket-list', icon: ListChecks },
    { label: 'Recipes', href: '/recipes', icon: ChefHat },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer hover-scale"
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 rounded-full food-gradient animate-pulse"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-tomato-500 to-blueberry-500 bg-clip-text text-transparent">
              FoodieFlow
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Button
                  key={item.href}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={`flex items-center space-x-2 rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'bg-tomato-500 text-white hover:bg-tomato-600' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => handleNavigation(item.href)}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                type="text" 
                placeholder="Search restaurants, dishes, recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full rounded-full border-gray-200 focus:border-tomato-400 transition-colors"
              />
            </div>
            <Button 
              type="button"
              variant="outline" 
              size="sm" 
              className="rounded-full hover:bg-avocado-50 hover:border-avocado-300 transition-colors"
              onClick={() => navigate('/location')}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Location
            </Button>
          </form>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex hover:bg-tomato-50 hover:text-tomato-600 transition-colors"
              onClick={() => navigate('/wishlist')}
            >
              <Heart className="w-4 h-4 mr-2" />
              Wishlist
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="hidden md:flex hover:bg-saffron-50 hover:text-saffron-600 transition-colors"
              onClick={() => navigate('/bookings')}
            >
              <Calendar className="w-4 h-4 mr-2" />
              Bookings
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-full hover:bg-blueberry-50 hover:border-blueberry-300 transition-colors"
                >
                  <User className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white shadow-lg border">
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  Profile Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/my-reviews')}>
                  My Reviews
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/settings')}>
                  Preferences
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t animate-fade-in">
            <nav className="flex flex-col space-y-2 mt-4">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Button
                    key={item.href}
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`flex items-center space-x-2 justify-start ${
                      isActive 
                        ? 'bg-tomato-500 text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleNavigation(item.href)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Button>
                );
              })}
            </nav>
            
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mt-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  type="text" 
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full rounded-full border-gray-200 focus:border-tomato-400"
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
