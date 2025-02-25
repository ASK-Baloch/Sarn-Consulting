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
        // <div className="bg-gray-200 min-h-screen text-black py-10 w-full flex justify-center">
        //     <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg">
        //         <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        //         <div className="flex flex-col md:flex-row gap-6">
        //             <div className="w-full md:w-1/2">
        //                 <iframe
        //                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d830.1439720731836!2d72.99771978933389!3d33.668149498338444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe3a15572d2f%3A0xfe935aac4b928011!2z2bnbjNqp2LMg2qnZhtiz2YTZudmG2bnYsw!5e0!3m2!1sur!2sus!4v1739949065663!5m2!1sur!2sus"
        //                     className="w-full h-64 md:h-96 rounded-lg shadow-md"
        //                     allowFullScreen
        //                     loading="lazy"
        //                     referrerPolicy="no-referrer-when-downgrade"
        //                     style={{ border: 0 }}
        //                 ></iframe>
        //             </div>
        //             <div className="w-full md:w-1/2">
        //                 <form ref={form} onSubmit={sendEmail}>
        //                     <div className="mb-4">
        //                         <label className="block text-sm font-medium text-gray-700">Full Name</label>
        //                         <input
        //                             type="text"
        //                             className="border rounded-md border-[#3C73DA] p-2 h-10 w-full mt-2 focus:outline-none"
        //                             placeholder="Enter your full name"
        //                             value={name}
        //                             name="from_name"
        //                             onChange={(e) => setName(e.target.value)}
        //                         />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label className="block text-sm font-medium text-gray-700">Email Address</label>
        //                         <input
        //                             type="email"
        //                             className="border rounded-md border-[#3C73DA] p-2 h-10 w-full mt-2 focus:outline-none"
        //                             placeholder="Enter your email address"
        //                             value={email}
        //                             name="from_email"
        //                             onChange={(e) => setEmail(e.target.value)}
        //                         />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        //                         <input
        //                             type="tel"
        //                             className="border rounded-md border-[#3C73DA] p-2 h-10 w-full mt-2 focus:outline-none"
        //                             placeholder="Enter your phone number"
        //                             value={phone}
        //                             name="from_phone"
        //                             onChange={(e) => setPhone(e.target.value)}
        //                         />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label className="block text-sm font-medium text-gray-700">Message</label>
        //                         <textarea
        //                             className="border rounded-md border-[#3C73DA] p-2 h-20 w-full mt-2 focus:outline-none"
        //                             rows={4}
        //                             placeholder="Enter your message"
        //                             value={message}
        //                             name="message"
        //                             onChange={(e) => setMessage(e.target.value)}
        //                         />
        //                     </div>
        //                     <div className="flex justify-center">
        //                         <button
        //                             type="submit"
        //                             className="bg-[#3C73DA] text-black px-6 py-2 rounded-md focus:outline-none hover:bg-[#3977f1]"
        //                         >
        //                             Submit
        //                         </button>
        //                     </div>
        //                     {success && (
        //                         <p className="mt-4 text-green-600 text-center">
        //                             Your message has been sent successfully!
        //                         </p>
        //                     )}
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="bg-gray-200 min-h-screen text-blue-400 py-10 w-full flex justify-center">
  <div className="w-full max-w-5xl bg-gray-900 p-6 rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold mb-4 text-center uppercase ">Contact Us</h2>
    <div className="flex flex-col md:flex-row gap-6 mt-10">
      {/* Left column with map and buttons */}
      <div className="w-full md:w-1/2">
      <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d851.7315545087457!2d72.99705637469144!3d33.66814000007714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbe3a15572d2f%3A0xfe935aac4b928011!2sSARN%20Consulting%20-%20Tax%2C%20Financial%20and%20Business%20Consultancy!5e0!3m2!1sen!2s!4v1740494425076!5m2!1sen!2s"
                className="w-full h-64 md:h-96 rounded-lg shadow-md"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              ></iframe>
        {/* Buttons below the map */}
        <div className="mt-8 flex flex-col sm:flex-row justify-around gap-2">
          <a
            href="https://wa.me/1234567890" // Replace with your WhatsApp number in international format
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-12 py-2 rounded-md text-center hover:bg-green-600"
          >
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile" // Replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 text-white px-10 py-2 rounded-md text-center hover:bg-blue-600"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@example.com" // Replace with your email address
            className="bg-red-500 text-white px-8 py-2 rounded-md text-center hover:bg-red-600"
          >
            Email
          </a>
        </div>
      </div>
      {/* Right column with the form */}
      <div className="w-full md:w-1/2">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Full Name</label>
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
            <label className="block text-sm font-medium text-gray-400">Email Address</label>
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
            <label className="block text-sm font-medium text-gray-400">Phone Number</label>
            <input
              type="tel"
              className="border rounded-md border-[#3C73DA] p-2 h-10 w-full mt-2 focus:outline-none"
              placeholder="Enter your phone number"
              value={phone}
              name="from_phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400">Message</label>
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
              className="bg-[#3C73DA] text-white mt-8 px-6 py-2 md:w-full rounded-md focus:outline-none hover:bg-[#3977f1]"
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
