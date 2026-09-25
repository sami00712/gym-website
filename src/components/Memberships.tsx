import React from 'react';
import { Check, ArrowUpRight, HelpCircle, PhoneCall } from 'lucide-react';
import { membershipPlans, gymConfig } from '../data/gymData';

interface MembershipsProps {
  onSelectPlan: (planName: string) => void;
}

export const Memberships: React.FC<MembershipsProps> = ({ onSelectPlan }) => {
  return (
    <section id="memberships" className="py-24 bg-zinc-950 text-zinc-100 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">
            Membership Plans
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display text-balance">
            INVEST IN YOUR PHYSICAL EXCELLENCE.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed font-normal">
            Select a tier that matches your commitment level. We offer flexible options with no hidden lock-ins. Reach out for current promotional packages and student rates.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {membershipPlans.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between p-8 transition-all duration-300 ${
                  isPopular
                    ? 'bg-zinc-900 border-2 border-lime-400 shadow-2xl shadow-lime-400/10 scale-100 lg:-translate-y-2'
                    : 'bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-lime-400 text-zinc-950 text-[11px] font-black tracking-widest uppercase rounded-full shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Plan Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-display mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Pricing Box - Transparent "Contact for Pricing" */}
                  <div className="py-4 px-5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 mb-8">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                      Standard Rate
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-lime-400 mt-0.5">
                      {plan.priceNote}
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-1">
                      Monthly, quarterly & annual packages available
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Included Privileges:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                        <div className="w-5 h-5 rounded-full bg-lime-400/10 border border-lime-400/30 flex items-center justify-center shrink-0 mt-0.5 text-lime-400">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-6 border-t border-zinc-800/60">
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-4 text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      isPopular
                        ? 'bg-lime-400 hover:bg-lime-300 text-zinc-950 shadow-lg shadow-lime-400/20 active:scale-[0.98]'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white active:scale-[0.98]'
                    }`}
                  >
                    <span>{plan.ctaLabel}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Transparency Note */}
        <div className="mt-12 text-center text-xs text-zinc-500 max-w-xl mx-auto flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-zinc-400 shrink-0" />
          <span>Rates are custom-quoted according to contract length, training goals, and personal coaching schedule.</span>
        </div>

      </div>
    </section>
  );
};
