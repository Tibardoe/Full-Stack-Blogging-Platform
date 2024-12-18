import React, { useEffect, useState } from "react";
import WriteNavItem from "../components/WriteNavItem";
import Profile from '../components/Profile';
import "../css/blogs.css";
import PostItem from "./PostItem";
import ProfileMenu from "../components/ProfileMenu";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Blogs() {
    const [clickProfile, setClickProfile] = useState(false);
    const [blogPosts, setBlogPosts] = useState([]);
    const [initials, setInitials] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                axios.defaults.withCredentials = true;
                const backendUrl = process.env.REACT_APP_BACKEND_URL;
                const response = await axios.get(`${backendUrl}/blogs`, { withCredentials: true });
                setBlogPosts(response.data.blogs);
                setInitials(response.data.userInitials);
            } catch (error) {
                alert("Unauthorized access")
                navigate("/")
            }

        };

        fetchBlogs()
    }, [navigate]);



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
                        <Profile onClick={handleClickProfile} initials={initials.slice(0, 1)} />
                        {clickProfile && <ProfileMenu />}
                    </div>
                </nav>
            </div>
            <ul>
                {blogPosts.map((post, index) => {
                    return (<li key={index}><PostItem
                        title={post.title}
                        content={post.content}
                        date={post.date_posted}
                        username={post.username.split("@")[0]}
                        initials={post.username.slice(0, 1)}
                    /></li>)
                })}
            </ul>

        </div>
    );
};

export default Blogs;
