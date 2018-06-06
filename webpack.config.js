const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
//htmlWebpackPlugin simplifies creation of HTML files to serve bundles of application

module.export = {
	entry: './src/index.js',
	output: {
	   path: path.join(__dirname, '/dist'),
	   filename: "index_bundle.js"
	},
	mdodule: {
	   rules: [
	     { 
		test: /\.js$/,
        	exclude: /node_modules/,
        	use: {
        		loader: 'babel-loader'
        	}
	     }
	   ]
	},
	plugins: [
	   new htmlWebpackPlugin({
	      template: './src/index.html'
	   })
	]
}	
