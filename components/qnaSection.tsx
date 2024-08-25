import {
  CollapsibleTrigger,
  CollapsibleContent,
  Collapsible,
} from "@/components/ui/collapsible";
import { ChevronDownIcon } from "./icons";
import { Button } from "@/components/ui/button";

export default function QnaSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
      <div className="container max-w-4xl px-4 md:px-6">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <h4 className="text-lg font-bold tracking-tighter sm:text-lg md:text-lg text-gray-500 md:text-lg/relaxed lg:text-base/relaxed lg:text-lg/relaxed dark:text-gray-400">
            Get answers to the most common questions about our 3D printing
            services.
          </h4>
        </div>
        <div className="mt-12 space-y-4">
          <Collapsible className="rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between space-x-4 px-4 py-3">
              <h4 className="text-lg font-semibold">
                What file formats can I send for 3D printing?
              </h4>
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
              <h4 className="text-lg font-semibold">
                How long does it take to receive the quotation?
              </h4>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t border-gray-200 px-4 py-3 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We are trying our best to deliver it at the earliest, worst case
                would be in 24 hours maximum. If not, please contact us via
                0702534485.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between space-x-4 px-4 py-3">
              <h4 className="text-lg font-semibold">
                What payment types are accepted?
              </h4>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t border-gray-200 px-4 py-3 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We accept bank transfers, හෙළPay, VISA, MASTER, AMEX cards,
                eZcash and mCash, Frimi, iPay, Sampath Bank (Vishwa) or HNB Bank
                online transfers.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between space-x-4 px-4 py-3">
              <h4 className="text-lg font-semibold">
                How long will it take to deliver the print?
              </h4>
              <CollapsibleTrigger asChild>
                <Button size="sm" variant="ghost">
                  <ChevronDownIcon className="h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
                </Button>
              </CollapsibleTrigger>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-t border-gray-200 px-4 py-3 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We deliver 3D printed objects to any part of Sri Lanka. It will
                take 1-2 days to receive the objects after print completion.
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Collapsible className="rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <CollapsibleTrigger className="flex w-full items-center justify-between space-x-4 px-4 py-3">
              <h4 className="text-lg font-semibold">
                Are my files kept confidential?
              </h4>
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
  );
}
