import React from 'react';
import { Badge } from './ui/badge';

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-200 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
              Our Attorneys
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We are a team of dedicated legal professionals, united by a commitment to excellence and a passion for justice.
            </p>
          </div>
          <div className="hidden md:block mb-2">
            <span className="text-sm font-semibold tracking-widest text-slate-400 uppercase">Leadership</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {/* Chidinma Egwu */}
          <div className="group">
            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Chidinma Egwu"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-sm">Specializing in Corporate Governance, M&A, and IP Law.</p>
              </div>
            </div>

            <div className="pr-4 border-l-2 border-transparent group-hover:border-amber-600 transition-colors duration-300 pl-0 group-hover:pl-4">
              <h3 className="text-2xl font-serif font-bold text-slate-900">Chidinma Egwu</h3>
              <p className="text-amber-700 font-medium mb-2">Principal Counsel</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">LL.M (in view), B.L, LL.B</p>
            </div>
          </div>

          {/* Kingsley Chukwujekwu Ekwesianya */}
          <div className="group">
            <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Kingsley Chukwujekwu Ekwesianya"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white text-sm">Expert in Dispute Resolution and Commercial Litigation.</p>
              </div>
            </div>

            <div className="pr-4 border-l-2 border-transparent group-hover:border-amber-600 transition-colors duration-300 pl-0 group-hover:pl-4">
              <h3 className="text-2xl font-serif font-bold text-slate-900">Kingsley C. Ekwesianya</h3>
              <p className="text-amber-700 font-medium mb-2">Counsel</p>
              <p className="text-xs text-slate-400 uppercase tracking-wider">B.L, LL.B (Hons)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};