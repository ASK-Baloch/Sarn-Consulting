"use client"
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";

const teamMembers = [
    {
        name: "Muhammad Nazim",
        role: "Lead Bookkeeper",
        image: "/team/nazim.jpg",
    },
    {
        name: "Abdul Samad",
        role: "LLB",
        image: "/team/samad.jpg",
    },
    {
        name: "Assad Razaq",
        role: "LLB",
        image: "/team/assad.jpg",
    },
];

const TeamSection = () => {
    const [animatedCards, setAnimatedCards] = useState<boolean[]>([]);

    useEffect(() => {
        setAnimatedCards(teamMembers.map(() => false));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setAnimatedCards((prev) => {
                            const updated = [...prev];
                            updated[index] = true;
                            return updated;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '100px',
            }
        );

        const cardElements = document.querySelectorAll('.team-card');
        cardElements.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section id='team-section' className="py-16 bg-gradient-to-br from-[#3b4964] via-blue-700 to-[#3C73DA] text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 text-center relative">
                <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-100 to-[#0c1d3b] drop-shadow-lg mb-4">
                    Meet Our Team
                </h2>
                <p className="text-lg mt-4 text-gray-300 max-w-2xl mx-auto">
                    Our team is built with experienced professionals ready to drive success with passion and dedication.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-16 relative">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className={`team-card relative transition-all duration-200 transform ${animatedCards[index] ? 'animate-card-in' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            <Card className="relative bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl hover:shadow-[#b5c8e5] hover:scale-[1.05] overflow-hidden rounded-xl group">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70 transition-opacity group-hover:opacity-90"></div>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover rounded-t-xl transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-2"
                                />
                                <div className="relative z-10 text-center mt-6 p-6">
                                    <h3 className="text-2xl font-bold text-white drop-shadow-md">{member.name}</h3>
                                    <p className="text-lg text-gray-300 mt-2">{member.role}</p>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
                <div className="mt-12 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg animate-fade-in-scale" style={{ animationDelay: '1.2s' }}>
                    <p className="text-lg text-gray-200">
                        We are committed to excellence, innovation, and building lasting relationships with our clients. Our skills and expertise ensure high-quality service delivery.
                    </p>
                </div>
            </div>
            <style jsx global>{`
                @keyframes card-in {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-card-in {
                    animation: card-in 0.6s ease-in-out;
                }
                @keyframes fade-in-scale {
                  from {
                    opacity: 0;
                    transform: scale(0.5);
                  }
                  to {
                    opacity: 1;
                    transform: scale(1);
                  }
                }
                .animate-fade-in-scale {
                    animation: fade-in-scale 0.6s ease-in-out 1.2s forwards;
                }
                @media (max-width: 768px) {
                  .grid-cols-1.sm\:grid-cols-2.md\:grid-cols-3 {
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                  }
                  .team-card {
                    margin-bottom: 24px;
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                  }
                }
            `}</style>
        </section>
    );
};

export default TeamSection;
