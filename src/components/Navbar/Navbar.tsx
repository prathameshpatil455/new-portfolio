"use client";

import React, { useCallback, useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import Link from "next/link";
import { useSelector } from "react-redux";
import { toggleTheme } from "@/store/themeSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

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
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dispatch = useDispatch();
  const isDarkMode = useSelector(
    (state: { theme: { isDarkMode: boolean } }) => state.theme.isDarkMode
  );
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

  const handleScrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    path: string
  ) => {
    event.preventDefault();
    const section = document.querySelector(path);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setNav(false); // Close mobile menu if open
    }
  };

  // Track scroll direction to toggle navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down: hide navbar
        setIsNavbarVisible(false);
      } else {
        // Scrolling up: show navbar
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  console.log(pathname, "path name");

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: isNavbarVisible ? 0 : -100, // Slide out of view when not visible
        opacity: isNavbarVisible ? 1 : 0, // Fade out
      }}
      transition={{ duration: 0.3 }}
      className={`flex justify-end md:justify-center items-center w-full h-20 px-4 fixed z-10 `}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center rounded-full border border-black dark:border-white px-6 py-2 dark:bg-black dark:text-white bg-white text-black">
        <ul className="flex gap-4">
          {labels.map(({ id, label, path }) => (
            <motion.li
              key={id}
              className={`px-4 py-2 cursor-pointer capitalize font-semibold duration-200 transform ${
                pathname === path ? "border-b-2 border-blue-500" : ""
              }`}
              whileHover={{ scale: 1.1 }}
              onClick={(e) => handleScrollToSection(e, path)}
            >
              <Link href={path} passHref aria-label={`Go to ${label}`}>
                {/* <a onClick={(e) => handleScrollToSection(e, path)}>{label}</a> */}
                {label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Theme Toggle for Large Screens */}
      <div
        className="hidden md:block cursor-pointer ml-4 text-xl p-2 rounded-md border dark:border-white border-black dark:bg-black dark:text-white bg-white text-black"
        aria-label="Toggle Dark Mode"
        onClick={handleToggleTheme}
      >
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.5 },
          }}
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? (
            <CiLight className="text-white" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </motion.div>
      </div>

      {/* Mobile Icons (Theme + Hamburger Menu) */}
      <div className="flex md:hidden items-center justify-end gap-4">
        {/* Dark Mode Toggle */}
        <div
          className="cursor-pointer text-xl p-2 rounded-md border dark:border-white border-black"
          aria-label="Toggle Dark Mode"
          onClick={handleToggleTheme}
        >
          <motion.div
            whileHover={{
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.5 },
            }}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <CiLight className="text-white" />
            ) : (
              <FaMoon className="text-gray-800" />
            )}
          </motion.div>
        </div>

        {/* Hamburger Menu */}
        <div
          onClick={handleNavToggle}
          className="cursor-pointer p-2 rounded-md z-10"
          aria-label="Menu"
        >
          {nav ? (
            <FaTimes size={30} color={isDarkMode ? "white" : "black"} />
          ) : (
            <FaBars size={30} color={isDarkMode ? "white" : "black"} />
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {nav && (
        <motion.ul
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
          className={`flex flex-col justify-center items-start absolute top-0 left-0 w-full h-screen ${
            isDarkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          {labels.map(({ id, label, path }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                href={path}
                onClick={() => setNav(false)}
                aria-label={`Go to ${label}`}
              >
                {/* <a onClick={(e) => handleScrollToSection(e, path)}>{label}</a> */}
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
