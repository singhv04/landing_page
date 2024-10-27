"use client";

import { allIcons } from "@/icons/all-icons";
import IconBox from "./IconBox";
import BookButton from "../button/BookButton";
import useToggle from "@/hooks/useToggle";
import ModalBody from "../modal/ModalBody";
import CalendlyCard from "../calendly/CalendlyCard";

const HowItWorks: React.FC = () => {
  const [isOpen, toggle] = useToggle();
  const { ai, chatbot, automation } = allIcons;
  return (
    <div className="cg mx-auto w-[90%] text-foreground lg:w-[65%]">
      <h1 className="header-text">How It Works</h1>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <IconBox
          icon={chatbot}
          heading="Step 1"
          subheading="Subheading text here"
        />
        <IconBox
          icon={ai}
          heading="Step 2"
          subheading="Subheading text here"
        />
        <IconBox
          icon={automation}
          heading="Step 3"
          subheading="Subheading text here"
        />
      </div>
      <div className="my-10 flex w-full items-center justify-center">
        <BookButton title="Schedule Your Discovery Call" onclick={toggle} />
      </div>
      {isOpen && <ModalBody modal={<CalendlyCard onClose={toggle} />} />}
    </div>
  );
};

export default HowItWorks;
