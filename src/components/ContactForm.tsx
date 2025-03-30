"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm("service_mttv9ym", "template_8czcqpm", form.current, {
        publicKey: "4qROg4me0HL6MyC2R",
      })
      .then(() => {
        setAlertMessage("Your message has been sent successfully!");
        setSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
        setAlertMessage("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="bg-gray-200 min-h-screen text-blue-400 py-10 w-full flex justify-center">
      <div className="w-full max-w-5xl bg-gray-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-4 text-center uppercase ">
          Contact Us
        </h2>
        <div className="flex flex-col md:flex-row gap-12 mt-10">
          {/* Left column with map and buttons */}
          <div className="w-full md:w-1/2 space-y-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d851.7315545087457!2d72.99705637469144!3d33.66814000007714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe3a15572d2f%3A0xfe935aac4b928011!2sSARN%20Consulting%20-%20Tax%2C%20Financial%20and%20Business%20Consultancy!5e0!3m2!1sen!2s!4v1740494425076!5m2!1sen!2s"
              className="w-full h-64 md:h-96 rounded-lg shadow-md"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>

            {/* Contact Information Box */}
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10 space-y-4">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                <MapPin className="w-6 h-6 text-[#3C73DA]" />
                Contact Information
              </h3>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <span className="text-gray-300 text-lg">Company Number:</span>
                  <p className="text-xl font-bold text-[#3C73DA] drop-shadow-md">
                    051-2741610
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gray-400" />
                <div>
                  <span className="text-gray-300 text-lg">Mobile Number:</span>
                  <p className="text-xl font-bold text-[#3C73DA] drop-shadow-md">
                    0333-1283168
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gray-400" />
                <div>
                  <span className="text-gray-300 text-lg">Email:</span>
                  <p className="text-xl font-bold text-[#3C73DA] drop-shadow-md">
                    info@sarnconsulting.com
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons below the map */}
            <div className="mt-8 flex flex-col sm:flex-row justify-around gap-2">
              <a
                href="https://wa.me/+923331283168"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-12 py-2 rounded-md text-center hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/company/sarncon"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-10 py-2 rounded-md text-center hover:bg-blue-600 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:info@sarnconsulting.com"
                className="bg-red-500 text-white px-8 py-2 rounded-md text-center hover:bg-red-600 transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          {/* Right column with the form */}
          <div className="w-full md:w-1/2">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400">
                  Full Name
                </label>
                <input
                  type="text"
                  className="border rounded-md border-[#3C73DA] p-2 h-10 w-full mt-2 focus:outline-none bg-gray-800 text-white"
                  placeholder="Enter your full name"
                  value={name}
                  name="from_name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400">
                  Email Address
                </label>
                <input
                  type="email"
                  className="border rounded-md border-[#3C73DA] p-2 h-10 w-full mt-2 focus:outline-none bg-gray-800 text-white"
                  placeholder="Enter your email address"
                  value={email}
                  name="from_email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="border rounded-md border-[#3C73DA] p-2 h-10 w-full mt-2 focus:outline-none bg-gray-800 text-white"
                  placeholder="Enter your phone number"
                  value={phone}
                  name="from_phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  className="border rounded-md border-[#3C73DA] p-2 h-20 w-full mt-2 focus:outline-none bg-gray-800 text-white"
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
                  className="bg-[#3C73DA] text-white mt-8 px-6 py-2 md:w-full rounded-md focus:outline-none hover:bg-[#3977f1] transition-colors"
                >
                  Submit
                </button>
              </div>
              {alertMessage && (
                <Alert variant="default" className="mt-4">
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>{alertMessage}</AlertDescription>
                </Alert>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
