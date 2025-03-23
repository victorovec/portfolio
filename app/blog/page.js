import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold mb-6">My Blog</h1>
        <p className="text-lg">Coming soon... Stay tuned for updates!</p>
      </div>

      {/* Footer (now at the bottom) */}
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
