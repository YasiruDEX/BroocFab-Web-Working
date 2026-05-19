"use client";

import { useState } from "react";
import { HelpCircle, Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function QnaSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What file formats do you accept for 3D printing?",
      answer: "We accept all standard engineering CAD and mesh formats: .STL, .STEP, .OBJ, and .3MF. For standard mechanical prints, STL or 3MF is highly recommended. For precise functional assemblies requiring exact dimensional integrity, STEP files are preferred."
    },
    {
      question: "How long does fabrication and delivery take?",
      answer: "Typical turnaround time is 24 to 48 hours depending on print bed volumes and current queue schedules. Once production is completed, we use local insured courier networks to deliver island-wide in Sri Lanka, which usually takes 1 to 2 business days."
    },
    {
      question: "Which material should I choose for my project?",
      answer: "Choose PLA for rapid concept prototypes, detailed visual art, or architectural drafts. Select PETG for structural parts, outdoor applications, or functional brackets. Select TPU for impact-absorbing bumpers, flexible gaskets, or dampeners. Use SLA Resin for hyper-detailed, high-resolution models and miniatures."
    },
    {
      question: "Can you help optimize my model file before printing?",
      answer: "Yes. Our engineering desk conducts a manual Design-for-Manufacturability (DFM) slice analysis on every intake model. If we detect weak structural thresholds, dangerous overhang angles, or slicing errors, we will contact you directly with recommendations to optimize the design."
    },
    {
      question: "Do you offer bulk manufacturing or volume scaling discounts?",
      answer: "Yes, we support on-demand batch manufacturing. We offer tiered volume scaling discounts: 15% off for batch runs (6 to 50 parts) and up to 30% off for large volumes (50+ parts), all without requiring expensive tooling setup fees."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We support a range of secure local payment options, including Bank Transfers (HNB, Sampath, etc.), VISA, MasterCard, AMEX online transfers, eZcash, and FriMi online transfers."
    }
  ];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full py-20 bg-slate-50 relative border-b border-slate-200/60">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Faq Desk</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Find answers to standard logistics, layer resolutions, filament properties, and dimensional specifications below.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-300 hover:border-slate-300 shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left font-bold text-slate-900 hover:text-blue-600 transition-colors focus:outline-none"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <div className="p-1 rounded bg-slate-50 border border-slate-200 text-slate-500 transition-colors">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-blue-600" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen 
                      ? "max-h-40 border-t border-slate-100 opacity-100 py-4 px-5" 
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
