import React from 'react';
import { Briefcase, Cpu, Scale, Users, ShieldCheck, Gavel } from 'lucide-react';

const PracticeCard = ({ icon, title, description }) => (
  <div className="group relative overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-xl hover:-translate-y-1 border border-slate-100">
    <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

export const PracticeAreas = () => {
  return (
    <section id="practice" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Practice Areas</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide commercially sound legal advisory across various industries including Telecoms, Tech, Fashion, Banking, Agriculture, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <PracticeCard 
            icon={<Briefcase />}
            title="Corporate Law"
            description="Supporting businesses through every stage of their lifecycle, from establishment to expansion. We advise on private equity, M&A, restructuring, and corporate governance."
          />
          <PracticeCard 
            icon={<Cpu />}
            title="Technology & Media Law"
            description="Advising tech companies, digital platforms, and creatives on content rights, licensing, data concerns, and brand partnerships in the digital economy."
          />
          <PracticeCard 
            icon={<Scale />}
            title="Intellectual Property"
            description="Protecting creative and commercial assets. We handle trademarks, patents, copyrights, licensing, and brand protection strategy."
          />
          <PracticeCard 
            icon={<Users />}
            title="Employment & Labour Law"
            description="Advising on contracts, HR policies, compliance, workplace investigations, and dispute avoidance aligned with Nigerian standards."
          />
          <PracticeCard 
            icon={<ShieldCheck />}
            title="Private Wealth"
            description="Discreet support for high-net-worth clients involving family law, wills, trusts, estate planning, and personal tax obligations."
          />
          <PracticeCard 
            icon={<Gavel />}
            title="Dispute Resolution"
            description="Handling complex commercial litigation, arbitration, and mediation with a focus on securing commercially favourable outcomes."
          />
        </div>
      </div>
    </section>
  );
};