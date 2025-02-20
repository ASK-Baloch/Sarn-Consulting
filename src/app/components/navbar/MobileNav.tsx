"use client";

import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import aboutData from "@/data/about.json";
import servicesData from "@/data/service.json";

const MobileNavbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isServiceCard, setServiceCard] = useState(false);
  const [isAboutCard, setAboutCard] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-200 shadow-md drop-shadow-lg p-4">
      <div className="flex items-center px-5 p-2 justify-between">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl text-black">
            <Image src="/SARNLOGO.jpg" alt="logo" height={100} width={100} />
          </Link>
        </div>

        <div className="flex justify-end">
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={() => setDrawerOpen(true)}
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <div className="flex flex-col gap-8 font-bold">
          <Link
            href="/"
            className="text-black hover:text-[#3C73DA]  hover:scale-110 ml-3"
            onClick={() => setDrawerOpen(false)}
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative ml-3 cursor-pointer"
            onClick={() => setAboutCard(!isAboutCard)}
          >
            <span className="text-black font-medium hover:text-[#3C73DA]  hover:scale-110">
              About
            </span>
            {isAboutCard && (
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white text-black flex flex-col z-50">
                {aboutData.about.map((about) => (
                  <Link
                    key={about.slug}
                    href={`/about/${about.slug}`}
                    className="px-4 py-2 hover:text-[#3C73DA]  hover:scale-110"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {about.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative ml-3 cursor-pointer"
            onClick={() => setServiceCard(!isServiceCard)}
          >
            <span className="text-black font-medium hover:text-[#3C73DA]  hover:scale-110">
              Services
            </span>
            {isServiceCard && (
              <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white text-black flex flex-col z-50">
                {servicesData.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="px-4 py-2 hover:text-[#3C73DA]  hover:scale-110"
                    onClick={() => setDrawerOpen(false)}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="text-black font-medium hover:text-[#3C73DA]  hover:scale-110 ml-3"
            onClick={() => setDrawerOpen(false)}
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="text-black font-medium hover:text-[#3C73DA]  hover:scale-110 ml-3"
            onClick={() => setDrawerOpen(false)}
          >
            Contact
          </Link>
        </div>
      </Drawer>
    </header>
  );
};

export default MobileNavbar;
