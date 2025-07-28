import { Page } from "../../common";
import { Message, PageContent, StyledLink, Title } from "./NotFoundStyle";

export const NotFoundPage = () => (
  <Page>
    <PageContent>
      <Title>Page Not Found</Title>
      <Message>Honestly speaking nothing is here🫡!</Message>
      <StyledLink to={"/"}>Go to Home Page</StyledLink>
    </PageContent>
  </Page>
);
