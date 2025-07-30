import styled from "@emotion/styled";
import { motion } from "motion/react";

export type TButtonVariant = "primary" | "secondary";

type TButtonProps = {
  variant: TButtonVariant;
};

export const Button = styled(motion.button)<TButtonProps>``;
