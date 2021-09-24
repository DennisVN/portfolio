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
                    <Col>
                        <ProjectCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
