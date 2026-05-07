"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, MotionValue } from "framer-motion";

interface CinematicCanvasProps {
  progress: MotionValue<number>;
  frameCount: number;
}

export default function CinematicCanvas({ progress, frameCount }: CinematicCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    // Determine 1x or 2x based on device pixel ratio
    const dpr = window.devicePixelRatio || 1;
    const scale = dpr >= 1.5 ? "2x" : "1x";
    const newImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new window.Image();
      const frameStr = i.toString().padStart(4, "0");
      img.src = `/sequences/wall-fill/${scale}/frame_${frameStr}.avif`;
      
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (i === 1) {
          // Draw first frame immediately if canvas is ready
          const canvas = canvasRef.current;
          const ctx = canvas?.getContext("2d");
          if (canvas && ctx) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          }
        }
      };
      newImages.push(img);
    }
    setImages(newImages);
  }, [frameCount]);

  useMotionValueEvent(progress, "change", (latest) => {
    if (images.length === 0) return;
    
    // Map progress (0 to 1) to frame index (0 to frameCount - 1)
    const frameIndex = Math.min(
      frameCount - 1,
      Math.max(0, Math.floor(latest * frameCount))
    );
    
    const img = images[frameIndex];
    if (img && img.complete) {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) {
        // We use requestAnimationFrame automatically via framer-motion's internal loop,
        // but we draw here synchronously when the value changes.
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    }
  });

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-graphite overflow-hidden">
      {/* 
        Resolution of canvas is internal resolution. 
        We'll use 1920x1080 and let CSS object-fit cover scale it.
      */}
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className="w-full h-full object-cover"
        aria-hidden="true"
      />
      {imagesLoaded < 30 && (
        <div className="absolute inset-0 flex items-center justify-center bg-graphite/80 z-10">
          <p className="text-bone font-display">Loading Experience...</p>
        </div>
      )}
    </div>
  );
}
