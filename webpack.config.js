let webpack = require('webpack');
let path = require('path');
let HTMLwebpackPlugin = require('html-webpack-plugin');

let Vendor_Library = [
  'react','faker','react-dom'
];

module.exports = {
  entry: {
    bundle:'./src/index.js',
    vendor: Vendor_Library
  },
  mode:'development',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: '[name].[chunkhash].js'
  },
  module:{
    rules:[
      {
        use:'babel-loader',
				test:/\.js$/,
        exclude:/node_modules/
      },
      {
        use:['style-loader','css-loader'],
        test:/\.css$/
      },
      {
        test:/\.(jpe.?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit:40000}
          },
          'image-webpack-loader']
      }
    ]
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }
  },
  plugins: [
    new HTMLwebpackPlugin({ 
      template:'./index.html'
    }),
    new webpack.DefinePlugin({
      'process.env_NODE_ENV':JSON.stringify(process.env_NODE_ENV)
    })
  ]
}