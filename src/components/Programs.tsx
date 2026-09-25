import React, { useState } from 'react';
import { ArrowUpRight, Clock, Zap, CheckCircle2 } from 'lucide-react';
import { programsData } from '../data/gymData';

interface ProgramsProps {
  onOpenMembership: (programTitle?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenMembership }) => {
  const [activeTab, setActiveTab] = useState(programsData[0].id);
  const activeProgram = programsData.find((p) => p.id === activeTab) || programsData[0];

  return (
    <section id="programs" className="py-24 bg-zinc-950 text-zinc-100 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">
            Targeted Performance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display text-balance">
            SPECIALIZED TRAINING PROTOCOLS.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed font-normal">
            Every body is different. Our scientific protocols ensure you do not waste months spinning your wheels with arbitrary routines.
          </p>
        </div>

        {/* Tab Selectors (Clean segmented buttons) */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {programsData.map((prog) => (
            <button
              key={prog.id}
              onClick={() => setActiveTab(prog.id)}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                activeTab === prog.id
                  ? 'bg-lime-400 text-zinc-950 shadow-md shadow-lime-400/20'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-850 border border-zinc-800'
              }`}
            >
              {prog.title}
            </button>
          ))}
        </div>

        {/* Active Program Spotlight Card */}
        <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-zinc-400">
                <span className="flex items-center gap-1.5 text-lime-400">
                  <Clock className="w-4 h-4" />
                  <span>{activeProgram.duration}</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span>Intensity: {activeProgram.intensity}</span>
                </span>
                <span>·</span>
                <span>Target: {activeProgram.level}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white font-display">
                {activeProgram.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                {activeProgram.description}
              </p>

              {/* Benefits */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Key Milestones & Outcomes:
                </div>
                {activeProgram.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenMembership(activeProgram.title)}
                  className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-950 bg-lime-400 hover:bg-lime-300 rounded-md transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
                >
                  <span>Inquire About This Program</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-zinc-800 aspect-4/3 lg:aspect-square">
              <img
                src={activeProgram.image}
                alt={activeProgram.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
