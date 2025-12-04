'use client';
import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChevronRight, CheckCircle, ArrowLeft, Briefcase, Cpu, Scale, Users, ShieldCheck, Gavel } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { getPracticeAreaBySlug, getRelatedPracticeAreas } from '@/lib/data/practiceAreas';

const iconMap = {
  'Briefcase': Briefcase,
  'Cpu': Cpu,
  'Scale': Scale,
  'Users': Users,
  'ShieldCheck': ShieldCheck,
  'Gavel': Gavel
};

export default function PracticeAreaDetailPage() {
  const params = useParams();
  const practiceArea = getPracticeAreaBySlug(params.slug);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!practiceArea) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Practice Area Not Found</h1>
          <Link href="/practice-areas">
            <Button>Back to Practice Areas</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[practiceArea.icon];
  const relatedPractices = getRelatedPracticeAreas(practiceArea.slug, practiceArea.relatedPractices);

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 md:px-8">
          <Link href="/practice-areas" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={20} />
            Back to Practice Areas
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-4 bg-primary text-white rounded-xl">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <Badge className="text-base px-4 py-2">Practice Area</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {practiceArea.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {practiceArea.fullDescription}
              </p>
              
              <Button size="lg" onClick={() => scrollToSection('contact')}>
                Schedule Consultation
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={practiceArea.heroImage} 
                  alt={practiceArea.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl max-w-xs hidden lg:block">
                <p className="font-bold text-lg">Expert legal guidance when it matters most.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {practiceArea.services.map((service, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground mb-8">
              We provide specialized legal services across diverse sectors.
            </p>
            <div className="flex flex-wrap gap-3">
              {practiceArea.industries.map((industry, idx) => (
                <Badge key={idx} variant="secondary" className="text-base px-4 py-2">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {practiceArea.caseStudies && practiceArea.caseStudies.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12">Case Studies</h2>
              <div className="space-y-8">
                {practiceArea.caseStudies.map((study, idx) => (
                  <Card key={idx} className="p-8 border-l-4 border-l-primary">
                    <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge:</h4>
                        <p>{study.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Outcome:</h4>
                        <p>{study.outcome}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {practiceArea.faqs && practiceArea.faqs.length > 0 && (
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {practiceArea.faqs.map((faq, idx) => (
                  <Card key={idx} className="p-6">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Practice Areas */}
      {relatedPractices.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Practice Areas</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPractices.map((area) => {
                const RelatedIcon = iconMap[area.icon];
                return (
                  <Link key={area.id} href={`/practice-areas/${area.slug}`}>
                    <Card className="h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                      <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        {RelatedIcon && <RelatedIcon size={24} />}
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {area.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {area.shortDescription}
                      </p>
                      <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all text-sm">
                        Learn More
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" size={16} />
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Expert Legal Advice?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a confidential consultation about your {practiceArea.title.toLowerCase()} needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Call Us Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}