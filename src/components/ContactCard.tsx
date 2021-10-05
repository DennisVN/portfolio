import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

export default function ContactCard() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <SocialIcon className="m-2" url="mailto:d.vannieuwenhuyse@gmail.com" bgColor="black" />
                        <SocialIcon className="m-2" url="https://linkedin.com/in/dennisvannieuwenhuyse" target="_blank" bgColor="black" />
                        <SocialIcon className="m-2" url="https://github.com/DennisVN" target="_blank" bgColor="black" />
                        <SocialIcon className="m-2" url="https://discordapp.com/users/4590/" target="_blank" bgColor="black" />
                    </Col>
                </Row>
            </Container>
            <img src="/images/meandshtinkie.png" className="img-fluid" alt="a man holding a cat and a bottle"></img>
        
        </div>
    )
}
