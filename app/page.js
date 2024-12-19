"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const phrases = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "Tech Problem Solver",
    "AI-ML Prodigy",
    "App Developer",
    "DSA Apprentice",
    "Innovative Thinker"
  ];


  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0); // Add this to track the character index

  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = 150; // Typing speed (milliseconds)
    const erasingSpeed = 50; // Erasing speed (milliseconds)
    const pauseTime = 1000; // Pause time before erasing the text

    if (!isDeleting && currentCharIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + currentPhrase[currentCharIndex]);
        setCurrentCharIndex(currentCharIndex + 1); // Increment the index correctly
      }, typingSpeed);
    } else if (isDeleting && currentCharIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        setCurrentCharIndex(currentCharIndex - 1); // Decrement the index correctly
      }, erasingSpeed);
    } else if (!isDeleting && currentCharIndex === currentPhrase.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true); // Start erasing after a pause
      }, pauseTime);
    } else if (isDeleting && currentCharIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false); // Start typing the next phrase
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, pauseTime);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex, currentCharIndex]); // Add currentCharIndex as dependency

  return (
    <div className="flex h-[100vh]">
      <div className="relative h-full w-[70%]">
        <Image
          src="/bg.png"
          layout="fill"
          objectFit="cover"
          alt="Background Image"
        />
      </div>
      <div className="w-[30%] pt-24 pl-8 bg-slate-100 dark:bg-inherit">
        <h1 className="text-4xl font-semibold  mt-32">Hi, I'm a</h1>
        <p className="mt-4 font-semibold text-blue-500   text-4xl">
          {currentText}
          <span className="text-white/60">|</span>
        </p>

        <p className="mt-4 text-sm">
          Full-stack developer with expertise in modern web technologies, a passion for machine learning, app development, data structures and algorithms, and an interest in programming language creation and system design.
        </p>


        <div className="mt-10">
          <button className=" text-black dark:text-white relative group bg-transparent border-2 border-gradient-to-r from-purple-700 to-cyan-500 text-transparent bg-clip-text py-3 px-8 hover:bg-gradient-to-r hover:from-purple-700 hover:to-cyan-500  hover:shadow-xl transition-all duration-300 ease-in-out ">
            <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-purple-700 to-cyan-500 transform origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
            <span className="relative z-10 transition-colors duration-300 font-semibold tracking-wide text-lg">
              My Projects
            </span>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gradient-to-r from-purple-700 to-cyan-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
              →
            </span>
          </button>

          <button className=" ml-4 text-black dark:text-white relative group bg-transparent border-2 border-gradient-to-r from-purple-700 to-cyan-500 text-transparent bg-clip-text py-3 px-8 hover:bg-gradient-to-r hover:from-purple-700 hover:to-cyan-500  hover:shadow-xl transition-all duration-300 ease-in-out ">
            <span className="absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-gradient-to-r from-purple-700 to-cyan-500 transform origin-right group-hover:scale-x-100 transition-transform duration-300"></span>
            <span className="relative z-10 transition-colors duration-300 font-semibold tracking-wide text-lg">
              Contact Me
            </span>
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gradient-to-r from-purple-700 to-cyan-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
              →
            </span>
          </button>
        </div>
            <div className="flex mt-10">

                    <a className='mr-6 ' target='_blank' href="https://www.linkedin.com/in/arshal-agarwal-4b534b295/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="#0077B5" d="M19 0H5C3.346 0 2 1.346 2 3v18c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3zm-11 18v-8h2v8H8zm1-9h-.001c-1.104 0-2-.897-2-2 0-1.104.897-2 2-2s2 .897 2 2c0 1.104-.896 2-2 2zm10 9h-2v-4.5c0-1.195-.646-1.794-1.676-1.794-.877 0-1.324.644-1.324 1.307V18h-2v-8h2v1.08c.624-.964 1.786-1.504 2.83-1.5 1.998 0 3.494 1.285 3.494 3.467V18z" />
                        </svg>
                    </a>



                    <a className='mr-10' target='_blank' href="https://github.com/Arshal-Agarwal/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.801 8.207 11.387.6.111.823-.261.823-.581 0-.287-.01-1.048-.015-2.064-3.338.726-4.035-1.531-4.035-1.531-.546-1.389-1.334-1.762-1.334-1.762-1.089-.744.083-.729.083-.729 1.205.085 1.837 1.246 1.837 1.246 1.07 1.836 2.808 1.303 3.495.997.108-.776.419-1.303.762-1.603-2.664-.304-5.466-1.334-5.466-5.928 0-1.307.467-2.375 1.236-3.216-.124-.303-.535-.915.117-1.876 0 0 1.006-.322 3.298 1.222a11.534 11.534 0 0 1 3.003-.404c1.015 0 2.044.133 3.003.404 2.293-1.544 3.298-1.222 3.298-1.222.653.961.241 1.573.117 1.876.77.841 1.236 1.91 1.236 3.216 0 4.595-2.804 5.623-5.469 5.928.43.373.813 1.104.813 2.226 0 1.606-.015 2.898-.015 3.289 0 .323.222.695.832.58C20.563 21.801 24 17.303 24 12c0-6.627-5.373-12-12-12z" fill="#ffffff" />
                        </svg>
                    </a>

                    

            </div>
      </div>


    </div>
  );
}
