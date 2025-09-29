import { useState } from "react";
import { Waves } from "lucide-react";
import ActivityGallery from "@/components/ActivityGallery";
import underwaterImage from "@/assets/underwater-diving.jpg";
import kayakingImage from "@/assets/kayaking-activity.jpg";
import snorkelingImage from "@/assets/snorkeling-activity.jpg";
import cyclingImage from "@/assets/cycling-activity.jpg";
import natureImage from "@/assets/nature-observation.jpg";

const ActivitiesSection = () => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);
  const activities = [
    {
      image: underwaterImage,
      title: "Diving",
      description: "Explore the depths of crystal clear waters"
    },
    {
      image: kayakingImage,
      title: "Kayaking",
      description: "Paddle through serene tropical waters"
    },
    {
      image: snorkelingImage,
      title: "Snorkeling",
      description: "Discover vibrant coral reefs and marine life"
    },
    {
      image: cyclingImage,
      title: "Cycling",
      description: "Ride along scenic coastal paths"
    },
    {
      image: natureImage,
      title: "Nature Observation & Relaxation",
      description: "Unwind while watching spectacular sunsets"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-ocean-pearl/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Waves className="w-6 h-6 mr-3 text-ocean-primary" />
            <span className="text-ocean-primary font-medium text-lg">Amazing Activities</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-4">
            Encounters of Discovery
          </h2>
          <p className="text-lg text-ocean-primary max-w-2xl mx-auto">
            Discover endless adventures both above and below the surface
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-[4/5] hover-scale cursor-pointer"
              onClick={() => setSelectedActivity(activity.title)}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover smooth-transition group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-bold mb-2">{activity.title}</h3>
                <p className="text-sm text-ocean-pearl opacity-90">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Activity Gallery Modal */}
      <ActivityGallery
        activity={selectedActivity || ""}
        isOpen={!!selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />
    </section>
  );
};

export default ActivitiesSection;