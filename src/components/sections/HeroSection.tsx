import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-overwater-villas.jpg";
import greenFinsAward from "@/assets/green-fins-award.jpg";
import padiAward from "@/assets/padi-5-star-award.png";
import ecoFriendlyAward from "@/assets/best-eco-friendly-award.png";
import guestChoiceAward from "@/assets/guest-choice-award.jpg";
import worldTravelAward from "@/assets/world-travel-award.png";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const { displayText, isComplete } = useTypewriter({
    text: "Your journey deserves its destination, where pristine waters are matched only by our exquisite service.",
    speed: 40, // 2x faster (80 / 2 = 40)
    delay: 2000,
    trigger: isVisible
  });
  
  const scrollToDiveExpert = () => {
    // Trigger audio play from parent component
    const audioEvent = new CustomEvent('playAudio');
    window.dispatchEvent(audioEvent);
    
    const element = document.getElementById('awards');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: isVisible ? 'scale(1.3)' : 'scale(1.0)',
          transition: isVisible ? 'transform 10s ease-out' : 'none'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
    
    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 text-center text-white">
      <div className="flex items-center justify-center mb-6">
        <MapPin className="w-5 h-5 mr-2 text-ocean-aqua" />
        <span className="text-ocean-aqua font-medium">Semporna, Sabah Malaysia</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Sipadan Kapalai
        <br />
        <span className="text-ocean-aqua">Dive Resort</span>
      </h1>
      
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-ocean-pearl min-h-[4rem] flex items-center justify-center">
        {displayText}
        {!isComplete && <span className="animate-pulse ml-1">|</span>}
      </p>
      
      
      <div className="flex justify-center items-center opacity-0 animate-fade-in delay-1500">
        <Button 
          variant="accent" 
          size="lg" 
          className="text-lg px-8 py-6"
          onClick={scrollToDiveExpert}
        >
          Enter
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;