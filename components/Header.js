import styled from "styled-components"
import {vars, media, mixinRedBg} from "../scss/_vars-mixins.js"
import Menu from "./menu"

const Header = ({headerMenuClass}) => {
	return (

	<header>
		<Menu headerMenuClass={`menu_header ${headerMenuClass}`}/>
	</header>

	)
}

export default Header

const ZZZ  = styled.div`
	background: red;

`;

// + header-footer css - how to split?