import styled from "@emotion/styled";
import { motion } from "motion/react";

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secondary);
  color: var(--tertiary);
  padding: 0.1rem 0.5rem;
  flex: 0.2;
`;

export const ModalContent = styled.div`
  flex: 2;
`;

export const ModalWrapper = styled(motion.div)`
  box-shadow: 1rem 0.1rem 2rem 0.1rem var(--primary);
  min-height: 30rem;
  position: fixed;
  background-color: var(--tertiary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalFooter = styled(motion.div)`
  margin: 0;
`;
