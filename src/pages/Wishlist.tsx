
import { useEffect } from 'react';
import { Heart } from 'lucide-react';

const Wishlist = () => {
  useEffect(() => {
    document.title = 'My Wishlist - FoodieFlow | Saved Favorites';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <section className="container mx-auto px-4 py-20 text-center">
        <Heart className="w-16 h-16 text-tomato-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Wishlist</h1>
        <p className="text-xl text-gray-600">Your saved restaurants and experiences</p>
      </section>
    </div>
  );
};

export default Wishlist;
