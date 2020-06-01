module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/fitnessItems/ItemDietGeneral.js":
/*!****************************************************!*\
  !*** ./components/fitnessItems/ItemDietGeneral.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/ContentFragment */ "./components/layouts/ContentFragment.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitnessItems/ItemDietGeneral.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout


 //import style
// import rpiStyles from './rpi.module.scss'

const ItemDietGeneral = props => {
  const item = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: item.title,
    time: item.time,
    text: item.intro,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "intro2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Main Development",
    text: item.main1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Technology",
    text: item.main2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Results",
    text: item.closure,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "main1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Placement Text",
    text: item.main1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Placement Text",
    text: item.main1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2274546476",
    __self: undefined
  }, ".intro1.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/intro1.png');}.intro2.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/intro2.png');}.main1.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/main1.png');}.main2.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/main2.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9maXRuZXNzSXRlbXMvSXRlbURpZXRHZW5lcmFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFd0IsQUFHMkcsQUFJQSxBQUlELEFBSUEscUZBSHpGLEFBSUEsQ0FaQSxBQUlBIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9maXRuZXNzSXRlbXMvSXRlbURpZXRHZW5lcmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vL2ltcG9ydCBsYXlvdXRcbmltcG9ydCBDb250ZW50RnJhZ21lbnQgZnJvbSAnLi4vbGF5b3V0cy9Db250ZW50RnJhZ21lbnQnXG5cbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuXG4vL2ltcG9ydCBzdHlsZVxuLy8gaW1wb3J0IHJwaVN0eWxlcyBmcm9tICcuL3JwaS5tb2R1bGUuc2NzcydcblxuY29uc3QgSXRlbURpZXRHZW5lcmFsID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHByb3BzLmRhdGFcbiAgICByZXR1cm4gKFxuICAgICAgICA8cmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIHRpbWU9e2l0ZW0udGltZX0gdGV4dD17aXRlbS5pbnRyb30+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJpbnRybzFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwiaW50cm8xXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9MYW5kc2NhcGVcIiwgXCJpbnRybzJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJNYWluIERldmVsb3BtZW50XCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW4xfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiVGVjaG5vbG9neVwiXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS5tYWluMn0+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiUmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS5jbG9zdXJlfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9MYW5kc2NhcGVcIiwgXCJtYWluMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIlBsYWNlbWVudCBUZXh0XCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW4xfT5cbiAgICAgICAgICAgICAgICB7LyogTm8gUGhvdG9zICovfVxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiUGxhY2VtZW50IFRleHRcIlxuICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0ubWFpbjF9PlxuICAgICAgICAgICAgICAgIHsvKiBObyBQaG90b3MgKi99XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW50cm8xIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi9pbnRybzEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmludHJvMiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvdHJhbnNmb3JtYXRpb24vaW50cm8yLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tYWluMSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvdHJhbnNmb3JtYXRpb24vbWFpbjEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi9tYWluMi5wbmcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9yZWFjdC5GcmFnbWVudCA+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtRGlldEdlbmVyYWw7Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitnessItems/ItemDietGeneral.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemDietGeneral);

/***/ }),

/***/ "./components/fitnessItems/ItemDietIIFYM.js":
/*!**************************************************!*\
  !*** ./components/fitnessItems/ItemDietIIFYM.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/ContentFragment */ "./components/layouts/ContentFragment.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitnessItems/ItemDietIIFYM.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout




const ItemDietIIFYM = props => {
  const item = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: item.title,
    time: item.time,
    text: item.intro,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "intro2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Main Development",
    text: item.main1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Technology",
    text: item.main2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Results",
    text: item.closure,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "main1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Placement Text",
    text: item.main1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Placement Text",
    text: item.main1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2274546476",
    __self: undefined
  }, ".intro1.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/intro1.png');}.intro2.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/intro2.png');}.main1.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/main1.png');}.main2.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/main2.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9maXRuZXNzSXRlbXMvSXRlbURpZXRJSUZZTS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RXdCLEFBRzJHLEFBSUEsQUFJRCxBQUlBLHFGQUh6RixBQUlBLENBWkEsQUFJQSIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvZml0bmVzc0l0ZW1zL0l0ZW1EaWV0SUlGWU0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vaW1wb3J0IGxheW91dFxuaW1wb3J0IENvbnRlbnRGcmFnbWVudCBmcm9tICcuLi9sYXlvdXRzL0NvbnRlbnRGcmFnbWVudCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuXG5cbmNvbnN0IEl0ZW1EaWV0SUlGWU0gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBpdGVtID0gcHJvcHMuZGF0YVxuICAgIHJldHVybiAoXG4gICAgICAgIDxyZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgdGltZT17aXRlbS50aW1lfSB0ZXh0PXtpdGVtLmludHJvfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcImludHJvMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJpbnRybzFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b0xhbmRzY2FwZVwiLCBcImludHJvMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIk1haW4gRGV2ZWxvcG1lbnRcIlxuICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0ubWFpbjF9PlxuXG4gICAgICAgICAgICAgICAgey8qIFBob3RvcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJUZWNobm9sb2d5XCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW4yfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJSZXN1bHRzXCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLmNsb3N1cmV9PlxuXG4gICAgICAgICAgICAgICAgey8qIFBob3RvcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b0xhbmRzY2FwZVwiLCBcIm1haW4xXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiUGxhY2VtZW50IFRleHRcIlxuICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0ubWFpbjF9PlxuICAgICAgICAgICAgICAgIHsvKiBObyBQaG90b3MgKi99XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJQbGFjZW1lbnQgVGV4dFwiXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS5tYWluMX0+XG4gICAgICAgICAgICAgICAgey8qIE5vIFBob3RvcyAqL31cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5pbnRybzEge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3RyYW5zZm9ybWF0aW9uL2ludHJvMS5wbmcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW50cm8yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi9pbnRybzIucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4xIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi9tYWluMS5wbmcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWFpbjIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3RyYW5zZm9ybWF0aW9uL21haW4yLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L3JlYWN0LkZyYWdtZW50ID5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1EaWV0SUlGWU07Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitnessItems/ItemDietIIFYM.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemDietIIFYM);

/***/ }),

/***/ "./components/fitnessItems/ItemFatloss.js":
/*!************************************************!*\
  !*** ./components/fitnessItems/ItemFatloss.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/ContentFragment */ "./components/layouts/ContentFragment.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitnessItems/ItemFatloss.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout




const ItemFatloss = props => {
  const item = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: item.title,
    time: item.time,
    text: item.intro,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "intro2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Main Development",
    text: item.main1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Technology",
    text: item.main2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Results",
    text: item.closure,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "main1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Placement Text",
    text: item.main1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Placement Text",
    text: item.main1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2274546476",
    __self: undefined
  }, ".intro1.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/intro1.png');}.intro2.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/intro2.png');}.main1.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/main1.png');}.main2.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/main2.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9maXRuZXNzSXRlbXMvSXRlbUZhdGxvc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0V3QixBQUcyRyxBQUlBLEFBSUQsQUFJQSxxRkFIekYsQUFJQSxDQVpBLEFBSUEiLCJmaWxlIjoiL1VzZXJzL2FzeXJ1bGhhZmV0enkvRG9jdW1lbnRzL0NTRGV2ZWxvcG1lbnQvV2ViL215VWx0aW1hdGVQb3J0Zm9saW8vdWx0aW1hdGVwb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL2ZpdG5lc3NJdGVtcy9JdGVtRmF0bG9zcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCdcblxuLy9pbXBvcnQgbGF5b3V0XG5pbXBvcnQgQ29udGVudEZyYWdtZW50IGZyb20gJy4uL2xheW91dHMvQ29udGVudEZyYWdtZW50J1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5cbmNvbnN0IEl0ZW1GYXRsb3NzID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHByb3BzLmRhdGFcbiAgICByZXR1cm4gKFxuICAgICAgICA8cmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIHRpbWU9e2l0ZW0udGltZX0gdGV4dD17aXRlbS5pbnRyb30+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJpbnRybzFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwiaW50cm8xXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9MYW5kc2NhcGVcIiwgXCJpbnRybzJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJNYWluIERldmVsb3BtZW50XCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW4xfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiVGVjaG5vbG9neVwiXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS5tYWluMn0+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiUmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS5jbG9zdXJlfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9MYW5kc2NhcGVcIiwgXCJtYWluMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIlBsYWNlbWVudCBUZXh0XCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW4xfT5cbiAgICAgICAgICAgICAgICB7LyogTm8gUGhvdG9zICovfVxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiUGxhY2VtZW50IFRleHRcIlxuICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0ubWFpbjF9PlxuICAgICAgICAgICAgICAgIHsvKiBObyBQaG90b3MgKi99XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW50cm8xIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi9pbnRybzEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmludHJvMiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvdHJhbnNmb3JtYXRpb24vaW50cm8yLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tYWluMSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvdHJhbnNmb3JtYXRpb24vbWFpbjEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi9tYWluMi5wbmcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9yZWFjdC5GcmFnbWVudCA+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtRmF0bG9zczsiXX0= */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitnessItems/ItemFatloss.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemFatloss);

