import Image from "next/image";

const ChatLogoIcon: React.FC = () => {
  return (
    <div className="relative w-8 h-8 rounded-full border-2 border-emerald-500/25 overflow-hidden">
      <Image
        src="/logo.png"
        fill
        quality={100}
        alt="AutomaAi logo Icon"
        className="object-cover"
      />
    </div>
  );
};

export default ChatLogoIcon;
