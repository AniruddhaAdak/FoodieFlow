
import { useEffect } from 'react';
import { Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
  useEffect(() => {
    document.title = 'Settings - FoodieFlow | Account Preferences';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <section className="container mx-auto px-4 py-20 text-center">
        <SettingsIcon className="w-16 h-16 text-gray-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Settings</h1>
        <p className="text-xl text-gray-600">Customize your FoodieFlow experience</p>
      </section>
    </div>
  );
};

export default Settings;
