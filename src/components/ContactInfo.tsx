import React from 'react';
import ContactForm from './ContactForm';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import ContactCard from './ContactCard';


export default function ContactInfo() {
    return (
        <>
        <div className="contactContainer text-center">
            <Container>
                <Row>
                    <Col xs={12} md={8}><ContactForm /></Col>
                    <Col xs={12} md={4}><ContactCard /></Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
