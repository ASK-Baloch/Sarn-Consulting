import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3C73DA] mb-6">
          Sorry, this page is still under development.
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-10">
          Sorry for the inconvenience. You can use our Tax Calculator or contact us.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-md">
        <Link href="/taxcalculator">
          <Button className="w-full text-white bg-[#3C73DA] font-medium hover:scale-105 transition-transform">
            Calculate Your Taxes !!!
          </Button>
        </Link>
        <Link href="/contact">
          <Button className="w-full text-white bg-[#3C73DA] font-medium hover:scale-105 transition-transform">
            Contact Us
          </Button>
        </Link>
        <Link href="/blogPage">
          <Button className="w-full text-white bg-[#3C73DA] font-medium hover:scale-105 transition-transform">
            Visit our Blogs !!!
          </Button>
        </Link>
        <Link href="/">
          <Button className="w-full text-white bg-[#75829b] font-medium hover:scale-105 transition-transform">
            Visit our Home Page
          </Button>
        </Link>
      </div>
    </div>
  );
}
