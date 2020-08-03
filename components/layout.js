import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout({ 
	clss,
	headerMenuClass,
	footerMenuClass,
	children
	}) {
	return (
	
	<>
	<div className={`grid-container ${clss}`}>
		<div className="grid-content">
			<Header headerMenuClass={headerMenuClass}/>
				{children}
			<Footer footerMenuClass={footerMenuClass}/>
		</div>
	</div>
	</>

	)
}