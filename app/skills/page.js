"use client";
import { FaGitAlt, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiDart, SiFlutter, SiFirebase, SiPostman, SiReact, SiRedux, SiCplusplus } from "react-icons/si";
import Link from "next/link";

const skills = [
  { name: "Dart", icon: <SiDart className="text-blue-500 text-6xl" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-400 text-6xl" /> },
  { name: "Riverpod", icon: <SiRedux className="text-green-500 text-6xl" /> }, // Using Redux icon as a placeholder
  { name: "Provider", icon: <SiReact className="text-cyan-500 text-6xl" /> }, // Using React icon as a placeholder
  { name: "Bloc", icon: <SiRedux className="text-purple-600 text-6xl" /> }, // Using Redux icon as a placeholder
  { name: "Firebase", icon: <SiFirebase className="text-orange-500 text-6xl" /> },
  { name: "Postman", icon: <SiPostman className="text-red-500 text-6xl" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-600 text-6xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-6xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-900 dark:text-white text-6xl" /> },
];

export default function Skills() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="flex-grow">
        <h3 className="text-3xl font-semibold text-center mb-6">My Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md">
              {skill.icon}
              <p className="mt-2 text-lg font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="w-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 p-6 text-center">
        <div className="max-w-4xl mx-auto">
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
          <p className="text-sm">&copy; {new Date().getFullYear()} Victor Onyebeke. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
