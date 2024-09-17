import React from 'react'
import 'D:\\figma\\figma-clone\\src\\App.css';

export default function Main(props) {
  return (
     <div id='main-container'>
        <div id={props.data.stl}>
            <div id="text-content">
               <h1>{props.data.heading}</h1>
               <p>{props.data.para}</p>
            </div>
            <div id="img-conent">
               <img src={props.data.img} alt="img"/>
            </div>
        </div>
     </div>
  )
}
