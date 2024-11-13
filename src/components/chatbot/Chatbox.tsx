import { allIcons } from "@/icons/all-icons";
import AutomaAILogo from "../logo/Logo";
import { ChatbotProps } from "@/types/all-types";

const Chatbox: React.FC<ChatbotProps> = ({ toggle }) => {
  const { chatClose } = allIcons;
  return (
    <div className="bg-gray-900 w-[350px] h-[640px] rounded-lg shadow-lg flex flex-col border border-emerald-500/25 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-800 flex items-center justify-between p-3 text-white">
        <AutomaAILogo />
        <div>
          <div onClick={toggle} className=" text-gray-500 cursor-pointer">
            {chatClose}
          </div>
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto text-white">
        {/* <div className="text-center text-xs text-gray-500">21 days ago</div> */}
        <div className="bg-gray-800 p-3 rounded-lg">
          <p>
            Hello, we are AutomaAI, and we specialize in using AI Solutions to
            save businesses time and money.
          </p>
        </div>
        <div className="bg-gray-800 p-3 rounded-lg">
          <p>
            Which AI solution are you aiming to integrate into your business?
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 bg-gray-800">
        <button className="w-full bg-emerald-500 text-white py-2 rounded-lg font-semibold">
          Start New Chat
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
