import AutomaAILogo from "../logo/Logo";

const Footer: React.FC = () => {
  return (
    <div className="mx-auto mb-10 w-[90%] text-foreground lg:w-[65%]">
      <div>
        <AutomaAILogo width="30" height="30" />
      </div>
      <hr className="my-4 border-emerald-500/25" />
      <div className="text-center text-xs text-muted md:text-sm">
        <p>&copy; 2024 AutomaAi. All rights reserved.</p>
        <p>
          <span className="text-emerald-500">Terms of Service</span> &{" "}
          <span className="text-emerald-500">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
