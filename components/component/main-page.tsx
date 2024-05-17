/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/u3HaDMomWT5
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Gabarito } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

gabarito({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export function MainPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-white py-2 px-4 md:px-6">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Package2Icon className="h-6 w-6" />
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
        </div>
      </header>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#2c5282] to-[#4c6ef5]">
        <div className="container px-4 md:px-6 text-white">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Unleash Your Creativity with BroocFab
              </h1>
              <p className="max-w-[600px] text-lg">
                Experience the power of 3D printing with BroocFab. From custom prototypes to unique personalized items,
                we bring your ideas to life.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#2c5282] shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-white px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800"
                  href="#"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
              height="550"
              src="/placeholder.svg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our 3D Printing Services</h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              From rapid prototyping to custom-made parts, we offer a wide range of 3D printing services to meet your
              needs.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardHeader>
                <CuboidIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold">Rapid Prototyping</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Bring your ideas to life quickly with our fast and accurate 3D printing services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <GaugeIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold">Custom Parts</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create unique, personalized parts and components tailored to your specifications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <PaletteIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold">Artistic Creations</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Unleash your creativity and bring your artistic visions to life with our 3D printing services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Gallery of 3D Printed Creations
            </h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              Explore a selection of our 3D printed projects, showcasing the versatility and quality of our services.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <img
              alt="3D Printed Item"
              className="aspect-[3/2] object-cover rounded-lg"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
            <img
              alt="3D Printed Item"
              className="aspect-[3/2] object-cover rounded-lg"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
            <img
              alt="3D Printed Item"
              className="aspect-[3/2] object-cover rounded-lg"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
            <img
              alt="3D Printed Item"
              className="aspect-[3/2] object-cover rounded-lg"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
            <img
              alt="3D Printed Item"
              className="aspect-[3/2] object-cover rounded-lg"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
            <img
              alt="3D Printed Item"
              className="aspect-[3/2] object-cover rounded-lg"
              height="400"
              src="/placeholder.svg"
              width="600"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              Hear from our satisfied customers about their experience with BroocFab.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            <Card>
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 border">
                    <AvatarImage alt="@customer1" src="/placeholder-user.jpg" />
                    <AvatarFallback>C1</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">John Doe</h4>
                    <div className="flex items-center gap-1 text-gray-900 dark:text-gray-50">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                &quot;BroocFab&apos;s 3D printing services have been a game-changer for my business. The quality of their work
                  is exceptional, and the turnaround time is incredibly fast. I highly recommend their services to
                  anyone in need of custom parts or prototypes.&quot;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 border">
                    <AvatarImage alt="@customer2" src="/placeholder-user.jpg" />
                    <AvatarFallback>C2</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Jane Smith</h4>
                    <div className="flex items-center gap-1 text-gray-900 dark:text-gray-50">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                &quot;I&apos;m absolutely thrilled with the custom 3D printed parts I ordered from BroocFab. The attention to
                  detail and the level of craftsmanship is truly impressive. I can't wait to work with them again on my
                  next project.&quot;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 border">
                    <AvatarImage alt="@customer3" src="/placeholder-user.jpg" />
                    <AvatarFallback>C3</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Michael Johnson</h4>
                    <div className="flex items-center gap-1 text-gray-900 dark:text-gray-50">
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                      <StarIcon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-500 dark:text-gray-400">
                &quot;As an artist, I&apos;ve been blown away by the quality and versatility of BroocFab&apos;s 3D printing services.
                  They&apos;ve helped me bring my creative visions to life in ways I never thought possible. I highly
                  recommend their services to anyone looking to explore the world of 3D printing.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-6 w-full shrink-0">
        <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Package2Icon className="h-6 w-6" />
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
          <p className="text-sm text-gray-400">© 2024 BroocFab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function CuboidIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
      <path d="M10 22v-8L2.25 9.15" />
      <path d="m10 14 11.77-6.87" />
    </svg>
  )
}


function GaugeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PaletteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}