"use client";

import useToggle from "@/hooks/useToggle";
import BookButton from "../button/BookButton";
import TestimonialSlider from "./TestimonialSlider";
import ModalBody from "../modal/ModalBody";
import CalendlyCard from "../calendly/CalendlyCard";

const Testimonial: React.FC = () => {
  const [isOpen, toggle] = useToggle();
  return (
    <div className="cg mx-auto w-[50%] text-foreground">
      <h1 className="header-text font-medium">
        {" "}
        <span className=" text-emerald-500">Customer</span> Success Stories
      </h1>
      <TestimonialSlider />
      <div className="my-10 flex w-full items-center justify-center">
        <BookButton title="Schedule Your Live Demo" onclick={toggle} />
      </div>
      {isOpen && <ModalBody modal={<CalendlyCard onClose={toggle} />} />}
    </div>
  );
};

export default Testimonial;