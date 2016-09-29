const path = require('path')
const webpack = require('webpack')

const webpackPort = 3001
const webpackConfig = {
	resolve: {
		extensions: ['', '.js']
	},

	entry: [
		'webpack-dev-server/client?http://localhost:3001',
		'webpack/hot/only-dev-server',
		// 'webpack-hot-middleware/client?path=/app/__webpack_hmr&timeout=20000',
		'./src/app/bootstrap.js'
	],
	output: {
		path: path.join(__dirname, '/src/app/'),
		publicPath: '/app',
		filename: 'app.bundle.js',
	},

	node: {
		fs: 'empty'
	},

	module: {
		loaders: [
			{
				test: /\.png/,
				loader: 'file'
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-1']
				}
			}
		]
	},

	plugins: [
		// new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		// new webpack.NoErrorsPlugin()
	]
}

module.exports = {
	port: webpackPort,
	config: webpackConfig
}
