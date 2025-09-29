import { Award, Star, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import tripAdvisorAward from "@/assets/tripadvisor-hall-of-fame.jpg";
import sabahTourismAward from "@/assets/sabah-tourism-award-2019-nobg.png";
import sabahTopAchieversAward from "@/assets/sabah-top-achievers-2024-nobg.png";

const AwardsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const awards = [
    {
      icon: Award,
      title: "TripAdvisor Hall of Fame",
      description: "Certificate of Excellence",
      year: "2018",
      image: tripAdvisorAward
    },
    {
      icon: Trophy,
      title: "Sabah Tourism Award",
      description: "Excellence in Hotel Services",
      year: "2019",
      image: sabahTourismAward
    },
    {
      icon: Star,
      title: "Sabah Top Achievers",
      description: "Outstanding Performance",
      year: "2024",
      image: sabahTopAchieversAward
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ocean-pearl to-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-4">
            30 Years of Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three decades of prestigious recognition and unwavering commitment to marine conservation and impeccable service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 text-center elegant-shadow smooth-transition hover:scale-105 hover:glow-effect transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 0.2}s` : '0s'
              }}
            >
              <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-ocean-pearl to-white rounded-2xl elegant-shadow">
                <img 
                  src={award.image} 
                  alt={`${award.title} award`}
                  className="w-20 h-20 object-contain"
                />
              </div>
              
              <h3 className="text-xl font-bold text-ocean-deep mb-2">
                {award.title}
              </h3>
              
              <p className="text-muted-foreground mb-2">
                {award.description}
              </p>
              
              <div className="inline-block bg-luxury-gold/20 text-luxury-bronze px-3 py-1 rounded-full text-sm font-medium">
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;