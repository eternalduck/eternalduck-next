import Link from 'next/link'
import {useRouter} from 'next/router'
import {menuItems} from './data/menuItems'
import styled from "styled-components"
import {vars, mixinHoverBg} from "../scss/_vars-mixins"

export default function Menu({
		headerColor, 
		footerColor
	}){

	const router = useRouter()

	return (

	<Nav 
		headerColor={headerColor}
		footerColor={footerColor}
	>
		{menuItems.map(item => (
			<Link href={item.url} key={item.id}>
				<a id={item.id} 
					className={router.pathname == item.url ? "current" : ""}
					dangerouslySetInnerHTML={{ __html: item.txt}}
				></a>
			</Link>
		))}
	</Nav>

	)
}

// style
const Nav  = styled.nav`
	& a {
		position: relative;
		margin: 0 30px 50px 0;
		padding-bottom: 5px;
		font-weight: 600;
		font-size: 2rem;
		z-index: 1;
		${mixinHoverBg}
		color: ${props => props.headerColor || props.footerColor};
		&.current {
			cursor: default;
			pointer-events: none;
			&:after, &:hover:after {
				background: ${vars.tenderPinkTransp};
			}

		}
	}
	/* // TMP, make better */
	/* div[class*=IndexPage] & a:first-child {
		display: none;
	} */
	/* footer & {
		font-size: 1.5rem;
		text-align: center;
	} */
`


// /* TODO: inner pages-specific settings */
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
