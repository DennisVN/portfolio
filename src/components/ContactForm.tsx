import React from 'react';
import { Form } from 'react-bootstrap';


export default function ContactForm() {
    return (
        <>
        <div className="formContainer">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your e-mail:</Form.Label>
                    <Form.Control type="email" placeholder="smartperson@hireme.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Hi Dennis, let's work !" />
                </Form.Group>
            </Form>
        </div>
        
    </>
    )
}
