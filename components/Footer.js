import Menu from "./menu"
import FooterEssentials from "./footerEssentials"
import styled from "styled-components"
import {vars, media, mixinRedBg} from "../scss/_vars-mixins.js"

const Footer = ({footerMenuClass}) => {
	return (

	<>
		<footer>
			<Menu footerMenuClass={`menu_footer ${footerMenuClass}`}/>
		</footer>
		<FooterEssentials/>

	</>

	)
}

export default Footer

const ZZZ  = styled.div`
	background: red;

`;

// + header-footer css - how to split?