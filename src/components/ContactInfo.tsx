import React from 'react';
import ContactForm from './ContactForm';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


export default function ContactInfo() {
    return (
        <>
        <div className="contactContainer text-center">
            <Container>
                <Row>
                    <Col xs={12} md={12}><ContactForm /></Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
