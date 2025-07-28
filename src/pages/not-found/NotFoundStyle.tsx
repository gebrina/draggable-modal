import styled from "@emotion/styled";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export const PageContent = styled(motion.div)`
  max-width: 700px;
  background-color: var(--tertiary);
  height: 100%;
  display: grid;
  place-content: center;
  row-gap: 2rem;
  margin: auto;
  text-align: left;
`;

export const Message = styled(motion.p)`
  color: var(--primary);
  font-size: 1.8rem;
  text-decoration: none;
  font-weight: 600;
`;

export const Title = styled(motion.h1)`
  font-size: 4rem;
`;

export const StyledLink = styled(Link)`
  color: var(--primary);
  font-size: 1.8rem;
  text-decoration: none;
  text-align: center;
  padding: 0.7rem;
  border-radius: 1rem;
  background-color: var(--primary);
  color: var(--secondary);
  &:hover {
    background-color: var(--secondary);
    color: var(--primary);
  }
`;
