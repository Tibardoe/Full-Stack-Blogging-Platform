import React, { useState } from "react";
import Profile from '../components/Profile';
import "../css/blogs.css";
import ProfileMenu from "../components/ProfileMenu";
import PostInput from "../components/PostInput";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function PostBlog() {
    const [clickProfile, setClickProfile] = useState(false);
    const navigate = useNavigate();

    function handleClickProfile() {
        setClickProfile(prevState => !prevState)
    };

    function handlePost(event) {
        navigate("/user-profile")
    }

    return (
        <div>
            <div className="header">
                <nav>
                    <h1>FREEEDOM</h1>
                    <div className="nav-right">
                        <Profile onClick={handleClickProfile} initials="T" />
                        {clickProfile && <ProfileMenu />}
                    </div>
                </nav>
            </div>
            <form className="post-form">
                <PostInput inputType="input" />
                <PostInput inputType="textArea" rows="7" />
                <PostInput inputType="input" content="gg" />
                <Button onSubmit={handlePost} text="Post" />
            </form>


        </div>
    );
};

export default PostBlog;
