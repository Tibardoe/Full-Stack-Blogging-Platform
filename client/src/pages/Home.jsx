import React, { useState } from 'react';
import '../css/home.css';
import Button from '../components/Button';
import Pen from '../assets/images/Pen.png';
import Login from './Login';

function Home() {
    const [getStarted, setGetStarted] = useState(false);

    function handleClick() {
        setGetStarted(prevState => !prevState);
    };

    return (
        <div className='home'>
            <header>
                <div className='header-section'>
                    <Button onSubmit={handleClick} text="Get Started" />
                </div>

                <div className='hero-section'>
                    <div className='intro-texts'>
                        <h1>Freedom</h1>
                        <p>A writers world and a space for readers for deeper understanding.</p>
                        <Button onSubmit={handleClick} text="Start reading" />
                    </div>

                    <div className='image-box'><img src={Pen} alt='Pen' /></div>
                </div>

                {getStarted && <Login onClick={handleClick} />}
            </header>
        </div>
    );
};

export default Home;
