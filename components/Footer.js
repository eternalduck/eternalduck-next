// import React from "react"
import MenuItems from "./MenuItems"
import Back2Top from "./Back2Top"
import FooterEssentials from "./FooterEssentials"


const Footer = () => (
	// render(
	<>
		<footer>
			<Back2Top/>
			<nav className="menu menu_footer MENUCLASS">
				<MenuItems/>
			</nav>
		</footer>
		<FooterEssentials/>

	</>
	// )
)

export default Footer