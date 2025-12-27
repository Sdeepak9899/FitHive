import React from 'react';
import Title from '../component/Title';
import about from "../assets/about.png";
import NewsletterBox from '../component/NewLetterBox';


function Contact() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gradient-to-l from-[#141414] to-[#0c2025] pt-24 pb-20 px-4 md:px-10 overflow-hidden">
      
      {/* Page Title */}
      <div className="mb-16">
        <Title text1="CONTACT" text2="US" />
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src={about}
            alt="LIVN Studio" 
            className="w-full max-w-md rounded-sm shadow-2xl border border-gray-800 object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 text-gray-300">
          <h2 className="text-2xl font-semibold text-white tracking-widest uppercase">Our Store</h2>
          
          <div className="space-y-4 text-lg">
            <p className="hover:text-white transition-colors">
              123 Fashion Street, Design District <br />
              New York, NY 10001
            </p>
            
            <p className="hover:text-white transition-colors">
              Tel: <span className="font-light">+1 (555) 000-0000</span> <br />
              Email: <span className="font-light">support@livn.com</span>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-medium text-white mb-2">Careers at LIVN</h3>
            <p className="mb-6 font-light">Learn more about our teams and job openings.</p>
            
            <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-tighter text-sm">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
            <NewsletterBox/>
    </div>
  );
}

export default Contact;