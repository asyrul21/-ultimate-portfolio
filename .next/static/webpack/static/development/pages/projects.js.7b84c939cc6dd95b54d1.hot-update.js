webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layouts_ContentLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layouts/ContentLayout */ "./components/layouts/ContentLayout.js");
/* harmony import */ var _components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layouts/ContentContainer */ "./components/layouts/ContentContainer.js");
/* harmony import */ var _components_shared_ContentHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/shared/ContentHead */ "./components/shared/ContentHead.js");
/* harmony import */ var _components_shared_Tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/shared/Tabs */ "./components/shared/Tabs.js");
/* harmony import */ var _components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/shared/InnerTabs */ "./components/shared/InnerTabs.js");
/* harmony import */ var _components_shared_projects_Project__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/shared/projects/Project */ "./components/shared/projects/Project.js");
/* harmony import */ var _public_static_data_projects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../public/static/data/projects */ "./public/static/data/projects.json");
var _public_static_data_projects__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/static/data/projects */ "./public/static/data/projects.json", 1);
/* harmony import */ var _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../public/static/data/contentHeads.json */ "./public/static/data/contentHeads.json");
var _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/static/data/contentHeads.json */ "./public/static/data/contentHeads.json", 1);
/* harmony import */ var _styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles/projects.module.scss */ "./pages/styles/projects.module.scss");
/* harmony import */ var _styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_18__);






var _jsxFileName = "/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/pages/projects.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


 // import layouts


 //import components




 //import data

 //import data

 //global styles can be found at ../styles/main.scss
//import specific styling module

 //React Reveal Animation



var Projects = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Projects, _React$Component);

  function Projects() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Projects);

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Projects).call(this));
    _this.state = {
      activeTab: '',
      activeProject: ''
    };
    _this.prevActiveTab = '';
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Projects, [{
    key: "handleChange",
    value: function handleChange(active) {
      this.prevActiveTab = this.state.activeTab;
      this.setState({
        activeTab: active,
        activeProject: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // console.log(this.state)
      return __jsx(_components_layouts_ContentLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('fallback', aboutStyles.herofallback),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('hero', aboutStyles.projectsHero),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })), __jsx(_components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_18___default.a, {
        delay: 200,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(_components_shared_ContentHead__WEBPACK_IMPORTED_MODULE_11__["default"], {
        data: _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_16__.projects,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_18___default.a, {
        delay: 300,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(_components_shared_Tabs__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onChange: this.handleChange,
        active: this.state.activeTab,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx("span", {
        key: "Academic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Academic"), __jsx("span", {
        key: "Professional",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Professional"), __jsx("span", {
        key: "Personal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Personal"))), this.state.activeTab === 'Academic' && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_18___default.a, {
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx(_components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onChange: function onChange(active) {
          _this2.setState({
            activeProject: active
          });
        },
        active: this.state.activeProject,
        data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_15__.slugs.Academic,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), this.state.activeTab === 'Professional' && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_18___default.a, {
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(_components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onChange: function onChange(active) {
          _this2.setState({
            activeProject: active
          });
        },
        active: this.state.activeProject,
        data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_15__.slugs.Professional,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      })), this.state.activeTab === 'Personal' && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_18___default.a, {
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx(_components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onChange: function onChange(active) {
          _this2.setState({
            activeProject: active
          });
        },
        active: this.state.activeProject,
        data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_15__.slugs.Personal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })), this.state.activeProject !== '' && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_18___default.a, {
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx(_components_shared_projects_Project__WEBPACK_IMPORTED_MODULE_14__["default"], {
        id: this.state.activeProject,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })))));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Projects); // <Fade right=
//     {
//         this.prevActiveTab === 'Professional' ? true :
//             this.prevActiveTab === 'Personal' ? true : false
//     }
//     duration={500}>
// <Fade right=
//     {
//         this.prevActiveTab === 'Personal' ? true : false
//     }
//     left=
//     {
//         this.prevActiveTab === 'Academic' ? true : false
//     }
//     duration={500}>

/***/ })

})
//# sourceMappingURL=projects.js.7b84c939cc6dd95b54d1.hot-update.js.map