webpackHotUpdate("static/development/pages/admin/login.js",{

/***/ "./pages/admin/login.js":
/*!******************************!*\
  !*** ./pages/admin/login.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layouts_ContentLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/layouts/ContentLayout */ "./components/layouts/ContentLayout.js");
/* harmony import */ var _components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/layouts/ContentContainer */ "./components/layouts/ContentContainer.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_about_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/about.module.scss */ "./pages/styles/about.module.scss");
/* harmony import */ var _styles_about_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_about_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _login_module_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login.module.scss */ "./pages/admin/login.module.scss");
/* harmony import */ var _login_module_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_login_module_scss__WEBPACK_IMPORTED_MODULE_15__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




 // import layouts


 //React Reveal Animation

 //global styles can be found at ../styles/main.scss
//import specific styling module




var Login = /*#__PURE__*/function (_react$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Login, _react$Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Login);

    _this = _super.call(this, props);
    _this.state = {
      invalidLogin: false,
      admin: '',
      loggedIn: false,
      id: '',
      pw: ''
    };
    _this.handleIDChange = _this.handleIDChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handlePWChange = _this.handlePWChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleSubmit = _this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.getContents = _this.getContents.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.handleLogout = _this.handleLogout.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Login, [{
    key: "getContents",
    value: function getContents() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getContents$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('https://ultimate-express.herokuapp.com/content/'));

            case 2:
              res = _context.sent;

              if (!res) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return", res.data);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "handleIDChange",
    value: function handleIDChange(event) {
      if (event) this.setState({
        id: event.target.value
      });
    }
  }, {
    key: "handlePWChange",
    value: function handlePWChange(event) {
      if (event) this.setState({
        pw: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this2 = this;

      var details, loginResult;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              console.log('ID submitted: ' + this.state.id);
              console.log('PW submitted: ' + this.state.pw);
              details = {
                name: this.state.id,
                password: this.state.id
              };
              _context2.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('https://ultimate-express.herokuapp.com/login/', details)["catch"](function (error) {
                console.log('Error occured:', error);
                console.log('hellooooo:');
                return _this2.setState({
                  invalidLogin: true
                });
              }));

            case 6:
              loginResult = _context2.sent;

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      var res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleLogout$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('https://ultimate-express.herokuapp.com/logout/'));

            case 2:
              res = _context3.sent;
              return _context3.abrupt("return", res.data);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      console.log('Content:', this.props.content);
      return __jsx(_components_layouts_ContentLayout__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx("section", null, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_13___default.a, null, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('fallback', _styles_about_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.herofallback)
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('hero', _styles_about_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.aboutHero)
      })))), this.state.loggedIn && __jsx("p", {
        className: _login_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.sessionText
      }, "Logged in as ", this.state.admin, ". ", __jsx("a", {
        onClick: this.handleLogout
      }, "Logout")), __jsx("section", null, __jsx(_components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_12__["default"], null, __jsx("h2", null, "Admin Login"), this.state.invalidLogin && __jsx("p", {
        className: _login_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.loginError
      }, "Login Failed."), __jsx("form", {
        onSubmit: this.handleSubmit,
        className: _login_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.form
      }, __jsx("input", {
        type: "text",
        value: this.state.id,
        onChange: this.handleIDChange,
        placeholder: "ID",
        className: _login_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.input
      }), __jsx("input", {
        type: "text",
        value: this.state.pw,
        onChange: this.handlePWChange,
        placeholder: "Password",
        className: _login_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.input
      }), __jsx("input", {
        type: "submit",
        value: "Submit",
        className: _login_module_scss__WEBPACK_IMPORTED_MODULE_15___default.a.submitButton
      })))));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.71e16f1d7453ef04e70b.hot-update.js.map