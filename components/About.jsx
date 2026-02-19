/* eslint-disable @next/next/no-img-element */
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

            <h2 className="text-2xl md:text-2xl font-serif font-bold text-slate-900 mb-8 leading-tight">
              Who We Are
            </h2>

            <div className="prose prose-lg text-slate-600 max-w-none">
              <p className="mb-6">
                C. Egwu Law Firm is a forward-thinking commercial law practice dedicated to helping 
                businesses and individuals make confident decisions in a complex legal landscape. We 
                combine legal expertise with real-world commercial awareness, ensuring that every client 
                receives advice that is both clear and strategically sound.
              </p>
              <p className="mb-8">
                We support clients across Nigeria and beyond, including growth-oriented companies, 
                established organisations, startups, creatives, professionals, and individuals with substantial 
                legal needs. Regardless of their location or industry, our clients trust us to deliver practical 
                solutions, strong representation, and dependable legal support.
              </p>
              
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200 pt-8 mt-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 mt-10">Our Approach</h3>
              <p className="mb-6">
                Our focus is on legal advice that works in practice, not just in theory. We take the time to 
                understand each client&apos;s goals, anticipate risks, and simplify the legal issues so they can make 
                informed decisions.
              </p>
              <p className="mb-8">
                Responsiveness is at the heart of our service. Clients choose us because we communicate 
                clearly, deliver promptly, and maintain the highest standards of confidentiality and 
                professionalism. We don&apos;t just solve legal problems, we help clients protect their interests and 
                plan ahead with confidence.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 mt-10">Our Commitment</h3>
              <p className="mb-6">
                Every engagement is handled with diligence, speed, and discretion. Clients rely on us for:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Practical, solutions-driven legal advice</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Strong commercial understanding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Fast and reliable turnaround</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Clear communication with no unnecessary jargon</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>Strict confidentiality</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2.5 flex-shrink-0"></span>
                  <span>A partnership mindset</span>
                </li>
              </ul>
              <p className="mb-8">
                Our mission is simple: support clients with the clarity and legal confidence they need to thrive 
                in today&apos;s competitive and fast changing environment.
              </p>
            </div>
            {/* <div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">Commercial Focus</h4>
                <p className="text-sm text-slate-500">Legal advice that works in practice, not just in theory.</p>
            </div>       */}
          </div>
      </div>
      <div className="mt-12">
        <img 
          src="/about-us.png" 
          alt="C. Egwu Law Firm Team" 
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};