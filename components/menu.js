import Link from 'next/link'
import {menuItems} from './data/menuItems'
import styled from "styled-components"
import {vars, media, mixinNoBorderBottom, mixinHoverBg} from "../scss/_vars-mixins"

export default function Menu({headerMenuClass, footerMenuClass}){
	console.log(headerMenuClass)
	return (

	<Nav 
		className={
			headerMenuClass ? `${headerMenuClass}` 
			: `${footerMenuClass}`
		}
	>
	{/* TODO: add current item class */}
		{menuItems.map(item => (
			<Link href={item.url} key={item.id}>
				<a id={item.id} 
					dangerouslySetInnerHTML={{ __html: item.txt}}
				></a>
			</Link>
		))}
	</Nav>

	)
}

// style
const Nav  = styled.nav`
	footer & {
		font-size: 1.5rem;
		text-align: center;
	}
	& a {
		position: relative;
		margin: 0 30px 50px 0;
		padding-bottom: 5px;
		font-weight: 600;
		font-size: 2rem;
		${mixinHoverBg}
		color: ${props => props.className === "light" 
			? vars.white
			: vars.almostBlack
		}


	}/* a */
	div[class*=IndexPage] & a:first-child {/* TMP, make better */
		display: none;
	}
`


// /* TODO: page-specific settings, make by js? */
// .index-page &:first-child {
// 	display: none;
// }
// .work-page_sites &#sites,
// .work-page_ux &#ux,
// .art-page &#art,
// .cv-timeline &#timeline,
// .cv-page &#cv {
// 	cursor: default;
// 	pointer-events: none;
// 	&:after {
// 		background: $tender-pink-transp;
// 	}
// }
// .single-work_site &#sites,
// .single-work_ux &#ux,
// .single-work_art &#art {
// 	cursor: pointer;
// 	&:after {
// 		background: $vio-saturated-transp;
// 	}
// 	&:hover:after {
// 		background: $tender-pink-transp;
// 	}
// }
// /* end page-specific settings */

// /* TODO: for sidebar */
// 	&_items-vertical {
// 		display: flex;
// 		flex-direction: column;
// 		&__item {
// 			outline: 1px dotted;
// 			flex: 1;
// 		}
// 	}
// /* end for sidebar */

// end style
