"use client";

import Link from "next/link";
import { 
  Sparkles, 
  Upload, 
  ArrowRight, 
  MapPin,
  ShieldCheck
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-slate-950">
      
      {/* Cinematic Loop Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 select-none pointer-events-none"
      >
        <source src="/promo.mp4" type="video/mp4" />
      </video>

      {/* Premium Navy/Slate Radial & Linear Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950 z-0" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-slate-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Text Left Column */}
          <div className="space-y-8 lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider w-fit">
              <Sparkles className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
              <span>Premium 3D Fabrication Studio</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white leading-[1.12] drop-shadow-sm">
                Professional 3D Printing &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  Rapid Prototyping
                </span>{" "}
                in Sri Lanka
              </h1>
              <p className="max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed">
                From high-precision functional prototypes to custom visual models, BroocFab delivers production-grade on-demand FDM and SLA fabrication with local engineering expertise.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center">
              <a
                href="#materials-pricing"
                className="inline-flex h-11 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 px-6 text-xs font-bold text-white shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-0.5 group gap-1.5"
              >
                <Upload className="h-4 w-4 text-blue-200" />
                Upload CAD Designs
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex h-11 items-center justify-center rounded-full border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-900 px-6 text-xs font-bold text-slate-300 hover:text-white transition-all shadow-sm"
              >
                View Project Gallery
              </a>
            </div>

            {/* Clean Metrics Strip */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="grid grid-cols-3 gap-6 sm:gap-8">
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">500+</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold font-mono">Completed Prints</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight">48h</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold font-mono">Avg. Turnaround</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">±0.1mm</div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-bold font-mono">Print Tolerance</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Product Image Column (Clean & Framed) */}
          <div className="relative lg:col-span-5 w-full flex justify-center items-center mt-8 lg:mt-0 z-10">
            <div className="relative w-full max-w-[420px] aspect-square rounded-2xl border border-slate-800 bg-slate-900/40 p-2 shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 group overflow-hidden">
              
              {/* Product Image styled cleanly inside minimal white border */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
                <img
                  alt="BroocFab Precision Scale Fabrication Model"
                  src="/main.jpg"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-102"
                />
                
                {/* Floating clean info badge */}
                <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-1.5 text-[10px] font-bold text-slate-300 shadow-sm font-mono">
                  <MapPin className="h-3.5 w-3.5 text-blue-400" />
                  <span>Workshop Colombo</span>
                </div>

                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-800 flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 shadow-sm font-mono">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Caliper Verified</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
