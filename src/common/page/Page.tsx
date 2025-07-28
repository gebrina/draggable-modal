import { FC, ReactNode } from "react";
import { PageWrapper } from "./Page.style";

export type TPageProps = {
  children: ReactNode;
};

export const Page: FC<TPageProps> = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>;
};
