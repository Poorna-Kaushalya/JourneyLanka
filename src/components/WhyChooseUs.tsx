
import { 
  CheckCircle, Tag, ShieldCheck, CreditCard, 
  Map, Hotel 
} from 'lucide-react';

const features = [
  { id: 1, icon: <CheckCircle size={36} className="feature-icon" />, title: 'Fast & Easy Booking System', description: 'Book your dream trip seamlessly in just a few clicks.' },
  { id: 2, icon: <Tag size={36} className="feature-icon" />, title: 'Best Price Guarantee', description: 'We offer unbeatable prices and transparent costs.' },
  { id: 3, icon: <ShieldCheck size={36} className="feature-icon" />, title: 'Certified Local Guides', description: 'Explore with knowledgeable, friendly, and certified experts.' },
  { id: 4, icon: <CreditCard size={36} className="feature-icon" />, title: 'Secure Payment System', description: 'Your data is protected with military-grade encryption.' },
  { id: 5, icon: <Map size={36} className="feature-icon" />, title: 'Real-time Travel Updates', description: 'Stay informed with live itinerary and status tracking.' },
  { id: 6, icon: <Hotel size={36} className="feature-icon" />, title: 'Hotel + Transport Packages', description: 'All-inclusive deals for ultimate peace of mind.' }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-glass bg-glass-about" id="about">
      <div className="container">
        <h2 className="text-center text-4xl font-bold mb-4 text-primary-dark">Why Choose JourneyLanka</h2>
        <p className="text-center text-text-light text-lg max-w-[600px] mx-auto mb-12">We go the extra mile to make your Sri Lankan journey safe, easy, and unforgettable.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map(feature => (
            <div key={feature.id} className="text-center p-10 rounded-2xl bg-bg transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] border border-transparent shadow-sm hover:bg-primary-light hover:border-[rgba(2,132,199,0.2)] hover:-translate-y-2 hover:shadow-lg group animate-on-scroll">
              <div className="inline-flex items-center justify-center w-[70px] h-[70px] bg-white rounded-full mb-6 shadow-md text-primary transition-all duration-400 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6">
                {feature.icon}
              </div>
              <h3 className="text-[1.15rem] font-bold mb-3 text-text">{feature.title}</h3>
              <p className="text-text-light text-[0.9rem] leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
