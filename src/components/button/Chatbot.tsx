import { allIcons } from "@/icons/all-icons";
import { ChatbotProps } from "@/types/all-types";

const Chatbot: React.FC<ChatbotProps> = ({ toggle }) => {
  const { chatbot } = allIcons;

  return <div onClick={toggle} className=" text-emerald-500 cursor-pointer">{chatbot}</div>;
};

export default Chatbot;
