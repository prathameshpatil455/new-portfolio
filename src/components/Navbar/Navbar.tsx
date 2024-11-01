"use client";

import React, { useCallback, useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import Link from "next/link";
import { useSelector } from "react-redux";
import { toggleTheme } from "@/store/themeSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'

interface NavItem {
  id: number;
  label: string;
  path: string;
}


const labels: NavItem[] = [
  { id: 1, label: "home", path: "#home" },
  { id: 2, label: "about", path: "#about" },
  { id: 3, label: "portfolio", path: "#portfolio" },
  { id: 4, label: "experience", path: "#experience" },
  { id: 5, label: "contact", path: "#contact" },
];


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: { theme: { isDarkMode: boolean }}) => state.theme.isDarkMode);
  const router = useRouter();
  const pathname = usePathname();


  console.log(isDarkMode, "this is reduz");

  const handleToggleTheme = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  const handleNavToggle = useCallback(() => {
    setNav((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // const handleScrollToSection = (path) => {
  //   const section = document.querySelector(path);
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

  console.log(pathname, "path name")
  

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1}}
      transition={{ duration: 0.5 }}
      className={`flex justify-center items-center w-full h-20 px-4 fixed z-10 shadow-lg dark:bg-black dark:text-white bg-white text-black}`}
    >
      {/* <div>
        <h1 className="text-5xl font-signature ml-2">Prathamesh</h1>
      </div> */}

        <div className="flex items-center rounded-full border border-gray-300 dark:border-gray-600 px-6 py-2">
      <ul className="hidden md:flex gap-4">
        {labels.map(({ id, label, path }, index) => (
          <motion.li
            key={id}
            className={`px-4 py-2 cursor-pointer capitalize font-semibold duration-200 transform ${
              router && pathname === path
                ? "border-b-2 border-blue-500" 
                : ""
            }`}
            whileHover={{ scale: 1.1 }}
            onClick={() => router.push(path)}
          >
            <Link href={path} passHref aria-label={`Go to ${label}`}>
              {label}
            </Link>
          </motion.li>
        ))}
      </ul>
      </div>


      {/* Dark Mode Toggle */}
      <div
        className="ml-4 cursor-pointer text-xl p-2 rounded-md border hidden md:block dark:border-white border-black"
        aria-label="Toggle Dark Mode"
        onClick={handleToggleTheme}
      >
      <motion.div
        whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? <CiLight className="text-white" /> : <FaMoon className="text-gray-800" />}
      </motion.div>
      </div>

      <div
        onClick={handleNavToggle}
        className={`cursor-pointer pr-4 z-10 md:hidden p-2 rounded-md`}
        aria-label="Menu"
      >
        {nav ? <FaTimes size={30} color={isDarkMode ? "white" : "black"} /> : <FaBars size={30} color={isDarkMode ? "white" : "black"} />}
      </div>

      {nav && (
        <motion.ul 
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black z-8 ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {labels.map(({ id, label, path }) => (
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link href={path} onClick={() => setNav(!nav)} aria-label={`Go to ${label}`}>
                {label}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
