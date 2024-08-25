import Link from "next/link"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { ChevronDownIcon, AwardIcon, ClockIcon, CuboidIcon, GaugeIcon, Package2Icon, PaletteIcon, PhoneIcon, StarIcon, WalletIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, YoutubeIcon } from "@/components/icons"
import HeaderSection from "../headerSection"
import HeroSection from "../heroSection"
import CardSection from "../cardSection"

export function MainPage2() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <HeaderSection />
      <HeroSection />
      <CardSection />
      <section className="w-full py-12 md:py-24 lg:pt-32 lg:pb-0 bg-gray-100 dark:bg-gray-800">
        <div className="container px-10 md:px-12">
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
              className="aspect-[3/2] object-cover rounded-lg transition-transform transition-filter duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:brightness-110"
              height="400"
              src="/show1.jpg"
              width="600"
            />
            <img
              alt="3D Printed Item"
              className="aspect-[3/2] object-cover rounded-lg transition-transform transition-filter duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:brightness-110"
              height="400"
              src="/show2.jpg"
              width="600"
            />
            <img
              alt="3D Printed Item"
              className="aspect-[3/2] object-cover rounded-lg transition-transform transition-filter duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:brightness-110"
              height="400"
              src="/show3.jpg"
              width="600"
            />
            <img
              alt="3D Printed Item"
              className="aspect-[3/2] object-cover rounded-lg transition-transform transition-filter duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:brightness-110"
              height="400"
              src="/show4.jpg"
              width="600"
            />
            <img
              alt="3D Printed Item"
              className="aspect-[3/2] object-cover rounded-lg transition-transform transition-filter duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:brightness-110"
              height="400"
              src="/show5.jpg"
              width="600"
            />
            <img
              alt="3D Printed Item"
              className="aspect-[3/2] object-cover rounded-lg transition-transform transition-filter duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:brightness-110"
              height="400"
              src="/show6.jpg"
              width="600"
            />
          </div>


        </div>
      </section>

      <section className="bg-gray-100 pb-10 pt-20 md:pt-40 md:pb-40 dark:bg-gray-800">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950 hover:bg-gray-900">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Detail Blaser</h3>
            <p className="text-gray-500 mb-6 dark:text-gray-400">Usage of 0.3mm nozzle. 0.1mm - 0.16 layer height. Perfect for detailed printing.</p>
            <div className="flex items-baseline mb-4 py-3">
              <span className="text-4xl md:text-5xl font-bold py-6">27 LKR</span>
              <span className="text-gray-500 text-sm md:text-base">/g</span>
            </div>
            <Button className="w-full">Get Quotation</Button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gradient-to-r from-[#000000] to-[#4351b0] hover:from-[#000025] hover:to-[#4351b0]">
          <div className="p-6 md:p-8">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium text-gray-900 dark:bg-gray-800 dark:text-gray-50 mb-4">
                Popular
              </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Standard</h3>
            <p className="text-gray-500 mb-6 dark:text-gray-400">Usage of 0.4mm nozzle. 0.12mm - 0.28 layer height. Perfect for prototyping.</p>
            <div className="flex items-baseline mb-4 py-3">
              <span className="text-4xl md:text-5xl font-bold">20 LKR</span>
              <span className="text-gray-500 text-sm md:text-base">/g</span>
            </div>
            <Button className="w-full">Get Quotation</Button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950 hover:bg-gray-900">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Hyper Detailed</h3>
            <p className="text-gray-500 mb-6 dark:text-gray-400">Usage of 0.2mm nozzle. 0.08mm - 0.12 layer height. Perfect for hyper detailed action figures.</p>
            <div className="flex items-baseline mb-4 py-3">
              <span className="text-4xl md:text-5xl font-bold py-5">37 LKR</span>
              <span className="text-gray-500 text-sm md:text-base">/g</span>
            </div>
            <Button className="w-full">Get Quotation</Button>
          </div>
        </div>
      </div>
    </section>

    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#0a0e24] to-[#2c3678] p-20">
      <div className="w-full max-w-2xl space-y-4">
        <h1 className="text-4xl font-bold leading-tight text-center">Send your model files & Get a Quote</h1>
        <p className="text-gray-400 text-center">
          We make sure to provide you the best 3D printing service ensuring the print quality. We will be manually
          inspecting your 3D model to provide you the best price by calculating the material cost and the print time.
        </p>
        <div className="flex justify-center space-x-4">
          <div className="group relative">
            <FacebookIcon className="text-blue-600 group-hover:scale-110 transition-transform" />
            <div className="absolute top-full mt-2 bg-blue-600 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Facebook
            </div>
          </div>
          <div className="group relative">
            <InstagramIcon className="text-pink-600 group-hover:scale-110 transition-transform" />
            <div className="absolute top-full mt-2 bg-pink-600 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Instagram
            </div>
          </div>
          <div className="group relative">
            <LinkedinIcon className="text-blue-500 group-hover:scale-110 transition-transform" />
            <div className="absolute top-full mt-2 bg-blue-500 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              LinkedIn
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-10 mt-8 items-start">
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#25d366] hover:from-[#2af777] hover:to-[#17823f] to-[#157539] text-white rounded-md p-6 shadow-lg w-full max-w-[200px] group px-8">
          <PhoneIcon className="h-8 w-8 group-hover:scale-110 transition-transform" />
          <div className="font-semibold group-hover:animate-typing">WhatsApp</div>
          <div className="text-lg group-hover:animate-typing">070 2534485</div>
          <Button
            className="text-white bg-transparent border-none group-hover:animate-typing rounded-md px-4 py-2"
            variant="ghost"
          >
            Click to send
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#007bff] hover:from-[#268fff] to-[#00458f] hover:to-[#025ab8] text-white rounded-md p-6 shadow-lg w-full max-w-[200px] group">
          <MailIcon className="h-8 w-8 group-hover:scale-110 transition-transform" />
          <div className="font-semibold group-hover:animate-typing">Email</div>
          <div className="text-lg group-hover:animate-typing">info@broocfab.lk</div>
          <Button
            className="text-white bg-transparent border-none group-hover:animate-typing rounded-md px-4 py-2"
            variant="ghost"
          >
            Click to send
          </Button>
        </div>
      </div>
    </div>
      
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
            <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
              Hear from our satisfied customers about their experience with BroocFab.
            </p>
          </div>
          <div className="flex gap-8 overflow-x-auto py-8 snap-x snap-mandatory">
            <Card className="flex-shrink-0 snap-center w-full max-w-md py-5 bg-gradient-to-r from-[#000000] to-[#181d33] hover:from-[#000030] hover:to-[#181d33]">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 border">
                    <AvatarImage alt="@customer1" src="/p1.png" />
                    <AvatarFallback>C1</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Mr. Nihal Edirisignhe</h4>
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
                  &quot;BroocFab&apos;s customer service is top-notch! They listened to my needs and delivered exactly what I envisioned. I couldn&apos;t be happier with the outcome and will definitely be using their services again.&quot;
                </p>
              </CardContent>
            </Card>
            <Card className="flex-shrink-0 snap-center w-full max-w-md py-5 bg-gradient-to-r from-[#000000] to-[#181d33] hover:from-[#000030] hover:to-[#181d33]">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 border">
                    <AvatarImage alt="@customer2" src="/p2.png" />
                    <AvatarFallback>C2</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Mr. Samith Thennakoon</h4>
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
                  &quot;The precision and quality of BroocFab&apos;s 3D prints are incredible. Every project I have done with them has exceeded my expectations. Highly recommend for any professional looking for reliable 3D printing services.&quot;
                </p>
              </CardContent>
            </Card>
            <Card className="flex-shrink-0 snap-center w-full max-w-md py-5 bg-gradient-to-r from-[#000000] to-[#181d33] hover:from-[#000030] hover:to-[#181d33]">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 border">
                    <AvatarImage alt="@customer3" src="/p3.png" />
                    <AvatarFallback>C3</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Mr. Asiri Padmadeva</h4>
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
                  &quot;BroocFab&apos;s team is incredibly knowledgeable and helpful. They walked me through the entire process, ensuring that my project was a success. The final product was exactly what I needed.&quot;
                </p>
              </CardContent>
            </Card>
            <Card className="flex-shrink-0 snap-center w-full max-w-md py-5 bg-gradient-to-r from-[#000000] to-[#181d33] hover:from-[#000030] hover:to-[#181d33]">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 border">
                    <AvatarImage alt="@customer4" src="/p4.png" />
                    <AvatarFallback>C4</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Mr. Kusal Manjula</h4>
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
                  &quot;I was amazed by the turnaround time and quality of the prints from BroocFab. They have a keen eye for detail and ensure that every aspect of the print is perfect. I wouldn&apos;t go anywhere else for my 3D printing needs.&quot;
                </p>
              </CardContent>
            </Card>
            <Card className="flex-shrink-0 snap-center w-full max-w-md py-5 bg-gradient-to-r from-[#000000] to-[#181d33] hover:from-[#000030] hover:to-[#181d33]">
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 border">
                    <AvatarImage alt="@customer5" src="/p5.png" />
                    <AvatarFallback>C5</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="font-semibold">Mrs. Niroka Herath</h4>
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
                  &quot;Working with BroocFab has been an absolute pleasure. Their expertise and attention to detail have helped me achieve fantastic results in my projects. I highly recommend their services to anyone needing high-quality 3D prints.&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container max-w-4xl px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <h4 className="text-lg font-bold tracking-tighter sm:text-lg md:text-lg text-gray-500 md:text-lg/relaxed lg:text-base/relaxed lg:text-lg/relaxed dark:text-gray-400">Get answers to the most common questions about our 3D printing services.</h4>
        </div>
        <div className="mt-12 space-y-4">
          <Collapsible className="rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between space-x-4 px-4 py-3">
              <h4 className="text-lg font-semibold">What file formats can I send for 3D printing?</h4>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t border-gray-200 px-4 py-3 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We recommend you to send the files in .STL or .OBJ format.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between space-x-4 px-4 py-3">
              <h4 className="text-lg font-semibold">How long does it take to receive the quotation?</h4>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t border-gray-200 px-4 py-3 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We are trying our best to deliver it at the earliest, worst case would be in 24 hours maximum. If not,
                please contact us via 0702534485.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between space-x-4 px-4 py-3">
              <h4 className="text-lg font-semibold">What payment types are accepted?</h4>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t border-gray-200 px-4 py-3 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We accept bank transfers, හෙළPay, VISA, MASTER, AMEX cards, eZcash and mCash, Frimi, iPay, Sampath Bank
                (Vishwa) or HNB Bank online transfers.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between space-x-4 px-4 py-3">
              <h4 className="text-lg font-semibold">How long will it take to deliver the print?</h4>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t border-gray-200 px-4 py-3 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We deliver 3D printed objects to any part of Sri Lanka. It will take 1-2 days to receive the objects
                after print completion.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between space-x-4 px-4 py-3">
              <h4 className="text-lg font-semibold">Are my files kept confidential?</h4>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t border-gray-200 px-4 py-3 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Yes, of course, we will never share your files with a 3rd party.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>

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
          <p className="text-sm text-gray-400">© 2024 BroocFab. All rights reserved.</p>
        </div>
      </footer>

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
    
  )
}

