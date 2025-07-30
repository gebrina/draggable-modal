import { FC, ReactNode } from "react";
import { FaX } from "react-icons/fa6";
import {
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalWrapper,
} from "./Modal.style";

export type TModalProps = {
  title: string;
  visible: boolean;
  children: ReactNode;
  footer: ReactNode;
  onClose: () => void;
};

export const Modal: FC<TModalProps> = ({
  title,
  visible,
  children,
  footer,
  onClose,
}) => {
  return (
    visible && (
      <ModalWrapper>
        <ModalHeader>
          <h1>{title}</h1> <FaX className="close-btn" onClick={onClose} />
        </ModalHeader>
        <ModalContent>{children}</ModalContent>
        <ModalFooter>{footer}</ModalFooter>
      </ModalWrapper>
    )
  );
};
