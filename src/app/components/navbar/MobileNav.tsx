"use client";

import React, { useState } from "react";
import {  Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";




const MobileNavbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isSerciceCard, setServiceCard] = useState(false)
  const [isAboutCard, setAboutCard] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-gray-200  shadow-md drop-shadow-lg p-4">
      <div className="flex items-center px-5 p-2 justify-between">
        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold text-blue-500">
            <div className="text-2xl font-bold text-orange-500">
              SARN <span className="text-black">Consulting</span>
            </div>
          </Link>
        </div>
      
        <div className="flex justify-end ">
          <Button
            type="primary "
            icon={<MenuOutlined />}
            onClick={() => setDrawerOpen(true)}
          />
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen} 
      >
        <div
          className=""
          onClick={() => setDrawerOpen(false)}
        >
          <div className=" flex flex-col gap-12 font-bold  ">
            <Link
              href="/"
              className="text-black  hover:text-orange-500 hover:underline hover:scale-110 ml-3 "
            >
              Home
            </Link>
            <div className="relative  ml-3 cursor-pointer"
              onMouseEnter={() => setAboutCard(true)}
              onMouseLeave={() => setAboutCard(false)}>

              <span className=" text-black font-medium hover:text-orange-500 hover:underline hover:scale-110 ">About</span>
              {isAboutCard && (
                <div className="absolute   w-56 rounded-md shadow-lg bg-white  text-black flex flex-col  z-5  ">
                  <Link href="#" className=" px-4 py-2 hover:text-orange-500 hover:underline hover:scale-110">Who We Are</Link>
                  <Link href="#" className=" px-4 py-2 hover:text-orange-500 hover:underline hover:scale-110">Our Approach</Link>

                </div>
              )}

            </div>
            <div className="relative  ml-3 cursor-pointer"
              onMouseEnter={() => setServiceCard(true)}
              onMouseLeave={() => setServiceCard(false)}>

              <span className=" text-black font-medium hover:text-orange-500 hover:underline hover:scale-110">Services</span>
              {isSerciceCard && (


                <div className="absolute   py-2 w-56 rounded-md shadow-lg bg-white  text-black flex flex-col flex-1 z-4 justify-end">
                  <Link href="#" className=" px-4 py-2 hover:text-orange-500 hover:underline hover:scale-110">Our Approach</Link>
                  <Link href="#" className=" px-4 py-2 hover:text-orange-500 hover:underline hover:scale-110">Future as We See</Link>
                  <Link href="#" className=" px-4 py-2 hover:text-orange-500 hover:underline hover:scale-110">Range of Services</Link>
                  <Link href="#" className=" px-4 py-2 hover:text-orange-500 hover:underline hover:scale-110">Practice Area</Link>
                  <Link href="#" className=" px-4 py-2 hover:text-orange-500 hover:underline hover:scale-110">Sector Specialization</Link>
                  <Link href="#" className=" px-4 py-2 hover:text-orange-500 hover:underline hover:scale-110">Core Team</Link>
                  <Link href="#" className=" px-4 py-2 hover:text-orange-500 hover:underline hover:scale-110">Who We Are</Link>
                </div>


              )}

            </div>
            <Link
              href="/blog"
              className="text-black font-medium hover:text-orange-500 hover:underline hover:scale-110 ml-3"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-black font-medium hover:text-orange-500 hover:underline hover:scale-110 ml-3"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-5">
        

        </div>
      </Drawer>
    </header>
  );
};

export default MobileNavbar;
