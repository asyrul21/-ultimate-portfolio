webpackHotUpdate("styles",{

/***/ "./pages/styles/about.module.scss":
/*!****************************************!*\
  !*** ./pages/styles/about.module.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"aboutHero":"_2IPjBvKLklHNGOw9B57hZi","skillHero":"_6CFWrb-v32RKCgSbNHdM4","workHero":"_1vtSvnJFaK8-Hwf7E6SbWv","educationHero":"_2guBLTSEwhldHqNw03PBfz","yasminBoxContainer":"_122z1L_Fn86hjjGH3l0tNq","box":"_3PM6D4V7MHYF0o8o1cb6DF"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1584882859471");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.2edb6014671b14d3b5cf.hot-update.js.map