import React from 'react';
import { Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { trainersData } from '../data/gymData';

interface TrainersProps {
  onOpenMembership: (trainerName?: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onOpenMembership }) => {
  return (
    <section id="trainers" className="py-24 bg-zinc-950 text-zinc-100 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">
              Certified Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display text-balance">
              MEET OUR MASTER COACHES.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-zinc-400 leading-relaxed">
              Our strength and movement coaches hold international accreditations, bringing cutting-edge exercise science directly to your training sessions.
            </p>
            <p className="text-[11px] text-zinc-500 mt-2">
              *Demo coach profiles displayed for presentation; easily replaced with your verified staff bios.
            </p>
          </div>
        </div>

        {/* Trainers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainersData.map((trainer) => (
            <div
              key={trainer.id}
              className="rounded-xl overflow-hidden bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Trainer Photo Container */}
                <div className="relative aspect-4/3 overflow-hidden bg-zinc-950">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/30 to-transparent" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold text-lime-400 border border-zinc-800">
                    {trainer.experience}
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-lime-400 uppercase tracking-widest mb-1">
                    {trainer.role}
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mb-2">
                    {trainer.name}
                  </h3>
                  <div className="text-xs font-medium text-zinc-400 mb-4">
                    Specialty: {trainer.specialty}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                    {trainer.bio}
                  </p>

                  {/* Certifications (Clean unboxed list) */}
                  <div className="space-y-1.5 pt-3 border-t border-zinc-800/60">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-1 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-lime-400" />
                      <span>Accreditations:</span>
                    </div>
                    {trainer.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="w-3 h-3 text-lime-400/80 shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenMembership(`Personal Coaching with ${trainer.name}`)}
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider bg-zinc-800 hover:bg-lime-400 hover:text-zinc-950 text-white rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Book With Coach</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
