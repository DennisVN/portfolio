import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ContactCard from './ContactCard';


export default function ContactForm() {
    return (
        <>
        <Container>
            <Row>
                {/* <Col className="contactSpecs px-10" xs={12} md={12}> */}
                    <div className="formContainer">
                        <Card style={{ border:'primary'}}>
                            <Card.Body>
                                <Card.Title>CONTACT ME<hr/></Card.Title>
                                <Card.Text>
                                    Let's build the future together ! <br/>
                                    If you like what you see, click one of the icons below to get in touch.<br></br>
                                </Card.Text>
                                <ContactCard />
                            </Card.Body>
                        </Card>
                    </div>
                {/* </Col> */}
            </Row>
        </Container>

        </>
    )
}
