module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/fitness/WorkoutContainer.js":
/*!************************************************!*\
  !*** ./components/fitness/WorkoutContainer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workoutContainer.module.scss */ "./components/fitness/workoutContainer.module.scss");
/* harmony import */ var _workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const WorkoutContainer = props => {
  let color = '#D2E5EF';

  if (props.theme === 'green') {
    color = '#D4EFD2';
  } else if (props.theme === 'purple') {
    color = '#D8CCDE';
  }

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container, props.itemsPerRow === 2 ? _workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.twoItems : _workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.threeItems)
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
    style: {
      background: color
    }
  }, props.title), __jsx("div", {
    className: _workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.items
  }, props.children)), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _workoutContainer_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.notes
  }, __jsx("span", {
    style: {
      fontWeight: '600'
    }
  }, "NOTES:"), " ", props.notes)));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkoutContainer);

/***/ }),

/***/ "./components/fitness/WorkoutItem.js":
/*!*******************************************!*\
  !*** ./components/fitness/WorkoutItem.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // takes 2 properties: name and sets

const WorkoutItem = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-574774576" + " " + "itemContainer"
  }, __jsx("span", {
    className: "jsx-574774576"
  }, props.name), __jsx("span", {
    className: "jsx-574774576"
  }, props.sets)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "574774576"
  }, ".itemContainer.jsx-574774576{border-bottom:rgba(196,196,196,0.3) 1px solid;margin-bottom:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9maXRuZXNzL1dvcmtvdXRJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWN3QixBQUdvRSw4Q0FDNUIsbUJBRU4sMEVBQ2lCLG1IQUVYLG1CQUN2QiIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvZml0bmVzcy9Xb3Jrb3V0SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLy8gdGFrZXMgMiBwcm9wZXJ0aWVzOiBuYW1lIGFuZCBzZXRzXG5jb25zdCBXb3Jrb3V0SXRlbSA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zZXRzfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5pdGVtQ29udGFpbmVye1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiByZ2JhKDE5NiwxOTYsMTk2LCAwLjMpIDFweCBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudCA+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3Jrb3V0SXRlbVxuIl19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitness/WorkoutItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkoutItem);

/***/ }),

/***/ "./components/fitness/WorkoutNotation.js":
/*!***********************************************!*\
  !*** ./components/fitness/WorkoutNotation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const WorkoutNotation = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3000468289" + " " + "container"
  }, __jsx("h3", {
    className: "jsx-3000468289" + " " + "header"
  }, "Notations :"), __jsx("ul", {
    className: "jsx-3000468289"
  }, __jsx("li", {
    className: "jsx-3000468289"
  }, __jsx("span", {
    className: "jsx-3000468289" + " " + "key"
  }, "BB : "), "Barbell"), __jsx("li", {
    className: "jsx-3000468289"
  }, __jsx("span", {
    className: "jsx-3000468289" + " " + "key"
  }, "DB : "), "Dumbell"), __jsx("li", {
    className: "jsx-3000468289"
  }, __jsx("span", {
    className: "jsx-3000468289" + " " + "key"
  }, "Rw/ : "), "Replacable with the workout next in the list"), __jsx("li", {
    className: "jsx-3000468289"
  }, __jsx("span", {
    className: "jsx-3000468289" + " " + "key"
  }, "SS w/ : "), "Superset with the workout next in the list"), __jsx("li", {
    className: "jsx-3000468289"
  }, __jsx("span", {
    className: "jsx-3000468289" + " " + "key"
  }, "TS w/ : "), "Tri-set with the workout(s) next in the list"), __jsx("li", {
    className: "jsx-3000468289"
  }, __jsx("span", {
    className: "jsx-3000468289" + " " + "key"
  }, "4x12 : "), "Perform 4 sets of 12 repetitions"), __jsx("li", {
    className: "jsx-3000468289"
  }, __jsx("span", {
    className: "jsx-3000468289" + " " + "key"
  }, "4x10-12 : "), "Perform 4 sets of 10 to 12 repetitions"), __jsx("li", {
    className: "jsx-3000468289"
  }, __jsx("span", {
    className: "jsx-3000468289" + " " + "key"
  }, "3-4x10-12 : "), "Perform 3 to 4 sets of 10 to 12 repetitions"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3000468289"
  }, ".container.jsx-3000468289{width:100%;border:black solid 2px;border-radius:5px;padding:25px;margin-bottom:45px;font-weight:500;}.header.jsx-3000468289{margin:0;margin-bottom:10px;-webkit-text-decoration:underline;text-decoration:underline;}.key.jsx-3000468289{font-weight:bold;}ul.jsx-3000468289{list-style:none;padding:0;margin:0;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;line-height:2;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9maXRuZXNzL1dvcmtvdXROb3RhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQndCLEFBR2dDLEFBU0YsQUFNUSxBQUlELFNBVEcsRUFUSSxLQW1CYixDQUpkLFNBS2EsRUFWaUIsTUFUUixDQW9CSyxpQkFuQlYsYUFDTSxtQkFDSCxJQU9wQixZQU5BLDRDQWlCa0IsY0FDbEIiLCJmaWxlIjoiL1VzZXJzL2FzeXJ1bGhhZmV0enkvRG9jdW1lbnRzL0NTRGV2ZWxvcG1lbnQvV2ViL215VWx0aW1hdGVQb3J0Zm9saW8vdWx0aW1hdGVwb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL2ZpdG5lc3MvV29ya291dE5vdGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBXb3Jrb3V0Tm90YXRpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaGVhZGVyXCI+Tm90YXRpb25zIDo8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImtleVwiPkJCIDogPC9zcGFuPkJhcmJlbGw8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwia2V5XCI+REIgOiA8L3NwYW4+RHVtYmVsbDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJrZXlcIj5Sdy8gOiA8L3NwYW4+UmVwbGFjYWJsZSB3aXRoIHRoZSB3b3Jrb3V0IG5leHQgaW4gdGhlIGxpc3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwia2V5XCI+U1Mgdy8gOiA8L3NwYW4+U3VwZXJzZXQgd2l0aCB0aGUgd29ya291dCBuZXh0IGluIHRoZSBsaXN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImtleVwiPlRTIHcvIDogPC9zcGFuPlRyaS1zZXQgd2l0aCB0aGUgd29ya291dChzKSBuZXh0IGluIHRoZSBsaXN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImtleVwiPjR4MTIgOiA8L3NwYW4+UGVyZm9ybSA0IHNldHMgb2YgMTIgcmVwZXRpdGlvbnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwia2V5XCI+NHgxMC0xMiA6IDwvc3Bhbj5QZXJmb3JtIDQgc2V0cyBvZiAxMCB0byAxMiByZXBldGl0aW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJrZXlcIj4zLTR4MTAtMTIgOiA8L3NwYW4+UGVyZm9ybSAzIHRvIDQgc2V0cyBvZiAxMCB0byAxMiByZXBldGl0aW9uczwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBibGFjayBzb2xpZCAycHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAua2V5IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3Jrb3V0Tm90YXRpb24iXX0= */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/fitness/WorkoutNotation.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkoutNotation);

/***/ }),

/***/ "./components/fitness/workoutContainer.module.scss":
/*!*********************************************************!*\
  !*** ./components/fitness/workoutContainer.module.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "rr59MgmrQDHQJU9daK7tA",
	"twoItems": "_2q3h_GAp5wlvpoKETIoRCB",
	"threeItems": "FpG-OlS-atGhnpk7Vx45o",
	"title": "_2VZs6kJFQnVNanwQVXkuya",
	"items": "_2fSSJbgC70ugZeWdcvrHeX",
	"notes": "_2-rkJT6rmiUykFk8ld2mUE"
};

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
  }, props.linkText ? props.linkText : 'View')), props.subtitle && __jsx("div", {
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

/***/ "./components/layouts/FitnessLayout.js":
/*!*********************************************!*\
  !*** ./components/layouts/FitnessLayout.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContentLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentLayout */ "./components/layouts/ContentLayout.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 //React Reveal Animation



