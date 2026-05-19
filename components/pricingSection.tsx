"use client";

import { Calculator, MessageSquare, Compass, ArrowRight } from "lucide-react";

interface MaterialSpec {
  name: string;
  desc: string;
  bestFor: string[];
  startingPrice: string;
  color: string;
}

export default function PricingSection() {
  const materials: MaterialSpec[] = [
    {
      name: "PLA",
      desc: "Affordable and versatile material ideal for rapid visual prototypes and conceptual displays.",
      bestFor: [
        "Visual prototypes",
        "Decorative models",
        "Product mockups"
      ],
      startingPrice: "LKR 25 / g",
      color: "hover:border-blue-500/40 hover:shadow-blue-500/5"
    },
    {
      name: "PETG",
      desc: "Strong and weather-resistant polymer suitable for durable functional parts and enclosures.",
      bestFor: [
        "Functional parts",
        "Outdoor mounts",
        "Mechanical brackets"
      ],
      startingPrice: "LKR 35 / g",
      color: "hover:border-blue-500/40 hover:shadow-blue-500/5"
    },
    {
      name: "TPU",
      desc: "Highly flexible, rubber-like polymer offering excellent impact absorption and dampening.",
      bestFor: [
        "Vibration isolators",
        "Custom seals & gaskets",
        "Impact-resistant bumpers"
      ],
      startingPrice: "LKR 45 / g",
      color: "hover:border-blue-500/40 hover:shadow-blue-500/5"
    }
  ];

  return (
    <section id="materials-pricing" className="w-full py-24 bg-slate-50 relative border-b border-slate-200/60">
      
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        {/* Header Block */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-100 bg-blue-50/80 text-blue-600 text-xs font-semibold uppercase tracking-wider">
            <Compass className="h-3.5 w-3.5 text-blue-500" />
            <span>Material Catalog</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-slate-900 leading-tight">
            Transparent Pricing, Premium Polymers
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Select from our carefully calibrated materials for your engineering or presentation projects.
          </p>
        </div>

        {/* Full-Width Materials responsive grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto w-full">
          {materials.map((mat, i) => (
            <div 
              key={i} 
              className={`border border-slate-200 bg-white rounded-3xl p-8 shadow-sm transition-all duration-300 flex flex-col justify-between space-y-6 hover:-translate-y-1 hover:shadow-md ${mat.color}`}
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">POLYMER</span>
                  <h4 className="font-extrabold text-slate-900 text-lg tracking-tight">{mat.name}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed min-h-[60px]">{mat.desc}</p>
              </div>

              <div className="space-y-4 pt-6 border-t border-slate-100">
                <div className="space-y-2">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Best for:</span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {mat.bestFor.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-dashed border-slate-100 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider font-mono">RATE</span>
                  <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {mat.startingPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered clean conversion CTA below the grid */}
        <div className="mt-20 text-center max-w-2xl mx-auto border-t border-slate-200/60 pt-16 space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Need a Custom Quote?</h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
            Send us your design files and our team will provide a personalized quotation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 px-6 text-xs font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 gap-1"
            >
              Contact Our Team
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=94702534485&text=Hi%21+I+have+a+3D+model+design+file+and+I%27d+like+a+custom+fabrication+quote...&type=phone_number"
              target="_blank"
              className="w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-full border border-slate-200 hover:border-slate-300 bg-white px-6 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm gap-1.5"
            >
              <MessageSquare className="h-4 w-4 text-emerald-600" />
              Request WhatsApp Quote
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
