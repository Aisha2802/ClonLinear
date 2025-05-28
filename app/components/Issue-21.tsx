import { Leaf } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="bg-black text-white w-full px-6 py-12 space-y-40">
      <div className="flex justify-center mb-6">
        <div className="hover:bg-neutral-900 bg-[#0f1011] text-sm px-6 py-4 rounded-full flex items-center space-x-2">
          <Leaf className="text-green-400 w-4 h-4" />
          <a
            href="https://stripe.com/climate"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linear contributes 1% of your subscription to remove CO₂ from the atmosphere through Stripe Climate
          </a>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center text-center md:text-left ">
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Plan the present. Build the future.
        </h1>

        <div className="mt-6 md:mt-0 flex space-x-3">
        <a
            href="https://linear.app/contact/sales"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1F1F1F] border border-[#2E2E2E] text-white font-medium px-5 py-2 rounded-md hover:bg-[#2a2a2a] transition"
          >
            Talk to sales
          </a>
          <a
            href="https://linear.app/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E6E6E6] text-black font-medium px-5 py-2 rounded-md hover:bg-[#d4d4d4] transition"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  );
}
