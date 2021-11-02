import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

export default function ContactCard() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="contactSpecs" xs={12} md={12}>
                        <SocialIcon className="m-2" url="mailto:d.vannieuwenhuyse@gmail.com" bgColor="black" /> <p className="linkedText">d.vannieuwenhuyse@gmail.com </p>
                        <SocialIcon className="m-2" url="https://linkedin.com/in/dennisvannieuwenhuyse" target="_blank" bgColor="black" /> <p className="linkedText">/dennisvannieuwenhuyse</p>
                        <SocialIcon className="m-2" url="https://github.com/DennisVN" target="_blank" bgColor="black" /><p className="linkedText"> github.com/DennisVN</p>
                        <SocialIcon className="m-2" url="https://discordapp.com/users/4590/" target="_blank" bgColor="black" /> <p className="linkedText"> discordapp.com/users/4590/ </p>
                        <br/>
                    </Col>
                </Row>
            </Container>
            <img src="/images/grayscale.png" className="img-fluid mx-auto" alt="rare display of a wild Beaucoupdargent"></img>
        
        </div>
    )
}
