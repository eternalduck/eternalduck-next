import Head from "next/head"
// import React from "react"
import Header from "../components/Header"
import FooterEssentials from "../components/FooterEssentials"
//preloader


export default function Home() {
	
	const test = a => b => a + b 
	const test1 = a => a * a
	let res = test(2, 5)

	return (
		<>
			<Head>
				<title>eternalduck</title>
				{/*<link rel="icon" href="/favicon.ico" />*/}
			</Head>

				 {/*preloader*/}
				<div className="index-page grid-container">
					<div className="grid-content">
						<Header/>
						{console.info(
							res
						)}
					</div>
				</div>
				<FooterEssentials/>
				//instead of whole footer, TODO: include gtm tag by https://www.npmjs.com/package/react-gtm-module


		</>
	)
}
