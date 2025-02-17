"use client";

import React from "react";
import { Grid } from "antd";

import Link from "next/link";
import MobileNavbar from "./MobileNav";
import { useState } from 'react'
const { useBreakpoint } = Grid;

export default function Navbar() {
    const screens = useBreakpoint();
    const [isSerciceCard, setServiceCard] = useState(false)
    const [isAboutCard, setAboutCard] = useState(false)
   


    const renderDesktopNav = () => (
        <header className="sticky top-0 z-10 bg-gray-100 shadow-md drop-shadow-lg p-4 items-center justify-between flex ">
     
                <div className="ml-16">
                    <Link href="/" className="text-2xl  text-black">
                        <div className="text-2xl font-medium text-orange-500 flex-wrap">
                            SARN <span className="text-black">Consulting</span>
                        </div>

                    </Link>
                </div>
                <div className="flex  mr-10">
                <div className="flex  mr-16 justify-between gap-16 ">

                        <Link href="/" className="text-black font-medium hover:text-orange-500 hover:underline hover:scale-110  ">
                            Home
                        </Link>
                        <div className="relative  ml-3 cursor-pointer"
                            onMouseEnter={() => setAboutCard(true)}
                            onMouseLeave={() => setAboutCard(false)}>

                            <span className=" text-black font-medium hover:text-orange-500  hoverhover:scale-110">About</span>
                          {isAboutCard && (
                                <div className="absolute left-0  py-2 w-56 rounded-md shadow-lg bg-white  text-black flex flex-col gap-1 :">
                                    <Link href="#" className=" px-4 py-2 :bg-gray-200 hover:text-orange-500 hover:underline hover:scale-110">Who We Are</Link>
                                    <Link href="#" className=" px-4 py-2 :bg-gray-200 hover:text-orange-500 hover:underline hover:scale-110">Our Approach</Link>
                                
                                </div>
                          )} 
                          
                        </div>

                        <div className="relative  ml-3 cursor-pointer"
                            onMouseEnter={() => setServiceCard(true)}
                            onMouseLeave={() => setServiceCard(false)}>

                            <span className=" text-black font-medium hover:text-orange-500  hover:scale-110">Services</span>
                            {isSerciceCard && (


                                <div className="absolute left-0  py-2 w-56 rounded-md shadow-lg bg-white  text-black flex flex-col gap-1 :">
                                    <Link href="#" className=" px-4 py-2 :bg-gray-200 hover:text-orange-500 hover:underline hover:scale-110">Who We Are</Link>
                                    <Link href="#" className=" px-4 py-2 :bg-gray-200 hover:text-orange-500 hover:underline hover:scale-110">Our Approach</Link>
                                    <Link href="#" className=" px-4 py-2 :bg-gray-200 hover:text-orange-500 hover:underline hover:scale-110">Future as We See</Link>
                                    <Link href="#" className=" px-4 py-2 :bg-gray-200 hover:text-orange-500 hover:underline hover:scale-110">Range of Services</Link>
                                    <Link href="#" className=" px-4 py-2 :bg-gray-200 hover:text-orange-500 hover:underline hover:scale-110">Practice Area</Link>
                                    <Link href="#" className=" px-4 py-2 :bg-gray-200 hover:text-orange-500 hover:underline hover:scale-110">Sector Specialization</Link>
                                    <Link href="#" className=" px-4 py-2 :bg-gray-200 hover:text-orange-500 hover:underline hover:scale-110">Core Team</Link>
                                </div>


                            )}

                        </div>


                        <Link href="/" className="text-black font-medium hover:text-orange-500 hover:underline hover:scale-110  ml-3">
                            Blog
                        </Link>
                        <Link href="/" className="text-black font-medium hover:text-orange-500 hover:underline hover:scale-110 ml-3 ">
                            Contact
                        </Link>
                    </div>
                </div>
              
        
        </header>
    );

    return screens.xl ? renderDesktopNav() : (
        <MobileNavbar />
    );
}
