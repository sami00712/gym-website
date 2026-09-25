import React from 'react';
import { Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { gymConfig } from '../data/gymData';

interface MobileStickyBarProps {
  onOpenMembership: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenMembership }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 p-2.5 px-3 shadow-2xl">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Direct Call Button */}
        <a
          href={`tel:${gymConfig.phone}`}
          className="flex-1 py-2.5 px-2 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center gap-1.5 text-xs font-semibold text-zinc-200 active:bg-zinc-800 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-lime-400" />
          <span>Call</span>
        </a>

        {/* Direct WhatsApp Button */}
        <a
          href={`https://wa.me/${gymConfig.whatsappPhone}?text=${encodeURIComponent(gymConfig.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-2 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center gap-1.5 text-xs font-semibold text-zinc-200 active:bg-zinc-800 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span>WhatsApp</span>
        </a>

        {/* Join Now Primary CTA */}
        <button
          onClick={onOpenMembership}
          className="flex-[1.4] py-2.5 px-3 bg-lime-400 text-zinc-950 rounded-lg flex items-center justify-center gap-1 text-xs font-bold uppercase tracking-wider active:bg-lime-300 transition-colors shadow-md shadow-lime-400/20 cursor-pointer"
        >
          <span>Join Now</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
