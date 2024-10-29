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
    <div className="cg mx-auto w-[90%] text-foreground lg:w-[75%] ">
      <h1 className="header-text font-medium">How It Works & <span className=" text-emerald-500">How We Ensure Personalized Quality</span></h1>
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 justify-items-center">
        <IconBox
          icon={chatbot}
          heading="Discovery Call"
          subheading="Connect with us to customize the ideal voicebot experience for your business."
        />
        <IconBox
          icon={ai}
          heading="Bespoke Strategy"
          subheading="Get instant insights into potential benefits and savings from our tailored AI solutions."
        />
        <IconBox
          icon={automation}
          heading="Deployment & Integration"
          subheading="We build, deploy, and integrate your solution seamlessly into your existing systems."
        />
        <IconBox
          icon={automation}
          heading="Ongoing Support"
          subheading="Our team provides continuous support post-deployment to resolve any issues and refine performance."
        />
      </div>
      <div className="my-14 flex w-full items-center justify-center">
        <BookButton title="Schedule Your Discovery Call" onclick={toggle} />
      </div>
      {isOpen && <ModalBody modal={<CalendlyCard onClose={toggle} />} />}
    </div>
  );
};

export default HowItWorks;
