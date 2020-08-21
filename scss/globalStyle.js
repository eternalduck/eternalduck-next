// import styled, {createGlobalStyle, css, keyframes} from "styled-components"
import {createGlobalStyle} from "styled-components"
import {vars, media} from "./_vars-mixins"

// ADD MATERIAL UI??
// https://itnext.io/building-a-static-blog-site-with-markdown-and-next-js-702c515389b3


// ZB
//div {
//	${({theme}) => theme.mixinTestBg}// 1
//	${mixinTestBg}// 2
//} 
// ${media.xl`
// 	background: ${vars.tenderPink};
// `}

const GlobalStyles = createGlobalStyle`


html {
	scroll-behavior: smooth;
	background: initial;
}
body {
	font-family: 'Inconsolata', monospace;
	/* font-family: 'Open Sans', sans-serif;
	font-family: 'Courier', serif; */
	font-weight: 300;
	font-size: 16px;
	line-height: 1.5;
	background: #333;/* TMP! */
	color: #fff;/* TMP! */
		
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
/* Global Classes */
.content-width {
	margin: 0 auto;
	width: 100%;
	min-width: 300px;
	max-width: 500px;
	padding: 0 15px;
	@include breakOn("sm") {
		max-width: 540px;
	}
	@include breakOn("md") {
		max-width: 720px;
	}
	@include breakOn("lg") {
		max-width: 960px;
	}
	@include breakOn("xl") {
		max-width: 1140px;
	}
}/* content-width */

/* gradient links as on css-tricks */
a {
	background: linear-gradient(90deg,#ff8a00,#e52e71);
	/* -webkit-background-clip: text; */
	background-clip: text;
	/* -webkit-text-fill-color: transparent; */
	-webkit-text-fill-color: transparent;

}


/* a {
	@include underline;
}
.md-up-hidden {
	@include md {
		display: none;
	}
}
.float-right {
	float: right;
}
.float-left {
	float: left;
}


.underline {@include underline;}

used in menu & nav; for 1-line items only
.hoverbg {
	@include hoverbg;
}
.txt-shadow {
	@include txt-shadow;
}

.shadow {
	transition: text-shadow .2s ease-in;
	&:hover {
		text-shadow: 0 0 2px $vio-saturated;
	}
} */





/* end Global Classes */









`

export default GlobalStyles