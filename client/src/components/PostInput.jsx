import React from "react";

function PostInput(props) {
    return (
        props.inputType === "input" ?
            <input onChange={props.onChange} name={props.name} className="inputs" value={props.value} /> :
            <textarea onChange={props.onChange} name={props.name} className="inputs" value={props.value} rows={props.rows} />
    )
}

export default PostInput;
