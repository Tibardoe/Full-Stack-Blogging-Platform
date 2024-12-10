import React from 'react';
import '../css/home.css';
import Button from '../components/Button';
import Pen from '../assets/images/Pen.png';

function Home() {
    return (
        <div className='home'>
            <header>
                <div className='header-section'>
                    <Button text="Get Started" />
                </div>

                <div className='hero-section'>
                    <div className='intro-texts'>
                        <h1>Freedom</h1>
                        <p>A writers world and a space for readers for deeper understanding.</p>
                        <Button text="Start reading" />
                    </div>

                    <div className='image-box'><img src={Pen} alt='Pen' /></div>
                </div>

            </header>
        </div>
    );
};

export default Home;
