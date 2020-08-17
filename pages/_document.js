import Document, { Html, Head, Main, NextScript } from 'next/document'
// import Preloader from "../components/preloader"
// TODO: how to optimize loading, chunks & styles
//https://medium.com/@antoniogallo.it/creating-an-optimized-big-static-page-website-with-next-js-dc53e5d7f941


class CustomDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }

	render() {
		return (

		<Html>
			<Head>{/* it's not the same one from next/head. The <Head /> component used here should only be used for any <head> code that is common for all pages. */}
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* TMP */}
				{<style dangerouslySetInnerHTML={{__html: `
					/*anti-fouc*/
					html {background: #372647}
					body #__next div {visibility: hidden}
					body.loaded #__next div {visibility: visible}
				`}}></style>}
				<link href="/css/preloader.css" rel="stylesheet"/>
				{/* end TMP */}
			</Head>
			<body>
				{/* <Preloader/> */}
				<Main />
				<NextScript />
			</body>
		</Html>

		)
	}
}

export default CustomDocument
