import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Sarah Jenkins', country: 'UK', rating: 5, comment: 'JourneyLanka made our honeymoon unforgettable. Amazing service from start to finish!', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Michael Chen', country: 'Australia', rating: 5, comment: 'Best prices and smooth booking. The Yala safari was incredible!', avatar: 'https://i.pravatar.cc/150?img=11' },
  { id: 3, name: 'Elena Rodriguez', country: 'Spain', rating: 5, comment: 'Excellent service and knowledgeable driver. Beautiful country.', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 4, name: 'Ahmed Ali', country: 'UAE', rating: 5, comment: 'The custom itinerary was perfectly planned. Very responsive support team.', avatar: 'https://i.pravatar.cc/150?img=12' },
  { id: 5, name: 'Lisa Müller', country: 'Germany', rating: 4, comment: 'Great hotel selections and the train ride to Ella was breathtaking.', avatar: 'https://i.pravatar.cc/150?img=9' }
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate max index depending on screen size, assuming 3 cards visible on desktop
  const maxIndex = Math.max(0, testimonials.length - 3);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, maxIndex]);

  const nextSlide = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="py-24 bg-glass bg-glass-testimonials">
      <div className="container">
        <h2 className="text-center text-4xl font-bold mb-4 text-primary-dark">What Our Travelers Say</h2>
        <p className="text-center text-text-light text-lg max-w-[600px] mx-auto mb-12">Real experiences from travelers who explored Sri Lanka with us.</p>
        
        <div 
          className="relative max-w-full lg:max-w-[1200px] mx-auto mt-16 mb-8 px-0 md:px-12 animate-on-scroll"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border-none w-[50px] h-[50px] rounded-full hidden md:flex items-center justify-center shadow-md cursor-pointer text-text transition-all duration-300 z-10 hover:bg-primary hover:text-white hover:scale-110" onClick={prevSlide}><ChevronLeft size={24} /></button>
          
          <div className="overflow-hidden rounded-2xl py-4">
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] translate-x-[calc(-100%*var(--current-index))] md:translate-x-[calc(-33.333333%*var(--current-index))]"
              style={{ '--current-index': currentIndex } as React.CSSProperties}
            >
              {testimonials.map(review => (
                <div key={review.id} className="min-w-full md:min-w-[33.333333%] px-4 flex">
                  <div className="bg-bg p-8 md:p-12 rounded-2xl shadow-md relative text-center border border-black/5 flex flex-col w-full">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-8xl text-primary-light font-serif leading-none opacity-30 z-0">"</div>
                    <div className="flex justify-center gap-1 mb-6 relative z-10">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={20} className="text-[#fbbf24]" fill="currentColor" />
                      ))}
                    </div>
                    <p className="text-xl italic text-text-light leading-relaxed mb-10 relative z-10">{review.comment}</p>
                    <div className="flex flex-col items-center gap-4 relative z-10 mt-auto">
                      <img src={review.avatar} alt={review.name} className="w-[70px] h-[70px] rounded-full object-cover shadow-sm border-[3px] border-white" />
                      <div>
                        <h4 className="font-extrabold text-text text-[1.1rem]">{review.name}</h4>
                        <p className="text-[0.9rem] text-primary font-medium">{review.country}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border-none w-[50px] h-[50px] rounded-full hidden md:flex items-center justify-center shadow-md cursor-pointer text-text transition-all duration-300 z-10 hover:bg-primary hover:text-white hover:scale-110" onClick={nextSlide}><ChevronRight size={24} /></button>
        </div>
        
        <div className="flex justify-center gap-2 mt-4">
          {[...Array(maxIndex + 1)].map((_, idx) => (
            <button 
              key={idx} 
              className={`w-2.5 h-2.5 rounded-full border-none transition-all duration-300 cursor-pointer ${idx === currentIndex ? 'bg-primary scale-125' : 'bg-slate-300'}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
