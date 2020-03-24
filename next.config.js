// next.config.js
const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins');
// const optimizedImages = require('next-optimized-images');


module.exports = withPlugins([
    withSass({
        /* config options here */
        /* enable CSS modules */
        cssModules: true
    })
])

// [optimizedImages, {
//     /* config for next-optimized-images */
//     imagesFolder: 'images',
//     optimizeImagesInDev: true,
//     mozjpeg: {
//         quality: 80,
//     },
//     optipng: {
//         optimizationLevel: 3,
//     },
//     pngquant: false,
//     webp: {
//         preset: 'default',
//         quality: 75,
//     }
// }],