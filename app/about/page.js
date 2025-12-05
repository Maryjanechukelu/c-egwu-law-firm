'use client';
import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Scale,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Shield,
  Lightbulb,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { teamMembers } from '@/lib/data/team';

export default function AboutPage() {

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-linear-to-br from-primary/5 via-background to-primary/10 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary blur-3xl" />
          <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-blue-400 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-6 py-2 text-base">About Us</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Precision. Commercial Awareness.
              <span className="block text-primary mt-2">Unwavering Confidence.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              C. Egwu Law Firm is a full-service business law firm committed to delivering precise, business-minded legal solutions for local and international clients when stakes are high.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div className="relative">
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                  alt="Law Firm Office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-xl shadow-2xl max-w-xs hidden lg:block">
                <div className="text-5xl font-bold mb-2">5+</div>
                <p className="text-lg">Years of Excellence in Legal Practice</p>
              </div>
            </div>

            <div>
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building a Modern Law Firm for Modern Challenges
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between traditional legal practice and modern business needs, C. Egwu Law Firm has established itself as a trusted partner for businesses and individuals navigating Nigeria's complex legal landscape.
                </p>
                <p>
                  Our journey began with a simple but powerful belief: that legal advice should be more than just technically correct—it should be commercially aware, practically applicable, and genuinely valuable to our clients' success.
                </p>
                <p>
                  Today, we serve a diverse clientele across multiple industries, from innovative startups and growing SMEs to established corporations and high-net-worth individuals. Our practice spans technology, media, real estate, fashion, financial services, and more.
                </p>
                <p>
                  What sets us apart is our commitment to understanding not just the law, but the business context in which it operates. We don't just solve legal problems—we help clients protect their interests, seize opportunities, and plan for sustainable growth.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/team">
                  <Button size="lg">
                    Meet Our Team
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mission */}
              <Card className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional legal services that empower our clients to make confident decisions, protect their interests, and achieve their goals in an increasingly complex legal and business environment.
                </p>
              </Card>

              {/* Vision */}
              <Card className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the premier law firm in Nigeria recognized for commercial excellence, innovative solutions, and unwavering commitment to client success across all practice areas.
                </p>
              </Card>

              {/* Values */}
              <Card className="p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integrity, excellence, client-centricity, and innovation guide everything we do. We believe in building lasting relationships based on trust, transparency, and exceptional results.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Deep Dive */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Values That Guide Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our core values aren't just words on a page—they're the principles that shape every decision, every interaction, and every outcome.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-l-4 border-l-primary hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Scale className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Integrity</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We maintain the highest ethical standards in every engagement. Honesty, transparency, and confidentiality are non-negotiable pillars of our practice.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-primary hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Excellence</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We are committed to delivering superior legal services through meticulous attention to detail, rigorous analysis, and continuous professional development.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-primary hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Client-Centricity</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your success is our success. We listen carefully, respond promptly, and tailor our services to meet your unique needs and objectives.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-primary hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Lightbulb className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Innovation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We embrace modern tools and creative thinking to deliver efficient, cost-effective solutions that address complex legal challenges in innovative ways.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-primary hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Commercial Awareness</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We understand business. Our advice considers not just legal implications but commercial realities, helping you make informed decisions.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-l-4 border-l-primary hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Shield className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Trust & Partnership</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We build long-term relationships based on mutual trust and respect. We're not just your lawyers—we're your strategic partners.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Us Apart</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our unique approach combines legal expertise with business acumen to deliver exceptional value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  95%
                </div>
                <h3 className="text-xl font-bold mb-3">Success Rate</h3>
                <p className="text-muted-foreground">
                  Consistently favorable outcomes across diverse legal matters
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  50+
                </div>
                <h3 className="text-xl font-bold mb-3">Happy Clients</h3>
                <p className="text-muted-foreground">
                  Trusted by businesses and individuals across multiple industries
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  24h
                </div>
                <h3 className="text-xl font-bold mb-3">Response Time</h3>
                <p className="text-muted-foreground">
                  Rapid response to urgent client needs and inquiries
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-4">Our Approach</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  How We Deliver Exceptional Results
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our methodology is built on deep understanding, strategic thinking, and flawless execution. We don't just react to legal issues—we anticipate them and help you stay ahead.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-primary" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Deep Discovery</h4>
                      <p className="text-muted-foreground text-sm">
                        We invest time in understanding your business, industry, challenges, and objectives before proposing solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-primary" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Strategic Analysis</h4>
                      <p className="text-muted-foreground text-sm">
                        We analyze issues from multiple angles—legal, commercial, and practical—to identify optimal solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-primary" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Clear Communication</h4>
                      <p className="text-muted-foreground text-sm">
                        We explain complex legal concepts in plain language, ensuring you understand your options and can make informed decisions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-primary" size={24} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Proactive Partnership</h4>
                      <p className="text-muted-foreground text-sm">
                        We don't just react to problems—we help you anticipate and prevent them through strategic planning and risk management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/about-us.png"
                    alt="Team Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                  <p className="font-bold text-primary mb-2">Client-First Philosophy</p>
                  <p className="text-sm text-muted-foreground">
                    "We don't just solve legal problems—we help clients protect their interests and plan ahead."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Expert legal minds dedicated to your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {teamMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-2/5 h-64 md:h-auto relative bg-slate-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-8 flex flex-col justify-center">
                      <Badge className="w-fit mb-3">{member.role}</Badge>
                      <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                      <p className="text-primary font-medium mb-4">{member.credentials}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {member.shortBio}
                      </p>
                      <Link href={`/team/${member.slug}`}>
                        <Button variant="outline" className="w-full">
                          View Profile
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link href="/team">
                <Button size="lg">
                  Meet the Full Team
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Commitment to You
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              When you engage C. Egwu Law Firm, you're not just hiring lawyers—you're gaining strategic partners committed to your success. We promise to bring our best to every engagement: deep expertise, commercial awareness, ethical practice, and unwavering dedication to achieving your objectives.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <Globe className="mx-auto mb-4" size={40} />
                <h4 className="font-bold text-lg mb-2">Global Standards</h4>
                <p className="text-white/80 text-sm">
                  International best practices applied locally
                </p>
              </div>
              <div>
                <TrendingUp className="mx-auto mb-4" size={40} />
                <h4 className="font-bold text-lg mb-2">Growth-Oriented</h4>
                <p className="text-white/80 text-sm">
                  Solutions that scale with your business
                </p>
              </div>
              <div>
                <Shield className="mx-auto mb-4" size={40} />
                <h4 className="font-bold text-lg mb-2">Always Protected</h4>
                <p className="text-white/80 text-sm">
                  Your interests safeguarded at every turn
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
            Ready to Work Together?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your legal and business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule Consultation
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-slate-600 hover:bg-white hover:text-slate-900">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}