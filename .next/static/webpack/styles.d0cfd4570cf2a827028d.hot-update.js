webpackHotUpdate("styles",{

/***/ "./components/shared/styles/tabs.module.scss":
/*!***************************************************!*\
  !*** ./components/shared/styles/tabs.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"tabContainer":"_2Us9WewTmbvlOKZCqMMP4e","active":"_3he9mWRDgEgjRmSH-yuGUA"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1591566147977");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.d0cfd4570cf2a827028d.hot-update.js.map