"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Khaled Abdullah",
    title: "Principal Architect & Chairman",
    company: "Arch Design & Construction Limited",
    avatar: "/khaled-abdullah.jpg",
    quote: "From creating our vibrant logo to designing our brand identity, Arafat showcased unparalleled talent and a keen attention to detail. We view Arafat as an invaluable extension of our team."
  },
  {
    name: "Sameer Ahmed",
    title: "Filmmaker",
    company: "Bangladesh",
    avatar: "/sameer-ahmed.jpg",
    quote: "He is incredibly responsive and highly dependable. He took the job with smiles and executed the designs with utmost ease."
  },
  {
    name: "Michael Chen",
    title: "Founder",
    company: "StartupInc",
    avatar: "/testimonials/avatar-3.svg",
    quote: "Working with a designer who truly understands product strategy is rare. The interface is intuitive, beautiful, and aligns perfectly with our business goals."
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="testimonials" className="w-full bg-background border-t border-border/40 py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Carousel Container */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center min-h-[500px]">
          
          {/* Navigation - Left Arrow */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          {/* Testimonials Slide Area */}
          <div className="relative w-full h-full flex items-center justify-center px-16 md:px-24">
            {TESTIMONIALS.map((testimonial, index) => (
              <div 
                key={index}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-1000 ease-out px-4 ${
                  index === currentIndex 
                    ? "opacity-100 translate-y-0 scale-100 blur-0 z-10 pointer-events-auto" 
                    : "opacity-0 translate-y-8 scale-95 blur-[4px] z-0 pointer-events-none"
                }`}
              >
                {/* Avatar */}
                <div className="mx-auto mb-6 w-20 h-20 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                
                {/* Quote */}
                <p className="text-foreground text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed font-medium mb-10">
                  {testimonial.quote}
                </p>
                
                {/* Quote Icon */}
                <div className="mb-6 text-[#a3e635]">
                  <Quote className="h-8 w-8 fill-current opacity-90 rotate-180" />
                </div>
                
                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <h4 className="font-bold text-foreground text-base md:text-lg mb-1">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm md:text-base">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation - Right Arrow */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-0 left-0 lg:left-12 z-20 flex items-baseline gap-1 text-foreground">
            <span className="text-2xl font-bold">{currentIndex + 1}</span>
            <span className="text-sm font-medium text-muted-foreground">/{TESTIMONIALS.length}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
