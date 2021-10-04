import React from 'react';
import { Form } from 'react-bootstrap';


export default function ContactForm() {
    return (
        <>
        <div className="formContainer">
            <Form>
                <Form.Group className="p-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Let's work </Form.Label>
                    <Form.Control as="textarea" rows={10} placeholder="Thank you for checking out my page. By now you have a better idea about me and my purpose, so don't hesitate to contact me ! I love to collaborate, click on the social links to get started ." disabled/>
                </Form.Group>
                <Form.Group className="mb-2 p-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Contact me :</Form.Label >
                    <Form.Control type="text" placeholder="d.vannieuwenhuyse@gmail.com" disabled/>
                    <Form.Label>Call me :</Form.Label >
                    <Form.Control type="text" placeholder="+32 472 4* ** **" disabled/>
                </Form.Group>
            </Form>
        </div>
        
    </>
    )
}
