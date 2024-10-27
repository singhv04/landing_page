import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Benefits from "@/components/identical/Benefits";
import HowItWorks from "@/components/identical/HowItWorks";
import WhatWeDo from "@/components/identical/WhatWeDo";
import Legacy from "@/components/legacy/Legacy";
import Navbar from "@/components/navbar/Navbar";
import Testimonial from "@/components/testimonial/Testimonial";
import VideoBox from "@/components/video/DemoVideo";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <VideoBox />
      <Legacy />
      <WhatWeDo />
      <Benefits/>
      <HowItWorks/>
      <Testimonial />
      <Footer />

      {/* 3 rings positioned at the top */}
      <div className="absolute inset-x-0 top-1/4 z-[-1] flex items-center justify-center">
        <div className="hero-ring size-[120px] md:size-[320px]"></div>
        <div className="hero-ring size-[320px] md:size-[620px]"></div>
        <div className="hero-ring size-[620px] md:size-[820px]"></div>
        <div className="hero-ring size-[820px] md:size-[1020px]"></div>
      </div>
    </div>
  );
}
