import React from "react";
import "../css/blogs.css";
import { useNavigate } from "react-router-dom";

function ProfileMenu() {
    const navigate = useNavigate();

    function handleUserProfile() {
        navigate("/user-profile");
    };

    return (
        <div className="profile-menu">
            <span onClick={handleUserProfile}>My Profile</span>
            <span onClick={() => navigate("/")}>Sign Out</span>
        </div>
    );
};

export default ProfileMenu;
