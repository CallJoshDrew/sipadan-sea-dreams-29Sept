import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ocean-deep text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Resort Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-ocean-pearl">
              Sipadan Kapalai
              <br />
              Dive Resort
            </h3>
            <p className="text-gray-300 leading-relaxed">Experience the ultimate underwater paradise in the heart of the Semporna, Sabah. Over 30 years of service in marine adventures.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/SipadanKapalaiDiveResort" target="_blank" className="text-ocean-pearl hover:text-white smooth-transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/sipadankapalaidiveresort/" target="_blank" className="text-ocean-pearl hover:text-white smooth-transition">
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a href="#" className="text-ocean-pearl hover:text-white smooth-transition">
                <Twitter className="w-5 h-5" />
              </a> */}
            </div>
            {/* SVG icons from lucide-react */}
            {/* <div className="flex space-x-4">
              <a href="#" className="text-ocean-pearl hover:text-white smooth-transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook-icon lucide-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="text-ocean-pearl hover:text-white smooth-transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-ocean-pearl">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-ocean-primary mt-0.5" />
                <div>
                  <p className="text-gray-300">Sipadan Kapalai Dive Resort</p>
                  <p className="text-gray-300">Semporna, Sabah, Malaysia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-ocean-primary" />
                <p className="text-gray-300">+6089-673999, +6089-765200</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-ocean-primary" />
                <p className="text-gray-300">mail@sipadan-kapalai.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-ocean-pearl">Quick Links</h4>
            <div className="space-y-2">
              <a href="#diving" className="block text-gray-300 hover:text-ocean-pearl smooth-transition">
                Diving
              </a>
              <a href="#holidays" className="block text-gray-300 hover:text-ocean-pearl smooth-transition">
                Holidays
              </a>
              <a href="#facilities" className="block text-gray-300 hover:text-ocean-pearl smooth-transition">
                Facilities
              </a>
              <a href="#services" className="block text-gray-300 hover:text-ocean-pearl smooth-transition">
                Services
              </a>
              <a href="#reviews" className="block text-gray-300 hover:text-ocean-pearl smooth-transition">
                Reviews
              </a>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-ocean-pearl">Certifications</h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">PADI 5-Star Dive Resort</p>
              <p className="text-gray-300 text-sm">Green Fins Certified</p>
              <p className="text-gray-300 text-sm">ISO 9001:2015</p>
              <p className="text-gray-300 text-sm">Malaysia Tourism Board</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Sipadan Kapalai Dive Resort. All rights reserved.</p>
            {/* Temporary Disable this for now */}
            {/* <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-ocean-pearl text-sm smooth-transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-ocean-pearl text-sm smooth-transition">
                Terms of Service
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
