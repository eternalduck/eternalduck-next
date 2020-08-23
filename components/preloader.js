import styled, {css, keyframes} from "styled-components"
import {vars} from "../scss/_vars-mixins"

export default function Preloader(){
	//preloader & anti-fouc - move to _app.js if seems too slow
	if (process.browser) {
		document.body.classList.add("loaded")
	}

	return (

		// // <CssPreloader>
		// 	<section className="CssPreloader">
		// 	<span className="spinner">
		// 		<span className="circle-1"></span>
		// 		<span className="circle-2"></span>
		// 	</span>
		// 	</section>
		// // </CssPreloader>

<>
		<section className="CssPreloader">
			<section className="TxtWrap">
			<p className="Txt">loading...</p>
			</section>
		</section>

{/* TMP styles: try ServerStyleSheet - fight fouc
https://frontarm.com/james-k-nelson/css-in-js-static-rendering/ */}

{<style dangerouslySetInnerHTML={{__html: `

body.loaded .CssPreloader {
	visibility: hidden;
	opacity: 0;
	z-index: -1;
}
.CssPreloader {
	background: #333;
	display: grid;
	grid-template: 1fr / 1fr;
	place-items: center center;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	visibility: visible;
	transition: all .4s ease-out .2s;
	z-index: 99999;
}
.CssPreloader .TxtWrap {
	position: relative;
	text-align: center;
	margin-top: -20%;
}
.CssPreloader .Txt {
	font-family: "Courier", monospace;
	color: #fff;
	text-shadow: 4px 4px 0 #a40000, -4px -4px 0 #006A37;
	animation: glitch .3s infinite ease-in-out;
	font-size: 10vmin;
}
@keyframes glitch {
	0%, 100% {
		text-shadow: 4px 4px 0 #a40000, -4px -4px 0 #006A37;
	}
	25% {
		text-shadow: 0 4px 0 #a40000, 0 -4px 0 #006A37;
	}
	75% {
		text-shadow: -4px 4px 0 #a40000, 4px -4px 0 #006A37;
	}
}
`}}></style>}
</>



	)
}


// plain css version
// /* preloader with circles */
// /* .CssPreloader {
// 	background: #3e5b7c;
// 	position: fixed;
// 	top: 0;
// 	bottom: 0;
// 	left: 0;
// 	right: 0;
// 	visibility: visible;
// 	transition: all .4s ease-out .2s;
// 	z-index: 99999;
// }
// body.loaded .CssPreloader {
// 		visibility: hidden;
// 		opacity: 0;
// 		z-index: -1;
// }
// .CssPreloader .spinner {
// 	display: block;
// 	width: 100px;
// 	height: 100px;
// 	position: absolute;
// 	top: 50%;
// 	left: 50%;
// 	margin-top: -40px;
// 	margin-left: -40px;
// }
// .CssPreloader .circle-1,
// .CssPreloader .circle-2 {
// 	display: block;
// 	width: 100%;
// 	height: 100%;
// 	position: absolute;
// 	border-radius: 50%;
// 	top: 0;
// 	left: 0;
// 	animation: bounce 1.5s infinite ease-in-out;
// }
// .CssPreloader .circle-1 {
// 	background-color: #4396d7;
// 	opacity: .6;
// }
// .CssPreloader .circle-2 {
// 	animation-delay: -0.8s;
// 	background-color: #8115b3;
// 	opacity: .5;
// }


// @keyframes bounce {
// 	0%, 100% {
// 		transform: scale(0.0);
// 	}
// 	50% {
// 		transform: scale(1.0);
// 	}
// } */


// STYLED-COMPONENTS VERSION
// "loading"
// const glitch = keyframes`
// 	0%, 100% {
// 		transform: translateX(0);
// 	}
// 	25% {
// 		transform: translateX(-5px);
// 	}
// 	75% {
// 		transform: translateX(5px);
// 	}
// `

// const animationGlitch = css`
// 	${glitch} 0.2s infinite ease-in-out;
// `

// const CssPreloader = styled.section`
// 	background: ${vars.blueDarkDust};
// 	display: grid;
// 	grid-template: 1fr / 1fr;
// 	place-items: center center;
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
// `

// const TxtWrap = styled.section`
// 	/* outline: 1px dashed; */
// 	position: relative;
// 	width: 50%;
// 	text-align: center;
// `
// const Txt = styled.p`
// 	position: absolute;
// 	width: 100%;
// 	top: 0;
// 	left: 0;
// 	font-size: 50px;
// 	font-family: 'Press Start 2P', cursive;
// 	&.one {
// 		color: #0004a4;
// 		z-index: 10;
// 		/* animation: ${animationGlitch}; */
// 	}
// 	&.two {
// 		animation: ${animationGlitch};
// 		color: #a40000;
// 		z-index: 1;
// 	}
// `
// end "loading"


// preloader with circles
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
// end circles