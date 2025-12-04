'use client';
import React, { useState } from 'react';
import Image from "next/image"
import { Menu, X, Scale } from 'lucide-react';
import { Button } from './ui/Button';

export const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ to, children }) => (
    <button 
      onClick={() => scrollToSection(to)}
      className="text-sm font-medium transition-colors hover:text-primary"
    >
      {children}
    </button>
  );

  const MobileNavLink = ({ to, children }) => (
    <button 
      onClick={() => {
        scrollToSection(to);
        setIsMenuOpen(false);
      }}
      className="text-lg font-medium py-2 transition-colors hover:text-primary w-full text-left"
    >
      {children}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-tighter text-primary">
          <div className="flex items-center md:gap-3">
            {/* Small logo - responsive sizing */}
            <div className="relative w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
              <Image
                alt="Logo"
                src="/logo-icon.png"
                fill
                className="object-contain"
              />
            </div>

            {/* Large logo - responsive sizing */}
            <div className="relative w-32 h-6 md:w-40 md:h-8 lg:w-48 lg:h-10">
              <Image
                alt="Logo"
                src="/logo1.png"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">About Us</NavLink>
          <NavLink to="practice">Practice Areas</NavLink>
          <NavLink to="team">Team</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <Button onClick={() => scrollToSection('contact')}>
            Book Consultation
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b shadow-lg p-4 flex flex-col gap-4">
          <MobileNavLink to="home">Home</MobileNavLink>
          <MobileNavLink to="about">About Us</MobileNavLink>
          <MobileNavLink to="practice">Practice Areas</MobileNavLink>
          <MobileNavLink to="team">Team</MobileNavLink>
          <MobileNavLink to="contact">Contact</MobileNavLink>
          <Button className="w-full" onClick={() => {
            scrollToSection('contact');
            setIsMenuOpen(false);
          }}>
            Book Consultation
          </Button>
        </div>
      )}
    </header>
  );
};