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

export const Button = styled(motion.button)`
  padding: 5px;
  font-size: 1.5rem;
  width: max-content;
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-weight: bold;
  background-color: var(--primary);
  color: var(--secondary);
  border: none;
  border-radius: 0.5rem;
  margin: 1rem;
  box-shadow: 0.3rem 0.3rem 0.3rem var(--primary),
    -0.3rem -0.3rem 0.3rem var(--secondary);
  &:hover {
    background-color: var(--secondary);
    color: var(--primary);
    box-shadow: none;
  }
`;
