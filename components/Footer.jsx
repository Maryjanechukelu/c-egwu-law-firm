import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#3c144c] text-slate-400 py-16 border-t border-white text-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="block mb-6">
              <div className="relative w-48 h-12 opacity-90 hover:opacity-100 transition-opacity">
                <Image
                  alt="Logo"
                  src="/logo1.png"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            {/* <p className="leading-relaxed mb-6">
              Delivering precise, business-minded legal solutions for local and international clients when stakes are high.
            </p> */}
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/c-egwu-law-firm/" target="_blank" className="p-2 bg-white text-amber-600 hover:bg-amber-600 hover:text-white transition-colors flex items-center justify-center"><Linkedin size={18} /></a>
              <a href="https://x.com/firm_c30532?t=gyUPdp-Q56CLxLdoxO2Q8Q&s=08" target="_blank" className="p-2 bg-white text-amber-600 hover:bg-amber-600 hover:text-white transition-colors flex items-center justify-center"><Twitter size={18} /></a>
              <a href="https://www.instagram.com/cegwu_law" target="_blank" className="p-2 bg-white text-amber-600 hover:bg-amber-600 hover:text-white transition-colors flex items-center justify-center"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Firm</h4>
            <ul className="space-y-4">
              {/* <li><Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link></li> */}
              <li><Link href="/team" className="hover:text-amber-500 transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="hover:text-amber-500 transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link></li>
              <li><Link href="/articles" className="hover:text-amber-500 transition-colors">Articles</Link></li>
            </ul>
          </div>

          {/* Practice Areas Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Practice</h4>
            <ul className="space-y-4">
              <li><Link href="/practice-areas" className="hover:text-amber-500 transition-colors">Corporate Law</Link></li>
              <li><Link href="/practice-areas" className="hover:text-amber-500 transition-colors">Technology & Media Law</Link></li>
              <li><Link href="/practice-areas" className="hover:text-amber-500 transition-colors">Intellectual Property</Link></li>
              <li><Link href="/practice-areas" className="hover:text-amber-500 transition-colors">Employment & Labour Law</Link></li>
              <li><Link href="/practice-areas" className="hover:text-amber-500 transition-colors">Private Wealth (Family Law, Wills, Tax & Estate Planning)</Link></li>
            </ul>
          </div>

          {/* Newsletter / Contact Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="mb-4">Subscribe for legal updates and firm news.</p>
            <div className="flex">
              <input type="email" placeholder="Email Address" className="bg-slate-900 border-none outline-none px-4 py-2 w-full text-white placeholder-slate-600" />
              <button className="bg-amber-600 text-white px-4 hover:bg-amber-700 transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="border-t border-white pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} C. Egwu Law Firm. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};