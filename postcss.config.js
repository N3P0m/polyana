const purgecss = require('@fullhuman/postcss-purgecss')
const postcssPresetEnv = require('postcss-preset-env')
const cssnano = require('cssnano')

module.exports = {
    syntax: 'postcss-scss',
    plugins: [

        postcssPresetEnv({
            browsers: 'last 2 versions'
        }),
        // purgecss({
        //     content: ['./src/**/*.html', './src/**/*.js']
        // }),
        cssnano({
            preset: 'default'
        })
    ]
}
