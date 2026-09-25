import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryPhotos } from '../data/gymData';

export const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Interior' | 'Equipment' | 'Training' | 'Atmosphere'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = filter === 'All'
    ? galleryPhotos
    : galleryPhotos.filter((p) => p.category === filter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const prevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  const nextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
  };

  return (
    <section id="gallery" className="py-24 bg-zinc-950 text-zinc-100 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-lime-400 mb-3">
              Visual Atmosphere
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-display text-balance">
              INSIDE ELEVEN GYM.
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            Take a visual tour through our curated training spaces, Olympic iron arsenals, and focused members in action.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {(['All', 'Interior', 'Equipment', 'Training', 'Atmosphere'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                filter === cat
                  ? 'bg-zinc-100 text-zinc-950'
                  : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer aspect-4/3 sm:aspect-square"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Details */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-zinc-950/80 border border-zinc-700 flex items-center justify-center text-lime-400">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-lime-400">
                    {photo.category}
                  </span>
                  <h4 className="text-lg font-bold text-white font-display mt-0.5">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 p-2.5 rounded-full bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-700 cursor-pointer z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevPhoto}
            aria-label="Previous Photo"
            className="absolute left-4 sm:left-8 p-3 rounded-full bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-700 cursor-pointer z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextPhoto}
            aria-label="Next Photo"
            className="absolute right-4 sm:right-8 p-3 rounded-full bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-zinc-700 cursor-pointer z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredPhotos[lightboxIndex].image}
              alt={filteredPhotos[lightboxIndex].title}
              className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl border border-zinc-800"
              referrerPolicy="no-referrer"
            />
            <div className="mt-4 text-center">
              <span className="text-xs text-lime-400 font-bold uppercase tracking-widest">
                {filteredPhotos[lightboxIndex].category}
              </span>
              <h3 className="text-xl font-bold text-white font-display mt-0.5">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <p className="text-xs text-zinc-400 max-w-lg mt-1">
                {filteredPhotos[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
