'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Briefcase, Cpu, Scale, Users, ShieldCheck, Gavel } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const iconMap = {
  'Briefcase': Briefcase,
  'Cpu': Cpu,
  'Scale': Scale,
  'Users': Users,
  'ShieldCheck': ShieldCheck,
  'Gavel': Gavel
};

export default function PracticeAreaClient({ practiceArea, relatedPractices }) {
  if (!practiceArea) return null;

  const IconComponent = iconMap[practiceArea.icon];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-slate-950 text-white pt-32 pb-24 border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-8">
            <Link href="/practice-areas" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-500 mb-8 transition-colors text-xs font-bold uppercase tracking-widest">
              <ArrowLeft size={14} /> All Practice Areas
            </Link>
            <div className="flex items-center gap-4 mb-6">
                {IconComponent && <IconComponent className="text-amber-600" size={32} />}
                <h1 className="text-5xl md:text-7xl font-serif font-bold">{practiceArea.title}</h1>
            </div>
            <p className="text-xl text-slate-400 max-w-3xl font-light leading-relaxed">
                {practiceArea.fullDescription}
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
                <div className="mb-16">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Our Services</h2>
                    <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
                        {practiceArea.services.map((service, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <CheckCircle className="text-amber-600 mt-1 shrink-0" size={20} />
                                <span className="text-slate-700 leading-relaxed">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Case Studies */}
                {practiceArea.caseStudies && practiceArea.caseStudies.length > 0 && (
                    <div className="mb-16">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Representative Experience</h2>
                        <div className="space-y-8">
                            {practiceArea.caseStudies.map((study, idx) => (
                                <div key={idx} className="bg-slate-50 p-8 border-l-4 border-slate-900">
                                    <h3 className="text-xl font-bold font-serif text-slate-900 mb-4">{study.title}</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">Challenge</span>
                                            <p className="text-slate-600">{study.description}</p>
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">Outcome</span>
                                            <p className="text-slate-900 font-medium">{study.outcome}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Sidebar (Sticky) */}
            <div className="lg:col-span-4">
                <div className="sticky top-32 space-y-8">
                    <div className="bg-slate-100 aspect-video relative">
                         <img
                            src={practiceArea.heroImage}
                            alt={practiceArea.title}
                            className="w-full h-full object-cover grayscale"
                         />
                    </div>

                    <div className="bg-slate-950 text-white p-8">
                        <h3 className="font-serif font-bold text-xl mb-6">Industries Served</h3>
                        <div className="flex flex-wrap gap-2">
                             {practiceArea.industries.map((industry, idx) => (
                                <span key={idx} className="text-xs uppercase tracking-wider border border-slate-700 px-3 py-1 text-slate-300">
                                  {industry}
                                </span>
                              ))}
                        </div>
                    </div>

                    <div className="bg-amber-600 text-white p-8 text-center">
                        <h3 className="font-serif font-bold text-xl mb-4">Need Advice?</h3>
                        <p className="text-white/90 text-sm mb-6 leading-relaxed">
                            Our team is ready to provide expert guidance tailored to your specific needs.
                        </p>
                        <Button 
                            variant="outline" 
                            onClick={() => scrollToSection('#contact')}
                            className="w-full border-white text-amber-500 hover:bg-white hover:text-amber-600 rounded-none uppercase tracking-widest font-bold"
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
}