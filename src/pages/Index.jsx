
import React from 'react';
import Navbar from '@/components/Navbar';
import SearchSection from '@/components/SearchSection';
import TrendingCategories from '@/components/TrendingCategories';
import FeaturedCompanies from '@/components/FeaturedCompanies';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="max-w-screen-2xl mx-auto w-full flex-1">
        <Navbar />
        
        <main className="mt-6">
          <SearchSection />
          <TrendingCategories />
          <FeaturedCompanies />
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
