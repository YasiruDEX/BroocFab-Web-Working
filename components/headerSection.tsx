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
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2">
          <Package2Icon className="h-7 w-7" />
          <span className="font-semibold text-lg">BroocFab</span>
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
