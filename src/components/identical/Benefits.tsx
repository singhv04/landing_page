import { allIcons } from "@/icons/all-icons";
import IconBox from "./IconBox";

const Benefits: React.FC = () => {
  const { ai, chatbot, automation } = allIcons;
  return (
    <div className="cg mx-auto w-[90%] text-foreground lg:w-[75%]">
      <h1 className="header-text">Benefits</h1>
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 justify-items-center">
        <IconBox
          icon={chatbot}
          heading="Enhanced Efficiency"
          subheading="Automate routine calls, giving your team time to focus on what matters."
        />
        <IconBox
          icon={ai}
          heading="Cost Savings"
          subheading="Talented staff never gets bored doing mundane tasks, they focus more on value creation while monitoring real time insights from AI automations."
        />
        <IconBox
          icon={automation}
          heading="Improved Customer Experience"
          subheading="Deliver quick, consistent responses, building customer trust and loyalty."
        />
        <IconBox
          icon={automation}
          heading="Scalable and Adaptable"
          subheading="Easily adjust voicebot settings to match your brand and evolve as your business grows."
        />
      </div>
    </div>
  );
};

export default Benefits;
