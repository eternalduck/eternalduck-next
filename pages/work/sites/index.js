// import React from 'react'
import Head from "next/head"
import styled from "styled-components"
import {vars, media} from "../../../scss/_vars-mixins"

import Layout from "../../../components/layout"
import PostPreview from "../../../components/postPreview"
import {sitesList} from "../../../components/data/sitesList"// convert to MD? npm i @next/mdx @mdx-js/loader 



// blog on md
// https://github.com/tscanlin/next-blog

// style
const ZZZ  = styled.div`
	background: red;

`;
// end style

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
			headerMenuClass="light"
			footerMenuClass="light"
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


// ZB 2

// export async function getStaticProps() {
//   // fetch list of posts
//   const response = await fetch(
//     'https://jsonplaceholder.typicode.com/posts?_page=1'
//   )
//   const postList = await response.json()
//   return {
//     props: {
//       postList,
//     },
//   }
// }
