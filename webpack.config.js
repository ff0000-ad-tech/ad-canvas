const path = require('path')

module.exports = {
	entry: path.resolve(__dirname, 'index.js'), 
	output: {
		filename: 'compiled.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{ test: /\.js$/, use: 'babel-loader' }
		]
	}
}