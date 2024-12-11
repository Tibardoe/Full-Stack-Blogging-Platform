import React from "react";

function PostInput(props) {
    return (
        props.inputType === "input" ?
            <input className="inputs" value={props.content} /> :
            <textarea className="inputs" value={props.content} rows={props.rows} />

        // <props.inputType className="inputs" value={props.content} rows={props.rows} />
    )
}

export default PostInput;
