import React from 'react';

export const About = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Image Section - Spans 5 columns */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              <img
                src="/section1.jpg"
                alt="Law Firm Office"
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Geometric Decoration */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-slate-200 -z-0 hidden md:block"></div>
          </div>

          {/* Text Section - Spans 7 columns */}
          <div className="lg:col-span-7 lg:pl-12 pt-8 lg:pt-0">
            <span className="text-amber-700 font-bold tracking-widest text-sm uppercase mb-4 block">About The Firm</span>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              A Forward-Thinking Commercial Law Practice
            </h2>

            <div className="prose prose-lg text-slate-600 max-w-none">
              <p className="mb-6">
                C. Egwu Law Firm is dedicated to helping businesses and individuals make confident decisions in a complex legal landscape. We believe that true legal excellence lies not just in knowing the law, but in understanding the business realities our clients face.
              </p>
              <p className="mb-8">
                We support clients across Nigeria and beyond—from growth-oriented startups to established multinationals. Our counsel is rigorous, our approach is personal, and our focus is unyieldingly on your success.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8 mt-8">
              <div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">Commercial Focus</h4>
                <p className="text-sm text-slate-500">Legal advice that works in practice, not just in theory.</p>
              </div>
              <div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">Rigorous Analysis</h4>
                <p className="text-sm text-slate-500">Deep dive research to protect your long-term interests.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};