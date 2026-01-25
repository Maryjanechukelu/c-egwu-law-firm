'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Target, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { teamMembers } from '@/lib/data/team';

export default function AboutPage() {

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-950 text-white border-b border-slate-800">
        <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center gap-4 mb-8">
                <div className="h-0.5 w-12 bg-amber-600"></div>
                <span className="text-amber-500 font-bold tracking-[0.2em] text-xs uppercase">Who We Are</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 max-w-4xl leading-[1.1]">
              Precision. <br />
              Commercial Awareness. <br />
              <span className="text-slate-500 italic">Unwavering Confidence.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed border-l border-slate-800 pl-6">
              C. Egwu Law Firm is a full-service business law firm committed to delivering precise, business-minded legal solutions for local and international clients when stakes are high.
            </p>
        </div>
      </section>

      {/* Our Story - Split Screen */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
                {/* Sharp Image */}
                <div className="aspect-[4/3] bg-slate-100 relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                    alt="Law Firm Office"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                {/* Decorative Box */}
                <div className="absolute -bottom-6 -right-6 w-2/3 bg-slate-900 text-white p-8 z-20 border-l-4 border-amber-600 hidden lg:block">
                    <p className="font-serif text-2xl italic">"We don't just solve legal problems—we plan for sustainable growth."</p>
                </div>
            </div>

            <div className="pt-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-8">
                Building a Modern Firm for <br/><span className="text-amber-600">Complex Challenges.</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
                <p>
                  Founded with a vision to bridge the gap between traditional legal practice and modern business needs, C. Egwu Law Firm has established itself as a trusted partner for businesses navigating Nigeria's complex legal landscape.
                </p>
                <p>
                  Our journey began with a simple but powerful belief: that legal advice should be more than just technically correct—it should be practically applicable. Today, we serve a diverse clientele, from innovative startups to established multinationals.
                </p>
              </div>

              <div className="mt-10 pt-10 border-t border-slate-200 grid grid-cols-2 gap-8">
                  <div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-widest text-sm mb-2">Success Rate</h4>
                      <p className="text-4xl font-serif text-slate-400">95%</p>
                  </div>
                  <div>
                      <h4 className="font-bold text-slate-900 uppercase tracking-widest text-sm mb-2">Years Active</h4>
                      <p className="text-4xl font-serif text-slate-400">5+</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Grid Layout */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-4 block">Our Ethos</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">
                    The Principles That Guide Us
                </h2>
            </div>

            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border border-slate-200 bg-white">
                {/* Item 1 */}
                <div className="p-10 hover:bg-slate-50 transition-colors group">
                    <Target className="w-10 h-10 text-slate-300 group-hover:text-amber-600 mb-6 transition-colors" />
                    <h3 className="text-xl font-bold font-serif mb-4">Integrity & Ethics</h3>
                    <p className="text-slate-500 leading-relaxed">
                        We maintain the highest ethical standards. Honesty, transparency, and confidentiality are non-negotiable pillars of our practice.
                    </p>
                </div>
                {/* Item 2 */}
                <div className="p-10 hover:bg-slate-50 transition-colors group">
                    <Shield className="w-10 h-10 text-slate-300 group-hover:text-amber-600 mb-6 transition-colors" />
                    <h3 className="text-xl font-bold font-serif mb-4">Client Protection</h3>
                    <p className="text-slate-500 leading-relaxed">
                        Your success is our success. We listen carefully and tailor our services to meet your unique needs and protect your interests.
                    </p>
                </div>
                {/* Item 3 */}
                <div className="p-10 hover:bg-slate-50 transition-colors group">
                    <Users className="w-10 h-10 text-slate-300 group-hover:text-amber-600 mb-6 transition-colors" />
                    <h3 className="text-xl font-bold font-serif mb-4">Partnership</h3>
                    <p className="text-slate-500 leading-relaxed">
                         We build long-term relationships based on mutual trust. We are not just your lawyers—we are your strategic partners.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900">Firm Leadership</h2>
                <Link href="/team">
                    <Button variant="link" className="text-amber-700 p-0 font-bold uppercase tracking-widest">View All Attorneys <ArrowRight size={16} className="ml-2"/></Button>
                </Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {teamMembers.slice(0, 2).map((member) => (
                <div key={member.id} className="group border-b border-slate-200 pb-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-24 h-32 bg-slate-200 shrink-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-amber-700 transition-colors">{member.name}</h3>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">{member.role}</p>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {member.shortBio}
                      </p>
                      <Link href={`/team/${member.slug}`} className="text-sm font-bold underline decoration-slate-300 hover:decoration-amber-600 underline-offset-4 transition-all">
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Partner with Excellence.
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-light">
            Contact us today to discuss how we can help you achieve your legal and business objectives.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/#contact">
                <Button className="h-14 px-8 bg-white text-slate-900 hover:bg-amber-600 hover:text-white rounded-none uppercase tracking-widest font-bold">
                Get in Touch
                </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}