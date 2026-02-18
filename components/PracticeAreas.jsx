'use client';
import React, { useState } from 'react';
import Link from 'next/link'; // Added Link for proper routing
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

// Added 'slug' to data structure matches your routing
const PRACTICE_DATA = [
  {
    id: 1,
    title: "Corporate Law",
    slug: "corporate-law", // Adjusted to standard slug format
    description: "We support businesses through every stage of their lifecycle, from establishment to expansion. Our team advises on private equity, M&A, restructuring, and corporate governance, ensuring your business foundation is solid, compliant, and scalable in the Nigerian and global market."
  },
  {
    id: 2,
    title: "Technology & Media",
    slug: "technology-media-law",
    description: "We advise tech companies, digital platforms, and creatives on content rights, licensing, data protection (NDPR/GDPR), and brand partnerships. We bridge the gap between rapid innovation and complex regulation to keep your intellectual assets secure."
  },
  {
    id: 3,
    title: "Intellectual Property",
    slug: "intellectual-property",
    description: "Protecting creative and commercial assets is at our core. We handle trademark registration, patent filing, copyright disputes, and licensing strategies. We ensure your brand's value is legally recognized and defended against infringement."
  },
  // {
  //   id: 4,
  //   title: "Dispute Resolution",
  //   slug: "dispute-resolution",
  //   description: "When conflicts arise, we provide robust representation in commercial litigation, arbitration, and mediation. Our focus is not just on winning cases, but on securing commercially favourable outcomes that minimize business disruption."
  // },
  {
    id: 4,
    title: "Employment & Labour Law",
    slug: "employment-labour-law",
    description: "We guide employers through drafting contracts, HR policies, and compliance with Nigerian labour laws. We also handle workplace investigations and dispute avoidance strategies to maintain a healthy and legal workforce environment."
  },
  {
    id: 5,
    title: "Private Wealth (Family Law, Wills, Tax & Estate Planning)",
    slug: "private-wealth",
    description: "We provide discreet, high-level support for high-net-worth individuals and families. Our services include estate planning, wills, trusts, and family law matters, ensuring your legacy is preserved according to your precise wishes."
  }
];

export const PracticeAreas = () => {
  // State to track which item is open. Defaulting to the first one (id: 1)
  const [openItem, setOpenItem] = useState(1);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section id="practice-areas" className="py-12 md:py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8">

        <div className="grid lg:grid-cols-12 gap-16">
          {/* --- Left Column: Sticky Header --- */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-0.5 w-12 bg-amber-600"></div>
                <span className="text-amber-600 font-bold tracking-widest text-sm uppercase">
                  Our Expertise
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
                Comprehensive Legal Solutions.
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We provide commercially sound legal advisory across various industries. We don&apos;t just interpret the law; we use it to pave the way for your business goals.
              </p>

              {/* <Button className="hidden lg:flex h-14 px-8 bg-slate-900 text-white hover:bg-amber-600 rounded-none uppercase tracking-widest font-semibold items-center gap-2 transition-all">
                Download Brochure <ArrowRight size={16} />
              </Button> */}
            </div>
          </div>

          {/* --- Right Column: Expandable List --- */}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {PRACTICE_DATA.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-slate-200 last:border-0"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-8 flex items-center justify-between group text-left transition-colors"
                  >
                    <span className={`text-2xl md:text-3xl font-serif font-bold transition-colors duration-300 ${openItem === item.id ? 'text-amber-600' : 'text-slate-900 group-hover:text-slate-600'
                      }`}>
                      {item.title}
                    </span>

                    <div className={`p-2 rounded-full border transition-all duration-300 ${openItem === item.id
                      ? 'border-amber-600 bg-amber-600 text-white rotate-180'
                      : 'border-slate-300 text-slate-400 group-hover:border-slate-900 group-hover:text-slate-900'
                      }`}>
                      {openItem === item.id ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openItem === item.id ? 'max-h-[500px] opacity-100 mb-8' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-slate-600 text-lg leading-relaxed max-w-3xl pl-1">
                      {item.description}
                    </p>
                    <div className="mt-6 pl-1">
                      {/* Updated to use Link and item.slug */}
                      <Link
                        href={`/practice-areas/${item.slug}`}
                        className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-amber-600 uppercase tracking-widest border-b border-slate-900 hover:border-amber-600 pb-1 transition-colors"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile-only CTA */}
            {/* <div className="mt-12 lg:hidden">
              <Button className="w-full h-14 bg-slate-900 text-white hover:bg-amber-600 rounded-none uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                Download Brochure <ArrowRight size={16} />
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};