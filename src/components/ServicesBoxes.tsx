"use client";

import { FaChartBar, FaCogs, FaBullseye, FaHandsHelping } from "react-icons/fa";

const ServicesBoxes = () => {
    return (
        <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-12">
            <div className="max-w-6xl mx-auto mb-16">

  
                <div className="text-center md:text-left">
                    <span className="inline-block bg-blue-100 text-blue-600 font-semibold text-sm uppercase px-4 py-2 rounded-full">
                        WHAT WE OFFER
                    </span>
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                        <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mt-4">
                            Make Digital Marketing Work For Your Business
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl">
                            We serve clients at every level of their organization, whether as a
                            trusted advisor to top management or as a hands-on coach. Our
                            clients’ needs are constantly changing, so we continually seek new
                            and better ways to serve them.
                        </p>
                    </div>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    {[
                        {
                            title: "Consulting",
                            icon: <FaChartBar className="text-blue-500 text-3xl" />,
                            description:
                                "We’ve been a strategy thought leader for nearly five decades and we bring unrivaled expertise.",
                        },
                        {
                            title: "Planning",
                            icon: <FaCogs className="text-blue-500 text-3xl" />,
                            description:
                                "We help businesses create and execute plans that align with their goals and market needs.",
                        },
                        {
                            title: "Strategy",
                            icon: <FaBullseye className="text-blue-500 text-3xl" />,
                            description:
                                "Our team provides data-driven strategies to maximize growth and efficiency.",
                        },
                        {
                            title: "Support",
                            icon: <FaHandsHelping className="text-blue-500 text-3xl" />,
                            description:
                                "We offer 24/7 support to ensure that our clients' businesses run smoothly.",
                        },
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="bg-white w-full lg:w-auto p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-blue-500 hover:text-white group cursor-pointer"
                        >
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto transition-all group-hover:bg-white">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mt-4 group-hover:text-white">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mt-2 group-hover:text-white">
                                {service.description}
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 font-semibold mt-4 inline-block hover:underline group-hover:text-white"
                            >
                                ➜ EXPLORE MORE
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesBoxes;
