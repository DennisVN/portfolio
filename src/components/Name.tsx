import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import './App.css';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';

export default function Name() {
    return (
        <>
        <motion.div initial='out' animate='in' exit='out' variants={animationOne} transition={transition}>
            <Container>
                <Row>
                    <Col xs={6} md={12}><div className="fancyName" >DENNIS</div></Col><hr />
                    <Col xs={6} md={12}><div className="fancySubName">Let me fix this for you</div></Col>
                </Row>  
            </Container>
        </motion.div>
        </>
    )
}
