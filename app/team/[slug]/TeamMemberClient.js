/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function TeamMemberClient({ member }) {
    if (!member) return null;

    // Function to generate and download the V-Card
    const handleDownloadVCard = () => {
        // 1. Construct the V-Card data string
        const vCardData = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            `FN:${member.name}`,
            `ORG:C. Egwu Law Firm`,
            `TITLE:${member.role}`,
            `EMAIL;type=INTERNET;type=WORK:${member.email}`,
            member.phone ? `TEL;type=WORK;type=VOICE:${member.phone}` : '',
            member.linkedin ? `URL:${member.linkedin}` : '',
            'END:VCARD'
        ].filter(Boolean).join('\n');

        // 2. Create a Blob from the data
        const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });

        // 3. Create a temporary link to trigger the download
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${member.name.replace(/\s+/g, '_')}.vcf`);
        document.body.appendChild(link);
        link.click();

        // 4. Cleanup
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
                <Link href="/team" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-600 mb-12 transition-colors text-sm uppercase tracking-widest font-semibold">
                    <ArrowLeft size={16} /> Back to Team
                </Link>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* LEFT COLUMN: Image & Contact Info */}
                    <div className="lg:col-span-5">
                        <div className="relative aspect-3/4 bg-slate-100 mb-8">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover hover:grayscale transition-all duration-700"
                            />
                            <div className="absolute top-4 left-4 w-full h-full border border-slate-900/10 -z-10"></div>
                        </div>

                        <div className="bg-slate-50 p-8 border border-slate-100">
                            <h3 className="font-serif text-xl font-bold mb-6 text-slate-900">Contact Details</h3>
                            <div className="space-y-4">
                                <a href={`mailto:${member.email}`} className="flex items-center gap-4 text-slate-600 hover:text-amber-600 transition-colors group">
                                    <div className="p-2 bg-white border border-slate-200 group-hover:border-amber-600 transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <span className="text-sm font-medium">{member.email}</span>
                                </a>

                                {member.phone && (
                                    <a href={`tel:${member.phone}`} className="flex items-center gap-4 text-slate-600 hover:text-amber-600 transition-colors group">
                                        <div className="p-2 bg-white border border-slate-200 group-hover:border-amber-600 transition-colors">
                                            <Phone size={18} />
                                        </div>
                                        <span className="text-sm font-medium">{member.phone}</span>
                                    </a>
                                )}

                                {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" className="flex items-center gap-4 text-slate-600 hover:text-amber-600 transition-colors group">
                                        <div className="p-2 bg-white border border-slate-200 group-hover:border-amber-600 transition-colors">
                                            <Linkedin size={18} />
                                        </div>
                                        <span className="text-sm font-medium">LinkedIn Profile</span>
                                    </a>
                                )}
                            </div>

                            <Button
                                onClick={handleDownloadVCard}
                                className="w-full mt-8 bg-[#3c144c] text-white hover:bg-amber-600 rounded-none h-12 uppercase tracking-widest text-xs font-bold gap-2"
                            >
                                <Download size={16} /> Download V-Card
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Bio & Credentials */}
                    <div className="lg:col-span-7 pt-4">
                        <Badge variant="outline" className="mb-4 rounded-none border-amber-600 text-amber-700 uppercase tracking-widest px-4 py-1">
                            {member.role}
                        </Badge>

                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-4 leading-tight">
                            {member.name}
                        </h1>
                        <p className="text-xl text-slate-500 mb-8 font-serif italic">
                            {member.credentials}
                        </p>

                        <div className="prose prose-lg prose-slate max-w-none mb-12">
                            {member.fullBio.split('\n\n').map((paragraph, idx) => (
                                <p key={idx} className="text-slate-600 leading-relaxed mb-6 font-light">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        {/* Notable Work Section */}
                        {member.work && member.work.length > 0 && (
                            <div className="mb-12 border-t border-slate-200 pt-12">
                                <h3 className="font-serif text-2xl font-bold mb-8 text-slate-900">Notable Work</h3>
                                <ul className="space-y-4">
                                    {member.work.map((item, idx) => (
                                        <li key={idx} className="flex gap-4 text-slate-600 leading-relaxed">
                                            <span className="text-amber-600 font-bold shrink-0 mt-1">{idx + 1}.</span>
                                            <span className="font-light">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-12 border-t border-slate-200 pt-12">
                            {/* Education */}
                            <div>
                                <h3 className="font-serif text-xl font-bold mb-6 text-slate-900">Academic Record</h3>
                                <ul className="space-y-6">
                                    {member.education.map((edu, idx) => (
                                        <li key={idx} className="border-l-2 border-slate-200 pl-4">
                                            <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                                            <p className="text-sm text-slate-500 mt-1">{edu.institution}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Admissions & Areas */}
                            <div>
                                <h3 className="font-serif text-xl font-bold mb-6 text-slate-900">Professional Associations</h3>
                                <ul className="mb-8 space-y-2">
                                    {member.admissions.map((admission, idx) => (
                                        <li key={idx} className="text-slate-600 text-sm flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                                            {admission}
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="font-serif text-xl font-bold mb-6 text-slate-900">Practice Areas</h3>
                                <div className="flex flex-wrap gap-2">
                                    {member.practiceAreas.map((area, idx) => (
                                        <span key={idx} className="text-xs uppercase tracking-wider border border-slate-200 px-3 py-1 text-slate-500">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}