import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useTypewriter } from "@/hooks/useTypewriter";
import { Lock, Sofa, Shield, X } from "lucide-react";

interface FacilityDescriptionPopupProps {
  facility: string;
  isOpen: boolean;
  onClose: () => void;
}

const facilityData = {
  "Privacy": {
    icon: Lock,
    description: "An exclusive private resort for those who value absolute privacy. Enjoy a peaceful escape and complete serenity in your interruption-free paradise."
  },
  "Pristine Environment": {
    icon: Sofa,
    description: "Enjoy your stay where comfort and conservation exist in harmony. For decades, we have been dedicated to environmental stewardship, maintaining both our facilities and the natural surroundings to preserve this paradise."
  },
  "Safety": {
    icon: Shield,
    description: "Relax in a truly secure environment. Our vigilant safety protocols ensure your peace of mind, so you can focus solely on enjoying your holidays."
  }
};

const FacilityDescriptionPopup = ({ facility, isOpen, onClose }: FacilityDescriptionPopupProps) => {
  const currentFacility = facilityData[facility as keyof typeof facilityData];
  
  const { displayText } = useTypewriter({
    text: currentFacility?.description || "",
    speed: 30,
    delay: 300,
    trigger: isOpen && !!currentFacility && !!facility
  });

  // Allow body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !facility || !currentFacility) {
    console.log("Popup not rendering:", { isOpen, facility, currentFacility });
    return null;
  }

  const IconComponent = currentFacility.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-ocean-aqua/20 relative p-0 overflow-hidden [&>button]:hidden">
        {/* Custom close button for better mobile positioning */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 sm:right-3 sm:top-3 z-50 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-white/95 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors"
        >
          <X className="w-5 h-5 sm:w-4 sm:h-4 text-gray-600" />
        </button>
        
        <div className="p-8">
          <DialogHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full ocean-gradient">
                <IconComponent className="w-8 h-8 text-white" />
              </div>
            </div>
            <DialogTitle className="text-3xl font-bold text-ocean-deep">
              {facility}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Facility description for {facility}
            </DialogDescription>
          </DialogHeader>
          
          <div className="text-center">
            <p className="text-lg text-muted-foreground leading-relaxed min-h-[6rem] flex items-center justify-center">
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-ocean-primary ml-1 animate-pulse" />
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FacilityDescriptionPopup;