import w from 'webpack';

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-hot-middleware/client',
		'./src/js'
	],
	output: {
		path: '/public/',
		filename: 'bundle.js',
		publicPath: '/lib/'
	},
	plugins: [
		new w.HotModuleReplacementPlugin(),
		new w.optimize.DedupePlugin(),
		new w.optimize.OccurenceOrderPlugin()
	],
	module: {
		loaders: [{ test: /\.js$/, loaders: ['babel-loader'] }]
	},
	resolve: {
		extensions: ['', '.js']
	}
};
