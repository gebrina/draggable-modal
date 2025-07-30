import styled from "@emotion/styled";
import { motion } from "motion/react";

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secondary);
  color: var(--tertiary);
  padding: 0 0.5rem;
  min-height: 4rem;

  & svg.close-btn {
    font-size: 2.5rem;
    cursor: pointer;
    padding: 0.5rem;
    &:hover {
      border-radius: 0.3rem;
      color: var(--primary);
      background-color: var(--tertiary);
    }
  }

  @media (min-width: 500px) {
    h1 {
      font-size: 1.3rem;
    }
  }
`;

export const ModalContent = styled.div`
  flex: 1;
  padding: 0.5rem;
  overflow: auto;
`;

export const ModalWrapper = styled(motion.div)`
  box-shadow: 0.1rem 0.1rem 2rem 0.1rem var(--secondary);
  min-height: 30rem;
  max-height: 35rem;
  position: fixed;
  background-color: var(--tertiary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 300px;
  width: 60%;
  left: 50%;
  border-radius: 0.5rem;
  overflow: hidden;

  @media (min-width: 700px) {
    width: 80%;
    left: 10%;
  }

  @media (min-width: 1000px) {
    width: 70%;
    left: 15%;
  }
`;

export const ModalFooter = styled(motion.div)`
  background-color: var(--bg-color);
  padding: 0.5rem;
`;
