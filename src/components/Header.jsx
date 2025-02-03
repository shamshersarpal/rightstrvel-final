"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";
import anniversarylogo from "@/images/anniversary_logo2025.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
      <div className="topBar bg-gray-800 text-white">
          <div className=" max-w-screen-xl m-auto">
            <div className="  lg:flex row flex-wrap justify-between items-center">
              <div className="lg:w-7/12 lg:px-5 lg:text-left text-center">
                <div className="h-full inline-flex items-center py-3">

                <ul className="list-none">
  <li className="inline-flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-phone text-yellow-500 size-4"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
    <span className="ms-2 text-white">
      USA New Jersey Head Office{" "}
      <span className="text-yellow-500">+1 (973) 636-6660</span>
    </span>
  </li>
</ul>

                </div>
              </div>
              <div className="lg:w-5/12 px-5 text-right hidden lg:block">

                <div className="flex items-center justify-end gap-2">
                <ul className="list-none">
  <li className="inline-flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-mail text-yellow-500 size-4"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
    <a
      href="mailto:contact@example.com"
      className="ms-2 text-slate-300 hover:text-slate-200"
    >
      contact@example.com
    </a>
  </li>
  <li className="inline-flex items-center ms-2">
    <ul className="list-none">
      <li className="inline-flex mb-0">
        <a href="#!" className="text-slate-300 hover:text-blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-facebook size-4 align-middle"
            title="facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
      </li>
      <li className="inline-flex ms-2 mb-0">
        <a href="#!" className="text-slate-300 hover:text-blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-instagram size-4 align-middle"
            title="instagram"
          >
            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      </li>
      <li className="inline-flex ms-2 mb-0">
        <a href="#!" className="text-slate-300 hover:text-blue">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-twitter size-4 align-middle"
            title="twitter"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </a>
      </li>
      <li className="inline-flex ms-2 mb-0">
        <a
          href="tel:+152534-468-854"
          className="text-slate-300 hover:text-blue"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-phone size-4 align-middle"
            title="phone"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </li>
    </ul>
  </li>
</ul>

                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Navbar */}
        <nav
          className={`fixed w-full z-20 transition-all navMain duration-300 ${
            isScrolled ? "bg-white shadow-lg" : "bg-transparent"
          }`}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-1">
            <Link href="/" passHref legacyBehavior>
              <a className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image
                  className="logo bg-blue-800 rounded-full p-1"
                  src={logo}
                  alt=""
                />
              </a>
            </Link>

            <button
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Image className="logo" src={anniversarylogo} alt="" />
              
            </div>
            <div
              className={`items-center justify-between ${
                isOpen ? "block" : "hidden"
              } w-full md:flex md:w-auto md:order-1`}
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
  {[
    { name: "My Account", link: "/login" },
    { name: "Travel Agents", link: "/" },
    { name: "Tour", link: "/" },
    { name: "Travel Insurance", link: "/" },
    { name: "Reviews", link: "/" },
  ].map((item, index) => (
    <li
      key={index}
      className="relative"
      onMouseEnter={() => item.name === "Tour" && setSubmenuOpen(true)}
      onMouseLeave={() => item.name === "Tour" && setSubmenuOpen(false)}
    >
      <Link href={item.link} passHref legacyBehavior>
        <a
          className={`block py-2 px-3 rounded-sm md:p-0 uppercase ${
            activeItem === item.name.toLowerCase().replace(" ", "")
              ? "text-blue-700"
              : isScrolled
              ? "text-black hover:text-blue-700"
              : "text-white hover:text-gray-200"
          }`}
          onClick={() => handleItemClick(item.name.toLowerCase().replace(" ", ""))}
        >
          {item.name}
        </a>
      </Link>

      {/* Submenu for Tour */}
      {item.name === "Tour" && submenuOpen && (
        <ul className="absolute z-10 left-0 top-full bg-white shadow-md rounded-md py-2 w-48">
          {["Africa tours", "Asia tours", "Europe tours", "Middle East tours", "America tours"].map((subItem, subIndex) => (
            <li key={subIndex}>
              <Link href="/" passHref legacyBehavior>
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                  {subItem}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ))}
</ul>

            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
