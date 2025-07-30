import { AnimatePresence, Variants } from "motion/react";
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

const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
    },
  },
};

export const Modal: FC<TModalProps> = ({
  title,
  visible,
  children,
  footer,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {visible && (
        <ModalWrapper
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          key="modal"
        >
          <ModalHeader>
            <h1>{title}</h1> <FaX className="close-btn" onClick={onClose} />
          </ModalHeader>
          <ModalContent>{children}</ModalContent>
          <ModalFooter>{footer}</ModalFooter>
        </ModalWrapper>
      )}
    </AnimatePresence>
  );
};
