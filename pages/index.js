import Head from "next/head"
import styled from "styled-components"
import Layout from "../components/layout"





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
			{/*add preloader*/}
			<Layout 
				isFooter={false}
				pageClass="index-page grid-container"
				headerMenuClass="menu_light"
			>
				<p>index page</p>
			</Layout>
			
	</>

	)
}//Index


// .index-page {
// 	position: absolute;
// 	width: 100%;
// 	height: 100%;
// 	background: $vio-mid;
// 	background: $vio-mid url("/public/images/table02.png") center/cover no-repeat;
// }


const indexPage  = styled.div`
	background: red;

`;

//example

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