import React from 'react';
import { useNavigate } from 'react-router-dom';

function Button(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/signup")
    };

    return (
        <button onClick={handleClick} className="hero-btn">{props.text}</button>
    );
};

export default Button;
