webpackHotUpdate("static/development/pages/admin/login.js",{

/***/ "./components/admin/ContentsList.js":
/*!******************************************!*\
  !*** ./components/admin/ContentsList.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContentsList.module.scss */ "./components/admin/ContentsList.module.scss");
/* harmony import */ var _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_6__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var ContentsList = /*#__PURE__*/function (_react$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ContentsList, _react$Component);

  var _super = _createSuper(ContentsList);

  function ContentsList(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ContentsList);

    _this = _super.call(this, props);
    _this.state = {
      addNewMode: false,
      editMode: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ContentsList, [{
    key: "render",
    value: function render() {
      console.log(this.props.data);
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
        className: _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.addButton
      }, "Add New Content"), __jsx("div", {
        className: _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container
      }, this.props.data.map(function (item, idx) {
        return __jsx("div", {
          key: idx,
          className: _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.list
        }, __jsx("p", {
          className: _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.text
        }, item.key), __jsx("p", {
          className: _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.text
        }, item.title), __jsx("p", {
          className: _ContentsList_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.text
        }, item.category));
      })));
    }
  }]);

  return ContentsList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ContentsList);

/***/ })

})
//# sourceMappingURL=login.js.378f297dfc4c232a907d.hot-update.js.map