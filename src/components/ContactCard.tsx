import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function ContactCard() {
    return (
        <div>
            <SocialIcon url="https://linkedin.com/in/dennisvannieuwenhuyse" target="_blank"/>
            <SocialIcon url="https://github.com/DennisVN" target="_blank"/>
            <SocialIcon url="mailto:d.vannieuwenhuyse@gmail.com" />
        </div>
    )
}
