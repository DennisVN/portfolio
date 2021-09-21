import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';

export default function Header() {
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'flex-end'}} className="header p-1" >
        <SocialIcon url="https://linkedin.com/in/dennisvannieuwenhuyse" />
        <SocialIcon url="https://github.com/DennisVN" />
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-start'}} className="header m-2" >
        <p>Portfolio for Dennis (Junior WebDev)</p><hr />
        </div>
        </>
    )
}