const FitnessLayout = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_ContentLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
    className: "jsx-2358999744" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()('hero', 'fitnessHero') || "")
  }), props.children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2358999744"
  }, ".fitnessHero.jsx-2358999744{background-image:url('/static/images/hero/fitness.png');height:600px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9sYXlvdXRzL0ZpdG5lc3NMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXdCLEFBRzZFLHdEQUMzQyxhQUNqQiIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvbGF5b3V0cy9GaXRuZXNzTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbnRlbnRMYXlvdXQgZnJvbSAnLi9Db250ZW50TGF5b3V0J1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5cbi8vUmVhY3QgUmV2ZWFsIEFuaW1hdGlvblxuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xuXG5jb25zdCBGaXRuZXNzTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPENvbnRlbnRMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KCdoZXJvJywgJ2ZpdG5lc3NIZXJvJyl9PjwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9Db250ZW50TGF5b3V0PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5maXRuZXNzSGVybyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvaGVyby9maXRuZXNzLnBuZycpO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9yZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpdG5lc3NMYXlvdXQ7Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/layouts/FitnessLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FitnessLayout);

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
    className: "jsx-4215705811" + " " + 'backtotopButton'
  }, __jsx("div", {
    className: "jsx-4215705811" + " " + 'buttonIcon'
  }), __jsx("div", {
    className: "jsx-4215705811" + " " + 'buttonText'
  }, "Back to Top")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4215705811"
  }, ".backtotopButton.jsx-4215705811{color:black;text-align:center;line-height:45px;background-color:#E5E5E5;height:40px;width:140px;margin:0 auto;margin-top:-50px;margin-bottom:-50px;border-radius:5px;opacity:0.9;box-shadow:2px 2px 5px 0px rgba(0,0,0,0.42);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.backtotopButton.jsx-4215705811:hover{opacity:1;cursor:pointer;}.buttonIcon.jsx-4215705811{margin:0;height:100%;width:40px;background-image:url('/static/images/icons/backtotop.png');background-repeat:no-repeat;background-position:center;background-size:fit;}.buttonText.jsx-4215705811{margin:0;height:100%;width:90px;padding-right:5px;font-size:14px;font-weight:500;line-height:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvQmFja1RvVG9wLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVN3QixBQUlpQyxBQXNCRixBQUtGLEFBWUEsU0FWSSxBQVlELENBbEJJLEVBdEJHLFNBNkJQLEFBWUEsSUFsQmYsS0F0QnFCLEVBOEIwQyxBQVcxQyxlQXZDUSxHQXlDVixlQUNDLE9BekNKLFNBMENLLEdBekNMLE9BMkJnQixLQXpCZCxFQXdDbEIsWUF2Q3FCLFNBeUJVLFFBeEJQLG1CQXlCQSxDQXhCRixrQkFFTixDQXVCaEIsV0FyQmdELDRDQUVoQywwRUFDVyxtR0FDM0IiLCJmaWxlIjoiL1VzZXJzL2FzeXJ1bGhhZmV0enkvRG9jdW1lbnRzL0NTRGV2ZWxvcG1lbnQvV2ViL215VWx0aW1hdGVQb3J0Zm9saW8vdWx0aW1hdGVwb3J0Zm9saW8tbmV4dC9jb21wb25lbnRzL3NoYXJlZC9CYWNrVG9Ub3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEJhY2tUb1RvcCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxyZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17cHJvcHMub25DbGlja30gY2xhc3NOYW1lPSdiYWNrdG90b3BCdXR0b24nPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidXR0b25JY29uJz48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYnV0dG9uVGV4dCc+QmFjayB0byBUb3A8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5iYWNrdG90b3BCdXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IGJsdWUgc29saWQgMXB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTVFNTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcblxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjQyKTtcblxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5iYWNrdG90b3BCdXR0b246aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYnV0dG9uSWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IHdoaXRlIHNvbGlkIDFweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcblxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL2ljb25zL2JhY2t0b3RvcC5wbmcnKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGZpdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYnV0dG9uVGV4dHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJvcmRlcjogYmx1ZSBzb2xpZCAxcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDo1cHg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9yZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhY2tUb1RvcDsiXX0= */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/BackToTop.js */"));
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
      href: "/fitness"
    }, __jsx("a", null, "Fitness")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/travel"
    }, __jsx("a", null, "Travel")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/shared/SuggestPages.js":
/*!*******************************************!*\
  !*** ./components/shared/SuggestPages.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_SuggestPages_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/SuggestPages.module.scss */ "./components/shared/styles/SuggestPages.module.scss");
/* harmony import */ var _styles_SuggestPages_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_SuggestPages_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // takes two props: moreOn and pages

const SuggestPages = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: _styles_SuggestPages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container
  }, __jsx("p", {
    className: _styles_SuggestPages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header
  }, "More on ", props.moreOn, " :"), __jsx("p", null, props.links.map((link, idx) => {
    return __jsx("span", {
      key: idx
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: link.link
    }, __jsx("a", {
      className: _styles_SuggestPages_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link
    }, link.text)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (SuggestPages);
{
  /* <a key={id} className={SuggestPagesStyles.link} href={link} target="_blank">Video{id + 1}{'\t'}</a> */
}

/***/ }),

/***/ "./components/shared/disclaimer.js":
/*!*****************************************!*\
  !*** ./components/shared/disclaimer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Disclaimer = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2273992482" + " " + "disclaimer"
  }, props.text), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2273992482"
  }, ".disclaimer.jsx-2273992482{width:100%;border:red 2px solid;border-radius:5px;margin-bottom:45px;padding:25px;color:red;font-weight:500;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvZGlzY2xhaW1lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRd0IsQUFHMkIsV0FDVyxxQkFDSCxrQkFDQyxtQkFDTixhQUVILFVBQ00sZ0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvZGlzY2xhaW1lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgRGlzY2xhaW1lciA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPlxuICAgICAgICAgICAgICAgIHtwcm9wcy50ZXh0fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgLmRpc2NsYWltZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiByZWQgMnB4IHNvbGlkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG5cbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERpc2NsYWltZXJcbiJdfQ== */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/disclaimer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Disclaimer);

/***/ }),

/***/ "./components/shared/styles/SuggestPages.module.scss":
/*!***********************************************************!*\
  !*** ./components/shared/styles/SuggestPages.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "_12jzFDGTpVvjoXn6YOGCFn",
	"header": "_3KzLW-GTNCne89VdqS16Cj",
	"link": "_2pYabeOjpGZSC6qU5uPfC6"
};

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

/***/ "./pages/fitness/hypertrophy.js":
/*!**************************************!*\
  !*** ./pages/fitness/hypertrophy.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_FitnessLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layouts/FitnessLayout */ "./components/layouts/FitnessLayout.js");
/* harmony import */ var _components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layouts/ContentContainer */ "./components/layouts/ContentContainer.js");
/* harmony import */ var _components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layouts/ContentFragment */ "./components/layouts/ContentFragment.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/fitness/WorkoutContainer */ "./components/fitness/WorkoutContainer.js");
/* harmony import */ var _components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/fitness/WorkoutItem */ "./components/fitness/WorkoutItem.js");
/* harmony import */ var _components_shared_disclaimer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/shared/disclaimer */ "./components/shared/disclaimer.js");
/* harmony import */ var _components_fitness_WorkoutNotation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/fitness/WorkoutNotation */ "./components/fitness/WorkoutNotation.js");
/* harmony import */ var _components_shared_SuggestPages__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/shared/SuggestPages */ "./components/shared/SuggestPages.js");
/* harmony import */ var _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../public/static/data/FitnessItems/hypertrophy */ "./public/static/data/FitnessItems/hypertrophy.json");
var _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/data/FitnessItems/hypertrophy */ "./public/static/data/FitnessItems/hypertrophy.json", 1);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout




 // import components





 //import data




