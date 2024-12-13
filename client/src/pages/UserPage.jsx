import React, { useEffect, useState } from "react";
import WriteNavItem from "../components/WriteNavItem";
import Profile from '../components/Profile';
import "../css/blogs.css";
import PostItem from "./PostItem";
import ProfileMenu from "../components/ProfileMenu";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserPage() {
    const [clickProfile, setClickProfile] = useState(false);
    const [userPosts, setUserPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const userPosts = async () => {
            const response = await axios.get("/user-blogs");
            setUserPosts(response.data.userBlogs || []);
        }

        userPosts();
    }, []);


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
                        <Profile onClick={handleClickProfile} initials={userPosts.length > 0 ? userPosts[0].username.slice(0, 1).toUpperCase() : "?"} />
                        {clickProfile && <ProfileMenu />}
                    </div>
                </nav>
                <h2 style={{ textAlign: "center", fontFamily: 'Titillium Web, sans-serif' }}>YOUR POST</h2>
            </div>
            <ul>
                {userPosts.map((post, index) => {
                    const username = userPosts.length > 0 ? userPosts[0].username.split("@")[0] : "Unknown";
                    const initials = userPosts.length > 0 ? userPosts[0].username.slice(0, 1).toUpperCase() : "?";
                    return (
                        <li key={index}>
                            <PostItem
                                id={post.blog_id}
                                title={post.title}
                                content={post.content}
                                date={post.date_posted}
                                initials={initials}
                                username={username}
                                isOwnProfilePage={true}
                            />
                        </li>
                    );
                })}

            </ul>
        </div>
    );
};

export default UserPage;
