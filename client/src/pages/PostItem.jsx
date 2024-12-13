import React from "react";
import "../css/blogs.css";
import UserProfile from "../components/UserProfile";
import { useNavigate } from "react-router-dom";

function PostItem(props) {
    const navigate = useNavigate();


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
                        <button onClick={() => navigate(`/delete-post/${props.id}`)} className="delete-btn">Delete</button>
                    </div>
                )}


            </div>


        </div>
    )
}

export default PostItem;