/***/ }),

/***/ "./components/fitnessItems/ItemHypertrophy.js":
/*!****************************************************!*\
  !*** ./components/fitnessItems/ItemHypertrophy.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/ContentFragment */ "./components/layouts/ContentFragment.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitnessItems/ItemHypertrophy.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout




const ItemHypertrophy = props => {
  const item = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: item.title,
    time: item.time,
    text: item.intro,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "intro2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Main Development",
    text: item.main1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Technology",
    text: item.main2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Results",
    text: item.closure,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "main1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Placement Text",
    text: item.main1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Placement Text",
    text: item.main1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2274546476",
    __self: undefined
  }, ".intro1.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/intro1.png');}.intro2.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/intro2.png');}.main1.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/main1.png');}.main2.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/main2.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9maXRuZXNzSXRlbXMvSXRlbUh5cGVydHJvcGh5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFd0IsQUFHMkcsQUFJQSxBQUlELEFBSUEscUZBSHpGLEFBSUEsQ0FaQSxBQUlBIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9maXRuZXNzSXRlbXMvSXRlbUh5cGVydHJvcGh5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vL2ltcG9ydCBsYXlvdXRcbmltcG9ydCBDb250ZW50RnJhZ21lbnQgZnJvbSAnLi4vbGF5b3V0cy9Db250ZW50RnJhZ21lbnQnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcblxuY29uc3QgSXRlbUh5cGVydHJvcGh5ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHByb3BzLmRhdGFcbiAgICByZXR1cm4gKFxuICAgICAgICA8cmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIHRpbWU9e2l0ZW0udGltZX0gdGV4dD17aXRlbS5pbnRyb30+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJpbnRybzFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwiaW50cm8xXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9MYW5kc2NhcGVcIiwgXCJpbnRybzJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJNYWluIERldmVsb3BtZW50XCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW4xfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiVGVjaG5vbG9neVwiXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS5tYWluMn0+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiUmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS5jbG9zdXJlfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9MYW5kc2NhcGVcIiwgXCJtYWluMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIlBsYWNlbWVudCBUZXh0XCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW4xfT5cbiAgICAgICAgICAgICAgICB7LyogTm8gUGhvdG9zICovfVxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiUGxhY2VtZW50IFRleHRcIlxuICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0ubWFpbjF9PlxuICAgICAgICAgICAgICAgIHsvKiBObyBQaG90b3MgKi99XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW50cm8xIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi9pbnRybzEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmludHJvMiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvdHJhbnNmb3JtYXRpb24vaW50cm8yLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tYWluMSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvdHJhbnNmb3JtYXRpb24vbWFpbjEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi9tYWluMi5wbmcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9yZWFjdC5GcmFnbWVudCA+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtSHlwZXJ0cm9waHk7Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitnessItems/ItemHypertrophy.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemHypertrophy);

/***/ }),

/***/ "./components/fitnessItems/ItemRace.js":
/*!*********************************************!*\
  !*** ./components/fitnessItems/ItemRace.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/ContentFragment */ "./components/layouts/ContentFragment.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout


 //React Reveal Animation



const ItemRace = props => {
  const item = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: item.title,
    time: item.time,
    text: item.intro
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + "row"
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px"
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "intro1") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 200
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro2") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 400
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro3") || "")
  })))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "The Viper Challenge 2018 (5KM Dry)",
    text: item.main1
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + "row"
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px"
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "viper1") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 200
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "viper2") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 400
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "viper3") || "")
  }))), __jsx("div", {
    className: "jsx-1918891875" + " " + "row"
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px"
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "viper4") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 200
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "viper5") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 400
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "viper6") || "")
  })))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "CIMB Bank Color Run 2017 (5KM)",
    text: item.main2
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + "row"
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px"
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "color1") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 200
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "color2") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 400
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "color3") || "")
  })))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Standard Charted Half Marathon 21KM 2016",
    text: item.main3
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + "row"
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px"
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "schkm1") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 200
  }, __jsx("div", {
    className: "jsx-1918891875" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "schkm2") || "")
  })))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Closure",
    text: item.closure
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1918891875"
  }, ".intro1.jsx-1918891875{background-image:url('/static/images/fitness/achievements/races/first.jpg');}.intro2.jsx-1918891875{background-image:url('/static/images/fitness/achievements/races/finish2.jpg');}.intro3.jsx-1918891875{background-image:url('/static/images/fitness/achievements/races/finish3.jpg');}.viper1.jsx-1918891875{background-image:url('/static/images/fitness/achievements/races/viper1.jpg');}.viper2.jsx-1918891875{background-image:url('/static/images/fitness/achievements/races/viper2.jpg');}.viper3.jsx-1918891875{background-image:url('/static/images/fitness/achievements/races/viper3.jpg');}.viper4.jsx-1918891875{background-image:url('/static/images/fitness/achievements/races/viper6.jpg');}.viper5.jsx-1918891875{background-image:url('/static/images/fitness/achievements/races/viper4.jpg');}.viper6.jsx-1918891875{background-image:url('/static/images/fitness/achievements/races/viper5.jpg');}.color1.jsx-1918891875{background-image:url('/static/images/fitness/achievements/races/color1.jpg');}.color2.jsx-1918891875{background-image:url('/static/images/fitness/achievements/races/color2.jpg');}.color3.jsx-1918891875{background-image:url('/static/images/fitness/achievements/races/color4.jpg');}.schkm1.jsx-1918891875{background-image:url('/static/images/fitness/achievements/races/schkm.jpg');}.schkm2.jsx-1918891875{background-image:url('/static/images/fitness/achievements/races/schkm1.jpg');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9maXRuZXNzSXRlbXMvSXRlbVJhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUd3QixBQUdpRyxBQUlFLEFBSUEsQUFJRCxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJRCxBQUlDLDRFQW5EakYsQUFnREEsQ0FwQ0EsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBUUEsQ0FoREEsQUFJQSIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvZml0bmVzc0l0ZW1zL0l0ZW1SYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vL2ltcG9ydCBsYXlvdXRcbmltcG9ydCBDb250ZW50RnJhZ21lbnQgZnJvbSAnLi4vbGF5b3V0cy9Db250ZW50RnJhZ21lbnQnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcblxuLy9SZWFjdCBSZXZlYWwgQW5pbWF0aW9uXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XG5cbmNvbnN0IEl0ZW1SYWNlID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHByb3BzLmRhdGFcbiAgICByZXR1cm4gKFxuICAgICAgICA8cmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIHRpbWU9e2l0ZW0udGltZX0gdGV4dD17aXRlbS5pbnRyb30+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b0xhbmRzY2FwZVwiLCBcImludHJvMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4JyBkZWxheT17MjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJpbnRybzJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCcgZGVsYXk9ezQwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwiaW50cm8zXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJUaGUgVmlwZXIgQ2hhbGxlbmdlIDIwMTggKDVLTSBEcnkpXCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW4xfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJ2aXBlcjFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4JyBkZWxheT17MjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJ2aXBlcjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4JyBkZWxheT17NDAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvTGFuZHNjYXBlXCIsIFwidmlwZXIzXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b0xhbmRzY2FwZVwiLCBcInZpcGVyNFwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cblxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnIGRlbGF5PXsyMDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcInZpcGVyNVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cblxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnIGRlbGF5PXs0MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcInZpcGVyNlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiQ0lNQiBCYW5rIENvbG9yIFJ1biAyMDE3ICg1S00pXCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW4yfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJjb2xvcjFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4JyBkZWxheT17MjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvTGFuZHNjYXBlXCIsIFwiY29sb3IyXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCcgZGVsYXk9ezQwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwiY29sb3IzXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIlN0YW5kYXJkIENoYXJ0ZWQgSGFsZiBNYXJhdGhvbiAyMUtNIDIwMTZcIlxuICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0ubWFpbjN9PlxuXG4gICAgICAgICAgICAgICAgey8qIFBob3RvcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9MYW5kc2NhcGVcIiwgXCJzY2hrbTFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4JyBkZWxheT17MjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvTGFuZHNjYXBlXCIsIFwic2Noa20yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJDbG9zdXJlXCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLmNsb3N1cmV9PlxuICAgICAgICAgICAgICAgIHsvKiBObyBQaG90b3MgKi99XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW50cm8xIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy9yYWNlcy9maXJzdC5qcGcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaW50cm8yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy9yYWNlcy9maW5pc2gyLmpwZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbnRybzMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3JhY2VzL2ZpbmlzaDMuanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnZpcGVyMSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvcmFjZXMvdmlwZXIxLmpwZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC52aXBlcjIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3JhY2VzL3ZpcGVyMi5qcGcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudmlwZXIzIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy9yYWNlcy92aXBlcjMuanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnZpcGVyNCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvcmFjZXMvdmlwZXI2LmpwZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC52aXBlcjUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3JhY2VzL3ZpcGVyNC5qcGcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudmlwZXI2IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy9yYWNlcy92aXBlcjUuanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmNvbG9yMSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvcmFjZXMvY29sb3IxLmpwZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5jb2xvcjIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3JhY2VzL2NvbG9yMi5qcGcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuY29sb3IzIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy9yYWNlcy9jb2xvcjQuanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNjaGttMSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvcmFjZXMvc2Noa20uanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNjaGttMiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvcmFjZXMvc2Noa20xLmpwZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L3JlYWN0LkZyYWdtZW50ID5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1SYWNlOyJdfQ== */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitnessItems/ItemRace.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemRace);

