import React from 'react';

export default function Header() {
    return (
        <>
        <div style={{display: 'flex', justifyContent: 'flex-end', margin:"3px"}} className="header p-1" >
        {/* <SocialIcon url="https://linkedin.com/in/dennisvannieuwenhuyse" target="_blank" />
        <SocialIcon url="https://github.com/DennisVN" target="_blank" /> */}
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-start'}} className="header m-2" >
        <p>DVN PORTFOLIO</p><hr />
        </div>
        </>
    )
}
