import styled from "styled-components"
import {vars} from "../scss/_vars-mixins.js"

// + script, see on bottom!

export default function Progressbar(){
	return(
		<CssProgressbar>
			<div className="gauge"></div>
		</CssProgressbar>
	)
}

const CssProgressbar  = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 12px;
	background: transparent;
	z-index: 999;
	&.initialized {
		background: ${vars.vioEgplant};
		border-bottom: 5px solid ${vars.almostBlack};
	}
	& .gauge {
		width: 0;
		height: 100%;
		background: ${vars.pinkSaturated};
	}

`;


// Progressbar
// let pageHeight;
// let winHeight;
// let scrollHeight;
// let scrollHeight1Proc;
// let scrollRatio;


// $(window).on("load", function(){
// 	pageHeight = $(document).height();
// 	winHeight = $(window).height();
// 	scrollHeight = pageHeight-winHeight;
// 	scrollHeight1Proc = scrollHeight/100;
// });

// $(window).on("scroll", function() {
// 	scrollRatio = scrTop/scrollHeight1Proc;
// 	$(".progress__bar").css({
// 		"width": scrollRatio+"%"
// 	});
// 	if (scrTop > 0) {
// 		$("#progress").addClass("initialized");
// 	}
// 	else {
// 		$("#progress").removeClass("initialized");
// 	};

// });

// // Progress gauge

// if ($(".gauge").length > 0) {
// 	$(window).on("scroll", function() {
// 		scrollRatio = scrTop/scrollHeight1Proc;
// 		$(".gauge__progress").css({
// 			"height": scrollRatio+"%"
// 		});
// 	})
// }