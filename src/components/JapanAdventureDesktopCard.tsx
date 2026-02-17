import { CalendarIcon, Clock, MapPin } from "lucide-react";

import srilankaHero from "@/assets/sri-lanka/srilanka-hero.jpg";
import srilankaRock from "@/assets/sri-lanka/sig-rock.jpg";
import srilankaBridge from "@/assets/sri-lanka/srilanka-day05-ella-bridge.jpg";
import srilankaPeak from "@/assets/sri-lanka/srilanka-day07-little-adams-peak.jpg";
import srilankaBeach from "@/assets/sri-lanka/srilanka-day10-main-mirissa-beach.jpg";
import srilankaSurf from "@/assets/sri-lanka/sri-lanka-surf.jpg";


type Tag = {
  emoji: string;
  label: string;
};

const tags: Tag[] = [];

const details = [
  { icon: MapPin, label: "Colombo - Mirissa", underlined: true },
  { icon: Clock, label: "May", underlined: false },
  { icon: CalendarIcon, label: "11 Days", underlined: false },
];

type JapanAdventureDesktopCardProps = {
  leftMediaVideoSrc?: string;
  leftMediaImageSrc?: string;
  leftMediaImageAlt?: string;
  mediaImages?: { src: string; alt: string }[];
  tags?: Tag[];
  details?: { icon: typeof MapPin; label: string; underlined: boolean }[];
  title?: string;
  priceLabel?: string;
  ctaLabel?: string;
  tripSlug?: string;
  priceNote?: string;
};

export default function JapanAdventureDesktopCard({
  leftMediaVideoSrc,
  leftMediaImageSrc,
  leftMediaImageAlt,
  mediaImages,
  tags: tagsProp,
  details: detailsProp,
  title = "Best of Japan",
  priceLabel = "$2,395",
  ctaLabel = "Reserve Now $300",
  tripSlug = "japan",
  priceNote = "First 6 bookings, then USD $2,495",
}: JapanAdventureDesktopCardProps) {
  const bookingUrl = tripSlug ? `/#/booking/${tripSlug}` : "#";
  const cardTags = tagsProp ?? tags;
  const cardDetails = detailsProp ?? details;
  const cardImages =
    mediaImages ??
    [
      { src: srilankaRock, alt: "Sigiriya Rock" },
      { src: srilankaHero, alt: "Sri Lanka landscape" },
      { src: srilankaSurf, alt: "Sri Lanka surfing" },
      { src: srilankaBridge, alt: "Scenic bridge in Ella" },
      { src: srilankaBeach, alt: "Mirissa beach" }
    ];
  const fallbackLeftImageSrc = leftMediaImageSrc ?? srilankaPeak;
  const fallbackLeftImageAlt = leftMediaImageAlt ?? "Little Adam's Peak";

  return (
    <section className="w-full px-5 py-5">
      <div className="mx-auto w-full max-w-[1420px] md:w-[94%] lg:w-[92%] xl:w-[90%] md:px-6 lg:px-12">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-playfair font-semibold leading-none tracking-tight text-[#0fc2bf] lg:text-4xl">
              {title}
            </h1>

            {cardTags.length > 0 && (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {cardTags.map(({ emoji, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary lg:text-sm"
                  >
                    <span className="text-base">{emoji}</span>
                    {label}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-2 flex items-center gap-4 text-lg font-semibold text-slate-800 lg:text-xl">
              {cardDetails.map(({ icon: Icon, label, underlined }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[#0fc2bf] lg:h-5 lg:w-5" />
                  <span
                    className="font-playfair"
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-[240px] pt-1 text-right">
            <p className="text-lg text-slate-700">
              From <span className="text-3xl font-extrabold text-slate-900 lg:text-4xl">{priceLabel}</span>
            </p>
            {priceNote && (
              <p className="mt-1 text-xs text-slate-500">{priceNote}</p>
            )}
            <a href={bookingUrl} className="inline-flex">
              <button
                type="button"
                className="mt-2 rounded-full bg-[#0fc2bf] px-5 py-2 text-base font-bold text-white transition hover:brightness-95"
              >
                {ctaLabel}
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full overflow-hidden rounded-[24px] md:w-[94%] lg:w-[92%] xl:w-[90%]">
        <div className="grid h-[460px] grid-cols-12 grid-rows-2 gap-1 bg-white lg:h-[500px] xl:h-[530px]">
          {leftMediaVideoSrc ? (
            <video
              className="col-span-3 row-span-2 h-full w-full object-cover"
              src={leftMediaVideoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          ) : (
            <img
              src={fallbackLeftImageSrc}
              alt={fallbackLeftImageAlt}
              className="col-span-3 row-span-2 h-full w-full object-cover"
            />
          )}

          <img src={cardImages[0].src} alt={cardImages[0].alt} className="col-span-5 h-full w-full object-cover" />
          <img src={cardImages[1].src} alt={cardImages[1].alt} className="col-span-4 h-full w-full object-cover" />
          <img src={cardImages[2].src} alt={cardImages[2].alt} className="col-span-3 h-full w-full object-cover" />
          <img src={cardImages[3].src} alt={cardImages[3].alt} className="col-span-3 h-full w-full object-cover" />
          <img src={cardImages[4].src} alt={cardImages[4].alt} className="col-span-3 h-full w-full object-cover" />
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500 lg:hidden">
        This component is optimized for desktop and meant as a visual preview.
      </p>
    </section>
  );
}

