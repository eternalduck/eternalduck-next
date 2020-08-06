import Header from "../components/header"
import Footer from "../components/footer"
import FooterEssentials from "../components/footerEssentials"
import styled from "styled-components"
import {vars, media} from "../scss/_vars-mixins.js"

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
	display: grid;
	grid-template-columns: 15px 1fr 15px;
	grid-template-rows: 1fr;
	grid-template-areas: ". content .";
	${media.sm`
		grid-template-columns: 1fr 540px 1fr;
	`}
	${media.md`
		grid-template-columns: 1fr 720px 1fr;
	`}
	${media.lg`
		grid-template-columns: 1fr 960px 1fr;
	`}
	${media.xl`
		grid-template-columns: 1fr 1140px 1fr;
	`}

`;
const GridContent = styled.div`
	grid-area: content;
	width: 100%;
`;


// end style