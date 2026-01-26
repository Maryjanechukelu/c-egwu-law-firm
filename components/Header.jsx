"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { BookConsultationModal } from "@/components/BookConsultationModal";

// --- Moved OUTSIDE the Header component ---

const NavLink = ({ to, children }) => (
  <Link
    href={to === "home" ? "/" : `/${to}`}
    className="text-sm font-medium transition-colors hover:text-amber-700"
  >
    {children}
  </Link>
);

// We add an 'onClose' prop so it can still close the menu
const MobileNavLink = ({ to, children, onClose }) => (
  <Link
    href={to === "home" ? "/" : `/${to}`}
    onClick={onClose}
    className="text-lg font-medium py-3 border-b border-border/50 transition-colors hover:text-amber-700 block"
  >
    {children}
  </Link>
);

// ------------------------------------------

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-tighter text-primary">
            <Link href="/" className="flex items-center md:gap-3">
              {/* Small logo */}
              <div className="relative w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
                <Image
                  alt="Logo"
                  src="/logo-icon.png"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Large logo */}
              <div className="relative w-32 h-6 md:w-40 md:h-8 lg:w-48 lg:h-10">
                <Image
                  alt="Logo"
                  src="/logo1.png"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="about">About Us</NavLink>
            <NavLink to="practice-areas">Practice Areas</NavLink>
            <NavLink to="team">Team</NavLink>
            <NavLink to="#contact">Contact</NavLink>
            <NavLink to="articles">Articles</NavLink>
            <Button className="bg-amber-600 text-white hover:bg-amber-700 rounded-none" onClick={() => setIsModalOpen(true)}>
              Book Consultation
            </Button>
          </nav>

          {/* Mobile Menu Trigger */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* --- Mobile Menu Overlay & Drawer --- */}

      {/* 1. Dark Overlay (Backdrop) */}
      <div
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* 2. Sliding Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[80%] max-w-[300px] bg-background shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center gap-1 md:gap-1" onClose={() => setIsMenuOpen(false)}>
              {/* Small logo */}
              <div className="relative w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
                <Image
                  alt="Logo"
                  src="/logo-icon.png"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Large logo */}
              <div className="relative w-32 h-6 md:w-40 md:h-8 lg:w-48 lg:h-10">
                <Image
                  alt="Logo"
                  src="/logo1.png"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-muted rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <nav className="flex flex-col gap-2">
            <MobileNavLink to="about" onClose={() => setIsMenuOpen(false)}>
              About Us
            </MobileNavLink>
            <MobileNavLink
              to="practice-areas"
              onClose={() => setIsMenuOpen(false)}
            >
              Practice Areas
            </MobileNavLink>
            <MobileNavLink to="team" onClose={() => setIsMenuOpen(false)}>
              Team
            </MobileNavLink>
            <MobileNavLink to="#contact" onClose={() => setIsMenuOpen(false)}>
              Contact
            </MobileNavLink>
            <MobileNavLink to="articles" onClose={() => setIsMenuOpen(false)}>
              Articles
            </MobileNavLink>
          </nav>

          {/* Drawer Footer Action */}
          <div className="mt-auto pt-8">
            <Button
              className="w-full bg-amber-600 text-white hover:bg-amber-700 rounded-none"
              onClick={() => {
                setIsMenuOpen(false);
                setIsModalOpen(true);
              }}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <BookConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
