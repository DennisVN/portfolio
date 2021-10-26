import React from 'react';
import AboutCard from './AboutCard';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

export default function AboutMe() {
    return (
        <>
        <motion.div initial='out' animate='in' exit='out' variants={animationOne} transition={transition}>
            <Container>
                <Row>
                    <Col xs={12} md={12} ><AboutCard /></Col>
                </Row>
            </Container>
        </motion.div>
        </>
    )
}
