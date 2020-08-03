import Menu from "./menu"
import Back2Top from "./back2Top"
import FooterEssentials from "./footerEssentials"


const Footer = ({footerMenuClass}) => {
	return (

	<>
		<footer>
			<Menu footerMenuClass={`menu_footer ${footerMenuClass}`}/>

			<Back2Top/>
		</footer>
		<FooterEssentials/>

	</>

	)
}

export default Footer