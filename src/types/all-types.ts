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
