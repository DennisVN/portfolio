import React from 'react';
import ContactForm from './ContactForm';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';


export default function ContactInfo() {
    return (
        <>
        <motion.div initial='out' animate='in' exit='out' variants={animationOne} transition={transition}>
            <div className="cardContainer text-center p-1 my-n1">
                <Container>
                    <Row>
                        <Col xs={12} md={12}><ContactForm /></Col>
                    </Row>
                </Container>
            </div>
        </motion.div>
        </>
    )
}
