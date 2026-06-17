/**
 * Hummingbird Child — single-file webpack config (wrapper child theme).
 *
 * The whole mechanism is the alias block: parent Hummingbird sources are
 * compiled INTO this theme's own bundles. The parent's internal imports
 * (@js, @constants, @helpers, @services) are kept verbatim so theme.ts
 * stays diff-able against the parent's.
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {EsbuildPlugin} = require('esbuild-loader');

const parentSrc = path.resolve(__dirname, '../hummingbird/src');

module.exports = (env, options) => {
  const mode = options.mode ?? 'production';
  const isProd = mode === 'production';

  return {
    mode,
    entry: {
      theme: ['./src/scss/theme.scss', './src/js/theme.ts'],
    },
    output: {
      path: path.resolve(__dirname, 'assets'),
      filename: 'js/[name].js',
      chunkFilename: isProd ? 'js/[chunkhash].js' : 'js/[id].js',
      publicPath: '../',
      clean: true,
      library: {
        name: 'Theme',
        type: 'window',
      },
    },
    target: 'web',
    devtool: isProd ? 'hidden-source-map' : 'source-map',
    externals: {
      prestashop: 'prestashop',
    },
    resolve: {
      extensions: ['.js', '.ts', '.d.ts'],
      alias: {
        '@parent-scss': path.join(parentSrc, 'scss'),
        '@js': path.join(parentSrc, 'js'),
        '@services': path.join(parentSrc, 'js/services'),
        '@constants': path.join(parentSrc, 'js/constants'),
        '@helpers': path.join(parentSrc, 'js/helpers'),
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          exclude: /node_modules/,
          resolve: {fullySpecified: false},
          loader: 'esbuild-loader',
          options: {loader: 'ts', target: 'es2015'},
        },
        {
          test: /\.(scss|css)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {postcssOptions: {plugins: ['autoprefixer']}},
            },
            'sass-loader',
          ],
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          type: 'asset/resource',
          generator: {
            outputPath: 'img-dist/',
            publicPath: '../img-dist/',
            filename: '[contenthash][ext]',
          },
        },
        {
          test: /\.(woff|woff2|ttf|eot|otf)$/,
          type: 'asset/resource',
          generator: {
            outputPath: 'fonts/',
            publicPath: '../fonts/',
            filename: '[name]-[contenthash][ext]',
          },
        },
      ],
    },
    optimization: {
      minimize: isProd,
      minimizer: [
        new EsbuildPlugin({
          target: 'es2015',
          format: 'iife',
          css: true,
        }),
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: isProd ? 'css/[chunkhash].css' : 'css/[id].css',
      }),
    ],
    watchOptions: {
      ignored: /node_modules/,
    },
  };
};
