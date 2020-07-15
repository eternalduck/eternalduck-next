import Head from 'next/head'

export default function Sites() {
	return (
		<div className="container">
			<Head>
				<title>sites</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Sites</h1>
				<p>here are sites items</p>
			</main>
		</div>
	)
}