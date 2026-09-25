import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowUpRight, MessageSquare, Phone } from 'lucide-react';
import { gymConfig, membershipPlans } from '../data/gymData';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
  initialPlan,
}) => {
  const [selectedPlan, setSelectedPlan] = useState(initialPlan || 'Premium Member');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPlan) {
      setSelectedPlan(initialPlan);
    }
  }, [initialPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = `Hello Eleven Gym Lahore! My name is ${name || 'Prospective Member'}. I am interested in inquiring about the "${selectedPlan}" option. Could you please share the current pricing and membership details?`;
    window.open(`https://wa.me/${gymConfig.whatsappPhone}?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-lime-400/10 border-2 border-lime-400 text-lime-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              REQUEST RECEIVED!
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Thank you, <span className="text-lime-400 font-semibold">{name}</span>. Our membership counselor will contact you at <span className="text-white font-medium">{phone}</span> regarding the <span className="text-lime-300">{selectedPlan}</span> rate card.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppInquiry}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold uppercase tracking-wider text-xs rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly On WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-xs font-bold text-zinc-300 rounded-lg cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-1">
                Eleven Gym Lahore
              </div>
              <h3 className="text-2xl font-black uppercase text-white font-display">
                Membership Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Receive official rate sheets, personal trainer packages, and schedule a club walkthrough.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Select Program / Plan
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white focus:outline-none focus:border-lime-400 transition-colors"
                >
                  {membershipPlans.map((plan) => (
                    <option key={plan.id} value={plan.name} className="bg-zinc-900 text-white">
                      {plan.name}
                    </option>
                  ))}
                  <option value="1-on-1 Personal Training" className="bg-zinc-900 text-white">
                    1-on-1 Personal Training
                  </option>
                  <option value="General Club Tour & Trial" className="bg-zinc-900 text-white">
                    General Club Tour & Trial
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Zain Malik"
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +92 300 1234567"
                  className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 transition-colors"
                />
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold uppercase tracking-wider text-xs rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 active:scale-[0.98]"
                >
                  <span>Submit Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-zinc-800"></div>
                  <span className="flex-shrink mx-4 text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">Or Instant WhatsApp</span>
                  <div className="flex-grow border-t border-zinc-800"></div>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="w-full py-3 bg-zinc-950 hover:bg-emerald-950/20 border border-emerald-500/40 text-emerald-400 font-bold uppercase tracking-wider text-xs rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Ask On WhatsApp</span>
                </button>
              </div>

              <div className="text-[11px] text-zinc-500 text-center pt-1">
                Open 7 Days a week in Lahore · Quick response from front desk
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
