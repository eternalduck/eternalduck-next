import styled from "styled-components"
import Menu from "./menu"
import {media, mixinContentWidth} from "../scss/_vars-mixins"

export default function Header ({
		headerColor,
		contentWidth
	}){

	return (
		<CssHeader contentWidth={contentWidth}>
			<Menu headerColor={headerColor || "#fff"}/>
		</CssHeader>
	)
}

// style
const CssHeader  = styled.header`
	${props => props.contentWidth
		? mixinContentWidth
		: null
	}
	grid-area: header;
	padding: 20px 0 0;
	z-index: 99;
	${media.lg`
		padding: 20px 0;
	`}

`
// end style