/***/ }),

/***/ "./components/fitnessItems/ItemStrength.js":
/*!*************************************************!*\
  !*** ./components/fitnessItems/ItemStrength.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/ContentFragment */ "./components/layouts/ContentFragment.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitnessItems/ItemStrength.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout




const ItemStrength = props => {
  const item = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: item.title,
    time: item.time,
    text: item.intro,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "intro2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Main Development",
    text: item.main1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Technology",
    text: item.main2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Results",
    text: item.closure,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "main1") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2274546476" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "main2") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Placement Text",
    text: item.main1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Placement Text",
    text: item.main1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2274546476",
    __self: undefined
  }, ".intro1.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/intro1.png');}.intro2.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/intro2.png');}.main1.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/main1.png');}.main2.jsx-2274546476{background-image:url('/static/images/fitness/achievements/transformation/main2.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9maXRuZXNzSXRlbXMvSXRlbVN0cmVuZ3RoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFd0IsQUFHMkcsQUFJQSxBQUlELEFBSUEscUZBSHpGLEFBSUEsQ0FaQSxBQUlBIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9maXRuZXNzSXRlbXMvSXRlbVN0cmVuZ3RoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vL2ltcG9ydCBsYXlvdXRcbmltcG9ydCBDb250ZW50RnJhZ21lbnQgZnJvbSAnLi4vbGF5b3V0cy9Db250ZW50RnJhZ21lbnQnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcblxuY29uc3QgSXRlbVN0cmVuZ3RoID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHByb3BzLmRhdGFcbiAgICByZXR1cm4gKFxuICAgICAgICA8cmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIHRpbWU9e2l0ZW0udGltZX0gdGV4dD17aXRlbS5pbnRyb30+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJpbnRybzFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwiaW50cm8xXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9MYW5kc2NhcGVcIiwgXCJpbnRybzJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJNYWluIERldmVsb3BtZW50XCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW4xfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiVGVjaG5vbG9neVwiXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS5tYWluMn0+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiUmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS5jbG9zdXJlfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9MYW5kc2NhcGVcIiwgXCJtYWluMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIlBsYWNlbWVudCBUZXh0XCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW4xfT5cbiAgICAgICAgICAgICAgICB7LyogTm8gUGhvdG9zICovfVxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiUGxhY2VtZW50IFRleHRcIlxuICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0ubWFpbjF9PlxuICAgICAgICAgICAgICAgIHsvKiBObyBQaG90b3MgKi99XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW50cm8xIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi9pbnRybzEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmludHJvMiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvdHJhbnNmb3JtYXRpb24vaW50cm8yLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tYWluMSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvdHJhbnNmb3JtYXRpb24vbWFpbjEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4yIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi9tYWluMi5wbmcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9yZWFjdC5GcmFnbWVudCA+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJdGVtU3RyZW5ndGg7Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitnessItems/ItemStrength.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemStrength);

/***/ }),

/***/ "./components/fitnessItems/ItemTransform.js":
/*!**************************************************!*\
  !*** ./components/fitnessItems/ItemTransform.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/ContentFragment */ "./components/layouts/ContentFragment.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout





