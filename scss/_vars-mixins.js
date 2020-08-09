// 4 Aug, 2020

import { css } from 'styled-components';
// TODO: import scss breakpoints & vars?


// same as in vars-mixins.scss
// VARS
export const vars = {
	"black": "#000",
	"white": "#fff",
	"almostBlack": "#333",
	"almostWhite": "#f7f7f7",
	"blackTransparent": "rgba(0, 0, 0, .2)",
	"whiteTransparent": "rgba(255, 255, 255, .6)",

	"grayLightest": "#eeefee",
	"grayMid": "#6C6C6C",
	"grayC": "#ccc",

	"pinkSaturated": "#9a22a8",
	"tenderPink": "#cfb5d4",
	"tenderPinkTransp": "rgba(207, 181, 212, .8)",

	"blueVioTender": "#99abdd",
	"blueMid": "#4396d7",
	"blueVioLite": "#798dc3",
	"blueVioDarkest": "#262f47",

	"vioSaturatedTransp": "rgba(129, 21, 179, .8)",
	"vioSaturated": "#8115b3",
	"vioMid": "#695289",
	"vioMidTransp": "rgba(105, 82, 137, .8)",
	"vioEggplant": "#482a52",
	"vioDark": "#372647",

	"blueDarkest": "#08122c",
	"blueDarkDust": "#3e5b7c",

	"greenLightest": "#e8f3e1",
	"green": "#7ccf47",
	"greenDark": "#0B3601",
	"greenDarkest": "#072601",


}

////////////////
// MIXINS
////////////////


// keep actual with vars-mixins.scss!!!

// G R I D
const breakpoints = {
	// xs: 'min-width: 500px',//no need if no xxs used?
	// xxsOnly: 'max-width: 400px',
	// smOnly: '(min-width: 576px) and (max-width: 749px)',
	// mdOnly: '(min-width: 750px) and (max-width: 991px)',
	// lgOnly: '(min-width: 992px) and (max-width: 1199px)',
	// xxl: 'min-width: 2200px'//not necessary
	upToSm: 'max-width: 575px',
	upToMd: 'max-width: 749px',
	upToLg: 'max-width: 991px',
	upToXl: 'max-width: 1399px',
	sm: 'min-width: 576px',
	md: 'min-width: 750px',
	lg: 'min-width: 992px',
	xl: 'min-width: 1400px',
};
export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media(${breakpoints[label]}) {
			${css(...args)};
		}`;
	return accumulator;
}, {});

// end grid

export const mixinContentWidth = () => {
	return `
		margin: 0 auto;
		width: 100%;
		min-width: 300px;
		max-width: 500px;
		padding: 0 15px;
		@media (${breakpoints.sm}) {
			max-width: 540px;
		}
		@media (${breakpoints.md}) {
			max-width: 720px;
		}
		@media (${breakpoints.lg}) {
			max-width: 960px;
		}
		@media (${breakpoints.xl}) {
			max-width: 1140px;
		}
`}



// TMP
export const mixinTestBg = () => {
	return `
		background: green;
		@media (${breakpoints.sm}) {
			background: red;
		}
		@media (${breakpoints.lg}) {
			background: orange;
		}
		@media (${breakpoints.xl}) {
			background: yellow;
		}
`}


export const mixinNoBorderBottom = () => {
	return `
		border-bottom: none;
		&:hover{
			border-bottom: none;
		}
`}

export const mixinHoverBg = () => {
	return `
		position: relative;
		&:hover {
			color: ${vars.white};
		}
		&:after {
			content: "";
			position: absolute;
			top: -5px;
			right: -8px;
			bottom: -5px;
			left: -8px;
			z-index: -1;
			transform: skewX(-1deg) skewY(-1deg);
			transition: background .1s ease-in;
			opacity: .5;
		}
		&:hover:after {
			background: ${vars.tenderPinkTransp};
		}
`}


export const mixinUnderline = () => {
	return `
		display: inline;
		transition: all .1s ease-in;
		border-bottom: 1px solid;
		text-decoration: none;
		&:hover {
			border-bottom: 1px solid transparent;
			text-decoration: none;
		}
`}

export const mixinTxtShadow = () => {
	return `
		text-shadow: 1px 1px 2px rgba(0, 0, 0, .5);
`}



