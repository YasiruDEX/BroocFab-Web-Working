"use client";

import Link from "next/link";
import { 
  Phone, 
  Sparkles, 
  Upload, 
  FileText, 
  Settings, 
  Truck,
  Cpu,
  Layers,
  HeartPulse,
  Wrench,
  Boxes
} from "lucide-react";

import HeaderSection from "../headerSection";
import HeroSection from "../heroSection";
import CardSection from "../cardSection";
import GallerySection from "../gallerySection";
import PricingSection from "../pricingSection";
import SendModelSection from "../sendModelSection";
import QnaSection from "../qnaSection";
import FooterSection from "../footerSection";

export function MainPage2() {
  
  const steps = [
    {
      num: "01",
      title: "Upload CAD Design",
      desc: "Submit your STL, STEP, or OBJ model securely through our quick inquiry uploader.",
      icon: Upload
    },
    {
      num: "02",
      title: "Quick Engineering Review",
      desc: "Our workshop leads inspect file meshes and specs to compile an FDM or SLA quote in under 2 hours.",
      icon: FileText
    },
    {
      num: "03",
      title: "Calibrated Fabrication",
      desc: "We spin up our professional print farm to execute parts with tight dimensional accuracy.",
      icon: Settings
    },
    {
      num: "04",
      title: "Insured Direct Delivery",
      desc: "Parts are physical-caliper tolerance verified, packed securely, and shipped via courier island-wide.",
      icon: Truck
    }
  ];

  const industries = [
    {
      title: "Engineering & Robotics",
      desc: "Rigid FDM structural prints and high-stress connectors built for robotics assemblies and custom sensor brackets.",
      icon: Cpu
    },
    {
      title: "Architectural Planning",
      desc: "Pristine visual spatial models, structural mockups, and high-detail matte scales for client reviews.",
      icon: Layers
    },
    {
      title: "Medical & Dental Pilots",
      desc: "Highly detailed resin master models, dental guides, and high-accuracy diagnostic surgical replicas.",
      icon: HeartPulse
    },
    {
      title: "Consumer Product Casings",
      desc: "Rapid form and fit prototypes, handheld ergonomics controllers, and snap-fit electronics enclosures.",
      icon: Wrench
    },
    {
      title: "Startup Production Runs",
      desc: "Scale functional prototypes into low-volume batches of 10 to 1,000 units on-demand with zero tooling capital.",
      icon: Boxes
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white relative">
      
      {/* Header navbar */}
      <HeaderSection />

      {/* Hero section */}
      <HeroSection />

      {/* Why Choose Us bento grid */}
      <CardSection />

      {/* Custom Block 1: How It Works Flow (Clean Light Layout) */}
      <section id="how-it-works" className="w-full py-20 bg-white border-b border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Production Pipeline</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
              How It Works
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We translate digital files into mechanical-grade physical parts in four simple steps.
            </p>
          </div>

          {/* Timeline Process grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative group rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300">
                  <div className="absolute top-4 right-4 text-slate-200 font-mono font-bold text-4xl group-hover:text-blue-500/10 transition-colors">
                    {step.num}
                  </div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Block 2: Industries Served (Clean Light Layout) */}
      <section className="w-full py-20 bg-slate-50 relative border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
              <Cpu className="h-3.5 w-3.5" />
              <span>Target Sectors</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
              Industries Served
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Engineered fabrications designed to accelerate prototyping and research across Sri Lanka.
            </p>
          </div>

          {/* Sectors Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div key={idx} className="relative group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{ind.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{ind.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <GallerySection />

      {/* Materials Comparison & Calculator */}
      <PricingSection />

      {/* RFQ Intake Uploader */}
      <SendModelSection />

      {/* FAQ Accordions */}
      <QnaSection />

      {/* Footer */}
      <FooterSection />

      {/* Elegant Minimalist Floating WhatsApp Assistant */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://api.whatsapp.com/send/?phone=94702534485&text=Hi%21+I+have+a+question+about+3D+printing...&type=phone_number"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:scale-105 transition-all p-3 border border-emerald-400 group"
          aria-label="Chat on WhatsApp"
        >
          <span className="flex items-center gap-2">
            <Phone className="h-5 w-5 fill-white text-emerald-500" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-[80px] transition-all duration-300 font-bold text-[10px] sm:text-xs uppercase tracking-wider whitespace-nowrap">
              Need Help?
            </span>
          </span>
        </a>
      </div>

    </div>
  );
}
