import { allIcons } from "@/icons/all-icons";
import IconBox from "./IconBox";

const WhatWeDo: React.FC = () => {
  const { ai, chatbot, automation } = allIcons;
  return (
    <div className="cg mx-auto w-[90%] text-foreground lg:w-[65%]">
      <h1 className="header-text">
        We seamlessly <span className=" text-emerald-500">build</span> and{" "}
        <span className=" text-emerald-500">launch</span> your AI solutions
      </h1>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        <IconBox
          icon={chatbot}
          heading="Chatbots"
          subheading="Provide instant, 24/7 customer support with custom chatbots that handle inquiries, free up staff, and enhance the customer experience."
        />
        <IconBox
          icon={ai}
          heading="AI-Callers"
          subheading="Automate and streamline customer interactions with intelligent voice responses, saving time and ensuring consistent service around the clock."
        />
        <IconBox
          icon={automation}
          heading="Workflow Automation"
          subheading="Simplify routine tasks and integrate processes across platforms to boost productivity, reduce manual errors, and allow your team to focus on strategic goals."
        />
      </div>
      <div className=" w-[80%] mx-auto pt-14">
        <p className=" text-center md:text-xl">
          We’re with you every step of the way,{" "}
          <span className=" text-emerald-500">
            providing ongoing support to resolve any issues after deployment.
          </span>
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
