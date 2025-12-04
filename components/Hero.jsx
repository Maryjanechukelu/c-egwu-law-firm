import React from 'react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

export const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative pt-16 pb-32 flex items-center justify-center min-h-[80vh] overflow-hidden bg-slate-50">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary blur-[100px]" />
        <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-400 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl">
        <Badge className="mb-6 px-4 py-1 text-sm">Smart Law. Real Solutions.</Badge>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-slate-900">
          Precision. Commercial Awareness. 
          <span className="text-primary block mt-2">Unwavering Confidence.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          A full-service business law firm committed to delivering precise, business-minded legal solutions for local and international clients when stakes are high.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="h-12 px-8 text-base" onClick={() => scrollToSection('practice')}>
            Explore Our Practice
          </Button>
          <Button variant="outline" className="h-12 px-8 text-base" onClick={() => scrollToSection('contact')}>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};