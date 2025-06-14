
import { useEffect } from 'react';
import { Calendar } from 'lucide-react';

const Bookings = () => {
  useEffect(() => {
    document.title = 'My Bookings - FoodieFlow | Reservation Management';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <section className="container mx-auto px-4 py-20 text-center">
        <Calendar className="w-16 h-16 text-blue-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Bookings</h1>
        <p className="text-xl text-gray-600">Manage your restaurant reservations</p>
      </section>
    </div>
  );
};

export default Bookings;
