import { Page } from "../../common";
import { Button, PageWrapper, Title } from "./HomePage.style";

export const HomePage = () => {
  return (
    <Page>
      <PageWrapper>
        <Title>Draggable Modal</Title>
        <Button>Show Modal</Button>
      </PageWrapper>
    </Page>
  );
};
