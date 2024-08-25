import { Button } from "@/components/ui/button";

export default function PricingSection() {
  return (
    <section className="bg-gray-100 pb-10 pt-20 md:pt-40 md:pb-40 dark:bg-gray-800">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Pricing Plans
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400 px-10">
          Choose the best plan that suits your 3D printing needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-6 md:px-10">
        <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950 hover:bg-gray-900">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Detail Blaser
            </h3>
            <p className="text-gray-500 mb-6 dark:text-gray-400">
              Usage of 0.3mm nozzle. 0.1mm - 0.16 layer height. Perfect for
              detailed printing.
            </p>
            <div className="flex items-baseline mb-4 py-3">
              <span className="text-4xl md:text-5xl font-bold py-6">
                35 LKR
              </span>
              <span className="text-gray-500 text-sm md:text-base">/g</span>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=94702534485&text=Hi%21+I+have+a+question+about...&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full">Get Quotation</Button>
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gradient-to-r from-[#000000] to-[#4351b0] hover:from-[#000025] hover:to-[#4351b0]">
          <div className="p-6 md:p-8">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50 mb-4">
              Popular
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Standard</h3>
            <p className="text-gray-500 mb-6 dark:text-gray-400">
              Usage of 0.4mm nozzle. 0.12mm - 0.28 layer height. Perfect for
              prototyping.
            </p>
            <div className="flex items-baseline mb-4 py-3">
              <span className="text-4xl md:text-5xl font-bold">23 LKR</span>
              <span className="text-gray-500 text-sm md:text-base">/g</span>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=94702534485&text=Hi%21+I+have+a+question+about...&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full">Get Quotation</Button>
            </a>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950 hover:bg-gray-900">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Hyper Detailed
            </h3>
            <p className="text-gray-500 mb-6 dark:text-gray-400">
              Usage of 0.2mm nozzle. 0.08mm - 0.12 layer height. Perfect for
              hyper detailed action figures.
            </p>
            <div className="flex items-baseline mb-4 py-3">
              <span className="text-4xl md:text-5xl font-bold py-5">
                50 LKR
              </span>
              <span className="text-gray-500 text-sm md:text-base">/g</span>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=94702534485&text=Hi%21+I+have+a+question+about...&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full">Get Quotation</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
