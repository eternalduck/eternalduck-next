import Menu from "./menu"
//TODO: menu_light | menu_dark

const Header = ({headerMenuClass}) => {
	return (

	<header>
		<Menu headerMenuClass={`menu_header ${headerMenuClass}`}/>
	</header>

	)
}

export default Header