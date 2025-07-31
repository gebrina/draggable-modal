import { Button } from "@cpts/button";
import { useState } from "react";
import { Page } from "../../common";
import { Modal, TModalProps } from "../../components/modal";
import {
  ModalContent,
  ModalFooter,
  PageContent,
  Title,
} from "./HomePage.style";

export const HomePage = () => {
  const [visible, setVisible] = useState(false);

  const handleModalClose = () => {
    setVisible(false);
  };

  const modalContent = (
    <ModalContent>
      {`
       
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit recusandae
      eos nisi tempora nulla repudiandae. Ab eum aliquam optio facere.
     `.repeat(3)}
      <a href="#">Learn More</a>
    </ModalContent>
  );

  const modalFooter = (
    <ModalFooter>
      <Button
        variant="primary"
        onClick={handleModalClose}
        label="Proceed to Payment"
      />
      <Button variant="secondary" onClick={handleModalClose} label="Reject" />
    </ModalFooter>
  );

  const modalProps: TModalProps = {
    title: "Payment Information",
    onClose: handleModalClose,
    visible,
    draggable: true,
    children: modalContent,
    footer: modalFooter,
  };

  return (
    <Page>
      <PageContent>
        <Title>Draggable Modal</Title>
        <Button
          variant="primary"
          label="Show Modal"
          onClick={() => setVisible(true)}
        />
        <Modal {...modalProps} />
      </PageContent>
    </Page>
  );
};
