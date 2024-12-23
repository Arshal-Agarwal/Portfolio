"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-lg z-50 shadow-lg border-b border-cyan-500/30">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-blue-500">
          <Link href="#" ><span className="text-white">A</span>rshal <span className="text-white">A</span>garwal </Link>
        </div>

        <ul className="hidden md:flex space-x-8">

        <li  className="relative group">
              <Link
                href={`/`}
                className="text-gray-300 text-lg font-medium tracking-wide flex items-center space-x-2"
              >
                {/* Underline Effect */}
                <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-purple-500 to-cyan-400 transform origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
                {/* Text with Icon */}
                <span className="relative group-hover:text-cyan-400 transition-colors duration-300">
                  Home
                </span>
                <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </li>

          {[ "About", "Projects","Certificates" , "Contact" ].map((item, index) => (
            <li key={index} className="relative group">
              <Link
                href={`/Pages/${item.toLowerCase()}`}
                className="text-gray-300 text-lg font-medium tracking-wide flex items-center space-x-2"
              >
                {/* Underline Effect */}
                <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-purple-500 to-cyan-400 transform origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
                {/* Text with Icon */}
                <span className="relative group-hover:text-cyan-400 transition-colors duration-300">
                  {item}
                </span>
                <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-cyan-400 transition"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 py-4 px-6">
          <ul className="space-y-4">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="block text-gray-300 text-lg font-medium tracking-wide hover:text-cyan-400 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
