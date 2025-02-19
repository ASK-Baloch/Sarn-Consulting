"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function FactsAndStats() {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const statsIcons = [
        { label: "Individuals", value: 173, icon: "/user-icon.svg" },
        { label: "Sole Proprietor", value: 41, icon: "/home-icon.svg" },
        { label: "Partnership", value: 19, icon: "/partnership-icon.svg" },
        { label: "Private Limited", value: 34, icon: "/company-icon.svg" },
    ];

    return (
        <div className="bg-gray-200 text-black overflow-hidden">
            <div className="py-12">
                <div className="max-w-6xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-8 relative inline-block">
                        Facts and Figures
                        <div className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-1 bg-red-500 mt-2 ${inView ? "animate-fill-from-center" : ""}`} />
                    </h2>
                    <p className="mb-1 text-black">
                        Tax compliance can be a challenge in Pakistan due to factors such as complex tax laws. The government has been implementing various measures to improve tax compliance, including reforms and automation. <span className="font-semibold text-[#3C73DA]">“SARN Consulting”</span>
                    </p>
                </div>
            </div>
            <div ref={sectionRef} className="relative py-5">
                <div className="absolute left-[25rem] top-0 w-[30rem] h-1 bg-red-900"></div>
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {statsIcons.map((stat, index) => {
                        const progress = (stat.value / 200) * 100;
                        const strokeDasharray = 2 * Math.PI * 15.9155;
                        const strokeDashoffset = strokeDasharray - (strokeDasharray * progress) / 100;

                        return (
                            <div key={index} className="flex flex-col items-center space-y-4 bg-gray-800 p-6 rounded-lg shadow-md">
                                <div className="relative">
                                    <svg className="w-20 h-20" viewBox="0 0 36 36">
                                        <path className="text-gray-300" d="M18 2.0845a15.9155 15.9155 0 1 1 0 31.831a15.9155 15.9155 0 1 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" />
                                        <path className="text-red-500" d="M18 2.0845a15.9155 15.9155 0 1 1 0 31.831a15.9155 15.9155 0 1 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray={strokeDasharray} strokeDashoffset={inView ? strokeDashoffset : strokeDasharray} strokeLinecap="round" style={{ transition: "stroke-dashoffset 2s ease-in-out" }} />
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Image src={stat.icon} alt={stat.label} width={56} height={56} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-red-500">{stat.value}</h3>
                                <p className="text-gray-400 uppercase">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
