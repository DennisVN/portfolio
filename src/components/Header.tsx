import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export default function Header() {
    return (
        <div>
            <div className="fixed-bottom text-center" >
                <SocialIcon url="https://linkedin.com/in/dennisvannieuwenhuyse" />
                <SocialIcon url="https://github.com/DennisVN" />
            </div>
        </div>
    )
}
