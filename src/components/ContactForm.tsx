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
                            <br/>
                            <p className="dadJoke">Thanks for checking out my Portfolio. See you soon ! </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
