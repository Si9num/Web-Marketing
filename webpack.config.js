const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./app/index.js",
  resolve: {
    extensions: [".js", ".marko"],
  },
  module: {
    rules: [
      { test: /\.css$/, use: "css-loader" },
      {
        test: /\.marko$/,
        loader: "@marko/webpack/loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      templateParameters: require("./dataset.json"),
    }),
    new MiniCssExtractPlugin({
      filename: "app/index.css",
    }),
  ],

  mode: "production",
};
