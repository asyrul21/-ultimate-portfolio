# The Ultimate Portfolio
This portfolio was designed to store personal achievements and also experiences, such as Travel and Blogs. It is built using Next.JS, a Server Side rendering framework, based on ReactJS. This document is to meant to record the whole journey through which this portfolio was developed from design stage to deploy, as well as some of the sources of information that are being used.

## Some of the Website references
Example portfolios were obtained from: https://codeburst.io/10-awesome-web-developer-portfolios-d266b32e6154

For blog design ideas, refer: https://andrewborstein.com/blog/hello-world-and-why-im-blogging.html

For photos, use Google Album Archive, as in https://get.google.com/albumarchive/105725955499217588296

For timeline, refer https://jtom.me/portfolio/

For navbar, refer https://www.mockplus.com/blog/post/web-developer-portfolio 

this navbar has 9 items, with login and logout.
Our webpage has about 8 - 10 items, but DOES NOT have login and logout

Some of the layouts can be refers here: https://jamesclear.com

https://www.dtelepathy.com/blog/inspiration/30-bold-and-clean-web-designs-for-inspiration

## More References
http://www.falve.co.nz/collection/

https://www.everlane.com

https://www.intersection.is/about#beliefs   <-- nice

https://www.intersection.is/next-muncie

Pages with categories:

https://www.dtelepathy.com/work/


## Quotes were obtained from the following:

https://www.greetingcardpoet.com/best-positive-quotes-to-uplift-your-spirits/

https://theplanetd.com/the-ultimate-travel-quotes-as-chosen-by-you/

#### For animated tabs: https://www.youtube.com/watch?v=KlQagQQmwX0

## Pulling Data from Wordpress using Next JS
For blogs, I plan to implement Headless Wordpress, something mentioned in the following references:

https://webdevstudios.com/2019/01/03/headless-wordpress-with-react-and-nextjs-1/

https://webdevstudios.com/2019/01/10/headless-wordpress-with-react-and-nextjs-2/


## For Social media shares
https://www.npmjs.com/package/react-share

## Authentication and Auth
https://dev.to/hoangvvo/how-i-build-a-full-fledged-app-with-next-js-and-mongodb-part-1-user-authentication-3io9

## Integrating Mongo with React
https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274

## Draft.js for rich text editor (blog)
https://draftjs.org

https://summernote.org/getting-started/


## Next References
https://www.freecodecamp.org/news/the-next-js-handbook/

## React Animation
https://www.react-spring.io/docs/hooks/basics

## classnames
```npm install classnames --save```

https://zeph.co/multiple-classnames-css-modules-react

## React animations
https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf

## Hamburger nav references
https://www.youtube.com/watch?v=DZg6UfS5zYg
https://www.youtube.com/watch?v=l6nmysZKHFU

## Blog Slate
https://www.youtube.com/watch?v=6ml1E8S-BSs

<!-- ===================== -->
# CSS References
<!-- ===================== -->
Here are some of the references for CSS implementations:

https://stackoverflow.com/questions/39926493/classname-styles-not-working-in-react

https://stackoverflow.com/questions/34279517/using-css-modules-how-do-i-define-a-global-class

https://github.com/css-modules/css-modules

https://medium.com/@dmitrynozhenko/5-ways-to-animate-a-reactjs-app-in-2019-56eb9af6e3bf

https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822

## Rotation
https://flaviocopes.com/rotate-image/

## SCSS basics
https://sass-lang.com/guide

### Hexagon

```npm install --save react-hexagon```

https://www.youtube.com/watch?v=Q_pOgTcg8-o

<!-- ===================== -->
# React References
<!-- ===================== -->
https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/#state

## React Text Loop
https://www.npmjs.com/package/react-text-loop

```npm install react-text-loop```


## passing classnames to react component
https://stackoverflow.com/questions/46045719/pass-computed-style-to-children-in-react

https://stackoverflow.com/questions/32230635/passing-in-class-names-to-react-components

https://stackoverflow.com/questions/40722382/how-to-pass-state-back-to-parent-in-react

<!-- ===================== -->
# Develpment Setup
<!-- ===================== -->
1. Install node or run node -v

2. Initialise next project

```
npm init
npm install --save react react-dom next
```

4. Replace scripts (*better to skip this step*)

5. Dependencies: https://github.com/Jerga99/portfolio-jerga/blob/master/package.json

