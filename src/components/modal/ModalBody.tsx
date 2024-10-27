import { useEffect } from "react";
import { ModalBodyProps } from "@/types/all-types";

const ModalBody: React.FC<ModalBodyProps> = ({ modal }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 top-0 z-10 flex min-h-screen items-center justify-center bg-black bg-opacity-70">
      {modal}
    </div>
  );
};

export default ModalBody;
