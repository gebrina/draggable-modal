import { Button } from "@cpts/button";
import { useState } from "react";
import { Page } from "../../common";
import { Modal, TModalProps } from "../../components/modal";
import { PageContent, Title } from "./HomePage.style";

export const HomePage = () => {
  const [visible, setVisible] = useState(true);

  const handleModalClose = () => {
    setVisible(false);
  };

  const modalContent = (
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit recusandae
      eos nisi tempora nulla repudiandae. Ab eum aliquam optio facere.
    </p>
  );

  const modalFooter = (
    <div>
      <Button
        variant="primary"
        onClick={handleModalClose}
        label="Proceed to Payment"
      />
      <Button variant="secondary" onClick={handleModalClose} label="Reject" />
    </div>
  );

  const modalProps: TModalProps = {
    title: "Payment Information",
    onClose: handleModalClose,
    visible,
    children: modalContent,
    footer: modalFooter,
  };

  return (
    <Page>
      <PageContent>
        <Title>Draggable Modal</Title>
        <Button
          variant="primary"
          label="Show Modale"
          onClick={() => setVisible(true)}
        />{" "}
        {visible && <Modal {...modalProps} />}
      </PageContent>
    </Page>
  );
};
