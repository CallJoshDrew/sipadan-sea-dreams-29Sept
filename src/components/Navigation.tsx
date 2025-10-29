import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactDialog from "./ContactDialog";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Diving", href: "#diving" },
    { name: "Holidays", href: "#holidays" },
    { name: "Services", href: "#services" },
    { name: "Facilities", href: "#facilities" },
    { name: "Reviews", href: "#reviews" },
  ];

  return (
    <nav className={`fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-ocean-pearl/20 shadow-lg z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-ocean-deep" style={{ lineHeight: "1.1" }}>
              <span>Sipadan Kapalai</span>
              <br />
              <span className="text-ocean-primary text-sm" style={{ marginTop: "-4px", display: "inline-block" }}>
                Dive Resort
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4 overflow-x-auto scrollbar-hide">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-ocean-deep hover:text-ocean-primary px-3 py-2 text-sm font-medium smooth-transition whitespace-nowrap">
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Temporary Disable for now */}
            {/* <ContactDialog>
              <button className="text-ocean-deep hover:text-ocean-primary px-3 py-2 text-sm font-medium smooth-transition">
                Enquiry
              </button>
            </ContactDialog> */}
            <div className="flex justify-center">
              <a href="https://dive-malaysia.com/enquiries/" target="_blank" rel="noopener noreferrer">
                <Button variant="book-now">Book Now</Button>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-ocean-deep hover:text-ocean-primary p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-ocean-pearl/20">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-ocean-deep hover:text-ocean-primary block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 space-y-2">
                {/* Temporary disabled for now */}
                {/* <ContactDialog>
                  <button className="w-full text-left text-ocean-deep hover:text-ocean-primary px-3 py-2 text-base font-medium">
                    Enquiry
                  </button>
                </ContactDialog> */}
                <div className="flex">
                  <a href="https://dive-malaysia.com/enquiries/" target="_blank" rel="noopener noreferrer">
                    <Button variant="book-now">Book Now</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
