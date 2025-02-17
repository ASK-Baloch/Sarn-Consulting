"use client";

import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

export default function HeroCarousel() {
    return (
        <div className="h-[calc(100vh-8.5vh)] overflow-hidden z-10">
            <Carousel autoplay lazyLoad="ondemand">
                <div className="relative h-screen w-full">
                    <Image
                        src="/red-2.jpg"
                        alt="Slide 1"
                        fill
                        priority
                        className="absolute inset-0 object-cover w-full h-full z-10 opacity-30"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        <div className="flex flex-col items-center gap-4">
                            <h3 className="text-3xl font-medium text-gray-100">
                                We Handle All Your Taxes
                            </h3>
                            <span className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
                                BEST FINANCIAL ADVICE
                            </span>
                        </div>
                        <button className="mt-5 bg-blue-600 text-orange-50 px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 hover:text-orange-500 flex items-center gap-2">
                            <Image
                                src="/icons/down-arrow.png"
                                width={25}
                                height={25}
                                alt="Explore More"
                                className="invert"
                            />
                            Explore More
                        </button>
                    </div>
                </div>

                <div className="relative h-screen w-full">
                    <Image
                        src="/red-8.jpg"
                        alt="Slide 2"
                        fill
                        priority
                        className="absolute inset-0 object-cover w-full h-full z-10 opacity-30"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                        <div className="flex flex-col items-center gap-4">
                            <h3 className="text-3xl font-medium text-gray-100">
                                Tax Consultants of Your Own
                            </h3>
                            <span className="bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition duration-300">
                                Elite Financial Insights
                            </span>
                        </div>
                        <button className="mt-5 bg-blue-600 text-orange-50 px-6 py-2 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 hover:text-orange-500 flex items-center gap-2">
                            <Image
                                src="/icons/down-arrow.png"
                                width={25}
                                height={25}
                                alt="Explore More"
                                className="invert"
                            />
                            Explore More
                        </button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
