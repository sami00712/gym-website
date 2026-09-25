import React, { useState } from 'react';
import { Send, Phone, MessageSquare, MapPin, CheckCircle, Mail, Clock } from 'lucide-react';
import { gymConfig, membershipPlans } from '../data/gymData';

interface ContactSectionProps {
  initialPlan?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPlan }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    membership: initialPlan || 'Premium Member',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage('Please enter your phone number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate clean immediate response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950 text-zinc-100 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display text-balance">
            CONNECT WITH ELEVEN GYM LAHORE.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-4 leading-relaxed font-normal">
            Whether you want to claim your introductory tour pass, discuss custom personal coaching, or learn about rates, we are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Contact Info & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-6">
              <h3 className="text-xl font-bold text-white font-display">
                Front Desk & Concierge
              </h3>

              <div className="space-y-4">
                <a
                  href={`tel:${gymConfig.phone}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-lime-400/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-lime-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase font-semibold">Direct Call</div>
                    <div className="text-sm font-bold text-white group-hover:text-lime-300 transition-colors">
                      {gymConfig.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${gymConfig.whatsappPhone}?text=${encodeURIComponent(gymConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase font-semibold">Official WhatsApp</div>
                    <div className="text-sm font-bold text-emerald-400">
                      Message Front Desk
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${gymConfig.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase font-semibold">Email Inquiries</div>
                    <div className="text-sm font-medium text-white">{gymConfig.email}</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/80">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase font-semibold">Open Timings</div>
                    <div className="text-xs text-zinc-300 font-medium">{gymConfig.openingHoursWeekday}</div>
                    <div className="text-xs text-zinc-400">{gymConfig.openingHoursWeekend}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-400">
                Visiting in person? Drop in anytime during open hours for a guided walkthrough.
              </div>
            </div>
          </div>

          {/* Right: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-lime-400/10 border-2 border-lime-400 text-lime-400 flex items-center justify-center mx-auto animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">
                    INQUIRY RECEIVED
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-lime-400 font-semibold">{formData.name}</span>. An Eleven Gym representative will reach out to you shortly via phone or WhatsApp with your rate card and details.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          membership: 'Premium Member',
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-xs font-bold uppercase tracking-wider text-white rounded-lg transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-white font-display mb-2">
                    Request Membership Information
                  </h3>

                  {errorMessage && (
                    <div className="p-3 text-xs bg-red-950/60 border border-red-800 text-red-300 rounded-lg">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Bilal Ahmed"
                        className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +92 300 1234567"
                        className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. bilal@example.com"
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Interested Program / Plan
                    </label>
                    <select
                      value={formData.membership}
                      onChange={(e) => setFormData({ ...formData, membership: e.target.value })}
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
                      <option value="General Gym Inquiry" className="bg-zinc-900 text-white">
                        General Gym Tour & Day Pass
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Message / Fitness Goals (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your fitness targets, schedule preference, or any questions..."
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-lime-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold uppercase tracking-wider text-xs rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20 active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Membership Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-zinc-500 text-center">
                    We respect your privacy. No spam. A gym representative will contact you directly.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
