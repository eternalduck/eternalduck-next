import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
// TODO: how to optimize loading, chunks & styles
//https://medium.com/@antoniogallo.it/creating-an-optimized-big-static-page-website-with-next-js-dc53e5d7f941

export default class CustomDocument extends Document {

static async getInitialProps(ctx) {
	const sheet = new ServerStyleSheet()
	const originalRenderPage = ctx.renderPage

	try {
		ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (MyApp) => (props) =>
			sheet.collectStyles(<MyApp {...props} />),
		})

		const initialProps = await Document.getInitialProps(ctx)
		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					{sheet.getStyleElement()}
				</>
			),
		}
	} finally {
		sheet.seal()
	}
}//getInitialProps

	render() {
		return (

		<Html>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* TMP */}
				{<style dangerouslySetInnerHTML={{__html: `
					/*anti-fouc*/
					html {background: #333}
					body div {visibility: hidden}
					body #__next div {visibility: visible}
				`}}></style>}
				{/* end TMP */}
				<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;600;700;900&display=swap" rel="stylesheet"/>
				{/* <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Roboto+Slab:wght@600;700&display=swap" rel="stylesheet"/> */}
				{/* TODO: move related scripts to post page */}
				{/* <script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
				<script src="/libs/fancybox3/jquery.fancybox.min.js"></script>
				<link href="/libs/fancybox3/jquery.fancybox.min.css" rel="stylesheet"/> */}
				{/* end post page scripts */}
			</Head>
			<body className="YYY">
				<Main />
				<NextScript />
			</body>
		</Html>

		)
	}//render


}

///////////////////////////
// old
// export default class CustomDocument extends Document {
// //   static async getInitialProps(ctx) {
// //     const initialProps = await Document.getInitialProps(ctx)
// //     return { ...initialProps }
// //   }

// 	render() {
// 		return (

// 		<Html>
// 			<Head>{/* it's not the same one from next/head. The <Head /> component used here should only be used for any <head> code that is common for all pages. */}
// 				<meta name="viewport" content="width=device-width, initial-scale=1" />
// 				{/* TMP */}
// 				{<style dangerouslySetInnerHTML={{__html: `
// 					/*anti-fouc*/
// 					html {background: #333}
// 					body div {visibility: hidden}
// 					body #__next div {visibility: visible}
// 				`}}></style>}
// 				{/* end TMP */}
// 				<link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;600;700;900&display=swap" rel="stylesheet"/>
// 			</Head>
// 			<body>
// 				<Main />
// 				<NextScript />
// 			</body>
// 		</Html>

// 		)
// 	}//render
// }
