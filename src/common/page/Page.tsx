import { FC, ReactNode } from "react";
import { PageWrapper } from "./Page.style";

export type TPageProps = {
  className?: string;
  children: ReactNode;
};

export const Page: FC<TPageProps> = ({ className, children }) => (
  <PageWrapper className={className}>{children}</PageWrapper>
);
