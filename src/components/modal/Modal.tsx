import { FC, ReactNode } from "react";
import { FaX } from "react-icons/fa6";
import { ModalContent, ModalHeader, ModalWrapper } from "./Modal.style";

export type TModalProps = {
  title: string;
  visible: boolean;
  children: ReactNode;
  onClose: () => void;
};

export const Modal: FC<TModalProps> = ({
  title,
  visible,
  children,
  onClose,
}) => {
  return (
    visible && (
      <ModalWrapper>
        <ModalHeader>
          <h1>{title}</h1> <FaX onClick={onClose} />
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    )
  );
};
