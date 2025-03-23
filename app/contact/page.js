"use client";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function ContactPage() {
  const sendEmail = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const subject = encodeURIComponent("Contact Inquiry");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    const mailtoURL = `mailto:victorovec@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoURL;
  };

  const sendWhatsAppMessage = () => {
    const message = encodeURIComponent("Hello, I'd like to contact you!");
    const whatsappURL = `https://wa.me/2348068555414?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-6">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <form className="flex flex-col space-y-4" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white h-32"
            ></textarea>

            {/* Email Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600"
            >
              Send via Email
            </button>
          </form>

          {/* WhatsApp Button */}
          <button
            onClick={sendWhatsAppMessage}
            className="w-full bg-green-600 dark:bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-700 dark:hover:bg-green-600 mt-4"
          >
            Chat via WhatsApp
          </button>
        </div>
      </div>

      {/* Footer - Stays at the Bottom */}
      <footer className="w-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="https://x.com/OvecDev" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="hover:text-blue-500 transition" />
            </Link>
            <Link href="https://github.com/victorovec" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="hover:text-gray-900 dark:hover:text-white transition" />
            </Link>
            <Link href="https://www.linkedin.com/in/victor-bekee-420965356" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="hover:text-blue-700 transition" />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm">&copy; {new Date().getFullYear()} Victor Onyebeke. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
