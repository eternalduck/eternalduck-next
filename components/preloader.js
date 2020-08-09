import styled, {css, keyframes} from "styled-components"
import {vars} from "../scss/_vars-mixins"

// $(window).on("load", function(){
// 	$("body").addClass("loaded");
// });

export default function Preloader(){
	return (

	<CssPreloader>
		<div className="spinner">
			<div className="circle-1"></div>
			<div className="circle-2"></div>
		</div>
	</CssPreloader>

	)
}

const animation = keyframes`
	0%, 100% {
		transform: scale(0.0);
	}
	50% {
		transform: scale(1.0);
	}
`

const animationBounce = css`
	${animation} 1.5s infinite ease-in-out;
`

const CssPreloader = styled.div`
	background: ${vars.blueDarkDust};
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	visibility: visible;
	transition: all .4s ease-out .2s;
	z-index: 99999;
	body.loaded & {
		visibility: hidden;
		opacity: 0;
		z-index: -1;
	}
	& .spinner {
		width: 100px;
		height: 100px;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -40px;
		margin-left: -40px;
	}
	& .circle-1,
	& .circle-2 {
		width: 100%;
		height: 100%;
		position: absolute;
		border-radius: 50%;
		top: 0;
		left: 0;
		animation: ${animationBounce};
	}
	& .circle-1 {
		background-color: ${vars.blueMid};
		opacity: .6;
	}
	& .circle-2 {
		animation-delay: -0.8s;
		background-color: ${vars.vioSaturated};
		opacity: .5;
	}
	


`
