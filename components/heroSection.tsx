import { PhoneIcon } from "@/components/icons"
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-10 lg:py-10 mt-16 relative overflow-hidden">
      <div className="blur-sm absolute inset-0 bg-black bg-opacity-50 z-0">
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/promo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <div className="relative px-4 md:px-6 text-white z-10">
        <div className="grid items-center px-10 gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl">
              Transform your concepts into{" "}
              <span className="text-blue-400 hover:text-blue-300">
                tangible
              </span>{" "}
              reality today!
            </h1>
            <p className="max-w-[600px] text-lg">
              Experience the power of 3D printing with BroocFab. From custom
              prototypes to unique personalized items, we bring your ideas to
              life.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#2c5282] shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="https://api.whatsapp.com/send/?phone=94702534485&text=Hi%21+I+have+a+question+about...&type=phone_number&app_absent=0"
              >
                Start Printing
              </Link>
              <a
                className="inline-flex h-12 items-center justify-center rounded-md bg-green-500 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50"
                href="https://api.whatsapp.com/send/?phone=94702534485&text=Hi%21+I+have+a+question+about...&type=phone_number&app_absent=0"
              >
                Get Quotation
                <PhoneIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover opacity-95 shadow-slate-800 transition-transform transition-filter duration-300 ease-in-out hover:brightness-110 hover:scale-105"
            height="550"
            src="/main.jpg"
            width="550"
          />
        </div>
      </div>
    </section>
  );
}
