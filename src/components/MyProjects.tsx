import React from 'react';
import ProjectCard from './ProjectCard';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function MyProjects() {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={12}><ProjectCard /></Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
            </Container>
            
        </>
    )
}
