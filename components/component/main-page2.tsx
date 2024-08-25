import Link from "next/link";
import { PhoneIcon } from "@/components/icons";
import HeaderSection from "../headerSection";
import HeroSection from "../heroSection";
import CardSection from "../cardSection";
import GallerySection from "../gallerySection";
import PricingSection from "../pricingSection";
import SendModelSection from "../sendModelSection";
import ReviewsSection from "../reviewsSection";
import QnaSection from "../qnaSection";
import FooterSection from "../footerSection";

export function MainPage2() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <HeaderSection />
      <HeroSection />
      <CardSection />
      <GallerySection />
      <PricingSection />
      <SendModelSection />
      <ReviewsSection />
      <QnaSection />
      <FooterSection />

      <div className="fixed bottom-5 right-10 z-50">
        <Link
          className="inline-flex items-center justify-center rounded-full bg-green-500 p-4 text-white text-lg shadow-lg transition-colors hover:bg-green-600 focus:outline-none hover:focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          href="https://api.whatsapp.com/send/?phone=94702534485&text=Hi%21+I+have+a+question+about...&type=phone_number&app_absent=0"
          target="_blank"
        >
          <PhoneIcon className="h-7 w-7" />
          <span className="ml-3 text-lg font-medium">Let&apos;s chat</span>
        </Link>
      </div>
    </main>
  );
}
