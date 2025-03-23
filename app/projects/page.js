"use client";
import Image from "next/image";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold mb-6">My Projects</h1>

          {/* E-Commerce App */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">E-Commerce App</h2>
            <div className="flex space-x-4 mt-4">
              <Image src="/assets/ecommerce1.jpeg" alt="E-Commerce Screenshot 1" width={300} height={200} className="rounded-lg" />
              <Image src="/assets/ecommerce2.jpeg" alt="E-Commerce Screenshot 2" width={300} height={200} className="rounded-lg" />
              <Image src="/assets/ecommerce3.jpeg" alt="E-Commerce Screenshot 3" width={300} height={200} className="rounded-lg" />
            </div>
            <p className="mt-4">
              <a href="https://github.com/victorovec/E-commerce" className="text-blue-600 dark:text-blue-400">GitHub Repo</a>
            </p>
          </div>

          {/* Weather App */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Weather App</h2>
            <div className="flex space-x-4 mt-4">
              <Image src="/assets/weather1.png" alt="Weather Screenshot 1" width={300} height={200} className="rounded-lg" />
              <Image src="/assets/weather2.png" alt="Weather Screenshot 2" width={300} height={200} className="rounded-lg" />
              <Image src="/assets/weather3.png" alt="Weather Screenshot 3" width={300} height={200} className="rounded-lg" />
            </div>
            <p className="mt-4">
              <a href="https://github.com/victorovec/weather" className="text-blue-600 dark:text-blue-400">GitHub Repo</a>
            </p>
          </div>

          {/* Calculator App */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">Calculator App</h2>
            <div className="flex space-x-4 mt-4">
              <Image src="/assets/calc1.png" alt="Calculator Screenshot 1" width={300} height={200} className="rounded-lg" />
              <Image src="/assets/calc2.png" alt="Calculator Screenshot 2" width={300} height={200} className="rounded-lg" />
              <Image src="/assets/calc3.png" alt="Calculator Screenshot 3" width={300} height={200} className="rounded-lg" />
            </div>
            <p className="mt-4">
              <a href="https://github.com/victorovec/calc-sample" className="text-blue-600 dark:text-blue-400">GitHub Repo</a>
            </p>
          </div>

          {/* World Clock App */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold">World Clock App</h2>
            <div className="flex space-x-4 mt-4">
              <Image src="/assets/time1.png" alt="World Clock Screenshot 1" width={300} height={200} className="rounded-lg" />
              <Image src="/assets/time2.png" alt="World Clock Screenshot 2" width={300} height={200} className="rounded-lg" />
              <Image src="/assets/time3.png" alt="World Clock Screenshot 3" width={300} height={200} className="rounded-lg" />
            </div>
            <p className="mt-4">
              <a href="https://github.com/victorovec/world-time" className="text-blue-600 dark:text-blue-400">GitHub Repo</a>
            </p>
          </div>

          {/* Live Demo Link */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Live Demo (Download APKs)</h2>
            <p className="mt-2">
              You can download the APK files for the projects from the link below:
            </p>
            <p className="mt-2">
              <a href="https://drive.google.com/drive/folders/1kyX6rB3ehOWWJh3JCeODTdBDC3LG6wu-?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400">Download APKs</a>
            </p>
          </div>
        </div>
      </div>

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
