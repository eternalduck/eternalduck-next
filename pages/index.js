import Head from "next/head"
import Header from "../components/header"
import FooterEssentials from "../components/footerEssentials"
//add preloader
// import {test} from './data/test'

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
				<div className="index-page grid-container">
					<div className="grid-content">
						<Header headerMenuClass="menu_light"/>
						

						
					</div>
				</div>
				<FooterEssentials/>
				//instead of whole footer, TODO: include gtm tag by https://www.npmjs.com/package/react-gtm-module


		</>
	)
}//Index


