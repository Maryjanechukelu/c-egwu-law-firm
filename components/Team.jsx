import React from 'react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground">Expert counsel dedicated to your success.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Chidinma Egwu */}
          <Card className="overflow-hidden border-none shadow-xl bg-slate-50">
            <div className="md:flex h-full">
              <div className="md:w-2/5 h-64 md:h-auto bg-slate-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Chidinma Egwu"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <Badge className="w-fit mb-2">Principal Counsel</Badge>
                <h3 className="text-2xl font-bold mb-1">Chidinma Egwu</h3>
                <p className="text-primary font-medium mb-4">LL.M (in view), B.L, LL.B</p>
                <p className="text-muted-foreground text-sm mb-6">
                  Advises businesses on corporate governance, M&A, IP, and tech law. Her practice spans technology, media, real estate, and professional services.
                </p>
                <div className="mt-auto">
                  <p className="text-sm font-semibold mb-2">Key Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-white px-2 py-1 rounded border">Corporate</span>
                    <span className="text-xs bg-white px-2 py-1 rounded border">Tech & Media</span>
                    <span className="text-xs bg-white px-2 py-1 rounded border">IP</span>
                    <span className="text-xs bg-white px-2 py-1 rounded border">Tax</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Kingsley Chukwujekwu Ekwesianya */}
          <Card className="overflow-hidden border-none shadow-xl bg-slate-50">
            <div className="md:flex h-full">
              <div className="md:w-2/5 h-64 md:h-auto bg-slate-200 relative">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Kingsley Chukwujekwu Ekwesianya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-center">
                <Badge className="w-fit mb-2 bg-slate-600">Counsel</Badge>
                <h3 className="text-2xl font-bold mb-1">Kingsley C. Ekwesianya</h3>
                <p className="text-primary font-medium mb-4">B.L, LL.B (Hons)</p>
                <p className="text-muted-foreground text-sm mb-6">
                  Versatile dispute resolution professional. Known for meticulous case preparation and clear advocacy in civil, commercial, and criminal litigation.
                </p>
                <div className="mt-auto">
                  <p className="text-sm font-semibold mb-2">Key Areas:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-white px-2 py-1 rounded border">Litigation</span>
                    <span className="text-xs bg-white px-2 py-1 rounded border">Labour</span>
                    <span className="text-xs bg-white px-2 py-1 rounded border">Real Estate</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};