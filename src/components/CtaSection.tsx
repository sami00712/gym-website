import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { gymConfig } from '../data/gymData';

interface CtaSectionProps {
  onOpenMembership: () => void;
  onScrollToContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenMembership, onScrollToContact }) => {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 p-8 sm:p-14 lg:p-16 text-center shadow-2xl">
          
          {/* Subtle accent glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime-400/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-lime-400">
              The Standard Awaits
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-display text-balance">
              READY TO TRAIN DIFFERENT?
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto leading-relaxed">
              Take the first step toward a stronger version of yourself. Inquire today to secure your membership and tour Eleven Gym Lahore.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenMembership}
                className="px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-950 bg-lime-400 hover:bg-lime-300 active:scale-[0.98] transition-all rounded-md shadow-xl shadow-lime-400/25 flex items-center gap-2 cursor-pointer"
              >
                <span>Join Eleven</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToContact}
                className="px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-zinc-950 hover:bg-zinc-850 border border-zinc-700 active:scale-[0.98] transition-all rounded-md cursor-pointer"
              >
                Contact Us
              </button>

              <a
                href={`https://wa.me/${gymConfig.whatsappPhone}?text=${encodeURIComponent(gymConfig.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="pt-6 text-xs text-zinc-500">
              Eleven Gym Lahore · Open 7 Days · Real Equipment · Serious Community
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
