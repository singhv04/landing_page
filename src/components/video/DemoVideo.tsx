"use client";

import BookButton from "../button/BookButton";
import useToggle from "@/hooks/useToggle";
import ModalBody from "../modal/ModalBody";
import CalendlyCard from "../calendly/CalendlyCard";
import Image from "next/image";

const CanvaImage = () => {
  const [isOpen, toggle] = useToggle();

  return (
    <div className="cg w-[90%] mx-auto">
      <div className="flex justify-center mt-2 h-[70%]">
        <Image
          src="/demo.png"
          alt="My Canva Design"
          width={1293}
          height={472}
          quality={100}
          className="max-w-full h-auto"
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
