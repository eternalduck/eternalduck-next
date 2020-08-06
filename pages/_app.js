import "../scss/main.scss"
// import "../scss/work.scss"

import { ThemeProvider } from "styled-components"

// use $tenderPink var like this: 
// ${({ var }) => var.tenderPink}
// const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!../scss/_vars-mixins.scss');

import {vars} from "../scss/_vars-mixins.js"//TMP, how to pass it everywhere?


export default function MyApp({ Component, pageProps }) {

	// console.info(theme)
	return (
		<ThemeProvider theme={vars}>{/*how to use theme??*/}
			<Component {...pageProps}/>
		</ThemeProvider>
	)
}



// export default class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props
//     return (
//       <ThemeProvider theme={theme}>
//         <Component {...pageProps} />
//       </ThemeProvider>
//     )
//   }
// }







// old default
// This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
// 	return <Component {...pageProps} />
// }