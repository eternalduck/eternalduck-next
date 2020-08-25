import Menu from "./menu"
import FooterEssentials from "./footerEssentials"
import styled from "styled-components"
import {vars, media, mixinContentWidth} from "../scss/_vars-mixins"

export default function Footer({menuColor}){

	const now = new Date()

	return (

		<CssFooter>
			<Menu menuColor={menuColor}/>
			<p>{now.getFullYear()}</p>
		<FooterEssentials/>
		</CssFooter>


	)
}


// style
const CssFooter  = styled.footer`
	${mixinContentWidth}
	padding: 25px 0 15px;
	& nav {
		font-size: 1.5rem;
		text-align: center;
		/* & a {
			color: ${props => props.footerColor};
		} */
	}
	/* grid-area: footer; */

`

// end style