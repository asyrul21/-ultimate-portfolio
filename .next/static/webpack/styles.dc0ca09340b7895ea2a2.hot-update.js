webpackHotUpdate("styles",{

/***/ "./components/shared/styles/boxCategories.module.scss":
/*!************************************************************!*\
  !*** ./components/shared/styles/boxCategories.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"categoriesContainer":"_2pE3dNd640nyWL_Wmb1yEl","box":"_37ph8-Tnh8xGbcf70F2XoH","darkBackground":"AnkTDZEf21_IvCa5GKga","textContainer":"_3iyrBEdyJZL4ocv_d9wqRt"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1585431983964");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.dc0ca09340b7895ea2a2.hot-update.js.map