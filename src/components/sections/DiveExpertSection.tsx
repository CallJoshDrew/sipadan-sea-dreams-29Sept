import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Waves } from "lucide-react";
import underwaterImage from "@/assets/dive-expert/underwater-diving.jpg";
import marineLifeImage from "@/assets/dive-expert/marine-life.jpg";
import couplesUnderwaterImage from "@/assets/dive-expert/couples-underwater-exploration.jpg";
import barracudaTornadoImage from "@/assets/dive-expert/barracuda_tornado.png";
import { useTranslation } from "react-i18next";

const DiveExpertSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const { t } = useTranslation();

  // static images in the same order as translations
  const images = [underwaterImage, marineLifeImage, couplesUnderwaterImage, barracudaTornadoImage];

  // load slide content from translations (returnObjects for arrays)
  const slideData = t("dive.slides", { returnObjects: true }) as Array<{
    label: string;
    title: string;
    highlight: string;
    subtitle: string;
    description: string;
  }>;

  // merge images into slides
  const slides = slideData.map((s, idx) => ({
    ...s,
    image: images[idx] ?? images[0],
  }));

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handleManualNext = useCallback(() => {
    // Clear existing interval
    if (intervalId) {
      clearInterval(intervalId);
    }

    // Advance slide
    nextSlide();

    // Start new interval
    const newInterval = setInterval(nextSlide, 2000);
    setIntervalId(newInterval);
  }, [nextSlide, intervalId]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 2000);
    setIntervalId(interval);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // get current slide data
  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-[90vh] mb-[-10vh] overflow-hidden shadow-lg">
            {/* Carousel Images */}
            <div className="relative w-full h-full">
              {/* {promoImages.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentPromoIndex ? "opacity-100" : "opacity-0"}`} />
              ))} */}
             
                <img  src={barracudaTornadoImage} alt="Barracuda Tornado" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000" />
                </div>

            {/* Dark overlay for better text readability */}
            // <div className="absolute inset-0 bg-black/40" />

            {/* Centered title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6 z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-1 md:mb-4">Diving at Sipadan</h2>
                <p className="text-3xl md:text-5xl font-semibold text-[#b3ffff] mb-1 md:mb-4">3 Dives Per Day</p>
                <p className="text-base md:text-2xl text-white/75 italic">Terms & Condition Apply</p>
              </div>
            </div>

            {/* Navigation Dots */}
            {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
              {promoImages.map((_, index) => (
                <button key={index} onClick={() => setCurrentPromoIndex(index)} className={`w-3 h-3 rounded-full transition-all cursor-pointer border-2 ${index === currentPromoIndex ? "bg-white border-white" : "bg-white/30 border-white/50 hover:bg-white/50"}`} />
              ))}
            </div> */}
          </div>
     
    </section>
  );
};

export default DiveExpertSection;

//  {/* Carousel Background */}
//       <div className="absolute inset-0">
//         {slides.map((slide, index) => (
//           <div key={index} className={`absolute inset-0 bg-cover bg-center bg-no-repeat smooth-transition ${index === currentSlide ? "opacity-100" : "opacity-0"}`} style={{ backgroundImage: `url(${slide.image})` }} />
//         ))}
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-ocean-deep/70" />

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 text-center text-white">
//         <div className="flex items-center justify-center mb-2 md:mb-6">
//           <Waves className="w-6 h-6 mr-3 text-ocean-aqua" />
//           <span className="text-ocean-aqua font-medium text-lg">{currentSlideData?.label}</span>
//         </div>

//         <h2 className="text-4xl md:text-6xl font-bold mb-2 md:mb-6 leading-tight">
//           {currentSlideData?.title.split("\n").map((line, i) => (
//             <p key={i}>
//               {line}
//               {i < currentSlideData.title.split("\n").length - 1 && <br />}
//             </p>
//           ))}
//         <p className="text-4xl md:text-6xl font-bold mt-2 md:mt-4 leading-tight text-ocean-aqua">{currentSlideData?.highlight}</p>
//         </h2>

//         <p className="text-base md:text-2xl mb-2 md:mb-8 max-w-4xl mx-auto px-4 md:px-32 leading-relaxed">{currentSlideData?.description}</p>
//       </div>

//       {/* Animated Progress Bar */}
//       <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/30">
//         <div
//           key={currentSlide} // Key to restart animation on slide change
//           className="h-full bg-accent animate-[progress-fill_3s_linear_forwards] origin-left"
//           style={{
//             animation: `progress-fill 2s linear forwards`,
//             width: "0%",
//           }}
//         />
//       </div>