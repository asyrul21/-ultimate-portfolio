webpackHotUpdate("styles",{

/***/ "./pages/blog/blog.module.scss":
/*!*************************************!*\
  !*** ./pages/blog/blog.module.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"blogsHero":"_3vBG4eol7vDDoMqZqlQzTv","top":"_1isA5KJKDqC_wOWeqBIV-f","bottom":"_1tpjRF5cQBmyDWDnMbANwX","header":"_2NoDhKmRxQFf9_HiI7K3Nt","title":"_3uA2tTfREJdXwnre8ZMNms","entryContent":"_2tgcAtiD49qjMTi9mxOFSP"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1590900097437");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.b28a4c0579c2364d338e.hot-update.js.map