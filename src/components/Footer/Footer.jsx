import React from "react";
import { getImageUrl } from "../../utils";

function Footer(){
    return(
    <footer id="contact" className="bg-[#6d1333] text-white py-6" >
        <div className="text-center">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-2">Feel free to reach out!</p>
        </div>
        <ul className="flex justify-center space-x-8 mt-4">
          <li className="flex items-center space-x-2">
            <img src="./emailfix.png" alt="Email icon"/>
            <a href="mailto:pascal.kapitan@email.com" className="hover:underline">monica.aprilia@email.com</a>
          </li>
          <li className="flex items-center space-x-2">
            <img src="./igfix.png" alt="Instagram icon"/>
            <a href="https://www.instagram.com/" className="hover:underline">@monicapriliab</a>
          </li>
          <li className="flex items-center space-x-2">
            <img src="./wafix.png" alt="WhatsApp icon"/>
            <a href="https://www.whatsapp.com/" className="hover:underline">087824501000</a>
          </li>
        </ul>
    </footer>
  );
}

export default Footer;