import styled, {css, keyframes} from "styled-components"
import {vars} from "../scss/_vars-mixins"

export default function LangSwitch(){
// // Lang content toggle
// $(".lang__toggle").click(function() {
// 	$(".lang__toggle").toggleClass("expand collapse");
// 	let ruContent = $(this).parent(".lang__container").find(".lang__content");
// 	ruContent.toggleClass("expanded");

// });

// // Scroll top on cv page when bottom lang__toggle clicked
// $(".lang__toggle_bottom.scrtop").click(function() {
// 	$(window).scrollTop(0);
// 	$(".lang__container").addClass("flash-border");
// });
	return (

	<div class="lang__container lang__container_cv">
		
		<div class="lang__toggle lang__toggle_cv expand">
			<i class="far fa-plus-square"></i>
			<i class="far fa-minus-square"></i>
			<span>Russian Version</span>
		</div>
		
		<div class="lang__content lang__content_cv">
			{/* @@include("cv-ru.html") */}
		</div>


		@@include("../../modules/lang-toggle/ru-toggle.html", {
			"toggleClass": "lang__toggle_cv lang__toggle_bottom scrtop expand"
		})
	</div>


	)

}



// style

//////////////////////////
// TODO: Lang switch

// .lang {
// 	&__container {
// 		// outline: 1px solid red;
// 		position: relative;
// 		width: 80%;
// 		margin: 0 auto;
// 		padding-top: 50px;
// 		border-top: 1px solid $white-transparent;
// 		&_cv {
// 			width: 100%;
// 			border-bottom: 1px solid $black-transparent;
// 			&.flash-border {
// 				animation: flash-border .8s linear .1s 1;
// 			}
// 		}
// 	}
// 	&__toggle {
// 		line-height: 1;
// 		color: $white;
// 		position: absolute;
// 		top: 15px;
// 		left: 50%;
// 		margin-left: -105px;
// 		cursor: pointer;
// 		opacity: .6;
// 		transition: opacity .2s ease-in;
// 		&:hover {
// 			opacity: 1;
// 		}
// 		&_cv {
// 			top: -10px;
// 			color: $black;
// 		}
// 		&_bottom {
// 			top: auto;
// 			bottom: 15px;
// 			display: none;
// 		}
// 		& span {
// 			font-size: 22px;
// 		}
// 		& .far {
// 			font-size: 16px;
// 		}
// 		&.expand {
// 			& .fa-minus-square {
// 				display: none;
// 			}
// 		}
// 		&.collapse {
// 			& .fa-plus-square {
// 				display: none;
// 			}
// 		}
// 	}//toggle
// 	&__content {
// 		// outline: 1px dashed red;
// 		width: 100%;
// 		margin-bottom: 70px;
// 		height: 0;
// 		overflow: hidden;
// 		opacity: 0;
// 		transition: opacity .2s ease-in;
// 		&_cv {
// 			margin-bottom: 0;
// 		}
// 		&.expanded {
// 			margin-bottom: 70px;
// 			height: auto;
// 			overflow: auto;
// 			border-radius: 30px;
// 			opacity: 1;
// 			animation: flash .8s 1;
// 			&+.lang__toggle_bottom {
// 				display: block;
// 			}
// 		}
// 	}

// }//lang

// @keyframes flash {
// 	0% {
// 		background: $gray-lightest;
// 	}
// 	50% {
// 		background: $green-lightest;
// 	}
// 	100% {
// 		background: $gray-lightest;
// 	}
// }
// @keyframes flash-border {
// 	0% {
// 		border-bottom: 1px solid $black-transparent;
// 	}
// 	50% {
// 		border-bottom: 1px solid $green;
// 	}
// 	100% {
// 		border-bottom: 1px solid $black-transparent;
// 	}
// }



// end style