const ItemTransform = props => {
  const item = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: item.title,
    time: item.time,
    text: item.intro
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + "row"
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px"
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro1") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 200
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "intro2") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 400
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "intro3") || "")
  })))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Bulking Phases",
    text: item.main1
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + "row"
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px"
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoLandscape", "bulk1") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 200
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "bulk2") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 400
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "bulk3") || "")
  })))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Transformation",
    text: item.main2
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + "row"
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px"
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "transform1") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 200
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "transform2") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 400
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "transform3") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 600
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "transform4") || "")
  }))), __jsx("div", {
    className: "jsx-1274509517" + " " + "row"
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 800
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "transform5") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 1000
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "transform6") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 1200
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "transform7") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 1400
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "transform8") || "")
  })))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Maintenance",
    text: item.maintenance
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + "row"
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px"
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "maintain1") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 200
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "maintain2") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 400
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "maintain3") || "")
  })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    bottom: true,
    distance: "20px",
    delay: 600
  }, __jsx("div", {
    className: "jsx-1274509517" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhotoPortrait", "maintain4") || "")
  })))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Closure",
    text: item.closure
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1274509517"
  }, ".intro1.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/skinny2.jpeg');}.intro2.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/skinny3.jpeg');}.intro3.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/skinny1.jpg');}.bulk1.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/bulk1.jpg');}.bulk2.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/bulk2.jpg');}.bulk3.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/bulk3.jpg');}.transform1.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/transform1.jpg');}.transform2.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/transform2.jpg');}.transform3.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/transform3.jpg');}.transform4.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/transform4.jpg');}.transform5.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/transform5.jpg');}.transform6.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/transform6.jpg');}.transform7.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/transform7.jpg');}.transform8.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/transform8.jpg');}.maintain1.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/maintenance1.jpg');}.maintain2.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/maintenance2.jpeg');}.maintain3.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/maintenance3.jpg');}.maintain4.jsx-1274509517{background-image:url('/static/images/fitness/achievements/transformation/maintenance4.jpg');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9maXRuZXNzSXRlbXMvSXRlbVRyYW5zZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3R3dCLEFBRzZHLEFBSUEsQUFJRCxBQUlGLEFBSUEsQUFHQSxBQUlLLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHRSxBQUdDLEFBR0QsQUFHQSxxRkEzQ2hHLEFBSUEsQUFHQSxFQVhBLENBUkEsQUFJQSxFQW1CQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEFBR0EsQUFHQSxBQUdBLEVBR0EsQUFNQSxBQUdBLENBTkEiLCJmaWxlIjoiL1VzZXJzL2FzeXJ1bGhhZmV0enkvRG9jdW1lbnRzL0NTRGV2ZWxvcG1lbnQvV2ViL215VWx0aW1hdGVQb3J0Zm9saW8vdWx0aW1hdGVwb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL2ZpdG5lc3NJdGVtcy9JdGVtVHJhbnNmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vL2ltcG9ydCBsYXlvdXRcbmltcG9ydCBDb250ZW50RnJhZ21lbnQgZnJvbSAnLi4vbGF5b3V0cy9Db250ZW50RnJhZ21lbnQnXG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuXG5jb25zdCBJdGVtVHJhbnNmb3JtID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IHByb3BzLmRhdGFcbiAgICByZXR1cm4gKFxuICAgICAgICA8cmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIHRpbWU9e2l0ZW0udGltZX0gdGV4dD17aXRlbS5pbnRyb30+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwiaW50cm8xXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnIGRlbGF5PXsyMDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcImludHJvMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4JyBkZWxheT17NDAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvTGFuZHNjYXBlXCIsIFwiaW50cm8zXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJCdWxraW5nIFBoYXNlc1wiXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS5tYWluMX0+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b0xhbmRzY2FwZVwiLCBcImJ1bGsxXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnIGRlbGF5PXsyMDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcImJ1bGsyXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnIGRlbGF5PXs0MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcImJ1bGszXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgc3VidGl0bGU9XCJUcmFuc2Zvcm1hdGlvblwiXG4gICAgICAgICAgICAgICAgdGV4dD17aXRlbS5tYWluMn0+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwidHJhbnNmb3JtMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4JyBkZWxheT17MjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJ0cmFuc2Zvcm0yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnIGRlbGF5PXs0MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcInRyYW5zZm9ybTNcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCcgZGVsYXk9ezYwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwidHJhbnNmb3JtNFwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnIGRlbGF5PXs4MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcInRyYW5zZm9ybTVcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCcgZGVsYXk9ezEwMDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcInRyYW5zZm9ybTZcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCcgZGVsYXk9ezEyMDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcInRyYW5zZm9ybTdcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCcgZGVsYXk9ezE0MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcInRyYW5zZm9ybThcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIk1haW50ZW5hbmNlXCJcbiAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLm1haW50ZW5hbmNlfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWludGFpbjFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCcgZGVsYXk9ezIwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1BvcnRyYWl0XCIsIFwibWFpbnRhaW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnIGRlbGF5PXs0MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9Qb3J0cmFpdFwiLCBcIm1haW50YWluM1wiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4JyBkZWxheT17NjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvUG9ydHJhaXRcIiwgXCJtYWludGFpbjRcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIkNsb3N1cmVcIlxuICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0uY2xvc3VyZX0+XG4gICAgICAgICAgICAgICAgey8qIE5vIFBob3RvcyAqL31cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5pbnRybzEge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3RyYW5zZm9ybWF0aW9uL3NraW5ueTIuanBlZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbnRybzIge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3RyYW5zZm9ybWF0aW9uL3NraW5ueTMuanBlZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbnRybzMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3RyYW5zZm9ybWF0aW9uL3NraW5ueTEuanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmJ1bGsxIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi9idWxrMS5qcGcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYnVsazJ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvdHJhbnNmb3JtYXRpb24vYnVsazIuanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5idWxrM3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi9idWxrMy5qcGcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudHJhbnNmb3JtMXtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm0xLmpwZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudHJhbnNmb3JtMntcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm0yLmpwZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudHJhbnNmb3JtM3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm0zLmpwZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudHJhbnNmb3JtNHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm00LmpwZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudHJhbnNmb3JtNXtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm01LmpwZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudHJhbnNmb3JtNntcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm02LmpwZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudHJhbnNmb3JtN3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm03LmpwZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudHJhbnNmb3JtOHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi90cmFuc2Zvcm04LmpwZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubWFpbnRhaW4xe1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3RyYW5zZm9ybWF0aW9uL21haW50ZW5hbmNlMS5qcGcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1haW50YWluMntcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi9tYWludGVuYW5jZTIuanBlZycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubWFpbnRhaW4ze1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ZpdG5lc3MvYWNoaWV2ZW1lbnRzL3RyYW5zZm9ybWF0aW9uL21haW50ZW5hbmNlMy5qcGcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1haW50YWluNHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9maXRuZXNzL2FjaGlldmVtZW50cy90cmFuc2Zvcm1hdGlvbi9tYWludGVuYW5jZTQuanBnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvcmVhY3QuRnJhZ21lbnQgPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRlbVRyYW5zZm9ybTsiXX0= */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitnessItems/ItemTransform.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemTransform);

/***/ }),

/***/ "./components/layouts/BaseLayout.js":
/*!******************************************!*\
  !*** ./components/layouts/BaseLayout.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/Header */ "./components/shared/Header.js");
/* harmony import */ var _shared_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Footer */ "./components/shared/Footer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //functional component, instead of class
//because simpler

const BaseLayout = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_shared_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), props.children, __jsx(_shared_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (BaseLayout);

/***/ }),

/***/ "./components/layouts/ContentContainer.js":
/*!************************************************!*\
  !*** ./components/layouts/ContentContainer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_BreadCrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/BreadCrumbs */ "./components/shared/BreadCrumbs.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ContentContainer = props => {
  return __jsx("div", {
    className: "contentContainer"
  }, props.breadcrumbs && __jsx(_shared_BreadCrumbs__WEBPACK_IMPORTED_MODULE_1__["default"], {
    slugs: props.breadcrumbs
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (ContentContainer);

/***/ }),

/***/ "./components/layouts/ContentFragment.js":
/*!***********************************************!*\
  !*** ./components/layouts/ContentFragment.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentFragment.module.scss */ "./components/layouts/contentFragment.module.scss");
/* harmony import */ var _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //import style



const ContentFragment = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.title && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.fragmentHeader
  }, props.title, ' ', props.time && __jsx("span", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.time
  }, "(", props.time, ")")), props.link && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.linkContainer
  }, __jsx("a", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
    href: props.link,
    target: "_blank"
  }, "View")), props.subtitle && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subHeader
  }, props.subtitle), __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text
  }, __jsx("p", null, props.text)), props.type === 'links' && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.linkContainer
  }, props.links.map((link, id) => {
    return __jsx("a", {
      key: id,
      className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
      href: link,
      target: "_blank"
    }, "Video", id + 1, '\t');
  })), props.children && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ItemsContainer
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentFragment);

/***/ }),

/***/ "./components/layouts/ContentLayout.js":
/*!*********************************************!*\
  !*** ./components/layouts/ContentLayout.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var _shared_BackToTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/BackToTop */ "./components/shared/BackToTop.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // jquery

 //React Reveal Animation



class ContentLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      documentHeight: 0,
      viewportHeight: 0
    };
    this.onClickToTop = this.onClickToTop.bind(this);
  }

  componentDidMount() {
    this.setState({
      documentHeight: window.document.body.offsetHeight,
      viewportHeight: document.documentElement.clientHeight
    });
  }

  componentDidUpdate() {
    if (this.state.documentHeight !== window.document.body.offsetHeight) {
      this.setState({
        documentHeight: window.document.body.offsetHeight
      });
    }
  }

  onClickToTop(event) {
    event.preventDefault(); // console.log('Clicked!');

    jquery__WEBPACK_IMPORTED_MODULE_3___default()("html, body").animate({
      scrollTop: 0
    }, 1000);
  }

  render() {
    const padding = 800; // console.log('Doc height: ', this.state.documentHeight);
    // console.log('Viewport height: ', this.state.viewportHeight);
    // console.log(`Viewport height + ${padding}: `, this.state.viewportHeight * 2 + padding);

    return __jsx(_BaseLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, this.props.children, this.state.documentHeight > this.state.viewportHeight * 2 + padding && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
      delay: 200
    }, __jsx(_shared_BackToTop__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClick: this.onClickToTop
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ContentLayout);

/***/ }),

/***/ "./components/layouts/contentFragment.module.scss":
/*!********************************************************!*\
  !*** ./components/layouts/contentFragment.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"fragmentHeader": "_1pX9g6j7erNsOO-h032l1-",
	"subHeader": "JzDjN33rVGYQJlPG98FnB",
	"time": "_2vNElQm3ixg4JSKkkkrIjv",
	"text": "Aik-M3HCLVIrlmuQRLz2N",
	"linkContainer": "_3HYonkoVEQK7gCofoOIwN5",
	"ItemsContainer": "_1eaZthu8GWKClh8XC0O1zR",
	"link": "QhwHN4AQ2F_1130v8HC6l"
};

/***/ }),

