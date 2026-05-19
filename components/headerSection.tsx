"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Layers,
  Wrench,
  Boxes,
  Phone
} from "lucide-react";

export default function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      if (offset > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Materials", href: "#materials-pricing" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <header 
        className={`fixed z-50 transition-all duration-500 mx-auto w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-6xl left-0 right-0 rounded-[24px] ${
          scrolled 
            ? "top-3 sm:top-5 bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-1" 
            : "top-4 sm:top-6 bg-white/95 backdrop-blur-sm border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-1.5"
        }`}
      >
        <div className="px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px] transition-all duration-500">
            
            {/* Primary High-Res Logo - Significant Brand Scale */}
            <Link href="/" className="flex items-center gap-2 group shrink-0 py-1 mr-4 sm:mr-6">
              <img 
                src="/logo_main.png" 
                alt="BroocFab Logo" 
                className={`w-auto object-contain transition-all duration-500 group-hover:scale-[1.02] ${
                  scrolled ? "h-[46px] sm:h-[52px]" : "h-[54px] sm:h-[62px]"
                }`} 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              
              {/* Custom Solutions Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center gap-1 text-[15px] font-bold transition-colors py-2 text-slate-800 hover:text-blue-600"
                >
                  Solutions
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180 text-slate-400" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-200 rounded-xl shadow-xl p-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="grid gap-1">
                    <Link 
                      href="/structure-lab" 
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <Layers className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900">Structure Lab</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">High-performance spatial scale models</div>
                      </div>
                    </Link>
                    <div className="flex items-start gap-3 p-2.5 rounded-lg opacity-50 cursor-not-allowed">
                      <Wrench className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900">Industrial Slicing</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">Batch engineering catalog options</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-2.5 rounded-lg opacity-50 cursor-not-allowed">
                      <Boxes className="h-5 w-5 text-indigo-600 mt-0.5" />
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-900">Laser Cutting <span className="text-[9px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ml-1">Soon</span></div>
                        <div className="text-[11px] text-slate-500 mt-0.5">Sub-millimeter CNC structures</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-bold transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left text-slate-800 hover:text-blue-600"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://wa.me/94702534485?text=Hi%20BroocFab%2C%20I%27d%20like%20a%20quote%20for%20a%203D%20model%21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-[13px] font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:brightness-110 hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)] shadow-sm transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us
                <Phone className="h-3.5 w-3.5 text-white ml-2" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center justify-center p-2 rounded-lg transition-colors focus:outline-none text-slate-800 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-x-0 top-[72px] sm:top-[80px] z-40 w-full bg-white sm:rounded-b-[24px] shadow-lg transition-all border border-slate-200/60 duration-300 md:hidden ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
          }`}
        >
          <div className="flex flex-col h-full justify-between p-6 bg-white">
            <nav className="flex flex-col gap-5">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Solutions</span>
                <Link 
                  href="/structure-lab"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3 mt-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800"
                >
                  <span className="text-sm font-semibold">Structure Lab</span>
                  <Layers className="h-4 w-4 text-blue-600" />
                </Link>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-bold text-slate-700 hover:text-slate-900 hover:translate-x-1 transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-4 mt-8 mb-6">
              <a
                href="https://wa.me/94702534485?text=Hi%20BroocFab%2C%20I%27d%20like%20a%20quote%20for%20a%203D%20model%21"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:brightness-110 hover:shadow-[0_4px_20px_rgba(37,99,235,0.4)] shadow transition-all duration-300 text-center"
              >
                Contact Us
                <Phone className="h-4 w-4 text-white ml-2" />
              </a>
            </div>
          </div>
        </div>

      </header>
    </>
  );
}