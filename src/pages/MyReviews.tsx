
import { useEffect } from 'react';
import { Star } from 'lucide-react';

const MyReviews = () => {
  useEffect(() => {
    document.title = 'My Reviews - FoodieFlow | Restaurant Reviews';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <section className="container mx-auto px-4 py-20 text-center">
        <Star className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Reviews</h1>
        <p className="text-xl text-gray-600">All your restaurant reviews and ratings</p>
      </section>
    </div>
  );
};

export default MyReviews;
