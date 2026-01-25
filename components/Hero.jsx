import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

// Practice areas for the sliding marquee
const PRACTICE_AREAS = [
  "Corporate & Commercial Law",
  "Dispute Resolution",
  "Mergers & Acquisitions",
  "Intellectual Property",
  "Real Estate & Infrastructure",
  "Tax Advisory",
  "Employment & Labor",
  "Banking & Finance",
  "Energy & Natural Resources"
];

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[800px] flex flex-col items-center justify-center overflow-hidden bg-slate-950">
      
      {/* --- Background Layer --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home.png"
          alt="Law Firm Office"
          fill
          className="object-cover opacity-60" 
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/90"></div>
      </div>

      {/* --- Main Content --- */}
      <div className="container relative z-20 mx-auto px-4 md:px-8 text-center max-w-5xl mt-[-50px]">
        
        {/* Animated Badge */}
        <div className="animate-fade-in-up opacity-0 [animation-delay:200ms]">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-sm uppercase tracking-widest border-white/20 text-slate-200 backdrop-blur-sm">
            Smart Law. Real Solutions.
          </Badge>
        </div>

        {/* Hero Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight animate-fade-in-up opacity-0 [animation-delay:400ms]">
          Precision. Commercial Awareness.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
            Unwavering Confidence.
          </span>
        </h1>

        {/* Hero Description */}
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light animate-fade-in-up opacity-0 [animation-delay:600ms]">
          A full-service business law firm committed to delivering precise, business-minded legal solutions for local and international clients when stakes are high.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 [animation-delay:800ms]">
          <Link href="/practice-areas">
            <Button size="lg" className="h-14 px-8 text-lg bg-white text-slate-900 hover:bg-slate-200 transition-all cursor-pointer">
              Explore Our Practice
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-white/30 text-white hover:bg-white/10 backdrop-blur-sm cursor-pointer">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* --- Sliding Infinite Marquee --- */}
      <div className="absolute bottom-0 left-0 w-full z-20 border-t border-white/10 bg-slate-900/60 backdrop-blur-md py-6 overflow-hidden flex">
        {/* We use two identical sets of the list to create the illusion of infinite scrolling.
           The 'group' class allows us to pause the animation on hover.
        */}
        <div className="flex animate-infinite-scroll whitespace-nowrap group hover:[animation-play-state:paused]">
          {[...PRACTICE_AREAS, ...PRACTICE_AREAS].map((area, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-4"></span>
              <span className="text-lg font-medium text-slate-200 tracking-wide uppercase">
                {area}
              </span>
            </div>
          ))}
        </div>
        
        {/* Duplicate container for seamless loop */}
        <div className="flex animate-infinite-scroll whitespace-nowrap group hover:[animation-play-state:paused]" aria-hidden="true">
          {[...PRACTICE_AREAS, ...PRACTICE_AREAS].map((area, index) => (
            <div key={`dup-${index}`} className="flex items-center mx-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 mr-4"></span>
              <span className="text-lg font-medium text-slate-200 tracking-wide uppercase">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
