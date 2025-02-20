"use client";

import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;
        emailjs.sendForm('service_z6oge6j', 'template_x9d664r', form.current, {
            publicKey: 'wCd6ziIag8aJOWwMh',
        }).then(() => {
            setSuccess(true);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
        }).catch(error => console.error('FAILED...', error.text));
    };

    return (
        <div className="bg-gray-200 min-h-screen text-black py-10 w-full flex justify-center">
            <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
                <div className="flex flex-col md:flex-row gap-6">
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
                    <div className="w-full md:w-1/2">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    className="border rounded-md border-[#3C73DA] p-2 h-10 w-full mt-2 focus:outline-none"
                                    placeholder="Enter your full name"
                                    value={name}
                                    name="from_name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    className="border rounded-md border-[#3C73DA] p-2 h-10 w-full mt-2 focus:outline-none"
                                    placeholder="Enter your email address"
                                    value={email}
                                    name="from_email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    className="border rounded-md border-[#3C73DA] p-2 h-10 w-full mt-2 focus:outline-none"
                                    placeholder="Enter your phone number"
                                    value={phone}
                                    name="form_phone"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    className="border rounded-md border-[#3C73DA] p-2 h-20 w-full mt-2 focus:outline-none"
                                    rows={4}
                                    placeholder="Enter your message"
                                    value={message}
                                    name="message"
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-[#3C73DA] text-black px-6 py-2 rounded-md focus:outline-none hover:bg-[#3977f1]"
                                >
                                    Submit
                                </button>
                            </div>
                            {success && (
                                <p className="mt-4 text-green-600 text-center">
                                    Your message has been sent successfully!
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
