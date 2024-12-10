import React from 'react'
import googleIcon from "../assets/images/google icon.png";
import '../css/home.css';

function GoogleAuth(props) {
    return (
        <div className="gauth-box">
            <img src={googleIcon} alt="Google icon" />
            <p>{props.text}</p>
        </div>
    )
}

export default GoogleAuth
