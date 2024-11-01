"use client";

import { useEffect, useRef } from "react";
import BookButton from "../button/BookButton";
import useToggle from "@/hooks/useToggle";
import ModalBody from "../modal/ModalBody";
import CalendlyCard from "../calendly/CalendlyCard";


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
