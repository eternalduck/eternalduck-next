// import React from 'react'
import Head from "next/head"
import styled from "styled-components"
import Layout from "../../components/layout"
import PostPreview from "../../components/postPreview"
import {sitesList} from "../../components/data/sitesList"
// import {test} from '../../components/data/test'


export default function Sites({
		// pageClass,
		// menuClass,
		// content,
		// slug
	}) {


// const test = () => {
// 	let str = ["q", "w", "e"]
// 	let sample = "w".split("")
// 	// console.info(str)
// }

	return (
		<>
		<Head>
			<title>sites</title>
		</Head>
		{/* <body class="work-page work-page_sites"> */}
		<Layout 
			isFooter={true}
			pageClass="work-page work-page_sites"
			headerMenuClass="menu_light"
			footerMenuClass="menu_light"
		>

			{/* {test()} */}
			
			<h1>Sites</h1>
			<p>here are sites items</p>
			<div className="work-page__content">
				{sitesList.map(content => (
					<PostPreview key={content.title} slug={content.slug} content={content}/>
				))}
			</div>
			{/* add go-up */}
		</Layout>
		</>
	)//return
}//export


 {/*<Link as={`/posts/${slug}`} href="/posts/[slug]">
	<a className="hover:underline">{title}</a>
</Link>*/}

const ZZZ  = styled.div`
	background: red;

`;