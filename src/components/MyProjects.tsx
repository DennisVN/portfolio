import React from 'react';
import ProjectCard from './ProjectCard';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function MyProjects() {
    return (
        <>
        <motion.div initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration:0.5}} >
            <Container>
                <Row>
                    <Col xs={12} md={12} ><ProjectCard /></Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
            </Container>
        </motion.div>  
        </>
    )
}
