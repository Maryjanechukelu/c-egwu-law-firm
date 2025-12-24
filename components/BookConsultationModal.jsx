'use client';
import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

export const BookConsultationModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1); // 1: Form, 2: Calendar
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        practiceArea: 'Corporate Law',
        preferredDate: '',
        preferredTime: '',
        notes: ''
    });

    // Your Calendly link - Replace with your actual link
    const calendlyUrl = "https://calendly.com/codechicenterprise/30min";

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleContinue = () => {
        // Validate basic info first
        if (!formData.name || !formData.email) {
            alert('Please fill in your name and email');
            return;
        }
        setStep(2);
    };

    const handleCalendlyClick = () => {
        // Open Calendly with pre-filled information
        const params = new URLSearchParams({
            name: formData.name,
            email: formData.email,
            a1: formData.phone, // Custom field
            a2: formData.practiceArea, // Custom field
        });

        window.open(`${calendlyUrl}?${params.toString()}`, '_blank');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold">Book a Consultation</h2>
                        <p className="text-sm text-muted-foreground">
                            {step === 1 ? 'Tell us about yourself' : 'Choose your preferred time'}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="hover:bg-slate-100 p-2 rounded-full transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {step === 1 ? (
                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleContinue(); }}>
                            <div className="space-y-2">
                                <label className="text-sm font-medium flex items-center gap-2">
                                    <User size={16} />
                                    Full Name *
                                </label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    placeholder="Jane Doe"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium flex items-center gap-2">
                                    <Mail size={16} />
                                    Email Address *
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    placeholder="jane@example.com"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium flex items-center gap-2">
                                    <Phone size={16} />
                                    Phone Number
                                </label>
                                <input
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                    placeholder="+234 800 000 0000"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Practice Area</label>
                                <select
                                    name="practiceArea"
                                    value={formData.practiceArea}
                                    onChange={handleChange}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                    <option>Corporate Law</option>
                                    <option>Technology & Media</option>
                                    <option>Intellectual Property</option>
                                    <option>Employment Law</option>
                                    <option>Private Wealth</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium flex items-center gap-2">
                                    <MessageSquare size={16} />
                                    Additional Notes (Optional)
                                </label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                                    placeholder="Tell us briefly about your legal needs..."
                                />
                            </div>

                            <div className="flex gap-3 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={onClose}
                                    className="flex-1"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="flex-1"
                                >
                                    Continue to Calendar
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <div className="space-y-6">
                            <div className="bg-slate-50 rounded-lg p-6 space-y-4">
                                <h3 className="font-semibold text-lg">Your Information</h3>
                                <div className="space-y-2 text-sm">
                                    <p><span className="font-medium">Name:</span> {formData.name}</p>
                                    <p><span className="font-medium">Email:</span> {formData.email}</p>
                                    {formData.phone && <p><span className="font-medium">Phone:</span> {formData.phone}</p>}
                                    <p><span className="font-medium">Practice Area:</span> {formData.practiceArea}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <p className="text-sm text-muted-foreground">
                                    Choose your preferred option to schedule a consultation:
                                </p>

                                {/* Calendly Option */}
                                <button
                                    onClick={handleCalendlyClick}
                                    className="w-full p-6 border-2 border-slate-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                                            <Calendar className="text-primary" size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-lg mb-1">Book via Calendly</h4>
                                            <p className="text-sm text-muted-foreground">
                                                View our available time slots and book instantly
                                            </p>
                                        </div>
                                    </div>
                                </button>

                                {/* Email Option */}
                                <button
                                    onClick={() => {
                                        const subject = `Consultation Request - ${formData.practiceArea}`;
                                        const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0APractice Area: ${formData.practiceArea}%0D%0A%0D%0ANotes: ${formData.notes}`;
                                        window.location.href = `mailto:info@cegwulawfirm.com?subject=${subject}&body=${body}`;
                                        onClose();
                                    }}
                                    className="w-full p-6 border-2 border-slate-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                                            <Mail className="text-primary" size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-lg mb-1">Request via Email</h4>
                                            <p className="text-sm text-muted-foreground">
                                                Send us your availability and we'll get back to you
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setStep(1)}
                                    className="flex-1"
                                >
                                    Back
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={onClose}
                                    className="flex-1"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};