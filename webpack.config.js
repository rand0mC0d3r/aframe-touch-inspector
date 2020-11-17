const childProcess = require('child_process');
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Add HMR for development environments only.
var entry = ['./src/index.js'];
if (process.env.NODE_ENV === 'dev') {
  entry = [
    'webpack-dev-server/client?http://localhost:3333'
  ].concat(entry);
}

function getBuildTimestamp() {
  function pad2(value) {
    return ('0' + value).slice(-2);
  }
  var date = new Date();
  var timestamp = [
    pad2(date.getUTCDate()),
    pad2(date.getUTCMonth() + 1),
    date.getUTCFullYear()
  ];
  return timestamp.join('-');
}

var commitHash = childProcess.execSync('git rev-parse HEAD').toString();

// Minimization.
var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    },
    VERSION: JSON.stringify(require('./package.json').version),
    BUILD_TIMESTAMP: JSON.stringify(getBuildTimestamp()),
    COMMIT_HASH: JSON.stringify(commitHash)
  }),
  new webpack.EnvironmentPlugin(['NODE_ENV']),
  // new BundleAnalyzerPlugin()
];

let minimize = false;

if (process.env.MINIFY === 'true') {
  minimize = true;
}

// dist/
var filename = 'aframe-inspector.js';
var outPath = 'dist';
if (process.env.AFRAME_DIST) {
  outPath = 'dist';
  if (process.env.MINIFY) {
    filename = 'aframe-inspector.min.js';
  }
}

module.exports = {
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    port: 3333,
    quiet: true,
    clientLogLevel: 'silent'
  },
  performance: {
    hints: 'warning'
  },
  devtool: 'source-map',
  entry: entry,
  output: {
    pathinfo: false,
    path: path.join(__dirname, outPath),
    filename: filename,
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader?cacheDirectory',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  plugins: plugins,
  optimization: {
    minimize,
    minimizer: [new TerserPlugin({
      parallel: 4,
      extractComments: false,
      terserOptions: {
        ie8: false,
        safari10: false,
        mangle: true,
      }
    })]
  },
  resolve: {
    modules: [path.join(__dirname, 'node_modules')]
  }
};