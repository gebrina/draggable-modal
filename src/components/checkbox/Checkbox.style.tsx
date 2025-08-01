import styled from "@emotion/styled";
import { motion } from "motion/react";

export const CheckboxWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
`;

export const Label = styled(motion.label)`
  font-size: 1.3rem;
`;

export const InputChekbox = styled.div`
  height: 20px;
  width: 20px;
  background-color: var(--tertiary);
  color: var(--primary);
  display: grid;
  place-content: center;
  border-radius: 0.3rem;
  box-shadow: 0rem 0rem 0.01rem 0.1rem var(--primary);
  &[aria-checked="true"] {
    background-color: var(--primary);
    color: var(--tertiary);
  }
`;
