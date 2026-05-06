import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text text-white pt-20">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <h3 className="text-[1.8rem] font-extrabold mb-4 text-white">JourneyLanka</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Your trusted travel partner in Sri Lanka.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-all duration-300 hover:bg-primary hover:-translate-y-1"><FaFacebook size={20} /></a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-all duration-300 hover:bg-primary hover:-translate-y-1"><FaTwitter size={20} /></a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full transition-all duration-300 hover:bg-primary hover:-translate-y-1"><FaInstagram size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-[1.2rem] font-bold mb-6 text-white">Quick Links</h4>
            <ul className="list-none p-0 flex flex-col gap-3">
              <li><a href="#" className="text-slate-400 transition-all duration-300 hover:text-primary-light hover:pl-1">Home</a></li>
              <li><a href="#" className="text-slate-400 transition-all duration-300 hover:text-primary-light hover:pl-1">About</a></li>
              <li><a href="#" className="text-slate-400 transition-all duration-300 hover:text-primary-light hover:pl-1">Tours</a></li>
              <li><a href="#" className="text-slate-400 transition-all duration-300 hover:text-primary-light hover:pl-1">Destinations</a></li>
              <li><a href="#" className="text-slate-400 transition-all duration-300 hover:text-primary-light hover:pl-1">Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[1.2rem] font-bold mb-6 text-white">Support</h4>
            <ul className="list-none p-0 flex flex-col gap-3">
              <li><a href="#" className="text-slate-400 transition-all duration-300 hover:text-primary-light hover:pl-1">FAQ</a></li>
              <li><a href="#" className="text-slate-400 transition-all duration-300 hover:text-primary-light hover:pl-1">Terms</a></li>
              <li><a href="#" className="text-slate-400 transition-all duration-300 hover:text-primary-light hover:pl-1">Privacy</a></li>
              <li><a href="#" className="text-slate-400 transition-all duration-300 hover:text-primary-light hover:pl-1">Cancellation</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h4 className="text-[1.2rem] font-bold mb-6 text-white">Contact</h4>
            <ul className="list-none p-0 flex flex-col gap-4">
              <li className="flex items-start gap-4 text-slate-400 leading-relaxed">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Colombo, Sri Lanka</span>
              </li>
              <li className="flex items-start gap-4 text-slate-400 leading-relaxed">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-start gap-4 text-slate-400 leading-relaxed">
                <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                <span>info@journeylanka.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 py-6 text-center text-slate-500 text-[0.9rem]">
          <p>&copy; {new Date().getFullYear()} JourneyLanka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
