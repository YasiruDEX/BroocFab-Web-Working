import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { CuboidIcon, GaugeIcon, PaletteIcon, ClockIcon, WalletIcon, AwardIcon } from "@/components/icons"

export default function CardSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-3 lg:px-20 md:px-10 sm:px-3">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose BroocFab?
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            BroocFab offers a range of benefits that make us the top choice for
            your 3D printing needs.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          <Card>
            <CardHeader>
              <CuboidIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold">High-Quality Prints</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our state-of-the-art 3D printers and skilled technicians ensure
                every print is of the highest quality.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <GaugeIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold">Customizable Solutions</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We work closely with you to understand your unique needs and
                create custom 3D printed solutions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <PaletteIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold">Innovative Designs</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our team of designers and engineers are constantly pushing the
                boundaries of 3D printing to create innovative designs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <ClockIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold">Fast Turnaround</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We understand the importance of speed, and we work efficiently
                to deliver your 3D printed items on time.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <WalletIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold">Affordable Pricing</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our pricing is competitive and transparent, ensuring you get
                exceptional value for your investment.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <AwardIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold">Award-Winning Service</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our commitment to excellence has earned us recognition and
                awards in the 3D printing industry.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
