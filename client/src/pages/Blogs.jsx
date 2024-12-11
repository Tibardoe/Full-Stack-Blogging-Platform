import React, { useState } from "react";
import WriteNavItem from "../components/WriteNavItem";
import Profile from '../components/Profile';
import "../css/blogs.css";
import PostItem from "./PostItem";
import ProfileMenu from "../components/ProfileMenu";

function Blogs() {
    const [clickProfile, setClickProfile] = useState(false);

    function handleClickProfile() {
        setClickProfile(prevState => !prevState)
    };

    return (
        <div>
            <div className="header">
                <nav>
                    <h1>FREEEDOM</h1>
                    <div className="nav-right">
                        <WriteNavItem />
                        <Profile onClick={handleClickProfile} initials="T" />
                        {clickProfile && <ProfileMenu />}
                    </div>
                </nav>
            </div>
            <PostItem
                title="The standard Lorem Ipsum passage, used since the 1500s"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
            <PostItem
                title="The standard Lorem Ipsum passage, used since the 1500s"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
        </div>
    );
};

export default Blogs;
