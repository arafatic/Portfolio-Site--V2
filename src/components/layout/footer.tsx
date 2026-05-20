"use client";

import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/40 py-8 relative">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <p className="text-sm md:text-base text-muted-foreground">
          <span>&copy; 2026 Arafatul.</span>{" "}
          <span className="opacity-70">Designed & built.</span>
        </p>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute right-4 md:right-12 bottom-6 md:bottom-8 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
        aria-label="Go to top"
      >
        <ArrowUp className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-y-1" />
        <span 
          className="text-[10px] md:text-xs font-medium tracking-widest uppercase" 
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Go to Top
        </span>
      </button>
    </footer>
  );
}
