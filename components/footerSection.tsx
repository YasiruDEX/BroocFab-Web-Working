"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const linksGroup1 = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Materials", href: "#materials-pricing" }
  ];

  const linksGroup2 = [
    { name: "FAQ", href: "#faq" },
    { name: "Start RFQ", href: "#contact" },
    { name: "Structure Lab", href: "/structure-lab" }
  ];

  const targetSectors = [
    "Engineering & Robotics",
    "Architectural Models",
    "Medical Diagnostic Pilots",
    "Consumer Product Casings",
    "Startup Batch Runs"
  ];

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900/60 py-12 md:py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 mb-12">
          
          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="block w-fit">
              <img 
                src="/logo_main.png" 
                alt="BroocFab Logo" 
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Sri Lanka&apos;s premium digital fabrication studio. Delivering precise, high-performance 3D printing and rapid physical prototyping with engineering-grade polymers.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {linksGroup1.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {linksGroup2.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Target Sectors */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">Sectors Served</h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {targetSectors.map((sec, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-blue-500/40" />
                  <span>{sec}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p className="text-slate-500 text-center sm:text-left font-bold">
            © {currentYear} BroocFab. All rights reserved. Colombo, Sri Lanka.
          </p>
          <div className="flex gap-4 items-center">
            <a href="mailto:hello@broocfab.com" className="hover:text-blue-400 flex items-center gap-1.5 text-slate-400 font-bold transition-colors">
              <Mail className="h-3.5 w-3.5 text-blue-400" />
              hello@broocfab.com
            </a>
            <span className="text-slate-800">|</span>
            <span className="text-slate-400 font-bold">SECURE NDA DESIGN ASSURANCE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
