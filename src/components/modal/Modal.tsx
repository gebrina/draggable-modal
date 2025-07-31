import { AnimatePresence, Variants } from "motion/react";
import { FC, ReactNode, useEffect, useRef } from "react";
import { FaX } from "react-icons/fa6";
import {
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalWrapper,
} from "./Modal.style";

export type TModalProps = {
  title: string;
  visible: boolean;
  draggable?: boolean;
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
  draggable,
  children,
  footer,
  onClose,
}) => {
  const modalHeaderRef = useRef<HTMLDivElement | null>(null);
  const modalWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!draggable || !modalHeaderRef.current || !modalWrapperRef.current)
      return;

    const modalHeader = modalHeaderRef.current;
    const modalWrapper = modalWrapperRef.current;

    let initialX = 0,
      initialY = 0,
      initialLeft = 0,
      initialTop = 0;

    const setModalPostion = (left: number, top: number) => {
      modalWrapper.style.left = `${left}px`;
      modalWrapper.style.top = `${top}px`;
    };

    const handleMouseDown = (e: MouseEvent) => {
      // Get modal initial position relative to the viewport
      const { top, left } = modalWrapper.getBoundingClientRect();

      initialX = e.clientX;
      initialY = e.clientY;
      initialLeft = left;
      initialTop = top;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Make sure the header is pressed atleast once
      if (!(initialX || initialY || initialLeft || initialTop)) return;
      const deltaX = e.clientX - initialX;
      const deltaY = e.clientY - initialY;

      const left = initialLeft + deltaX;
      const top = initialTop + deltaY;

      setModalPostion(left, top);
    };

    const handleMouseUp = () => {
      initialX = 0;
      initialY = 0;
      initialLeft = 0;
      initialTop = 0;
    };

    modalHeader.addEventListener("mousedown", handleMouseDown);
    modalHeader.addEventListener("mousemove", handleMouseMove);
    modalHeader.addEventListener("mouseup", handleMouseUp);

    console.log(modalHeader, modalWrapper);

    return () => {
      modalHeader.removeEventListener("mousedown", handleMouseDown);
      modalHeader.removeEventListener("mousemove", handleMouseMove);
      modalHeader.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggable, visible]);

  return (
    <AnimatePresence>
      {visible && (
        <ModalOverlay>
          <ModalWrapper
            ref={modalWrapperRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key="modal"
          >
            <ModalHeader ref={modalHeaderRef} isDraggable={draggable}>
              <h1>{title}</h1>
              <FaX
                tabIndex={0}
                role="button"
                className="close-btn"
                onClick={onClose}
              />
            </ModalHeader>
            <ModalContent>{children}</ModalContent>
            <ModalFooter>{footer}</ModalFooter>
          </ModalWrapper>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};
