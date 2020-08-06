import styled from "styled-components"
import {vars, media} from "../scss/_vars-mixins.js"


const Preloader = () => {
	return (

	<Prldr>
		<div className="preloader__spinner">
			<div className="preloader__bounce1"></div>
			<div className="preloader__bounce2"></div>
		</div>

{/* <style dangerouslySetInnerHTML={{__html: `
  @media (max-width: 600px) {
    .styled { color: fuchsia; }
  }
`}}> */}

	</Prldr>

	)
}

const Prldr = styled.div`
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
	



`;



// .preloader {
// 	background: $blue-dark-dust;
// 	position: fixed;
// 	top: 0;
// 	bottom: 0;
// 	left: 0;
// 	right: 0;
// 	visibility: visible;
// 	transition: all .4s ease-out .2s;
// 	z-index: 99999;
// 	.loaded & {
// 		visibility: hidden;
// 		opacity: 0;
// 		z-index: -1;
// 	}
// 	&__spinner {
// 		width: 100px;
// 		height: 100px;
// 		position: absolute;
// 		top: 50%;
// 		left: 50%;
// 		margin-top: -40px;
// 		margin-left: -40px;
// 	}
// 	&__bounce1,
// 	&__bounce2 {
// 		width: 100%;
// 		height: 100%;
// 		position: absolute;
// 		border-radius: 50%;
// 		top: 0;
// 		left: 0;
// 		animation: bounce 1.5s infinite ease-in-out;
// 	}
// 	&__bounce1 {
// 		background-color: $blue-mid;
// 		opacity: .6;
// 	}
// 	&__bounce2 {
// 		animation-delay: -0.8s;
// 		background-color: $vio-saturated;
// 		opacity: .5;
// 	}
// }
// @keyframes bounce {
// 	0%, 100% {
// 		transform: scale(0.0);
// 	}
// 	50% {
// 		transform: scale(1.0);
// 	}
// }
export default Preloader