*Components are named with first letter capital. eg Header.js*

6. Installing SCSS loader for Next: https://github.com/zeit/next-plugins/tree/master/packages/next-sass

```npm install --save @zeit/next-sass node-sass```

7. Create scss next confile file : Create a next.config.js in your project

8. MUST ENABLE SCSS MODULES in config file!

9. Install HTTP client - axios: https://github.com/axios/axios

```npm install --save axios```

In Next JS official website Isomorphic fetch is recommended rather than axios

```npm install --save isomorphic-unfetch```

axios is promised based, IF is asyncawait

10. Create Custom Server
https://github.com/zeit/next.js/tree/canary/examples/custom-server-express

```npm install express --save```


<!-- ===================== -->
# Animations
<!-- ===================== -->

## React Reveal
```npm install react-reveal --save```

https://stackoverflow.com/questions/53757229/reactjs-how-to-render-a-component-only-when-scroll-down-and-reach-it-on-the-page

## Visibility Sensor

```npm install react-visibility-sensor```

https://alligator.io/react/components-viewport-react-visibility-sensor/

## React Spring
```npm install react-spring```

## React in ViewPort
https://www.npmjs.com/package/react-in-viewport

```npm install react-in-viewport --save```

## Flickering Issue
https://stackoverflow.com/questions/57401976/css-transition-flash-on-page-load-with-nextjs-production-build

<!-- ===================== -->
# Deployment
<!-- ===================== -->
## Main reference: 
https://medium.com/@jacoboakley/deploy-a-next-js-app-on-heroku-69bcb01db1b7

## Install Heroku
```
<!-- Install -->
brew tap heroku/brew && brew install heroku

<!-- Create Heroku repo -->
heroku create ultimate-portfolio

<!-- Push to Heroku -->
git push heroku master
```

<!-- ===================== -->
# Mobile Optimisation
<!-- ===================== -->

## Main Reference:
https://blog.hartleybrody.com/how-i-mobile-optimized-my-website-in-5-minutes/

<!-- ===================== -->
## Domains
<!-- ===================== -->
1. Buy Domain (eg. Go Daddy)
2. run heroku domains
3. heroku domains:add www.asyrul.me
4. Go to GoDaddy > Domain > Manage DNS
5. Edit the CNAME with Host:www -> put as value -> heroku domain's DNS Target

<!-- ===================== -->
## Naked Domain
<!-- ===================== -->
1. Go to GoDaddy > Domain > Manaage DNS
2. delete all A
3. go to forwarding > SUBDOMAIN (DO NOT TOUCH the DOMAINS)
4. insert sub domain eg asyrul.me
5. forward to www.asyrul.me
6. save and wait 30 minutes
7. run heroku domains
8. heroku domains:add asyrul.me
9. done


# Optimisation

<!-- ===================== -->
## Next Optimised Images - Did not get to get it work
<!-- ===================== -->
1. Install
```
npm install next-optimized-images 
npm install next-compose-plugins --save
```

2. Add to Next.config

```javascript
// next.config.js
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

  // your other plugins here
]);
```

3. Install 3 main packages

3.1. imagemin-mozjpeg	Optimizes JPEG images.

3.2 imagemin-optipng	Optimizes PNG images.

3.3 webp-loader	Optimizes WebP images and can convert JPEG/PNG images to WebP on the fly

```npm install imagemin-mozjpeg imagemin-optipng webp-loader --save```


<!-- ===================== -->
# Image Optimisations
<!-- ===================== -->
1. Create mobile versions of images - make them smaller
2. Convert images to webp
3. adopt fallback structure

## Fallback code structure: 
https://stackoverflow.com/questions/33958429/fallback-image-with-css

## Some Guidelines:
https://web.dev/total-byte-weight/?utm_source=lighthouse&utm_medium=devtools

https://caniuse.com/#search=JPEG2000

https://web.dev/serve-images-webp/

https://developers.google.com/speed/webp/docs/using

https://stackoverflow.com/questions/53588983/serve-images-in-next-gen-formats

<!-- ===================== -->
# SEO
<!-- ===================== -->
## Some Guidelines: 
https://prismic.io/blog/seo-with-react-and-nextjs

https://www.seomechanic.com/why-is-my-website-not-showing-in-google-search-results/

https://www.advancedwebranking.com/blog/meta-tags-important-in-seo/
