"use client";
import TestimonialCard from "./TestimonialCard";
import TestimonialMobileView from "./testimonialMobileView";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };

    handleResize();     window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return <TestimonialMobileView />;
  }

  return (
   <div className = "w-full  mt-10  bg-gray-200 shadow-sm flex flex-col p-3" >


      <div className="flex p-4">     
        <div className="flex flex-col relative -top-32 ">
          <TestimonialCard
            
            heading="Highly recommend the team"
            quote="&quot;SARN CONSULTING is a trusted partner for anyone seeking expert tax advice and services. Their professionalism, expertise, and dedication to client success make them a top choice in the industry.&quot;"
            name="Nazim Iqbal"
            imagesrc="/person-1.jpg"
            specialization="Gray Suit Adviser"
          />
          <TestimonialCard
            heading="Professional and Efficient Service"
            quote="&quot;Recently I employed the services of SARN, a company specializing in tax finances. There representative sat with me and helped me sort out my firms jumbled up paperwork. I found them to be very professional and efficient. I would not hesitate to to recommend them to anyone.&quot;"
            name="Adil Mehmood"
            imagesrc="/person-2.jpg"
            specialization="Summit Edge Consulting"
          />
        </div>

        <div>
          <TestimonialCard
            heading="Great Service and Long-term Reliability"
            quote="&quot;Recommended. Great service. Mr. Anees has been bookkeeping and filing tax records for my business since last 2 years. He and his team are very professional.Best tax consultant. We are using their services for the last 10 years and always found them honest and professional.&quot;"
            name="Ahmed Hussain"
            imagesrc="/person-3.jpg"
            specialization="Blue Ocean Consultin"
          />
          <TestimonialCard
            heading="Professional and Efficient Service"
            quote="&quot;Recommended. Great service. Mr. Anees has been bookkeeping and filing tax records for my business since last 2 years. He and his team are very professional.Best tax consultant. We are using their services for the last 10 years and always found them honest and professional.&quot;"
            name="Ahmed Hussain"
            imagesrc="/person-3.jpg"
            specialization="Blue Ocean Consultin"
          />
        </div>
      </div>
       </div >
  );
};

export default Testimonial;
