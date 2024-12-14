import React from 'react';
import Home from "../pages/Home";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Reset from '../pages/Reset';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogs from "../pages/Blogs";
import UserPage from '../pages/UserPage';
import EditPage from '../pages/EditPage';
import PostBlog from '../pages/PostBlog';
import GoogleAuth from './GoogleAuth';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path="/reset-password" element={<Reset />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/user-profile" element={<UserPage />} />
                <Route path="/edit-post/:id" element={<EditPage />} />
                <Route path="/post-blog" element={<PostBlog />} />
            </Routes>
        </Router>
    );
};

export default App;
