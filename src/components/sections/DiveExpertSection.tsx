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
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 bg-cover bg-center bg-no-repeat smooth-transition ${index === currentSlide ? "opacity-100" : "opacity-0"}`} style={{ backgroundImage: `url(${slide.image})` }} />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-ocean-deep/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center mb-2 md:mb-6">
          <Waves className="w-6 h-6 mr-3 text-ocean-aqua" />
          <span className="text-ocean-aqua font-medium text-lg">{currentSlideData?.label}</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-2 md:mb-6 leading-tight">
          {currentSlideData?.title.split("\n").map((line, i) => (
            <p key={i}>
              {line}
              {i < currentSlideData.title.split("\n").length - 1 && <br />}
            </p>
          ))}
        <p className="text-4xl md:text-6xl font-bold mt-2 md:mt-4 leading-tight text-ocean-aqua">{currentSlideData?.highlight}</p>
        </h2>

        <p className="text-base md:text-2xl mb-2 md:mb-8 max-w-4xl mx-auto px-4 md:px-32 leading-relaxed">{currentSlideData?.description}</p>
      </div>

      {/* Animated Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-white/30">
        <div
          key={currentSlide} // Key to restart animation on slide change
          className="h-full bg-accent animate-[progress-fill_3s_linear_forwards] origin-left"
          style={{
            animation: `progress-fill 2s linear forwards`,
            width: "0%",
          }}
        />
      </div>
    </section>
  );
};

export default DiveExpertSection;
