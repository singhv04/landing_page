import { allIcons } from "@/icons/all-icons";
import { CloseModalProps } from "@/types/all-types";

const CalendlyCard: React.FC<CloseModalProps> = ({ onClose }) => {
  const { close } = allIcons;
  return (
    <div className="w-full md:w-[75%]">
      <div className="relative w-full rounded-xl border-2 border-emerald-300/25 bg-background p-8 shadow-xl shadow-emerald-300/25">
        <div
          onClick={onClose}
          className="absolute right-3 top-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-red-700"
        >
          {close}
        </div>
        <div className="mb-6 text-center">
          <h2 className="mb-2 text-xl font-bold text-emerald-500 md:text-3xl">
            Schedule a Meeting
          </h2>
          <p className="text-xs text-muted md:text-lg">
            Choose a time that works best for you, and let’s connect!
          </p>
        </div>
        <div className="overflow-hidden rounded-lg">
          <iframe
            src="https://calendly.com/mailmeatsinghv/30min"
            width="100%"
            height="100%"
            className="h-[530px] w-full border-2"
            title="Calendly Scheduling"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CalendlyCard;
