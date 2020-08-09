// import styled, {createGlobalStyle, css, keyframes} from "styled-components"
import {createGlobalStyle} from "styled-components"
import {vars, media} from "./_vars-mixins"

// import * as varsMixinsMedia from "./_vars-mixins"


//example
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






















`


export default GlobalStyles