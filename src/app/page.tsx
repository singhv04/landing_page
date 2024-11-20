"use client";

import Chatbot from "@/components/button/Chatbot";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Benefits from "@/components/identical/Benefits";
import HowItWorks from "@/components/identical/HowItWorks";
import WhatWeDo from "@/components/identical/WhatWeDo";
import Legacy from "@/components/legacy/Legacy";
import Loader from "@/components/loader/Loader";
import Navbar from "@/components/navbar/Navbar";
import Testimonial from "@/components/testimonial/Testimonial";
import VideoBox from "@/components/video/DemoVideo";
import useToggle from "@/hooks/useToggle";
import { useEffect, useState } from "react";

export default function Home() {
  const [isOpen, toggle] = useToggle();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.action === "closeChatbox") {
        toggle(); // Close the chatbox
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [toggle]);

  const handleIframeLoad = () => {
    setIsLoading(false); // Stop showing spinner when iframe is loaded
  };

  const handleToggle = () => {
    setIsLoading(true); // Show spinner when opening iframe
    toggle();
  };

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

      {/* Background rings */}
      <div className="absolute inset-x-0 top-[16%] z-[-1] flex items-center justify-center">
        <div className="hero-ring size-[120px] md:size-[320px]"></div>
        <div className="hero-ring size-[320px] md:size-[620px]"></div>
        <div className="hero-ring size-[620px] md:size-[820px]"></div>
        <div className="hero-ring size-[820px] md:size-[1020px]"></div>
      </div>

      {/* Chatbot button and chatbox */}
      <div className="fixed bottom-10 right-6 z-50 overflow-hidden">
        {!isOpen ? (
          <Chatbot toggle={handleToggle} />
        ) : (
          <div className="relative w-[365px] h-[655px]">
            {isLoading && <Loader />}
            <iframe
              src="/chatbox"
              onLoad={handleIframeLoad}
              className="overflow-hidden w-full h-full rounded-lg shadow-lg border border-emerald-500/25"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
