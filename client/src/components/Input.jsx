import React from "react";
import '../css/login.css';

function Input(props) {
    return (
        <div className="input-box">
            {props.logo}
            <input
                type={props.type}
                placeholder={props.text}
                autoComplete="props.autoComplete"
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                required />
        </div>
    );
};

export default Input;
