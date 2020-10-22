import React from 'react'
import '../css/valuepage.css'
import GreenGradPattern from '../img/green-gradient-pattern.png';

/* 3 props:
    color
    title
    background (img)
*/
export default function Valuepage(props) {
    var titleCSS = "valuepage-title-"
    titleCSS += props.color
    /* Will result in "valuepage-title-green", orange or blue */
    return (
        <>
            <div className = {titleCSS}>{props.title}</div>
            <img
					src={props.background}
					className="background-gradient"
					alt= "Gradient"
            />
        </>
    )
}