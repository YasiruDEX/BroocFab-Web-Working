"use client";

import { 
  Crosshair, 
  Zap, 
  Layers, 
  Compass, 
  TrendingUp,
  BadgeCheck
} from "lucide-react";

export default function CardSection() {
  return (
    <section id="services" className="w-full py-20 bg-slate-50 relative border-b border-slate-200/60">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
            <Compass className="h-3.5 w-3.5 animate-spin duration-3000" />
            <span>Fabrication Capabilities</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
            Precision Digital Manufacturing
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We operate a meticulously calibrated workshop fleet to deliver precise, high-performance parts for robotics, product design, and spatial modeling.
          </p>
        </div>

        {/* Bento Grid Layout (Light Apple Aesthetic) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Precision Engineering (Spans 2 columns on desktop) */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
            
            <div className="flex flex-col md:flex-row gap-6 justify-between h-full">
              <div className="space-y-4 max-w-md flex flex-col justify-between h-full">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 mb-4">
                    <Crosshair className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Precision Engineering</h3>
                  <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                    Our manufacturing setups deliver structural dimensional tolerances down to <span className="text-blue-600 font-semibold">±0.1mm</span>. Perfectly engineered for structural snap-fit mounts, functional prototypes, and tight mechanical assemblies.
                  </p>
                </div>
                
                {/* Tech sub-specs strip */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 mt-4 md:mt-0">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Available Nozzles</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-700">0.2mm to 0.8mm options</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Minimum Layer Height</div>
                    <div className="text-xs sm:text-sm font-bold text-slate-700">0.08mm (80 Microns)</div>
                  </div>
                </div>
              </div>

              {/* Graphic element inside the bento */}
              <div className="flex items-center justify-center bg-slate-50 rounded-xl p-5 border border-slate-200/80 w-full md:w-60 aspect-video md:aspect-square relative overflow-hidden self-center font-mono text-[10px] text-slate-500">
                <div className="w-full space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-1.5">
                    <span className="font-semibold text-slate-400">DIMENSIONAL_LIMIT</span>
                    <span className="text-blue-600 font-bold">±0.10 mm</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-1.5">
                    <span className="font-semibold text-slate-400">MIN_RESOLUTION</span>
                    <span className="text-blue-600 font-bold">0.08 mm</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200/60 pb-1.5">
                    <span className="font-semibold text-slate-400">SLICER_INTEGRITY</span>
                    <span className="text-emerald-600 font-bold">DFM Passed</span>
                  </div>
                  <div className="flex items-center justify-between pb-0.5">
                    <span className="font-semibold text-slate-400">CALIBRATION</span>
                    <span className="text-slate-600 font-bold">100% Caliper</span>
                  </div>
                  {/* Clean micro-visual bar */}
                  <div className="pt-3 flex gap-1 h-10 w-full justify-between items-end">
                    <div className="w-full bg-blue-100 h-3 rounded-sm" />
                    <div className="w-full bg-blue-200 h-5 rounded-sm" />
                    <div className="w-full bg-blue-300 h-6 rounded-sm" />
                    <div className="w-full bg-blue-600 h-10 rounded-sm" />
                    <div className="w-full bg-blue-400 h-7 rounded-sm" />
                    <div className="w-full bg-blue-200 h-4 rounded-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Fast Turnaround (1 column) */}
          <div className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
            
            <div className="flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">48-Hour Delivery</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  We schedule and optimize our workspaces so production starts within hours of booking. Over <span className="text-emerald-600 font-semibold">92%</span> of standard prototypes ship locally inside 48 hours.
                </p>
              </div>

              {/* Technical stat pill */}
              <div className="flex items-center gap-3.5 bg-slate-50 rounded-xl p-3 border border-slate-200/80">
                <div className="text-2xl font-black text-emerald-600">92%</div>
                <div className="text-[10px] leading-tight text-slate-500 font-semibold uppercase tracking-wider">
                  On-Time Delivery Rate Island-wide
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Material Matrix (1 column) */}
          <div className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">
            
            <div className="flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 mb-4">
                  <Layers className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">Industrial Materials</h3>
                <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                  Engineered materials carefully chosen for strength, flexibility, thermal thresholds, and hyper-detail resin models.
                </p>
              </div>

              {/* Filament types lists */}
              <div className="space-y-1.5 text-xs text-slate-600 font-mono">
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">Engineering Core</span>
                  <span className="text-blue-600 font-bold">PLA, PETG, ABS</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-slate-100">
                  <span className="font-semibold text-slate-700">Flex Elastomers</span>
                  <span className="text-blue-600 font-bold">TPU (Shore 95A)</span>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="font-semibold text-slate-700">Ultra-High Detail</span>
                  <span className="text-emerald-600 font-bold">SLA Resin</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Startups & Manufacturing (Spans 2 columns on desktop) */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300">

            <div className="flex flex-col md:flex-row gap-6 justify-between h-full">
              <div className="space-y-4 max-w-md flex flex-col justify-between h-full">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 mb-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Scalable Custom Production</h3>
                  <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                    Designed to cater to both startup developers and mechanical engineers. We support low-volume batch production runs, allowing you to scale up from a single prototype to <span className="text-indigo-600 font-semibold">1,000+ units</span> without tooling setup fees.
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap mt-2">
                  <span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-[10px] text-slate-600 font-semibold uppercase tracking-wider">No Tooling Setup</span>
                  <span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-[10px] text-slate-600 font-semibold uppercase tracking-wider">Scaling Discounts</span>
                  <span className="px-2.5 py-1 rounded bg-slate-50 border border-slate-200 text-[10px] text-slate-600 font-semibold uppercase tracking-wider">DFM Advisory</span>
                </div>
              </div>

              {/* stats table */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 w-full md:w-64 self-center space-y-3 font-mono text-[10px] text-slate-600">
                <div className="flex items-center gap-2 pb-2 border-b border-slate-200/60">
                  <BadgeCheck className="h-4 w-4 text-emerald-600" />
                  <span className="font-bold text-slate-800 text-[11px]">Batch Discount Scale</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>1 - 5 Parts</span>
                    <span className="text-slate-800 font-semibold">Standard prototype</span>
                  </div>
                  <div className="flex justify-between">
                    <span>6 - 50 Parts</span>
                    <span className="text-blue-600 font-bold">-15% Batch Scale</span>
                  </div>
                  <div className="flex justify-between">
                    <span>50+ Parts</span>
                    <span className="text-emerald-600 font-bold">-30% Volume Scale</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200/60 pt-2">
                    <span>Quality</span>
                    <span className="text-slate-800 font-semibold">100% Caliper check</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
