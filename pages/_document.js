import Document, { Html, Head, Main, NextScript } from 'next/document'

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
		</Head>
		<body className="loaded">
		<Main />
		<NextScript />
		</body>
	</Html>

	)
	}
}

export default CustomDocument
