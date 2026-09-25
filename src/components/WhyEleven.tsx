import React from 'react';
import { Dumbbell, Award, Target, Sparkles, CreditCard, Users, ArrowRight } from 'lucide-react';
import { whyChooseCards } from '../data/gymData';

interface WhyElevenProps {
  onOpenMembership: () => void;
}

export const WhyEleven: React.FC<WhyElevenProps> = ({ onOpenMembership }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-lime-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-lime-400" />;
      case 'Target':
        return <Target className="w-6 h-6 text-lime-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-lime-400" />;
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-lime-400" />;
      case 'Users':
        return <Users className="w-6 h-6 text-lime-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-lime-400" />;
    }
  };

  return (
    <section id="why-eleven" className="py-24 bg-zinc-950 text-zinc-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">
            The Eleven Difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display text-balance">
            ENGINEERED FOR SERIOUS RESULTS.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed font-normal">
            We built Eleven Gym to eliminate the frustrations common in ordinary health clubs: crowded spaces, poorly maintained machinery, and lack of true training culture.
          </p>
        </div>

        {/* Bento / Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseCards.map((card, idx) => (
            <div
              key={card.id}
              className="group relative p-8 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800/80 hover:border-lime-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-zinc-950 border border-zinc-800 group-hover:border-lime-400/30 flex items-center justify-center transition-colors">
                    {getIcon(card.iconName)}
                  </div>
                  <span className="text-xs font-mono text-zinc-600 group-hover:text-lime-400/70 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-lime-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/50 flex items-center text-xs font-bold uppercase tracking-wider text-zinc-500 group-hover:text-lime-400 transition-colors">
                <span>Explore Standards</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
              </div>

              {/* Subtle card hover glow */}
              <div className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-b from-lime-400/0 via-lime-400/0 to-lime-400/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white font-display">
              Ready to elevate your training standard in Lahore?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Join a dedicated community focused on consistent physical progression.
            </p>
          </div>
          <button
            onClick={onOpenMembership}
            className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-zinc-950 bg-lime-400 hover:bg-lime-300 rounded-md transition-all whitespace-nowrap cursor-pointer shadow-lg shadow-lime-400/20"
          >
            Claim Your Induction Pass
          </button>
        </div>

      </div>
    </section>
  );
};
