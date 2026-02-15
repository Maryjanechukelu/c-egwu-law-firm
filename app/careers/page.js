'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, Mail, ArrowRight } from 'lucide-react';
import { careersData, getDepartments, hasOpenPositions } from '@/lib/data/careers';
import { Button } from '@/components/ui/button';

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  
  const departments = ['all', ...getDepartments()];
  const hasJobs = hasOpenPositions();

  // Filter Logic
  const filteredJobs = careersData.filter((job) => {
    return selectedDepartment === 'all' || job.department === selectedDepartment;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* --- Header Section --- */}
      <section className="bg-slate-50 pt-32 pb-12 border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-8">
          <span className="text-amber-600 font-bold tracking-widest text-sm uppercase mb-4 block">
            Join Our Team
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-6">
            Career Opportunities
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            At C. Egwu Law Firm, we believe in nurturing legal talent and building careers. 
            We are committed to creating an environment where excellence, innovation, and 
            professional growth thrive.
          </p>
        </div>
      </section>

      {/* --- Main Content --- */}
      <section className="container mx-auto px-4 md:px-8 py-16">
        {hasJobs ? (
          <>
            {/* Department Filter */}
            {departments.length > 1 && (
              <div className="flex flex-wrap gap-4 mb-12 pb-8 border-b border-slate-200">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`
                      px-6 py-3 text-sm font-bold uppercase tracking-widest transition-all
                      ${selectedDepartment === dept
                        ? 'bg-amber-600 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}
                    `}
                  >
                    {dept === 'all' ? 'All Positions' : dept}
                  </button>
                ))}
              </div>
            )}

            {/* Job Listings */}
            <div className="grid gap-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="border border-slate-200 p-8 hover:border-amber-600 transition-all group"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                          {job.title}
                        </h2>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                          <span className="flex items-center gap-2">
                            <Briefcase size={16} />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin size={16} />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-2">
                            <Clock size={16} />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                        {job.experience}
                      </span>
                    </div>

                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a href={`mailto:${job.applicationEmail}?subject=Application for ${job.title}`}>
                        <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                          <Mail size={16} className="mr-2" />
                          Apply Now
                        </Button>
                      </a>
                      <Link href={`/careers/${job.id}`}>
                        <Button variant="outline" className="border-slate-300 text-slate-700 hover:border-amber-600 hover:text-amber-600">
                          View Details
                          <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20">
                  <p className="text-xl text-slate-400 font-serif italic">
                    No positions available in this department.
                  </p>
                </div>
              )}
            </div>
          </>
        ) : (
          /* --- No Open Positions State --- */
          <div className="text-center py-20">
            <div className="max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Briefcase size={40} className="text-slate-400" />
              </div>
              
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
                No Open Positions at the Moment
              </h2>
              
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We currently do not have any open positions. However, we are always interested 
                in connecting with talented legal professionals. Please check back regularly for 
                updates, or send us your CV for future opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:egwuchidinma6@gmail.com?subject=General Application - Future Opportunities">
                  <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                    <Mail size={18} className="mr-2" />
                    Send Your CV
                  </Button>
                </a>
                <Link href="/articles">
                  <Button variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:border-amber-600 hover:text-amber-600">
                    Read Our Articles
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* --- Why Join Us Section --- */}
      <section className="bg-slate-950 text-white py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
              Why Join C. Egwu Law Firm?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Professional Growth</h3>
                <p className="text-slate-400">
                  Continuous learning opportunities and mentorship from experienced legal professionals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Impactful Work</h3>
                <p className="text-slate-400">
                  Work on challenging cases that make a difference for businesses and individuals.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Collaborative Culture</h3>
                <p className="text-slate-400">
                  Be part of a supportive team that values innovation, integrity, and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section className="container mx-auto px-4 md:px-8 py-20 text-center">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
          Have Questions About Careers?
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          We'd love to hear from you. Reach out to discuss potential opportunities 
          or learn more about what it's like to work at C. Egwu Law Firm.
        </p>
        <Link href="/contact">
          <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:border-amber-600 hover:text-amber-600">
            Contact Us
            <ArrowRight size={18} className="ml-2" />
          </Button>
        </Link>
      </section>
    </div>
  );
}
