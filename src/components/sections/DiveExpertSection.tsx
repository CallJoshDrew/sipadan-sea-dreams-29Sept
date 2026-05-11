import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import barracudaTornadoImage from "@/assets/dive-expert/barracuda_tornado.png";
import divingVideo1 from "@/assets/Diving Videos/DivingVideo1.mp4";
import divingVideo2 from "@/assets/Diving Videos/DivingVideo2.mp4";
import divingVideo3 from "@/assets/Diving Videos/DivingVideo3.mp4";
import divingVideo4 from "@/assets/Diving Videos/DivingVideo4.mp4";
import divingVideo5 from "@/assets/Diving Videos/DivingVideo5.mp4";
import divingVideo6 from "@/assets/Diving Videos/DivingVideo6.mp4";
import divingVideo7 from "@/assets/Diving Videos/DivingVideo7.mp4";
import divingVideo8 from "@/assets/Diving Videos/DivingVideo8.mp4";

const slides = [
  {
    type: "image",
    src: barracudaTornadoImage,
    alt: "Barracuda Tornado",
  },
  {
    type: "video",
    src: divingVideo1,
    alt: "Diving video 1",
  },
  {
    type: "video",
    src: divingVideo2,
    alt: "Diving video 2",
  },
  {
    type: "video",
    src: divingVideo3,
    alt: "Diving video 3",
  },
  {
    type: "video",
    src: divingVideo4,
    alt: "Diving video 4",
  },
  {
    type: "video",
    src: divingVideo5,
    alt: "Diving video 5",
  },
  {
    type: "video",
    src: divingVideo6,
    alt: "Diving video 6",
  },
  {
    type: "video",
    src: divingVideo7,
    alt: "Diving video 7",
  },
  {
    type: "video",
    src: divingVideo8,
    alt: "Diving video 8",
  },
];

const DiveExpertSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (slides[currentSlide].type === "video" && videoRef.current) {
      const video = videoRef.current;
      video.pause();
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise.catch(() => {
          // Autoplay may be blocked; mute is set to allow autoplay in most browsers.
        });
      }
    }
  }, [currentSlide]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if (slides[currentSlide].type === "image") {
      timeoutId = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [currentSlide]);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-[90vh] mb-[-10vh] overflow-hidden shadow-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
            }`}
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                ref={(el) => {
                  if (index === currentSlide) {
                    videoRef.current = el;
                  }
                }}
                src={slide.src}
                className="w-full h-full object-cover"
                playsInline
                autoPlay
                onEnded={goToNextSlide}
                controls={false}
              />
            )}
          </div>
        ))}

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center px-6 z-20">
          <div className="text-center text-white max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Diving at Sipadan</h2>
            <p className="text-3xl md:text-5xl font-semibold text-[#b3ffff] mb-4">3 Dives Per Day</p>
            <p className="text-base md:text-2xl text-white/75 italic">Terms &amp; condition apply</p>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-110" : "bg-white/40 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiveExpertSection;
