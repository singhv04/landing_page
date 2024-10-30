import { allIcons } from "@/icons/all-icons";
import IconBox from "./IconBox";

const Benefits: React.FC = () => {
  const { teamEfficiency, costSavings, boostExperience, scalable } = allIcons;
  return (
    <div className="cg mx-auto w-[90%] text-foreground lg:w-[75%]">
      <h1 className="header-text font-medium">
        Discover Your{" "}
        <span className=" text-emerald-500">Competitive Edge</span>{" "}
      </h1>
      <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 justify-items-center">
        <IconBox
          icon={teamEfficiency}
          heading="Enhanced Team Efficiency"
          subheading="Streamline workflows with real-time insights, empowering your team to focus on high-impact activities."
        />
        <IconBox
          icon={costSavings}
          heading="Cost Savings"
          subheading="Cut operational expenses by automating calls, reducing manual tasks, and lowering staffing needs."
        />
        <IconBox
          icon={boostExperience}
          heading="Boost Experience"
          subheading="Deliver instant, personalized responses to enhance satisfaction and build customer loyalty."
        />
        <IconBox
          icon={scalable}
          heading="Scalable and Adaptable"
          subheading="Seamlessly modify settings to align with your brand and scale alongside your business growth."
        />
      </div>
    </div>
  );
};

export default Benefits;
