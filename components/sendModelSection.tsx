"use client";

import { useState, useRef } from "react";
import { 
  Mail, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Upload, 
  X, 
  MapPin, 
  Sparkles,
  FileCheck,
  Send,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react";

export default function SendModelSection() {
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form Field states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("Functional Prototype");
  const [message, setMessage] = useState("");

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...droppedFiles]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (indexToRemove: number) => {
    setFiles((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormSubmitted(false);
    setFiles([]);
    setName("");
    setEmail("");
    setPhone("");
    setProjectType("Functional Prototype");
    setMessage("");
  };

  return (
    <section id="contact" className="w-full py-20 bg-white border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
            <Mail className="h-3.5 w-3.5" />
            <span>Intake Center</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
            Start Your Custom Quote
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Submit your model parameters and file designs. Our workshop leads verify geometries to compile an optimized, custom print offer.
          </p>
        </div>

        {/* Content Split */}
        <div className="grid gap-12 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Intake RFQ Form */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex-1 flex flex-col justify-between">
              
              {formSubmitted ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-12 space-y-6 bg-white">
                  <div className="relative w-16 h-16 rounded-full border border-emerald-100 bg-emerald-50 flex items-center justify-center">
                    <FileCheck className="h-8 w-8 text-emerald-600" />
                  </div>
                  
                  <div className="space-y-3 max-w-md">
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Request Submitted</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Thank you, <span className="text-slate-900 font-bold">{name}</span>. Your CAD models and specifications have been securely uploaded.
                    </p>
                    <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-[10px] font-bold text-blue-600 font-mono">
                      RESPONSE_EST: &lt; 2 HOURS
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      A customized fabrication estimate will be sent to <span className="text-slate-700 font-bold">{email}</span>. Please monitor your inbox.
                    </p>
                  </div>

                  <button
                    onClick={resetForm}
                    className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-white hover:bg-slate-50 px-6 text-xs font-bold text-slate-700 transition-all shadow-sm"
                  >
                    Submit Another File
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col justify-between">
                  
                  <div className="space-y-5">
                    {/* Basic details */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">Your Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="e.g. Jehan Perera"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 placeholder-slate-400 font-semibold"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="e.g. hello@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 placeholder-slate-400 font-semibold"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="e.g. 070 253 4485"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 placeholder-slate-400 font-semibold"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">Project Category</label>
                        <select 
                          value={projectType}
                          onChange={(e) => setProjectType(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-600 font-semibold"
                        >
                          <option>Functional Prototype</option>
                          <option>Batch Production (50+ parts)</option>
                          <option>Architectural Scale Mockup</option>
                          <option>Ultra-Detail Miniature/Art</option>
                          <option>Other / Mechanical Assembly</option>
                        </select>
                      </div>
                    </div>

                    {/* Drag and Drop File zone */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">Upload 3D CAD Files (STL, STEP, OBJ)</label>
                      
                      <div 
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`border border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                          dragActive 
                            ? "border-blue-500 bg-blue-50" 
                            : "border-slate-300 bg-slate-50 hover:border-slate-400 hover:bg-slate-100/50"
                        }`}
                      >
                        <input 
                          type="file" 
                          ref={fileInputRef}
                          multiple
                          onChange={handleFileSelect}
                          className="hidden" 
                        />
                        <Upload className="h-6 w-6 text-slate-400 mx-auto mb-2" />
                        <p className="text-xs text-slate-700 font-semibold">Drag & drop files here, or <span className="text-blue-600">browse local</span></p>
                        <p className="text-[10px] text-slate-500 font-mono mt-1">STL, STEP, OBJ, 3MF up to 100MB total</p>
                      </div>

                      {/* Display Selected Files List */}
                      {files.length > 0 && (
                        <div className="space-y-1.5 pt-2 max-h-32 overflow-y-auto">
                          {files.map((file, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-center justify-between p-2 rounded bg-slate-50 border border-slate-200 font-mono text-[10px]"
                            >
                              <div className="flex items-center gap-2 truncate text-slate-600">
                                <FileCheck className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                                <span className="truncate">{file.name}</span>
                                <span className="text-slate-400">({(file.size / (1024 * 1024)).toFixed(2)}MB)</span>
                              </div>
                              <button 
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeFile(idx);
                                }}
                                className="text-slate-400 hover:text-slate-900"
                              >
                                <X className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Message Box */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">Project Specifications (Optional)</label>
                      <textarea 
                        rows={3}
                        placeholder="Detail preferred materials, layer tolerances, color options, or structural load requirements..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 placeholder-slate-400 resize-none font-semibold"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex h-11 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-xs font-bold text-white shadow-sm transition-all gap-1.5 mt-5"
                  >
                    <Send className="h-3.5 w-3.5" />
                    Submit Request for Quote
                  </button>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Workshop details, Hours, Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Spec stats block */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <div className="text-sm font-bold text-slate-900 tracking-tight">Fabrication Office</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Active Operations Colombo</div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>RESPONSES: &lt; 2h</span>
                </div>
              </div>

              {/* Details rows */}
              <div className="space-y-4 font-mono text-xs text-slate-600">
                <div className="flex gap-3.5">
                  <Mail className="h-5 w-5 text-blue-600 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold">CORPORATE_INBOX</span>
                    <a href="mailto:hello@broocfab.com" className="block text-slate-800 hover:text-blue-600 font-bold mt-0.5">hello@broocfab.com</a>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <Phone className="h-5 w-5 text-indigo-600 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold">WORKSHOP_HOTLINE</span>
                    <a href="tel:+94702534485" className="block text-slate-800 hover:text-blue-600 font-bold mt-0.5">+94 70 253 4485</a>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <Clock className="h-5 w-5 text-emerald-600 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold">BUSINESS_HOURS</span>
                    <div className="text-slate-800 font-bold mt-0.5">Mon - Sat: 8:30 AM - 6:30 PM</div>
                    <div className="text-slate-400 text-[10px] mt-0.5">Sunday: Operations Closed</div>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <ShieldCheck className="h-5 w-5 text-blue-500 shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold">NDA_PROTECTED</span>
                    <p className="text-slate-500 leading-relaxed text-[11px] mt-0.5">All files are strictly private, secured on local disks, and deleted upon completion of order.</p>
                  </div>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors shadow-sm"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors shadow-sm"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  className="p-2 rounded bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors shadow-sm"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a 
                  href="https://api.whatsapp.com/send/?phone=94702534485&text=Hi%21+I+have+a+question+about+3D+printing...&type=phone_number" 
                  target="_blank"
                  className="ml-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 font-bold text-xs"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  WhatsApp chat
                </a>
              </div>

            </div>

            {/* Google map iframe wrapper */}
            <div className="rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm h-52 relative group">
              <iframe
                title="BroocFab Workshop Location Colombo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.58585970222!2d79.78616429532588!3d6.921838638337772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13db7caf74d1eb4!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full rounded-xl opacity-90 group-hover:opacity-100 transition-opacity"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md border border-slate-200 rounded px-2.5 py-1.5 flex items-center gap-1.5 text-[9px] font-semibold text-slate-700 shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-blue-600" />
                <span>Colombo Workshop</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
