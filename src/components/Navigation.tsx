
import { useLocation, useNavigate } from 'react-router-dom';
import { Utensils, Camera, ListChecks, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileMenu from './MobileMenu';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { label: 'Discover', href: '/discover', icon: Utensils },
    { label: 'Photos', href: '/photos', icon: Camera },
    { label: 'Bucket List', href: '/bucket-list', icon: ListChecks },
    { label: 'Recipes', href: '/recipes', icon: ChefHat },
  ];

  const handleNavigation = (href: string) => {
    navigate(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            className="flex items-center space-x-2 cursor-pointer hover-scale"
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 rounded-full food-gradient animate-pulse"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-tomato-500 to-blueberry-500 bg-clip-text text-transparent">
              FoodieFlow
            </h1>
          </button>

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
          <SearchBar />

          {/* User Menu and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <UserMenu />
            <MobileMenu navigationItems={navigationItems} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
