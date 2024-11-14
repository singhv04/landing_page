import { ResponseProps } from "@/types/all-types";
import ChatLogoIcon from "../logo/ChatLogoIcon";

const BotResponse: React.FC<ResponseProps> = ({ text }) => {
  return (
    <div className="flex items-start space-x-2">
      <div className=" self-end pb-1">
        <ChatLogoIcon />
      </div>
      <div className="flex-col space-y-3">
        <div className="text-sm bg-gray-800 p-3 rounded-lg max-w-[80%]">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default BotResponse;