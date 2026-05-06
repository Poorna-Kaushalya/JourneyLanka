
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative py-32 flex items-center justify-center text-center overflow-hidden bg-[url('/images/sigiriya.png')] bg-cover bg-center bg-fixed before:content-[''] before:absolute before:inset-0 before:bg-black/60 before:z-[1]">
      <div className="container relative z-[2] text-white max-w-[800px] animate-on-scroll">
        <h2 className="text-[2.25rem] md:text-[3rem] font-extrabold mb-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]">Start your journey today with JourneyLanka</h2>
        <p className="text-[1.3rem] mb-12 opacity-95 drop-shadow-[0_2px_5px_rgba(0,0,0,0.1)]">Join thousands of travelers exploring Sri Lanka.</p>
        <button className="inline-flex items-center justify-center gap-3 px-12 py-5 text-[1.2rem] font-semibold rounded-full bg-white text-primary-dark shadow-[0_10px_25px_rgba(0,0,0,0.2)] transition-all duration-300 hover:bg-sand hover:text-text hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
          <span>Book a Tour Now</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CTASection;
