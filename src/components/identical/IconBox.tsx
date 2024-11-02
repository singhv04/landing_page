import { IconBoxProps } from "@/types/all-types";

const IconBox: React.FC<IconBoxProps> = ({ icon, heading, subheading }) => {
  return (
    <div className="flex w-full flex-col items-center gap-3 rounded-md border border-emerald-500/25 p-4 text-center shadow-lg shadow-emerald-500/50 md:max-w-full">
      <div className="text-3xl text-emerald-500">{icon}</div>
      <h1 className="text-lg font-medium text-foreground md:text-xl">
        {heading}
      </h1>
      <p className="text-xs text-left pb-2 text-muted md:text-sm">{subheading}</p>
    </div>
  );
};

export default IconBox;
