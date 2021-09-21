import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function ContactModal(props :any){
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="container-modal-title-vcenter" cenntered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    All my contact info
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
