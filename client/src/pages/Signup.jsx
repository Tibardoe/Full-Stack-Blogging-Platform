import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import GoogleAuth from "../components/GoogleAuth";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import "../css/home.css";
import Login from "./Login";

function Signup() {
    const [signin, setSignin] = useState(false);
    const [exitAuth, setExitAuth] = useState(false);

    const navigate = useNavigate();

    function handleClick() {
        navigate("/blogs")
    };

    function signinClick() {
        setSignin(true);
    };

    function handleExit() {
        setExitAuth(true);
    };

    if (exitAuth) {
        return null;
    };

    return (
        signin ?
            <Login />
            :
            <div className="auth-box">
                <div className="auth-card">
                    <svg onClick={handleExit} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#125938"
                        d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
                    </svg >
                    <h1>Join Freedom</h1>
                    <GoogleAuth text="Sign Up with Google" />
                    <div className="or-section"><span></span>Or <span></span></div>
                    <form>
                        <Input
                            name="username"
                            logo=<svg xmlns=" http://www.w3.org/2000/svg" width="30" height="30"
                                viewBox="0 0 24 24"><path fill="currentColor"
                                    d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
                            text="Username"
                            type="text"
                        />
                        <Input
                            name="password"
                            logo=<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                viewBox="0 0 24 24"><path fill="currentColor"
                                    d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" /></svg>
                            text="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <Input
                            name="password"
                            logo=<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                viewBox="0 0 24 24"><path fill="currentColor"
                                    d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3" /></svg>
                            text="Re-enter password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <Button onSubmit={handleClick} text="Submit" />
                        <p>Don't have an account yet? <span onClick={signinClick}>Sign In</span> </p>
                    </form>

                </div >


            </div >
    )
}

export default Signup;
