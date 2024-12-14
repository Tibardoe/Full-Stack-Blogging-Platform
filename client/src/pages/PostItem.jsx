import React from "react";
import "../css/blogs.css";
import UserProfile from "../components/UserProfile";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PostItem(props) {
    const navigate = useNavigate();
    async function handleDelete() {
        try {
            await axios.delete(`/delete/${props.id}`);
            props.onDelete(props.id)
        } catch (error) {
            console.log(error.message);
            alert("Post not found")
        }
    }


    return (
        <div className="posts">
            <UserProfile name={props.username} initials={props.initials} />
            <h2 className="title">{props.title}</h2>
            <p className="content"> {props.content}</p>
            <div className="date-section">
                <small>{props.date}</small>

                {props.isOwnProfilePage && (
                    <div className="actions">
                        <button onClick={() => navigate(`/edit-post/${props.id}`)} className="edit-btn">Edit</button>
                        <button onClick={handleDelete} className="delete-btn">Delete</button>
                    </div>
                )}


            </div>


        </div>
    )
}

export default PostItem;
