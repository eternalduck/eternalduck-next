import styled from "styled-components"
import Menu from "./menu"
import {vars, media} from "../scss/_vars-mixins"

const Header = ({headerMenuClass}) => {
	return (
// TODO: remove class, import mixinContentWidth in index
	<header className="content-width">
		<Menu headerMenuClass={`menu_header ${headerMenuClass}`}/>
	</header>

	)
}

export default Header

const ZZZ  = styled.div`
	background: red;

`;

// + header-footer css - how to split?