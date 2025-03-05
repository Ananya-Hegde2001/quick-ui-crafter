
import React from 'react';

interface CompanyCardProps {
  logo: string;
  name: string;
  reviews: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ logo, name, reviews }) => {
  return (
    <div className="company-card flex flex-col items-center p-6 rounded-xl bg-white shadow-sm cursor-pointer">
      <div className="w-20 h-20 flex items-center justify-center mb-4">
        <img src={logo} alt={name} className="max-w-full max-h-full object-contain" />
      </div>
      <h3 className="text-lg font-medium mb-1 text-center">{name}</h3>
      <p className="text-gray-600 text-sm">{reviews}</p>
    </div>
  );
};

const FeaturedCompanies: React.FC = () => {
  return (
    <div className="w-full py-12 px-4 md:px-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Featured companies actively hiring
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <CompanyCard 
          logo="https://upload.wikimedia.org/wikipedia/en/thumb/3/32/L%26T_Infotech_logo.svg/1200px-L%26T_Infotech_logo.svg.png"
          name="L&T Infotech (LTI)"
          reviews="3.4 reviews"
        />
        
        <CompanyCard 
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/FIITJEE_logo.svg/1200px-FIITJEE_logo.svg.png"
          name="FIITJEE"
          reviews="3.5 reviews"
        />
        
        <CompanyCard 
          logo="https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Capgemini_Logo_2017.svg/1200px-Capgemini_Logo_2017.svg.png"
          name="Capgemini"
          reviews="16.3k +reviews"
        />
        
        <CompanyCard 
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Synechron_Logo.svg/2560px-Synechron_Logo.svg.png"
          name="Software &lt;"
          reviews="204.5k + reviews"
        />
      </div>
    </div>
  );
};

export default FeaturedCompanies;
