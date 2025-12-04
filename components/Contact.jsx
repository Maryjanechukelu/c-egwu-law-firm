import React from 'react';
import { Mail, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Ready to discuss your legal needs? We are here to provide the clarity and confidence you need.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg"><Mail /></div>
                <div>
                  <h4 className="font-semibold text-lg">Email Us</h4>
                  <p className="text-slate-400">info@cegwulawfirm.com</p>
                  <p className="text-slate-400">contact@cegwulawfirm.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary p-3 rounded-lg"><MapPin /></div>
                <div>
                  <h4 className="font-semibold text-lg">Visit Us</h4>
                  <p className="text-slate-400">Lagos Free Trade Zone</p>
                  <p className="text-slate-400">Nigeria</p>
                </div>
              </div>

              <div className="pt-8">
                <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" className="bg-slate-800 p-3 rounded-full hover:bg-primary transition-colors"><Linkedin size={20} /></a>
                  <a href="https://instagram.com" className="bg-slate-800 p-3 rounded-full hover:bg-primary transition-colors"><Instagram size={20} /></a>
                  <a href="https://twitter.com" className="bg-slate-800 p-3 rounded-full hover:bg-primary transition-colors"><Twitter size={20} /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-slate-900 p-8 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" type="email" placeholder="jane@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Practice Area</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option>Corporate Law</option>
                  <option>Technology & Media</option>
                  <option>Intellectual Property</option>
                  <option>Employment</option>
                  <option>Private Wealth</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" placeholder="How can we help you?" />
              </div>
              <Button className="w-full text-lg h-12">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};