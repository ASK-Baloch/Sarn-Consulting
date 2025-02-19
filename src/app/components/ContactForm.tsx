"use client";

import { useState } from "react";

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, phone, message });
    };

    return (
        <div className="bg-gray-200 min-h-screen text-black py-10 w-full flex justify-center">
            <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>

                <div className="flex flex-col md:flex-row gap-6">
                    {/* Google Map */}
                    <div className="w-full md:w-1/2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830.1439720731836!2d72.99771978933389!3d33.668149498338444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe3a15572d2f%3A0xfe935aac4b928011!2z2bnbjNqp2LMg2qnZhtiz2YTZudmG2bnYsw!5e0!3m2!1sur!2sus!4v1739949065663!5m2!1sur!2sus"
                            className="w-full h-64 md:h-96 rounded-lg shadow-md"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ border: 0 }}
                        ></iframe>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full md:w-1/2">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    className="border rounded-md border-[#3C73DA] p-3 w-full mt-2 focus:outline-none"
                                    placeholder="Enter your full name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    className="border rounded-md border-[#3C73DA] p-3 w-full mt-2 focus:outline-none"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    className="border rounded-md border-[#3C73DA] p-3 w-full mt-2 focus:outline-none"
                                    placeholder="Enter your phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    className="border rounded-md border-[#3C73DA] p-3 w-full mt-2 focus:outline-none"
                                    rows={4}
                                    placeholder="Enter your message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg--[#3C73DA] text-white px-6 py-2 rounded-md focus:outline-none hover:bg-[#3C73DA]"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
