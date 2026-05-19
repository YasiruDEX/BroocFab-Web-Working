"use client";

import { Star, Quote, ShieldCheck, BadgeCheck, Linkedin } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  project: string;
  material: string;
  rating: number;
  text: string;
  initials: string;
  linkedInUrl: string;
}

export default function ReviewsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Ranasinghe K.",
      role: "Senior Robotics Engineer",
      company: "AeroBot Sri Lanka",
      project: "Custom Support Bracket Assembly",
      material: "PLA Pro",
      rating: 5,
      text: "BroocFab has been an exceptional hardware partner. The dimensional rigidity on our high-torque robotic mounts was outstanding, holding tolerances within ±0.1mm. Turnaround took under 36 hours. Absolute game-changer for Colombo hardware engineers.",
      initials: "RK",
      linkedInUrl: "https://linkedin.com"
    },
    {
      name: "Dilini M.",
      role: "Principal Architect",
      company: "UrbanDraft Studio",
      project: "Miniature Scale Architectural Mockup",
      material: "SLA Resin",
      rating: 5,
      text: "The details they achieved on our miniature spatial zoning drafts were pristine. Surface finishes were completely smooth and free of any visible layer lines. Revisions were fast and simple through their customized WhatsApp system.",
      initials: "DM",
      linkedInUrl: "https://linkedin.com"
    },
    {
      name: "Jehan D.",
      role: "Hardware Lead",
      company: "SyncTech Sri Lanka",
      project: "Custom IoT Gateway Housing",
      material: "PETG",
      rating: 5,
      text: "Sourcing flame-retardant parts in Sri Lanka used to be extremely difficult. The post-processed threaded brass inserts BroocFab installed made our pilot enclosure runs completely ready for deployment out-of-the-box.",
      initials: "JD",
      linkedInUrl: "https://linkedin.com"
    },
    {
      name: "Kavishka T.",
      role: "Product Designer",
      company: "MorphLabs Colombo",
      project: "Ergonomic Custom Casing Component",
      material: "TPU (Flexible)",
      rating: 5,
      text: "Our flexible TPU bumpers matched industrial-grade rubber specifications perfectly. Superior shock-absorption, flexible tolerances, and solid durability. The parametric pricing calculator on their portal is incredibly accurate.",
      initials: "KT",
      linkedInUrl: "https://linkedin.com"
    }
  ];

  return (
    <section id="testimonials" className="w-full py-20 bg-white relative border-b border-slate-200/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Verified Case Reviews</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
            Trusted by Innovators & Engineers
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Read authentic engineering reviews from local robotics startups, architecture firms, and product designers who rely on our workshop.
          </p>
        </div>

        {/* Testimonials Grid (2 columns) */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {testimonials.map((test, idx) => (
            <div 
              key={idx}
              className="relative group rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              {/* Quote Icon overlay */}
              <div className="absolute top-6 right-6 text-slate-100/40 group-hover:text-blue-500/5 transition-colors pointer-events-none">
                <Quote className="h-20 w-20 transform rotate-180" />
              </div>

              <div className="space-y-5">
                {/* Stars & Verified */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: test.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-transparent" />
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 text-[10px] text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded shadow-sm">
                    <BadgeCheck className="h-3 w-3 animate-pulse" />
                    <span>VERIFIED CLIENT</span>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed relative z-10">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>

              {/* Specs & Profile */}
              <div className="pt-6 border-t border-slate-100 mt-6 space-y-4">
                
                {/* Spec Tag */}
                <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold text-slate-400">
                  <span>PROJECT: <span className="text-slate-700">{test.project}</span></span>
                  <span>|</span>
                  <span>CORE: <span className="text-blue-600">{test.material}</span></span>
                </div>

                {/* Profile info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                      {test.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{test.name}</h4>
                      <p className="text-[11px] text-slate-500">{test.role} at <span className="text-slate-700 font-semibold">{test.company}</span></p>
                    </div>
                  </div>

                  <a 
                    href={test.linkedInUrl} 
                    target="_blank"
                    className="p-2 rounded-full bg-slate-50 border border-slate-200 hover:bg-slate-100 text-slate-500 hover:text-blue-600 transition-all shadow-sm"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
