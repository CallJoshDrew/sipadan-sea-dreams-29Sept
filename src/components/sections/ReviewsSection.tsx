import { Star, Quote, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import AutoCarousel from "@/components/AutoCarousel";
import teamStaffImage from "@/assets/team-staff-smiling.jpg";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      platform: "TripAdvisor",
      review: "Absolutely breathtaking! The overwater villas are stunning and the diving experiences were world-class. Staff went above and beyond to make our honeymoon perfect.",
      rating: 5
    },
    {
      name: "Michael Chen",
      platform: "Google Reviews",
      review: "30 years of excellence really shows. From airport pickup to departure, everything was seamless. The marine life here is incredible - saw sea turtles every day!",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      platform: "Booking.com",
      review: "Privacy and luxury combined perfectly. The resort truly feels like your own private paradise. Food was exceptional and catered perfectly to our family's needs.",
      rating: 5
    },
    {
      name: "David Thompson",
      platform: "Expedia",
      review: "As a certified dive instructor, I can say this is one of the world's best dive destinations. Professional staff, pristine waters, and unmatched marine biodiversity.",
      rating: 5
    },
    {
      name: "Lisa Wang",
      platform: "Agoda",
      review: "The sunset views from our villa were magical. Every detail was perfect - from the romantic dinner setup to the personalized service. Highly recommended!",
      rating: 5
    },
    {
      name: "James Wilson",
      platform: "Hotels.com",
      review: "Security and safety were top-notch, which was important for our family trip. Kids loved snorkeling and we felt completely at ease the entire stay.",
      rating: 5
    },
    {
      name: "Maria Santos",
      platform: "TripAdvisor",
      review: "Three decades of hospitality mastery! From medical assistance availability to gourmet dining, every aspect exceeded expectations. Pure paradise!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ocean-pearl to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="w-6 h-6 mr-3 text-ocean-primary" />
            <span className="text-ocean-primary font-medium text-lg">Your Unforgettable</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-ocean-deep mb-6">
            Guest Experiences
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover why our guests consistently rate us 5 stars across all platforms. 
            Their stories speak to our commitment to excellence.
          </p>
        </div>
        
        <AutoCarousel autoPlayInterval={4000}>
          {reviews.map((review, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-2xl p-6 elegant-shadow smooth-transition hover:scale-105 hover:glow-effect max-w-2xl mx-auto">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-ocean-light" />
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>
                </div>
                
                {/* Review Text */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{review.review}"
                </p>
                
                {/* Reviewer Info */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-ocean-deep">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.platform}</p>
                </div>
              </div>
            </div>
          ))}
        </AutoCarousel>
        
        {/* Booking Section */}
        <div className="mt-16 pt-16 border-t border-ocean-aqua/20">
          <div className="bg-ocean-light/10 rounded-2xl p-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden">
                 <img 
                  src={teamStaffImage} 
                  alt="Happy resort team staff including front desk, welcoming team and diving instructors"
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>
              <div className="text-center lg:text-left">
                <p className="text-xl text-ocean-deep mb-8 leading-relaxed">
                  With a perfect <span className="font-bold">5.0-star rating</span> from over <span className="font-bold">2,500 happy guests </span> 
                  and an impressive <span className="font-bold">98% return rate</span>, our commitment to excellence speaks for itself.
                  Join the thousands of satisfied travelers who have discovered their perfect paradise getaway.
                </p>
                
                <Button variant="accent" size="lg" className="text-lg px-8 py-6">
                  Booking
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;