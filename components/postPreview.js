import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from "styled-components"
import {vars, media} from "../scss/_vars-mixins"


export default function PostPreview({slug, content}){
	// console.info(slug)
	return (
	<SiteCard>
		<div className="work-item__inner sites-page__item_inner">
			<div className="work-item__header work-item__header_sites">
				<h4 className="work-item__title">
				<Link href="/work/sites/[slug]" as={`/work/sites/${slug}`}>
					<a>{content.title}</a>
				</Link>
					<a href={slug}>
						{content.title}
					</a>
				</h4>
			</div>
			<div className="work-item__img-wrap work-item__img-wrap_sites">
				<a href={slug}>
					<img src={content.imgThumb} className="work-item__img" alt=""/>
				</a>
			</div>
			<div className="work-item__footer">
				<span className="work-item__keywords">
					{content.keywords}
				</span>
			</div>
		</div>
	</SiteCard>
	
	)
}


// style
const SiteCard = styled.div`

/* .work-item {
	background: $almost-white;
	box-shadow: 10px 10px 8px -7px $blue-darkest;
	transform: skewY(-1deg);
	width: 90%;
	max-width: 400px;
	padding: 10px 20px;
	margin: 0 auto 40px;
	@include md {
		width: 48%;
		margin: 0 0 50px;
	}
	@include lg {
		width: 45%;
		padding: 15px 20px;
	}
	@include xl {
		width: 31%;
	}
	&__inner {
		transform: skewY(1deg);
	}
	&__header {
		margin: 15px 0;
		padding-right: 20px;
		text-align: right;
		&_sites {
			min-height: auto;
			@include lg {
				min-height: 45px;
			}
		}
	}//header
	&__footer {
		margin: 15px 0;
		text-align: center;
	}
	&__keywords {
		color: $blue-vio-lite;
		font-size: 110%;
		@include lg {
			font-size: 95%;
		}
	}
	&__title {
		font-size: 130%;
		margin: 15px 0;
		@include lg {
			margin: 20px 0 15px;
			font-size: 122%;
		}
		& a {
			color: $almost-black;
		}
	}
	&__img-wrap {
		margin: 0 auto;
		overflow: hidden;
		box-shadow: -2px 2px 8px -4px $blue-darkest;
		transform:  skewY(-1deg);
		&_sites {
			height: 270px;
			@include md {
				height: 310px;
			}
			@include lg {
				height: 350px;
			}
		}
		&_ux {
			height: 300px;
			@include md {
				height: 210px;
			}
		}
	}//img-wrap
	
	&__img {
		width: 100%;
		transition: opacity .2s ease-in;
		&:hover {
			opacity: .9;
		}
	}//img
	&_sites {
		@include md {
			min-height: 470px;
		}
		@include lg {
			min-height: 420px;
		}
		@include xl {
			min-height: 440px;
		}
	}// &_sites */
`
// end style