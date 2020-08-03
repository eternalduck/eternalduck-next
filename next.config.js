const path = require('path')
// const withSass = require('@zeit/next-sass')


// module.exports = (withSass({

module.exports = ({
	// distDir: 'build',
	optimization: {
		minimize: false//fail
	},
	// cssModules: true,
	// cssLoaderOptions: {
	// 	importLoaders: 1,
	// 	localIdentName: '[local]',
	// },


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
			// {
			// 	enforce: 'pre',
			// 	test: /.scss$/,
			// 	// loader: 'sass-resources-loader',
			// 	// options: {
			// 	// 	resources: ['./scss/_cars-mixins.scss'],
			// 	// },
			// },
		);

		return config;
	}
})

// }))//withSass

// const dev = process.env.NODE_ENV !== 'production'
// distDir: dev ? `buildDev` : 'build',//wtf, testing dev\prod
