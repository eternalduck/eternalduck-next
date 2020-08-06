const path = require("path")
// const withSass = require("@zeit/next-sass")


// module.exports = withSass({
// 	cssModules: true,
// 	cssLoaderOptions: {
// 		importLoaders: 1,
// 		localIdentName: '[local]',
// 	},
// })


module.exports = ({
	// distDir: 'build',
	// experimental: { scss: true },//fail
	optimization: {
		minimize: false//fail
	},
	


	webpack: (config) => {
		// config.optimization.minimize = false;//fail
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
			// {//instead of inline call in app.js
			// 	test: /\.scss$/,
			// 	loader: 'sass-extract-loader'
			// }

			
			// {
			// 	enforce: 'pre',
			// 	test: /.scss$/,
			// 	// loader: 'sass-resources-loader',
			// 	// options: {
			// 	// 	resources: ['./scss/_vars-mixins.scss'],
			// 	// },
			// },
		);

		return config;
	}
})

// }))//withSass

// const dev = process.env.NODE_ENV !== 'production'
// distDir: dev ? `buildDev` : 'build',//wtf, testing dev\prod
