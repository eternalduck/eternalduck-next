// 4 Aug, 2020
import { css } from 'styled-components';

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

	"greenAWESOME": "#0F3F29",
	"greenLightest": "#e8f3e1",
	"green": "#7ccf47",
	"greenDark": "#0B3601",
	"greenDarkest": "#072601",


}

////////////////
// MIXINS
////////////////
// keep _debug.scss actual with this!
// G R I D
const breakpoints = {
	// smOnly: '(min-width: 576px) and (max-width: 749px)',
	// mdOnly: '(min-width: 750px) and (max-width: 991px)',
	// lgOnly: '(min-width: 992px) and (max-width: 1199px)',
	xxsOnly: 'max-width: 400px',
	upToSm: 'max-width: 575px',
	upToMd: 'max-width: 749px',
	upToLg: 'max-width: 991px',
	upToXl: 'max-width: 1399px',
	// xs: 'min-width: 500px',
	sm: 'min-width: 576px',
	md: 'min-width: 750px',
	lg: 'min-width: 992px',
	xl: 'min-width: 1400px',
	xxl: 'min-width: 2200px'
};
export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media(${breakpoints[label]}) {
			${css(...args)};
		}`;
	return accumulator;
}, {});

// ZB
// ${media.sm`
// 	color: fuchsia;
// `}

// end grid


// TMP
export const mixinTestBg = () => {
	return `
		background: green !important;
		@media (${breakpoints.sm}) {
			background: red !important;
		}
		@media (${breakpoints.lg}) {
			background: orange !important;
		}
		@media (${breakpoints.xl}) {
			background: yellow !important;
		}
`}
// end TMP

export const mixinFlex = () => {
	return `
		display: flex;
		flex-flow: row wrap;
		justify-content: space-around;
		@media (${breakpoints.xl}) {
			justify-content: space-between;
		}
`}


// gradient txt as on css-tricks
export const mixinTxtGradient = () => {
	return `
		background: linear-gradient(90deg,#43006B,#006A37);
		background-clip: text;
		-webkit-text-fill-color: transparent;

`}
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
		border-bottom: none;
		&:hover {
			color: ${vars.white};
			border-bottom: none;/* fail - border flashes */
		}
		&:after {
			content: "";
			position: absolute;
			top: -5px;
			right: -8px;
			bottom: -5px;
			left: -8px;
			transform: skewX(-1deg) skewY(-1deg);
			transition: background .1s ease-in;
			opacity: .5;
			z-index: -1;
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



