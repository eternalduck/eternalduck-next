import Link from "next/link"
// import Document, { Html, Head} from 'next/document'
import { useRouter } from "next/router"
import styled from "styled-components"
import {vars, media, mixinTxtShadow, mixinUnderline} from "../../../scss/_vars-mixins"
import {sitesList} from "../../../components/data/sitesList"/* TMP? */
import LayoutDefault from "../../../components/layout"



export async function getStaticPaths() {
	const sites = sitesList
	// const test = paths.map(s => s.slug)
	// console.info(test);

	return {
		paths: sites.map((post) => {
			return {
				params: {
					slug: `${post.slug}`,
				},
			}
		}),
		fallback: false,
	}
}

export async function getStaticProps({params}){
	// const data = sitesList
	return {
		props: {params}//page receives `data` as a prop at build time
	}
}




export default function Post({
	// post,
	// content,
	// slug,
	// ...other
	}) {
		const router = useRouter()
		const { slug } = router.query
		if (!router.isFallback && !props.slug) {
			console.log("error 404")
			return <ErrorPage statusCode={404} />
		}

	return (
		<>
		{/* add page title */}
		{/* <Head>
			<title>{props.title}</title>
		</Head> */}
		<LayoutDefault
			background={vars.blueVioDarkest}
			isFooter
		>
		{router.isFallback ? (
			<p>Loading...</p>
			) : (
			<>
			<p>Post: {props.slug}</p>
			<PostHeader>
				<Title>{props.title}</Title>
				<Keywords>
					{props.keywords}
				</Keywords>
				<Url href={props.url} target="_blank">
					Visit the site
				</Url>
			</PostHeader>

			{/* TODO: add descrRu toggle */}
			<Description>
				<p dangerouslySetInnerHTML={{__html: `
					${props.descrEn}
				`}}></p>
			</Description>

			{/* TODO: fix fancybox, links included in _document head */}
			<ImgContainer>
				{props.images.map((img) => 
					<ImgItem>
						<h4>{img.title}</h4>
						<a key={img.img} data-fancybox="gallery" data-caption={img.title} href={img.img}>
							<img src={img.thumb} alt=""/>
						</a>
					</ImgItem>

				)}
			</ImgContainer>

			{/*)} */}{/* router */}

			{/* TODO: auto nav for next\prev [slug], this is TMP */}
			<Nav>
				{props.nav.map(
					nav => 
					<Link href={nav.link} as={nav.link}><a>{nav.txt}</a></Link>
				)}
			</Nav>
			
			</>
		 )}
		</LayoutDefault>
		</>
	)

}

// style
// TODO: make this page universal for sites & ux with different styles
const PostPage = styled.div`
	outline: 2px dashed red;
	margin: 0 auto 30px;

`

const PostHeader = styled.div`
	text-align: center;
`

const Keywords = styled.p`
	font-size: 1.1em;
	color: ${vars.blueVioTender};
	margin: 10px 0 20px;
`

const Title = styled.h1`
	color: ${vars.almostWhite};
	${mixinTxtShadow};
`

const Url = styled.a`
	${mixinUnderline};
`

const Description = styled.div`
	width: 80%;
	max-width: 650px;
	margin: 30px auto 40px;
	text-align: center;
	color: ${vars.almostWhite};
	overflow: hidden;
	/* transition: opacity .2s ease-in; */
`

const ImgContainer = styled.div`
	/* outline: 2px dashed red; */
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	margin: 40px auto 50px;
`

const ImgItem = styled.div`
	/* outline: 1px dashed; */
	flex: 0 0 100%;
	margin-bottom: 40px;
	${media.md`
		flex: 0 0 45%;
		margin-bottom: 50px;
	`}
	${media.lg`
		flex: 0 0 30%;
	`}
	& img {
		max-width: 100%;
		box-shadow: 4px 4px 11px 2px ${vars.almostBlack};
		transition: opacity .2s ease-in;
		&:hover {
			opacity: .8;
		}
	}
	& h4 {
		/* min-height: 35px; */
		font-size: 1.125em;
		font-weight: 500;
		color: ${vars.white};
		text-align: center;
		margin-bottom: 15px;
		position: relative;
		&:after {
			content: "";
			position: absolute;
			top: 0;
			right: -10px;
			bottom: 1px;
			left: -10px;
			/* z-index: -1; */
			background: rgba(178, 208, 222, 0.3);
			transform: skewX(-1deg) skewY(-0.5deg);
		}
	}
`
const Nav = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	margin: 0 0 40px;
	& a {
		display: inline-block;
		position: relative;
		color: ${vars.blueVioTender};
		/* ${noBorderBottom}; */
		& i {
			position: absolute;
			top: 5px;
			/* font-size: 80%; */
		}
		&:first-child {
			padding-left: 20px;
			text-align: left;
			& i {
				left: 0;
			}
		}
		&:last-child {
			padding-right: 20px;
			text-align: right;
			margin-left: auto;
			& i {
				right: 0;
			}
		}
	}/* a */

`


// end style

// OLD markup zb
// <div class="single-work__img-holder">
// 	<div class="single-work__img-item single-work__img-item_tabl">
// 		<p class="single-work__img-title"><span class="txtbg">Tablet version</span></p>
// 		<a class="single-work__img-wrap" data-fancybox="gallery" data-caption="Tablet version" href="@@imgTablet">
// 			<img src="@@imgTabletThumb" class="single-work__img"/>
// 		</a>
// 	</div>
// 	<div class="single-work__img-item single-work__img-item_mob">
// 		<p class="single-work__img-title"><span class="txtbg">Mobile version</span></p>
// 		<a class="single-work__img-wrap" data-fancybox="gallery" data-caption="Mobile version" href="@@imgMob">
// 			<img src="@@imgMobThumb" class="single-work__img"/>
// 		</a>
// 	</div>
// </div>
// <p class="single-work__img-title"><span class="txtbg">Desktop version</span></p>
// <img class="single-work__main-img" src="@@img" />