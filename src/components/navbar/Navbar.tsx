"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Grid } from "antd";
import MobileNavbar from "./MobileNav";
import aboutData from "@/data/about.json";
import servicesData from "@/data/service.json";

const { useBreakpoint } = Grid;

const DropdownItem = ({ service }) => {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setSubmenuOpen(true)}
      onMouseLeave={() => setSubmenuOpen(false)}
    >
      {service.subItems ? (
        <div className="px-4 py-2 flex justify-between items-center text-black font-normal hover:bg-[#3C73DA] hover:text-white">
          {service.label}
          <span className="ml-2">&raquo;</span>
        </div>
      ) : (
        <Link
          href={`/services/${service.slug}`}
          className="px-4 py-2 flex text-black font-normal hover:bg-[#3C73DA] hover:text-white"
        >
          {service.label}
        </Link>
      )}
      {service.subItems && isSubmenuOpen && (
        <div className="absolute top-0 left-full ml-1 py-2 w-56 rounded-md shadow-lg bg-white text-black flex flex-col">
          {service.subItems.map((subItem) => (
            <Link
              key={subItem.slug}
              href={`/services/${subItem.slug}`}
              className="px-4 py-2 hover:bg-[#3C73DA] hover:text-white"
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
    <header className="sticky top-0 z-10 bg-white shadow-md drop-shadow-lg p-4 flex items-center justify-between lg:px-16 md:px-12 sm:px-8 px-4">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link href="/">
          <Image
            src="/sarn.jpg"
            alt="logo"
            height={100}
            width={100}
            className="w-auto h-auto"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center">
        <div className="flex space-x-1 lg:space-x-1">
          <Link
            href="/"
            className="text-black font-medium hover:scale-110 px-4 py-2 hover:bg-[#3C73DA] hover:text-white rounded-md"
          >
            Home
          </Link>

          <div
            className="relative cursor-pointer px-4 py-2"
            onMouseEnter={() => setAboutCard(true)}
            onMouseLeave={() => setAboutCard(false)}
          >
            <span className="text-black font-medium hover:text-[#3C73DA] hover:scale-110">
              About
            </span>
            {isAboutCard && (
              <div className="absolute left-0 w-56 rounded-md shadow-lg bg-white text-black flex flex-col">
                {aboutData.about.map((about) => (
                  <Link
                    key={about.slug}
                    href={`/about/${about.slug}`}
                    className="px-4 py-2 hover:bg-[#3C73DA] hover:text-white"
                  >
                    {about.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative cursor-pointer px-4 py-2"
            onMouseEnter={() => setServiceCard(true)}
            onMouseLeave={() => setServiceCard(false)}
          >
            <span className="text-black font-medium hover:text-[#3C73DA] hover:scale-110">
              Services
            </span>
            {isServiceCard && (
              <div className="absolute left-0 w-56 rounded-md shadow-lg font-normal bg-white text-black flex flex-col">
                {servicesData.services.map((service) => (
                  <DropdownItem key={service.slug} service={service} />
                ))}
              </div>
            )}
          </div>

          <Link
            href="/blogPage"
            className="px-4 py-2 text-black font-medium hover:bg-[#3C73DA] hover:text-white rounded-md"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 text-black font-medium hover:bg-[#3C73DA] hover:text-white rounded-md"
          >
            Contact
          </Link>
          <div className="flex ">
            <Link
              href="/taxcalculator"
              className="px-4 py-2 text-black font-medium hover:bg-[#3C73DA] hover:text-white rounded-md"
            >
              Tax Calculator
            </Link>
            <Link
              href="/usaservices"
              className="px-4 py-2 flex items-center space-x-1 bg-gradient-to-r from-blue-800 via-white to-red-800 text-transparent bg-clip-text text-lg font-bold rounded-md transition-all duration-300 hover:bg-clip-border hover:text-white "
            >
              <Image
                src="/us-flag.png"
                alt="US Flag"
                width={24}
                height={18}
                className="w-auto h-auto rounded-lg border border-gray-300 shadow-sm"
              />
              <span>USA Services</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );

  return screens.md ? renderDesktopNav() : <MobileNavbar />;
}
