// import React from 'react'
import Head from "next/head"
import styled, {css} from "styled-components"
import {vars, media} from "../../../scss/_vars-mixins"

import LayoutDefault, {FlexContainer} from "../../../components/layout"
import PostPreview from "../../../components/postPreview"
import {cv} from "../../../components/data/cv"// convert to MD? npm i @next/mdx @mdx-js/loader 


// blog on md https://github.com/tscanlin/next-blog



export default function Sites() {

	return (
		<>
		<Head>
			<title>sites</title>
		</Head>
		<LayoutDefault
			// contentWidth
			// background={vars.blueVioDarkest}
			isFooter
			headerColor={vars.white}
			footerColor={vars.white}
		>
			<p>{cv.name}</p>
			<p>{cv.email}</p>
			<h1 dangerouslySetInnerHTML={{__html: cv.position}}></h1>
			<h3>{cv.titleSkills}</h3>
			<ul>
				{cv.listSkills.map(skill =>
					<li dangerouslySetInnerHTML={{__html: skill}}></li>
				)}
			</ul>
			<h3>{cv.titleJob}</h3>
			<ul>
				{cv.listJob.map(job => (
					<li>
						<p>{job.title}</p>
						<p>{job.position}</p>
						<p dangerouslySetInnerHTML={{__html: job.date}}></p>
						<p dangerouslySetInnerHTML={{__html: 
							job.url
								? `<a href=${job.url}>${job.company}</a>`
								: `${job.company}`
						}}>
						</p>
						<ul>
							{job.tasks.map(task => 
								<li dangerouslySetInnerHTML={{__html: task}}></li>
							)}
						</ul>
					</li>
				))}
			</ul>
			<h3>{cv.titleEdu}</h3>
			<ul>
				{cv.listEdu.map(edu =>
					<li dangerouslySetInnerHTML={{__html: edu}}></li>
				)}
			</ul>
			<h3>{cv.titleCourses}</h3>
			<ul>
				{cv.listCourses.map(course =>
					<li dangerouslySetInnerHTML={{__html: course}}></li>
				)}
			</ul>
			<p dangerouslySetInnerHTML={{__html: cv.extra}}></p>
			
			
			
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
// // Call an external API endpoint to get posts
// const res = await fetch('https://.../posts')
// const posts = await res.json()

// // Get the paths we want to pre-render based on posts
// const paths = posts.map((post) => ({
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


