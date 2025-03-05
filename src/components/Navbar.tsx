
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-10 flex items-center justify-between animate-fade-in">
      <div className="flex items-center">
        <div className="mr-10">
          <img 
            src="/lovable-uploads/b7c5e724-82ea-45e2-9d33-464f1fe9c364.png" 
            alt="Naukri.com" 
            className="h-8 md:h-10" 
          />
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-naukri-blue transition-colors font-medium">Jobs</a>
          <a href="#" className="text-gray-700 hover:text-naukri-blue transition-colors font-medium">Plans</a>
          <a href="#" className="text-gray-700 hover:text-naukri-blue transition-colors font-medium">Book a Demo</a>
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
  );
};

export default Navbar;
