"use client";

import { useEffect, useRef } from "react";
import BookButton from "../button/BookButton";
import useToggle from "@/hooks/useToggle";
import ModalBody from "../modal/ModalBody";
import CalendlyCard from "../calendly/CalendlyCard";

// const VideoBox: React.FC = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [isOpen, toggle] = useToggle();

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   }, []);

//   return (
//     <div className="cg">
//       <div className="mx-auto w-[90%] rounded-lg border-2 border-emerald-500/25 shadow-lg md:w-[60%]">
//         <video
//           ref={videoRef}
//           className="h-auto w-full rounded-lg bg-black"
//           controls
//           autoPlay
//           loop
//           playsInline
//           muted
//         >
//           <source src="/demo.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <div className="mt-6 flex items-center justify-center md:mt-10">
//         <BookButton title="Book Live Demo" onclick={toggle} />
//       </div>
//       {isOpen && <ModalBody modal={<CalendlyCard onClose={toggle} />} />}
//     </div>
//   );
// };

// export default VideoBox;


import React from 'react';
import Image from 'next/image';
import myImage from './demo.png'; // Adjust the path to your image

const CanvaImage = () => {
  const [isOpen, toggle] = useToggle();
  return (
    <div className="cg">
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px', height: '70%' }}>
      <Image
        src={myImage}
        alt="My Canva Design"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      </div>
      <div className="mt-6 flex items-center justify-center md:mt-10">
        <BookButton title="Book Live Demo" onclick={toggle} />
      </div>
      {isOpen && <ModalBody modal={<CalendlyCard onClose={toggle} />} />}      
      </div>
  );
};

export default CanvaImage;
