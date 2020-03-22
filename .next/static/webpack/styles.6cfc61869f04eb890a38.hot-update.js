webpackHotUpdate("styles",{

/***/ "./components/layouts/contentFragment.module.scss":
/*!********************************************************!*\
  !*** ./components/layouts/contentFragment.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"fragmentHeader":"_1pX9g6j7erNsOO-h032l1-","subHeader":"JzDjN33rVGYQJlPG98FnB","time":"_2vNElQm3ixg4JSKkkkrIjv","text":"Aik-M3HCLVIrlmuQRLz2N","linkContainer":"_3HYonkoVEQK7gCofoOIwN5","ItemsContainer":"_1eaZthu8GWKClh8XC0O1zR","link":"QhwHN4AQ2F_1130v8HC6l"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1584888055769");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.6cfc61869f04eb890a38.hot-update.js.map