import Head from "next/head"
import styled from "styled-components"
import Header from "../components/header"
import Preloader from "../components/preloader"
import {vars} from "../scss/_vars-mixins"

export default function Index() {
	
	return (

	<>
		<Head>
			<title>eternalduck</title>
		</Head>
		<Preloader/>
		<IndexPage>
			<Header menuColor={vars.white}/>
		</IndexPage>
	</>

	)
}//Index


// style
// TODO: remove class from Header.js, import mixinContentWidth here
// bg FAIL!
const IndexPage  = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: url("/images/table02.png") center/cover no-repeat;
`;


// ZB
// console.log(({theme}) => theme.tenderPink);
// end style

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


