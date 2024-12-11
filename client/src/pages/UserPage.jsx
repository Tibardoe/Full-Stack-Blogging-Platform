import React, { useState } from "react";
import WriteNavItem from "../components/WriteNavItem";
import Profile from '../components/Profile';
import "../css/blogs.css";
import PostItem from "./PostItem";
import ProfileMenu from "../components/ProfileMenu";
import { useNavigate } from "react-router-dom";

function UserPage() {
    const [clickProfile, setClickProfile] = useState(false);
    const navigate = useNavigate();

    function handleClickProfile() {
        setClickProfile(prevState => !prevState)
    };

    return (
        <div>
            <div className="header" style={{ borderBottom: "none" }}>
                <nav>
                    <p style={{
                        fontFamily: 'Titillium Web, sans-serif', fontSize: "1.5rem", textDecoration: "underline", cursor: "pointer"
                    }} onClick={() => navigate("/")}>
                        Sign Out
                    </p>
                    <div className="nav-right">
                        <WriteNavItem />
                        <Profile onClick={handleClickProfile} initials="T" />
                        {clickProfile && <ProfileMenu />}
                    </div>
                </nav>
                <h2 style={{ textAlign: "center", fontFamily: 'Titillium Web, sans-serif' }}>YOUR POST</h2>
            </div>
            <PostItem
                title="The standard Lorem Ipsum passage, used since the 1500s"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                isOwnProfilePage={true}
            />
            <PostItem
                title="The standard Lorem Ipsum passage, used since the 1500s"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                isOwnProfilePage={true}
            />
        </div>
    );
};

export default UserPage;
