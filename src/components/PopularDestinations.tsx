

const destinations = [
  { id: 1, name: 'Ella', tagline: 'Misty Mountains', image: '/images/ella.png', span: 'col-span-2 row-span-2' },
  { id: 2, name: 'Kandy', tagline: 'Cultural Heart', image: '/images/kandy.png', span: 'col-span-1 row-span-1' },
  { id: 3, name: 'Galle', tagline: 'Historic Fort', image: '/images/galle.png', span: 'col-span-1 row-span-1' },
  { id: 4, name: 'Sigiriya', tagline: 'Ancient Fortress', image: '/images/sigiriya.png', span: 'col-span-1 row-span-2' },
  { id: 5, name: 'Mirissa', tagline: 'Whale Watching', image: '/images/mirissa.png', span: 'col-span-1 row-span-1' },
  { id: 6, name: 'Nuwara Eliya', tagline: 'Little England', image: '/images/ella.png', span: 'col-span-1 row-span-1' },
  { id: 7, name: 'Arugam Bay', tagline: 'Surfers Paradise', image: '/images/mirissa.png', span: 'col-span-1 row-span-1' },
  { id: 8, name: 'Trincomalee', tagline: 'Pristine Beaches', image: '/images/hero.png', span: 'col-span-1 row-span-1' },
  { id: 9, name: 'Colombo', tagline: 'Bustling Capital', image: '/images/kandy.png', span: 'col-span-1 row-span-1' },
  { id: 10, name: 'Jaffna', tagline: 'Northern Culture', image: '/images/galle.png', span: 'col-span-2 row-span-1' }
];

const PopularDestinations = () => {
  return (
    <section className="py-24 bg-glass bg-glass-destinations" id="destinations">
      <div className="container">
        <h2 className="text-center text-4xl font-bold mb-4 text-primary-dark">Popular Destinations</h2>
        <p className="text-center text-text-light text-lg max-w-[600px] mx-auto mb-12">Explore the most breathtaking locations across the island, from misty mountains to golden beaches.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 auto-rows-[250px] lg:auto-rows-[220px] gap-6 mt-12">
          {destinations.map((dest) => {
            const spanClasses = dest.span
              .replace('col-span-2', 'sm:col-span-2')
              .replace('row-span-2', 'sm:row-span-2')
              .replace('col-span-1', 'sm:col-span-1')
              .replace('row-span-1', 'sm:row-span-1');
              
            return (
              <div key={dest.id} className={`relative rounded-2xl overflow-hidden shadow-md cursor-pointer group animate-on-scroll ${spanClasses}`}>
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 transition-colors duration-300 group-hover:from-black/90 group-hover:via-black/40">
                  <div className="translate-y-5 transition-transform duration-400 group-hover:translate-y-0">
                    <h3 className="text-white text-2xl font-bold drop-shadow-md mb-1">{dest.name}</h3>
                    <p className="text-primary-light text-[0.9rem] font-medium opacity-0 transition-opacity duration-400 group-hover:opacity-100">{dest.tagline}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
