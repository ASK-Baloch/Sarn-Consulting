"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const slides = [
    {
        type: "image",
        src: "/red-2.jpg",
        caption: "We Are SARN CONSULTING",
    },
    {
        type: "video",
        src: "/tax-video.mp4",
        caption: "Tax Consultants of Your Own",
    },
    {
        type: "image",
        src: "/red-8.jpg",
        caption: "We Handle All Your Taxes",
    },
];

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-[calc(100vh-8.5vh)] overflow-hidden bg-black">
            {/* Slides */}
            <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="relative min-w-full h-[calc(100vh-8.5vh)] flex items-center justify-center"
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                        {slide.type === "image" ? (
                            <Image
                                src={slide.src}
                                alt={`Slide ${index + 1}`}
                                priority
                                fill
                                className="object-cover opacity-30"
                            />
                        ) : (
                            <video
                                className="absolute inset-0 w-full h-full object-cover opacity-30"
                                autoPlay
                                loop
                                muted
                            >
                                <source src={slide.src} type="video/mp4" />
                            </video>
                        )}

                        {/* Caption */}
                        <div className="absolute inset-0 flex items-center justify-center text-center">
                            <h1
                                className={`text-5xl font-bold ${index === 1 ? "text-red-500" : "text-gray-100"
                                    }`}
                            >
                                {slide.caption}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/80 text-white p-3 rounded-full"
            >
                <ChevronLeft size={35} />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/80 text-white p-3 rounded-full"
            >
                <ChevronRight size={35} />
            </button>
        </div>
    );
};

export default HeroCarousel;
