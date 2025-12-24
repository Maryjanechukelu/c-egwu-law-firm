import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-16 pb-32 flex items-center justify-center min-h-[80vh] md:min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Overlay to make text readable */}
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Abstract Background Shapes - Now on top of background image */}
      <div className="absolute inset-0 z-1 opacity-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary blur-[100px]" />
        <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-400 blur-[100px]" />
      </div>

      <div className="container relative z-20 mx-auto px-4 md:px-8 text-center max-w-4xl">
        <Badge className="mb-6 px-4 py-1 text-sm">Smart Law. Real Solutions.</Badge>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">
          Precision. Commercial Awareness.
          <span className="text-blue-700 block mt-2">Unwavering Confidence.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          A full-service business law firm committed to delivering precise, business-minded legal solutions for local and international clients when stakes are high.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/practice-areas">
            <Button className="h-12 px-8 text-base cursor-pointer">
              Explore Our Practice
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline" className="h-12 px-8 text-base cursor-pointer">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};