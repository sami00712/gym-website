import React from 'react';
import { Check, Shield, Flame, Users, Sparkles } from 'lucide-react';
import { gymConfig } from '../data/gymData';
import aboutImage from '../assets/images/facility_strength_zone_1790331476774.jpg';

interface AboutProps {
  onOpenMembership: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenMembership }) => {
  const pillars = [
    { title: 'Pure Strength', desc: 'Calibrated plates, heavy-gauge steel cages, and competition barbells.' },
    { title: 'Rigorous Discipline', desc: 'An unapologetically focused culture where every workout yields visible progress.' },
    { title: 'Enduring Transformation', desc: 'Science-backed resistance protocols designed for sustainable longevity.' },
    { title: 'Elite Community', desc: 'An energetic brotherhood and sisterhood of athletes in Lahore who push each other forward.' },
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 text-zinc-100 relative overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl group">
              <img
                src={aboutImage}
                alt="Eleven Gym Lahore Strength Training Zone"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
              
              {/* Bottom Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-zinc-900/90 backdrop-blur-md rounded-lg border border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-widest text-lime-400 font-bold">The Eleven Standard</div>
                  <div className="text-sm font-semibold text-white mt-0.5">Heavy Iron · Precision Biomechanics</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400">
                  <Flame className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Accent backdrop glow */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-lime-400/5 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lime-400">
              <Sparkles className="w-4 h-4" />
              <span>About Eleven Gym Lahore</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display text-balance">
              WHERE DISCIPLINE MEETS RAW POTENTIAL.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              Eleven Gym was established with a singular vision: to bring world-class athletic training standards to the heart of Lahore. We rejected the commercial clutter of soft, uninspired gym environments in favor of a purposeful, high-energy space crafted for lifters, athletes, and dedicated beginners alike.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Whether your objective is adding dense muscle, dropping body fat, building explosive athletic power, or sculpting a healthy, resilient lifestyle, Eleven Gym provides the equipment, atmosphere, and guidance to get you there.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="p-3.5 rounded-lg bg-zinc-900/70 border border-zinc-800/80">
                  <div className="flex items-center gap-2 text-sm font-bold text-white mb-1">
                    <Check className="w-4 h-4 text-lime-400 shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-normal">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Quick Action */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenMembership}
                className="px-6 py-3 text-xs font-bold tracking-wider uppercase text-zinc-950 bg-lime-400 hover:bg-lime-300 rounded-md transition-all shadow-lg shadow-lime-400/20 cursor-pointer"
              >
                Experience Eleven Gym
              </button>
              <div className="text-xs text-zinc-500">
                *Member figures and metrics are representative for preview customization.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
