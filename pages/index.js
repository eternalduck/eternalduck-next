import Head from "next/head"
import styled from "styled-components"
import Header from "../components/header"

export default function Index() {
	
	return (

	<>
		<Head>
			<title>eternalduck</title>
		</Head>
		<IndexPage>
			<Header headerColor={"#fff"} contentWidth/>
		</IndexPage>
	</>

	)
}//Index


// style
const IndexPage  = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: url("/images/table02.png") center/cover no-repeat;
`;
// end style
