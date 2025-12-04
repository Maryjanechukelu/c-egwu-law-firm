import React from 'react';
import { Scale } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-tighter text-primary">
          <Link href="/" className="flex items-center md:gap-3">
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
          </Link>
        </div>
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} C. Egwu Law Firm. All rights reserved.</p>
          <p className="mt-1">Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  );
};