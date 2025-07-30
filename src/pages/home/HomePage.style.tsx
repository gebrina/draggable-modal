import styled from "@emotion/styled";
import { motion } from "motion/react";

export const PageContent = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
  height: 100%;
  color: var(--primary);
  background-color: var(--tertiary);
`;

export const Title = styled(motion.h1)`
  font-size: 3rem;
  text-transform: uppercase;
  word-spacing: 20px;
  text-align: center;
  padding: 1rem;
  box-shadow: 0.1rem 0.05rem 0.1rem var(--primary);
`;

export const ModalContent = styled.div``;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 0.3rem;
`;
