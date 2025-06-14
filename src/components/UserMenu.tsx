
import { useNavigate } from 'react-router-dom';
import { User, Heart, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const UserMenu = () => {
  const navigate = useNavigate();

  return (
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
    </div>
  );
};

export default UserMenu;
