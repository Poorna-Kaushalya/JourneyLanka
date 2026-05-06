import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MapSection from './components/MapSection';
import FeaturedTours from './components/FeaturedTours';
import WhyChooseUs from './components/WhyChooseUs';
import PopularDestinations from './components/PopularDestinations';
import TestimonialSlider from './components/TestimonialSlider';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedTours />
      <MapSection />
      <PopularDestinations />
      <WhyChooseUs />
      <TestimonialSlider />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
