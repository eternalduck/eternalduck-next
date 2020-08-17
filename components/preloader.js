import styled, {css, keyframes} from "styled-components"
import {vars} from "../scss/_vars-mixins"


// style
// const animationLeftFrames = keyframes`
// 	0%, 100% {
// 		transform: translateX(0);
// 	}
// 	25% {
// 		transform: translateX(-50px);
// 	}
// 	75% {
// 		transform: translateX(50px);
// 	}
// `

// const animationLeft = css`
// 	${animationLeftFrames} 0.5s infinite ease-in-out;
// `
// const animationRightFrames = keyframes`
// 	0%, 100% {
// 		transform: translateX(0);
// 	}
// 	25% {
// 		transform: translateX(50px);
// 	}
// 	75% {
// 		transform: translateX(-50px);
// 	}
// `

// const animationRight = css`
// 	${animationRightFrames} 0.5s infinite ease-in-out;
// `

// const CssPreloaderTest = styled.section`
// 	background: #000;
// 	position: fixed;
// 	width: 100%;
// 	height: 100%;
// 	body.loaded & {
// 		visibility: hidden;
// 		opacity: 0;
// 		z-index: -1;
//  	}
// `

// const Block = styled.span`
// 	display: block;
// 	position: absolute;
// 	top: 50%;
// 	left: 50%;
// 	&.red {
// 		background: #a40000;
// 		height: 80%;
// 		width: 80%;
// 		animation: ${animationLeft};
// 		z-index: 1;
// 		margin-top: -40%;
// 		margin-left: -40%;
// 	}
// 	&.blue {
// 		background: #0004a4;
// 		height: 70%;
// 		width: 70%;
// 		z-index: 10;
// 		margin-top: -35%;
// 		margin-left: -35%;
// 		animation: ${animationRight};
// 	}
// 	&.cyan {
// 		background: #00d6d3;
// 		height: 60%;
// 		width: 60%;
// 		z-index: 20;
// 		margin-top: -30%;
// 		margin-left: -30%;
// 		animation: ${animationLeft};

// 	}
// 	&.vio {
// 		background: #a407d1;
// 		height: 50%;
// 		width: 50%;
// 		z-index: 30;
// 		margin-top: -25%;
// 		margin-left: -25%;
// 		animation: ${animationRight};

// 	}
// `
// end style


export default function Preloader(){
	//preloader & anti-fouc - move to _app.js if seems too slow
	if (process.browser) {
		document.body.classList.add("loaded")
	}

	return (

		// <CssPreloader>
			<section className="CssPreloader">
			<span className="spinner">
				<span className="circle-1"></span>
				<span className="circle-2"></span>
			</span>
			</section>
		// </CssPreloader>

		// <CssPreloaderTest>
		// 	<Block className="red"/>
		// 	<Block className="blue"/>
		// 	<Block className="cyan"/>
		// 	<Block className="vio"/>
		// </CssPreloaderTest>

	)
}










// style
// TMP disabled, added pure style to _document.js 
// <link href="scss/preloader-TMP.css" rel="stylesheet"/>

// const animation = keyframes`
// 	0%, 100% {
// 		transform: scale(0.0);
// 	}
// 	50% {
// 		transform: scale(1.0);
// 	}
// `

// const animationBounce = css`
// 	${animation} 1.5s infinite ease-in-out;
// `

// // not div to escape anti-fouc display:none for divs
// const CssPreloader = styled.section`
// 	background: ${vars.blueDarkDust};
// 	position: fixed;
// 	top: 0;
// 	bottom: 0;
// 	left: 0;
// 	right: 0;
// 	visibility: visible;
// 	transition: all .4s ease-out .2s;
// 	z-index: 99999;
// 	body.loaded & {
// 		visibility: hidden;
// 		opacity: 0;
// 		z-index: -1;
// 	}
// 	& .spinner {
// 		display: block;
// 		width: 100px;
// 		height: 100px;
// 		position: absolute;
// 		top: 50%;
// 		left: 50%;
// 		margin-top: -40px;
// 		margin-left: -40px;
// 	}
// 	& .circle-1,
// 	& .circle-2 {
// 		display: block;
// 		width: 100%;
// 		height: 100%;
// 		position: absolute;
// 		border-radius: 50%;
// 		top: 0;
// 		left: 0;
// 		animation: ${animationBounce};
// 	}
// 	& .circle-1 {
// 		background-color: ${vars.blueMid};
// 		opacity: .6;
// 	}
// 	& .circle-2 {
// 		animation-delay: -0.8s;
// 		background-color: ${vars.vioSaturated};
// 		opacity: .5;
// 	}

// `
// end style