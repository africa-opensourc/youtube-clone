const path = require("path");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./main.scss",
  context: path.resolve(__dirname, "src/video-details-styles/scss"),

  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "video-details-page.mini.css",
    }),
    // plugin to delete auto empty auto generated main.js
    new FileManagerPlugin({
      events: {
        onEnd: {
          delete: ["../../../dist/main.js"],
        },
      },
    }),
  ],
};
