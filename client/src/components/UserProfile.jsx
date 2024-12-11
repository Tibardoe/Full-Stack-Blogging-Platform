import React from "react";
import "../css/blogs.css";
import Profile from '../components/Profile';

function UserProfile(props) {
    return (
        <div className="user-profile">
            <Profile initials="T" />
            <p>{props.name}</p>
        </div>
    );
};

export default UserProfile;
