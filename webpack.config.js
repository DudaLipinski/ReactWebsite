const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', // production

  entry: { // what are the files you're going to start off with
    main: path.resolve(__dirname, 'src/index.js'),
  },
  output: { // where are we going to put the output
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].bundle.js', // the name of the output file
    // [name] will be "main" in this case
    // [contenthash] will make files have different names each time we change
    // our code. This way, javascript can be aware that there are new files
    // out, and will not use a cached version of the file
    clean: true,
    // tells webpack to empty the output folder every time we run the build
    assetModuleFilename: '[name][ext]',
    // the naming for our assets, by default they are randomly generated hashes
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['', '.js', '.jsx'],
  },
  devtool: 'inline-source-map',
  // settings for our server (webpack serve)
  devServer: {
    // the location for static files
    port: 5001,
    open: true, // launch the browser when you start the server
    hot: true, // hot reload
  },
  // loaders
  // webpack only understands json and javascript files by default.
  // they will look into the entry files, convert the not-js/json ones into
  // importable javascript modules, and import them into the entry file
  module: {
    rules: [
      // css
      {
        test: /\.css$/, // a matcher for the filename in which the loader will be applied
        use: ['style-loader', 'css-loader'],
        // the loaders to be applied. they're read from right to left.
        // in this case, css-loader will transform css files into javascript modules
        // and load them into our js files.
        // styles-loader will take the css-js-modules imports from our javascript
        // files and load them into our html output file
      },
      // images
      {
        test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
        type: 'asset/resource',
        // builtin loader to just copy and paste files into dist
        // it also makes the files loadable inside javascript
        // (built in webpack 5)
      },
      // js for babel
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // requires babel-loader, @babel/core
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  // plugins
  // allows us to do things that loaders don't. They do a little extra work
  plugins: [
    // automatically create a HTML file and append the resources into it
    new HtmlWebpackPlugin({
      title: 'Just a Demo',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      // we can use the options inserted here in our template file:
      // <%= htmlWebpackPlugin.options.title %>
    }),
  ],
}
