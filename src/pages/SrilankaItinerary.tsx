import { useEffect } from "react";
import { ItineraryTemplate } from "@/components/ItineraryTemplate";
import JapanAdventureDesktopCard from "@/components/JapanAdventureDesktopCard";
import { srilankaData } from "@/data/countries/srilanka";
import {
  MapPin,
  Clock,
  Calendar as CalendarIcon
} from "lucide-react";

import srilankaVideo from "@/assets/sri-lanka/sri-lanka-train.mp4";
import srilankaImage1 from "@/assets/sri-lanka/srilanka-day01.jpg";
import srilankaImage2 from "@/assets/sri-lanka/srilanka-day02-temple.webp";
import srilankaImage3 from "@/assets/sri-lanka/srilanka-day05-ella-bridge.jpg";
import srilankaImage4 from "@/assets/sri-lanka/srilanka-day07-little-adams-peak.jpg";
import srilankaImage5 from "@/assets/sri-lanka/srilanka-day10-main-mirissa-beach.jpg";
import srilankaHero from "@/assets/sri-lanka/srilanka-hero.jpg";
import srilankaSurf from "@/assets/sri-lanka/sri-lanka-surf.jpg";
import srilankaRock from "@/assets/sri-lanka/sig-rock.jpg";
import srilankaTile5 from "@/assets/sri-lanka/sri-lanka-tile5.jpg";

const SrilankaItinerary = () => {
  // Scroll to top when this page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const tags = [
    { emoji: "🚀", label: "Adventure" },
    { emoji: "🪭", label: "Culture" },
    { emoji: "🏝️", label: "Beach" },
    { emoji: "🧳", label: "Solo" }
  ];

  const details = [
    {
      icon: MapPin,
      label: "Colombo - Mirissa",
      underlined: true
    },
    { icon: Clock, label: srilankaData.startDate ?? "April 14th & June 26th", underlined: false },
    { icon: CalendarIcon, label: srilankaData.duration ?? "11 Days", underlined: false }
  ];

  const mediaImages = [
    { src: srilankaRock, alt: "Sigiriya Rock" },
    { src: srilankaImage3, alt: "Scenic bridge in Ella" },
    { src: srilankaTile5, alt: "Sri Lanka scenery" },
    { src: srilankaImage4, alt: "Little Adam's Peak" },
    { src: srilankaSurf, alt: "Sri Lanka surfing" }
  ];

  return (
    <ItineraryTemplate
      data={srilankaData}
      hideDesktopHero
      desktopHero={
        <div className="hidden md:block">
          <JapanAdventureDesktopCard
            title={srilankaData.title}
            priceLabel={srilankaData.price}
            priceNote={srilankaData.priceNote}
            ctaLabel="Reserve Now $300"
            tripSlug={srilankaData.slug}
            tags={tags}
            details={details}
            leftMediaVideoSrc={srilankaVideo}
            leftMediaImageSrc={srilankaHero}
            leftMediaImageAlt="Sri Lanka landscape"
            mediaImages={mediaImages}
          />
        </div>
      }
    />
  );
};

export default SrilankaItinerary;
