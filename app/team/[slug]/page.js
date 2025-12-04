'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Mail, Phone, Linkedin, Award, BookOpen, Globe, Briefcase } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { getTeamMemberBySlug } from '@/lib/data/team';

export default function TeamMemberDetailPage() {
  const params = useParams();
  const member = getTeamMemberBySlug(params.slug); 

  if (!member) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Team Member Not Found</h1>
          <Link href="/team">
            <Button>Back to Team</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">     
      {/* Hero Section */}
      <section className="relative pt-10 pb-16 bg-linear-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 md:px-8">
          <Link href="/team" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={20} />
            Back to Team
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 overflow-hidden">
                <div className="aspect-square bg-slate-100">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3">{member.role}</Badge>
                  <h1 className="text-2xl font-bold mb-2">{member.name}</h1>
                  <p className="text-primary font-medium mb-6">{member.credentials}</p>
                  
                  <div className="space-y-3 mb-6">
                    <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Mail size={18} />
                      <span className="text-sm">{member.email}</span>
                    </a>
                    {member.phone && (
                      <a href={`tel:${member.phone}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                        <Phone size={18} />
                        <span className="text-sm">{member.phone}</span>
                      </a>
                    )}
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin size={18} />
                      <span className="text-sm">LinkedIn Profile</span>
                    </a>
                  </div>

                  <Button className="w-full" onClick={() => scrollToSection('contact')}>
                    Schedule Consultation
                  </Button>
                </div>
              </Card>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Biography */}
              <div>
                <h2 className="text-3xl font-bold mb-6">About {member.name.split(' ')[0]}</h2>
                <div className="prose prose-lg max-w-none">
                  {member.fullBio.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Practice Areas */}
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Practice Areas</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {member.practiceAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Education */}
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                <div className="space-y-4">
                  {member.education.map((edu, idx) => (
                    <div key={idx} className="pb-4 border-b last:border-0">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Admissions */}
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Award size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Bar Admissions</h3>
                </div>
                <div className="space-y-2">
                  {member.admissions.map((admission, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>{admission}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Languages */}
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Globe size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {member.languages.map((language, idx) => (
                    <Badge key={idx} variant="secondary" className="text-base px-4 py-2">
                      {language}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Publications */}
              {member.publications && member.publications.length > 0 && (
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Publications & Articles</h3>
                  <div className="space-y-4">
                    {member.publications.map((pub, idx) => (
                      <div key={idx} className="pb-4 border-b last:border-0">
                        <h4 className="font-semibold text-lg mb-1">{pub.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {pub.publication} • {pub.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Notable Achievements */}
              {member.notable && member.notable.length > 0 && (
                <Card className="p-8 bg-primary/5 border-primary/20">
                  <h3 className="text-2xl font-bold mb-6">Notable Achievements</h3>
                  <ul className="space-y-3">
                    {member.notable.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Award size={14} className="text-primary" />
                        </div>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work with {member.name.split(' ')[0]}?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your legal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Book Consultation
            </Button>
            <a href={`mailto:${member.email}`}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                Send Email
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}