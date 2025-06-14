
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
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
  );
};

export default SearchBar;
