import React from "react";
import "../css/blogs.css";
import UserProfile from "../components/UserProfile";
import { useNavigate } from "react-router-dom";

function PostItem(props) {
    const navigate = useNavigate();
    return (
        <div className="posts">
            <UserProfile name="Big Tee" />
            <h2 className="title">{props.title}</h2>
            <p className="content"> {props.content}</p>
            <div className="date-section">
                <small>
                    Feb 12, 2024
                </small>

                {props.isOwnProfilePage && (
                    <div className="actions">
                        <button onClick={() => navigate("/edit-post")} className="edit-btn">Edit</button>
                        <button onClick={() => navigate("/delete-post")} className="delete-btn">Delete</button>
                    </div>
                )}


            </div>


        </div>
    )
}

export default PostItem;
