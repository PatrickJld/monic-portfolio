// eslint-disable-next-line no-unused-vars
import React from "react";
import './Footer.css'

function Footer(){
    return(
    <footer id="contact" className="bg-[#6d1333] text-white py-6" >
        <h1>CONTACT ME</h1>

        <div className="contact-info">
            <div>
                <i className="fa-brands fa-whatsapp"></i>
                <p>087824501000</p>
            </div>
            <div>
                <i className="fa-regular fa-envelope"></i>
                <p>monicapril642@gmail.com</p>
            </div>
            <div>
                <i className="fa-brands fa-instagram"></i>
                <p>monicapriliab</p>
            </div>
        </div>
    </footer>
    );
}

export default Footer;
