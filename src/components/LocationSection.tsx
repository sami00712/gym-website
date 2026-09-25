import React from 'react';
import { MapPin, Navigation, Phone, MessageSquare, Clock, ExternalLink } from 'lucide-react';
import { gymConfig } from '../data/gymData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-zinc-950 text-zinc-100 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">
            Prime Destination
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display text-balance">
            ELEVEN GYM LAHORE LOCATION.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed font-normal">
            Easily accessible from major arteries across Lahore. Plan your visit or navigate directly using our verified Google Maps location.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Card */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-lime-400">
                  Facility Address
                </span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">
                  Eleven Gym Lahore
                </h3>
                <p className="text-sm text-zinc-300 mt-2 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                  <span>Lahore, Punjab, Pakistan</span>
                </p>
                <div className="text-xs text-zinc-500 mt-2">
                  Direct navigation and route planning verified on Google Maps.
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-800/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-300 uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-lime-400" />
                  <span>Gym Operational Hours</span>
                </div>
                <div className="text-xs text-zinc-400">
                  <span className="text-zinc-200 font-semibold">{gymConfig.openingHoursWeekday}</span>
                </div>
                <div className="text-xs text-zinc-400">
                  <span className="text-zinc-200 font-semibold">{gymConfig.openingHoursWeekend}</span>
                </div>
              </div>

              {/* Direct Action Links */}
              <div className="space-y-3 pt-2">
                <a
                  href={gymConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold uppercase tracking-wider text-xs rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-lime-400/20"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${gymConfig.phone}`}
                    className="py-3 px-3 bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-200 hover:text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-lime-400" />
                    <span>Call Gym</span>
                  </a>

                  <a
                    href={`https://wa.me/${gymConfig.whatsappPhone}?text=${encodeURIComponent(gymConfig.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 bg-zinc-950 border border-zinc-800 hover:border-emerald-600/50 text-zinc-200 hover:text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800/80 text-[11px] text-zinc-500">
              Free secure member parking and dedicated motor-bike parking available.
            </div>
          </div>

          {/* Right Visual Map Interactive Card */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 relative min-h-[380px] flex flex-col justify-between">
            {/* Styled Map Graphic Background */}
            <div className="absolute inset-0 bg-zinc-950 flex items-center justify-center">
              {/* Subtle dark grid background representing maps */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
              
              <div className="relative text-center p-8 z-10 max-w-md">
                <div className="w-16 h-16 rounded-full bg-lime-400/10 border-2 border-lime-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <MapPin className="w-8 h-8 text-lime-400" />
                </div>
                <h4 className="text-xl font-bold text-white font-display">
                  Eleven Gym Lahore
                </h4>
                <p className="text-xs text-zinc-400 mt-1 mb-6">
                  Lahore, Pakistan · Verified Google Location Pin
                </p>
                <a
                  href={gymConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-lime-400 hover:text-lime-300 border border-lime-400/40 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-xl"
                >
                  <span>Open Full Google Map</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Bottom floating badge */}
            <div className="relative z-10 m-4 p-3 bg-zinc-950/80 backdrop-blur-md border border-zinc-800 rounded-lg flex items-center justify-between text-xs text-zinc-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Open Today · Visit Our Front Desk</span>
              </span>
              <a
                href={gymConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-400 hover:underline font-semibold"
              >
                Directions →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
