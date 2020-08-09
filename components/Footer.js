import Menu from "./menu"
import FooterEssentials from "./footerEssentials"
import styled from "styled-components"
import {vars, media} from "../scss/_vars-mixins"

export default function Footer({footerMenuClass}){
	return (

	<>
		<CssFooter>
			<Menu footerMenuClass={footerMenuClass}/>
		</CssFooter>
		<FooterEssentials/>

	</>

	)
}

const CssFooter  = styled.div`
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