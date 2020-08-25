import GlobalStyles from "../scss/globalStyle"
import Preloader from "../components/preloader"


export default function MyApp({ Component, pageProps }) {

	//preloader & anti-fouc
	// if (process.browser) {
	// 	document.body.classList.add("loaded")
	// }

	return (
		<>
			<GlobalStyles/>
			<Preloader/>
			<Component {...pageProps}/>
		</>
	)
}


// ????
// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { id: '1' } },//params must match the parameters used in the page name:
// 	  { params: { id: '2' } }
//     ],
//     fallback: false // true mode of getStaticPaths is not supported when using next export.
//   };
// }
