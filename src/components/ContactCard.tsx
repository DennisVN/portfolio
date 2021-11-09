import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

export default function ContactCard() {
    return (
        <div>

                    
                        <SocialIcon className="m-2" url="mailto:d.vannieuwenhuyse@gmail.com" bgColor="black" /> <p className="linkedText">d.vannieuwenhuyse@gmail.com </p>
                        <SocialIcon className="m-2" url="https://linkedin.com/in/dennisvannieuwenhuyse" target="_blank" bgColor="black" /> <p className="linkedText">/dennisvannieuwenhuyse</p>
                        <SocialIcon className="m-2" url="https://github.com/DennisVN" target="_blank" bgColor="black" /><p className="linkedText"> github.com/DennisVN</p>
                        <SocialIcon className="m-2" url="https://discordapp.com/users/4590/" target="_blank" bgColor="black" /> <p className="linkedText"> discordapp.com/users/4590/ </p>
                        <br/>
                        <img src="/images/grayscale.png" className="img-fluid mx-auto" alt="rare display of a wild Beaucoupdargent"></img>
                        <br/>
                        <p className="dadJoke">Thanks for checking out my Portfolio.<br/> See you soon ! </p>


        </div>
    )
}
