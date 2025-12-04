import React from 'react';
import { Scale } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
          <Scale size={24} />
          <span>C. EGWU LAW FIRM</span>
        </div>
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} C. Egwu Law Firm. All rights reserved.</p>
          <p className="mt-1">Attorney Advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  );
};