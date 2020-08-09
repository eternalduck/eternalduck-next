import styled, {css, keyframes} from "styled-components"
import {media} from "../scss/_vars-mixins"
import {Script} from "vm";

// + script, see on bottom

export default function GoUp(){
	return (
		<CssGoUp>
			<i className="fas fa-chevron-up"></i>
		</CssGoUp>
	)
}

const animation = keyframes`
	0%, 100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-10px);
	}
`

const animationJump = css`
	${animation} 1s infinite linear;
`

const CssGoUp  = styled.div`
	position: fixed;
	right: 10px;
	bottom: 10px;
	display: block;
	text-align: center;
	color: #fff;
	line-height: 0.4;
	cursor: pointer;
	font-size: 150%;
	z-index: 99;
	&:hover {
		opacity: .8;
		animation: ${animationJump};
	}

	${media.md`
		font-size: 200%;
	`}
	${media.xl`
		font-size: 230%;
	`}

`


// $("#back2top").click(function(){
// 	$("html, body").animate({ scrollTop: 0 }, 300);
// 	return false;
// })