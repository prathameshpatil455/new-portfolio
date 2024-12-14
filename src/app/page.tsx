"use client";

import Navbar from "@/components/NavBar/navbar";
import HomePage from "./home/HomePage";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import About from "./about/About";
import Experience from "./experience/Experience";
import Portfolio from "./portfolio/Portfolio";
import Contact from "./contact/Contact";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import { Provider } from "react-redux";
import store from "@/store/store";
import useLenis from "@/hooks/useLenis";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "@/components/ErrorBoundary";
import ExperienceDraft from "./experience/ExperienceDraft";

export default function Home() {
  useLenis();

  return (
    <Provider store={store}>
      <div className="overflow-hidden">
        <ToastContainer />
        <Navbar />
        <SocialLinks />
        <CustomCursor />
        <main>
          <ErrorBoundary>
            <HomePage />
            <About />
            <ExperienceDraft />
            <Portfolio />
            <Contact />
          </ErrorBoundary>
        </main>
      </div>
    </Provider>
  );
}
