
import { Github, Linkedin, Twitter, Mail, MessageCircle, ExternalLink, Code2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aniruddha-adak',
      icon: Linkedin,
      color: 'hover:text-blue-600 hover:bg-blue-50'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/AniruddhaAdak',
      icon: Github,
      color: 'hover:text-gray-900 hover:bg-gray-50'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/aniruddhadak',
      icon: Twitter,
      color: 'hover:text-blue-400 hover:bg-blue-50'
    },
    {
      name: 'Email',
      url: 'mailto:aniruddhaadak80@gmail.com',
      icon: Mail,
      color: 'hover:text-red-600 hover:bg-red-50'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/aniruddhaadak',
      icon: MessageCircle,
      color: 'hover:text-blue-500 hover:bg-blue-50'
    },
    {
      name: 'Portfolio',
      url: 'https://aniruddha-adak.vercel.app',
      icon: User,
      color: 'hover:text-purple-600 hover:bg-purple-50'
    },
    {
      name: 'CodePen',
      url: 'https://codepen.io/aniruddhaadak',
      icon: Code2,
      color: 'hover:text-green-600 hover:bg-green-50'
    },
    {
      name: 'Linktree',
      url: 'https://linktr.ee/aniruddha.adak',
      icon: ExternalLink,
      color: 'hover:text-orange-600 hover:bg-orange-50'
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-tomato-500 via-saffron-500 to-avocado-500 animate-gradient"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full food-gradient animate-pulse"></div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-tomato-400 to-saffron-400 bg-clip-text text-transparent">
                FoodieFlow
              </h3>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              Your ultimate culinary discovery platform. Find amazing restaurants, share food experiences, 
              and connect with fellow food enthusiasts around the world.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-tomato-500/20 border border-tomato-500/30 rounded-full text-tomato-300 text-sm">
                Restaurant Discovery
              </span>
              <span className="px-3 py-1 bg-avocado-500/20 border border-avocado-500/30 rounded-full text-avocado-300 text-sm">
                Food Sharing
              </span>
              <span className="px-3 py-1 bg-saffron-500/20 border border-saffron-500/30 rounded-full text-saffron-300 text-sm">
                Recipe Collection
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Discover', 'Photos', 'Recipes', 'Bucket List'].map((link) => (
                <li key={link}>
                  <a 
                    href={`/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-tomato-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-tomato-500 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Features</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Smart Restaurant Filtering</li>
              <li>• Photo Sharing & Rating</li>
              <li>• Culinary Bucket Lists</li>
              <li>• Recipe Recommendations</li>
              <li>• Location-Based Search</li>
              <li>• Social Food Network</li>
            </ul>
          </div>
        </div>

        {/* Developer Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold mb-2 bg-gradient-to-r from-tomato-400 to-blueberry-400 bg-clip-text text-transparent">
              Created by Aniruddha Adak
            </h4>
            <p className="text-gray-400 mb-6">Full Stack Developer & Food Enthusiast</p>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="lg"
                    className={`border-gray-600 bg-gray-800/50 text-gray-300 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm`}
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="hidden sm:inline">{social.name}</span>
                    </a>
                  </Button>
                );
              })}
            </div>

            {/* Additional Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 mb-6">
              <a 
                href="https://dev.to/aniruddhaadak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-tomato-400 transition-colors"
              >
                Dev.to Profile
              </a>
              <span>•</span>
              <a 
                href="https://aniruddha-adak.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-tomato-400 transition-colors"
              >
                Portfolio Website
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm border-t border-gray-700 pt-6">
            <p className="mb-2">
              © {new Date().getFullYear()} <span className="font-semibold text-tomato-400">Aniruddha Adak</span>. 
              All rights reserved.
            </p>
            <p className="flex items-center justify-center space-x-1">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse text-lg">♥</span>
              <span>for food lovers everywhere</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
