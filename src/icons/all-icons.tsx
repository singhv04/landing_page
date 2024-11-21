import {
  PiArrowCircleDownRightBold,
  PiArrowCircleUpRightBold,
} from "react-icons/pi";
import { SiChatbot, SiOpenai } from "react-icons/si";
import { TbSettingsAutomation } from "react-icons/tb";
import { RxCrossCircled } from "react-icons/rx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiTeamIdea, GiTeamUpgrade, GiUpgrade } from "react-icons/gi";
import { MdIntegrationInstructions, MdSavings, MdWifiCalling } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { IoClose, IoLogoLinkedin } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

export const allIcons = {
  oldWay: <PiArrowCircleDownRightBold size={28} fill="#10b981" />,
  newWay: <PiArrowCircleUpRightBold size={28} fill="#10b981" />,
  ai: <SiOpenai size={40} />,
  chatbot: <SiChatbot size={40} />,
  automation: <TbSettingsAutomation size={45} />,
  close: <RxCrossCircled size={30} />,
  leftArrow: <FaChevronLeft />,
  rightArrow: <FaChevronRight />,
  teamEfficiency: <GiTeamUpgrade size={40} />,
  costSavings: <MdSavings size={40} />,
  boostExperience: <GiTeamIdea size={40} />,
  scalable: <GiUpgrade size={40} />,
  discoveryCall: <MdWifiCalling size={40} />,
  bespoke: <RiUserSettingsFill size={40} />,
  inteegration: <MdIntegrationInstructions size={40} />,
  support: <BiSupport size={40} />,
  chatClose: <IoClose size={28} />,
  send: <IoMdSend size={28} />,
  linkedin: <IoLogoLinkedin size={24} />,
  twitter: <FaSquareXTwitter size={24} />,
};
