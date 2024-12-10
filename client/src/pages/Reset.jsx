import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "../css/login.css";
import "../css/home.css";

function Reset() {
    const [step, setStep] = useState(1);

    const [exitAuth, setExitAuth] = useState(false);

    const navigate = useNavigate();

    function handleStep() {
        setStep(step + 1)
    };

    function handleHome() {
        navigate("/")
    };

    function handleExit() {
        setExitAuth(true);
    };

    if (exitAuth) {
        return null;
    };

    return (
        <div className="auth-box">
            <div className="auth-card">
                <svg onClick={handleExit} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#125938"
                    d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" />
                </svg >
                {step === 4 ? <h1 style={{
                    fontSize: "3rem",
                    marginBottom: "0",
                    marginTop: "20px"
                }}>Password reset successfully</h1> : <h1>Reset Password</h1>}


                {step === 1 && (
                    <form>
                        <Input
                            name="email"
                            logo=<svg xmlns=" http://www.w3.org/2000/svg" width="30" height="30"
                                viewBox="0 0 24 24"><path fill="currentColor"
                                    d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
                            text="Enter Email/username"
                            type="text"
                        />

                        <Button onSubmit={handleStep} text="Submit" />
                    </form>
                )}

                {step === 2 && (
                    <form>
                        <Input
                            name="emailCode"
                            logo=<svg xmlns=" http://www.w3.org/2000/svg" width="30" height="30"
                                viewBox="0 0 24 24"><path fill="currentColor"
                                    d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
                            text="Enter code"
                            type="text"
                        />

                        <Button onSubmit={handleStep} text="Submit" />
                    </form>
                )}

                {step === 3 && (
                    <form>
                        <Input
                            name="password"
                            logo=<svg xmlns=" http://www.w3.org/2000/svg" width="30" height="30"
                                viewBox="0 0 24 24"><path fill="currentColor"
                                    d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
                            text="Enter password"
                            type="text"
                        />

                        <Input
                            name="repeatPassword"
                            logo=<svg xmlns=" http://www.w3.org/2000/svg" width="30" height="30"
                                viewBox="0 0 24 24"><path fill="currentColor"
                                    d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
                            text="Re-enter password"
                            type="text"
                        />

                        <Button onSubmit={handleStep} text="Submit" />
                    </form>
                )}

                {step === 4 && (
                    <form>
                        <p style={{
                            margin: "0 0 50px 0",
                            textAlign: "left"
                        }}>Return home to login</p>
                        <Button onSubmit={handleHome} text="Retrun" />
                    </form>
                )}
            </div >
        </div >
    )
}

export default Reset
