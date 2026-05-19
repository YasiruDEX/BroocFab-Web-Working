"use client";

import { useState } from "react";
import { 
  FolderKanban, 
  X,
  Maximize2,
  ExternalLink,
  MessageSquare
} from "lucide-react";

interface ProjectItem {
  id: number;
  image: string;
  category: string;
  title: string;
  material: string;
  printTime: string;
  layerHeight: string;
  useCase: string;
}

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalItem, setActiveModalItem] = useState<ProjectItem | null>(null);

  const categories = [
    "All",
    "Prototypes",
    "Miniatures",
    "Enclosures",
    "Mechanical Components"
  ];

  const projects: ProjectItem[] = [
    {
      id: 1,
      image: "/show1.jpg",
      category: "Enclosures",
      title: "Custom Electronic Enclosure",
      material: "PLA",
      printTime: "2-3 Hours",
      layerHeight: "0.12mm",
      useCase: "A clean protective enclosure shell printed in PLA for prototype circuit board protection."
    },
    {
      id: 2,
      image: "/show2.jpg",
      category: "Prototypes",
      title: "3D Printed Wall Mount Prototype",
      material: "PLA Pro",
      printTime: "3-4 Hours",
      layerHeight: "0.16mm",
      useCase: "A custom wall-mountable bracket fixture prototype designed to verify mounting clearances."
    },
    {
      id: 3,
      image: "/show3.jpg",
      category: "Mechanical Components",
      title: "Functional PLA Bracket",
      material: "PLA",
      printTime: "2 Hours",
      layerHeight: "0.16mm",
      useCase: "A rigid mechanical alignment support bracket printed to hold structural fittings."
    },
    {
      id: 4,
      image: "/show4.jpg",
      category: "Miniatures",
      title: "Miniature Character Print",
      material: "SLA Resin",
      printTime: "4 Hours",
      layerHeight: "0.05mm",
      useCase: "A hyper-detail desktop character model showing pristine surfaces and delicate facial details."
    },
    {
      id: 5,
      image: "/show5.jpg",
      category: "Prototypes",
      title: "Custom Housing Prototype",
      material: "PETG",
      printTime: "4 Hours",
      layerHeight: "0.16mm",
      useCase: "A robust engineering prototype container designed for quick product-fit test cycles."
    },
    {
      id: 6,
      image: "/show6.jpg",
      category: "Mechanical Components",
      title: "Mechanical Support Part",
      material: "PETG",
      printTime: "5 Hours",
      layerHeight: "0.20mm",
      useCase: "A highly durable mechanical spacer part fabricated to support lightweight assemblies."
    },
    {
      id: 7,
      image: "/show7.jpg",
      category: "Miniatures",
      title: "Resin Figure Print",
      material: "SLA Resin",
      printTime: "3 Hours",
      layerHeight: "0.05mm",
      useCase: "A liquid photopolymer resin print showing spectacular high-resolution visual details."
    },
    {
      id: 8,
      image: "/show8.jpg",
      category: "Mechanical Components",
      title: "3D Printed Link Joint",
      material: "PETG",
      printTime: "3 Hours",
      layerHeight: "0.16mm",
      useCase: "A customized alignment linkage joint printed to test functional assembly dimensions."
    },
    {
      id: 9,
      image: "/show9.jpg",
      category: "Enclosures",
      title: "Custom Casing Component",
      material: "PLA",
      printTime: "2 Hours",
      layerHeight: "0.12mm",
      useCase: "A lightweight protective casing panel fabricated for early physical mock-up tests."
    },
    {
      id: 10,
      image: "/show10.jpg",
      category: "Miniatures",
      title: "Miniature Figure Print",
      material: "SLA Resin",
      printTime: "6 Hours",
      layerHeight: "0.025mm",
      useCase: "An artistic display miniature showcasing flawless resin curing and ultra-smooth bounds."
    },
    {
      id: 11,
      image: "/show11.jpg",
      category: "Mechanical Components",
      title: "Functional Support Bracket",
      material: "PLA Pro",
      printTime: "4 Hours",
      layerHeight: "0.20mm",
      useCase: "A solid structural brace printed in PLA Pro to test fitments under light mechanical loads."
    }
  ];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="w-full py-20 bg-slate-950 border-b border-slate-900 relative">
      
      {/* Visual Ambient Glow */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Section */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">
            <FolderKanban className="h-3.5 w-3.5" />
            <span>Fabrication Gallery</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white">
            Real Workshop Showcases
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real physical parts printed right here in our workshop. Inspect layer accuracy, smooth geometries, and structural details.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg border-transparent"
                  : "bg-slate-900 text-slate-400 hover:text-white border-slate-800 hover:bg-slate-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalItem(project)}
              className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 overflow-hidden cursor-pointer shadow-lg hover:border-slate-700 hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between"
            >
              
              {/* Aspect Ratio Block */}
              <div className="aspect-[3/2] w-full overflow-hidden bg-slate-950 relative border-b border-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  loading="lazy"
                />
                
                {/* Expand Indicator */}
                <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md p-2 rounded-lg border border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Maximize2 className="h-3.5 w-3.5 text-blue-400" />
                </div>

                <div className="absolute bottom-3 left-3 bg-slate-900/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-800 text-[9px] uppercase font-bold tracking-wider text-slate-300 shadow-sm font-mono">
                  {project.category}
                </div>
              </div>

              {/* Text Card Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-slate-400 text-xs line-clamp-2 leading-relaxed">
                    {project.useCase}
                  </p>
                </div>

                {/* Specs: Material Tag Only */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-800/80 pt-3">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">SPEC_CORE</span>
                  <span className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 text-[9px] font-bold text-blue-400 font-mono">
                    {project.material}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Elegant Lightbox Modal Overlay (Premium Dark Contrast) */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors shadow-sm"
              aria-label="Close Lightbox"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Left Column: Image View */}
            <div className="md:w-1/2 bg-slate-950 flex items-center justify-center relative aspect-video md:aspect-auto border-b md:border-b-0 md:border-r border-slate-850">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Column: Spec Sheets */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-none bg-slate-900">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-blue-400 font-mono">{activeModalItem.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1 leading-tight">{activeModalItem.title}</h3>
                </div>

                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase tracking-wider font-bold text-slate-500 font-mono">Specifications</h4>
                  <div className="grid grid-cols-2 gap-4 bg-slate-950/60 rounded-xl p-4 border border-slate-800 text-xs text-slate-300">
                    <div className="space-y-0.5 font-mono">
                      <span className="text-slate-500 text-[9px] font-bold">MATERIAL:</span>
                      <div className="font-bold text-white">{activeModalItem.material}</div>
                    </div>
                    <div className="space-y-0.5 font-mono">
                      <span className="text-slate-500 text-[9px] font-bold">LAYER_HEIGHT:</span>
                      <div className="font-bold text-white">{activeModalItem.layerHeight}</div>
                    </div>
                    <div className="space-y-0.5 font-mono">
                      <span className="text-slate-500 text-[9px] font-bold">PRINT_TIME:</span>
                      <div className="font-bold text-white">{activeModalItem.printTime}</div>
                    </div>
                    <div className="space-y-0.5 font-mono">
                      <span className="text-slate-500 text-[9px] font-bold">FABRICATION:</span>
                      <div className="font-bold text-emerald-400">Colombo Studio</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-[10px] uppercase tracking-wider font-bold text-slate-500 font-mono">Project Description</h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed bg-slate-950/60 rounded-xl p-4 border border-slate-800">
                    {activeModalItem.useCase}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-800/80 mt-6 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setActiveModalItem(null)}
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all text-center gap-1.5 shadow-sm"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  Inquire About Similar Parts
                </a>
                <a
                  href={`https://api.whatsapp.com/send/?phone=94702534485&text=Hi%21+I%27d+like+a+quote+for+a+part+similar+to+your+gallery+item+${encodeURIComponent(activeModalItem.title)}...&type=phone_number`}
                  target="_blank"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-full text-xs font-bold text-slate-300 hover:text-white bg-slate-950 border border-slate-850 hover:bg-slate-850 transition-all text-center gap-1.5"
                >
                  WhatsApp Spec Inquiry
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
