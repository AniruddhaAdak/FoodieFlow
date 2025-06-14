
# FoodieFlow 🍽️

A vibrant culinary discovery platform that connects food enthusiasts with amazing dining experiences, recipes, and culinary adventures.

## ✨ Features

### 🔍 Restaurant Discovery
- **Smart Filtering**: Filter by cuisine type, price range, rating, and location
- **Location-Based Search**: Find restaurants near you with distance tracking
- **Featured Restaurants**: Curated selection of top-rated establishments
- **Real-Time Availability**: Check opening hours and current status
- **Save Favorites**: Bookmark restaurants for future visits

### 📸 Food Photo Sharing
- **Photo Upload & Sharing**: Share your culinary moments with the community
- **Rating System**: Rate dishes and restaurants with star ratings
- **Social Interactions**: Like and comment on food photos
- **User Profiles**: Follow other food enthusiasts
- **Photo Optimization**: Automatic image enhancement for food photography

### 📝 Culinary Bucket List
- **Goal Setting**: Create and track culinary goals and experiences
- **Priority Management**: Organize goals by High, Medium, Low priority
- **Location Tracking**: Pin experiences to specific locations
- **Progress Tracking**: Mark completed culinary adventures
- **Target Dates**: Set deadlines for your food goals
- **Category Organization**: Group goals by cuisine, cooking, travel, etc.

### 👨‍🍳 Recipe Collection
- **Recipe Discovery**: Browse curated recipes with ratings and reviews
- **Difficulty Levels**: Recipes categorized by Easy, Medium, Hard
- **Cooking Time**: Clear time estimates for meal planning
- **Serving Information**: Portion sizes and nutritional guidance
- **Save & Bookmark**: Keep your favorite recipes handy
- **User Reviews**: Community feedback and recipe modifications

### 🎨 Design Features
- **Food-Inspired Colors**: Vibrant palette featuring tomato red, avocado green, saffron yellow, and blueberry blue
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean, intuitive interface with shadcn/ui components
- **Accessibility**: Built with accessibility best practices in mind

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd foodieflow

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup
The app is designed to work with Supabase for backend functionality:
- User authentication
- Database storage
- Real-time updates
- File storage for images

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Charts**: Recharts
- **Backend**: Supabase (recommended)

## 📱 App Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Main navigation header
│   ├── RestaurantCard.tsx
│   ├── PhotoCard.tsx
│   ├── BucketListItem.tsx
│   ├── RecipeCard.tsx
│   └── FilterBar.tsx
├── pages/              # Main application pages
│   └── Index.tsx       # Landing page with all features
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── styles/             # Global styles and themes
```

## 🎯 Roadmap

### Phase 1 (Current)
- ✅ Restaurant discovery with filtering
- ✅ Food photo sharing interface
- ✅ Culinary bucket list management
- ✅ Recipe browsing and rating

### Phase 2 (Planned)
- 🔄 User authentication and profiles
- 🔄 Real-time photo uploads
- 🔄 Advanced search and recommendations
- 🔄 Social features and following

### Phase 3 (Future)
- 📅 Cooking class booking system
- 🚚 Food truck tracking
- 📖 Dining experience journaling
- 🤝 Social dining event organization

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

## 📄 License

This project is licensed under the MIT License.

## 🍕 Made with ❤️ by Food Lovers

FoodieFlow - Where every meal is an adventure! 🌟
