import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { StarIcon } from "./icons";

export default function ReviewsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="px-10 md:px-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Hear from our satisfied customers about their experience with
            BroocFab.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
          <Card className="py-5 bg-gradient-to-r from-[#000000] to-[#181d33] hover:from-[#000030] hover:to-[#181d33]">
            <CardContent>
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12 border">
                  <AvatarImage alt="@customer1" src="/placeholder-user.jpg" />
                  <AvatarFallback>C1</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-semibold">Unknown Client</h4>
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
                &quot;BroocFab&apos;s customer service is top-notch! They
                listened to my needs and delivered exactly what I envisioned. I
                couldn&apos;t be happier with the outcome and will definitely be
                using their services again.&quot;
              </p>
            </CardContent>
          </Card>
          <Card className="py-5 bg-gradient-to-r from-[#000000] to-[#181d33] hover:from-[#000030] hover:to-[#181d33]">
            <CardContent>
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12 border">
                  <AvatarImage alt="@customer2" src="/placeholder-user.jpg" />
                  <AvatarFallback>C2</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-semibold">Unknown Client</h4>
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
                &quot;The precision and quality of BroocFab&apos;s 3D prints are
                incredible. Every project I have done with them has exceeded my
                expectations. Highly recommend for any professional looking for
                reliable 3D printing services.&quot;
              </p>
            </CardContent>
          </Card>
          <Card className="py-5 bg-gradient-to-r from-[#000000] to-[#181d33] hover:from-[#000030] hover:to-[#181d33]">
            <CardContent>
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12 border">
                  <AvatarImage alt="@customer3" src="/placeholder-user.jpg" />
                  <AvatarFallback>C3</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-semibold">Unknown Client</h4>
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
                &quot;BroocFab&apos;s team is incredibly knowledgeable and
                helpful. They walked me through the entire process, ensuring
                that my project was a success. The final product was exactly
                what I needed.&quot;
              </p>
            </CardContent>
          </Card>
          <Card className="py-5 bg-gradient-to-r from-[#000000] to-[#181d33] hover:from-[#000030] hover:to-[#181d33]">
            <CardContent>
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12 border">
                  <AvatarImage alt="@customer4" src="/placeholder-user.jpg" />
                  <AvatarFallback>C4</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-semibold">Unknown Client</h4>
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
                &quot;I was amazed by the turnaround time and quality of the
                prints from BroocFab. They have a keen eye for detail and ensure
                that every aspect of the print is perfect. I wouldn&apos;t go
                anywhere else for my 3D printing needs.&quot;
              </p>
            </CardContent>
          </Card>
          <Card className="py-5 bg-gradient-to-r from-[#000000] to-[#181d33] hover:from-[#000030] hover:to-[#181d33]">
            <CardContent>
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12 border">
                  <AvatarImage alt="@customer5" src="/placeholder-user.jpg" />
                  <AvatarFallback>C5</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-semibold">Unknown Client</h4>
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
                &quot;Working with BroocFab has been an absolute pleasure. Their
                expertise and attention to detail have helped me achieve
                fantastic results in my projects. I highly recommend their
                services to anyone needing high-quality 3D prints.&quot;
              </p>
            </CardContent>
          </Card>
          <Card className="py-5 bg-gradient-to-r from-[#000000] to-[#181d33] hover:from-[#000030] hover:to-[#181d33]">
            <CardContent>
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12 border">
                  <AvatarImage alt="@customer6" src="/placeholder-user.jpg" />
                  <AvatarFallback>C6</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="font-semibold">Unknown Client</h4>
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
                &quot;The team at BroocFab exceeded my expectations with their
                exceptional service and attention to detail. The quality of
                their prints is second to none, and they delivered ahead of
                schedule. I highly recommend them for all your 3D printing
                needs.&quot;
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
