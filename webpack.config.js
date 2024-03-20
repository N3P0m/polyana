const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader');
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// const json = require('json-loader!./file.json');

// const { extendDefaultPlugins } = require('svgo')

const fs = require('fs')
const mode = process.env.NODE_ENV
console.log('mode', mode)

// ===HELPERS FUNCTIONS===
function generateHtmlPlugins (templateDir) {
    let templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
    templateFiles = templateFiles.map(item => {
        let result = null
        const parts = item.split('.')
        if (parts.length === 2 && parts[1] === 'html') {
            const name = parts[0]
            const extension = parts[1]
            result = new HtmlWebpackPlugin({
                filename: `${name}.html`,
                template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
                chunks: [name === 'error404' ? '' : 'common', name]
            })
        }
        return result
    }).filter((el) => el !== null)
    return templateFiles
}

// // ===/HELPERS FUNCTIONS===
const htmlPlugins = generateHtmlPlugins('./src')
console.log(JSON.stringify(htmlPlugins, null, 2))

const INCLUDE_PATTERN = /<include src="(.+)"\s*\/?>(?:<\/include>)?/gi
const processNestedHtml = (content, loaderContext, dir = null) =>
    !INCLUDE_PATTERN.test(content)
        ? content
        : content.replace(INCLUDE_PATTERN, (m, src) => {
            const filePath = path.resolve(dir || loaderContext.context, src)
            loaderContext.dependency(filePath)
            return `<!-- START ${src.split('/').at(-1)} --> \n` +
                processNestedHtml(loaderContext.fs.readFileSync(filePath, 'utf8'), loaderContext, path.dirname(filePath)) +
                    `\n <!-- END ${src.split('/').at(-1)} -->`
        })

const pluginsDev = [
    new CleanWebpackPlugin(),
    ...htmlPlugins,
    // new StylelintPlugin({
    //     fix: false,
    //     failOnError: false
    // }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].css'
    }),
    new ESLintPlugin({
        fix: true
    }),
    new TerserPlugin({
        terserOptions: {
            compress: {
                drop_console: true
            }
        }
    }),
    new VueLoaderPlugin()
]
const pluginsProd = [
    ...htmlPlugins,
    new CleanWebpackPlugin(),
    new ESLintPlugin({
        fix: true
    }),
    new MiniCssExtractPlugin({
        filename: 'css/[name].[hash].css'
    }),
    // new ImageMinimizerPlugin({
    //   minimizerOptions: {
    //     plugins: [
    //       ['gifsicle', { interlaced: true }],
    //       ['jpegtran', { progressive: true }],
    //       ['optipng', { optimizationLevel: 5 }],
    //       // [
    //       //   'svgo',
    //       //   {
    //       //     plugins: extendDefaultPlugins([
    //       //       {
    //       //         name: 'removeViewBox',
    //       //         active: false
    //       //       },
    //       //       {
    //       //         name: 'addAttributesToSVGElement',
    //       //         params: {
    //       //           attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }]
    //       //         }
    //       //       }
    //       //     ])
    //       //   }
    //       // ]
    //     ]
    //   }
    // })
    new VueLoaderPlugin()
]

const plugins = mode === 'development' ? pluginsDev : pluginsProd
const rules = {
    production: [
        {
            test: /\.html$/,
            use: {
                loader: 'html-loader',
                options: {
                    minimize: false,
                    preprocessor: processNestedHtml
                }
            }
        },
        // JS
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },

        // {
        //     test: /\.vue$/,
        //     loader: 'vue-loader'
        // },
        // {
        //   test: /\.json$/,
        //   exclude: /node_modules/,
        //   // use: ['json-loader'],
        //   type: 'asset/resource',
        //   generator: {
        //     filename: 'assets/test/[name][ext]'
        //   }
        // },

        // CSS, PostCSS, Sass
        {
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false
                    }
                },
                'postcss-loader',
                'sass-loader'
            ]
        },
        // Images
        {
            test: /\.(png|jpe?g|webp|svg|gif)$/,
            type: 'asset/resource',
            generator: {
                filename: 'assets/img/[name][ext]'
            }
        },
        // Fonts
        {
            test: /\.(ttf|woff|woff2|eot|)$/,
            type: 'asset/resource',
            generator: {
                filename: 'assets/fonts/[name][ext]'
            }
        }
    ],
    development: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.html$/,
            use: {
                loader: 'html-loader',
                options: {
                    minimize: false,
                    preprocessor: processNestedHtml
                }
            }
        },
        // JS
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        },

        // CSS, PostCSS, Sass
        {
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: false
                    }
                },
                'postcss-loader',
                'sass-loader'
            ]
        },
        // Images
        {
            test: /\.(png|jpe?g|webp|svg|gif)$/,
            type: 'asset/resource'
        },
        // Fonts
        {
            test: /\.(ttf|woff|woff2|eot|otf|)$/,
            type: 'asset/resource',
            generator: {
                filename: 'assets/fonts/[name][ext]'
            }
        }
    ]
}
const config = {
    entry: {
        common: path.resolve(__dirname, './src/common.js'),
        index: path.resolve(__dirname, './src/entry.js'),
        'choosing-house': path.resolve(__dirname, './src/choosing-house.js'),
        'choosing-townhouse': path.resolve(__dirname, './src/choosing-townhouse.js'),
        'terms-of-purchase-detail': path.resolve(__dirname, './src/terms-of-purchase-detail.js'),
        'houses': path.resolve(__dirname, './src/houses.js'),
        'house': path.resolve(__dirname, './src/house.js'),
        'apartments': path.resolve(__dirname, './src/apartments.js'),
        'apartment': path.resolve(__dirname, './src/apartment.js'),
        'error404': path.resolve(__dirname, './src/error404.js')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/')
        }
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js',
        assetModuleFilename: (path) => {
            if (typeof path.filename !== 'undefined' && path.filename.match(/(img)/)) {
                path.filename = path.filename.replace('src/', '')
                return `${path.filename}`
            }
            return '[name].[ext]'
        }
    },
    externalsType: 'script',
    externals: {
        ymaps3: ['https://api-maps.yandex.ru/v3/?apikey=ac18a8b7-30bc-4792-9e43-609a2f979eee&lang=ru_RU', 'ymaps3']
    },
    plugins: [...plugins],
    module: {
        rules: rules[mode]
    },
    optimization: {
        minimize: mode === 'production'
    },
    devServer: {
        liveReload: true,
        hot: false
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    stats: {
        errorDetails: true
    }
}

module.exports = (env, options) => {
    const isProd = options.mode === 'production'
    config.devtool = isProd ? false : 'eval-cheap-module-source-map'
    return config
}
