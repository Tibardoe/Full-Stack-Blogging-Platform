import React, { useEffect, useState } from "react";
import Profile from '../components/Profile';
import "../css/blogs.css";
import ProfileMenu from "../components/ProfileMenu";
import PostInput from "../components/PostInput";
import Button from "../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditPage() {
    const [clickProfile, setClickProfile] = useState(false);
    const { id } = useParams();
    const [editPost, setEditPost] = useState({ title: "", content: "" });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`/edit-post/${id}`);
            setEditPost(response.data.foundPost)
        }

        fetchData()
    }, [id]);

    function handleClickProfile() {
        setClickProfile(prevState => !prevState)
    };

    async function handleEdit(event) {
        event.preventDefault();
        try {
            await axios.patch(`/edit-post/${id}`, editPost);
            alert("Post updated successfully!");
            navigate("/user-profile");
        } catch (error) {
            console.error("Error updating post:", error);
            alert("Error updating post");
        }
        navigate("/user-profile")
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setEditPost(prevValues => {
            return { ...prevValues, [name]: value }
        })
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
            <form className="edit-form" onSubmit={handleEdit}>
                <PostInput onChange={handleChange} name="title" inputType="input" value={editPost.title} />
                <PostInput onChange={handleChange} name="content" inputType="textArea" value={editPost.content} rows="7" />
                <Button text="Edit" />
            </form>


        </div>
    );
};
export default EditPage;
