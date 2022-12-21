import { cloneElement, useState } from "react";
import { Button, Modal } from "react-bootstrap";

const GeneralModal = ({buttonText, modalTitle, modalBody, variant}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant={variant} onClick={handleShow} className="mx-2">
        {buttonText}
      </Button>

      <Modal 
      show={show} 
      onHide={handleClose} 
      backdrop="static" 
      keyboard={false}
      centered>
        <Modal.Header closeButton>
          <Modal.Title handleClose={handleClose}>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{cloneElement(modalBody,{handleClose:handleClose})}</Modal.Body>
      </Modal>
    </>
  );
}
 
export default GeneralModal;