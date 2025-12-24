'use client';
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

    const quickQuestions = [
        "I need legal consultation",
        "What are your practice areas?",
        "How do I schedule a consultation?",
        "What are your fees?",
        "I have a corporate law question",
        "I need help with a contract",
    ];

    const handleQuestionClick = (question) => {
        const message = encodeURIComponent(question);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
        setIsOpen(false);
    };

    const handleCustomMessage = () => {
        const message = encodeURIComponent(selectedQuestion || "Hello, I have a question about your legal services.");
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
        setIsOpen(false);
    };

    return (
        <>
            {/* Quick Questions Popup */}
            {isOpen && (
                <div className="fixed bottom-24 right-4 md:right-8 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 animate-in slide-in-from-bottom-4">
                    <div className="bg-green-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img src="/whatsapp-50.svg" alt="WhatsApp Icon" className="w-10 h-10 text-white" />
                            <div>
                                <h3 className="font-semibold">Chat with us</h3>
                                <p className="text-xs text-green-100">Typically replies instantly</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-green-700 p-1 rounded transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    <div className="p-4">
                        <p className="text-sm text-slate-600 mb-3">Quick questions:</p>
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                            {quickQuestions.map((question, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleQuestionClick(question)}
                                    className="w-full text-left px-4 py-3 text-sm bg-slate-50 hover:bg-green-50 rounded-lg transition-colors border border-slate-200 hover:border-green-300"
                                >
                                    {question}
                                </button>
                            ))}
                        </div>

                        <div className="mt-4 pt-4 border-t">
                            <textarea
                                value={selectedQuestion}
                                onChange={(e) => setSelectedQuestion(e.target.value)}
                                placeholder="Or type your own message..."
                                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                                rows="3"
                            />
                            <button
                                onClick={handleCustomMessage}
                                className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
                            >
                                Start Chat
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* WhatsApp Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-4 md:right-8 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-2xl transition-all hover:scale-110 z-50 group"
                aria-label="Chat on WhatsApp"
            >
                {isOpen ? (
                    <X size={28} />
                ) : (
                    <>
                            <img src="/whatsapp-50.svg" alt="WhatsApp Icon" className="w-12 h-12 text-white" />
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                    </>
                )}
            </button>
        </>
    );
};
