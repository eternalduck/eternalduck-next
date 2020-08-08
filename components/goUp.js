import styled from "styled-components"
import {vars, media} from "../scss/_vars-mixins.js"
import {Script} from "vm";

// + script, see on bottom

const GoUp = () => {
	return (
		<CssGoUp>
			<i className="fas fa-chevron-up"></i>
		</CssGoUp>
	)
}

export default GoUp


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
		animation: jump 1s infinite linear;
	}

	@keyframes jump {
		0%, 100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}
	${({ theme }) => theme.media.md`
		font-size: 200%;
	`}
	${({ theme }) => theme.media.xl`
		font-size: 230%;
	`}

`;


// $("#back2top").click(function(){
// 	$("html, body").animate({ scrollTop: 0 }, 300);
// 	return false;
// })