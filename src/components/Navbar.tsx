
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [showJobsDropdown, setShowJobsDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState<'categories' | 'locations' | 'designations'>('categories');
  
  const toggleJobsDropdown = () => {
    setShowJobsDropdown(!showJobsDropdown);
  };

  const handleTabClick = (tab: 'categories' | 'locations' | 'designations') => {
    setActiveTab(tab);
  };

  return (
    <div className="relative">
      <nav className="w-full py-4 px-6 md:px-10 flex items-center justify-between animate-fade-in bg-white">
        <div className="flex items-center">
          <div className="mr-10">
            <img 
              src="/lovable-uploads/b7c5e724-82ea-45e2-9d33-464f1fe9c364.png" 
              alt="Naukri.com" 
              className="h-8 md:h-10" 
            />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-naukri-blue transition-colors font-medium">Home</a>
            <div className="relative">
              <button 
                onClick={toggleJobsDropdown}
                className="flex items-center text-gray-700 hover:text-naukri-blue transition-colors font-medium"
              >
                Jobs <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#" className="text-gray-700 hover:text-naukri-blue transition-colors font-medium">Plans</a>
            <Button 
              variant="outline" 
              className="border-naukri-blue text-naukri-blue hover:bg-naukri-blue/10 transition-all flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M7 15h0M12 15h0M17 15h0" />
              </svg>
              Book a Demo
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="border-naukri-blue text-naukri-blue hover:bg-naukri-blue/10 transition-all"
          >
            Login
          </Button>
          <Button 
            className="bg-naukri-green hover:bg-naukri-green/90 transition-all"
          >
            Register
          </Button>
        </div>
      </nav>
      
      {showJobsDropdown && (
        <div className="absolute left-0 right-0 z-50 mt-0 bg-white shadow-lg rounded-b-lg animate-fade-in-up border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex space-x-6 py-4 border-b border-gray-100">
              <button 
                className={`px-4 py-2 rounded-md flex items-center ${activeTab === 'categories' ? 'bg-blue-50 text-naukri-blue' : 'text-gray-600'}`}
                onClick={() => handleTabClick('categories')}
              >
                JOBS BY CATEGORIES <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <button 
                className={`px-4 py-2 rounded-md flex items-center ${activeTab === 'locations' ? 'bg-blue-50 text-naukri-blue' : 'text-gray-600'}`}
                onClick={() => handleTabClick('locations')}
              >
                JOBS BY LOCATIONS <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <button 
                className={`px-4 py-2 rounded-md flex items-center ${activeTab === 'designations' ? 'bg-blue-50 text-naukri-blue' : 'text-gray-600'}`}
                onClick={() => handleTabClick('designations')}
              >
                JOBS BY DESIGNATIONS <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <div className="py-6">
              {activeTab === 'categories' && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4">
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Mathematics Teacher Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">English Teacher Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Biology Teacher Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Science Teacher Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Hindi Teacher Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Social Science Teacher Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Physics Teacher Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Chemistry Teacher Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Assistant Teacher Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Computer Science Teacher Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">History Teacher Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Computer Teacher Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Commerce Teacher Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Economics Teacher Jobs</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Accountancy Teacher Jobs</a>
                </div>
              )}
              
              {activeTab === 'locations' && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4">
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher jobs in Bangalore</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher jobs in Pune</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher jobs in Chennai</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher jobs in Kolkata</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher jobs in Hyderabad</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher jobs in Ahmedabad</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher jobs in Mumbai</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher jobs in Jaipur</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher jobs in Lucknow</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher jobs in Delhi</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher jobs in Indore</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher jobs in Bhubaneswar</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher jobs in Coimbatore</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher jobs in Patna</a>
                  <a href="#" className="text-gray-700 hover:text-naukri-blue">Teacher jobs in Agra</a>
                </div>
              )}
              
              {activeTab === 'designations' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                    <img src="/lovable-uploads/cd2dba27-a213-4074-af68-7ff38442f017.png" alt="Coaching" className="h-12 w-12 mb-2 text-yellow-500" />
                    <h3 className="font-medium">Coaching</h3>
                    <p className="text-sm text-gray-500">1905 Jobs</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                    <img src="/lovable-uploads/562130bd-7449-42d3-8ad5-c53e55c75771.png" alt="School" className="h-12 w-12 mb-2 text-yellow-500" />
                    <h3 className="font-medium">School</h3>
                    <p className="text-sm text-gray-500">5277 Jobs</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                    <img src="/lovable-uploads/bdc47d8b-43d7-41e4-90f2-9e4a79fbba74.png" alt="Pre-School" className="h-12 w-12 mb-2 text-yellow-500" />
                    <h3 className="font-medium">Pre-School</h3>
                    <p className="text-sm text-gray-500">503 Jobs</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                    <img src="/lovable-uploads/cd2dba27-a213-4074-af68-7ff38442f017.png" alt="EdTech" className="h-12 w-12 mb-2 text-yellow-500" />
                    <h3 className="font-medium">EdTech</h3>
                    <p className="text-sm text-gray-500">963 Jobs</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                    <img src="/lovable-uploads/562130bd-7449-42d3-8ad5-c53e55c75771.png" alt="College/University" className="h-12 w-12 mb-2 text-yellow-500" />
                    <h3 className="font-medium">College/University</h3>
                    <p className="text-sm text-gray-500">4335 Jobs</p>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-gray-50">
                    <img src="/lovable-uploads/bdc47d8b-43d7-41e4-90f2-9e4a79fbba74.png" alt="Vocational Training Institute" className="h-12 w-12 mb-2 text-yellow-500" />
                    <h3 className="font-medium">Vocational Training Institute</h3>
                    <p className="text-sm text-gray-500">153 Jobs</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
