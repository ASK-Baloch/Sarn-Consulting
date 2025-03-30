"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const slides = [
  {
    type: "image",
    src: "/tax2.jpg",
    caption: "Welcome to SARN Consulting",
    subcaption: "Your Trusted Partner for Financial Solutions",
  },
  {
    type: "video",
    src: "/tax-video.mp4",
    caption: "Expert Tax Guidance",
    subcaption: "Navigating the complexities of tax season, simplified.",
  },
  {
    type: "image",
    src: "/red-8.jpg",
    caption: "Comprehensive Tax Services",
    subcaption: "We handle all your tax needs with precision and care.",
    description:
      "At SARN Consulting, we go beyond traditional tax services to provide strategic financial solutions tailored to your needs. Our expert team ensures compliance, maximizes savings, and provides ongoing support to keep your business thriving.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(
      () => {
        handleNext();
      },
      window.innerWidth < 768 ? 4000 : 5000
    );
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative min-w-full h-screen flex items-center justify-center"
          >
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

            {slide.type === "image" ? (
              <Image
                src={slide.src}
                alt={`Slide ${index + 1}`}
                priority
                fill
                className={`object-cover opacity-50 blur-sm ${index === 0 ? "object-center sm:object-cover" : ""}`}
              />
            ) : (
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-50 blur-sm"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            )}

            {/* Caption & Subcaption */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className={` text-5xl h-auto font-extrabold drop-shadow-lg ${index === 0 ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500" : "bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"}`}
              >
                {slide.caption}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                className="text-lg sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-2"
              >
                {slide.subcaption}
              </motion.p>
              {index === 0 && (
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => router.push("/about/who-we-are")}
                    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition w-full sm:w-auto"
                  >
                    Read About Us
                  </button>
                  <button
                    onClick={() => router.push("/blogPage")}
                    className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition w-full sm:w-auto"
                  >
                    Read Blogs
                  </button>
                </div>
              )}
              {index === 2 && (
                <div className="mt-6 text-center">
                  <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                    className="text-md sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-6"
                  >
                    {slide.description}
                  </motion.p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() =>
                        document
                          .getElementById("team-section")
                          .scrollIntoView({ behavior: "smooth" })
                      }
                      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                      Meet Our Team
                    </button>
                    <button
                      onClick={() => router.push("/contact")}
                      className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Hidden on Mobile */}
      <div className="hidden md:flex">
        <button
          onClick={handlePrev}
          className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-black/60 text-[#c7cacf] p-6 rounded-full transition hover:bg-blue-800 shadow-xl border-2 border-blue-600 hover:border-blue-300"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-black/60 text-[#ffffff] p-6 rounded-full transition hover:bg-blue-800 shadow-xl border-2 border-blue-600 hover:border-blue-300 "
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default HeroCarousel;
