import Link from 'next/link'
import { useRouter } from 'next/router'
import styled from "styled-components"
import {vars, media} from "../../../scss/_vars-mixins"


export default function PostPreview({
		post,
	}){
	// console.info(slug)
	return (
		<PostCard>
			<Link
				href="/work/post/[slug]"
				as={`/work/post/${post.slug}`}
			><a>
				<CardInner>
					<CardHeader>
						<CardTitle>{post.title}</CardTitle>
					</CardHeader>
					<Img>
						<img 
							src={post.thumb}
							alt={post.title}
						/>
					</Img>
					<CardFooter>
						<Keywords>{post.keywords}</Keywords>
					</CardFooter>
				</CardInner>
			</a></Link>
		</PostCard>
	
	)
}


// style
// TODO: make this card universal for sites & ux with different styles
const PostCard = styled.div`
	background: ${vars.almostWhite};
	color: ${vars.almostBlack};
	width: 80%;
	max-width: 340px;
	min-height: 450px;
	padding: 15px 20px;
	margin: 0 auto 40px;
	box-shadow: 10px 10px 8px -7px ${vars.blueDarkest};
	transform: skewY(-1deg);
	${media.md`
		width: 40%;
		margin: 0 0 60px;
	`}
	${media.xl`
		width: 28%;
	`}
	& a {
		color: ${vars.almostBlack}
	}/* TMP */
	/* &_ux {
		@include md {
			min-height: 340px;
		}
		@include xl {
			min-height: 400px;
		}
	} */

`
const CardInner = styled.div`
	transform: skewY(1deg);
`
const CardHeader = styled.div`
	min-height: auto;
	margin: 15px 0;
	padding-right: 20px;
	text-align: right;
	${media.lg`
		min-height: 45px;
	`}
`
const CardFooter = styled.div`
	margin: 15px 0;
	text-align: center;
`
const CardTitle = styled.h4`
	color: $almost-black;
	margin: 15px 0;
	${media.lg`
		margin: 20px 0 15px;
	`}
`
const Keywords = styled.span`
	color: ${vars.blueVioLite};
	font-size: 110%;
	${media.lg`
		font-size: 95%;
	`}
`
const Img = styled.div`
	overflow: hidden;
	height: 270px;
	margin: 0 auto;
	box-shadow: -2px 2px 8px -4px $blue-darkest;
	transform:  skewY(-1deg);
	${media.md`
		height: 310px;
	`}
	${media.lg`
		height: 350px;
	`}
	/* &_ux {
		height: 300px;
		@include md {
			height: 210px;
		}
	} */
	& img {
		width: 100%;
		transition: opacity .2s ease-in;
		&:hover {
			opacity: .9;
		}
	}/* img */

`




// end style
