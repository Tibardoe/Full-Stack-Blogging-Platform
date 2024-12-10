import React from 'react';

function Button(props) {
    return (
        <button onClick={props.onSubmit} className="hero-btn">{props.text}</button>
    );
};

export default Button;
