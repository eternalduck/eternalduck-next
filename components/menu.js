import Link from 'next/link'
import {menuItems} from './data/menuItems'

const Menu = ({headerMenuClass, footerMenuClass}) => {
	return (

	<nav 
		className={
			headerMenuClass ? `menu ${headerMenuClass}` 
			: `menu ${footerMenuClass}`
		}
	>
	
	{menuItems.map(item => (
		<Link href={item.url} key={item.id}>
			<a className="menu__item" id={item.id}
				dangerouslySetInnerHTML={{ __html: item.txt}}></a>
		</Link>
	))}
	</nav>

	)
}

export default Menu