/***/ "./components/shared/BackToTop.js":
/*!****************************************!*\
  !*** ./components/shared/BackToTop.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const BackToTop = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    onClick: props.onClick,
    className: "jsx-3020984036" + " " + 'backtotopButton'
  }, __jsx("div", {
    className: "jsx-3020984036" + " " + 'buttonIcon'
  }), __jsx("div", {
    className: "jsx-3020984036" + " " + 'buttonText'
  }, "Back to Top")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3020984036"
  }, ".backtotopButton.jsx-3020984036{color:black;text-align:center;line-height:45px;background-color:#E5E5E5;height:40px;width:140px;margin-top:-50px;margin-bottom:-50px;border-radius:5px;opacity:0.9;box-shadow:2px 2px 5px 0px rgba(0,0,0,0.42);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.backtotopButton.jsx-3020984036:hover{opacity:1;cursor:pointer;}.buttonIcon.jsx-3020984036{margin:0;height:100%;width:40px;background-image:url('/static/images/icons/backtotop.png');background-repeat:no-repeat;background-position:center;background-size:fit;}.buttonText.jsx-3020984036{margin:0;height:100%;width:90px;padding-right:5px;font-size:14px;font-weight:500;line-height:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvQmFja1RvVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN3QixBQUlpQyxBQXFCRixBQUtGLEFBWUEsU0FWSSxBQVlELENBbEJJLEVBckJHLFNBNEJQLEFBWUEsSUFsQmYsS0FyQnFCLEVBNkIwQyxBQVcxQyxlQXRDUSxHQXdDVixlQUNDLE9BeENKLFNBeUNLLEdBeENMLE9BMEJnQixLQXhCWCxFQXVDckIsZUF0Q3dCLE1Bd0JPLGNBdkJULGFBd0JFLEtBdEJSLFlBRWdDLEdBcUJoRCx5Q0FuQmdCLDBFQUNXLG1HQUMzQiIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvc2hhcmVkL0JhY2tUb1RvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgQmFja1RvVG9wID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfSBjbGFzc05hbWU9J2JhY2t0b3RvcEJ1dHRvbic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J1dHRvbkljb24nPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25UZXh0Jz5CYWNrIHRvIFRvcDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmJhY2t0b3RvcEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogYmx1ZSBzb2xpZCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcblxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFNUU1O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcblxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XG5cbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4IHJnYmEoMCwwLDAsMC40Mik7XG5cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYmFja3RvdG9wQnV0dG9uOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmJ1dHRvbkljb24ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiB3aGl0ZSBzb2xpZCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9pY29ucy9iYWNrdG90b3AucG5nJyk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBmaXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmJ1dHRvblRleHR7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IGJsdWUgc29saWQgMXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvcmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrVG9Ub3A7Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/BackToTop.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (BackToTop);

/***/ }),

/***/ "./components/shared/BreadCrumbs.js":
/*!******************************************!*\
  !*** ./components/shared/BreadCrumbs.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/breadcrumbs.module.scss */ "./components/shared/styles/breadcrumbs.module.scss");
/* harmony import */ var _styles_breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BreadCrumbs = props => {
  let path = '';
  return __jsx("div", {
    className: _styles_breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.bcContainer
  }, __jsx("p", {
    className: _styles_breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.breadcrumb
  }, props.slugs.map((item, idx) => {
    path += `/${item.toLowerCase()}`; // console.log(path);

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: idx
    }, idx === props.slugs.length - 1 ? __jsx("span", {
      className: _styles_breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.active
    }, item) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: idx,
      href: path
    }, __jsx("a", {
      href: path,
      className: _styles_breadcrumbs_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.links
    }, item)), ' ', "> ", ' '));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BreadCrumbs);

/***/ }),

/***/ "./components/shared/ContentHead.js":
/*!******************************************!*\
  !*** ./components/shared/ContentHead.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_contentHead_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/contentHead.module.scss */ "./components/shared/styles/contentHead.module.scss");
/* harmony import */ var _styles_contentHead_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_contentHead_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import specific style here



const ContentHead = props => {
  return __jsx("div", {
    className: _styles_contentHead_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.headContainer
  }, __jsx("div", {
    className: _styles_contentHead_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title
  }, __jsx("h5", null, props.data.title)), __jsx("div", {
    className: _styles_contentHead_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.quote
  }, props.data.quote), __jsx("div", {
    className: _styles_contentHead_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.author
  }, props.data.author), __jsx("div", {
    className: _styles_contentHead_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text
  }, __jsx("p", null, props.data.text)), props.data.text2 && __jsx("div", {
    className: _styles_contentHead_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text
  }, __jsx("p", null, props.data.text2)));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentHead);

/***/ }),

/***/ "./components/shared/FitnessItem.js":
/*!******************************************!*\
  !*** ./components/shared/FitnessItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fitnessItems_ItemTransform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../fitnessItems/ItemTransform */ "./components/fitnessItems/ItemTransform.js");
/* harmony import */ var _fitnessItems_ItemRace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../fitnessItems/ItemRace */ "./components/fitnessItems/ItemRace.js");
/* harmony import */ var _fitnessItems_ItemHypertrophy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../fitnessItems/ItemHypertrophy */ "./components/fitnessItems/ItemHypertrophy.js");
/* harmony import */ var _fitnessItems_ItemFatloss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../fitnessItems/ItemFatloss */ "./components/fitnessItems/ItemFatloss.js");
/* harmony import */ var _fitnessItems_ItemStrength__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../fitnessItems/ItemStrength */ "./components/fitnessItems/ItemStrength.js");
/* harmony import */ var _fitnessItems_ItemDietGeneral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../fitnessItems/ItemDietGeneral */ "./components/fitnessItems/ItemDietGeneral.js");
/* harmony import */ var _fitnessItems_ItemDietIIFYM__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../fitnessItems/ItemDietIIFYM */ "./components/fitnessItems/ItemDietIIFYM.js");
/* harmony import */ var _public_static_data_fitness_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/static/data/fitness.json */ "./public/static/data/fitness.json");
var _public_static_data_fitness_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/data/fitness.json */ "./public/static/data/fitness.json", 1);
var _jsxFileName = "/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/FitnessItem.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import components







 // import data



