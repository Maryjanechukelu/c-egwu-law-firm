"use client";
import React, { useState } from "react";
import { Loader2, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    practiceArea: "Corporate Law",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Use Vercel API endpoint if configured, otherwise use local API
      const apiUrl = process.env.NEXT_PUBLIC_API_URL
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/contact`
        : "/api/contact";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          practiceArea: "Corporate Law",
          message: "",
        });
        setStatus("idle");
      }, 3000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 text-white border-t border-slate-900"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
          {/* Info Side */}
          <div>
            <span className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-4 block">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
              Let's Discuss Your Legal Needs.
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
              We provide clarity and confidence when the stakes are high. Reach
              out to schedule a consultation with our team.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-white font-serif text-xl mb-1">Office</h4>
                <p className="text-slate-400">
                  Lagos Free Trade Zone
                  <br />
                  Nigeria
                </p>
              </div>
              <div>
                <h4 className="text-white font-serif text-xl mb-1">Email</h4>
                <a
                  href="mailto:inquires@cegwulawfirm.com"
                  className="text-slate-400 hover:text-amber-500 transition-colors"
                >
                  inquires@cegwulawfirm.com
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-900 p-8 md:p-10 border border-slate-800">
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center min-h-[400px]">
                <CheckCircle className="w-16 h-16 text-emerald-500 mb-6" />
                <h3 className="text-2xl font-serif font-bold mb-2">
                  Message Received
                </h3>
                <p className="text-slate-400">We will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-slate-500">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:border-amber-500 focus:outline-none transition-colors rounded-none placeholder-slate-700"
                      placeholder="ENTER FIRST NAME"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-slate-500">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:border-amber-500 focus:outline-none transition-colors rounded-none placeholder-slate-700"
                      placeholder="ENTER LAST NAME"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-slate-500">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:border-amber-500 focus:outline-none transition-colors rounded-none placeholder-slate-700"
                    placeholder="ENTER EMAIL ADDRESS"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-slate-500">
                    Practice Area
                  </label>
                  <select
                    name="practiceArea"
                    value={formData.practiceArea}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:border-amber-500 focus:outline-none transition-colors rounded-none"
                  >
                    <option className="bg-slate-900">Corporate Law</option>
                    <option className="bg-slate-900">Technology & Media</option>
                    <option className="bg-slate-900">
                      Intellectual Property
                    </option>
                    <option className="bg-slate-900">Employment</option>
                    <option className="bg-slate-900">Other</option>
                  </select>
                </div>

                <div className="space-y-2 pt-4">
                  <label className="text-xs uppercase tracking-wider text-slate-500">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-slate-700 py-2 text-white focus:border-amber-500 focus:outline-none transition-colors rounded-none min-h-[100px] placeholder-slate-700"
                    placeholder="TELL US ABOUT YOUR CASE"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-slate-950 hover:bg-amber-500 hover:text-white transition-all h-14 text-base font-bold uppercase tracking-widest mt-8 rounded-none"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message <ArrowRight size={16} />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
