webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/Link */ "./node_modules/next/Link.js");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layouts_ContentLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layouts/ContentLayout */ "./components/layouts/ContentLayout.js");
/* harmony import */ var _components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layouts/ContentContainer */ "./components/layouts/ContentContainer.js");
/* harmony import */ var _components_shared_ContentHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/shared/ContentHead */ "./components/shared/ContentHead.js");
/* harmony import */ var _components_shared_Tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/shared/Tabs */ "./components/shared/Tabs.js");
/* harmony import */ var _components_shared_ProjectsTabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/shared/ProjectsTabs */ "./components/shared/ProjectsTabs.js");
/* harmony import */ var _public_static_data_projects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../public/static/data/projects */ "./public/static/data/projects.json");
var _public_static_data_projects__WEBPACK_IMPORTED_MODULE_14___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/static/data/projects */ "./public/static/data/projects.json", 1);
/* harmony import */ var _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../public/static/data/contentHeads.json */ "./public/static/data/contentHeads.json");
var _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/static/data/contentHeads.json */ "./public/static/data/contentHeads.json", 1);
/* harmony import */ var _styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles/projects.module.scss */ "./pages/styles/projects.module.scss");
/* harmony import */ var _styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_17__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;


 // import layouts


 //import components



 //import data

 //import data

 //global styles can be found at ../styles/main.scss
//import specific styling module

 //React Reveal Animation



var Projects =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Projects, _React$Component);

  function Projects() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Projects);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Projects).call(this));
    _this.state = {
      activeTab: '',
      activeProject: ''
    };
    _this.prevActiveTab = '';
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Projects, [{
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
      return __jsx(_components_layouts_ContentLayout__WEBPACK_IMPORTED_MODULE_9__["default"], null, __jsx("section", null, __jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()('hero', _styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.projectsHero)
      }), __jsx(_components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_17___default.a, {
        delay: 200
      }, __jsx(_components_shared_ContentHead__WEBPACK_IMPORTED_MODULE_11__["default"], {
        data: _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_15__.projects
      })), __jsx(_components_shared_Tabs__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onChange: this.handleChange,
        active: this.state.activeTab
      }, __jsx("span", {
        key: "Academic"
      }, "Academic"), __jsx("span", {
        key: "Professional"
      }, "Professional"), __jsx("span", {
        key: "Personal"
      }, "Personal")), this.state.activeTab === 'Academic' && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_17___default.a, {
        right: this.prevActiveTab === 'Professional' ? true : this.prevActiveTab === 'Personal' ? true : false,
        duration: 500
      }, __jsx(_components_shared_ProjectsTabs__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onChange: function onChange(active) {
          _this2.setState({
            activeProject: active
          });
        },
        active: this.state.activeProject,
        data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_14__.slugs.Academic
      })), this.state.activeTab === 'Professional' && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_17___default.a, {
        right: this.prevActiveTab === 'Personal' ? true : false,
        left: this.prevActiveTab === 'Academic' ? true : false,
        duration: 500
      }, __jsx(_components_shared_ProjectsTabs__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onChange: function onChange(active) {
          _this2.setState({
            activeProject: active
          });
        },
        active: this.state.activeProject,
        data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_14__.slugs.Professional
      })), this.state.activeTab === 'Personal' && // <Fade left=
      //     {
      //         this.prevActiveTab === 'Academic' ? true :
      //             this.prevActiveTab === 'Professional' ? true : false
      //     }
      //     duration={500}>
      __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_17___default.a, {
        bottom: true,
        duration: 500
      }, __jsx(_components_shared_ProjectsTabs__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onChange: function onChange(active) {
          _this2.setState({
            activeProject: active
          });
        },
        active: this.state.activeProject,
        data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_14__.slugs.Personal
      })))));
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=projects.js.770505ad6ee67d426e3a.hot-update.js.map