
import React from 'react';
import Navbar from '@/components/Navbar';
import SearchSection from '@/components/SearchSection';
import TrendingCategories from '@/components/TrendingCategories';
import FeaturedCompanies from '@/components/FeaturedCompanies';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-screen-2xl mx-auto">
        <Navbar />
        
        <main>
          <SearchSection />
          <TrendingCategories />
          <FeaturedCompanies />
        </main>
      </div>
    </div>
  );
};

export default Index;
