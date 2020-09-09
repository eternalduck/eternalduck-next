const path = require("path")
const withPlugins = require("next-compose-plugins")//cleaner way to configure plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const withSass = require("@zeit/next-sass")// enable if using extracted scss
// const withCss = require("@zeit/next-css")// install if using extracted css


// module.exports = withSass({
// 	cssModules: true,
// 	cssLoaderOptions: {
// 		importLoaders: 1,
// 		localIdentName: '[local]',
// 	},
// })

// For static export, the getStaticProps API is always preferred 
// exportPathMap and getStaticPaths??
// The fallback: true mode of getStaticPaths is not supported when using next export.

module.exports = withPlugins(
	[
		// withSass,
	],
	{
// routing for static export
	// trailingSlash: true,//required for exportPathMap
	//  exportPathMap: async function (//deprecated!
	// 		defaultPathMap,
	// 		{ dev, dir, outDir, distDir, buildId }
	// 	) {
	// 	return {//TODO: use obj to generate all posts urls; some FAIL with trailind slash
	// 		'/': { page: '/' },
	// 		'/work/sites': { page: '/work/sites'},
	// 		'/work/ux': { page: '/work/ux'},
	// 		'/work/cv': { page: '/work/cv'},
	// 		// '/work/art': { page: '/work/art'},
	// 		// '/work/timeline': { page: '/work/timeline'},
	// 		// '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
		
	// 	}
	// },//exportPathMap

// end routing

	// optimization: {
	// 	minimize: false//fail
	// },
	


	webpack: (config) => {
		// config.optimization.minimizer = [],//fail
		// minify: false,//fail
		// config.optimization.minimize = false//fail

		config.module.rules.push(
			{
				test: /\.(json|png|jpg|gif|svg|pdf|eot|ttf|woff|woff2)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 100000,
					},
				},
			},
			// {
			// 	test: /\.html$/,
			// 	use: {
			// 		loader: 'html-loader',
			// 		options: {
			// 			minify: false,//fail
			// 		},
			// 	}
			// }
		);//push

		return config;
	}//webpack
	}
)

// }))//withSass

// const dev = process.env.NODE_ENV !== 'production'
// distDir: dev ? `buildDev` : 'build',//wtf, testing dev\prod
