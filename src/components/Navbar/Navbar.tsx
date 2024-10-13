"use client";

import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useSelector } from "react-redux";
import { toggleTheme } from "@/store/themeSlice";
import { useDispatch } from "react-redux";

interface NavItem {
  id: number;
  label: string;
  path: string;
}


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: { theme: { isDarkMode: boolean }}) => state.theme.isDarkMode);

  console.log(isDarkMode, "this is reduz");

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  

  const labels: NavItem[] = [
    { id: 1, label: "home", path: "#home" },
    { id: 2, label: "about", path: "#about" },
    { id: 3, label: "portfolio", path: "#portfolio" },
    { id: 4, label: "experience", path: "#experience" },
    { id: 5, label: "contact", path: "#contact" },
  ];

  return (
    <nav className={`flex justify-between items-center w-full h-20 px-4 fixed z-10 shadow-lg dark:bg-black dark:text-white bg-white text-black}`}>
      <div>
        <h1 className="text-5xl font-signature ml-2">Prathamesh</h1>
      </div>

      <ul className="hidden md:flex">
        {labels.map(({ id, label, path }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-semibold duration-200 hover:scale-105"
          >
            <Link href={path} aria-label={`Go to ${label}`}>
              {label}
            </Link>
          </li>
        ))}
      </ul>

        <button onClick={handleToggleTheme}>
          Switch to { isDarkMode ? 'light Mode' : 'Dark Mode'}
        </button>

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
    </nav>
  );
};

export default Navbar;
