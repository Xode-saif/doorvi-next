import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import intelbrasLogo from "../../../public/assets/intelbras.png"
import igloo from "../../../public/assets/igloohome-logo.webp";
import mobgateLogo from "../../../public/assets/mobgate doorvi.png"
import waveShareLogo from "../../../public/assets/waveshare.png"
import pdkLogo from "../../../public/assets/pdk.avif"
import Image from 'next/image';

export default function InvestmentPartners() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(5);  
  const carouselRef = useRef(null);
  
  // Sample partner data - replace with your actual partners
  const partners = [
    { id: 1, logo: mobgateLogo, name: "Partner 1", webLink: "https://www.mobgate.com.br/" },
    { id: 2, logo: pdkLogo, name: "Partner 2", webLink: "https://www.prodatakey.com/" },
    { id: 3, logo: igloo, name: "Partner 3", webLink: "https://www.igloohome.co/" },
    { id: 4, logo: waveShareLogo, name: "Partner 4", webLink: "https://www.waveshare.com/modbus-poe-eth-relay.htm" },
    { id: 5, logo: intelbrasLogo, name: "Partner 5", webLink: "https://www.intelbras.com/en" },
    // { id: 6, logo: "/api/placeholder/180/80", name: "Partner 6", webLink: "https://partner6.com" },
    // { id: 7, logo: "/api/placeholder/180/80", name: "Partner 7", webLink: "https://partner7.com" },
    // { id: 8, logo: "/api/placeholder/180/80", name: "Partner 8", webLink: "https://partner8.com" },
  ];
  
  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(2); // Show 2 items on small mobile screens
      } else if (window.innerWidth <= 768) {
        setVisibleItems(3); // Show 3 items on larger mobile screens
      } else {
        setVisibleItems(5); // Show 5 items on desktop
      }
      
      // Reset index if needed when screen size changes
      if (currentIndex > partners.length - visibleItems) {
        setCurrentIndex(0);
      }
    };

    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex, partners.length]);

  const maxIndex = Math.max(0, partners.length - visibleItems);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-15">
      <div className="px-4 sm:px-10 py-6 sm:py-10">
        <h2 className="text-[2.986rem] 2xl:text-[6rem] font-bold text-center text-gray-800 mb-6 sm:mb-10">Our Integration Partners</h2>        
        <div className="relative" ref={carouselRef}>
          {/* Carousel Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-neutral-200  sm:p-2 rounded-full shadow-md hover:bg-gray-100 lg:hidden"
            aria-label="Previous partners"
          >
            <ChevronLeft className="text-gray-700" size={40} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10  bg-neutral-200  sm:p-2 rounded-full shadow-md hover:bg-gray-100 lg:hidden"
            aria-label="Next partners"
          >
            <ChevronRight className="text-gray-700" size={40} />
          </button>
          
          {/* Carousel Content */}
          <div className="overflow-hidden mx-8 sm:mx-12 2xl:gap-10 ">
            <div 
              className="flex sm:justify-center sm:items-center transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
            >
              {partners.map((partner) => (
                <div 
                  key={partner.id} 
                  className={`px-2 sm:px-4 flex-shrink-0 flex justify-center items-center`}
                  style={{ width: `${100 / visibleItems}%` }}
                >
                  <a 
                    href={partner.webLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-3 bg-white rounded-lg  hover:shadow-md transition-shadow duration-300"
                  >
                    <div className=" flex items-center justify-center">
                      <Image
                        width={400}
                        height={400} 
                        src={partner.logo} 
                        alt={`${partner.name} logo`} 
                        className="max-h-full max-w-full object-contain"
                      />                      
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Indicator Dots */}
        {/* change sm:hidden when we have more then 5 partner */}
        <div className="flex justify-center mt-4 sm:mt-8 lg:hidden">   
          {Array.from({ length: Math.min(partners.length - visibleItems + 1, partners.length) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-1 h-2 w-2 sm:h-3 sm:w-3 rounded-full ${
                currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}