'use client';
import React, { useState } from 'react';
import { X, Calendar, User, Mail, Phone, MessageSquare, ArrowRight } from 'lucide-react';
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
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

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
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-all">
            <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in-up">
                
                {/* Header - Dark & Sharp */}
                <div className="sticky top-0 bg-slate-950 text-white px-8 py-6 flex items-center justify-between z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-1">
                            <div className="h-0.5 w-8 bg-amber-600"></div>
                            <span className="text-amber-500 font-bold tracking-widest text-xs uppercase">Consultation</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold">
                            {step === 1 ? 'Tell us about your case' : 'Schedule your time'}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white hover:rotate-90 transition-all duration-300"
                    >
                        <X size={28} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-8 md:p-10">
                    {step === 1 ? (
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleContinue(); }}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name *</label>
                                    <div className="relative">
                                        <User className="absolute left-0 top-3 text-slate-400" size={18} />
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full pl-8 pb-2 border-b border-slate-300 focus:border-amber-600 focus:outline-none transition-colors placeholder:text-slate-300 text-slate-900 rounded-none bg-transparent"
                                            placeholder="ENTER NAME"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address *</label>
                                    <div className="relative">
                                        <Mail className="absolute left-0 top-3 text-slate-400" size={18} />
                                        <input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full pl-8 pb-2 border-b border-slate-300 focus:border-amber-600 focus:outline-none transition-colors placeholder:text-slate-300 text-slate-900 rounded-none bg-transparent"
                                            placeholder="ENTER EMAIL"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-0 top-3 text-slate-400" size={18} />
                                        <input
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full pl-8 pb-2 border-b border-slate-300 focus:border-amber-600 focus:outline-none transition-colors placeholder:text-slate-300 text-slate-900 rounded-none bg-transparent"
                                            placeholder="+234..."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Practice Area</label>
                                    <select
                                        name="practiceArea"
                                        value={formData.practiceArea}
                                        onChange={handleChange}
                                        className="w-full pb-2 border-b border-slate-300 focus:border-amber-600 focus:outline-none transition-colors text-slate-900 rounded-none bg-transparent appearance-none"
                                    >
                                        <option>Corporate Law</option>
                                        <option>Technology & Media</option>
                                        <option>Intellectual Property</option>
                                        <option>Employment Law</option>
                                        <option>Private Wealth</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2 pt-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                                    Additional Notes
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-0 top-3 text-slate-400" size={18} />
                                    <textarea
                                        name="notes"
                                        value={formData.notes}
                                        onChange={handleChange}
                                        className="w-full pl-8 pb-2 border-b border-slate-300 focus:border-amber-600 focus:outline-none transition-colors placeholder:text-slate-300 text-slate-900 rounded-none bg-transparent min-h-[80px] resize-none"
                                        placeholder="Briefly describe your legal needs..."
                                    />
                                </div>
                            </div>

                            <div className="pt-6 flex flex-col sm:flex-row gap-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={onClose}
                                    className="flex-1 rounded-none border-slate-300 text-slate-500 hover:text-slate-900 hover:border-slate-900 uppercase tracking-widest font-bold h-14"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    className="flex-1 rounded-none bg-slate-900 text-white hover:bg-amber-600 uppercase tracking-widest font-bold h-14 flex items-center justify-center gap-2 group"
                                >
                                    Continue <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                                </Button>
                            </div>
                        </form>
                    ) : (
                        <div className="space-y-8">
                            <div className="bg-slate-50 border-l-4 border-amber-600 p-6">
                                <h3 className="font-serif font-bold text-xl text-slate-900 mb-4">Confirm Details</h3>
                                <div className="grid grid-cols-2 gap-y-4 text-sm">
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">Name</span>
                                        <span className="text-slate-900 font-medium">{formData.name}</span>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">Email</span>
                                        <span className="text-slate-900 font-medium">{formData.email}</span>
                                    </div>
                                    {formData.phone && (
                                        <div>
                                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">Phone</span>
                                            <span className="text-slate-900 font-medium">{formData.phone}</span>
                                        </div>
                                    )}
                                    <div>
                                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">Area</span>
                                        <span className="text-slate-900 font-medium">{formData.practiceArea}</span>
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleCalendlyClick}
                                className="w-full group relative overflow-hidden bg-slate-900 p-8 text-left transition-all hover:bg-amber-600"
                            >
                                <div className="relative z-10 flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className="bg-white/10 p-4 text-white group-hover:bg-white/20 transition-colors">
                                            <Calendar size={32} strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-xl font-bold text-white mb-1">Open Calendar</h4>
                                            <p className="text-slate-400 text-sm group-hover:text-white/90">View available slots and book instantly</p>
                                        </div>
                                    </div>
                                    <ArrowRight className="text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" size={24} />
                                </div>
                            </button>

                            <div className="flex gap-4 pt-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => setStep(1)}
                                    className="flex-1 rounded-none border-slate-300 text-slate-500 hover:text-slate-900 hover:border-slate-900 uppercase tracking-widest font-bold h-12"
                                >
                                    Back
                                </Button>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    onClick={onClose}
                                    className="flex-1 rounded-none text-slate-400 hover:text-red-600 hover:bg-red-50 uppercase tracking-widest font-bold h-12"
                                >
                                    Cancel Booking
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};