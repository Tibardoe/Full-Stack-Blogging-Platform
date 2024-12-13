import React, { useState } from "react";
import Profile from '../components/Profile';
import "../css/blogs.css";
import ProfileMenu from "../components/ProfileMenu";
import PostInput from "../components/PostInput";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PostBlog() {
    const [clickProfile, setClickProfile] = useState(false);
    const [blog, setBlog] = useState({
        title: "",
        content: ""
    });

    const navigate = useNavigate();

    function handleClickProfile() {
        setClickProfile(prevState => !prevState)
    };

    async function handlePost(event) {
        event.preventDefault();
        const { title, content } = blog;
        try {
            const response = await axios.post("/post-blog", { title, content });
            navigate("/blogs");
        } catch (error) {
            alert("Error posting blog")
        }
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setBlog(prevValues => {
            return { ...prevValues, [name]: value }
        });
    };

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
            <form className="post-form" onSubmit={handlePost}>
                <PostInput onChange={handleChange} name="title" value={blog.title} inputType="input" />
                <PostInput onChange={handleChange} name="content" value={blog.content} inputType="textArea" rows="7" />
                <Button text="Post" />
            </form>


        </div>
    );
};

export default PostBlog;
