// import React from 'react'
import Head from 'next/head'
import Layout from "../../components/layout"
import PostPreview from "../../components/postPreview"
import {sitesList} from '../../components/data/sitesList'
// import Back2Top from "../components/back2top"
// import {test} from '../../components/data/test'

export default function Sites({
		// clss,
		// menuClass,
		// content,
		// slug
	}) {


// const test = () => {
// 	let str = ["q", "w", "e"]
// 	let sample = "w".split("")
// 	// console.info(str)



// }//test

	return (
		<>
		<Head>
			<title>sites</title>
		</Head>
		{/* <body class="work-page work-page_sites"> */}
		<Layout 
			clss="work-page work-page_sites"
			headerMenuClass="menu_light"
			footerMenuClass="menu_light"
		>

			<main>
				{/* {test()} */}
				<h1>Sites</h1>
				<p>here are sites items</p>
				<div className="work-page__content">
					{sitesList.map(content => (
						<PostPreview key={content.title} content={content} />
					))}
				</div>
				
			</main>
		</Layout>
		

		<style jsx>{`
			.test {font-size: 30px; padding: 30px;}
		`}</style>
		</>
	)//return
}//export


 {/*<Link as={`/posts/${slug}`} href="/posts/[slug]">
	<a className="hover:underline">{title}</a>
</Link>*/}