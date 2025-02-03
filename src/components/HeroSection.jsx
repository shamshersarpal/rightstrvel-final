"use client";
import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <div className="relative   overflow-hidden ">
        <div className="py-60 bg-cover bg-center hero">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-white">
            <div className="  px-4   grid md:grid-cols-12 grid-cols-1 w-full max-w-screen-xl items-center mt-10 gap-[30px]">
              <div className="lg:col-span-8 md:col-span-7 md:order-1 order-2">
                <h5 className="text-3xl font-dancing text-white courve">Tours &amp; Travel</h5>
                <h4 className="font-bold text-white text-4xl lg:text-6xl mb-6 mt-5">
                  Discover Amazing <br />
                  Places With Us
                </h4>
                <p className="text-white text-xl max-w-xl">
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and
                  publishing industries for previewing layouts and visual mockups!
                </p>
              </div>
              <div className="lg:col-span-4 md:col-span-5 md:text-center md:order-2 order-1">
                {/* YouTube Play Button */}
                <button
                  onClick={() => setIsOpen(true)}
                  className="lg:h-24 h-20 lg:w-24 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white hover:bg-blue text-blue hover:text-white duration-500 ease-in-out mx-auto"
                >
                  <svg
                    className="w-10 h-10 text-blue-700"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Popup Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-95 z-50">
             <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-5 text-white   text-xl"
              >
                ✕
              </button>
            <div className="relative bg-white  rounded-lg shadow-lg w-full max-w-3xl">
             
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/tO-ZUJTd62Q?autoplay=1"
                  title="YouTube video"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
      <SearchBar/>
    </main>
  );
}
