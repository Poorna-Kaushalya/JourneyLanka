import React, { useEffect } from 'react';
import { X, MapPin, Clock, Star, Check, Info } from 'lucide-react';

interface Tour {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  duration: string;
  image: string;
  description?: string;
}

interface TourModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: Tour | null;
}

const TourModal: React.FC<TourModalProps> = ({ isOpen, onClose, tour }) => {
  // Prevent scrolling on body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen || !tour) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[2000] flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-[1.5rem] max-w-[900px] w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-zoom-in" onClick={e => e.stopPropagation()}>
        <button className="absolute top-4 right-4 bg-white/80 hover:bg-white border-none w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-10 transition-all shadow-sm hover:scale-110 hover:text-red-500" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="flex flex-col">
          <div className="relative h-[250px] md:h-[350px]">
            <img src={tour.image} alt={tour.name} className="w-full h-full object-cover" />
            <div className="absolute -bottom-5 right-8 bg-primary text-white py-3 px-6 rounded-2xl text-2xl font-extrabold shadow-lg border-4 border-white">${tour.price}</div>
          </div>
          
          <div className="p-8 md:p-10 pt-10">
            <div>
              <div className="flex gap-6 text-text-light text-[0.95rem] font-medium mb-4 flex-wrap">
                <span className="flex items-center gap-1.5"><MapPin size={16} /> {tour.location}</span>
                <span className="flex items-center gap-1.5"><Star size={16} fill="#fbbf24" color="#fbbf24" /> {tour.rating}</span>
                <span className="flex items-center gap-1.5"><Clock size={16} /> {tour.duration}</span>
              </div>
              <h2 className="text-3xl text-text mb-6 font-bold">{tour.name}</h2>
            </div>
            
            <div className="text-text-light leading-relaxed mb-8 pb-8 border-b border-slate-200">
              <p>Experience the beauty of {tour.location} with this carefully curated {tour.duration} package. Perfect for adventure seekers and nature lovers.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="flex items-center gap-2 text-lg mb-4 font-bold"><Check size={20} className="text-[#10b981]" /> Included</h3>
                <ul className="list-none p-0">
                  {['Professional English-speaking guide', 'Comfortable AC transportation', 'All entrance fees and tickets', 'Daily breakfast'].map((item, i) => (
                    <li key={i} className="relative pl-6 mb-2 text-text-light before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold">{item}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="flex items-center gap-2 text-lg mb-4 font-bold"><Info size={20} className="text-[#f59e0b]" /> Need to Know</h3>
                <ul className="list-none p-0">
                  {['Not wheelchair accessible', 'Infants must sit on laps', 'Moderate physical fitness required'].map((item, i) => (
                    <li key={i} className="relative pl-6 mb-2 text-text-light before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between md:items-center bg-bg p-6 rounded-2xl mt-4 gap-6 md:gap-0">
              <div className="text-center md:text-left">
                <p className="text-sm text-text-light mb-1">Total Price</p>
                <h3 className="text-3xl text-text font-bold">${tour.price} <span className="text-base text-text-light font-normal">/ person</span></h3>
              </div>
              <button className="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-md font-semibold text-lg hover:bg-primary-dark hover:-translate-y-0.5 shadow-sm transition-all duration-300">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourModal;
