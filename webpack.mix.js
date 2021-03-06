let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .sass('resources/assets/sass/common.scss', 'public/css')
    .scripts('resources/assets/js/common.js', 'public/js/common.js');
    // .combine([
    //     'node_modules/moment/min/moment.min.js',
    //     'node_modules/axios/dist/axios.js',
    //     'node_modules/jquery/dist/jquery.js',
    //     'node_modules/numeral/src/numeral.js',
    //     'node_modules/sweetalert2/dist/sweetalert2.all.js'
    // ], 'public/js/app.js');
