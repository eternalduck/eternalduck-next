// import styled, {createGlobalStyle, css, keyframes} from "styled-components"
import {createGlobalStyle} from "styled-components"
import reset from 'styled-reset'
import {vars, media} from "./_vars-mixins"
import DebugGlobalStyles from "./utils/_debug"
import IconsGlobalStyles from "./utils/_fa-icons"

// ADD MATERIAL UI??
// https://itnext.io/building-a-static-blog-site-with-markdown-and-next-js-702c515389b3

/* https://css-tricks.com/building-a-scalable-css-architecture-with-bem-and-utility-classes/ */
/* em for fonts?
rem for paddings? */

// ZB
//div {
//	${({theme}) => theme.mixinTestBg}// 1
//	${mixinTestBg}// 2
//} 
// ${media.xl`
// 	background: ${vars.tenderPink};
// `}


// TODO: "utils/ie-tweaks ";



const GlobalStyles = createGlobalStyle`
${reset}
${DebugGlobalStyles}
${IconsGlobalStyles}

html {
	scroll-behavior: smooth;
	font-size: 14px;
	${media.md`
		font-size: 15px;
	`}
	${media.lg`
		font-size: 16px;
	`}
}
body {
	background: #333;/* TMP! */
	font-family: 'Inconsolata', monospace;
	/* font-family: 'Open Sans', sans-serif;
	font-family: 'Courier', serif; */
	color: #fff;/* TMP! */
	font-weight: 300;
	font-size: 14px;
	line-height: 1.5;
	${media.md`
		font-size: 15px;
	`}
	${media.lg`
		font-size: 16px;
	`}
}
h1, h2, h3, h4 {
	font-family: 'Inconsolata', monospace;
	/* font-family: 'Roboto Slab', serif; */
	font-weight: 700;
}
h1 {
	font-size: 2.3rem;
	margin-bottom: 1.5rem;
}
h2 {
	font-size: 1.9rem;
	margin-bottom: 1.2rem;
}
h3 {
	font-size: 1.6rem;
	margin-bottom: 1rem;
}
h4 {
	font-size: 1.3rem;
	margin-bottom: 0.9rem;
}
p {
	font-size: 1rem;
	margin: 0 0 0.5rem;
}
a, a:hover {
	text-decoration: none;
}
/* Global Classes */





/* end Global Classes */


`// end createGlobalStyle

export default GlobalStyles






// TODO: add these

// .content-width {
// 	margin: 0 auto;
// 	width: 100%;
// 	min-width: 300px;
// 	max-width: 500px;
// 	padding: 0 15px;
// 	@include breakOn("sm") {
// 		max-width: 540px;
// 	}
// 	@include breakOn("md") {
// 		max-width: 720px;
// 	}
// 	@include breakOn("lg") {
// 		max-width: 960px;
// 	}
// 	@include breakOn("xl") {
// 		max-width: 1140px;
// 	} 
// }

// a {
// 	@include underline;
// }
// .md-up-hidden {
// 	@include md {
// 		display: none;
// 	}
// }
// .float-right {
// 	float: right;
// }
// .float-left {
// 	float: left;
// }


// .underline {@include underline;}

// used in menu & nav; for 1-line items only
// .hoverbg {
// 	@include hoverbg;
// }
// .txt-shadow {
// 	@include txt-shadow;
// }

// .shadow {
// 	transition: text-shadow .2s ease-in;
// 	&:hover {
// 		text-shadow: 0 0 2px $vio-saturated;
// 	}
// }