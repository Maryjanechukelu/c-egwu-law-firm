'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { testimonials } from '@/lib/data/testimonials';

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

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

    const goToSlide = (index) => {
        setIsAutoPlaying(false);
        setCurrentIndex(index);
    };

    // Get testimonials to display (current and next 2 for desktop view)
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(testimonials[(currentIndex + i) % testimonials.length]);
        }
        return visible;
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-primary/5 overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <Badge className="mb-4">Client Testimonials</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Trusted by Leading Businesses and Individuals
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our clients say about working with us.
                    </p>
                </div>

                {/* Desktop View - 3 Cards */}
                <div className="hidden md:block relative">
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {visibleTestimonials.map((testimonial, idx) => (
                            <Card
                                key={`${testimonial.id}-${idx}`}
                                className={`p-8 transition-all duration-500 ${idx === 0
                                    ? 'scale-105 shadow-2xl border-2 border-primary/20'
                                    : 'opacity-75 hover:opacity-100'
                                    }`}
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <Quote className="text-primary shrink-0" size={32} />
                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="fill-amber-400 text-amber-400" size={16} />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-4">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="font-semibold">{testimonial.name}</h4>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.role}, {testimonial.company}
                                        </p>
                                    </div>
                                </div>

                                <Badge className="mt-4 bg-primary/10 text-primary hover:bg-primary/20">
                                    {testimonial.category}
                                </Badge>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Mobile View - Single Card */}
                <div className="md:hidden relative">
                    <Card className="p-8 mb-8">
                        <div className="flex items-start gap-4 mb-6">
                            <Quote className="text-primary shrink-0" size={32} />
                            <div className="flex gap-1">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} className="fill-amber-400 text-amber-400" size={16} />
                                ))}
                            </div>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            "{testimonials[currentIndex].content}"
                        </p>

                        <div className="flex items-center gap-4 pt-6 border-t">
                            <img
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].name}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                                <h4 className="font-semibold">{testimonials[currentIndex].name}</h4>
                                <p className="text-sm text-muted-foreground">
                                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                                </p>
                            </div>
                        </div>

                        <Badge className="mt-4 bg-primary/10 text-primary hover:bg-primary/20">
                            {testimonials[currentIndex].category}
                        </Badge>
                    </Card>
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center justify-center mt-6">
                    {/* Desktop Previous */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToPrevious}
                        className="hidden md:flex rounded-full h-10 w-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={20} />
                    </Button>

                    {/* Dots Indicator */}
                    <div className="flex items-center justify-center gap-2 md:gap-3 mx-4">
                        {testimonials.map((_, idx) => {
                            const isActive = idx === currentIndex

                            return (
                                <button
                                    key={idx}
                                    onClick={() => goToSlide(idx)}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                    className={`
                                                rounded-full
                                                transition-all
                                                touch-manipulation
                        ${isActive
                                            ? 'bg-primary w-2 h-2 md:w-8 md:h-2'
                                            : 'bg-primary/40 w-1.5 h-1.5 md:w-2 md:h-2 hover:bg-primary/60'}
                    `}
                                />
                            )
                        })}
                    </div>

                    {/* Desktop Next */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={goToNext}
                        className="hidden md:flex rounded-full h-10 w-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={20} />
                    </Button>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">50+</div>
                        <p className="text-muted-foreground">Happy Clients</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">100+</div>
                        <p className="text-muted-foreground">Cases Handled</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">95%</div>
                        <p className="text-muted-foreground">Success Rate</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">5+</div>
                        <p className="text-muted-foreground">Years Experience</p>
                    </div>
                </div>
            </div>
        </section>
    );
};