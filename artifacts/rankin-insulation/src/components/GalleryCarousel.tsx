import { useEffect, useRef, useState } from 'react';

interface Image {
  src: string;
  alt: string;
}

export default function GalleryCarousel({ images }: { images: Image[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPaused || !scrollRef.current) return;
      const container = scrollRef.current;
      const itemWidth = (container.children[0] as HTMLElement)?.clientWidth || 0;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        container.scrollBy({ left: -itemWidth, behavior: 'smooth' });
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        container.scrollBy({ left: itemWidth, behavior: 'smooth' });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPaused]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const itemWidth = (container.children[0] as HTMLElement)?.clientWidth || 0;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(33.333%-11px)] flex-shrink-0 snap-center"
            >
              <div className="relative rounded-xl overflow-hidden aspect-square group border border-white/5 hover:border-[#00AEEF]/30 transition-colors">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 hidden md:flex items-center justify-center gap-2 text-slate-500 text-sm opacity-80 hover:opacity-100 transition-opacity">
        <span className="material-symbols-outlined text-base">keyboard</span>
        <span>Hover over the gallery and use your arrow keys to scroll manually</span>
      </div>
    </div>
  );
}
