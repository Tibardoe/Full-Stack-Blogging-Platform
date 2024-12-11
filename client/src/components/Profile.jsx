import React from "react";
import "../css/blogs.css";

function Profile(props) {
    return (
        <div className="profile" onClick={props.onClick}>{props.initials}</div>
    );
};

export default Profile;
