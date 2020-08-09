// import {ThemeProvider} from "styled-components"
import Header from "../components/header"
import Footer from "../components/footer"
import FooterEssentials from "../components/footerEssentials"
import styled from "styled-components"
import {vars, media} from "../scss/_vars-mixins"

import Preloader from "../components/preloader"
import Progressbar from "../components/progressbar"
import GoUp from "./goUp"// take script from ppls to fade it in on scroll 

export default function Layout({
		children,
		isFooter,
		pageClass,
		headerMenuClass,
		footerMenuClass,
	}) { 
		


	return (

	<>
		<Preloader/>
		<Progressbar/>
		<GoUp/>
		<GridContainer className={pageClass}>
			<GridContent>
				<Header headerMenuClass={headerMenuClass}/>
					{children}
				{isFooter ? 
				<Footer footerMenuClass={footerMenuClass}/> 
				: <FooterEssentials/>
				}

				{/* TODO: include gtm tag by https://www.npmjs.com/package/react-gtm-module */}
			</GridContent>
		</GridContainer>
		</>

	)
}



// style
const GridContainer = styled.div`
	width: 100%;
	// min-height: 100vh;
	display: grid;
	grid-template-columns: 15px 1fr 15px;
	grid-template-rows: 1fr;
	grid-template-areas: ". content .";
	${media.sm`
		grid-template-columns: 1fr 540px 1fr;
		/* background: red; */
	`}
	${media.md`
		grid-template-columns: 1fr 720px 1fr;
		/* background: green; */
	`}
	${media.lg`
		grid-template-columns: 1fr 960px 1fr;
		/* background: orange; */
	`}
	${media.xl`
		grid-template-columns: 1fr 1140px 1fr;
		/* background: yellow; */
	`}

`;
const GridContent = styled.div`
	grid-area: content;
	width: 100%;
	/* ${({theme}) => theme.mixinTestBg} */
	/* ${mixinTestBg} */
`;


// end style




// TODO: create <LayoutSidebar>

//////////////////
// $sidebar-md: 200px;
// $sidebar-lg: 220px;
// $sidebar-xl: 250px;



// .grid-with-sidebar {
// 	outline: 1px dashed green;
// 	width: 100%;
// 	display: grid;
// 	grid-template-rows: 1fr;
// 	grid-template-columns: 15px 1fr 15px;
// 	grid-template-areas: ". main .";
// 	@include breakOn("SM") {
// 		grid-template-columns: 1fr 540px 1fr;
// 	}
// 	@include breakOn("MD") {
// 		grid-template-areas: "sidebar main .";
// 		grid-template-columns: 2.3fr 9.5fr 0.2fr;
// 	}
// 	@include breakOn("LG") {
// 		grid-template-columns: 3fr 8fr 1fr;
// 	}
// 	@include breakOn("XL") {
// 		grid-template-columns: 3fr minmax(850px, 900px) 1fr;
// 	}

// }

// .grid-sidebar {
// 	@include breakUpTo("upToMD") {
// 		display: none;
// 	}
// 	grid-area: sidebar;
// 	padding-right: 15px;
// 	padding-left: 15px;
// }
// .grid-main {
// 	outline: 1px dotted red;
// 	grid-area: main;
// 	padding-right: 15px;
// 	padding-left: 15px;
// 	@include breakOn("SM") {
// 		padding-right: 30px;
// 		padding-left: 30px;
// 	}
// }
