webpackHotUpdate("static/development/pages/fitness.js",{

/***/ "./components/fitnessItems/ItemTransform.js":
/*!**************************************************!*\
  !*** ./components/fitnessItems/ItemTransform.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/ContentFragment */ "./components/layouts/ContentFragment.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout





var ItemTransform = function ItemTransform(props) {
  var item = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: item.title,
    time: item.time,
    text: item.intro
  }, __jsx("div", {
    className: "jsx-3789922122" + " " + "row"
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px"
  }, __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro1") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 200
  }, __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro2") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 400
  }, __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "intro3") || "")
  })))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "My Bulking Phases",
    text: item.main1
  }, __jsx("div", {
    className: "jsx-3789922122" + " " + "row"
  }, __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "bulk1") || "")
  }), __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "bulk2") || "")
  }), __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "bulk3") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Technology",
    text: item.main2
  }, __jsx("div", {
    className: "jsx-3789922122" + " " + "row"
  }, __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || "")
  }), __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || "")
  }), __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || "")
  }), __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || "")
  })), __jsx("div", {
    className: "jsx-3789922122" + " " + "row"
  }, __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || "")
  }), __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || "")
  }), __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || "")
  }), __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Results",
    text: item.closure
  }, __jsx("div", {
    className: "jsx-3789922122" + " " + "row"
  }, __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "main1") || "")
  }), __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || "")
  }), __jsx("div", {
    className: "jsx-3789922122" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Placement Text",
    text: item.main1
  }), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Placement Text",
    text: item.main1
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3789922122"
  }, ".intro1.jsx-3789922122{background-image:url('/static/images/fitness/achievements/transformation/skinny2.jpeg');}.intro2.jsx-3789922122{background-image:url('/static/images/fitness/achievements/transformation/skinny3.jpeg');}.intro3.jsx-3789922122{background-image:url('/static/images/fitness/achievements/transformation/skinny1.jpg');}.main1.jsx-3789922122{background-image:url('/static/images/fitness/achievements/transformation/main1.png');}.main2.jsx-3789922122{background-image:url('/static/images/fitness/achievements/transformation/main2.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9maXRuZXNzSXRlbXMvSXRlbVRyYW5zZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RXdCLEFBRzZHLEFBSUEsQUFJRCxBQUlGLEFBSUEscUZBSHpGLEFBSUEsRUFSQSxDQVJBLEFBSUEiLCJmaWxlIjoiL1VzZXJzL2FzeXJ1bGhhZmV0enkvRG9jdW1lbnRzL0NTRGV2ZWxvcG1lbnQvV2ViL215VWx0aW1hdGVQb3J0Zm9saW8vdWx0aW1hdGVwb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL2ZpdG5lc3NJdGVtcy9JdGVtVHJhbnNmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vL2ltcG9ydCBsYXlvdXRcbmltcG9ydCBDb250ZW50RnJhZ21lbnQgZnJvbSAnLi4vbGF5b3V0cy9Db250ZW50RnJhZ21lbnQnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuXG5jb25zdCBJdGVtVHJhbnNmb3JtID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHByb3BzLmRhdGFcbiAgICByZXR1cm4gKFxuICAgICAgICA8cmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIHRpbWU9e2l0ZW0udGltZX0gdGV4dD17aXRlbS5pbnRyb30+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwiaW50cm8xXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnIGRlbGF5PXsyMDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcImludHJvMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4JyBkZWxheT17NDAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvTGFuZHNjYXBlXCIsIFwiaW50cm8zXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJNeSBCdWxraW5nIFBoYXNlc1wiXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS5tYWluMX0+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvTGFuZHNjYXBlXCIsIFwiYnVsazFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwiYnVsazJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwiYnVsazNcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJUZWNobm9sb2d5XCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW4yfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJSZXN1bHRzXCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLmNsb3N1cmV9PlxuXG4gICAgICAgICAgICAgICAgey8qIFBob3RvcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b0xhbmRzY2FwZVwiLCBcIm1haW4xXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiUGxhY2VtZW50IFRleHRcIlxuICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0ubWFpbjF9PlxuICAgICAgICAgICAgICAgIHsvKiBObyBQaG90b3MgKi99XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJQbGFjZW1lbnQgVGV4dFwiXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS5tYWluMX0+XG4gICAgICAgICAgICAgICAgey8qIE5vIFBob3RvcyAqL31cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5pbnRybzEge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3RyYW5zZm9ybWF0aW9uL3NraW5ueTIuanBlZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbnRybzIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3RyYW5zZm9ybWF0aW9uL3NraW5ueTMuanBlZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbnRybzMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3RyYW5zZm9ybWF0aW9uL3NraW5ueTEuanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4xIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi9tYWluMS5wbmcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWFpbjIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3RyYW5zZm9ybWF0aW9uL21haW4yLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L3JlYWN0LkZyYWdtZW50ID5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1UcmFuc2Zvcm07Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitnessItems/ItemTransform.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemTransform);

/***/ })

})
//# sourceMappingURL=fitness.js.2bd9078bdc3cb3c83460.hot-update.js.map