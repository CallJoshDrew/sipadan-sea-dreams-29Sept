import { useEffect } from 'react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SoundControl from "@/components/SoundControl";
import { useAudio } from "@/hooks/useAudio";
import HeroSection from "@/components/sections/HeroSection";
import AwardsSection from "@/components/sections/AwardsSection";
import DiveExpertSection from "@/components/sections/DiveExpertSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import HolidaysSection from "@/components/sections/HolidaysSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import ReviewsSection from "@/components/sections/ReviewsSection";

const Index = () => {
  const { isPlaying, toggle, play } = useAudio('/sounds/ocean-ambient.mp3');
  
  useEffect(() => {
    const handlePlayAudio = () => {
      play();
    };
    
    window.addEventListener('playAudio', handlePlayAudio);
    return () => window.removeEventListener('playAudio', handlePlayAudio);
  }, [play]);
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <AwardsSection />
      <section id="diving">
        <DiveExpertSection />
      </section>
      <section id="holidays">
        <HolidaysSection />
      </section>
      <ActivitiesSection />
      <section id="services">
        <ServicesSection />
      </section>
      <section id="facilities">
        <FacilitiesSection />
      </section>
      <section id="reviews">
        <ReviewsSection />
      </section>
      <Footer />
      <SoundControl isPlaying={isPlaying} onToggle={toggle} />
    </div>
  );
};

export default Index;
