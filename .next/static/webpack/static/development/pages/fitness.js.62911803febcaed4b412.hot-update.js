webpackHotUpdate("static/development/pages/fitness.js",{

/***/ "./components/fitnessItems/ItemRace.js":
/*!*********************************************!*\
  !*** ./components/fitnessItems/ItemRace.js ***!
  \*********************************************/
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


 //React Reveal Animation



var ItemRace = function ItemRace(props) {
  var item = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: item.title,
    time: item.time,
    text: item.intro
  }, __jsx("div", {
    className: "jsx-2853244614" + " " + "row"
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px"
  }, __jsx("div", {
    className: "jsx-2853244614" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "intro1") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 200
  }, __jsx("div", {
    className: "jsx-2853244614" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro2") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 400
  }, __jsx("div", {
    className: "jsx-2853244614" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro3") || "")
  })))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "The Viper Challenge 2018 (5KM Dry)",
    text: item.main1
  }, __jsx("div", {
    className: "jsx-2853244614" + " " + "row"
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px"
  }, __jsx("div", {
    className: "jsx-2853244614" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "viper1") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 200
  }, __jsx("div", {
    className: "jsx-2853244614" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "viper2") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 400
  }, __jsx("div", {
    className: "jsx-2853244614" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "viper3") || "")
  }))), __jsx("div", {
    className: "jsx-2853244614" + " " + "row"
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px"
  }, __jsx("div", {
    className: "jsx-2853244614" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "viper4") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 200
  }, __jsx("div", {
    className: "jsx-2853244614" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "viper5") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 400
  }, __jsx("div", {
    className: "jsx-2853244614" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "viper6") || "")
  })))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "CIMB Bank Color Run 2017 (5KM)",
    text: item.main2
  }, __jsx("div", {
    className: "jsx-2853244614" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2853244614" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "color1") || "")
  }), __jsx("div", {
    className: "jsx-2853244614" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "color2") || "")
  }), __jsx("div", {
    className: "jsx-2853244614" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "color3") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Results",
    text: item.closure
  }, __jsx("div", {
    className: "jsx-2853244614" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2853244614" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "main1") || "")
  }), __jsx("div", {
    className: "jsx-2853244614" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || "")
  }), __jsx("div", {
    className: "jsx-2853244614" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Placement Text",
    text: item.main1
  }), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Placement Text",
    text: item.main1
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2853244614"
  }, ".intro1.jsx-2853244614{background-image:url('/static/images/fitness/achievements/races/first.jpg');}.intro2.jsx-2853244614{background-image:url('/static/images/fitness/achievements/races/finish2.jpg');}.intro3.jsx-2853244614{background-image:url('/static/images/fitness/achievements/races/finish3.jpg');}.viper1.jsx-2853244614{background-image:url('/static/images/fitness/achievements/races/viper1.jpg');}.viper2.jsx-2853244614{background-image:url('/static/images/fitness/achievements/races/viper2.jpg');}.viper3.jsx-2853244614{background-image:url('/static/images/fitness/achievements/races/viper3.jpg');}.viper4.jsx-2853244614{background-image:url('/static/images/fitness/achievements/races/viper6.jpg');}.viper5.jsx-2853244614{background-image:url('/static/images/fitness/achievements/races/viper4.jpg');}.viper6.jsx-2853244614{background-image:url('/static/images/fitness/achievements/races/viper5.jpg');}.color1.jsx-2853244614{background-image:url('/static/images/fitness/achievements/races/color1.jpg');}.color2.jsx-2853244614{background-image:url('/static/images/fitness/achievements/races/color2.jpg');}.color3.jsx-2853244614{background-image:url('/static/images/fitness/achievements/races/color3.jpg');}.main1.jsx-2853244614{background-image:url('/static/images/fitness/achievements/races/main1.png');}.main2.jsx-2853244614{background-image:url('/static/images/fitness/achievements/races/main2.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9maXRuZXNzSXRlbXMvSXRlbVJhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEZ3QixBQUdpRyxBQUlFLEFBSUEsQUFJRCxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJRCxBQUlBLDRFQW5EaEYsQUFnREEsQUFJQSxDQXhDQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQ0F4Q0EsQUFJQSIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvZml0bmVzc0l0ZW1zL0l0ZW1SYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vL2ltcG9ydCBsYXlvdXRcbmltcG9ydCBDb250ZW50RnJhZ21lbnQgZnJvbSAnLi4vbGF5b3V0cy9Db250ZW50RnJhZ21lbnQnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcblxuLy9SZWFjdCBSZXZlYWwgQW5pbWF0aW9uXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5cbmNvbnN0IEl0ZW1SYWNlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHByb3BzLmRhdGFcbiAgICByZXR1cm4gKFxuICAgICAgICA8cmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIHRpbWU9e2l0ZW0udGltZX0gdGV4dD17aXRlbS5pbnRyb30+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b0xhbmRzY2FwZVwiLCBcImludHJvMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4JyBkZWxheT17MjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJpbnRybzJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCcgZGVsYXk9ezQwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwiaW50cm8zXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJUaGUgVmlwZXIgQ2hhbGxlbmdlIDIwMTggKDVLTSBEcnkpXCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW4xfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJ2aXBlcjFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4JyBkZWxheT17MjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJ2aXBlcjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4JyBkZWxheT17NDAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvTGFuZHNjYXBlXCIsIFwidmlwZXIzXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b0xhbmRzY2FwZVwiLCBcInZpcGVyNFwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cblxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnIGRlbGF5PXsyMDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcInZpcGVyNVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cblxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnIGRlbGF5PXs0MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcInZpcGVyNlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiQ0lNQiBCYW5rIENvbG9yIFJ1biAyMDE3ICg1S00pXCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW4yfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcImNvbG9yMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvTGFuZHNjYXBlXCIsIFwiY29sb3IyXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcImNvbG9yM1wiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIlJlc3VsdHNcIlxuICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0uY2xvc3VyZX0+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvTGFuZHNjYXBlXCIsIFwibWFpbjFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJQbGFjZW1lbnQgVGV4dFwiXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS5tYWluMX0+XG4gICAgICAgICAgICAgICAgey8qIE5vIFBob3RvcyAqL31cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIlBsYWNlbWVudCBUZXh0XCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW4xfT5cbiAgICAgICAgICAgICAgICB7LyogTm8gUGhvdG9zICovfVxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmludHJvMSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvcmFjZXMvZmlyc3QuanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmludHJvMiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvcmFjZXMvZmluaXNoMi5qcGcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW50cm8zIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy9yYWNlcy9maW5pc2gzLmpwZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC52aXBlcjEge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3JhY2VzL3ZpcGVyMS5qcGcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudmlwZXIyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy9yYWNlcy92aXBlcjIuanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnZpcGVyMyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvcmFjZXMvdmlwZXIzLmpwZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC52aXBlcjQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3JhY2VzL3ZpcGVyNi5qcGcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudmlwZXI1IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy9yYWNlcy92aXBlcjQuanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnZpcGVyNiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvcmFjZXMvdmlwZXI1LmpwZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb2xvcjEge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3JhY2VzL2NvbG9yMS5qcGcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29sb3IyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy9yYWNlcy9jb2xvcjIuanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbG9yMyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvcmFjZXMvY29sb3IzLmpwZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tYWluMSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvcmFjZXMvbWFpbjEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy9yYWNlcy9tYWluMi5wbmcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9yZWFjdC5GcmFnbWVudCA+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtUmFjZTsiXX0= */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitnessItems/ItemRace.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemRace);

/***/ })

})
//# sourceMappingURL=fitness.js.62911803febcaed4b412.hot-update.js.map