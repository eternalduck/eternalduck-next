import styled, {css, keyframes} from "styled-components"
import {media} from "../scss/_vars-mixins"

// style
const animation = keyframes`
	0%, 100% {
		transform: translateY(0);
	}
	50% {
		transform: translateY(-10px);
	}
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
		animation: ${animation} 1s infinite linear;
	}

	${media.md`
		font-size: 200%;
	`}
	${media.xl`
		font-size: 230%;
	`}

`
// end style

export default function GoUp(){
	const scrollUp = () => {
		setTimeout(function(){
			window.scrollTo(0, 0); 
		}, 100); 
	}

	return (
		<CssGoUp onClick={scrollUp}>
			<i className="fas fa-chevron-up"></i>
		</CssGoUp>
	)
}
