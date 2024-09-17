import React from 'react';
import 'D:\\figma\\figma-clone\\src\\App.css';
import img1 from 'D:\\figma\\figma-clone\\src\\images\\header-img\\color_logo_transparent copy.png';
import img2 from 'D:\\figma\\figma-clone\\src\\images\\footer-img\\Group 34.png';
import img3 from 'D:\\figma\\figma-clone\\src\\images\\footer-img\\Group 21.png';
import img4 from 'D:\\figma\\figma-clone\\src\\images\\footer-img\\Group 12.svg';
import img5 from 'D:\\figma\\figma-clone\\src\\images\\footer-img\\Group 17.svg';
import img6 from 'D:\\figma\\figma-clone\\src\\images\\footer-img\\Group 16.svg';
import img7 from 'D:\\figma\\figma-clone\\src\\images\\footer-img\\Group 15.svg';

export default function Footer() {
  return (
    <footer>
        <div id="notify">
            <div id='card'>
                <h1>Ready To Build Your Community?</h1>
                <button id='card-but'>Get Started For Free</button>
            </div>
        </div>
        <div id='footer-container'>
            <div id='inner-footer'>
                <div id='one'>
                   <div>
                     <img src={img1} alt="head-footer"/>
                   </div>
                    <div>
                        <img src={img2} alt="location" />
                        <a href=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</a>
                    </div>
                    <div>
                        <img src={img3} alt="phone" />
                        <a href=''>91+ 1234567898</a>
                    </div>
                    <div>
                        <img src={img4} alt="gmail" />
                        <a href="">abc@gmail.com</a>
                    </div>
                </div>
                <div id='two'>
                    <div>
                        <a href="">About Us</a>
                    </div>
                    <div>
                        <a href="">What We Do</a>
                    </div>
                    <div>
                        <a href="">FAQ</a>
                    </div>
                </div>
                <div id='three'>
                    <div>
                        <a href="">Career</a>
                    </div>
                    <div>
                        <a href="">Biog</a>
                    </div>
                    <div>
                        <a href="">Contact US</a>
                    </div>
                </div>
                <div id='four'>
                    <div id='social-media'>
                        <a href=""><img src={img5} alt="Facebook" /></a>
                        <a href=""><img src={img6} alt="Tweeter" /></a>
                        <a href=""><img src={img7} alt="Instagram" /></a>
                    </div>
                    <div id='sii'>
                        <a href="">&#169; Copyright 2018 Huddle. All rights reserved.</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
