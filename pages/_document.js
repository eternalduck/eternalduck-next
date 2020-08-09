import Document, { Html, Head, Main, NextScript } from 'next/document'
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
			{/* <link href="scss/main.scss" rel="stylesheet"/> */}
			{/* <style dangerouslySetInnerHTML={{__html: `
			.index-page {
				position: absolute;
				width: 100%;
				height: 100%;
				background: #695289;
				background: #695289 url("images/table02.png") center/cover no-repeat;
			`}}></style> */}
		</Head>
		<body className="loaded">{/* add script for preloader, see in its file */}
			<Main />
			<NextScript />
		</body>
	</Html>

	)
	}
}

export default CustomDocument
