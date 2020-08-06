import { css } from 'styled-components';

////////////////
// VARS
////////////////
export const vars = {
	"black": "#000;",
	"white": "#fff;",
	"almostBlack": "#333;",
	"almostWhite": "#f7f7f7;",
	"blackTransparent": "rgba(0, 0, 0, .2);",
	"whiteTransparent": "rgba(255, 255, 255, .6);",

	"grayLightest": "#eeefee;",
	"grayMid": "#6C6C6C;",
	"grayC": "#ccc;",

	"pinkSaturated": "#9a22a8;",
	"tenderPink": "#cfb5d4;",
	"tenderPinkTransp": "rgba(207, 181, 212, .8);",

	"blueVioTender": "#99abdd;",
	"blueMid": "#4396d7;",
	"blueVioLite": "#798dc3;",
	"blueVioDarkest": "#262f47;",

	"vioSaturatedTransp": "rgba(129, 21, 179, .8);",
	"vioSaturated": "#8115b3;",
	"vioMid": "#695289;",
	"vioMidTransp": "rgba(105, 82, 137, .8);",
	"vioEggplant": "#482a52;",
	"vioDark": "#372647;",

	"blueDarkest": "#08122c;",
	"blueDarkDust": "#3e5b7c;",

	"greenLightest": "#e8f3e1;",
	"green": "#7ccf47;",
	"greenDark": "#0B3601;",
	"greenDarkest": "#072601;",


}

////////////////
// MIXINS
////////////////

//Grid Breakpoints
export const breakpoints = {
	// XS: 'min-width: 500px',//no need if no xxs used?
	// XXSonly: 'max-width: 400px',
	// SMonly: '(min-width: 576px) and (max-width: 749px)',
	// MDonly: '(min-width: 750px) and (max-width: 991px)',
	// LGonly: '(min-width: 992px) and (max-width: 1199px)',
	// XXL: 'min-width: 2200px'//not necessary
	upToSM: 'max-width: 575px',
	upToMD: 'max-width: 749px',
	upToLG: 'max-width: 991px',
	upToXL: 'max-width: 1199px',
	sm: 'min-width: 576px',
	md: 'min-width: 750px',
	lg: 'min-width: 992px',
	xl: 'min-width: 1200px',
};
export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media(${breakpoints[label]}) {
			${css(...args)};
		}`;
	return accumulator;
}, {});


export const mixinRedBg = () => {
	return `
		background: red;
		border: 2px solid blue;
		:hover {background: pink;}
`}