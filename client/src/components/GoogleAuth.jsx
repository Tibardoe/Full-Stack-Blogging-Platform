import React from 'react'
import googleIcon from "../assets/images/google icon.png";
import '../css/home.css';

function GoogleAuth(props) {
    return (
        <a href="https://full-stack-blogging-platform.onrender.com/auth/google" className="gauth-box">
            <img src={googleIcon} alt="Google icon" />
            <p>{props.text}</p>
        </a>
    )
}

export default GoogleAuth
