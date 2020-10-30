import React from 'react'
import '../css/valuepage.css'

/* 3 props:
    color
    title
    bodyText
    screenImg
    background (img)
*/
export default function Valuepage(props) {
    var titleCSS = "valuepage-title"
    titleCSS += " " + props.color
    
    /* Will result in "valuepage-title-green", orange or blue */
    return (
        <div className = "wrapper">
            <div className = {titleCSS}>{props.title}</div>
            <img
                src={props.backgroundImg}
                className="background-gradient"
                alt= "Gradient"
            />
            <div className = "valuepage-whitebox">
                <div className = "valuepage-body">{props.bodyText}</div>
                {/* <img
                    src={props.screenImg}
                    className="screenshot"
                    alt="Screenshot"
                /> */}
            </div>
        </div>
    )
}