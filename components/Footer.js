import Menu from "./menu"
import FooterEssentials from "./footerEssentials"
import styled from "styled-components"
import {vars, media, mixinContentWidth} from "../scss/_vars-mixins"

export default function Footer({
		footerColor
	}){

	const now = new Date()

	return (

		<CssFooter>
			<Menu footerColor={footerColor}/>
			<p>{now.getFullYear()}</p>
		<FooterEssentials/>
		</CssFooter>


	)
}


// style
const CssFooter  = styled.footer`
	grid-area: footer;
	padding: 25px 0 15px;
	& nav {
		font-size: 1.5rem;
		text-align: center;
	}

`

// end style