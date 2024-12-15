import React from "react";
import "../css/blogs.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProfileMenu() {
    const navigate = useNavigate();

    function handleUserProfile() {
        navigate("/user-profile");
    };

    async function handleSignOut() {
        try {
            const backendUrl = process.env.BACKEND_URL;
            await axios.post(`${backendUrl}/logout`);
            navigate("/");
        } catch (error) {
            console.error("Error during logout:", error.message);
            alert("Failed to log out. Please try again.");
        }
    }


    return (
        <div className="profile-menu">
            <span onClick={handleUserProfile}>My Profile</span>
            <span onClick={handleSignOut}>Sign Out</span>
        </div>
    );
};

export default ProfileMenu;
