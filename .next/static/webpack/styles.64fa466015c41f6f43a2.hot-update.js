webpackHotUpdate("styles",{

/***/ "./pages/styles/index.module.scss":
/*!****************************************!*\
  !*** ./pages/styles/index.module.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"landing":"UBYuk19RdAhA85Y-xYE-v","Herofallback":"_12k3-9S_mxg6o6LInmX_JE","IndexHero":"_3olEcnNI1gv9LjKOf4hX32","textContainer":"_3JPe-yxVweEx3SNyqLwX0O","appear":"_2x4SE4dlJM8Nds1ITWEp4I","fadein":"_1lOXMWzUO7b-20ejqb4h4E","Welcome":"_38tICKC0ZmNbmjCMv1Gfn","Name":"_2vXhFBf99N4pJzWCrAksTC","infoContainer":"WvWeWYLcXkomb9oOI_Dld","Job":"_2FRtfTtreCX7tlUSJfOsW0"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1585152753040");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.64fa466015c41f6f43a2.hot-update.js.map