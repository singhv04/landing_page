"use client";

import useToggle from "@/hooks/useToggle";
import BookButton from "../button/BookButton";
import AutomaAILogo from "../logo/Logo";
import ModalBody from "../modal/ModalBody";
import CalendlyCard from "../calendly/CalendlyCard";

const Navbar: React.FC = () => {
  const [isOpen, toggle] = useToggle();

  return (
    <div className="cg flex items-center justify-between px-3 py-6 md:px-14">
      <AutomaAILogo />
      <BookButton title="Book Demo" onclick={toggle} />
      {isOpen && <ModalBody modal={<CalendlyCard onClose={toggle} />} />}
    </div>
  );
};

export default Navbar;
