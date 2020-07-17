// import React from "react"
import Link from 'next/link'

const MenuItems = () => (
	<>
		<a className="menu__item" id="home" href="/"><i className="fab fa-houzz"></i></a>
		<Link href="/work/sites">
			<a className="menu__item" id="sites">sites</a>
		</Link>
		<Link href="/work/ux">
			<a className="menu__item" id="ux">ux</a>
		</Link>
		<Link href="/work/art">
			<a className="menu__item" id="art">art</a>
		</Link>
		<Link href="/work/cv-timeline">
			<a className="menu__item" id="timeline">timeline</a>
		</Link>
		<Link href="/work/cv">
			<a className="menu__item" id="cv">cv</a>
		</Link>

	</>
)

export default MenuItems