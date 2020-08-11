import Document, { Html, Head, Main, NextScript } from 'next/document'
// TODO: how to optimize loading, chunks & styles
//https://medium.com/@antoniogallo.it/creating-an-optimized-big-static-page-website-with-next-js-dc53e5d7f941

class CustomDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }
	//preloader

	render() {
	return (

	<Html>
		<Head>{/* it's not the same one from next/head. The <Head /> component used here should only be used for any <head> code that is common for all pages. */}
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			{/* TMP anti-fouc */}
			{<style dangerouslySetInnerHTML={{__html: `
				html {background: #372647}
				body #__next div {display: none} 
			`}}></style>}
			{/* end TMP */}
			<link href="/preloader-TMP.css" rel="stylesheet"/>
		</Head>
		<body>{/* add script for preloader, see in its file */}
			<Main />
			<NextScript />
		</body>
	</Html>

	)
	}
}

export default CustomDocument