class Hypertrophy extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const headerData = _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11__.header;
    const keyIdeaData = _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11__.keyidea;
    const upperlowerData = _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11__.upperlower;
    const pushpullData = _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11__.pushpull;
    const brosplitData = _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11__.brosplit;
    return __jsx(_components_layouts_FitnessLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(_components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      breadcrumbs: ['Fitness', 'Hypertrophy']
    }, __jsx(_components_shared_disclaimer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      text: _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11__.disclaimer
    }), __jsx(_components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: headerData.title,
      text: headerData.text
    }), __jsx(_components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_4__["default"], {
      subtitle: keyIdeaData.title,
      text: keyIdeaData.text
    }), __jsx(_components_fitness_WorkoutNotation__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(_components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: upperlowerData.title,
      text: upperlowerData.text,
      link: upperlowerData.link,
      linkText: "Read More"
    }, __jsx("div", {
      className: "jsx-1750566886" + " " + "row"
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      bottom: true,
      distance: "20px"
    }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Upper",
      notes: "Rest for 90-120 seconds between each set. TIME YOUR REST. If you decide to do pullups then you can skip the Back Cable Extensions.",
      itemsPerRow: 2,
      theme: "blue"
    }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Warm ups (light cardio)",
      sets: "10-15mins"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Pullups (optional)",
      sets: "4xmax effort"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "DB/BB Bench Press",
      sets: "4x6-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Barbell Rows",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Seated DB Shoulder Press",
      sets: "4x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Back Cable Extensions",
      sets: "3x12-15"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Inclined Skull Crushers",
      sets: "3x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Seated DB curls",
      sets: "3x8-12"
    }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      bottom: true,
      distance: "20px",
      delay: 200
    }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Lower",
      notes: "You may want to rest longer (120-180 seconds) on Squats, expecially if you are lifting heavy. For calf press rest for 30 seconds between sets.",
      itemsPerRow: 2,
      theme: "green"
    }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Warm ups (light cardio)",
      sets: "10-15mins"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "BB Squats",
      sets: "4x6-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Leg Press",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Stiff Legged Deads",
      sets: "4x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Quad Extensions",
      sets: "3x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Hams Extensions",
      sets: "3x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Calf Press",
      sets: "5x10"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Crunches SS w/",
      sets: "3x15"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Plank",
      sets: "3x60 secs"
    })))), __jsx("div", {
      className: "jsx-1750566886" + " " + "row"
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      bottom: true,
      distance: "20px"
    }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Upper (alt)",
      notes: "If you decide to do pullups then you can skip the Close-grip PullDowns.",
      itemsPerRow: 2,
      theme: "blue"
    }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Warm ups (light cardio)",
      sets: "10-15mins"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Pullups (optional)",
      sets: "4xmax effort"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Inclined DB/BB Bench Press",
      sets: "4x6-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Edge BB Rows",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Machine shoulder press",
      sets: "4x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Close-grip PullDowns",
      sets: "3x12-15"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Cable Tricep Pushdowns",
      sets: "3x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "EZ Bar Curls",
      sets: "3x8-12"
    }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      bottom: true,
      distance: "20px",
      delay: 200
    }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Lower (alt)",
      notes: "You may want to train with lower intensity (lower weight) on the second leg day of the week. For lunges, left and then right repetitions are counted as 1 (as pairs). If you cannot do front squats, switch it up with Goblet Squats.If you cannot do full leg raises you can try doing knee raises.",
      itemsPerRow: 2,
      theme: "green"
    }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Warm ups (light cardio)",
      sets: "10-15mins"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Front Squats",
      sets: "4x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Lunges",
      sets: "3x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Hyperextensions",
      sets: "3x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Quad Extensions",
      sets: "3x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Seated Calf Raises",
      sets: "5x10"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Leg/Knee Raises",
      sets: "3x10-15"
    }))))), __jsx(_components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: pushpullData.title,
      text: pushpullData.text,
      link: pushpullData.link,
      linkText: "Read More"
    }, __jsx("div", {
      className: "jsx-1750566886" + " " + "row"
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      bottom: true,
      distance: "20px"
    }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Push",
      notes: "For any press movements feel free to switch up between Dumbells and Barbells. Rest 90-120 seconds rest between sets.",
      itemsPerRow: 3,
      theme: "blue"
    }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Warm ups",
      sets: "10mins"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Incline Bench Press",
      sets: "4x6-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Standing Military Press",
      sets: "4x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Lateral Raises SS w/",
      sets: "3x-10-15"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Triceps Pushdowns",
      sets: "3x8-15"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Pushups",
      sets: "1xTo failure"
    }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      bottom: true,
      distance: "20px",
      delay: 200
    }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Pull",
      notes: "If you can and decide to do the pullups you can skip the Cable Pulldowns. Do Deadlifts only if you know how to perform it with good form.",
      itemsPerRow: 3,
      theme: "green"
    }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Warm ups",
      sets: "10mins"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Pullups (optional)",
      sets: "4xMax effort"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Deadlifts (optional)",
      sets: "1-2x3-5"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Barbell Rows",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Cable Pulldowns",
      sets: "4x12-15"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Cable Back Extensions",
      sets: "3x12-15"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Barbell Curls",
      sets: "3x10-15"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Hammer Curls",
      sets: "3x10-15"
    }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      bottom: true,
      distance: "20px",
      delay: 400
    }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Legs (Quad Dominant)",
      notes: "You may want to rest longer (120-180 seconds) on Squats, expecially if you are lifting heavy. For calf press rest for 30 seconds between sets.",
      itemsPerRow: 3,
      theme: "purple"
    }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Warm ups",
      sets: "10mins"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "BB Squat",
      sets: "4x6-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Leg Press",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Quad Extensions SS w/",
      sets: "3x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Wall Sit",
      sets: "3x30secs"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Calf Presses",
      sets: "5x10"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Leg/Knee Raises SS w/",
      sets: "3x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Plank",
      sets: "60secs"
    })))), __jsx("div", {
      className: "jsx-1750566886" + " " + "row"
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      bottom: true,
      distance: "20px"
    }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Push(alt)",
      notes: "Contrary to belief, Lorem is not simply random text. It has roots of classical Latin literature from 45 BC, making it over 2000 years old.",
      itemsPerRow: 3,
      theme: "blue"
    }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Warm ups",
      sets: "10mins"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Bench Press",
      sets: "4x6-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Machine Shoulder Press",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Lateral Raises SS w/",
      sets: "3x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Rear Delt Raises",
      sets: "3x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Skull Crushers",
      sets: "3x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Tricep pushdowns",
      sets: "3x10-12"
    }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      bottom: true,
      distance: "20px",
      delay: 200
    }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Pull(alt)",
      notes: "If you can and decide to do the pullups you can skip the Close Grip Pulldowns.",
      itemsPerRow: 3,
      theme: "green"
    }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Warm ups",
      sets: "10mins"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Pullups (optional)",
      sets: "4xMax effort"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "DB Rows",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Edge BB Rows",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Close Grip Pulldowns",
      sets: "3x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Cable Back Extensions",
      sets: "3x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Wall DB Curl",
      sets: "3x10-15"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Cable DB Curl",
      sets: "3x10-15"
    }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      bottom: true,
      distance: "20px",
      delay: 400
    }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Leg(Hams Dominant)",
      notes: "For lunges, left and then right repetitions are counted as 1 (as pairs). If you cannot do front squats, switch it up with Goblet Squats.",
      itemsPerRow: 3,
      theme: "purple"
    }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Warm ups",
      sets: "10mins"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Front Squat",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Stiff Legged Deads",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Heel-raised Squats SS w/",
      sets: "3x12-15"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Hams Extension",
      sets: "3x12-15"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Crunches TS w/",
      sets: "3x10-15"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Leg/Knee Raises TS w/",
      sets: "3x10-15"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Plank",
      sets: "60secs"
    }))))), __jsx(_components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: brosplitData.title,
      text: brosplitData.text,
      link: brosplitData.link,
      linkText: "Read More"
    }, __jsx("div", {
      className: "jsx-1750566886" + " " + "row"
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      bottom: true,
      distance: "20px"
    }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Chest Day",
      notes: "Rest for 90-120 secs between sets.",
      itemsPerRow: 3,
      theme: "blue"
    }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Warmups",
      sets: "10-15mins"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Pullups (optional)",
      sets: "4xMax effort"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "BB/DB Incline Press",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "BB/DB Bench Press",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "DB Pullovers",
      sets: "3x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Machine Flys",
      sets: "3x10-15"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Tricep Pushdowns",
      sets: "3x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Cable Crunches",
      sets: "3x8-12"
    }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      bottom: true,
      distance: "20px",
      delay: 200
    }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Leg Day",
      notes: "You may want to rest longer (120-180 seconds) on Squats, expecially if you are lifting heavy. For calf press rest for 30 seconds between sets.",
      itemsPerRow: 3,
      theme: "green"
    }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Warmups",
      sets: "10-15mins"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "BB Squats",
      sets: "4x6-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Leg Press",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Stiff Legged Deads",
      sets: "4x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Quad Extensions",
      sets: "3x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Hams Extensions",
      sets: "3x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Calf Press",
      sets: "5x10"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Knee Raises",
      sets: "3x10-15"
    }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      bottom: true,
      distance: "20px",
      delay: 400
    }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Back Day",
      notes: "The pullups are replacable with the Lat Pulldowns. Do Deadlifts only if you know how to perform it with good form.",
      itemsPerRow: 3,
      theme: "purple"
    }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Warmups",
      sets: "10-15mins"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Pullups Rw/",
      sets: "4xMax effort"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Lat Pulldowns",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Deadlifts (optional)",
      sets: ""
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Barbell Rows",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Edge BB rows Rw/",
      sets: "3x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Cable Back Extensions",
      sets: "3x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Cable DB Curls",
      sets: "3x10-15"
    })))), __jsx("div", {
      className: "jsx-1750566886" + " " + "row"
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      bottom: true,
      distance: "20px"
    }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Shoulders Day",
      notes: "Rest for 90-120 secs between sets.",
      itemsPerRow: 2,
      theme: "blue"
    }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Warmups",
      sets: "10-15mins"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Pullups (optional)",
      sets: "4xMax effort"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Standing Military Press",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Seated DB Shoulder Press Rw/",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Machine Shoulder Press",
      sets: "4x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Lateral Raises SS w/",
      sets: "3x10-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Rear Delt Raises",
      sets: "3x10-12"
    }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      bottom: true,
      distance: "20px",
      delay: 200
    }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Cardio and Abs",
      notes: "Rest around 60-120 seconds in between TriSets. For the cardio do light to medium intensity.",
      itemsPerRow: 2,
      theme: "green"
    }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Warmups",
      sets: "10-15mins"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Pullups (optional)",
      sets: "4xMax effort"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Leg/Knee Raises TS w/",
      sets: "3x6-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Cable Crunches TS w/",
      sets: "3x8-12"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Plank",
      sets: "45-60secs"
    }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
      name: "Run/Bike",
      sets: "30-45mins"
    }))))), __jsx(_components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Closure",
      text: _public_static_data_FitnessItems_hypertrophy__WEBPACK_IMPORTED_MODULE_11__.closure
    }), __jsx(_components_shared_SuggestPages__WEBPACK_IMPORTED_MODULE_10__["default"], {
      moreOn: "Fitness",
      links: [{
        link: '/fitness/fatloss',
        text: 'Fat Loss Programs'
      }, {
        link: '/fitness/fatloss',
        text: 'Fat Loss Programs'
      }, {
        link: '/fitness/iifym',
        text: 'The IIFYM Diet'
      }, {
        link: '/fitness/transformation',
        text: 'My Transformation'
      }]
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1750566886"
    }, ".intro1.jsx-1750566886{background-image:url('/static/images/fitness/achievements/transformation/skinny2.jpeg');}.intro2.jsx-1750566886{background-image:url('/static/images/fitness/achievements/transformation/skinny3.jpeg');}.intro3.jsx-1750566886{background-image:url('/static/images/fitness/achievements/transformation/skinny1.jpg');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvcGFnZXMvZml0bmVzcy9oeXBlcnRyb3BoeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1VzRCLEFBRzZHLEFBSUEsQUFJRCx1RkFDM0YsQ0FSQSxBQUlBIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvcGFnZXMvZml0bmVzcy9oeXBlcnRyb3BoeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLy9pbXBvcnQgbGF5b3V0XG5pbXBvcnQgRml0bmVzc0xheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dHMvRml0bmVzc0xheW91dCdcbmltcG9ydCBDb250ZW50Q29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9Db250ZW50Q29udGFpbmVyJ1xuaW1wb3J0IENvbnRlbnRGcmFnbWVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dHMvQ29udGVudEZyYWdtZW50J1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5cbi8vIGltcG9ydCBjb21wb25lbnRzXG5pbXBvcnQgV29ya291dENvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZpdG5lc3MvV29ya291dENvbnRhaW5lcidcbmltcG9ydCBXb3Jrb3V0SXRlbSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZpdG5lc3MvV29ya291dEl0ZW0nXG5pbXBvcnQgRGlzY2xhaW1lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9kaXNjbGFpbWVyJ1xuaW1wb3J0IFdvcmtvdXROb3RhdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2ZpdG5lc3MvV29ya291dE5vdGF0aW9uJ1xuaW1wb3J0IFN1Z2dlc3RQYWdlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3NoYXJlZC9TdWdnZXN0UGFnZXMnXG5cbi8vaW1wb3J0IGRhdGFcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL3B1YmxpYy9zdGF0aWMvZGF0YS9GaXRuZXNzSXRlbXMvaHlwZXJ0cm9waHknXG5cbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcblxuXG5jbGFzcyBIeXBlcnRyb3BoeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlckRhdGEgPSBkYXRhLmhlYWRlcjtcbiAgICAgICAgY29uc3Qga2V5SWRlYURhdGEgPSBkYXRhLmtleWlkZWE7XG4gICAgICAgIGNvbnN0IHVwcGVybG93ZXJEYXRhID0gZGF0YS51cHBlcmxvd2VyO1xuICAgICAgICBjb25zdCBwdXNocHVsbERhdGEgPSBkYXRhLnB1c2hwdWxsO1xuICAgICAgICBjb25zdCBicm9zcGxpdERhdGEgPSBkYXRhLmJyb3NwbGl0O1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZpdG5lc3NMYXlvdXQ+XG4gICAgICAgICAgICAgICAgPENvbnRlbnRDb250YWluZXIgYnJlYWRjcnVtYnM9e1snRml0bmVzcycsICdIeXBlcnRyb3BoeSddfSA+XG4gICAgICAgICAgICAgICAgICAgIDxEaXNjbGFpbWVyIHRleHQ9e2RhdGEuZGlzY2xhaW1lcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgey8qIEluc2VydCBGcmFnbWVudHMgaGVyZSAqL31cbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCB0aXRsZT17aGVhZGVyRGF0YS50aXRsZX0gdGV4dD17aGVhZGVyRGF0YS50ZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBubyBwaG90b3MgKi99XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPXtrZXlJZGVhRGF0YS50aXRsZX0gdGV4dD17a2V5SWRlYURhdGEudGV4dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyogbm8gcGhvdG9zICovfVxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgICAgICAgICA8V29ya291dE5vdGF0aW9uIC8+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBUaGUgdXBwZXIgbG93ZXIgc3BsaXQgKi99XG4gICAgICAgICAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt1cHBlcmxvd2VyRGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3VwcGVybG93ZXJEYXRhLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXt1cHBlcmxvd2VyRGF0YS5saW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua1RleHQ9XCJSZWFkIE1vcmVcIlxuICAgICAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBXb3Jrb3V0cyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVXBwZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90ZXM9XCJSZXN0IGZvciA5MC0xMjAgc2Vjb25kcyBiZXR3ZWVuIGVhY2ggc2V0LiBUSU1FIFlPVVIgUkVTVC4gSWYgeW91IGRlY2lkZSB0byBkbyBwdWxsdXBzIHRoZW4geW91IGNhbiBza2lwIHRoZSBCYWNrIENhYmxlIEV4dGVuc2lvbnMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zUGVyUm93PXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJibHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJXYXJtIHVwcyAobGlnaHQgY2FyZGlvKVwiIHNldHM9XCIxMC0xNW1pbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJQdWxsdXBzIChvcHRpb25hbClcIiBzZXRzPVwiNHhtYXggZWZmb3J0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiREIvQkIgQmVuY2ggUHJlc3NcIiBzZXRzPVwiNHg2LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiQmFyYmVsbCBSb3dzXCIgc2V0cz1cIjR4OC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIlNlYXRlZCBEQiBTaG91bGRlciBQcmVzc1wiIHNldHM9XCI0eDEwLTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiQmFjayBDYWJsZSBFeHRlbnNpb25zXCIgc2V0cz1cIjN4MTItMTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJJbmNsaW5lZCBTa3VsbCBDcnVzaGVyc1wiIHNldHM9XCIzeDgtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJTZWF0ZWQgREIgY3VybHNcIiBzZXRzPVwiM3g4LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Xb3Jrb3V0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnIGRlbGF5PXsyMDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJMb3dlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3Rlcz1cIllvdSBtYXkgd2FudCB0byByZXN0IGxvbmdlciAoMTIwLTE4MCBzZWNvbmRzKSBvbiBTcXVhdHMsIGV4cGVjaWFsbHkgaWYgeW91IGFyZSBsaWZ0aW5nIGhlYXZ5LiBGb3IgY2FsZiBwcmVzcyByZXN0IGZvciAzMCBzZWNvbmRzIGJldHdlZW4gc2V0cy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNQZXJSb3c9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJXYXJtIHVwcyAobGlnaHQgY2FyZGlvKVwiIHNldHM9XCIxMC0xNW1pbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJCQiBTcXVhdHNcIiBzZXRzPVwiNHg2LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiTGVnIFByZXNzXCIgc2V0cz1cIjR4OC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIlN0aWZmIExlZ2dlZCBEZWFkc1wiIHNldHM9XCI0eDEwLTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiUXVhZCBFeHRlbnNpb25zXCIgc2V0cz1cIjN4MTAtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJIYW1zIEV4dGVuc2lvbnNcIiBzZXRzPVwiM3gxMC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIkNhbGYgUHJlc3NcIiBzZXRzPVwiNXgxMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIkNydW5jaGVzIFNTIHcvXCIgc2V0cz1cIjN4MTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJQbGFua1wiIHNldHM9XCIzeDYwIHNlY3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1dvcmtvdXRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogV29ya291dHMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlVwcGVyIChhbHQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzPVwiSWYgeW91IGRlY2lkZSB0byBkbyBwdWxsdXBzIHRoZW4geW91IGNhbiBza2lwIHRoZSBDbG9zZS1ncmlwIFB1bGxEb3ducy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNQZXJSb3c9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImJsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIldhcm0gdXBzIChsaWdodCBjYXJkaW8pXCIgc2V0cz1cIjEwLTE1bWluc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIlB1bGx1cHMgKG9wdGlvbmFsKVwiIHNldHM9XCI0eG1heCBlZmZvcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJJbmNsaW5lZCBEQi9CQiBCZW5jaCBQcmVzc1wiIHNldHM9XCI0eDYtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJFZGdlIEJCIFJvd3NcIiBzZXRzPVwiNHg4LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiTWFjaGluZSBzaG91bGRlciBwcmVzc1wiIHNldHM9XCI0eDEwLTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiQ2xvc2UtZ3JpcCBQdWxsRG93bnNcIiBzZXRzPVwiM3gxMi0xNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIkNhYmxlIFRyaWNlcCBQdXNoZG93bnNcIiBzZXRzPVwiM3g4LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiRVogQmFyIEN1cmxzXCIgc2V0cz1cIjN4OC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvV29ya291dENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4JyBkZWxheT17MjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTG93ZXIgKGFsdClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90ZXM9XCJZb3UgbWF5IHdhbnQgdG8gdHJhaW4gd2l0aCBsb3dlciBpbnRlbnNpdHkgKGxvd2VyIHdlaWdodCkgb24gdGhlIHNlY29uZCBsZWcgZGF5IG9mIHRoZSB3ZWVrLiBGb3IgbHVuZ2VzLCBsZWZ0IGFuZCB0aGVuIHJpZ2h0IHJlcGV0aXRpb25zIGFyZSBjb3VudGVkIGFzIDEgKGFzIHBhaXJzKS4gSWYgeW91IGNhbm5vdCBkbyBmcm9udCBzcXVhdHMsIHN3aXRjaCBpdCB1cCB3aXRoIEdvYmxldCBTcXVhdHMuSWYgeW91IGNhbm5vdCBkbyBmdWxsIGxlZyByYWlzZXMgeW91IGNhbiB0cnkgZG9pbmcga25lZSByYWlzZXMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zUGVyUm93PXsyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiV2FybSB1cHMgKGxpZ2h0IGNhcmRpbylcIiBzZXRzPVwiMTAtMTVtaW5zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiRnJvbnQgU3F1YXRzXCIgc2V0cz1cIjR4MTAtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJMdW5nZXNcIiBzZXRzPVwiM3gxMC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIkh5cGVyZXh0ZW5zaW9uc1wiIHNldHM9XCIzeDEwLTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiUXVhZCBFeHRlbnNpb25zXCIgc2V0cz1cIjN4MTAtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJTZWF0ZWQgQ2FsZiBSYWlzZXNcIiBzZXRzPVwiNXgxMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIkxlZy9LbmVlIFJhaXNlc1wiIHNldHM9XCIzeDEwLTE1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Xb3Jrb3V0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBUaGUgUHVzaCBQdWxsIExlZyBzcGxpdCAqL31cbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3B1c2hwdWxsRGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3B1c2hwdWxsRGF0YS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17cHVzaHB1bGxEYXRhLmxpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rVGV4dD1cIlJlYWQgTW9yZVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBXb3Jrb3V0cyAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHVzaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3Rlcz1cIkZvciBhbnkgcHJlc3MgbW92ZW1lbnRzIGZlZWwgZnJlZSB0byBzd2l0Y2ggdXAgYmV0d2VlbiBEdW1iZWxscyBhbmQgQmFyYmVsbHMuIFJlc3QgOTAtMTIwIHNlY29uZHMgcmVzdCBiZXR3ZWVuIHNldHMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zUGVyUm93PXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJibHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJXYXJtIHVwc1wiIHNldHM9XCIxMG1pbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJJbmNsaW5lIEJlbmNoIFByZXNzXCIgc2V0cz1cIjR4Ni0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIlN0YW5kaW5nIE1pbGl0YXJ5IFByZXNzXCIgc2V0cz1cIjR4MTAtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJMYXRlcmFsIFJhaXNlcyBTUyB3L1wiIHNldHM9XCIzeC0xMC0xNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIlRyaWNlcHMgUHVzaGRvd25zXCIgc2V0cz1cIjN4OC0xNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIlB1c2h1cHNcIiBzZXRzPVwiMXhUbyBmYWlsdXJlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Xb3Jrb3V0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnIGRlbGF5PXsyMDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzPVwiSWYgeW91IGNhbiBhbmQgZGVjaWRlIHRvIGRvIHRoZSBwdWxsdXBzIHlvdSBjYW4gc2tpcCB0aGUgQ2FibGUgUHVsbGRvd25zLiBEbyBEZWFkbGlmdHMgb25seSBpZiB5b3Uga25vdyBob3cgdG8gcGVyZm9ybSBpdCB3aXRoIGdvb2QgZm9ybS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNQZXJSb3c9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJXYXJtIHVwc1wiIHNldHM9XCIxMG1pbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJQdWxsdXBzIChvcHRpb25hbClcIiBzZXRzPVwiNHhNYXggZWZmb3J0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiRGVhZGxpZnRzIChvcHRpb25hbClcIiBzZXRzPVwiMS0yeDMtNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIkJhcmJlbGwgUm93c1wiIHNldHM9XCI0eDgtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJDYWJsZSBQdWxsZG93bnNcIiBzZXRzPVwiNHgxMi0xNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIkNhYmxlIEJhY2sgRXh0ZW5zaW9uc1wiIHNldHM9XCIzeDEyLTE1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiQmFyYmVsbCBDdXJsc1wiIHNldHM9XCIzeDEwLTE1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiSGFtbWVyIEN1cmxzXCIgc2V0cz1cIjN4MTAtMTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1dvcmtvdXRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCcgZGVsYXk9ezQwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkxlZ3MgKFF1YWQgRG9taW5hbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzPVwiWW91IG1heSB3YW50IHRvIHJlc3QgbG9uZ2VyICgxMjAtMTgwIHNlY29uZHMpIG9uIFNxdWF0cywgZXhwZWNpYWxseSBpZiB5b3UgYXJlIGxpZnRpbmcgaGVhdnkuIEZvciBjYWxmIHByZXNzIHJlc3QgZm9yIDMwIHNlY29uZHMgYmV0d2VlbiBzZXRzLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1BlclJvdz17M31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwicHVycGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJXYXJtIHVwc1wiIHNldHM9XCIxMG1pbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJCQiBTcXVhdFwiIHNldHM9XCI0eDYtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJMZWcgUHJlc3NcIiBzZXRzPVwiNHg4LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiUXVhZCBFeHRlbnNpb25zIFNTIHcvXCIgc2V0cz1cIjN4MTAtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJXYWxsIFNpdFwiIHNldHM9XCIzeDMwc2Vjc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIkNhbGYgUHJlc3Nlc1wiIHNldHM9XCI1eDEwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiTGVnL0tuZWUgUmFpc2VzIFNTIHcvXCIgc2V0cz1cIjN4MTAtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJQbGFua1wiIHNldHM9XCI2MHNlY3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1dvcmtvdXRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlB1c2goYWx0KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3Rlcz1cIkNvbnRyYXJ5IHRvIGJlbGllZiwgTG9yZW0gaXMgbm90IHNpbXBseSByYW5kb20gdGV4dC4gSXQgaGFzIHJvb3RzIG9mIGNsYXNzaWNhbCBMYXRpbiBsaXRlcmF0dXJlIGZyb20gNDUgQkMsIG1ha2luZyBpdCBvdmVyIDIwMDAgeWVhcnMgb2xkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtc1BlclJvdz17M31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiYmx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiV2FybSB1cHNcIiBzZXRzPVwiMTBtaW5zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiQmVuY2ggUHJlc3NcIiBzZXRzPVwiNHg2LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiTWFjaGluZSBTaG91bGRlciBQcmVzc1wiIHNldHM9XCI0eDgtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJMYXRlcmFsIFJhaXNlcyBTUyB3L1wiIHNldHM9XCIzeDEwLTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiUmVhciBEZWx0IFJhaXNlc1wiIHNldHM9XCIzeDEwLTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiU2t1bGwgQ3J1c2hlcnNcIiBzZXRzPVwiM3gxMC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIlRyaWNlcCBwdXNoZG93bnNcIiBzZXRzPVwiM3gxMC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvV29ya291dENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4JyBkZWxheT17MjAwfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHVsbChhbHQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzPVwiSWYgeW91IGNhbiBhbmQgZGVjaWRlIHRvIGRvIHRoZSBwdWxsdXBzIHlvdSBjYW4gc2tpcCB0aGUgQ2xvc2UgR3JpcCBQdWxsZG93bnMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zUGVyUm93PXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiV2FybSB1cHNcIiBzZXRzPVwiMTBtaW5zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiUHVsbHVwcyAob3B0aW9uYWwpXCIgc2V0cz1cIjR4TWF4IGVmZm9ydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIkRCIFJvd3NcIiBzZXRzPVwiNHg4LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiRWRnZSBCQiBSb3dzXCIgc2V0cz1cIjR4OC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIkNsb3NlIEdyaXAgUHVsbGRvd25zXCIgc2V0cz1cIjN4MTAtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJDYWJsZSBCYWNrIEV4dGVuc2lvbnNcIiBzZXRzPVwiM3gxMC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIldhbGwgREIgQ3VybFwiIHNldHM9XCIzeDEwLTE1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiQ2FibGUgREIgQ3VybFwiIHNldHM9XCIzeDEwLTE1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Xb3Jrb3V0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnIGRlbGF5PXs0MDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJMZWcoSGFtcyBEb21pbmFudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90ZXM9XCJGb3IgbHVuZ2VzLCBsZWZ0IGFuZCB0aGVuIHJpZ2h0IHJlcGV0aXRpb25zIGFyZSBjb3VudGVkIGFzIDEgKGFzIHBhaXJzKS4gSWYgeW91IGNhbm5vdCBkbyBmcm9udCBzcXVhdHMsIHN3aXRjaCBpdCB1cCB3aXRoIEdvYmxldCBTcXVhdHMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zUGVyUm93PXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJwdXJwbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIldhcm0gdXBzXCIgc2V0cz1cIjEwbWluc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIkZyb250IFNxdWF0XCIgc2V0cz1cIjR4OC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIlN0aWZmIExlZ2dlZCBEZWFkc1wiIHNldHM9XCI0eDgtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJIZWVsLXJhaXNlZCBTcXVhdHMgU1Mgdy9cIiBzZXRzPVwiM3gxMi0xNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIkhhbXMgRXh0ZW5zaW9uXCIgc2V0cz1cIjN4MTItMTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJDcnVuY2hlcyBUUyB3L1wiIHNldHM9XCIzeDEwLTE1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiTGVnL0tuZWUgUmFpc2VzIFRTIHcvXCIgc2V0cz1cIjN4MTAtMTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJQbGFua1wiIHNldHM9XCI2MHNlY3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1dvcmtvdXRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBUaGUgQnJvIHNwbGl0ICovfVxuICAgICAgICAgICAgICAgICAgICA8Q29udGVudEZyYWdtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17YnJvc3BsaXREYXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17YnJvc3BsaXREYXRhLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXticm9zcGxpdERhdGEubGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtUZXh0PVwiUmVhZCBNb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogV29ya291dHMgKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNoZXN0IERheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3Rlcz1cIlJlc3QgZm9yIDkwLTEyMCBzZWNzIGJldHdlZW4gc2V0cy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNQZXJSb3c9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImJsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIldhcm11cHNcIiBzZXRzPVwiMTAtMTVtaW5zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiUHVsbHVwcyAob3B0aW9uYWwpXCIgc2V0cz1cIjR4TWF4IGVmZm9ydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIkJCL0RCIEluY2xpbmUgUHJlc3NcIiBzZXRzPVwiNHg4LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiQkIvREIgQmVuY2ggUHJlc3NcIiBzZXRzPVwiNHg4LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiREIgUHVsbG92ZXJzXCIgc2V0cz1cIjN4OC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIk1hY2hpbmUgRmx5c1wiIHNldHM9XCIzeDEwLTE1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiVHJpY2VwIFB1c2hkb3duc1wiIHNldHM9XCIzeDgtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJDYWJsZSBDcnVuY2hlc1wiIHNldHM9XCIzeDgtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1dvcmtvdXRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCcgZGVsYXk9ezIwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkxlZyBEYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90ZXM9XCJZb3UgbWF5IHdhbnQgdG8gcmVzdCBsb25nZXIgKDEyMC0xODAgc2Vjb25kcykgb24gU3F1YXRzLCBleHBlY2lhbGx5IGlmIHlvdSBhcmUgbGlmdGluZyBoZWF2eS4gRm9yIGNhbGYgcHJlc3MgcmVzdCBmb3IgMzAgc2Vjb25kcyBiZXR3ZWVuIHNldHMuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zUGVyUm93PXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJncmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiV2FybXVwc1wiIHNldHM9XCIxMC0xNW1pbnNcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJCQiBTcXVhdHNcIiBzZXRzPVwiNHg2LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiTGVnIFByZXNzXCIgc2V0cz1cIjR4OC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIlN0aWZmIExlZ2dlZCBEZWFkc1wiIHNldHM9XCI0eDEwLTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiUXVhZCBFeHRlbnNpb25zXCIgc2V0cz1cIjN4MTAtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJIYW1zIEV4dGVuc2lvbnNcIiBzZXRzPVwiM3gxMC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIkNhbGYgUHJlc3NcIiBzZXRzPVwiNXgxMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIktuZWUgUmFpc2VzXCIgc2V0cz1cIjN4MTAtMTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1dvcmtvdXRDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlIGJvdHRvbSBkaXN0YW5jZT0nMjBweCcgZGVsYXk9ezQwMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkJhY2sgRGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdGVzPVwiVGhlIHB1bGx1cHMgYXJlIHJlcGxhY2FibGUgd2l0aCB0aGUgTGF0IFB1bGxkb3ducy4gRG8gRGVhZGxpZnRzIG9ubHkgaWYgeW91IGtub3cgaG93IHRvIHBlcmZvcm0gaXQgd2l0aCBnb29kIGZvcm0uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zUGVyUm93PXszfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJwdXJwbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIldhcm11cHNcIiBzZXRzPVwiMTAtMTVtaW5zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiUHVsbHVwcyBSdy9cIiBzZXRzPVwiNHhNYXggZWZmb3J0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiTGF0IFB1bGxkb3duc1wiIHNldHM9XCI0eDgtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJEZWFkbGlmdHMgKG9wdGlvbmFsKVwiIHNldHM9XCJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJCYXJiZWxsIFJvd3NcIiBzZXRzPVwiNHg4LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiRWRnZSBCQiByb3dzIFJ3L1wiIHNldHM9XCIzeDgtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJDYWJsZSBCYWNrIEV4dGVuc2lvbnNcIiBzZXRzPVwiM3g4LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiQ2FibGUgREIgQ3VybHNcIiBzZXRzPVwiM3gxMC0xNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvV29ya291dENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGUgYm90dG9tIGRpc3RhbmNlPScyMHB4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2hvdWxkZXJzIERheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3Rlcz1cIlJlc3QgZm9yIDkwLTEyMCBzZWNzIGJldHdlZW4gc2V0cy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNQZXJSb3c9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImJsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIldhcm11cHNcIiBzZXRzPVwiMTAtMTVtaW5zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiUHVsbHVwcyAob3B0aW9uYWwpXCIgc2V0cz1cIjR4TWF4IGVmZm9ydFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIlN0YW5kaW5nIE1pbGl0YXJ5IFByZXNzXCIgc2V0cz1cIjR4OC0xMlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIlNlYXRlZCBEQiBTaG91bGRlciBQcmVzcyBSdy9cIiBzZXRzPVwiNHg4LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiTWFjaGluZSBTaG91bGRlciBQcmVzc1wiIHNldHM9XCI0eDgtMTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJMYXRlcmFsIFJhaXNlcyBTUyB3L1wiIHNldHM9XCIzeDEwLTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiUmVhciBEZWx0IFJhaXNlc1wiIHNldHM9XCIzeDEwLTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Xb3Jrb3V0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZSBib3R0b20gZGlzdGFuY2U9JzIwcHgnIGRlbGF5PXsyMDB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDYXJkaW8gYW5kIEFic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3Rlcz1cIlJlc3QgYXJvdW5kIDYwLTEyMCBzZWNvbmRzIGluIGJldHdlZW4gVHJpU2V0cy4gRm9yIHRoZSBjYXJkaW8gZG8gbGlnaHQgdG8gbWVkaXVtIGludGVuc2l0eS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXNQZXJSb3c9ezJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImdyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJXYXJtdXBzXCIgc2V0cz1cIjEwLTE1bWluc1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V29ya291dEl0ZW0gbmFtZT1cIlB1bGx1cHMgKG9wdGlvbmFsKVwiIHNldHM9XCI0eE1heCBlZmZvcnRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdvcmtvdXRJdGVtIG5hbWU9XCJMZWcvS25lZSBSYWlzZXMgVFMgdy9cIiBzZXRzPVwiM3g2LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiQ2FibGUgQ3J1bmNoZXMgVFMgdy9cIiBzZXRzPVwiM3g4LTEyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiUGxhbmtcIiBzZXRzPVwiNDUtNjBzZWNzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXb3Jrb3V0SXRlbSBuYW1lPVwiUnVuL0Jpa2VcIiBzZXRzPVwiMzAtNDVtaW5zXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Xb3Jrb3V0Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCB0aXRsZT1cIkNsb3N1cmVcIiB0ZXh0PXtkYXRhLmNsb3N1cmV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIG5vIHBob3RvcyAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9Db250ZW50RnJhZ21lbnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFN1Z2dlc3RQYWdlcyBtb3JlT249XCJGaXRuZXNzXCIgbGlua3M9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL2ZpdG5lc3MvZmF0bG9zcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0ZhdCBMb3NzIFByb2dyYW1zJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL2ZpdG5lc3MvZmF0bG9zcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0ZhdCBMb3NzIFByb2dyYW1zJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL2ZpdG5lc3MvaWlmeW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdUaGUgSUlGWU0gRGlldCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogJy9maXRuZXNzL3RyYW5zZm9ybWF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTXkgVHJhbnNmb3JtYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdfSAvPlxuICAgICAgICAgICAgICAgIDwvQ29udGVudENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmludHJvMSB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvdHJhbnNmb3JtYXRpb24vc2tpbm55Mi5qcGVnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmludHJvMiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvdHJhbnNmb3JtYXRpb24vc2tpbm55My5qcGVnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmludHJvMyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvZml0bmVzcy9hY2hpZXZlbWVudHMvdHJhbnNmb3JtYXRpb24vc2tpbm55MS5qcGcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9GaXRuZXNzTGF5b3V0ID5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSHlwZXJ0cm9waHlcblxuXG4vLyBhcnRpY2xlcyBpZGVhc1xuLy8gd2h5IHNvbWUgYXRobGV0ZXMgaW1wcm92ZSB0d2ljZSBhcyB5b3UgZG86XG4vLyAxLiBnZW5ldGljc1xuLy8gMi4gRHJ1Z3Ncbi8vIDMuIFRyYWluaW5nIGFuZCBjb21taXRtZW50XG4vLyA0LiBEaWV0Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/pages/fitness/hypertrophy.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Hypertrophy); // articles ideas
// why some athletes improve twice as you do:
// 1. genetics
// 2. Drugs
// 3. Training and commitment
// 4. Diet

/***/ }),

