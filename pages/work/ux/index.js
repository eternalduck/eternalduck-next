// import React from 'react'
import Head from "next/head"
import styled, {css} from "styled-components"
import {vars, media} from "../../../scss/_vars-mixins"

import LayoutDefault, {FlexContainer} from "../../../components/layout"
import PostPreview from "../posts/postPreview"
import {ux} from "../../../components/data/ux"

export default function Ux({
		// content,
		// slug
	}) {

	return (
		<>
		<Head>
			<title>ux</title>
		</Head>
		<LayoutDefault
			// contentWidth
			background={vars.vioDark}
			isFooter
			headerColor={vars.white}
			footerColor={vars.white}
		>
			<h1>ux</h1>
			<p>here are ux items</p>
			<FlexContainer>
				{ux.map(content => (
					<PostPreview key={content.title} slug={content.slug} content={content} ux/>
				))}
			</FlexContainer>
		</LayoutDefault>
		</>
	)//return
}//ux

