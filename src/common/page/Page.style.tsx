import styled from "@emotion/styled";
import { motion } from "motion/react";

export const PageWrapper = styled(motion.div)`
  height: 100vh;
  background-color: var(--bg-color);
  color: var(--secondary);
  padding: 3rem;
  border-top: 4px solid var(--primary);
`;
