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
          heading="1. Discovery Call"
          subheading="Connect with us to customize the ideal voicebot experience for your business."
        />
        <IconBox
          icon={ai}
          heading="2. Bespoke Strategy"
          subheading="Get instant insights into potential benefits and savings from our tailored AI solutions."
        />
        <IconBox
          icon={automation}
          heading="3. Deployment & Integration"
          subheading="We build, deploy, and integrate your solution seamlessly into your existing systems."
        />
        <IconBox
          icon={automation}
          heading="4. Ongoing Support"
          subheading="Our team provides continuous support post-deployment to resolve any issues and refine performance."
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
