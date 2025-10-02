import { useState, useEffect } from "react";
import { X } from "lucide-react";

// Diving images
import divingCoralReef from "@/assets/activity-galleries/diving/diving-coral-reef.jpg";
// import coupleDivingAdventure from "@/assets/activity-galleries/diving/couple-diving-adventure.jpg";
// import caveDivingExploration from "@/assets/activity-galleries/diving/cave-diving-exploration.jpg";
import divingInstruction from "@/assets/activity-galleries/diving/diving-instruction.jpg";
import marineLifeCloseup from "@/assets/expert-couples-diving.jpg";

// Kayaking images
import peacefulLagoonKayaking from "@/assets/activity-galleries/kayaking/peaceful-lagoon-kayaking.jpg";
import sunsetCoupleKayaking from "@/assets/activity-galleries/kayaking/sunset-couple-kayaking.jpg";
// import mangroveKayakAdventure from "@/assets/activity-galleries/kayaking/mangrove-kayak-adventure.jpg";
import soloTurquoiseKayaking from "@/assets/activity-galleries/kayaking/solo-turquoise-kayaking.jpg";
// import groupMountainKayaking from "@/assets/activity-galleries/kayaking/group-mountain-kayaking.jpg";

// Snorkeling images
import familyReefSnorkeling from "@/assets/activities/snorkeling1.jpg";
import seaTurtleEncounter from "@/assets/activities/snorkeling2.jpg";
import reefFromAbove from "@/assets/activities/snorkeling3.jpg";
// import coupleSnorkeling from "@/assets/activity-galleries/snorkeling/couple-snorkeling.jpg";
// import snorkelGearBeach from "@/assets/activity-galleries/snorkeling/snorkel-gear-beach.jpg";

// Cycling images
// import coastalPathCycling from "@/assets/activity-galleries/cycling/coastal-path-cycling.jpg";
// import mountainBikeTrails from "@/assets/activity-galleries/cycling/mountain-bike-trails.jpg";
import coupleBeachCycling from "@/assets/activity-galleries/cycling/couple-beach-cycling.jpg";
import villageCulturalCycling from "@/assets/activity-galleries/cycling/village-cultural-cycling.jpg";
import sunsetCyclingAdventure from "@/assets/activity-galleries/cycling/sunset-cycling-adventure.jpg";

// Nature images
import spectacularOceanSunset from "@/assets/activity-galleries/nature/spectacular-ocean-sunset.jpg";
import tropicalSunriseBeach from "@/assets/activity-galleries/nature/tropical-sunrise-beach.jpg";
// import coupleBeachRelaxation from "@/assets/activity-galleries/nature/couple-beach-relaxation.jpg";
// import beachConversationFriends from "@/assets/activity-galleries/nature/beach-conversation-friends.jpg";
import peacefulHammockRelaxation from "@/assets/activity-galleries/nature/peaceful-hammock-relaxation.jpg";

const activityGalleries = {
  "Diving": [
    { src: divingCoralReef, alt: "Professional scuba divers exploring vibrant coral reef", title: "Coral Reef Exploration" },
    // { src: coupleDivingAdventure, alt: "Couple diving together underwater", title: "Romantic Diving Adventure" },
    // { src: caveDivingExploration, alt: "Underwater cave diving with dramatic lighting", title: "Cave Diving Exploration" },
    { src: divingInstruction, alt: "Professional diving instruction underwater", title: "Diving Lessons" },
    { src: marineLifeCloseup, alt: "Close-up of tropical fish and coral formations", title: "Marine Life Discovery" }
  ],
  "Kayaking": [
    { src: peacefulLagoonKayaking, alt: "Peaceful kayaking in crystal clear lagoon", title: "Lagoon Kayaking" },
    { src: sunsetCoupleKayaking, alt: "Couple kayaking at golden sunset", title: "Sunset Romance" },
    // { src: mangroveKayakAdventure, alt: "Kayaking through mangrove channels", title: "Mangrove Adventure" },
    { src: soloTurquoiseKayaking, alt: "Solo kayaker in turquoise waters", title: "Solo Exploration" },
    // { src: groupMountainKayaking, alt: "Group kayaking with mountain backdrop", title: "Group Expedition" }
  ],
  "Snorkeling": [
    { src: familyReefSnorkeling, alt: "Family snorkeling in shallow coral waters", title: "Snorkeling Scene" },
    { src: seaTurtleEncounter, alt: "Snorkeler observing sea turtle", title: "Snorkeling Scene" },
    { src: reefFromAbove, alt: "Colorful reef view from above", title: "Snorkeling Scene" },
    // { src: coupleSnorkeling, alt: "Couple snorkeling together", title: "Romantic Snorkeling" },
    // { src: snorkelGearBeach, alt: "Snorkeling gear on tropical beach", title: "Beach Preparation" }
  ],
  "Cycling": [
    // { src: coastalPathCycling, alt: "Scenic coastal cycling with ocean views", title: "Coastal Adventure" },
    // { src: mountainBikeTrails, alt: "Mountain biking through tropical trails", title: "Trail Exploration" },
    { src: coupleBeachCycling, alt: "Couple cycling on beach pathway", title: "Beach Cycling" },
    { src: villageCulturalCycling, alt: "Cycling through local village", title: "Cultural Tour" },
    { src: sunsetCyclingAdventure, alt: "Cycling at dramatic sunset", title: "Sunset Ride" }
  ],
  "Nature Observation & Relaxation": [
    { src: spectacularOceanSunset, alt: "Spectacular sunset over calm ocean", title: "Ocean Sunset" },
    { src: tropicalSunriseBeach, alt: "Beautiful sunrise from tropical beach", title: "Beach Sunrise" },
    // { src: coupleBeachRelaxation, alt: "Couple relaxing on white sand beach", title: "Beach Relaxation" },
    // { src: beachConversationFriends, alt: "Friends enjoying beach conversation", title: "Social Moments" },
    { src: peacefulHammockRelaxation, alt: "Peaceful hammock between palm trees", title: "Hammock Paradise" }
  ]
};

interface ActivityGalleryProps {
  activity: string;
  isOpen: boolean;
  onClose: () => void;
}

const ActivityGallery = ({ activity, isOpen, onClose }: ActivityGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = activityGalleries[activity as keyof typeof activityGalleries] || [];

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !images.length) return null;

  return (
    <div className="fixed inset-0 z-50 bg-ocean-deep/95 backdrop-blur-sm">
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white smooth-transition"
          >
            <X size={24} />
          </button>
          
          {/* Gallery header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{activity}</h2>
            <p className="text-ocean-pearl text-lg">
              {currentImageIndex + 1} of {images.length}
            </p>
          </div>

          {/* Main image display */}
          <div className="relative mb-8">
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-2xl"
            />
            
            
            {/* Image title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ocean-deep/80 to-transparent p-6">
              <h3 className="text-xl font-bold text-white mb-1">
                {images[currentImageIndex].title}
              </h3>
            </div>
          </div>

          {/* Thumbnail navigation */}
          <div className="flex justify-center gap-1 sm:gap-2 overflow-x-auto pb-2 px-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-12 h-10 sm:w-16 sm:h-12 md:w-20 md:h-16 rounded-lg overflow-hidden border-2 smooth-transition ${
                  index === currentImageIndex 
                    ? 'border-ocean-light' 
                    : 'border-white/30 hover:border-white/60'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityGallery;