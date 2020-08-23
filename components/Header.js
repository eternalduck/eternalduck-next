import styled from "styled-components"
import Menu from "./menu"
import {media, mixinContentWidth} from "../scss/_vars-mixins"

export default function Header ({headerMenuClass}){
	return (
	<CssHeader>
		<Menu headerMenuClass={headerMenuClass}/>
	</CssHeader>

	)
}

// style
const CssHeader  = styled.header`
	${mixinContentWidth}
	padding: 20px 0 0;
	z-index: 99;
	${media.lg`
		padding: 20px 0;
	`}

`

// end style