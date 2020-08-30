// import React from 'react'
import Head from "next/head"
// import styled, {css} from "styled-components"
import {vars, media} from "../../../scss/_vars-mixins"

import LayoutDefault, {FlexContainer} from "../../../components/layout"
import {sites} from "../../../components/data/sites"// convert to MD? npm i @next/mdx @mdx-js/loader or https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
import PostPreview from "../posts/postPreview"

// blog on md https://github.com/tscanlin/next-blog


// const loader = () => {
// 	console.log(`Status, ${sites[0].title}`);
// }
 
export async function getStaticProps(){
	// const res = await fetch("https://ebaklak.ru/data/tmp.json")
	// const sites = await res.json()
	const data = sites
	return {
		props: {data}//page receives `data` as a prop at build time
	}
}
// const sites = null

export default function Sites({
	data,
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
		<LayoutDefault
			// contentWidth
			background={vars.blueVioDarkest}
			isFooter
			// headerColor={vars.white}//white by default
			// footerColor={vars.white}
		>
			<h1>Sites</h1>
			<p>here are sites items</p>
			{/* <button onClick={loader}>load data</button> */}
			<FlexContainer>
				{data ? 
					data.map(content => (
						<PostPreview key={content.title} slug={content.slug} content={content}/>
					))
					: null
				}
				
			</FlexContainer>
		</LayoutDefault>
		</>
	)//return
}//Sites






// ZB
 {/*<Link as={`/posts/${slug}`} href="/posts/[slug]">
	<a className="hover:underline">{title}</a>
</Link>*/}


// https://nextjs.org/docs/basic-features/data-fetching#getstaticpaths-static-generation

// ZB 1
// This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(`https://.../posts/${params.id}`)
//   const post = await res.json()

//   // Pass post data to the page via props
//   return { props: { post } }
// }


