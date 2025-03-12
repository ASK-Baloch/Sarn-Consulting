"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
    {
        quote:
            "SARN CONSULTING is a trusted partner for anyone seeking expert tax advice and services. Their professionalism, expertise, and dedication to client success make them a top choice in the industry.",
        name: "Nazim Iqbal",
        imagesrc:"/person-1.jpg",
        specialization:"Gray Suit Adviser"
    },
    {
        quote:
            "Credfino has helped me rebrand my accounting practice and helped me with content marketing in a way that has resulted in phenomenal engagement and organic lead generation.",
        name: "Amy Richardson",
        imagesrc:"/person-2.jpg",
        specialization:"Summit Edge Consulting "
    },
    {
        quote:
            "Working with the team has been a fantastic experience! Their dedication to our project's success was unmatched, and we highly recommend them.",
        name: "John Doe",
        imagesrc:"/person-3.jpg",
        specialization:"Blue Ocean Consulting"
    },
];

const TestimonialMobileView = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-center bg-gray-100 py-10 px-4 ">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 text-center">
                OUR GREAT CLIENTS
            </h3>

            <div className="relative w-full max-w-lg overflow-hidden p-10">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="min-w-full bg-white rounded-xl p-6 shadow-lg text-center relative "
                        >
                            <div className="absolute top-[-36px] left-1/2 transform -translate-x-1/2 bg-white p-2 mb-2 rounded-full shadow-md">
                                <Image 
                                    src={testimonial.imagesrc}
                                    height={80}
                                    width={80}
                                    className="rounded-full border-2 border-gray-300" 
                                    alt="image"
                                />
                            </div>
                            <p className="text-gray-700 mt-16 mb-4 font-medium italic">&quot;{testimonial.quote}&quot;</p>
                            <div className="flex flex-col justify-center items-center">
                                <div className="font-semibold text-[#3C73DA] text-lg">{testimonial.name}</div>
                                <div className="text-gray-700 text-sm">{testimonial.specialization}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex space-x-2 mt-4">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-3 w-3 rounded-full transition-all duration-500 ${currentIndex === index ? "bg-[#3C73DA] w-5" : "bg-gray-400"}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default TestimonialMobileView;