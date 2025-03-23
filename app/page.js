"use client";
import Image from "next/image";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import DarkModeToggle from "./darkModeToggle";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      {/* Header */}
      <header className="p-5 flex justify-between items-center shadow-md dark:shadow-gray-700 relative">
        <h1 className="text-2xl font-bold">Portfolio</h1>
        
        <div className="flex items-center space-x-8">
          {/* Navigation Menu */}
          <nav className="hidden md:flex absolute left-[50%]">
            <ul className="flex space-x-6">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/skills">Skills</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          
          {/* Dark Mode Toggle */}
          <DarkModeToggle />
        </div>

        {/* Hamburger Menu for Mobile Only */}
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 p-5 shadow-md rounded-lg absolute top-16 right-5">
          <ul className="flex flex-col space-y-3">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      )}

      {/* Main Section */}
      <main className="flex flex-col lg:flex-row items-center justify-center flex-grow p-10">
        {/* Left Section - Large Profile Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/assets/profile.jpg" // Change to your image path
            alt="Victor Onyebeke"
            width={350}
            height={350}
            className="w-60 h-60 lg:w-80 lg:h-80 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Right Section - All Text */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Introduction */}
          <h2 className="text-5xl font-bold">Welcome, I'm Victor Onyebeke</h2>
          <p className="mt-4 text-lg">
            A passionate Flutter developer who builds modern, scalable, and high-performance applications.
          </p>

          {/* About Me */}
          <div className="mt-10">
            <h3 className="text-3xl font-semibold">About Me</h3>
            <p className="mt-2 text-lg">
              I specialize in crafting mobile applications with Flutter, ensuring seamless user experiences.
            </p>
            <Link href="/about" className="mt-4 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
              Learn More
            </Link>
          </div>

          {/* My Works */}
          <div className="mt-10">
            <h3 className="text-3xl font-semibold">My Works</h3>
            <p className="mt-2 text-lg">Check out some of the exciting projects I've built.</p>
            <Link href="/projects" className="mt-4 inline-block bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition">
              View Projects
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-6 text-center mt-10">
      <div className="max-w-4xl mx-auto">
       

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://x.com/OvecDev" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="hover:text-blue-500 transition" />
          </Link>
          <Link href="https://github.com/victorovec" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-gray-900 dark:hover:text-white transition" />
          </Link>
          <Link href="www.linkedin.com/in/victor-bekee-420965356" target="_blank" rel="noopener noreferrer">
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
