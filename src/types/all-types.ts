export type ButtonProps = {
  title: string;
  onclick: () => void;
};
export type IconBoxProps = {
  icon: React.ReactNode;
  heading: string;
  subheading: string;
};

export type Testimonial = {
  name: string;
  position: string;
  text: string;
  image?: string;
};
export type ModalBodyProps = {
  modal: React.ReactNode;
};
export type CloseModalProps = {
  onClose: () => void;
};
export type ChatbotProps = {
  toggle: () => void;
};
export type ResponseProps = {
  text: string;
};
 export type IPInfo = {
   ip: string;
   ipLocation: {
     city: string;
     region: string;
     country: string;
   };
 } | null;