
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, ChevronDown } from 'lucide-react';

const SearchSection: React.FC = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-16 md:py-24 text-center animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
        Find your dream job now
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        5 lakh+ jobs for you to explore
      </p>

      <div className="search-container w-full max-w-4xl mx-auto bg-white rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-12 gap-0">
          <div className="md:col-span-5 p-3 border-r border-gray-200">
            <div className="flex items-center">
              <Search className="h-5 w-5 text-gray-400 mr-2" />
              <Input 
                type="text" 
                placeholder="Enter Skills / designations / companies" 
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
              />
            </div>
          </div>

          <div className="md:col-span-3 p-3 border-r border-gray-200">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              <Input 
                type="text" 
                placeholder="Enter location" 
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
              />
            </div>
          </div>

          <div className="md:col-span-2 p-3 border-r border-gray-200">
            <div className="flex items-center">
              <Input 
                type="text" 
                placeholder="Select Experience" 
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                readOnly
              />
              <ChevronDown className="h-5 w-5 text-gray-400 ml-1" />
            </div>
          </div>

          <div className="md:col-span-2 p-1">
            <Button className="w-full h-full rounded-md bg-[#4A7AFF] hover:bg-blue-600 transition-colors">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
