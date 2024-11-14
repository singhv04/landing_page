import { allIcons } from "@/icons/all-icons";
import AutomaAILogo from "../logo/Logo";
import { ChatbotProps } from "@/types/all-types";
import Image from "next/image";
import { useRef } from "react";
import ChatLogoIcon from "../logo/ChatLogoIcon";

const Chatbox: React.FC<ChatbotProps> = ({ toggle }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Adjusts the height of the textarea as the user types
  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      // Reset height to allow for content to shrink or expand
      textarea.style.height = "auto";
      // Set the height to the scroll height, capping it at 160px (around 4 lines)
      textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
    }
  };
  const { chatClose, send } = allIcons;
  return (
    <div className="bg-gray-900 w-[360px] h-[640px] rounded-lg shadow-lg flex flex-col border border-emerald-500/25 overflow-hidden">
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
        {/* Icon and namebar */}
        <div className="flex flex-col justify-center items-center pb-3">
          <div className="relative h-16 w-16 rounded-full border-2 border-emerald-500/25 overflow-hidden">
            <Image
              src="/logo.png"
              fill
              quality={100}
              alt="AutomaAi logo Icon"
              className="object-cover"
            />
          </div>
          <h1 className="text-xl font-semibold my-3">Automa-AI</h1>
          <p className="text-sm text-gray-400">
            Our Virtual Assistant is here to help you
          </p>
        </div>

        {/* Start the chat */}

        {/* AI Question */}
        <div className="flex items-start space-x-2">
          <div className=" self-end pb-1">
            <ChatLogoIcon />
          </div>
          <div className="flex-col space-y-3">
            <div className="text-sm bg-gray-800 p-3 rounded-lg max-w-[80%]">
              <p>
                Hello, we are AutomaAI, and we specialize in using AI Solutions
                to save businesses time and money.
              </p>
            </div>
            <div className="text-sm bg-gray-800 p-3 rounded-lg max-w-[80%]">
              <p>
                Which AI solution are you interested in for your business? We
                offer a range of services from AI chatbots to predictive
                analytics.
              </p>
            </div>
          </div>
        </div>

        {/* User Response */}
        <div className="flex justify-end">
          <div className="text-sm p-3 rounded-lg max-w-[80%]">
            <p>I’m interested in AI chatbots.</p>
          </div>
        </div>
        {/* AI Question */}
        <div className="flex items-start space-x-2">
          <div className=" self-end pb-1">
            <ChatLogoIcon />
          </div>
          <div className="flex-col space-y-3">
            <div className="text-sm bg-gray-800 p-3 rounded-lg max-w-[80%]">
              <p>
                Which AI solution are you interested in for your business? We
                offer a range of services from AI chatbots to predictive
                analytics.
              </p>
            </div>
          </div>
        </div>
        {/* End of the chat */}
      </div>

      {/* Footer */}
      {/* <div className="p-3 bg-gray-800">
        <button className="w-full bg-emerald-500 text-white py-2 rounded-lg font-semibold">
          Start New Chat
        </button>
      </div> */}
      <div className="p-3 bg-gray-800 flex items-center justify-center gap-2">
        <div className=" flex-1">
          <textarea
            ref={textareaRef}
            rows={1}
            onInput={handleInput}
            className="w-full bg-gray-900 py-2 px-3 rounded-lg focus:outline-none text-white text-sm resize-none overflow-y-auto"
            style={{ maxHeight: "10rem" }}
            placeholder="Type here..."
          />
        </div>
        <div className="-mt-1.5 text-emerald-500 cursor-pointer">{send}</div>
      </div>
    </div>
  );
};

export default Chatbox;
