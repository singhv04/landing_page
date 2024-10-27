import { allIcons } from "@/icons/all-icons";
import IconBox from "./IconBox";

const WhatWeDo: React.FC = () => {
  const { ai, chatbot, automation } = allIcons;
  return (
    <div className="cg mx-auto w-[90%] text-foreground lg:w-[65%]">
      <h1 className="header-text">What We Do</h1>
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
    </div>
  );
};

export default WhatWeDo;
