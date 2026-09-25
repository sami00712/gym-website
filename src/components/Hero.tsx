import React from 'react';
import { ArrowDown, ArrowUpRight, Play, ShieldCheck, MapPin } from 'lucide-react';
import { gymConfig } from '../data/gymData';
import heroBg from '../assets/images/hero_gym_cinematic_1790331460399.jpg';

interface HeroProps {
  onOpenMembership: (planName?: string) => void;
  onExploreGym: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenMembership, onExploreGym }) => {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToMemberships = () => {
    const el = document.getElementById('memberships');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background with Dark Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Eleven Gym Lahore interior"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-[10000ms]"
        />
        {/* Cinematic Scrim & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/60" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-black/40 to-zinc-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 sm:pt-16">
        <div className="max-w-4xl">
          {/* Unboxed Brand Subtitle / Location kicker */}
          <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-widest uppercase text-lime-400 mb-4 sm:mb-6">
            <span className="inline-block w-8 h-[2px] bg-lime-400" />
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Eleven Gym Lahore · Premier Strength & Fitness Club
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.95] mb-6 font-display text-balance">
            BUILD YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-200">
              STRONGEST
            </span>{' '}
            SELF.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal">
            {gymConfig.subtitle} An elite fitness sanctuary in Lahore engineered for real discipline, high-performance strength equipment, and relentless physical evolution.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12 sm:mb-16">
            <button
              onClick={() => onOpenMembership()}
              className="px-7 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-950 bg-lime-400 hover:bg-lime-300 active:scale-[0.98] transition-all rounded-md shadow-xl shadow-lime-400/25 flex items-center gap-2 cursor-pointer"
            >
              <span>Join Eleven</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={scrollToMemberships}
              className="px-7 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-100 bg-zinc-900/80 hover:bg-zinc-850 hover:text-white border border-zinc-700 active:scale-[0.98] transition-all rounded-md backdrop-blur-sm cursor-pointer"
            >
              Explore Memberships
            </button>

            <button
              onClick={onExploreGym}
              className="inline-flex items-center gap-2.5 px-4 py-3 text-xs sm:text-sm font-semibold tracking-wide text-zinc-300 hover:text-lime-400 transition-colors cursor-pointer group"
            >
              <span className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center group-hover:border-lime-400 group-hover:scale-105 transition-all">
                <Play className="w-3.5 h-3.5 text-lime-400 fill-lime-400 ml-0.5" />
              </span>
              <span>Watch Experience</span>
            </button>
          </div>
        </div>

        {/* Floating Membership / Quality Assurance Badge & Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-zinc-800/80">
          {gymConfig.stats.map((stat, idx) => (
            <div key={idx} className="relative group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-400 mt-1">
                {stat.label}
              </div>
              {stat.subtext && (
                <div className="text-[11px] text-zinc-500 hidden sm:block mt-0.5">
                  {stat.subtext}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Bottom Badge */}
      <div className="hidden lg:flex absolute bottom-8 right-8 z-10 items-center gap-3 bg-zinc-900/90 border border-zinc-800 p-3.5 rounded-lg backdrop-blur-md shadow-2xl">
        <div className="w-10 h-10 rounded-md bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-bold text-white uppercase tracking-wider">Premium Standards</div>
          <div className="text-[11px] text-zinc-400">Open 7 Days · Lahore, PK</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        aria-label="Scroll down to About section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-zinc-500 hover:text-lime-400 transition-colors cursor-pointer group"
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
};