const FitnessItem = props => {
  return __jsx("div", {
    className: "jsx-3019113223" + " " + 'fitnessContainer',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, props.id === 'transform' && __jsx(_fitnessItems_ItemTransform__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: _public_static_data_fitness_json__WEBPACK_IMPORTED_MODULE_9__.achievementItems[`${props.id}`],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), props.id === 'race' && __jsx(_fitnessItems_ItemRace__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: _public_static_data_fitness_json__WEBPACK_IMPORTED_MODULE_9__.achievementItems[`${props.id}`],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), props.id === 'hypertrophy' && __jsx(_fitnessItems_ItemHypertrophy__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: _public_static_data_fitness_json__WEBPACK_IMPORTED_MODULE_9__.programsItems[`${props.id}`],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), props.id === 'fatloss' && __jsx(_fitnessItems_ItemFatloss__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: _public_static_data_fitness_json__WEBPACK_IMPORTED_MODULE_9__.programsItems[`${props.id}`],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), props.id === 'strength' && __jsx(_fitnessItems_ItemStrength__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: _public_static_data_fitness_json__WEBPACK_IMPORTED_MODULE_9__.programsItems[`${props.id}`],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), props.id === 'general' && __jsx(_fitnessItems_ItemDietGeneral__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: _public_static_data_fitness_json__WEBPACK_IMPORTED_MODULE_9__.dietItems[`${props.id}`],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), props.id === 'iifym' && __jsx(_fitnessItems_ItemDietIIFYM__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: _public_static_data_fitness_json__WEBPACK_IMPORTED_MODULE_9__.dietItems[`${props.id}`],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3019113223",
    __self: undefined
  }, ".fitnessContainer.jsx-3019113223{width:100%;margin-top:80px;margin-bottom:120px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvRml0bmVzc0l0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEN3QixBQUlnQyxXQUNLLGdCQUNJLG9CQUV4QiIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvc2hhcmVkL0ZpdG5lc3NJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vL2ltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgSXRlbVRyYW5zZm9ybSBmcm9tICcuLy4uL2ZpdG5lc3NJdGVtcy9JdGVtVHJhbnNmb3JtJ1xuaW1wb3J0IEl0ZW1SYWNlIGZyb20gJy4vLi4vZml0bmVzc0l0ZW1zL0l0ZW1SYWNlJ1xuaW1wb3J0IEl0ZW1IeXBlcnRyb3BoeSBmcm9tICcuLy4uL2ZpdG5lc3NJdGVtcy9JdGVtSHlwZXJ0cm9waHknXG5pbXBvcnQgSXRlbUZhdGxvc3MgZnJvbSAnLi8uLi9maXRuZXNzSXRlbXMvSXRlbUZhdGxvc3MnXG5pbXBvcnQgSXRlbVN0cmVuZ3RoIGZyb20gJy4vLi4vZml0bmVzc0l0ZW1zL0l0ZW1TdHJlbmd0aCdcbmltcG9ydCBJdGVtRGlldEdlbmVyYWwgZnJvbSAnLi8uLi9maXRuZXNzSXRlbXMvSXRlbURpZXRHZW5lcmFsJ1xuaW1wb3J0IEl0ZW1EaWV0SUlGWU0gZnJvbSAnLi8uLi9maXRuZXNzSXRlbXMvSXRlbURpZXRJSUZZTSdcblxuLy8gaW1wb3J0IGRhdGFcbmltcG9ydCBmaXRuZXNzRGF0YSBmcm9tICcuLi8uLi9wdWJsaWMvc3RhdGljL2RhdGEvZml0bmVzcy5qc29uJ1xuXG5jb25zdCBGaXRuZXNzSXRlbSA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmaXRuZXNzQ29udGFpbmVyJz5cbiAgICAgICAgICAgIHsvKiBFYWNoIGl0ZW0gbXVzdCBoYXZlIHRoZWlyIG93biBwYWdlICovfVxuICAgICAgICAgICAgeyhwcm9wcy5pZCA9PT0gJ3RyYW5zZm9ybScpICYmXG4gICAgICAgICAgICAgICAgPEl0ZW1UcmFuc2Zvcm0gZGF0YT17Zml0bmVzc0RhdGEuYWNoaWV2ZW1lbnRJdGVtc1tgJHtwcm9wcy5pZH1gXX0gLz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgeyhwcm9wcy5pZCA9PT0gJ3JhY2UnKSAmJlxuICAgICAgICAgICAgICAgIDxJdGVtUmFjZSBkYXRhPXtmaXRuZXNzRGF0YS5hY2hpZXZlbWVudEl0ZW1zW2Ake3Byb3BzLmlkfWBdfSAvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7KHByb3BzLmlkID09PSAnaHlwZXJ0cm9waHknKSAmJlxuICAgICAgICAgICAgICAgIDxJdGVtSHlwZXJ0cm9waHkgZGF0YT17Zml0bmVzc0RhdGEucHJvZ3JhbXNJdGVtc1tgJHtwcm9wcy5pZH1gXX0gLz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgeyhwcm9wcy5pZCA9PT0gJ2ZhdGxvc3MnKSAmJlxuICAgICAgICAgICAgICAgIDxJdGVtRmF0bG9zcyBkYXRhPXtmaXRuZXNzRGF0YS5wcm9ncmFtc0l0ZW1zW2Ake3Byb3BzLmlkfWBdfSAvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7KHByb3BzLmlkID09PSAnc3RyZW5ndGgnKSAmJlxuICAgICAgICAgICAgICAgIDxJdGVtU3RyZW5ndGggZGF0YT17Zml0bmVzc0RhdGEucHJvZ3JhbXNJdGVtc1tgJHtwcm9wcy5pZH1gXX0gLz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgeyhwcm9wcy5pZCA9PT0gJ2dlbmVyYWwnKSAmJlxuICAgICAgICAgICAgICAgIDxJdGVtRGlldEdlbmVyYWwgZGF0YT17Zml0bmVzc0RhdGEuZGlldEl0ZW1zW2Ake3Byb3BzLmlkfWBdfSAvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB7KHByb3BzLmlkID09PSAnaWlmeW0nKSAmJlxuICAgICAgICAgICAgICAgIDxJdGVtRGlldElJRllNIGRhdGE9e2ZpdG5lc3NEYXRhLmRpZXRJdGVtc1tgJHtwcm9wcy5pZH1gXX0gLz5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5maXRuZXNzQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyOiBibHVlIDJweCBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xuICAgICAgICAgICAgICAgICAgICAvLyBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRml0bmVzc0l0ZW0iXX0= */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/FitnessItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FitnessItem);

/***/ }),

/***/ "./components/shared/Footer.js":
/*!*************************************!*\
  !*** ./components/shared/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/footer.module.scss */ "./components/shared/styles/footer.module.scss");
/* harmony import */ var _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import specific style here



class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socmedContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("a", {
      href: "https://www.instagram.com/?hl=en",
      target: "_blank",
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socmed,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.insta,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }))), __jsx("a", {
      href: "https://www.facebook.com/asyrulahmad21",
      target: "_blank",
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socmed,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fb,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }))), __jsx("a", {
      href: "mailto:asyrulhafetzy.21@gmail.com",
      target: "_blank",
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socmed,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.email,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }))), __jsx("a", {
      href: "https://www.linkedin.com/in/asyrul-ahmad/",
      target: "_blank",
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socmed,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.linkedin,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }))), __jsx("a", {
      href: "https://www.youtube.com/channel/UCiwjg5UyOX3KCqv1De2jA2w",
      target: "_blank",
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socmed,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.youtube,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })))), __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.text,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Asyrul Hafetzy Ahmad \xA9", __jsx("span", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.year,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "2020")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/shared/Header.js":
/*!*************************************!*\
  !*** ./components/shared/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/header.module.scss */ "./components/shared/styles/header.module.scss");
/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import specific style here



class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    // items in return block are JSX
    // React.Fragments can be used interchangeably with divs
    // divs are not always necessary
    return __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.navBar, _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.showNav)
    }, __jsx("div", {
      className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.navLinks
    }, __jsx("div", {
      className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Logo
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", null))), __jsx("div", {
      className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.navItems
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("a", null, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/projects"
    }, __jsx("a", null, "Projects")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/fitness"
    }, __jsx("a", null, "Fitness")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/travel"
    }, __jsx("a", null, "Travel")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blogs"
    }, __jsx("a", null, "Blogs")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/test"
    }, __jsx("a", null, "Test")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/shared/InnerTabs.js":
/*!****************************************!*\
  !*** ./components/shared/InnerTabs.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_innertabs_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/innertabs.module.scss */ "./components/shared/styles/innertabs.module.scss");
/* harmony import */ var _styles_innertabs_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_innertabs_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class InnerTabs extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    // console.log(this.props.data[0].key)
    return __jsx("div", {
      className: _styles_innertabs_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.projectsContainer
    }, this.props.data.map(data => {
      return __jsx("div", {
        key: data.key,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_innertabs_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.projectTabContainer, this.props.active === data.key ? _styles_innertabs_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.active : null)
      }, __jsx("div", {
        className: _styles_innertabs_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.tabBox,
        key: data.key,
        onClick: () => this.props.onChange(data.key)
      }, __jsx("span", null, data.name)));
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (InnerTabs);

/***/ }),

/***/ "./components/shared/Tabs.js":
/*!***********************************!*\
  !*** ./components/shared/Tabs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/tabs.module.scss */ "./components/shared/styles/tabs.module.scss");
/* harmony import */ var _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Tabs extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tabContainer
    }, this.props.children.map((child, idx) => {
      return (// passing child state to parent
        __jsx("a", {
          key: idx,
          onClick: () => this.props.onChange(child.key),
          className: this.props.active === child.key ? _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active : null
        }, child)
      );
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Tabs); // handleClick(item) {
//     let newState = {}
//     Object.keys(this.state).map((key, value) => {
//         if (key === `${item}Active`) {
//             newState[`${key}`] = true;
//         }
//         else {
//             newState[`${key}`] = false;
//         }
//     })
//     this.setState(newState);
// }

/***/ }),

