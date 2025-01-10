import { allIcons } from "@/icons/all-icons";
import AutomaAILogo from "../logo/Logo";

const Footer: React.FC = () => {
  const { linkedin, twitter } = allIcons;

  return (
    <div className="mx-auto mb-10 w-[90%] text-foreground lg:w-[65%]">
      <div className="flex justify-between">
        <AutomaAILogo width="30" height="30" />
        <div className="flex items-center gap-4 text-emerald-500">
          <a
            href="https://www.linkedin.com/company/automa-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {linkedin}
          </a>
          <a
            href="https://twitter.com/automa_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {twitter}
          </a>
        </div>
      </div>
      <hr className="my-4 border-emerald-500/25" />
      <div className="text-center text-xs text-muted md:text-sm">
        <p>&copy; 2024 Automa-AI. All rights reserved.</p>
        {/* <p>
          <span className="text-emerald-500">Terms of Service</span> &{" "}
          <span className="text-emerald-500">Privacy Policy</span>
        </p> */}
      </div>
    </div>
  );
};

export default Footer;
