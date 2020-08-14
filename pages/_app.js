// import {ThemeProvider} from "styled-components"
import "../scss/global.scss"//TMP
// import "../scss/work.scss"
import GlobalStyles from "../scss/globalStyle"
import * as varsMixinsMedia from "../scss/_vars-mixins"
// import Preloader from "../components/preloader"


export default function MyApp({ Component, pageProps }) {

	//preloader & anti-fouc
	if (process.browser) {
		document.body.classList.add("loaded")
	}

	return (
		<>
		{/* <ThemeProvider theme={{...varsMixinsMedia}}>how to use theme?? */}
			
			<Component {...pageProps}/>
			<GlobalStyles/>
		{/* </ThemeProvider> */}
		</>
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
