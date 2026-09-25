import React from 'react';
import { X, Play, Shield, Award, Dumbbell, ArrowUpRight } from 'lucide-react';
import heroImg from '../assets/images/hero_gym_cinematic_1790331460399.jpg';

interface ExperienceVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenMembership: (planName?: string) => void;
}

export const ExperienceVideoModal: React.FC<ExperienceVideoModalProps> = ({
  isOpen,
  onClose,
  onOpenMembership,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-950/80 text-zinc-300 hover:text-white border border-zinc-700 cursor-pointer z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cinematic Header Showcase */}
        <div className="relative aspect-16/9 w-full bg-zinc-950 overflow-hidden">
          <img
            src={heroImg}
            alt="Eleven Gym Lahore Experience"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-950/40 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="w-16 h-16 rounded-full bg-lime-400 text-zinc-950 flex items-center justify-center shadow-xl shadow-lime-400/40 animate-pulse">
              <Play className="w-7 h-7 fill-zinc-950 ml-1" />
            </div>
            <div className="mt-4 text-xs uppercase tracking-widest text-lime-400 font-bold">
              Eleven Gym Lahore · Virtual Club Tour
            </div>
            <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-display mt-1">
              THE ELEVEN EXPERIENCE
            </h3>
          </div>
        </div>

        {/* Body content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <Dumbbell className="w-5 h-5 text-lime-400 mb-2" />
              <h4 className="text-sm font-bold text-white">Strength Sanctuary</h4>
              <p className="text-xs text-zinc-400 mt-1">
                Calibrated competition iron, power cages, and heavy dumbbell lines up to 50kg.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <Shield className="w-5 h-5 text-lime-400 mb-2" />
              <h4 className="text-sm font-bold text-white">Zero Clutter Culture</h4>
              <p className="text-xs text-zinc-400 mt-1">
                Controlled member volume to maintain uninterrupted training flow and focus.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <Award className="w-5 h-5 text-lime-400 mb-2" />
              <h4 className="text-sm font-bold text-white">Master Coaches</h4>
              <p className="text-xs text-zinc-400 mt-1">
                On-floor support, movement technique feedback, and tailored performance plans.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
            <div>
              <div className="text-sm font-bold text-white">Ready to visit in person?</div>
              <div className="text-xs text-zinc-400">Book your walkthrough and meet our coaching team in Lahore.</div>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenMembership('Club Tour & Trial');
              }}
              className="w-full sm:w-auto px-6 py-3 bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold uppercase tracking-wider text-xs rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
            >
              <span>Schedule Club Visit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
