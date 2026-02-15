'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Briefcase, MapPin, Clock, Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JobDetailClient({ job }) {
    if (!job) {
        return (
            <div className="bg-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">
                        Position Not Found
                    </h1>
                    <p className="text-slate-600 mb-8">
                        This job posting may have been removed or does not exist.
                    </p>
                    <Link href="/careers">
                        <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                            <ArrowLeft size={16} className="mr-2" />
                            Back to Careers
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <section className="pt-32 pb-16 bg-slate-50 border-b border-slate-200">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <Link
                        href="/careers"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-600 mb-8 transition-colors text-xs font-bold uppercase tracking-widest"
                    >
                        <ArrowLeft size={14} /> Back to Careers
                    </Link>

                    <div className="mb-6">
                        <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                            {job.department}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                        {job.title}
                    </h1>

                    <div className="flex flex-wrap gap-6 text-slate-600 mb-8">
                        <span className="flex items-center gap-2">
                            <MapPin size={18} />
                            {job.location}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock size={18} />
                            {job.type}
                        </span>
                        <span className="flex items-center gap-2">
                            <Briefcase size={18} />
                            {job.experience}
                        </span>
                    </div>

                    <a href={`mailto:${job.applicationEmail}?subject=Application for ${job.title}`}>
                        <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                            <Mail size={18} className="mr-2" />
                            Apply for This Position
                        </Button>
                    </a>
                </div>
            </section>

            {/* Content */}
            <article className="container mx-auto px-4 md:px-8 max-w-4xl py-16">
                {/* Description */}
                <section className="mb-12">
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                        About the Role
                    </h2>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        {job.description}
                    </p>
                </section>

                {/* Responsibilities */}
                {job.responsibilities && job.responsibilities.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                            Key Responsibilities
                        </h2>
                        <ul className="space-y-3">
                            {job.responsibilities.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-amber-600 shrink-0 mt-1" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Qualifications */}
                {job.qualifications && job.qualifications.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                            Qualifications & Requirements
                        </h2>
                        <ul className="space-y-3">
                            {job.qualifications.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-amber-600 shrink-0 mt-1" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Benefits */}
                {job.benefits && job.benefits.length > 0 && (
                    <section className="mb-12">
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                            What We Offer
                        </h2>
                        <ul className="space-y-3">
                            {job.benefits.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-amber-600 shrink-0 mt-1" />
                                    <span className="text-slate-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Apply CTA */}
                <section className="mt-16 pt-12 border-t border-slate-200">
                    <div className="bg-slate-50 p-8 text-center">
                        <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                            Ready to Apply?
                        </h3>
                        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                            Send your CV and cover letter to get started. We look forward to hearing from you.
                        </p>
                        <a href={`mailto:${job.applicationEmail}?subject=Application for ${job.title}`}>
                            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                                <Mail size={18} className="mr-2" />
                                Submit Application
                            </Button>
                        </a>
                    </div>
                </section>
            </article>
        </div>
    );
}
