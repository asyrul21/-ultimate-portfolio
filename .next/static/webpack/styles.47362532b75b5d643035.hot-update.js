webpackHotUpdate("styles",{

/***/ "./components/shared/styles/contentHead.module.scss":
/*!**********************************************************!*\
  !*** ./components/shared/styles/contentHead.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"headContainer":"_1VqQKFicCbFyZ0zom1JCuB","title":"_1qJqvjFdArUczCb9Hw-xG1","quote":"_3cUM3i_ShnS59iohtQew57","author":"lV8OG2KRXm5Csh6a3S3pS","text":"nTfcgQMaTNiKLER9c4L0z"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1585049270485");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.47362532b75b5d643035.hot-update.js.map