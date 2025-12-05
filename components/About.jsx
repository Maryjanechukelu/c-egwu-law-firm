import React from 'react';
import { Briefcase, ShieldCheck, Users, Gavel } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 shadow-xl">
              <img 
                src="/section1.jpg" 
                alt="Modern Office Meeting" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-xl shadow-lg max-w-xs hidden md:block">
              <p className="font-bold text-lg">"We don't just solve legal problems — we help clients protect their interests and plan ahead."</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Forward-Thinking Commercial Law Practice</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                C. Egwu Law Firm is dedicated to helping businesses and individuals make confident decisions in a complex legal landscape. We combine legal expertise with real-world commercial awareness.
              </p>
              <p>
                We support clients across Nigeria and beyond, including growth-oriented companies, established organizations, startups, creatives, and individuals. Our focus is on legal advice that works in practice, not just in theory.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full text-primary"><Briefcase size={20} /></div>
                  <span className="font-semibold text-slate-900">Commercial Focus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full text-primary"><ShieldCheck size={20} /></div>
                  <span className="font-semibold text-slate-900">Confidentiality</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full text-primary"><Users size={20} /></div>
                  <span className="font-semibold text-slate-900">Partnership Mindset</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-full text-primary"><Gavel size={20} /></div>
                  <span className="font-semibold text-slate-900">Rigorous Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};