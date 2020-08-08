import "../scss/global.scss"
// import "../scss/work.scss"
// import {menuItems} from './data/menuItems'

import {ThemeProvider} from "styled-components"
// import {vars, media} from "../scss/_vars-mixins.js"
import * as varsMixinsMedia from "../scss/_vars-mixins.js"



export default function MyApp({ Component, pageProps }) {

	return (
		<ThemeProvider theme={{...varsMixinsMedia}}>{/*how to use theme??*/}
			<Component {...pageProps}/>
		</ThemeProvider>
	)
}


// ????
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },//params must match the parameters used in the page name:
	  { params: { id: '2' } }
    ],
    fallback: false // true mode of getStaticPaths is not supported when using next export.
  };
}
