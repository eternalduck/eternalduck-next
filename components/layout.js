import Header from "../components/header"
import Footer from "../components/footer"
import FooterEssentials from "../components/footerEssentials"
import styled from "styled-components"
import {media} from "../scss/_vars-mixins"

import Progressbar from "../components/progressbar"
import GoUp from "./goUp"

export default function Layout({
		children,
		isFooter,
		headerColor,
		footerColor,
		background,
	}) {

	return (

	<>
		<Progressbar/>
		<GoUp/>
		<GridContainer background={background}>
			<GridContent>
				<Header headerColor={headerColor}/>
					{children}
				{isFooter
					? <Footer footerColor={footerColor}/> 
					: <FooterEssentials/>
				}

				{/* TODO: include gtm tag by https://www.npmjs.com/package/react-gtm-module */}
			</GridContent>
		</GridContainer>
		</>
	)
}//default Layout

export function LayoutSidebar({
		children,
		background,
		isFooter,
		headerColor,
		footerColor,
		contentWidth
	}) {

	return (

	<>
		<Progressbar/>
		<GoUp/>
		<GridWithSidebar background={background}>
			<Header headerColor={headerColor} contentWidth={contentWidth}/>
			<GridSidebar>
				Sidebar<br/>Content
			</GridSidebar>
			<GridMain>
					{children}
			</GridMain>
			{isFooter
				? <Footer footerColor={footerColor}/>
				: <FooterEssentials/>
			}

			{/* TODO: include gtm tag by https://www.npmjs.com/package/react-gtm-module */}
		</GridWithSidebar>
		</>
	)
}


// style
const GridContainer = styled.div`
	background: ${props => props.background};
	width: 100%;
	display: grid;
	grid: ". content ." 1fr / 15px 1fr 15px;
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

`
const GridContent = styled.div`
	grid-area: content;
	width: 100%;
`
//with sidebar
const GridWithSidebar = styled.div`
	/* & ${Header} { */ /* fail "Referring to other components" */
	& header {/* TMP */
		margin-left: 15px;
		/* background: red; */
	}
	background: ${props => props.background};
	width: 100%;
	display: grid;	
	grid: /* sidebar hidden */
		"header header header" auto
		". main ." 1fr
		"footer footer footer" auto
		/ 15px 1fr 15px;
	${media.sm`
		grid-template-columns: 1fr 540px 1fr;
	`}
	${media.md`
	grid:
		"header header header" auto
		"sidebar main ." 1fr
		"footer footer footer" auto
		/ 2.3fr 9.5fr 0.2fr;
	`}
	${media.lg`
		grid-template-columns: 3fr 8fr 1fr;
	`}
	${media.xl`
		grid-template-columns: 3fr minmax(850px, 900px) 1fr;
	`}

`
const GridSidebar = styled.div`
	${media.upToMd`
		display: none;
	`}
	grid-area: sidebar;
	padding-right: 15px;
	padding-left: 15px;
`
const GridMain = styled.div`
	outline: 1px dotted red;
	grid-area: main;
	padding-right: 15px;
	padding-left: 15px;
	${media.sm`
		padding-right: 30px;
		padding-left: 30px;
	`}
`


// end style
