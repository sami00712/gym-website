import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { gymConfig } from '../data/gymData';

interface NavbarProps {
  onOpenMembership: (planName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMembership }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'facilities', 'memberships', 'programs', 'trainers', 'gallery', 'location', 'faq'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Facilities', href: '#facilities', id: 'facilities' },
    { label: 'Memberships', href: '#memberships', id: 'memberships' },
    { label: 'Programs', href: '#programs', id: 'programs' },
    { label: 'Trainers', href: '#trainers', id: 'trainers' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Location', href: '#location', id: 'location' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-2xl shadow-black/50'
            : 'bg-gradient-to-b from-zinc-950/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="group flex items-center gap-2 text-xl sm:text-2xl font-black tracking-tighter text-white uppercase font-display"
            >
              <span className="text-lime-400 group-hover:text-lime-300 transition-colors">11</span>
              <span>Eleven Gym</span>
            </a>

            {/* Zone 2: Clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-zinc-300">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative py-1 transition-colors hover:text-white whitespace-nowrap ${
                    activeSection === link.id ? 'text-lime-400 font-semibold' : ''
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime-400 rounded-full" />
                  )}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary action button + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenMembership()}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-zinc-950 bg-lime-400 hover:bg-lime-300 active:scale-[0.98] transition-all rounded-md shadow-lg shadow-lime-400/20 whitespace-nowrap cursor-pointer"
              >
                <span>Join Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                className="p-2 text-zinc-300 hover:text-white lg:hidden bg-zinc-900 border border-zinc-800 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 bottom-0 w-full max-w-sm bg-zinc-950 border-l border-zinc-800 p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-4 pt-2">
              <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold px-3">
                Navigation
              </div>
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      activeSection === link.id
                        ? 'bg-zinc-900 text-lime-400 font-semibold'
                        : 'text-zinc-300 hover:bg-zinc-900/60 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-zinc-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenMembership();
                }}
                className="w-full py-3 text-center text-sm font-bold tracking-wider uppercase text-zinc-950 bg-lime-400 hover:bg-lime-300 rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-lime-400/20"
              >
                <span>Join Eleven Gym</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href={`tel:${gymConfig.phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-semibold text-zinc-200 hover:border-zinc-700"
                >
                  <Phone className="w-3.5 h-3.5 text-lime-400" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/${gymConfig.whatsappPhone}?text=${encodeURIComponent(gymConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-semibold text-zinc-200 hover:border-zinc-700"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
