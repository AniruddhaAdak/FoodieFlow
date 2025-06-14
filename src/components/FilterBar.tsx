
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const FilterBar = () => {
  const cuisineTypes = ['Italian', 'Asian', 'Mexican', 'American', 'Mediterranean', 'Indian'];
  const priceRanges = ['$', '$$', '$$$', '$$$$'];
  const ratings = ['4.5+', '4.0+', '3.5+', '3.0+'];

  return (
    <div className="flex items-center space-x-3 py-4 overflow-x-auto">
      <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">
        <Filter className="w-4 h-4 mr-2" />
        All Filters
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">
            Cuisine
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {cuisineTypes.map((cuisine) => (
            <DropdownMenuItem key={cuisine}>{cuisine}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">
            Price
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {priceRanges.map((price) => (
            <DropdownMenuItem key={price}>{price}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">
            Rating
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {ratings.map((rating) => (
            <DropdownMenuItem key={rating}>{rating}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <Button variant="outline" size="sm" className="rounded-full whitespace-nowrap">
        <SlidersHorizontal className="w-4 h-4 mr-2" />
        More
      </Button>
      
      {/* Active filters */}
      <div className="flex items-center space-x-2 ml-4">
        <Badge variant="secondary" className="bg-tomato-100 text-tomato-700">
          Italian
          <button className="ml-1 text-tomato-500 hover:text-tomato-700">×</button>
        </Badge>
        <Badge variant="secondary" className="bg-avocado-100 text-avocado-700">
          4.5+ Rating
          <button className="ml-1 text-avocado-500 hover:text-avocado-700">×</button>
        </Badge>
      </div>
    </div>
  );
};

export default FilterBar;
