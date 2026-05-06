import { useState } from 'react';
import { MapPin, Clock, Star } from 'lucide-react';
import TourModal from './TourModal';

const tours = [
  {
    id: 1,
    name: 'Sigiriya & Dambulla Day Tour',
    location: 'Central Province',
    price: 120,
    rating: 4.8,
    duration: '1 Day',
    image: `${import.meta.env.BASE_URL}images/sigiriya.png`
  },
  {
    id: 2,
    name: 'Ella Train Journey & Tea Trails',
    location: 'Ella, Uva Province',
    price: 85,
    rating: 4.9,
    duration: '2 Days',
    image: `${import.meta.env.BASE_URL}images/ella.png`
  },
  {
    id: 3,
    name: 'Mirissa Whale Watching & Beach',
    location: 'Southern Coast',
    price: 150,
    rating: 4.7,
    duration: '3 Days',
    image: `${import.meta.env.BASE_URL}images/mirissa.png`
  }
];

const FeaturedTours = () => {
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (tour: any) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-glass bg-glass-tours" id="tours">
      <div className="container">
        <h2 className="text-center text-4xl font-bold mb-4 text-primary-dark">Featured Tour Packages</h2>
        <p className="text-center text-text-light text-lg max-w-[600px] mx-auto mb-12">Discover our most popular hand-picked itineraries for the ultimate Sri Lankan experience.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {tours.map(tour => (
            <div key={tour.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col group animate-on-scroll">
              <div className="relative h-60 overflow-hidden">
                <img src={tour.image} alt={tour.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-md font-bold shadow-sm">${tour.price}</div>
              </div>
              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between mb-3 text-sm text-text-light">
                  <span className="flex items-center gap-1">
                    <MapPin size={16} /> {tour.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={16} className="text-[#fbbf24]" fill="currentColor" /> {tour.rating}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-text">{tour.name}</h3>
                <div className="flex items-center gap-2 text-sm text-text-light mb-6 mt-auto">
                  <Clock size={16} /> {tour.duration}
                </div>
                <button 
                  className="w-full py-3 bg-secondary text-white rounded-md font-semibold hover:bg-secondary-dark hover:-translate-y-0.5 shadow-sm hover:shadow-md transition-all duration-300"
                  onClick={() => openModal(tour)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TourModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        tour={selectedTour} 
      />
    </section>
  );
};

export default FeaturedTours;
