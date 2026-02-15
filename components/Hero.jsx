import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

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
    <section id="home" className="relative h-screen sm:h-[80vh] sm:min-h-[600px] flex flex-col justify-center overflow-hidden bg-slate-950">

      {/* --- Background Layer --- */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home.png"
          alt="Law Firm Office"
          fill
          className="object-cover"
          priority
          quality={75}
        />
        {/* Heavier Dark Overlay for better text contrast & moody premium feel */}
        <div className="absolute inset-0 bg-slate-950/80"></div>
        {/* Subtle gradient from bottom to blend with marquee */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      {/* --- Main Content --- */}
      <div className="container relative z-20 mx-auto px-4 md:px-8 pt-2 md:pt-0">
        <div className="max-w-4xl">

          {/* Top Label (Replaces the rounded Badge for a sharper look) */}
          <div className="flex items-center gap-3 mb-4 md:mb-8 animate-fade-in-up opacity-0 [animation-delay:200ms]">
            <div className="h-0.5 w-8 md:w-12 bg-amber-600"></div>
            <span className="text-amber-500 font-bold tracking-[0.2em] text-xs md:text-sm uppercase">
              Smart Law. Real Solutions.
            </span>
          </div>

          {/* Hero Heading - Serif & Statuesque */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-4 md:mb-8 leading-[1.1] animate-fade-in-up opacity-0 [animation-delay:400ms]">
            Precision. <br />
            Commercial Awareness. <br />
            <span className="text-amber-500">Unwavering Confidence.</span>
          </h1>

          {/* Hero Description with vertical border line */}
          <div className="border-l border-slate-700 pl-4 md:pl-6 ml-1 md:ml-2 animate-fade-in-up opacity-0 [animation-delay:600ms]">
            <p className="text-base md:text-xl text-slate-300 max-w-xl leading-relaxed font-light">
              A full-service business law firm committed to delivering precise, business-minded legal solutions for local and international clients when stakes are high.
            </p>
          </div>

          {/* CTA Buttons - Sharp corners (rounded-none) */}
          <div className="flex flex-row gap-3 md:gap-6 mt-6 md:mt-10 animate-fade-in-up opacity-0 [animation-delay:800ms]">
            <Link href="/practice-areas" className="flex-1 sm:flex-initial">
              <Button size="lg" className="w-full sm:w-auto h-12 md:h-16 px-4 md:px-10 text-xs md:text-lg bg-amber-600 text-white hover:bg-amber-700 transition-all rounded-none uppercase tracking-widest font-semibold">
                Explore Areas
              </Button>
            </Link>
            <Link href="#contact" className="flex-1 sm:flex-initial">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 md:h-16 px-4 md:px-10 text-xs md:text-lg border-slate-600 text-amber-500 hover:bg-white hover:text-slate-950 transition-all rounded-none uppercase tracking-widest font-semibold backdrop-blur-sm">
                Contact Firm
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* --- Sliding Infinite Marquee --- */}
      <div className="absolute bottom-0 left-0 w-full z-20 border-t border-slate-800 bg-slate-950/90 backdrop-blur-md py-6 overflow-hidden flex">
        {/* Set 1 */}
        <div className="flex animate-infinite-scroll whitespace-nowrap group hover:[animation-play-state:paused]">
          {[...PRACTICE_AREAS, ...PRACTICE_AREAS].map((area, index) => (
            <div key={index} className="flex items-center mx-8 md:mx-12">
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-600 mr-4"></span> {/* Diamond Bullet */}
              <span className="text-xs md:text-sm font-bold text-slate-400 tracking-[0.15em] uppercase hover:text-white transition-colors cursor-default">
                {area}
              </span>
            </div>
          ))}
        </div>

        {/* Set 2 (Duplicate for loop) */}
        <div className="flex animate-infinite-scroll whitespace-nowrap group hover:[animation-play-state:paused]" aria-hidden="true">
          {[...PRACTICE_AREAS, ...PRACTICE_AREAS].map((area, index) => (
            <div key={`dup-${index}`} className="flex items-center mx-8 md:mx-12">
              <span className="w-1.5 h-1.5 rotate-45 bg-amber-600 mr-4"></span>
              <span className="text-xs md:text-sm font-bold text-slate-400 tracking-[0.15em] uppercase hover:text-white transition-colors cursor-default">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};