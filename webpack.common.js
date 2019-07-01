const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  entry: path.join(__dirname, "./client/main.tsx"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        include: path.join(__dirname, "client")
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      },
      {
        test: /\.(s*)css$/, // 正则匹配文件路径
        // exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      inject: true
    })
  ],
  devServer: {
    host: "localhost",
    port: 3000,
    contentBase: path.join(__dirname, "../dist"),
    // historyApiFallback: true,
    overlay: {
      errors: true
    },
    inline: true,
    hot: true
  }
};
