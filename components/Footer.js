import Menu from "./menu"
import FooterEssentials from "./footerEssentials"
import styled from "styled-components"
import {vars, media} from "../scss/_vars-mixins"

// style
const CssFooter  = styled.footer`
	/* grid-area: footer; */
	padding: 25px 0 15px;
	
	& .menu {
		text-align: center;
		.menu__item {
			font-size: 18px;
		}
	}

`
// + header-footer css - how to split?

// end style

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
