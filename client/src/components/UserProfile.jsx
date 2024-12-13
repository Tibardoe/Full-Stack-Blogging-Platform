import React, { useEffect, useState } from "react";
import "../css/blogs.css";
import Profile from '../components/Profile';
import axios from "axios";

function UserProfile(props) {
    const [initials, setInitials] = useState();

    console.log(initials);


    return (
        <div className="user-profile">
            <Profile initials={props.initials} />
            <p>{props.name}</p>
        </div>
    );
};

export default UserProfile;
