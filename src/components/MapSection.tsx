import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import sriLanka from '@svg-maps/sri-lanka';
const locations = [
  { id: 1, name: 'Colombo', top: '70%', left: '20%', info: 'Commercial capital, bustling city life and coastline.', image: `${import.meta.env.BASE_URL}images/kandy.png` },
  { id: 2, name: 'Kandy', top: '60%', left: '45%', info: 'Cultural heart of Sri Lanka, home to the Temple of the Tooth.', image: `${import.meta.env.BASE_URL}images/kandy.png` },
  { id: 3, name: 'Ella', top: '72%', left: '55%', info: 'Mountain village known for tea plantations and Nine Arch Bridge.', image: `${import.meta.env.BASE_URL}images/ella.png` },
  { id: 4, name: 'Sigiriya', top: '45%', left: '48%', info: 'Ancient rock fortress and UNESCO World Heritage site.', image: `${import.meta.env.BASE_URL}images/sigiriya.png` },
  { id: 5, name: 'Galle', top: '92%', left: '25%', info: 'Historic colonial fort city on the southwest coast.', image: `${import.meta.env.BASE_URL}images/galle.png` },
  { id: 6, name: 'Mirissa', top: '95%', left: '40%', info: 'Beautiful beaches and world-class whale watching.', image: `${import.meta.env.BASE_URL}images/mirissa.png` },
  { id: 7, name: 'Nuwara Eliya', top: '65%', left: '50%', info: 'Little England, famous for cool climate and tea estates.', image: `${import.meta.env.BASE_URL}images/ella.png` },
  { id: 8, name: 'Jaffna', top: '10%', left: '35%', info: 'Northern capital rich in Tamil culture and history.', image: `${import.meta.env.BASE_URL}images/galle.png` }
];

const mapColors = ['#f0f9ff', '#e0f2fe', '#bae6fd', '#f0fdf4', '#dcfce7', '#fefce8', '#fef9c3'];

const MapSection: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);

  return (
    <section className="py-24 bg-glass bg-glass-map" id="map">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="max-w-full lg:max-w-[550px] text-center lg:text-left animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4 text-primary-dark">Explore the Island</h2>
          <p className="text-text-light text-lg mb-8">Discover the diverse regions of Sri Lanka with our interactive map.</p>
          
          <div className="text-text-light leading-relaxed mb-6 text-lg">
            <p className="mb-6">
              Sri Lanka, the "Pearl of the Indian Ocean," is a land of stunning contrast and spectacular beauty. 
              From the golden sun-kissed beaches that line the coast to the misty, tea-covered hills of the central highlands, 
              every region offers a unique and unforgettable adventure.
            </p>
            <p>
              Use our interactive map to explore ancient cities, wildlife sanctuaries, and vibrant cultural hubs. 
              Hover or click on any location to learn more and see a preview of what awaits you.
            </p>
            <button className="mt-8 px-6 py-3 bg-primary text-white rounded-md font-semibold hover:bg-primary-dark hover:-translate-y-0.5 shadow-sm transition-all duration-300">Start Planning</button>
          </div>
        </div>
        
        <div className="relative w-full max-w-[500px] mx-auto rounded-3xl bg-slate-100 p-8 shadow-[inset_0_2px_10px_rgba(0,0,0,0.05)] animate-on-scroll">
          <svg 
            viewBox={sriLanka.viewBox}
            className="w-full h-auto drop-shadow-[0_10px_15px_rgba(0,0,0,0.05)] block"
            aria-label={sriLanka.label}
          >
            {sriLanka.locations.map((region: any, index: number) => (
              <path 
                key={region.id} 
                d={region.path} 
                className="stroke-white stroke-[1.5px] transition-all duration-300 cursor-crosshair hover:fill-[#93c5fd] hover:stroke-[#3b82f6] hover:stroke-2"
                name={region.name}
                style={{ fill: mapColors[index % mapColors.length] }}
              />
            ))}
          </svg>
          
          {locations.map(loc => (
            <div 
              key={loc.id} 
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 group"
              style={{ top: loc.top, left: loc.left }}
              onMouseEnter={() => setActiveLocation(loc.id)}
              onMouseLeave={() => setActiveLocation(null)}
              onClick={() => setActiveLocation(loc.id === activeLocation ? null : loc.id)}
            >
              <div className="flex flex-col items-center gap-1 transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1">
                <MapPin size={28} fill="var(--color-primary)" color="white" />
                <span className="bg-white/95 px-2.5 py-1 rounded-md text-[0.8rem] font-extrabold text-primary-dark shadow-sm whitespace-nowrap tracking-wide">{loc.name}</span>
              </div>
              
              <div className={`absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2.5 w-[150px] sm:w-[260px] bg-white/85 backdrop-blur-md border border-white/50 rounded-md p-4 shadow-lg opacity-0 invisible transition-all duration-300 pointer-events-none z-20 
                              after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-solid after:border-[rgba(255,255,255,0.85)_transparent_transparent_transparent]
                              ${activeLocation === loc.id ? '!opacity-100 !visible -translate-y-[15px]' : 'group-hover:opacity-100 group-hover:visible group-hover:-translate-y-[15px]'}`}>
                <img src={loc.image} alt={loc.name} className="w-full h-[120px] object-cover rounded-md mb-3 shadow-sm" />
                <h4 className="text-[1.1rem] text-primary-dark mb-1 font-bold">{loc.name}</h4>
                <p className="text-[0.85rem] text-text-light leading-snug m-0">{loc.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
