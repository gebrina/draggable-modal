import styled from "@emotion/styled";
import { motion } from "motion/react";

export type TButtonVariant = "primary" | "secondary";

type TButtonProps = {
  variant: TButtonVariant;
};

export const Button = styled(motion.button)<TButtonProps>`
  border: 0.2rem solid;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.7rem 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--tertiary);
  width: max-content;
  background-color: ${({ variant }) =>
    variant === "primary" ? "var(--primary)" : "var(--secondary)"};
  &:hover {
    background-color: ${({ variant }) =>
      variant === "primary" ? "var(--tertiary)" : "var(--tertiary)"};
    color: ${({ variant }) =>
      variant === "primary" ? "var(--secondary)" : "var(--primary)"};
  }

  @media (min-width: 500px) {
    font-size: 1rem;
  }
`;
