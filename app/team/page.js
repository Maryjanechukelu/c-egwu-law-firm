'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { teamMembers } from '@/lib/data/team';
import { BookConsultationModal } from '@/components/BookConsultationModal';

export default function TeamPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <div className="bg-white min-h-screen">
             {/* Header */}
             <section className="bg-slate-50 pt-32 pb-20 border-b border-slate-200">
                <div className="container mx-auto px-4 md:px-8">
                    <span className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-4 block">Our Team</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-8 max-w-4xl">
                        The Legal Minds <br/>
                        <span className="text-slate-400 italic">Behind Your Success.</span>
                    </h1>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-x-12 gap-y-20 max-w-6xl mx-auto">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="group">
                                {/* Portrait Image */}
                                <div className="relative aspect-4/5 mb-8 bg-slate-200 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                         <Link href={`/team/${member.slug}`}>
                                            <Button variant="outline" className="border-white text-amber-500 hover:bg-white hover:text-slate-900 rounded-none uppercase tracking-widest">
                                                View Profile
                                            </Button>
                                         </Link>
                                    </div>
                                </div>

                                {/* Text Info */}
                                <div className="border-l-2 border-slate-100 pl-6 group-hover:border-amber-600 transition-colors duration-500">
                                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1">{member.name}</h3>
                                    <p className="text-amber-700 text-sm font-bold uppercase tracking-widest mb-3">{member.role}</p>
                                    <p className="text-slate-500 mb-4 font-serif italic text-sm">{member.credentials}</p>
                                    
                                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                                        {member.shortBio}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {member.practiceAreas.slice(0, 3).map((area, idx) => (
                                            <span key={idx} className="text-[10px] uppercase font-bold tracking-wider text-slate-400 border border-slate-200 px-2 py-1">
                                                {area}
                                            </span>
                                        ))}
                                    </div>

                                    <Link href={`/team/${member.slug}`} className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors uppercase tracking-widest">
                                        Full Profile <ChevronRight size={16} className="ml-1"/>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-slate-950 text-white py-20 border-t border-slate-900">
                <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                            Expert Counsel is One Click Away.
                        </h2>
                        <p className="text-slate-400 text-lg font-light">
                            Contact our team today to discuss how we can help achieve your legal objectives.
                        </p>
                    </div>
                    <Button size="lg" className="h-16 px-10 bg-amber-600 hover:bg-amber-700 text-white rounded-none uppercase tracking-widest font-bold" onClick={() => setIsModalOpen(true)}>
                        Schedule Meeting
                    </Button>
                </div>
            </section>
            
            <BookConsultationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}