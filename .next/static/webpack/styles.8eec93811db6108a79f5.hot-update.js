webpackHotUpdate("styles",{

/***/ "./components/shared/styles/projecttabs.module.scss":
/*!**********************************************************!*\
  !*** ./components/shared/styles/projecttabs.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"projectsContainer":"g5RS6BXzc-yLaCr85L9Du","projectTabContainer":"VQglOrP_BsnisXhU-Jkgk","active":"_1IwD3QlfSXqv3TpIIBaai9","tabBox":"_1Duh7R-UOxEqZmAQwioTfG"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1582197544811");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.8eec93811db6108a79f5.hot-update.js.map