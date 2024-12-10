import React from 'react';
import Home from "../pages/Home";
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Reset from '../pages/Reset';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path="/reset-password" element={<Reset />} />
            </Routes>
        </Router>
    );
};

export default App;
