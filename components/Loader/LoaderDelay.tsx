"use client";

import { useState, useEffect, ReactNode } from "react";

interface LoaderDelayProps {
  children: ReactNode;
  delay?: number;
}

export default function LoaderDelay({ children, delay = 600 }: LoaderDelayProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className="w-full h-full relative">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-50">
          {/* Ici tu peux mettre un spinner ou un logo */}
        </div>
      )}
      <div className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
        {children}
      </div>
    </div>
  );
}
