
import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and social media */}
          <div className="space-y-6">
            {/* Dummy logo - updated without naukri reference */}
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                JS
              </div>
              <span className="ml-2 text-2xl font-bold text-blue-600">JobSeek</span>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-800 mb-3">Connect with us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Employer home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Sitemap</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Credits</a></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Help & Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Help center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Summons/Notices</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Grievances</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Report issue</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium text-gray-800 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms & conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Fraud alert</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Trust & safety</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} JobSeek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
