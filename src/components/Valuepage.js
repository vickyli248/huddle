import React from 'react';
import '../css/valuepage.css';

/* 3 props:
    color
    title
    bodyText
    screenImg
    background (img)
*/
export default function Valuepage(props) {
	var titleCSS = 'valuepage-title';
	titleCSS += ' ' + props.color;
	const text = props.bodyText;
	const newText = text.split('\n').map((str) => <p>{str}</p>);
	/* Will result in "valuepage-title-green", orange or blue */
	return (
		<div className="wrapper">
			<div className={titleCSS}>{props.title}</div>
			<div className="inner-wrapper">
				<img src={props.backgroundImg} className="gradient" alt="Gradient" />
				<div className="valuepage-whitebox">
					<img src={props.screenImg} className="screenshot" alt="Screenshot" />
					<div className="valuepage-body">{newText}</div>
				</div>
			</div>
		</div>
	);
}
