
import React from 'react';
import { Home, Building2, Cog } from 'lucide-react';

const CategoryCard = ({ icon, title, count, color }) => {
  return (
    <div className="category-card flex flex-col items-center p-6 rounded-xl bg-white shadow-sm cursor-pointer">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-gray-600">{count}</p>
    </div>
  );
};

const TrendingCategories = () => {
  return (
    <div className="w-full py-8 px-4 md:px-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Trending on This Website today
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <CategoryCard 
          icon={<Home className="h-8 w-8 text-white" />}
          title="Remote"
          count="5.3k + jobs"
          color="bg-indigo-400"
        />
        
        <CategoryCard 
          icon={<Building2 className="h-8 w-8 text-white" />}
          title="MNC"
          count="19.3k+ jobs"
          color="bg-sky-400"
        />
        
        <CategoryCard 
          icon={<Cog className="h-8 w-8 text-white" />}
          title="Engineering"
          count="16.3k +jobs"
          color="bg-yellow-400"
        />
      </div>
    </div>
  );
};

export default TrendingCategories;
