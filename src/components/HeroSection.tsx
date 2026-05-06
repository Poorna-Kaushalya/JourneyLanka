import { useState, useEffect } from 'react';
import { Search, MapPin, Calendar, ChevronLeft, ChevronRight, Users } from 'lucide-react';

const images = [
  `${import.meta.env.BASE_URL}images/hero.png`,
  `${import.meta.env.BASE_URL}images/sigiriya.png`,
  `${import.meta.env.BASE_URL}images/ella.png`,
  `${import.meta.env.BASE_URL}images/mirissa.png`
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section 
      className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images.map((img, index) => (
        <div 
          key={index} 
          className={`absolute inset-0 bg-cover bg-center z-0 transition-all duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-black/20 to-primary/30"></div>
      
      <button className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:bg-white/30 hover:scale-110 hidden md:flex" onClick={prevSlide} aria-label="Previous image">
        <ChevronLeft size={32} />
      </button>
      <button className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center z-20 transition-all duration-300 hover:bg-white/30 hover:scale-110 hidden md:flex" onClick={nextSlide} aria-label="Next image">
        <ChevronRight size={32} />
      </button>

      <div className="relative z-20 text-center max-w-[900px] px-6 animate-on-scroll is-visible" id="home">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)]">Discover Sri Lanka with JourneyLanka</h1>
        <p className="text-lg md:text-xl font-normal mb-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">Travel, explore, and book unforgettable experiences.</p>
        
        <div className="flex flex-col md:flex-row items-center bg-white/15 backdrop-blur-md border border-white/30 p-4 md:p-3 rounded-2xl md:rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.2)] text-white max-w-[850px] mx-auto gap-4 md:gap-0">
          <div className="flex items-center flex-1 px-2 md:px-6 py-2 gap-4 w-full md:w-auto border-b md:border-b-0 border-white/20">
            <MapPin className="text-white/90" size={20} />
            <div className="flex flex-col items-start flex-1">
              <label className="text-xs font-semibold text-white/80 mb-1 drop-shadow-sm">Destination (Where to?)</label>
              <input type="text" placeholder="e.g. Ella, Kandy" className="bg-transparent border-none outline-none text-base text-white w-full font-medium placeholder:text-white/60" />
            </div>
          </div>
          
          <div className="hidden md:block w-px h-10 bg-white/20"></div>
          
          <div className="flex items-center flex-1 px-2 md:px-6 py-2 gap-4 w-full md:w-auto border-b md:border-b-0 border-white/20">
            <Calendar className="text-white/90" size={20} />
            <div className="flex flex-col items-start flex-1">
              <label className="text-xs font-semibold text-white/80 mb-1 drop-shadow-sm">Travel Date (Select date)</label>
              <input type="date" className="bg-transparent border-none outline-none text-base text-white w-full font-medium [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-80 [&::-webkit-calendar-picker-indicator]:cursor-pointer" />
            </div>
          </div>
          
          <div className="hidden md:block w-px h-10 bg-white/20"></div>
          
          <div className="flex items-center flex-1 px-2 md:px-6 py-2 gap-4 w-full md:w-auto">
            <Users className="text-white/90" size={20} />
            <div className="flex flex-col items-start flex-1">
              <label className="text-xs font-semibold text-white/80 mb-1 drop-shadow-sm">Travelers</label>
              <input type="number" min="1" placeholder="2 Guests" className="bg-transparent border-none outline-none text-base text-white w-full font-medium placeholder:text-white/60" />
            </div>
          </div>
          
          <button className="flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-xl md:rounded-full font-semibold shadow-[0_4px_15px_rgba(2,132,199,0.4)] transition-all duration-300 w-full md:w-auto mt-2 md:mt-0">
            <Search size={20} />
            <span>Explore Now</span>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button 
            key={index}
            className={`w-3 h-3 rounded-full border-none transition-all duration-300 hover:bg-white/80 ${index === currentIndex ? 'bg-white scale-125 shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-white/40'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
