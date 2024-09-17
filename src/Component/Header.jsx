import React from 'react';
import img from "D:\\figma\\figma-clone\\src\\images\\header-img\\color_logo_transparent copy.png";
import 'D:\\figma\\figma-clone\\src\\App.css';

export default function Header() {
  return (
    <header>
        <div id='back-img'>
            {/* <div> */}
                <div id='header'>
                    <img src={img} alt="header"/>
                    <button id='try-but'>Try it Free</button>
                </div>
                <div id='header-content'>
                    <div id="left-text">
                        <h1>Build The Community <br></br> Your Fans Will Love</h1>
                        <p>Huddle re-imagines the way we build communities. You hava voice, but so does your audience. Create connections with your users as you engage in genuine discuss.</p>
                        <button id='content-but'>Get Started For Free</button>
                   </div>
                   <div id="right-img">
                        <div id="big-img"></div>
                        <div id="small-img"></div>
                   </div>
                </div>
            {/* </div> */}
        </div>
    </header>
  )
}
