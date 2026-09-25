import React from 'react';
import { MapPin, Phone, MessageSquare, Mail, Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { gymConfig } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Memberships', href: '#memberships' },
    { label: 'Programs', href: '#programs' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-zinc-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-flex items-center gap-2 text-2xl font-black tracking-tight text-white uppercase font-display">
              <span className="text-lime-400">11</span>
              <span>Eleven Gym Lahore</span>
            </a>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              A high-end modern fitness sanctuary in Lahore, Pakistan dedicated to elite strength training, athletic conditioning, and authentic physical transformation.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:border-lime-400/40 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:border-lime-400/40 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:border-lime-400/40 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-lime-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Hours */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-widest text-white">
              Location & Hours
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span className="text-zinc-300">Eleven Gym, Lahore, Punjab, Pakistan</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span className="text-zinc-300">{gymConfig.phone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span className="text-zinc-300">{gymConfig.email}</span>
              </div>
              <div className="text-xs text-zinc-400 pt-2 border-t border-zinc-900">
                <div>{gymConfig.openingHoursWeekday}</div>
                <div className="mt-0.5">{gymConfig.openingHoursWeekend}</div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Eleven Gym Lahore. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#memberships" className="hover:text-zinc-300 transition-colors">Terms of Membership</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-lime-400 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
