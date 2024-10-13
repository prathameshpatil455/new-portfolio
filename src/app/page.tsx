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

export default function Home() {
  
  return (
    <Provider store={store}>
    <div className="overflow-hidden">
      <Navbar/>
      <SocialLinks/>
      <CustomCursor />
      <main>
        <HomePage />
        <About/>
        <Experience/>
        <Portfolio/>
        <Contact/>
      </main>
    </div>
    </Provider>
  );
}