/***/ "./public/static/data/FitnessItems/hypertrophy.json":
/*!**********************************************************!*\
  !*** ./public/static/data/FitnessItems/hypertrophy.json ***!
  \**********************************************************/
/*! exports provided: disclaimer, header, keyidea, upperlower, pushpull, brosplit, closure, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"disclaimer\":\"The author of this website is not a qualified, certified or licensed personal trainer nor is he a dietician or a nutritionist. The author has no expertise in diagnosing, examining, or treating medical conditions of any kind, or in determining the effect of any specific exercise on a medical condition. You should understand that when participating in any of the published diet and/or exercise programs, there is the possibility of physical and/or health injury. Please consult your doctor or physician before engaging in any of the exercise or diet programs published in this website. If you do, you agree that you do so at your own risk, are voluntarily participating in these activities, and assume all risk of injury and/or harm to yourself.\",\"header\":{\"title\":\"Hypertrophy Programs\",\"text\":\"Throughout the years of going to the gym, I have always focused on building muscle mass and size. In scientific terms, this is called Hypertrophy. Contrary to popular belief, a good hypertrophy training does not necessarily mean training with heavier weights. Weights should be light enough for you to lift around 8-12 repetitions (reps) for 3-4 sets. This is the biggest mistake new lifters usually make: lifting with a weight that is too heavy for them to execute with proper form. I admit to have done this mistake myself, which affected my optimal growth in the first few months(or perhaps years). The body does not care about the numbers on your metal plate, it only knows intensity. Hence, before you decide to start training, leave your ego out the door. I have engaged in various training programs, but three have become my favourite, due to their effectiveness on my body: The Upper/Lower split, the Push Pull Leg, and the all-time favourite, the famous/infamous 'Bro' Split.\"},\"keyidea\":{\"title\":\"Key Concepts\",\"text\":\"The main idea is to train AT MAXIMUM 4-5 workouts for each body part, with each workout having 3-4 sets. I have met people who trained 8 workouts for chest, and I can assure you that by doing so, you are only wasting your time. Try to keep sets around 3-4, and reps around 8-12, although it is always recommended to change things up to 'shock' the muscle by either increasing your intensity(weight) and reducing reps (down to 6), but slightly increasing rest time, or lowering the weight and hit up to 16 repetitions. In general, we aim to train each major muscle groups of each body part every week, incorporating compound movements as a highest priority. Finally, for an average Joe like me, time is gold. Hence, aim to complete your workout around 60-90 minutes, any longer than this your workouts would be less efficient, although for Strength training you do need to train longer, due to the longer rest. Notice that in the beginning of each workout, I include a 10-15 minutes of light cardio warmups. THIS IS IMPORTANT. Notice as well at the start of every upper body workout I included an optional pullup training using max effort. This was how I maintained my pullup repetitions up (around 10-12). In my experience, pulldowns does not help with your pullup strength.\"},\"upperlower\":{\"title\":\"The Upper Lower Split\",\"link\":\"https://www.muscleandstrength.com/workouts/upper-lower-4-day-gym-bodybuilding-workout\",\"text\":\"The main idea of the Upper-Lower split is to train upper body on one day, and train legs on the next. Then rest for one day, then do an alternate version of your upper body routine on the next day, followed by an alternate version of your legs routine on the day after. Then rest for 2 days. You can also do light cardio on one of the 2 rest days. So in a week you would do: Upper -> Lower -> Rest -> Upper(alt) -> Lower(alt) -> rest -> rest. For each body part, we only train 1 (at most 2) major workouts. Hence, your are basically hitting the same body part twice in a week. And yes, in this program you train legs twice in a week, which is probably why most people in the gym refuse to commit to a more effective program such as this one, and almost always going for the bro split. One suggestion of each routine can be found below. If you are not sure how to perform any of these workouts, please search them on Google or Youtube.\"},\"pushpull\":{\"title\":\"The Push Pull Leg Split\",\"link\":\"https://builtwithscience.com/push-pull-legs-routine/\",\"text\":\"This routine is another one of those scientifically-proven-to-be-effective programs out there. You are able to train with either a three days per week routine, or a six days per week (in case you decide to get more serious). For the three-day routine, you have the push workout for one day, then rest on the next, then pull day, then rest, and so on. So in a week, it would be something like Push -> Rest -> Pull -> Rest -> Legs -> rest -> rest. For the six days routine on the other hand, it would look something like Push -> Pull -> Leg -> Rest -> Push -> Pull -> Leg, with the second push-pull-leg cycle being the alternate and lighter version of the first. One suggestion for each of this routines are as below. You can also alternate the original Push -> Pull -> Leg with their alternate versions on a weekly basis if you plan to train three days a week. Again, If you are not sure how to perform any of these workouts, please search them on Google or Youtube. (IMPORTANT): Perform deadlifts only if you are able to do it in good form. Warm up your deads with light weight, then work your way up to 1-2 heavy sets. If the last sentence you read does not make sense to you, its best to skip it altogether.\"},\"brosplit\":{\"title\":\"The Bro Split\",\"link\":\"https://www.t-nation.com/training/tip-pros-and-cons-of-the-bro-split\",\"text\":\"For those who do not already know, the 'Bro' split is the one where you only train one body part per day of training. For example, on Mondays, you train chest, then on Wednesdays, you train back etc. This split seems to be the most famous (at least in my experience) split amongst the gym-goers. Based on my experience, the 'Bro Split' is the least effective (compared to the other two above), since it only hits the major muscle groups once in a week. Besides that, since you only train 1 muscle group per week, you need up to 6 days in a week to cover all major muscle groups of the body, which in my opinion, is highly inefficient. In contrast, the U/L split only requires 2 days and PPL requires 3. Drugs and genetics aside, this may be one of the reasons why you notice some athletes grow (up to a certain point) twice as fast as you do- because their training is designed in such a way that it hits the major muscle groups multiple times in a week! (Note: higher frequency does not always mean better, and having rest days between every split cycle is crucial to ensure optimal muscle growth. I will talk more about this in the Articles section). That being said, the Bro Split has been a personal favourite for many athletes. I do incorporate Bro Splits in my routine as well, from time to time, especially when I feel like I need to take a break from U/L and PPL splits. The following depicts the Bro Split that I normally do, in order from left to right. Notice that I trained pullups on all days that I trained the upper body. That was how I trained my pullups, bringing my max repetitions from 8 to 15 in a few months.\"},\"closure\":\"No matter what split you are on, the most important thing is to commit yourself to the training routine. This is why it is crucial to pick a sustainable split program based on your daily activities. Picking a 6-days a week PPL split when you're just starting out and having a 9am-9pm job is certainly not a very good idea, as you will end up burnt out and breaking your commitment way too quickly. Start things out slowly (for example a 2-day a week U/L split), then slowly build your commitment up to the desired level (4-day U/L or 6-day PPL or 5-day Bro Split - that is, IF you want to). Also, remember to switch things up every now and then. Performing the same workouts and the same split for more than three months could hinder muscular growth. Most importantly, remember to keep your food intake on point, which I will be talking about in the Diet section. Without proper nutrition, your time in the gym may all be completely wasted.\"}");

/***/ }),

/***/ 7:
/*!********************************************!*\
  !*** multi ./pages/fitness/hypertrophy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/pages/fitness/hypertrophy.js */"./pages/fitness/hypertrophy.js");


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
//# sourceMappingURL=hypertrophy.js.map