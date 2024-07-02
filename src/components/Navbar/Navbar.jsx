import '../../index.css';
import './Navbar.css'
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Navbar(){
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "10px 10px";
            document.getElementById("navbar").style.backgroundColor = "white"
            document.getElementById("navbar").style.borderBottom = "2px solid black"
            document.getElementById("logo").style.color = "black"
            const color = document.getElementsByClassName("font-chivo")
            for (let i = 0; i < color.length; i++) {
                color[i].style.color = "black"
            }
        } else {
            document.getElementById("navbar").style.padding = "50px 10px";
            document.getElementById("navbar").style.backgroundColor = "transparent"
            document.getElementById("navbar").style.borderBottom = "none"
            document.getElementById("logo").style.color = "white"
            const color = document.getElementsByClassName("font-chivo")
            for (let i = 0; i < color.length; i++) {
                color[i].style.color = "white"
            }
        }
    }

    return (
        <div id="navbar">
            <h1 href="#Home" id="logo" className="font-shippori text-3xl font-bold">Monic.</h1>
            <div id="navbar-right">
                <a href="#Home" className="font-chivo text-xl">Home</a>
                <a href="#Gallery" className="font-chivo text-xl">Gallery</a>
                <a href="#Contact" className="font-chivo text-xl">Contact</a>
            </div>
        </div>
    )
}
