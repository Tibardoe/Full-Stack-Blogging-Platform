import React from "react";
import "../css/blogs.css";
import Profile from '../components/Profile';

function UserProfile(props) {
<<<<<<< HEAD
=======

>>>>>>> test-branch
    return (
        <div className="user-profile">
            <Profile initials={props.initials} />
            <p>{props.name}</p>
        </div>
    );
};

export default UserProfile;
