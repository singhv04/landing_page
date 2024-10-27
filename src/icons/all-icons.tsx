import {
  PiArrowCircleDownRightBold,
  PiArrowCircleUpRightBold,
} from "react-icons/pi";
import { SiChatbot, SiOpenai } from "react-icons/si";
import { TbSettingsAutomation } from "react-icons/tb";
import { RxCrossCircled } from "react-icons/rx";


export const allIcons = {
  oldWay: <PiArrowCircleDownRightBold size={28} fill="#10b981" />,
  newWay: <PiArrowCircleUpRightBold size={28} fill="#10b981" />,
  ai: <SiOpenai size={40} />,
  chatbot: <SiChatbot size={40} />,
  automation: <TbSettingsAutomation size={45} />,
  close:<RxCrossCircled size={30}/>
};
