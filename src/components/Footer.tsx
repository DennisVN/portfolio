import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function Footer() {
    return (
        <>
            <div>
                <br/><br/>
                <Container>
                    <Row>
                        <Col>
                            <div className="footerText fixed-bottom text-center" >
                                <p>"If you believe you are here to create, seek love & knowledge and you will find a way" - Modern Life Is War</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    
    )
}
