'use client';
import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { PracticeAreas } from '@/components/PracticeAreas';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Articles } from '@/components/Articles';

export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Hero scrollToSection={scrollToSection} />
      <About />
      <PracticeAreas />
      <Testimonials />
      <Articles />
      <Contact />
    </div>
  );
}