"use client";
import TestimonialCard from "./TestimonialCard";
import TestimonialMobileView from "./testimonialMobileView";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on first load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <TestimonialMobileView />;
  }

  return (
   <div className = "w-full max-h-screen bg-gray-200 shadow-sm flex flex-col p-3" >


      <div className="flex p-4">
        <div className="flex flex-col relative -top-36 cursor-pointer">
          <TestimonialCard
            heading="Highly recommend the team"
            quote="&quot;SARN CONSULTING is a trusted partner for anyone seeking expert tax advice and services. Their professionalism, expertise, and dedication to client success make them a top choice in the industry.&quot;"
            name="Nazim Iqbal"
          />
          <TestimonialCard
            heading="Highly recommend the team"
            quote="&quot;SARN CONSULTING is a trusted partner for anyone seeking expert tax advice and services. Their professionalism, expertise, and dedication to client success make them a top choice in the industry.&quot;"
            name="Nazim Iqbal"
          />
        </div>

        <div>
          <TestimonialCard
            heading="Highly recommend the team"
            quote="&quot;SARN CONSULTING is a trusted partner for anyone seeking expert tax advice and services. Their professionalism, expertise, and dedication to client success make them a top choice in the industry.&quot;"
            name="Iqbal"
          />
        </div>
      </div>
       </div >
  );
};

export default Testimonial;
