import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import './App.css';
import {motion} from 'framer-motion';
import { animationOne, transition } from '../animations';
// import { Link } from 'react-router-dom';

export default function Name() {
    return (
        <>
        <motion.div initial='out' animate='in' exit='out' variants={animationOne} transition={transition}>
            <Container>
                <Row className="nameSection">
                    <Col xs={6} md={12}><div className="fancyName " >DENNIS</div></Col><hr />
                    <Col xs={6} md={12}><div className="fancySubName">Let me fix this for you</div></Col>
                </Row>
                <Row>
                <Col xs={12} md={12}>
                    <div className="redirection font-mono font-family: ui-monospace font-family:monospace">
                        {/* <Link to="/aboutMe" style={{textDecoration: 'none', color: '#bb25fb'}}>Learn more about me</Link><br/>
                        <Link to="/myProjects" style={{textDecoration: 'none', color:'#bb25fb'}}>Check out what i have been doing</Link><br/>
                        <Link to="/contactInfo" style={{textDecoration: 'none', color: '#bb25fb'}}>Let's get in touch ! </Link><br/> */}
                    </div>
                </Col>
                </Row>  
            </Container>
        </motion.div>
        </>
    )
}
