webpackHotUpdate("styles",{

/***/ "./components/shared/projects/proprojects.module.scss":
/*!************************************************************!*\
  !*** ./components/shared/projects/proprojects.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"projectHeading":"_1oq25E7xqVEq7wr3nN8Qcx","attributes":"_3D_1f4bBmrJg6lw1qMIqup","photosContainer":"_2f1K1_cSqQxL8IrG6yurBl","text":"_16fTmpqwuEgikDz6hiiY0d","image":"_1pVWZb2uuOJBcOGWhXENY5"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1582238699264");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.64ccc7c44417f0b98ce1.hot-update.js.map