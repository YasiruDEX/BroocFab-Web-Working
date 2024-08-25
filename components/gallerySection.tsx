export default function GallerySection() {
  return (
    <section className="w-full py-12 md:py-24 lg:pt-32 lg:pb-0 bg-gray-100 dark:bg-gray-800">
      <div className="px-10 md:px-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Gallery of 3D Printed Creations
          </h2>
          <p className="max-w-[700px] mx-auto text-gray-500 md:text-xl dark:text-gray-400">
            Explore a selection of our 3D printed projects, showcasing the
            versatility and quality of our services.
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
            src="/show6.png"
            width="600"
          />
        </div>
      </div>
    </section>
  );
}
