import React from 'react';
import AboutCard from './AboutCard';
import { Container, Row, Col } from 'react-bootstrap';

export default function AboutMe() {
    return (
        <Container>
            <Row>
                <Col xs={12} md={12} ><AboutCard /></Col>
            </Row>
        </Container>
    )
}
