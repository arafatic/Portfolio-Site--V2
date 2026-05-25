"use client";

import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const [bdTime, setBdTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setBdTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/40 py-8 relative">
      <div className="container mx-auto px-4 sm:px-8 flex justify-between items-center">
        <p className="text-sm md:text-base text-muted-foreground">
          <span>&copy; {new Date().getFullYear()} Arafatul.</span>{" "}
          <span className="opacity-70">Designed & built.</span>
        </p>
        
        <div className="flex flex-col items-end text-right mr-9 md:mr-16">
          <span className="text-xs text-muted-foreground opacity-70 mb-0.5">
            Dhaka, Bangladesh &bull; UTC+6
          </span>
          <span className="text-sm md:text-base text-muted-foreground font-medium min-h-[1.5rem]">
            {mounted ? bdTime : ""}
          </span>
        </div>
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
