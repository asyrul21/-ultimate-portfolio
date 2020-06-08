webpackHotUpdate("styles",{

/***/ "./components/shared/styles/SuggestPages.module.scss":
/*!***********************************************************!*\
  !*** ./components/shared/styles/SuggestPages.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"_12jzFDGTpVvjoXn6YOGCFn","header":"_3KzLW-GTNCne89VdqS16Cj","link":"_2pYabeOjpGZSC6qU5uPfC6"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1591595491942");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.cc14f91469c289484284.hot-update.js.map