/***/ "./components/shared/styles/breadcrumbs.module.scss":
/*!**********************************************************!*\
  !*** ./components/shared/styles/breadcrumbs.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"bcContainer": "_1HmujMjuvM0fRzWtqDgxSQ",
	"breadcrumb": "_2GIIFTc5uD7y4pnnkRI2W5",
	"links": "_1pN9lnX0WepZ6he3_bpGeM"
};

/***/ }),

/***/ "./components/shared/styles/contentHead.module.scss":
/*!**********************************************************!*\
  !*** ./components/shared/styles/contentHead.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"title": "_1qJqvjFdArUczCb9Hw-xG1",
	"quote": "_3cUM3i_ShnS59iohtQew57",
	"author": "lV8OG2KRXm5Csh6a3S3pS",
	"text": "nTfcgQMaTNiKLER9c4L0z"
};

/***/ }),

/***/ "./components/shared/styles/footer.module.scss":
/*!*****************************************************!*\
  !*** ./components/shared/styles/footer.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"footer": "_1G6KdEe68Bq9lOdDzSEFsk",
	"socmedContainer": "_11GuFnaAEG0J71ENb2G7wH",
	"socmed": "_2FSPpFMz8bRszgpn68DS47",
	"link": "_2n1M71IXMwwvkB3yIOd675",
	"insta": "_2oCrJqiDVaRAIeO_g0MU-Q",
	"fb": "KXfwJkzv1v7EwxOqJMxBa",
	"email": "_3C0rl4yCn4h8fZmQIsX9AB",
	"linkedin": "_2iJvO9iYwvox-X0up_naok",
	"youtube": "kksmClWKdbMAbJ65N3_QK",
	"text": "OKPUsf8eZqRy36GpjpEzJ",
	"year": "_4S1LAbqgOvMfN4-fBDsDE"
};

/***/ }),

/***/ "./components/shared/styles/header.module.scss":
/*!*****************************************************!*\
  !*** ./components/shared/styles/header.module.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"navBar": "_3Ynq13K6dJwDv9xNY-P6Vq",
	"Logo": "_16xJ6Gr4E3Ez3WL9Q23t7O",
	"navItems": "_2TOHO7TymYTw4z6DDLMHhn",
	"navLinks": "kPFk5WKPQbwwEkuo5RDYZ",
	"logo": "_1TOIAYYaQvs6qoDRvDiKyH",
	"showNav": "_3Z7Nj8sD8W-qNi1c5vPZY4",
	"slideDown": "HIFhD7XAyO9o5tAYfgII5"
};

/***/ }),

/***/ "./components/shared/styles/innertabs.module.scss":
/*!********************************************************!*\
  !*** ./components/shared/styles/innertabs.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"projectsContainer": "_50IlI1eFp3e4llkoaohfz",
	"projectTabContainer": "_3VDDR-h_YBxxpLez2HW4XT",
	"active": "Impeb-zv_aTrO4JRMYwAN",
	"tabBox": "_30uZ8RAlNK3FnOa1AUsjop"
};

/***/ }),

/***/ "./components/shared/styles/tabs.module.scss":
/*!***************************************************!*\
  !*** ./components/shared/styles/tabs.module.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"tabContainer": "_2Us9WewTmbvlOKZCqMMP4e",
	"active": "_3he9mWRDgEgjRmSH-yuGUA"
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/fitness.js":
/*!**************************!*\
  !*** ./pages/fitness.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_ContentLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/ContentLayout */ "./components/layouts/ContentLayout.js");
/* harmony import */ var _components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layouts/ContentContainer */ "./components/layouts/ContentContainer.js");
/* harmony import */ var _components_shared_ContentHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shared/ContentHead */ "./components/shared/ContentHead.js");
/* harmony import */ var _components_shared_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared/Tabs */ "./components/shared/Tabs.js");
/* harmony import */ var _components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared/InnerTabs */ "./components/shared/InnerTabs.js");
/* harmony import */ var _components_shared_FitnessItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shared/FitnessItem */ "./components/shared/FitnessItem.js");
/* harmony import */ var _styles_fitness_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/fitness.module.scss */ "./pages/styles/fitness.module.scss");
/* harmony import */ var _styles_fitness_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_fitness_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/static/data/contentHeads.json */ "./public/static/data/contentHeads.json");
var _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/static/data/contentHeads.json */ "./public/static/data/contentHeads.json", 1);
/* harmony import */ var _public_static_data_fitness_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/static/data/fitness.json */ "./public/static/data/fitness.json");
var _public_static_data_fitness_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/static/data/fitness.json */ "./public/static/data/fitness.json", 1);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import layouts


 //import components




 //global styles can be found at ../styles/main.scss
//import specific styling module

 // import data


 //React Reveal Animation



class Fitness extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      activeTab: '',
      activeItem: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(active) {
    this.setState({
      activeTab: active,
      activeItem: ''
    });
  }

  render() {
    return __jsx(_components_layouts_ContentLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx("section", null, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('hero', _styles_fitness_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.fitnessHero)
    })), __jsx(_components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      delay: 200
    }, __jsx(_components_shared_ContentHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_10__.fitness
    })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      delay: 300
    }, __jsx(_components_shared_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onChange: this.handleChange,
      active: this.state.activeTab
    }, __jsx("span", {
      key: "Achievements"
    }, "Achievements"), __jsx("span", {
      key: "Programs"
    }, "Programs"), __jsx("span", {
      key: "Diet"
    }, "Diet"))), this.state.activeTab === 'Achievements' && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      duration: 500
    }, __jsx(_components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onChange: active => {
        this.setState({
          activeItem: active
        });
      },
      active: this.state.activeItem,
      data: _public_static_data_fitness_json__WEBPACK_IMPORTED_MODULE_11__.slugs.Achievements
    })), this.state.activeTab === 'Programs' && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      duration: 500
    }, __jsx(_components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onChange: active => {
        this.setState({
          activeItem: active
        });
      },
      active: this.state.activeItem,
      data: _public_static_data_fitness_json__WEBPACK_IMPORTED_MODULE_11__.slugs.Programs
    })), this.state.activeTab === 'Diet' && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      duration: 500
    }, __jsx(_components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onChange: active => {
        this.setState({
          activeItem: active
        });
      },
      active: this.state.activeItem,
      data: _public_static_data_fitness_json__WEBPACK_IMPORTED_MODULE_11__.slugs.Diet
    })), this.state.activeItem !== '' && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      duration: 500
    }, __jsx(_components_shared_FitnessItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: this.state.activeItem
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Fitness);

/***/ }),

/***/ "./pages/styles/fitness.module.scss":
/*!******************************************!*\
  !*** ./pages/styles/fitness.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"fitnessHero": "_2LSEde_5fV_Z1iEjd5O82B"
};

/***/ }),

/***/ "./public/static/data/contentHeads.json":
/*!**********************************************!*\
  !*** ./public/static/data/contentHeads.json ***!
  \**********************************************/
