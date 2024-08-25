import Link from "next/link";
import { Package2Icon } from "./icons";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-10 w-full shrink-0 px-10">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <Package2Icon className="h-7 w-7" />
          <span className="font-semibold text-lg">BroocFab</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link className="hover:text-gray-300" href="#">
            Home
          </Link>
          <Link className="hover:text-gray-300" href="#">
            Services
          </Link>
          <Link className="hover:text-gray-300" href="#">
            Gallery
          </Link>
          <Link className="hover:text-gray-300" href="#">
            Contact
          </Link>
        </nav>
        <p className="text-sm text-gray-400">
          © 2024 BroocFab. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
