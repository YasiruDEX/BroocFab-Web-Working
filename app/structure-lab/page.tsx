import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Upload,
  Palette,
  Truck,
  Target,
  Paintbrush,
  Ruler,
  MessageCircle,
  FileText,
  ImageIcon,
  Download,
  Shield,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Structure Lab | Architectural & Functional 3D Models Sri Lanka",
  description:
    "High-performance physical scale models and structural mocks for engineering, architecture, and design. Expert 3D fabrication services by BroocFab Colombo.",
  keywords: [
    "Architectural 3D printing Sri Lanka",
    "Scale models Colombo",
    "Engineering prototyping Sri Lanka",
    "Structural mockups Sri Lanka",
    "Structure Lab BroocFab",
  ],
};

export default function StructureLabLanding() {
  const whatsappLink =
    "https://wa.me/94702534485?text=Hi%20BroocFab%2C%20I%27d%20like%20a%20quote%20for%20a%20Structure%20Lab%203D%20model%21";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-4 z-50 mx-auto w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-6xl rounded-[24px] border border-slate-200/80 bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <div className="px-5 sm:px-6 lg:px-8">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            <div className="flex items-center gap-4 md:gap-5 shrink-0">
              <Link href="/" className="flex items-center group py-1">
                <Image
                  src="/logo_main.png"
                  alt="BroocFab Logo"
                  width={220}
                  height={72}
                  className="h-[40px] sm:h-[46px] w-auto object-contain transition-all duration-300 group-hover:scale-[1.02]"
                  priority
                />
              </Link>
              <div className="hidden sm:block h-6 sm:h-8 w-px bg-slate-200" />
              <div className="hidden sm:block">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Structure Lab
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                asChild
                className="bg-[#25D366] hover:bg-[#1ebd5c] text-white rounded-xl shadow-sm hover:-translate-y-0.5 transition-all text-xs h-9 sm:h-10 px-4 sm:px-5"
              >
                <Link href={whatsappLink} target="_blank">
                  <MessageCircle className="mr-1.5 h-4 w-4" />
                  WhatsApp Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/banner.png?height=800&width=1600"
            alt="Beautiful Physical 3D House Model on Studio Desk"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white drop-shadow-lg">
                  Turn Your Floor Plan Into a Real 3D Model
                </h1>
                <p className="text-xl text-white/90 max-w-[600px] drop-shadow-md">
                  Structure Lab by BroocFab — Bringing your house plan to life,
                  islandwide & free delivery guaranteed.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700 shadow-lg"
                >
                  <Link href={whatsappLink} target="_blank">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get a Quotation on WhatsApp
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <Truck className="h-4 w-4 text-green-400" />
                  <span>Free delivery islandwide</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="h-4 w-4 text-green-400" />
                  <span>Highly accurate scaling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto">
              Three simple steps to get your physical 3D house model delivered
              to your doorstep.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 border-slate-100 hover:border-slate-200 transition-colors">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8 text-slate-700" />
                </div>
                <div className="bg-slate-900 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                  1
                </div>
                <CardTitle className="text-xl">
                  Upload Your Floor Plan
                </CardTitle>
                <CardDescription className="text-base">
                  Send us your floor plan in PDF, DWG, PNG, or JPG format. We
                  accept all standard architectural drawings.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-slate-100 hover:border-slate-200 transition-colors">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <Palette className="h-8 w-8 text-slate-700" />
                </div>
                <div className="bg-slate-900 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                  2
                </div>
                <CardTitle className="text-xl">
                  Choose Your Model Type
                </CardTitle>
                <CardDescription className="text-base">
                  <strong>Basic:</strong> Single-color model
                  <br />
                  <strong>Colorful:</strong> Multi-color model
                  <br />
                  Pricing based on square footage and floors.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-slate-100 hover:border-slate-200 transition-colors">
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-slate-700" />
                </div>
                <div className="bg-slate-900 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                  3
                </div>
                <CardTitle className="text-xl">We Craft & Deliver</CardTitle>
                <CardDescription className="text-base">
                  Physical 3D model shipped safely to your doorstep — anywhere
                  in Sri Lanka, delivery FREE of charge.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              asChild
              className="bg-green-600 hover:bg-green-700"
            >
              <Link href={whatsappLink} target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat With Us On WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Breakdown */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
              Pricing Breakdown
            </h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto">
              Clear, simple pricing based on your project requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="text-center text-2xl">
                  Pricing Structure
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b-2 border-slate-200">
                        <th className="text-left py-4 px-4 font-semibold text-slate-900">
                          Package
                        </th>
                        <th className="text-left py-4 px-4 font-semibold text-slate-900">
                          Color
                        </th>
                        <th className="text-left py-4 px-4 font-semibold text-slate-900">
                          Pricing Basis
                        </th>
                        <th className="text-left py-4 px-4 font-semibold text-slate-900">
                          Example
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-100">
                        <td className="py-4 px-4 font-medium">Basic</td>
                        <td className="py-4 px-4">Single Color</td>
                        <td className="py-4 px-4">Square feet + Floors</td>
                        <td className="py-4 px-4 text-slate-600">
                          2-storey, 1500 sqft
                        </td>
                      </tr>
                      <tr className="border-b border-slate-100">
                        <td className="py-4 px-4 font-medium">Colorful</td>
                        <td className="py-4 px-4">Multi Color</td>
                        <td className="py-4 px-4">
                          Square feet + Floors + Colors
                        </td>
                        <td className="py-4 px-4 text-slate-600">
                          2-storey, 1500 sqft, 5 colors
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-center text-green-800 font-medium">
                    💬 Contact us on WhatsApp for an instant, customized quote!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              asChild
              className="bg-green-600 hover:bg-green-700"
            >
              <Link href={whatsappLink} target="_blank">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Your Free Quote Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* File Requirements */}
      <section className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
              File Requirements
            </h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto">
              What you need to send us and what you&apos;ll receive in return.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="border-2 border-slate-100">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Upload className="mr-3 h-6 w-6 text-green-600" />
                  What to Send Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-slate-600 mt-1" />
                  <div>
                    <p className="font-medium">
                      Floor plan in PDF, DWG, PNG, or JPG
                    </p>
                    <p className="text-sm text-slate-600">
                      High-resolution files preferred
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ImageIcon className="h-5 w-5 text-slate-600 mt-1" />
                  <div>
                    <p className="font-medium">
                      Any elevation drawings (optional)
                    </p>
                    <p className="text-sm text-slate-600">
                      Helps us create more accurate models
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Paintbrush className="h-5 w-5 text-slate-600 mt-1" />
                  <div>
                    <p className="font-medium">
                      Color scheme or reference photos
                    </p>
                    <p className="text-sm text-slate-600">
                      For multi-color models only
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-slate-100">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Download className="mr-3 h-6 w-6 text-green-600" />
                  What We Deliver
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-slate-600 mt-1" />
                  <div>
                    <p className="font-medium">Physical 3D scale model</p>
                    <p className="text-sm text-slate-600">
                      Primary deliverable - hand-finished
                    </p>
                  </div>
                </div>
                {/* <div className="flex items-start space-x-3">
                  <Shield className="h-5 w-5 text-slate-600 mt-1" />
                  <div>
                    <p className="font-medium">Free protective casing</p>
                    <p className="text-sm text-slate-600">Keeps your model safe during transport</p>
                  </div>
                </div> */}
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-slate-600 mt-1" />
                  <div>
                    <p className="font-medium">
                      STL file of the final model (optional)
                    </p>
                    <p className="text-sm text-slate-600">
                      Digital file for future reference
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ImageIcon className="h-5 w-5 text-slate-600 mt-1" />
                  <div>
                    <p className="font-medium">3D render images (optional)</p>
                    <p className="text-sm text-slate-600">
                      For digital use and presentations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Structure Lab */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900">
              Why Choose Structure Lab
            </h2>
            <p className="text-xl text-slate-600 max-w-[800px] mx-auto">
              Professional quality and service you can trust.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Highly Accurate Scaling
              </h3>
              <p className="text-slate-600">
                Precise measurements and proportions in every model
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto">
                <Palette className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Basic or Full-Color Option
              </h3>
              <p className="text-slate-600">
                Choose the perfect finish for your needs and budget
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Islandwide Delivery
              </h3>
              <p className="text-slate-600">
                Always FREE delivery anywhere in Sri Lanka
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center mx-auto">
                <Ruler className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">
                Hand-Finished Details
              </h3>
              <p className="text-slate-600">
                Professional finishing by BroocFab experts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-slate-900 text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Bring Your Floor Plan to Life?
            </h2>
            <p className="text-xl text-slate-300">
              Get your custom quote today and see your house design transformed
              into a stunning physical 3D model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="text-lg px-8 py-6 bg-green-600 hover:bg-green-700"
              >
                <Link href={whatsappLink} target="_blank">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Get Your Free Quote Now
                </Link>
              </Button>
            </div>
            <p className="text-sm text-slate-400">
              Free delivery islandwide • Professional quality guaranteed
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
                  <span className="text-white font-bold text-lg">BF</span>
                </div>
                <div>
                  <span className="text-xl font-bold text-slate-900">
                    BroocFab
                  </span>
                  <div className="text-sm text-slate-600">Structure Lab</div>
                </div>
              </div>
              <p className="text-slate-600 max-w-xs">
                Professional 3D modeling services bringing your architectural
                plans to life.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">
                Contact Information
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-4 w-4 text-green-600" />
                  <Link
                    href={whatsappLink}
                    target="_blank"
                    className="text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    WhatsApp: +94 70 253 4485
                  </Link>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-slate-600" />
                  <span className="text-slate-600">+94 70 253 4485</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-slate-600" />
                  <span className="text-slate-600">info@broocfab.com</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Legal</h3>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="block text-slate-600 hover:text-slate-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-12 pt-8 text-center">
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} BroocFab. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Button
          size="lg"
          asChild
          className="rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
        >
          <Link href={whatsappLink} target="_blank">
            <MessageCircle className="h-6 w-6" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
