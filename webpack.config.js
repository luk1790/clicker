var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractPlugin = new ExtractTextPlugin({
  filename: "bundle.css"
});

module.exports = {
  entry: "./app/app.js",
  mode: "none",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "app/")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: ['/node_modules/'],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["env", "react"]
            }
          }
        ]
      },
      {
        test: /\.scss$/, // made scss
        exclude: ['/node_modules/'],
        use: extractPlugin.extract({
          use: ["css-loader", "sass-loader"]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf)$/i,
        use: ["url-loader?limit=10000", "img-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [extractPlugin]
};
