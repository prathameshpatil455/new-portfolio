import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const labels = [
    { id: 1, label: "home", path: "#home" },
    { id: 2, label: "about", path: "#about" },
    { id: 3, label: "portfolio", path: "#portfolio" },
    { id: 4, label: "experience", path: "#experience" },
    { id: 5, label: "contact", path: "#contact" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-white fixed z-10 shadow-lg">
      <div>
        <h1 className="text-5xl font-signature ml-2">Prathamesh</h1>
      </div>

      <ul className="hidden md:flex">
        {labels.map(({ id, label, path }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-semibold text-gray-700 hover:scale-105 hover:text-black duration-200"
          >
            <Link href={path} aria-label={`Go to ${label}`}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
        aria-label="Menu"
      >
        {nav ? <FaTimes size={30} color="black" /> : <FaBars size={30} color="black" />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black z-8">
          {labels.map(({ id, label, path }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link href={path} onClick={() => setNav(!nav)} aria-label={`Go to ${label}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
