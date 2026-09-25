import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { facilitiesData } from '../data/gymData';

interface FacilitiesProps {
  onOpenMembership: (planName?: string) => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenMembership }) => {
  const [selectedFacility, setSelectedFacility] = useState(facilitiesData[0]);

  return (
    <section id="facilities" className="py-24 bg-zinc-950 text-zinc-100 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">
              Elite Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display text-balance">
              STATE-OF-THE-ART GYM FACILITIES.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            Every square foot of Eleven Gym Lahore is intentionally equipped with tournament-grade strength machinery, heavy free weights, and athletic turf lanes.
          </p>
        </div>

        {/* Featured Big Spotlight + Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Large Visual Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 group shadow-2xl">
              <div className="h-[360px] sm:h-[480px] overflow-hidden relative">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              </div>

              {/* Inset Information Box */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-transparent">
                <div className="text-xs font-semibold text-lime-400 uppercase tracking-widest mb-1.5">
                  {selectedFacility.category}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-3">
                  {selectedFacility.title}
                </h3>
                <p className="text-sm text-zinc-300 max-w-xl leading-relaxed mb-4">
                  {selectedFacility.description}
                </p>

                {/* Highlights tags (Unboxed metadata style) */}
                <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs text-zinc-300 mb-6">
                  {selectedFacility.highlights.map((h, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-lime-400" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenMembership(selectedFacility.title)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-zinc-950 bg-lime-400 hover:bg-lime-300 rounded-md transition-all cursor-pointer shadow-lg shadow-lime-400/20"
                >
                  <span>Train In This Zone</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Navigation List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold px-2 mb-2">
              Select Zone to Inspect
            </div>
            {facilitiesData.map((facility) => {
              const isSelected = selectedFacility.id === facility.id;
              return (
                <button
                  key={facility.id}
                  onClick={() => setSelectedFacility(facility)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-zinc-900 border-lime-400/60 shadow-lg shadow-lime-400/5'
                      : 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900/80 hover:border-zinc-700'
                  }`}
                >
                  <div className="pr-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 mb-1">
                      <span>{facility.category}</span>
                    </div>
                    <div className={`text-base font-bold transition-colors ${
                      isSelected ? 'text-lime-400' : 'text-white group-hover:text-zinc-200'
                    }`}>
                      {facility.title}
                    </div>
                    <div className="text-xs text-zinc-400 mt-1 line-clamp-1">
                      {facility.description}
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'border-lime-400 bg-lime-400/10 text-lime-400'
                      : 'border-zinc-800 bg-zinc-950 text-zinc-500 group-hover:text-white'
                  }`}>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
