'use client';
import React, { useState, useEffect } from 'react';
import { X, Send, Clock, CheckCheck } from 'lucide-react';

export const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [showNotification, setShowNotification] = useState(false);

    // Using Next.js environment variable
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

    const quickMessages = [
        "I need legal consultation",
        "What are your practice areas?",
        "How do I schedule a consultation?",
        "What are your fees?",
        "I have a corporate law question",
        "I need help with a contract",
    ];

    const businessHours = {
        start: 9, // 9 AM
        end: 18,  // 6 PM
    };

    useEffect(() => {
        // Show notification bubble after 10 seconds
        const timer = setTimeout(() => {
            const hasInteracted = localStorage.getItem('whatsappInteracted');
            if (!hasInteracted && !isOpen) {
                setShowNotification(true);
            }
        }, 10000);

        return () => clearTimeout(timer);
    }, [isOpen]);

    const isBusinessHours = () => {
        const now = new Date();
        const currentHour = now.getHours();
        return currentHour >= businessHours.start && currentHour < businessHours.end;
    };

    const getStatusMessage = () => {
        if (isBusinessHours()) {
            return {
                status: 'online',
                message: 'Typically replies instantly',
                color: 'bg-white'
            };
        } else {
            return {
                status: 'offline',
                message: 'Typically replies within a few hours',
                color: 'bg-yellow-400'
            };
        }
    };

    const handleSendMessage = (messageText = message) => {
        const finalMessage = messageText.trim() || "Hello, I have a question about your legal services.";

        localStorage.setItem('whatsappInteracted', 'true');

        const encodedMessage = encodeURIComponent(finalMessage);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
        setIsOpen(false);
        setMessage('');
        setShowNotification(false);
    };

    const handleClose = () => {
        setIsOpen(false);
        setShowNotification(false);
        localStorage.setItem('whatsappInteracted', 'true');
    };

    const status = getStatusMessage();

    return (
        <>
            {/* Floating WhatsApp Button & Notifications */}
            <div className="fixed bottom-6 right-4 md:right-8 z-50">
                {/* Notification Badge (The '1' on the icon) */}
                {showNotification && !isOpen && (
                    <div className="absolute -top-1 -left-1 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center animate-pulse z-10 border-2 border-white">
                        1
                    </div>
                )}

                {/* Notification Message Bubble */}
                {showNotification && !isOpen && (
                    <div className="absolute bottom-16 right-0 bg-white rounded-xl shadow-2xl p-3 w-64 border border-slate-100 animate-in fade-in slide-in-from-bottom-2">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shrink-0">
                                <img src="/whatsapp-50.svg" alt="WA" className="w-5 h-5 invert" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-slate-900">Need legal help?</p>
                                <p className="text-xs text-slate-600">Chat with us on WhatsApp!</p>
                            </div>
                            <button onClick={() => setShowNotification(false)} className="text-slate-400 hover:text-slate-600">
                                <X size={14} />
                            </button>
                        </div>
                        <div className="absolute bottom-0 right-6 transform translate-y-full w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
                    </div>
                )}

                {/* Main Action Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 group"
                >
                    {isOpen ? (
                        <X size={28} />
                    ) : (
                        <img src="/whatsapp-50.svg" alt="WhatsApp" className="w-10 h-10 transition-transform group-hover:rotate-12" />
                    )}
                </button>
            </div>

            {/* Main Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-4 md:right-8 w-[340px] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden animate-in slide-in-from-bottom-4">
                    {/* Header */}
                    <div className="bg-green-600 text-white p-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <img src="/whatsapp-50.svg" alt="Law Firm WA" className="w-7 h-7" />
                                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-green-600 ${status.color}`}></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">C. Egwu Law Firm</h3>
                                    <p className="text-xs text-green-100 opacity-90">{status.message}</p>
                                </div>
                            </div>
                            <button onClick={handleClose} className="p-1 hover:bg-white/10 rounded-lg transition-colors">
                                <X size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Message History Area */}
                    <div className="bg-[#e5ddd5] p-4 h-[350px] overflow-y-auto bg-opacity-40">
                        {/* Welcome Bubble */}
                        <div className="flex flex-col items-start mb-6">
                            <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm max-w-[85%] border border-slate-200">
                                <p className="text-sm text-slate-800 leading-relaxed">
                                    Hello! 👋 Welcome to C. Egwu Law Firm. How can we assist with your legal matters today?
                                </p>
                                <div className="flex items-center justify-end gap-1 mt-1">
                                    <span className="text-[10px] text-slate-400">Just now</span>
                                    <CheckCheck size={12} className="text-blue-500" />
                                </div>
                            </div>
                        </div>

                        {/* Quick Reply Selection */}
                        <div className="space-y-2">
                            <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-1">Suggested Questions</p>
                            <div className="grid grid-cols-1 gap-2">
                                {quickMessages.map((q, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSendMessage(q)}
                                        className="text-left bg-white/80 hover:bg-white p-3 rounded-xl border border-slate-200 text-sm text-slate-700 transition-all hover:border-green-500 hover:shadow-md active:scale-95"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-3 bg-white border-t border-slate-100">
                        <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-full border border-slate-200">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                                placeholder="Write a message..."
                                className="flex-1 bg-transparent px-3 py-1 text-sm outline-none"
                            />
                            <button
                                onClick={() => handleSendMessage()}
                                disabled={!message.trim()}
                                className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors disabled:opacity-50 disabled:bg-slate-300 shadow-lg"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                        <p className="text-[10px] text-center text-slate-400 mt-2">
                            Official Legal Consultation Channel
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};