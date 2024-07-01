import React from 'react';
import '../../index.css';

function Home(){
    return(
        <div className="app">
            <nav className="fixed top-0 w-full z-50 py-4">
                <ul className="flex justify-center space-x-6 gap-[200px]">
                    <li><a href="#home" className="font-timesNewRoman text-white text-3xl">Home</a></li>
                    <li><a href="#Gallery" className="font-timesNewRoman text-white text-3xl">Gallery</a></li>
                    <li><a href="#Contact" className="font-timesNewRoman text-white text-3xl">Contact</a></li>
                </ul>
            </nav>

            <header className="hero flex justify-center items-center h-screen bg-cover bg-style" style={{backgroundImage: `url('/src/assets/bg2.jpg')`}}>
                <div className="text-center">
                    <h1 className="font-timesNewRoman text-white text-7xl font-bold drop-shadow-lg mb-3">My Name is Monic</h1>
                    <h2 className="font-timesNewRoman text-white text-3xl font-bold drop-shadwo-lg">Welcome to My Portfolio</h2>
                </div>
            </header>
        </div>
    )
}

export default Home;