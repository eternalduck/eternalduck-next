import styled from "styled-components"
import Menu from "./menu"
import {vars, media, mixinContentWidth} from "../scss/_vars-mixins"

// style
const CssHeader  = styled.header`
	padding: 20px 0 0;
	${media.lg`
		padding: 20px 0;
	`}
	${mixinContentWidth}

	/* & .menu {
		margin-bottom: 30px !important;
		.menu__item {
			font-size: 26px;
		}
	} */


`
// + header-footer css - how to split?

// end style

const Header = ({headerMenuClass}) => {
	return (
	<CssHeader>
		<Menu headerMenuClass={headerMenuClass}/>
	</CssHeader>

	)
}

export default Header
