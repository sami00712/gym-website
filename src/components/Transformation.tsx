import React from 'react';
import { ArrowUpRight, Flame, ShieldAlert, Target } from 'lucide-react';
import transformImg from '../assets/images/gym_transformation_lifestyle_1790331521435.jpg';

interface TransformationProps {
  onOpenMembership: () => void;
}

export const Transformation: React.FC<TransformationProps> = ({ onOpenMembership }) => {
  return (
    <section className="py-24 bg-zinc-950 text-zinc-100 border-t border-zinc-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with high-impact cinematic backdrop */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src={transformImg}
              alt="Athlete training at Eleven Gym Lahore"
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />
          </div>

          <div className="relative z-10 p-8 sm:p-14 lg:p-20 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-lime-400 mb-4">
              <Flame className="w-4 h-4" />
              <span>Transformation Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white font-display mb-6 leading-[1.05] text-balance">
              YOUR NEXT LEVEL STARTS HERE.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8">
              True physical transformation isn&apos;t achieved through gimmicks or overnight shortcuts. It is forged in the relentless repetitions, progressive loads, and uncompromising standards you set every single day at Eleven Gym.
            </p>

            {/* Core commitments */}
            <div className="space-y-3 mb-10 text-sm text-zinc-200">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-lime-400" />
                <span>Personal accountability and measurable strength markers.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-lime-400" />
                <span>Zero tolerance for empty hype — pure athletic execution.</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-lime-400" />
                <span>Coaching that aligns recovery, training volume, and nutrition.</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenMembership}
                className="px-8 py-4 text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-950 bg-lime-400 hover:bg-lime-300 active:scale-[0.98] transition-all rounded-md shadow-xl shadow-lime-400/25 flex items-center gap-2 cursor-pointer"
              >
                <span>Begin Your Journey</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
