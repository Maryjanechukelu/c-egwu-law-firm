'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { practiceAreas } from '@/lib/data/practiceAreas';

export default function PracticeAreasPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="bg-slate-950 text-white py-24 border-b border-slate-800">
                <div className="container mx-auto px-4 md:px-8">
                    <span className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-6 block">Our Expertise</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 max-w-4xl">
                        Comprehensive <span className="text-slate-500 italic">Legal Solutions</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
                        We provide commercially sound legal advisory across various industries, combining deep expertise with practical business insight.
                    </p>
                </div>
            </section>

            {/* List Layout */}
            <section className="py-0">
                {practiceAreas.map((area, index) => (
                    <Link key={area.id} href={`/practice-areas/${area.slug}`} className="group block">
                        <div className={`
                            border-b border-slate-200 transition-all duration-500
                            hover:bg-slate-50
                        `}>
                            <div className="container mx-auto px-4 md:px-8 py-16 md:py-20">
                                <div className="grid md:grid-cols-12 gap-8 items-start">
                                    {/* Number / Icon */}
                                    <div className="md:col-span-1 text-slate-300 font-serif text-2xl font-bold group-hover:text-amber-600 transition-colors">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                    
                                    {/* Title */}
                                    <div className="md:col-span-4">
                                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 group-hover:translate-x-2 transition-transform duration-300">
                                            {area.title}
                                        </h2>
                                    </div>

                                    {/* Description */}
                                    <div className="md:col-span-5">
                                        <p className="text-slate-500 text-lg leading-relaxed group-hover:text-slate-800 transition-colors">
                                            {area.shortDescription}
                                        </p>
                                        
                                        {/* Services Mini-List */}
                                        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                                            {area.services.slice(0, 3).map((service, idx) => (
                                                <span key={idx} className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                                                    • {service}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="md:col-span-2 flex justify-end">
                                        <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-amber-600 group-hover:border-amber-600 group-hover:text-white transition-all duration-300">
                                            <ArrowUpRight size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </section>
        </div>
    );
}