import Menu from "./menu"
import FooterEssentials from "./footerEssentials"
import styled from "styled-components"
import {vars, media, mixinContentWidth} from "../scss/_vars-mixins"

export default function Footer({footerMenuClass}){

	const now = new Date()

	return (

		<CssFooter>
			<Menu footerMenuClass={footerMenuClass}/>
			<p>{now.getFullYear()}</p>
		<FooterEssentials/>
		</CssFooter>


	)
}


// style
const CssFooter  = styled.footer`
	${mixinContentWidth}
	padding: 25px 0 15px;
	/* grid-area: footer; */

`

// end style