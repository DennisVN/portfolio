import React from 'react';
import AboutCard from './AboutCard';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

export default function AboutMe() {
    return (
        <>
        <motion.div initial={{scaleY: 0}} animate={{scaleY: 1}} exit={{scaleY: 0}} transition={{duration:1}} >
            <Container>
                <Row>
                    <Col xs={12} md={12} ><AboutCard /></Col>
                </Row>
            </Container>
        </motion.div>
        </>
    )
}
