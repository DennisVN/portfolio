import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import './App.css';

export default function Name() {
    return (
        <>
        <Container>
            <Row>
                <Col xs={6} md={12}><div className="fancyName" >DENNIS</div></Col><hr />
                <Col xs={6} md={12}><div className="fancySubName">Let me fix this for you</div></Col>
            </Row>  
        </Container>
        </>
    )
}
