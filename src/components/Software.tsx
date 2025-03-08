"use client";
import React, { useEffect , useState } from "react";

const Softwares = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: "/peachtree.png", alt: "Peachtree by Sage" },
    { src: "/microsoft.png", alt: "Microsoft Dynamics 365" },
    { src: "/freshbooks.png", alt: "FreshBooks" },
    { src: "/oracle.png", alt: "Oracle NetSuite" },
    { src: "/fbr.png", alt: "FBR POS" },
    { src: "/quickbooks.png", alt: "QuickBooks" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const visibleImages = images
    .slice(currentIndex, currentIndex + 5)
    .concat(images.slice(0, Math.max(0, currentIndex + 5 - images.length)));

  return (
    <div className="w-full bg-gray-200 text-center p-24 shadow-sm">

      <div className="mx-auto max-w-screen-lg flex flex-col items-center">

        <h1 className="text-2xl md:text-4xl font-bold mb-6 mt-10 relative text-gray-800 inline-block">
          <span className="relative z-10 font-normal">SOFTWARES WE USE FOR ACCOUNTING</span>
          <div
            className="absolute -bottom-2 left-1/2 h-1  bg-blue-500"
            style={{
              width: "0%",
              transform: "translateX(-50%)",
              animation: "expand-line 1s forwards",
            }}
          ></div>
        </h1>

        {/* Carousel */}
        <div className="relative overflow-hidden w-full mt-4">
          <div className="flex gap-6 transition-all duration-500 ease-linear items-center justify-center">
            {visibleImages.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={img.alt}
                className={`logo w-36 h-auto transition-opacity duration-500 transform ${index === 5 ? "opacity-0" : "opacity-100"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes expand-line {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Softwares;
