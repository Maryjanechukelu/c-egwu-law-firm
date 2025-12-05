'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Briefcase, Cpu, Scale, Users, ShieldCheck, Gavel, ArrowRight, CheckCircle, Linkedin, Instagram, Twitter} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { practiceAreas } from '@/lib/data/practiceAreas';

const iconMap = {
    'Briefcase': Briefcase,
    'Cpu': Cpu,
    'Scale': Scale,
    'Users': Users,
    'ShieldCheck': ShieldCheck,
    'Gavel': Gavel
};

export default function PracticeAreasPage() {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative pt-24 pb-20 bg-linear-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary blur-3xl" />
                    <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-blue-400 blur-3xl" />
                </div>

                <div className="container relative z-10 mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="mb-6 px-6 py-2 text-base">Our Expertise</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Comprehensive Legal Solutions
                            <span className="block text-primary mt-2">Across Multiple Practice Areas</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
                            We provide commercially sound legal advisory across various industries, combining deep expertise with practical business insight to deliver results that matter.
                        </p>
                        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                             <Link href="/practice-areas" target="_blank">
                            <Button size="lg">
                                Explore Our Services
                                <ArrowRight className="ml-2" size={20} />
                            </Button>
                            </Link>
                            <Link href="#contact" target="_blank">
                            <Button size="lg" variant="outline" >
                                Schedule Consultation
                            </Button>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white border-b">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">6</div>
                            <p className="text-muted-foreground">Practice Areas</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
                            <p className="text-muted-foreground">Cases Handled</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                            <p className="text-muted-foreground">Happy Clients</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
                            <p className="text-muted-foreground">Success Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practice Areas Grid */}
            <section id="practice-areas" className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Practice Areas</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Select a practice area to learn more about how we can help you achieve your legal and business objectives.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {practiceAreas.map((area, index) => {
                            const IconComponent = iconMap[area.icon];
                            return (
                                <Link
                                    key={area.id}
                                    href={`/practice-areas/${area.slug}`}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                >
                                    <Card className={`h-full p-8 transition-all duration-300 cursor-pointer border-2 ${hoveredCard === index
                                            ? 'shadow-2xl -translate-y-2 border-primary bg-white'
                                            : 'shadow-md hover:shadow-xl hover:-translate-y-1 border-transparent bg-white'
                                        }`}>
                                        {/* Icon */}
                                        <div className={`mb-6 inline-block p-4 rounded-xl transition-colors duration-300 ${hoveredCard === index
                                                ? 'bg-primary text-white'
                                                : 'bg-primary/10 text-primary'
                                            }`}>
                                            {IconComponent && <IconComponent size={32} />}
                                        </div>

                                        {/* Title */}
                                        <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${hoveredCard === index ? 'text-primary' : 'text-slate-900'
                                            }`}>
                                            {area.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                                            {area.shortDescription}
                                        </p>

                                        {/* Key Services Preview */}
                                        <div className="mb-6 space-y-2">
                                            {area.services.slice(0, 3).map((service, idx) => (
                                                <div key={idx} className="flex items-start gap-2 text-sm">
                                                    <CheckCircle className={`shrink-0 mt-0.5 transition-colors duration-300 ${hoveredCard === index ? 'text-primary' : 'text-primary/60'
                                                        }`} size={16} />
                                                    <span className="text-muted-foreground">{service}</span>
                                                </div>
                                            ))}
                                            {area.services.length > 3 && (
                                                <p className="text-sm text-muted-foreground pl-6">
                                                    +{area.services.length - 3} more services
                                                </p>
                                            )}
                                        </div>

                                        {/* CTA */}
                                        <div className={`flex items-center font-semibold transition-all duration-300 ${hoveredCard === index
                                                ? 'text-primary gap-3'
                                                : 'text-primary gap-1'
                                            }`}>
                                            Learn More
                                            <ChevronRight className="transition-transform duration-300" size={20} />
                                        </div>
                                    </Card>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose C. Egwu Law Firm?</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                                We bring a unique combination of legal expertise and commercial awareness to every engagement.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Left Column */}
                            <div className="space-y-8">
                                <Card className="p-6 border-l-4 border-l-primary">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Scale className="text-primary" size={20} />
                                        </div>
                                        Commercial Awareness
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We understand that legal advice must align with your business objectives. Our solutions are practical, actionable, and designed to drive results.
                                    </p>
                                </Card>

                                <Card className="p-6 border-l-4 border-l-primary">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Users className="text-primary" size={20} />
                                        </div>
                                        Client-Centered Approach
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Your success is our priority. We take time to understand your unique needs and deliver personalized solutions that exceed expectations.
                                    </p>
                                </Card>

                                <Card className="p-6 border-l-4 border-l-primary">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Briefcase className="text-primary" size={20} />
                                        </div>
                                        Multi-Disciplinary Expertise
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Our team spans multiple practice areas, enabling us to provide comprehensive support for complex, multi-faceted legal matters.
                                    </p>
                                </Card>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-8">
                                <Card className="p-6 border-l-4 border-l-primary">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <ShieldCheck className="text-primary" size={20} />
                                        </div>
                                        Proven Track Record
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        With a 95% success rate across diverse matters, we consistently deliver favorable outcomes for our clients through strategic thinking and meticulous execution.
                                    </p>
                                </Card>

                                <Card className="p-6 border-l-4 border-l-primary">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Gavel className="text-primary" size={20} />
                                        </div>
                                        Rigorous Standards
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We maintain the highest professional and ethical standards, ensuring confidentiality, integrity, and excellence in every engagement.
                                    </p>
                                </Card>

                                <Card className="p-6 border-l-4 border-l-primary">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg">
                                            <Cpu className="text-primary" size={20} />
                                        </div>
                                        Modern & Efficient
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We leverage technology and modern practices to deliver efficient, cost-effective legal services without compromising quality.
                                    </p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Our expertise spans diverse sectors across the Nigerian economy and beyond.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {[
                                'Technology & Software',
                                'Financial Services',
                                'Telecommunications',
                                'E-commerce',
                                'Real Estate',
                                'Manufacturing',
                                'Fashion & Apparel',
                                'Media & Entertainment',
                                'Agriculture',
                                'Healthcare',
                                'Professional Services',
                                'Energy & Resources'
                            ].map((industry, idx) => (
                                <Card key={idx} className="p-4 text-center hover:shadow-lg transition-shadow cursor-default">
                                    <p className="font-medium text-sm md:text-base">{industry}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                A systematic, client-focused process that ensures exceptional results.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    1
                                </div>
                                <h3 className="text-xl font-bold mb-2">Consultation</h3>
                                <p className="text-muted-foreground text-sm">
                                    Initial discussion to understand your needs and objectives
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    2
                                </div>
                                <h3 className="text-xl font-bold mb-2">Analysis</h3>
                                <p className="text-muted-foreground text-sm">
                                    Thorough assessment of legal and commercial considerations
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    3
                                </div>
                                <h3 className="text-xl font-bold mb-2">Strategy</h3>
                                <p className="text-muted-foreground text-sm">
                                    Development of tailored solutions aligned with your goals
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                    4
                                </div>
                                <h3 className="text-xl font-bold mb-2">Execution</h3>
                                <p className="text-muted-foreground text-sm">
                                    Implementation and ongoing support to ensure success
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Discuss Your Legal Needs?
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Contact us today to schedule a confidential consultation with our experienced legal team. We're here to help you navigate complex legal challenges with confidence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#contact" target="_blank">
                        <Button size="lg" variant="secondary">
                            Book Consultation
                            <ArrowRight className="ml-2" size={20} />
                        </Button>
                        </Link>
                        <Link href="tel:+1234567890" target="_blank">
                        <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-slate-900">
                            Call Us Now
                        </Button>
                        </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-16 pt-12 border-t border-slate-700 max-w-3xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div>
                                <h4 className="font-semibold mb-2">Email Us</h4>
                                <p className="text-slate-300">info@cegwulawfirm.com</p>
                                <p className="text-slate-300">contact@cegwulawfirm.com</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Visit Us</h4>
                                <p className="text-slate-300">Lagos Free Trade Zone</p>
                                <p className="text-slate-300">Nigeria</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Follow Us</h4>
                                <div className="flex items-center gap-4 mt-2">
                                    <Link href="https://www.linkedin.com/company/c-egwu-law-firm/" target="_blank" className="bg-gray-200 p-3 rounded-full text-primary hover:text-primary"><Linkedin /></Link>
                                    <Link href="https://www.instagram.com/cegwu_law?utm_source=qr&igsh=M21nMjY5c2xoMzBq" target="_blank" className="bg-gray-200 p-3 rounded-full text-primary hover:text-primary"><Instagram /></Link>
                                    <Link href="https://x.com/firm_c30532?t=gyUPdp-Q56CLxLdoxO2Q8Q&s=08"  target="_blank" className="bg-gray-200 p-3 rounded-full text-primary hover:text-primary"><Twitter /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}