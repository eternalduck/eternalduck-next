import Head from "next/head"
import styled from "styled-components"
import {vars, media, mixinContentWidth} from "../scss/_vars-mixins"

// import Layout from "../components/layout"
import Header from "../components/header"
import Preloader from "../components/preloader"

// import {vars, media, contentWidth} from "../scss/_vars-mixins.js"


// style
// TODO: remove class from Header.js, import mixinContentWidth here
// bg FAIL!
const IndexPage  = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: ${vars.vioMid} url("images/table02.png") center/cover no-repeat;

`;
// ZB
// console.log(({theme}) => theme.tenderPink);
// end style

export default function Index({
	// menuClass
}) {
	
	// const test = a => b => a + b 
	// const test1 = a => a * a
	// let res = test(2, 5)

	return (

	<>
		<Head>
			<title>eternalduck</title>
		</Head>
		<Preloader/>
		<IndexPage>
			{/* <ContentWidth> */}
				<Header headerMenuClass="light"/>
			{/* </ContentWidth> */}
		</IndexPage>
			{/* <Layout 
				isFooter={false}
				pageClass="index-page grid-container"
				headerMenuClass="menu_light"
			>
				<p>index page</p>
			</Layout> */}
			
	</>

	)
}//Index


// ZB
// Using .attrs, we attach the .small class to every <Button />
// const Button = styled.button.attrs(props => ({
//   className: "small",
// }))`
//   background: black;
//   color: white;
//   cursor: pointer;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid black;
//   border-radius: 3px;
// `;


// <Button>Styled Components</Button>
//     {/* Here we attach the class .big to this specific instance of the Button */}
// <Button className="big">The new way to style components!</Button>