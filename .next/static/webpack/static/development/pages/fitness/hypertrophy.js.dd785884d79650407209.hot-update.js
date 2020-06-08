webpackHotUpdate("static/development/pages/fitness/hypertrophy.js",{

/***/ "./pages/fitness/hypertrophy.js":
/*!**************************************!*\
  !*** ./pages/fitness/hypertrophy.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layouts_FitnessLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layouts/FitnessLayout */ "./components/layouts/FitnessLayout.js");
/* harmony import */ var _components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layouts/ContentContainer */ "./components/layouts/ContentContainer.js");
/* harmony import */ var _components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/layouts/ContentFragment */ "./components/layouts/ContentFragment.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/static/data/FitnessItems/hypertrophy */ "./public/static/data/FitnessItems/hypertrophy.json");
var _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/data/FitnessItems/hypertrophy */ "./public/static/data/FitnessItems/hypertrophy.json", 1);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 //import layout




 //import data




var Hypertrophy = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Hypertrophy, _React$Component);

  var _super = _createSuper(Hypertrophy);

  function Hypertrophy() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Hypertrophy);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Hypertrophy, [{
    key: "render",
    value: function render() {
      var headerData = _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11__.header;
      var keyIdeaData = _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11__.keyidea;
      var upperlowerData = _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11__.upperlower;
      var pushpullData = _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11__.pushpull;
      var brosplitData = _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11__.brosplit;
      return __jsx(_components_layouts_FitnessLayout__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx(_components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        breadcrumbs: ['Fitness', 'Hypertrophy']
      }, __jsx(_components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: headerData.title,
        text: headerData.text
      }), __jsx(_components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: keyIdeaData.title,
        text: keyIdeaData.text
      }), __jsx(_components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_9__["default"], {
        title: upperlowerData.title,
        text: upperlowerData.text,
        link: upperlowerData.link,
        linkText: "Read More Here"
      }, __jsx("div", {
        className: "jsx-1750566886" + " " + "row"
      }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
        bottom: true,
        distance: "20px"
      }), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
        bottom: true,
        distance: "20px",
        delay: 200
      }), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
        bottom: true,
        distance: "20px",
        delay: 400
      })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1750566886"
      }, ".intro1.jsx-1750566886{background-image:url('/static/images/fitness/achievements/transformation/skinny2.jpeg');}.intro2.jsx-1750566886{background-image:url('/static/images/fitness/achievements/transformation/skinny3.jpeg');}.intro3.jsx-1750566886{background-image:url('/static/images/fitness/achievements/transformation/skinny1.jpg');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvcGFnZXMvZml0bmVzcy9oeXBlcnRyb3BoeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RDRCLEFBRzZHLEFBSUEsQUFJRCx1RkFDM0YsQ0FSQSxBQUlBIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvcGFnZXMvZml0bmVzcy9oeXBlcnRyb3BoeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLy9pbXBvcnQgbGF5b3V0XG5pbXBvcnQgRml0bmVzc0xheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dHMvRml0bmVzc0xheW91dCdcbmltcG9ydCBDb250ZW50Q29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9Db250ZW50Q29udGFpbmVyJ1xuaW1wb3J0IENvbnRlbnRGcmFnbWVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dHMvQ29udGVudEZyYWdtZW50J1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5cbi8vaW1wb3J0IGRhdGFcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL3B1YmxpYy9zdGF0aWMvZGF0YS9GaXRuZXNzSXRlbXMvaHlwZXJ0cm9waHknXG5cbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuXG5jbGFzcyBIeXBlcnRyb3BoeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlckRhdGEgPSBkYXRhLmhlYWRlcjtcbiAgICAgICAgY29uc3Qga2V5SWRlYURhdGEgPSBkYXRhLmtleWlkZWE7XG4gICAgICAgIGNvbnN0IHVwcGVybG93ZXJEYXRhID0gZGF0YS51cHBlcmxvd2VyO1xuICAgICAgICBjb25zdCBwdXNocHVsbERhdGEgPSBkYXRhLnB1c2hwdWxsO1xuICAgICAgICBjb25zdCBicm9zcGxpdERhdGEgPSBkYXRhLmJyb3NwbGl0O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZpdG5lc3NMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPENvbnRlbnRDb250YWluZXIgYnJlYWRjcnVtYnM9e1snRml0bmVzcycsICdIeXBlcnRyb3BoeSddfSA+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBJbnNlcnQgRnJhZ21lbnRzIGhlcmUgKi99XG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgdGl0bGU9e2hlYWRlckRhdGEudGl0bGV9IHRleHQ9e2hlYWRlckRhdGEudGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyogbm8gcGhvdG9zICovfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCB0aXRsZT17a2V5SWRlYURhdGEudGl0bGV9IHRleHQ9e2tleUlkZWFEYXRhLnRleHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIG5vIHBob3RvcyAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIFRoZSB1cHBlciBsb3dlciBzcGxpdCAqL31cbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3VwcGVybG93ZXJEYXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17dXBwZXJsb3dlckRhdGEudGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9e3VwcGVybG93ZXJEYXRhLmxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dD1cIlJlYWQgTW9yZSBIZXJlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFdvcmtvdXRDb250YWluZXIgdGl0bGU9XCJcIiBub3Rlcz1cIlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvV29ya291dENvbnRhaW5lcj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCcgZGVsYXk9ezIwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8V29ya291dENvbnRhaW5lciB0aXRsZT1cIlwiIG5vdGVzPVwiXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Xb3Jrb3V0Q29udGFpbmVyPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4JyBkZWxheT17NDAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxXb3Jrb3V0Q29udGFpbmVyIHRpdGxlPVwiXCIgbm90ZXM9XCJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1dvcmtvdXRDb250YWluZXI+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgICAgIDwvQ29udGVudENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmludHJvMSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvdHJhbnNmb3JtYXRpb24vc2tpbm55Mi5qcGVnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmludHJvMiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvdHJhbnNmb3JtYXRpb24vc2tpbm55My5qcGVnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmludHJvMyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvdHJhbnNmb3JtYXRpb24vc2tpbm55MS5qcGcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9GaXRuZXNzTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIeXBlcnRyb3BoeSJdfQ== */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/pages/fitness/hypertrophy.js */"));
    }
  }]);

  return Hypertrophy;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Hypertrophy);

/***/ })

})
//# sourceMappingURL=hypertrophy.js.dd785884d79650407209.hot-update.js.map