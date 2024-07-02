import React from 'react';
import '../../index.css';
import Navbar from "../Navbar/Navbar.jsx";
import HomeImg from '../../assets/bg2.jpg'

function Home(){
    return(
        <div className="home" id="Home">
            <Navbar />

            <header className="hero flex justify-center items-center h-screen bg-cover bg-style" style={{backgroundImage: `url(${HomeImg}`}}>
                <div className="text-center">
                    <h1 className="font-shippori text-white text-7xl drop-shadow-lg mb-3">Welcome to My Portfolio</h1>
                </div>
            </header>
        </div>
    )
}

export default Home;
