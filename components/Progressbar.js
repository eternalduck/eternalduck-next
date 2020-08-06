import styled from "styled-components"
import {vars, media} from "../scss/_vars-mixins.js"

// + script!
const Progressbar = () => {
	return(
		<div className="progress" id="progress">
			<div className="progress__bar"></div>
		</div>
	)
}

export default Progressbar

const ZZZ  = styled.div`
	background: red;

`;

// .progress {
// 	position: fixed;
// 	top: 0;
// 	width: 100%;
// 	height: 12px;
// 	background: transparent;
// 	z-index: 999;
// 	&.initialized {
// 		background: $vio-eggplant;
// 		border-bottom: 5px solid $almost-black;
// 	}
// 	&__bar {
// 		width: 0;
// 		height: 100%;
// 		background: $pink-saturated;
// 	}
// }