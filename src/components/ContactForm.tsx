import React from 'react';
import { Card } from 'react-bootstrap';
import ContactCard from './ContactCard';


export default function ContactForm() {
    return (
        <>
            <div className="formContainer">
                <Card style={{ border:'primary' }}>
                    <Card.Body>
                        <Card.Title>CONTACT ME<hr/></Card.Title>
                        <Card.Text>
                            Let's build the future together ! <br/>
                            If you like what you see, click one of the icons below to get in touch.<br></br>
                            <ContactCard />
                            <p> My cat is a recovering alcoholic, please give us a chance so we can pay her rehab.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
