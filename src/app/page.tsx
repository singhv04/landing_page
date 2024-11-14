"use client";

import Chatbot from "@/components/button/Chatbot";
import Chatbox from "@/components/chatbot/Chatbox";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Benefits from "@/components/identical/Benefits";
import HowItWorks from "@/components/identical/HowItWorks";
import WhatWeDo from "@/components/identical/WhatWeDo";
import Legacy from "@/components/legacy/Legacy";
import Navbar from "@/components/navbar/Navbar";
import Testimonial from "@/components/testimonial/Testimonial";
import VideoBox from "@/components/video/DemoVideo";
import useToggle from "@/hooks/useToggle";
import { useEffect } from "react";

export default function Home() {
  const [isOpen, toggle] = useToggle();
  // Disable scrolling when chatbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable page scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable page scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure page scrolling is enabled on cleanup
    };
  }, [isOpen]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <VideoBox />
      <Legacy />
      <WhatWeDo />
      <Benefits />
      <HowItWorks />
      <Testimonial />
      <Footer />

      {/* 3 rings positioned at the top */}
      <div className="absolute inset-x-0 top-[16%] z-[-1] flex items-center justify-center">
        <div className="hero-ring size-[120px] md:size-[320px]"></div>
        <div className="hero-ring size-[320px] md:size-[620px]"></div>
        <div className="hero-ring size-[620px] md:size-[820px]"></div>
        <div className="hero-ring size-[820px] md:size-[1020px]"></div>
      </div>

      {/* Chatbot button and chatbox */}
      <div className="fixed bottom-10 right-6 z-50">
        {!isOpen ? <Chatbot toggle={toggle} /> : <Chatbox toggle={toggle} />}
      </div>
    </div>
  );
}
