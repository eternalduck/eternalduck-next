import styled from "styled-components"
import {vars, media} from "../scss/_vars-mixins.js"

const GoUp = () => {
	return (
		<span className="goUp" id="goUp">
			<i className="fas fa-chevron-up"></i>
		</span>
	)
}

export default GoUp


const ZZZ  = styled.div`
	background: red;

`;


// .back2top {
// 	position: fixed;
// 	right: 10px;
// 	bottom: 10px;
// 	display: block;
// 	text-align: center;
// 	color: $white;
// 	line-height: 0.4;
// 	cursor: pointer;
// 	font-size: 150%;
// 	z-index: 99;
// 		&:hover {
// 		opacity: .8;
// 		animation: jump 1s infinite linear;
// 	}

// 	@keyframes jump {
// 		0%, 100% {
// 			transform: translateY(0);
// 		}
// 		50% {
// 			transform: translateY(-10px);
// 		}
// 	}
// 	@include md {
// 		font-size: 200%;
// 	}
// 	@include xl {
// 		font-size: 230%;
// 	}
// }