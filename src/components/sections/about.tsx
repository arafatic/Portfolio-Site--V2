"use client";

import { useState } from "react";
import Image from "next/image";

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="container mx-auto px-4 sm:px-8 py-16 md:py-24 border-t border-border/40">
      <div className="max-w-4xl">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-8 md:mb-12">About Me</h2>
        <div className="text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed md:leading-relaxed font-medium tracking-tight">
          Hey. I’m a visual and product designer with 8+ years of experience, currently at{" "}
          <span className="text-muted-foreground hover:text-foreground transition-colors cursor-default">ZKTeco</span>. During my agency years, I had the chance to design for clients like{" "}
          <span className="text-muted-foreground hover:text-foreground transition-colors cursor-default">Prothom Alo</span>,{" "}
          <span className="text-muted-foreground hover:text-foreground transition-colors cursor-default">Southeast Bank PLC</span>,{" "}
          <span className="text-muted-foreground hover:text-foreground transition-colors cursor-default">Islami Bank PLC</span>,{" "}
          <span className="text-muted-foreground hover:text-foreground transition-colors cursor-default">Chorki</span>, and{" "}
          <span className="text-muted-foreground hover:text-foreground transition-colors cursor-default">Pizza Hut</span>. Driven by curiosity and empathy, I focus on creating intuitive, meaningful digital products. I also built my own product,{" "}
          <span className="text-muted-foreground hover:text-foreground transition-colors cursor-default">GoVibing</span> — from idea to execution. Beyond work, I care for plants and bake pizzas 😋
          {!isExpanded && (
            <button 
              onClick={() => setIsExpanded(true)}
              className="text-muted-foreground hover:text-foreground transition-colors text-lg md:text-xl font-normal ml-3 underline underline-offset-4 decoration-1 align-baseline"
            >
              see more
            </button>
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="mt-16 md:mt-24 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-16 lg:mb-24">
            {/* Image Column */}
            <div className="relative aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-sm">
              <Image 
                src="/arafatul-about.jpg" 
                alt="Arafatul riding a bike"
                fill
                className="object-cover"
              />
            </div>

            {/* Info Column */}
            <div className="flex flex-col space-y-10 lg:pl-4">
              {/* Employers */}
              <div>
                <h3 className="text-muted-foreground mb-4 text-base md:text-lg font-medium">Current/past employers</h3>
                <ul className="space-y-1.5 text-sm md:text-base">
                  <li>ZKTeco <span className="text-[#f26522] text-xl leading-none align-middle ml-0.5">•</span></li>
                  <li>Crosswalk Communication</li>
                  <li>Tilottoma Bangla Group</li>
                  <li>Madina Group</li>
                </ul>
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-muted-foreground mb-4 text-base md:text-lg font-medium">Disciplines/skills</h3>
                <ul className="space-y-1.5 text-sm md:text-base">
                  <li>Art Direction</li>
                  <li>Visual design</li>
                  <li>Interactive prototyping</li>
                  <li>Concept and strategy</li>
                  <li>Brand identity</li>
                  <li>Design thinking</li>
                  <li>Mentoring and leadership</li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-muted-foreground mb-4 text-base md:text-lg font-medium">Contact</h3>
                <div className="flex flex-col gap-3 items-start">
                  <a href="mailto:arafatul.designer@gmail.com" className="bg-muted px-4 py-2.5 rounded-md text-sm text-foreground hover:bg-muted/80 transition-colors">
                    arafatul.designer@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/md-arafatul-islam/" target="_blank" rel="noopener noreferrer" className="bg-muted px-4 py-2.5 rounded-md text-sm text-foreground hover:bg-muted/80 transition-colors">
                    Linkedin
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Award Section */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-start max-w-5xl">
            <h3 className="text-lg md:text-xl text-muted-foreground font-medium leading-tight">
              Honor Award for<br />graphic design.
            </h3>
            <div>
              <p className="text-sm md:text-base leading-relaxed mb-4 text-foreground/90">
                Received the <span className="font-bold text-foreground">Honor Award</span> at a university annual art exhibition in 2015 in recognition of my work in graphic design.
              </p>
              <hr className="border-border/60" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
