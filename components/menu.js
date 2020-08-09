import Link from 'next/link'
import {menuItems} from './data/menuItems'
import styled from "styled-components"
import {vars, media, mixinNoBorderBottom, mixinHoverBg} from "../scss/_vars-mixins"


const Menu = ({headerMenuClass, footerMenuClass}) => {
	return (

	<CssMenu 
		className={
			headerMenuClass ? `${headerMenuClass}` 
			: `${footerMenuClass}`
		}
	>
		{menuItems.map(item => (
			<Link href={item.url} key={item.id}>
				<a id={item.id}
					dangerouslySetInnerHTML={{ __html: item.txt}}></a>
			</Link>
		))}
	</CssMenu>

	)
}


const CssMenu  = styled.nav`
	a {
		/* position: relative; */
		margin: 0 30px 0 0;
		padding-bottom: 5px;
		font-weight: 600;
		${mixinNoBorderBottom}
		${mixinHoverBg}
		/* colors */ /* FAIL */
			.light a {
				color: #fff;/* ${vars.white}; */
			}
			.dark a {
				color: ${vars.almostBlack};
			}
		/* end colors */
		/* TODO: page-specific settings */
		/* .index-page &:first-child {
			display: none;
		}
		.work-page_sites &#sites,
		.work-page_ux &#ux,
		.art-page &#art,
		.cv-timeline &#timeline,
		.cv-page &#cv {
			cursor: default;
			pointer-events: none;
			&:after {
				background: $tender-pink-transp;
			}
		}
		.single-work_site &#sites,
		.single-work_ux &#ux,
		.single-work_art &#art {
			cursor: pointer;
			&:after {
				background: $vio-saturated-transp;
			}
			&:hover:after {
				background: $tender-pink-transp;
			}
		} */
		/* end page-specific settings */
	}/* a */
	
	/* ${(CssHeader)} & {
		margin-bottom: 30px !important;
		& a {
			font-size: 26px;
		}
	} */

/* TODO: for sidebar */
	/* &_items-vertical {
		display: flex;
		flex-direction: column;
		&__item {
			outline: 1px dotted;
			flex: 1;
		}
	} */
/* end for sidebar */

`


export default Menu