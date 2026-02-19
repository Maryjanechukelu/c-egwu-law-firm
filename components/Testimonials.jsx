/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000); // Slower, more elegant timing
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToPrevious = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setIsAutoPlaying(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-32 bg-[#3c144c] text-white overflow-hidden relative">
            {/* Decorative Background Element */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 flex justify-center">
                        <Quote size={64} className="text-amber-600/40 rotate-180" />
                    </div>

                    <div className="min-h-[300px] flex flex-col justify-center text-center">
                        <h3 className="text-md md:text-2xl md:text-4xl font-serif leading-relaxed mb-10 text-slate-100">
                            &quot;{currentTestimonial.content}&quot;
                        </h3>

                        <div className="flex flex-col items-center">
                            <div className="w-28 h-28 relative mb-4">
                                <img
                                    src={currentTestimonial.image}
                                    alt={currentTestimonial.name}
                                    className="w-full h-full object-cover rounded-full border-2 border-slate-700"
                                />
                            </div>
                            <div className="text-center">
                                {/* <h4 className="text-lg font-bold text-white">{currentTestimonial.name}</h4> */}
                                <p className="text-amber-500 text-lg tracking-wide uppercase mt-1">
                                    {currentTestimonial.company}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Minimalist Navigation */}
                    <div className="flex items-center justify-center gap-8 mt-16">
                        <button
                            onClick={goToPrevious}
                            className="p-2 text-slate-500 hover:text-white transition-colors"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className="flex gap-3">
                            {testimonials.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setIsAutoPlaying(false);
                                        setCurrentIndex(idx);
                                    }}
                                    className={`h-0.5 md:h-1 transition-all duration-300 ${idx === currentIndex ? 'w-2 md:w-8 bg-amber-600' : 'w-2 bg-slate-700 hover:bg-slate-600'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={goToNext}
                            className="p-2 text-slate-500 hover:text-white transition-colors"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};