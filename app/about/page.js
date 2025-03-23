import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-lg leading-relaxed">
            My name is <span className="font-semibold">Onyebeke Chidalu Victor</span>, and I am a passionate Flutter developer dedicated to building modern applications.
            I studied <span className="font-semibold">Electrical Engineering</span> at <span className="font-semibold">Nnamdi Azikiwe University</span>.
            I started my tech journey while in university, beginning with C++, then moving to Python, HTML, CSS, and JavaScript.
            However, I wasn&apos;t always consistent. But for the past two years, I have been truly committed to learning and growing in tech.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            What really motivated me was seeing a friend I started with become successful in Flutter and mobile development.
            That inspired me to focus on my own journey and dive deeper into <span className="font-semibold">Flutter, Firebase, API integration, and state management using Bloc and Provider.</span>
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Today, I specialize in building scalable and efficient mobile applications, leveraging tools like <span className="font-semibold">Postman</span> for API testing and using <span className="font-semibold">Riverpod</span> for state management.
            My skills include <span className="font-semibold">Dart, Flutter, Firebase, API integration, Postman, and state management with Bloc, Provider, and Riverpod.</span>
            My goal is to continue growing, building innovative applications, and contributing to the tech community.
          </p>
          <p className="mt-6 text-xl font-semibold text-blue-600 dark:text-blue-400">
            Ready to work and explore new things!
          </p>
        </div>
      </div>

      {/* Footer */}
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
