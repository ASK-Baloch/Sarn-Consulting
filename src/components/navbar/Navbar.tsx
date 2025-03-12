"use client";

import React from "react";
import { Grid } from "antd";

import Link from "next/link";
import MobileNavbar from "./MobileNav";
import { useState } from "react";
import Image from "next/image";
import aboutData from "@/data/about.json";
import servicesData from "@/data/service.json";
const { useBreakpoint } = Grid;

const DropdownItem = ({ service }: any) => {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}
    >
      {service.subItems ? (
        <div className="px-4 py-4 flex justify-between items-center text-center text-black font-medium hover:text-[#3C73DA] hover:scale-110">
          {service.label}
          <span className="ml-2">&raquo;</span>
        </div>
      ) : (
        <Link
          href={`/services/${service.slug}`}
          className="px-4 py-2 flex  text-center text-black font-medium hover:text-[#3C73DA] hover:scale-110 "
        >
          {service.label}
        </Link>
      )}
      {service.subItems && isSubmenuOpen && (
        <div className="absolute top-0 left-full ml-1 py-2 w-56 rounded-md shadow-lg bg-white text-black flex flex-col gap-1">
          {service.subItems.map((subItem: any) => (
            <Link
              key={subItem.slug}
              href={`/services/${subItem.slug}`}
              className="px-4 py-2 hover:text-[#3C73DA] hover:scale-110"
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default function Navbar() {
  const screens = useBreakpoint();
  const [isServiceCard, setServiceCard] = useState(false);
  const [isAboutCard, setAboutCard] = useState(false);

  const renderDesktopNav = () => (
    // <header className="sticky top-0 z-10 bg-white shadow-md drop-shadow-lg p-4 items-center justify-between flex ">
    //   <div className="ml-16">
    //     <Link href="/" className="text-2xl  text-black">
    //       <Image src={"/SARNLOGO.jpg"} alt="logo" height={100} width={100} />
    //     </Link>
    //   </div>
    //   <div className="flex  mr-10">
    //     <div className="flex  mr-16 justify-between gap-16 ">
    //       <Link
    //         href="/"
    //         className="text-black font-medium hover:text-[#3C73DA]  hover:scale-110  "
    //       >
    //         Home
    //       </Link>

    //       <div
    //         className="relative ml-3 cursor-pointer"
    //         onMouseEnter={() => setAboutCard(true)}
    //         onMouseLeave={() => setAboutCard(false)}
    //       >
    //         <span className="text-black font-medium hover:text-[#3C73DA] hover:scale-110">
    //           About
    //         </span>
    //         {isAboutCard && (
    //           <div className="absolute left-0 py-2 w-56 rounded-md shadow-lg bg-white text-black flex flex-col gap-1">
    //             {aboutData.about.map((about) => (
    //               <Link
    //                 key={about.slug}
    //                 href={`/about/${about.slug}`}
    //                 className="px-4 py-2 hover:text-[#3C73DA]  hover:scale-110"
    //               >
    //                 {about.label}
    //               </Link>
    //             ))}
    //           </div>
    //         )}
    //       </div>

    //       {/* <div className="relative ml-3 cursor-pointer"
    //                         onMouseEnter={() => setServiceCard(true)}
    //                         onMouseLeave={() => setServiceCard(false)}
    //                         >
    //                         <span className="text-black font-medium hover:text-[#3C73DA] hover:scale-110">
    //                             Services
    //                         </span>
    //                         {isServiceCard && (
    //                             <div className="absolute left-0 py-2 w-56 rounded-md shadow-lg bg-white text-black flex flex-col gap-1">
    //                             {servicesData.services.map((service) => (
    //                                 <Link
    //                                 key={service.slug}
    //                                 href={`/services/${service.slug}`}
    //                                 className="px-4 py-2 hover:text-[#3C73DA]  hover:scale-110"
    //                                 >
    //                                 {service.label}
    //                                 </Link>
    //                             ))}
    //                             </div>
    //                         )}
    //                     </div> */}
    //       <div
    //         className="relative ml-3 cursor-pointer"
    //         onMouseEnter={() => setServiceCard(true)}
    //         onMouseLeave={() => setServiceCard(false)}
    //       >
    //         <span className="text-black font-medium hover:text-[#3C73DA] hover:scale-110">
    //           Services
    //         </span>
    //         {isServiceCard && (
    //           <div className="absolute left-0 py-2 w-56 rounded-md shadow-lg bg-white text-black flex flex-col gap-1">
    //             {servicesData.services.map((service) => (
    //               <DropdownItem key={service.slug} service={service} />
    //             ))}
    //           </div>
    //         )}
    //       </div>

    //       <Link
    //         href="/blogPage"
    //         className="text-black font-medium hover:text-[#3C73DA]  hover:scale-110  ml-3"
    //       >
    //         Blog
    //       </Link>
    //       <Link
    //         href="/contact"
    //         className="text-black font-medium hover:text-[#3C73DA]  hover:scale-110 ml-3 "
    //       >
    //         Contact
    //       </Link>
    //       <Link
    //         href="/taxcalculator"
    //         className="text-black font-medium hover:text-[#3C73DA]  hover:scale-110 ml-3 "
    //       >
    //         Tax Calulator
    //       </Link>
    //     </div>
    //   </div>
    // </header>
    <header className="sticky top-0 z-10 bg-white shadow-md drop-shadow-lg p-4 flex items-center justify-between md:px-16">
  {/* Logo */}
  <div className="flex-shrink-0">
    <Link href="/">
      <Image src="/SARNLOGO.jpg" alt="logo" height={100} width={100}   className="w-auto h-auto" />
    </Link>
  </div>

  {/* Desktop Navigation */}
  <nav className="hidden md:flex space-x-10">
    <Link
      href="/"
      className="text-black font-medium hover:text-[#3C73DA] hover:scale-110"
    >
      Home
    </Link>

    {/* About Dropdown */}
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setAboutCard(true)}
      onMouseLeave={() => setAboutCard(false)}
    >
      <span className="text-black font-medium hover:text-[#3C73DA] hover:scale-110">
        About
      </span>
      {isAboutCard && (
        <div className="absolute left-0  w-56 rounded-md shadow-lg bg-white text-black flex flex-col gap-1">
          {aboutData.about.map((about) => (
            <Link
              key={about.slug}
              href={`/about/${about.slug}`}
              className="px-4 py-2 hover:text-[#3C73DA] hover:scale-110"
            >
              {about.label}
            </Link>
          ))}
        </div>
      )}
    </div>

    {/* Services Dropdown */}
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setServiceCard(true)}
      onMouseLeave={() => setServiceCard(false)}
    >
      <span className="text-black font-medium hover:text-[#3C73DA] hover:scale-110">
        Services
      </span>
      {isServiceCard && (
        <div className="absolute left-0  w-56 rounded-md shadow-lg bg-white text-black flex flex-col gap-1">
          {servicesData.services.map((service) => (
            <DropdownItem key={service.slug} service={service} />
          ))}
        </div>
      )}
    </div>

    <Link
      href="/blogPage"
      className="text-black font-medium hover:text-[#3C73DA] hover:scale-110"
    >
      Blog
    </Link>
    <Link
      href="/contact"
      className="text-black font-medium hover:text-[#3C73DA] hover:scale-110"
    >
      Contact
    </Link>
    <Link
      href="/taxcalculator"
      className="text-black font-medium hover:text-[#3C73DA] hover:scale-110"
    >
      Tax Calculator
    </Link>
  </nav>
</header>
  );

  return screens.md ? renderDesktopNav() : <MobileNavbar />;
}
