'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Linkedin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { teamMembers } from '@/lib/data/team';

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-10 pb-5 bg-linear-to-br from-primary/5 via-background to-primary/5">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-3xl">
                        <Badge className="mb-4">Our Team</Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Meet the Legal Minds Behind Our Success
                        </h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Our team combines deep legal expertise with real-world business experience to deliver exceptional results for our clients.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Members Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {teamMembers.map((member) => (
                            <Card key={member.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-none bg-slate-50">
                                <div className="md:flex h-full">
                                    {/* Image Section */}
                                    <div className="md:w-2/5 h-80 md:h-auto relative bg-slate-200">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex gap-2">
                                                <a
                                                    href={`mailto:${member.email}`}
                                                    className="p-2 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-colors"
                                                >
                                                    <Mail size={18} className="text-primary" />
                                                </a>
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-colors"
                                                >
                                                    <Linkedin size={18} className="text-primary" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="md:w-3/5 p-8 flex flex-col">
                                        <Badge className="w-fit mb-3">{member.role}</Badge>
                                        <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                                        <p className="text-primary font-medium mb-4">{member.credentials}</p>

                                        <p className="text-muted-foreground mb-6 leading-relaxed grow">
                                            {member.shortBio}
                                        </p>

                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-sm font-semibold mb-2">Practice Areas:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {member.practiceAreas.slice(0, 3).map((area, idx) => (
                                                        <span key={idx} className="text-xs bg-white px-2 py-1 rounded border">
                                                            {area}
                                                        </span>
                                                    ))}
                                                    {member.practiceAreas.length > 3 && (
                                                        <span className="text-xs bg-white px-2 py-1 rounded border text-muted-foreground">
                                                            +{member.practiceAreas.length - 3} more
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <Link href={`/team/${member.slug}`}>
                                                <Button variant="outline" className="w-full group">
                                                    View Full Profile
                                                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            The principles that guide our practice and define our commitment to clients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <Card className="p-6 text-center">
                            <div className="text-4xl mb-4">⚖️</div>
                            <h3 className="text-xl font-bold mb-2">Integrity</h3>
                            <p className="text-muted-foreground text-sm">
                                Unwavering ethical standards in every engagement
                            </p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-xl font-bold mb-2">Excellence</h3>
                            <p className="text-muted-foreground text-sm">
                                Commitment to delivering superior legal solutions
                            </p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-bold mb-2">Partnership</h3>
                            <p className="text-muted-foreground text-sm">
                                Collaborative approach with clients as true partners
                            </p>
                        </Card>
                        <Card className="p-6 text-center">
                            <div className="text-4xl mb-4">💡</div>
                            <h3 className="text-xl font-bold mb-2">Innovation</h3>
                            <p className="text-muted-foreground text-sm">
                                Creative solutions for complex legal challenges
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                        Contact our team today to discuss how we can help achieve your legal objectives.
                    </p>
                    <Button size="lg" variant="secondary">
                        Schedule a Meeting
                        <ArrowRight className="ml-2" size={20} />
                    </Button>
                </div>
            </section>
        </div>
    );
}