/*! exports provided: about_top, about_skill, about_work, about_education, projects, fitness, travel, blogs, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"about_top\":{\"title\":\"Hi, nice to meet you!\",\"quote\":\"“A positive attitude is something everyone can work on, and everyone can learn how to employ it.”\",\"author\":\"Joan Lunden\",\"text\":\"I am an energetic, passionate, self-driven and hard-working individual with immense devotion to Computer Science and Software Engineering. Both a leader and a team-player, I work well in teams, even better under pressure. I love learning as much as I love sharing my knowledge, and I am constantly looking for opportunities to improve myself and enhance my skills. I am currently a student at the University of Manchester, pursuing a master’s degree in Advanced Computer Science with a major in Artificial Intelligence.\"},\"about_skill\":{\"title\":\"Technical Skills and Specialties\",\"quote\":\"“One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.”\",\"author\":\"Elbert Hubbard\",\"text\":\"My areas of expertise are in Software Engineering and Artificial Intelligence, with an overlap with Data Science. Throughout my years as a professional Software Engineer, I was extensively exposed to various programming languages - particularly JavaScript and Python - as well as various technology stacks as well. I have worked with the ReactJS-Express-MongoDB-NodeJS stack as well as the C#-.NET-OracleDB stack. Throughout my year as an MSc student, I worked primarily on Python, and was exposed to core AI subjects including: Machine Learning, Deep Neural Networks, Natural Language Processing and Computer Vision.\"},\"about_work\":{\"title\":\"Work Experience\",\"quote\":\"“Experience is the teacher of all things”\",\"author\":\"Julius Caesar\",\"text\":\"I have worked as a Software Engineer since 2016 during which I did my Internship at Schlumberger, KL. Over the years, I have absolutely no interest in working in jobs other than those that are related to my expertise; Computer Science and/or Software Engineering. Now with my newly-acquired knowledge of Data Science and AI, I would love to work in these fields as well.\"},\"about_education\":{\"title\":\"Education\",\"quote\":\"“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”\",\"author\":\"Malcolm X\",\"text\":\"I have a First Class Honours Bachelor's degree in Computer Science, majoring in Software Engineering from Multimedia University, Cyberjaya. I am currently pursuing my master's degree in Advanced Computer Science, majoring in Artificial Intelligence, at the University of Manchester. I am expected to graduate in September 2020 with a Distinction.\"},\"projects\":{\"title\":\"My Portfolio\",\"quote\":\"“Anyone who has never made a mistake has never tried anything new.”\",\"author\":\"Albert Einstein\",\"text\":\"Throughout the years, I have worked on various projects academically, professionally and personally. I love to push myself out of my comfort zone to try new possibilities, new technologies and concepts. I am not afraid of failing, but I am afraid of not trying at all.\",\"text2\":\"To explore my projects, click on one of the categories below:\"},\"fitness\":{\"title\":\"Fitness\",\"quote\":\"“The World is A Book and Those who Do not Travel read only a Page”\",\"author\":\"St. Augustine\",\"text\":\"My fitness/workout journey began sometime after I completed my Sijil Pelajaran Malaysia (SPM) simply as a hobby and of course, to look better and become stronger. Over the years, I have gained substantial knowledge both in general fitness by itself and natural body building. In fact, I have had absolutely 0 personal training sessions previously, as hiring personal trainers has always been somewhat costly. Everything I have done was purely due to my own research, self motivation and focus towards my goals. In this part of my page, I attempt to document all of my previous fitness and physical achievements, marking them as 'completed' in my long list of goals. Many out there 'set' their goals but only few are willing to work hard and actually achieve them.\"},\"travel\":{\"title\":\"Travel\",\"quote\":\"“The World is A Book and Those who Do not Travel read only a Page”\",\"author\":\"St. Augustine\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"blogs\":{\"title\":\"Blogs\",\"quote\":\"“The World is A Book and Those who Do not Travel read only a Page”\",\"author\":\"St. Augustine\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"}}");

/***/ }),

/***/ "./public/static/data/fitness.json":
/*!*****************************************!*\
  !*** ./public/static/data/fitness.json ***!
  \*****************************************/
/*! exports provided: slugs, achievementItems, programsItems, dietItems, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"slugs\":{\"Achievements\":[{\"key\":\"transform\",\"name\":\"Transformation\"},{\"key\":\"race\",\"name\":\"Race Events\"}],\"Programs\":[{\"key\":\"hypertrophy\",\"name\":\"Hypertrophy\"},{\"key\":\"strength\",\"name\":\"Strength\"},{\"key\":\"fatloss\",\"name\":\"Fat Loss\"}],\"Diet\":[{\"key\":\"general\",\"name\":\"General\"},{\"key\":\"iifym\",\"name\":\"IIFYM\"}]},\"achievementItems\":{\"transform\":{\"title\":\"My Fitness Transformation\",\"time\":\"2012-2018\",\"intro\":\"Like many teenagers out there, I had the skinny-fat type of body. I was weak, have never exceled in any athletic event or sport, and finally injured myself as I twisted my knee during house practice at school when I was just 13 years old. This was probably due to my highly-inactive lifestyle, besides also being born in a family which do not practice physical exercise as weekly (even monthly) routines. That gradually changed after I was introduced to my brother in law, Dr. Daniel, who occasionally would invite me to join him for runs. At that time, 1 mile/1.5KM was enough to kill me. You can see Dr. Daniel in the photo below wearing red jersey. As I established myself with some stable allowances, I signed up for a gym and began my journey of knowledge.\",\"main1\":\"Throughout the years, I have tried various fitness programs ranging from endurance, strength and hypertrophy. However, my primary interest is mainly on hypertrophy training. These photos you see below did not take three or even six months of commitment, but a few years. Some say that fitness is a journey, not a destination - setting yourself a 3-month time frame to achieve a goal which in reality takes many years of training will essentially get you nowhere.\",\"main2\":\"To tell you that I figured out how to properly build muscle and burn fat on day 1 of training is definitely going to be a lie. It took me around 2-3 years to finally understand how the human body works, in regards with muscular development and fat catabolism. The photos you see below depict my physical tranformation over the past years, as I proved time and time again that my fat loss methodology worked. No drugs, just knowledge and willpower.\",\"maintenance\":\"As part of my effort to maintain the muscle mass I have naturally attained over the years, I normally hit the gym around 2-3 times a week. Most men would agree that the after-marriage phase of life is normally the most challenging when it comes to staying in shape, yet alone keeping up with the intense training schedules. Nevertheless, I managed to stay disciplined even after I got married, well at least for a couple of months, after which my goals in life gradually changed as I became older and more matured.\",\"closure\":\"As the days go by, my fitness goals slowly shifted from 'get big and strong' to just 'stay fit and healthy', which to me, serves a much healthier purpose in other aspects of life, those of which I have sacrificed for many years, such as family and friends relationship, travelling the world, and of course, improving my competency as a life-long software engineer. That being said, with the knowledge and experience I have gained over the years, if I ever feel like I am 'out-of-shape' I am 120% confident that I can always train and get myself back into shape.\"},\"race\":{\"title\":\"Participation in Various Race Events\",\"time\":\"2014-2018\",\"intro\":\"Given my highly-inactive lifestyle since my younger days, long distance running always seemed like an impossible task for me. In fact, running for 1 mile (1.5 KM) was enough to put myself at a complete fatigue. Nevertheless, as I grew older and began exposing myself to more cardiovascular-intensive workouts, I finally decided to get involved in long distance running events. The first of these events was the Cyberjaya Twin City Marathon, organised back in 2014, in which I took part in the 14KM category with my friends. It was indeed such a huge achievement for me as I was able to run 14KMs without stopping to catch a breath. I then proceeded to train and participate for a more challenging event, which was the Standard Chartered Half Marathon (21KM) in 2016.\",\"main1\":\"The Viper challenge was an obstacle run event in  which there are two categories: 5KM and 11KM. Yasmin and I took part in the 5KM category, having to go through a total of 6 obstacles. It was fun overall and can get tough if you are not good with pullups (which I was hehe).\",\"main2\":\"My wife and I also took part in the 5KM category of Color Run organised by CIMB in 2017. It was not much for the challenge but more for the fun of it. Overall, it was alright.\",\"main3\":\"The SCHKM certainly tested the peak of my long distance running capability. Being someone who trains muscle strength and hypertrophy, hitting that endurance muscle fibers definitely gave me a painful yet satisfying experience. For training we were doing 40-50 rounds of 400m lap, something I never even thought possible for myself. Credits also go to Yasmin who also agreed to train and participate for the half marathon.\",\"closure\":\"Overall, participating in these running events expose myself to never-before-known limits of my body. I never knew I could run 14KM until I started training for the TwinCity event in Cyberjaya, and running 40 laps of 400m track was undoubtedly out of my mind. I would have gone for a full marathon somewhere along the line, but for now, I am more than happy with what I have achieved(with an injured knee).\"}},\"programsItems\":{\"hypertrophy\":{\"title\":\"Hypertrophy Programs\",\"intro\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main1\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main2\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"closure\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"fatloss\":{\"title\":\"Fat Loss Workouts\",\"intro\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main1\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main2\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"closure\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"strength\":{\"title\":\"Strength Programs\",\"intro\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main1\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main2\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"closure\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"}},\"dietItems\":{\"general\":{\"title\":\"General Diet\",\"intro\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main1\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main2\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"closure\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"iifym\":{\"title\":\"The If It Fits Your Macros (IIFYM)\",\"intro\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main1\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main2\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"closure\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"}}}");

/***/ }),

/***/ 6:
/*!********************************!*\
  !*** multi ./pages/fitness.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/pages/fitness.js */"./pages/fitness.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=fitness.js.map