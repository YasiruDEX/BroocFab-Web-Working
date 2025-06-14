import Link from "next/link";
import {
  ChevronDownIcon,
  AwardIcon,
  ClockIcon,
  CuboidIcon,
  GaugeIcon,
  Package2Icon,
  PaletteIcon,
  PhoneIcon,
  StarIcon,
  WalletIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  YoutubeIcon,
} from "@/components/icons";

export default function HeaderSection() {
  return (
    <header className="bg-gray-900/65 text-white py-4 px-4 md:px-6 fixed top-0 left-0 right-0 backdrop-blur-sm z-50 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <Package2Icon className="h-7 w-7" />
          <span className="font-semibold text-lg">BroocFab</span>

          <div className="relative group ml-6">
            <button className="text-lg font-semibold">Solutions</button>
            <div className="absolute left-0 top-full hidden group-hover:block bg-gray-800 text-white rounded-md shadow-lg z-50">
              <Link href="/structure-lab" className="block px-4 py-2 hover:bg-gray-700 whitespace-nowrap">
                Structure Lab
              </Link>
              <span className="block px-4 py-2 text-gray-400 whitespace-nowrap cursor-not-allowed">Coming Soon</span>
              {/* Add more solution links here if needed */}
            </div>
          </div>
        </div>

        <a
          className="inline-flex h-10 items-center justify-center rounded-md bg-green-500 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-700 disabled:pointer-events-none disabled:opacity-50"
          href="https://api.whatsapp.com/send/?phone=94702534485&text=Hi%21+I+have+a+question+about...&type=phone_number&app_absent=0"
        >
          Get Quotation
          <PhoneIcon className="ml-2 h-5 w-5" />
        </a>
      </div>
    </header>
  );
}