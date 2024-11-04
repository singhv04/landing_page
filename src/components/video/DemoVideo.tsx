"use client";

import BookButton from "../button/BookButton";
import useToggle from "@/hooks/useToggle";
import ModalBody from "../modal/ModalBody";
import CalendlyCard from "../calendly/CalendlyCard";
import Image from "next/image";

const CanvaImage = () => {
  const [isOpen, toggle] = useToggle();

  return (
    <div className="cg">
      <div className="relative mx-auto mt-4 w-[90%] h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-lg border-2 border-emerald-500/25 shadow-lg">
        <Image
          src="/demo.png"
          alt="My Canva Design"
          fill
          className="object-cover rounded-lg"
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
