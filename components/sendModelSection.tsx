import { FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from "./icons";
import { LinkedinIcon } from "./icons";

export default function SendModelSection() {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#0a0e24] to-[#2c3678] p-8 md:p-20">
      <div className="w-full max-w-2xl space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight text-center">
          Send your model files & Get a Quote
        </h1>
        <p className="text-gray-400 text-center">
          We make sure to provide you the best 3D printing service ensuring the
          print quality. We will manually inspect your 3D model to provide you
          the best price by calculating the material cost and print time.
        </p>
        <div className="flex justify-center space-x-4">
          <div className="group relative">
            <FacebookIcon className="h-8 w-8 text-blue-600 group-hover:scale-110 transition-transform" />
            <div className="absolute top-full mt-2 bg-blue-600 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Facebook
            </div>
          </div>
          <div className="group relative">
            <InstagramIcon className="h-8 w-8 text-pink-600 group-hover:scale-110 transition-transform" />
            <div className="absolute top-full mt-2 bg-pink-600 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              Instagram
            </div>
          </div>
          <div className="group relative">
            <LinkedinIcon className="h-8 w-8 text-blue-500 group-hover:scale-110 transition-transform" />
            <div className="absolute top-full mt-2 bg-blue-500 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              LinkedIn
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 mt-8 items-center">
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#25d366] hover:from-[#2af777] hover:to-[#17823f] to-[#157539] text-white rounded-md p-6 shadow-lg w-full max-w-xs group px-8">
          <PhoneIcon className="h-8 w-8 group-hover:scale-110 transition-transform" />
          <div className="font-semibold text-center">WhatsApp</div>
          <div className="text-lg text-center">070 2534485</div>
          <a
            href="https://api.whatsapp.com/send/?phone=94702534485&text=Hi%21+I+have+a+question+about...&type=phone_number&app_absent=0"
            target="_blank"
            className="text-white bg-transparent border-none group-hover:animate-typing rounded-md px-4 py-2 mt-4"
          >
            Click to send
          </a>
        </div>
        <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#007bff] hover:from-[#268fff] to-[#00458f] hover:to-[#025ab8] text-white rounded-md p-6 shadow-lg w-full max-w-xs group">
          <MailIcon className="h-8 w-8 group-hover:scale-110 transition-transform" />
          <div className="font-semibold text-center">Email</div>
          <div className="text-lg text-center">brooc3dprinting@gmail.com</div>
          <a
            href="mailto:brooc3dprinting@gmail.com"
            className="text-white bg-transparent border-none group-hover:animate-typing rounded-md px-4 py-2 mt-4"
          >
            Click to send
          </a>
        </div>
      </div>
    </div>
  );
}
