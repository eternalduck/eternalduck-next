// import React from "react"
// import ReactDOM from "react-dom"
import HTMLComment from "react-html-comment"
// import TagManager from "react-gtm-module"


//TODO: include gtm tag by https://www.npmjs.com/package/react-gtm-module
const FooterEssentials = () => {
// const tagManagerArgs = {
// 	gtmId: 'UA-46574447-1'
// }
	return (
	<>
	// TagManager.initialize(tagManagerArgs)


		<HTMLComment text="[if lte IE 10]>
		<div className='deprecated'><p>Sorry, this browser is not supported since 2016</p></div>
		<![endif]" />;

		{/* <!--[if lte IE 10]>
		<div className="deprecated"><p>Sorry, this browser is not supported since 2016</p></div>
		<![endif]--> */}
	</>
		)
}

export default FooterEssentials


{/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-46574447-1"></script>
<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'UA-46574447-1');
</script> */}