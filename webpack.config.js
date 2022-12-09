const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const path = require("path")

let mode = 'development'
if(process.env.NODE_ENV === "production") {
  mode = "production"
}
module.exports = {
  mode,
  devServer: {
    hot: true
  },
  output: {
    path: path.resolve(__dirname, "dist")
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource"
      },
      {
        test: /\.css$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: ""
          }
        }, 'css-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
}