import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from "../../components/layout"


const Post = ({
	content,
	slug
}) => {
	const router = useRouter()
	// if (!router.isFallback && !content?.slug) {
	//	// console.log("error 404")
	// 	return <ErrorPage statusCode={404} />
	// }

	return (
		<>
		<Head>
			<title>{content.title}</title>
		</Head>
		{/* <body class="single-work single-work_site"> */}
		<Layout 
			clss="single-work single-work_site"
			headerMenuClass="menu_light"
			footerMenuClass="menu_light"
		>
		<div class="single-work__header">
			<h1 class="txt-shadow">{content.title}</h1>
			<p class="single-work__keywords keywords">
				content.keywords
			</p>
			
			<p class="single-work__link">
				<a href={content.url} target="_blank">Visit the site</a>
			</p>
			{/* <p class="single-work__link">
				<a href={content.url} target="_blank">{content.txt2}</a>
			</p> */}
		</div>

		<div class="single-work__descr">
			<p>{content.descrEn}</p>
		</div>
		{/* <div class="single-work__descr">
			<p>{content.descrEn}</p>
		</div> */}
		<img class="single-work__main-img" src={content.img} />

		{/* TODO: nav for next\prev [slug] */}

		</Layout>
	</>
	)

}

export default Post