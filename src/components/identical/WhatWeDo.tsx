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
          subheading="Subheading text here"
        />
        <IconBox
          icon={ai}
          heading="Aicaller"
          subheading="Subheading text here"
        />
        <IconBox
          icon={automation}
          heading="Workflow Automation"
          subheading="Subheading text here"
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
