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
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "react-spring");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ContentContainer = props => {
  return __jsx("div", {
    className: "contentContainer"
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (ContentContainer);
{}
/* <VisibilitySensor>
   {({ isVisible }) =>
       <div className='contentContainer'>
           {props.children}
       </div>
   }
</VisibilitySensor > */
// {this.state.visible &&
//     this.props.children
// }

{
  /* <VisibilitySensor
  partialVisibility
  offset={{ top: 100, bottom: 100 }}
  onChange={(isVisible) => {
     this.setState({ visible: isVisible })
     // console.log('Element is now %s', this.state.visible);
  }}
  > */
}
{}
/* <style jsx>{`
                       .contentTransition {
                           opacity: ${this.state.visible ? 1 : 0};
                           transition: opacity 0.5s linear;
                       }
                   `}</style> */
// const springProps = useSpring(
//     {
//         config: { duration: 350 },
//         opacity: 1,
//         transform: 'translateY(0px)',
//         from: {
//             opacity: 0,
//             transform: 'translateY(20px)'
//         }
//     }
// )

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
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contentFragment.module.scss */ "./components/layouts/contentFragment.module.scss");
/* harmony import */ var _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //import style



const ContentFragment = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.title && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.fragmentHeader
  }, props.title, ' ', __jsx("span", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.time
  }, "(", props.time, ")")), props.link && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.linkContainer
  }, __jsx("a", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,
    href: props.link,
    target: "_blank"
  }, "View")), props.subtitle && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.subHeader
  }, __jsx("h5", null, props.subtitle)), __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text
  }, props.text), props.children && __jsx("div", {
    className: _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.photoContainer
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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ContentLayout = props => {
  return __jsx(_BaseLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (ContentLayout); // {props.children.map((child, idx) => {
//     console.log(child.props)
//     return (
//         <section key={idx} className='contentSection'>
//             {/* {child.props.children.map((grandchild) => {
//                 return (
//                     { grandchild }
//                 )
//             })} */}
//         </section>
//     )
// })}

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
	"photoContainer": "_3PguO65FD0ORTn80WDnOfK",
	"link": "QhwHN4AQ2F_1130v8HC6l"
};

/***/ }),

/***/ "./components/projects/ProjectChatbot.js":
/*!***********************************************!*\
  !*** ./components/projects/ProjectChatbot.js ***!
  \***********************************************/
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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout




const ProjectChatbot = props => {
  const project = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: project.title,
    time: project.time,
    text: project.intro
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2214684551"
  }, ".intro1.jsx-2214684551{-webkit-flex:0.18;-ms-flex:0.18;flex:0.18;background-image:url('/static/images/projects/rpi/intro1.png');}.intro2.jsx-2214684551{-webkit-flex:0.80;-ms-flex:0.80;flex:0.80;background-image:url('/static/images/projects/rpi/intro2.png');}.main1.jsx-2214684551{-webkit-flex:0.56;-ms-flex:0.56;flex:0.56;background-image:url('/static/images/projects/rpi/main1.png');}.main2.jsx-2214684551{-webkit-flex:0.20;-ms-flex:0.20;flex:0.20;background-image:url('/static/images/projects/rpi/main2.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0Q2hhdGJvdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjd0IsQUFHK0IsQUFLQSxBQUtBLEFBS0EsMENBZHFELEFBS0EsQUFLRCxBQUtBLDhEQUpsRSxBQUtBLENBZkEsQUFLQSIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdENoYXRib3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vaW1wb3J0IGxheW91dFxuaW1wb3J0IENvbnRlbnRGcmFnbWVudCBmcm9tICcuLi9sYXlvdXRzL0NvbnRlbnRGcmFnbWVudCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCBQcm9qZWN0Q2hhdGJvdCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9wcy5kYXRhXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCB0aXRsZT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICB0aW1lPXtwcm9qZWN0LnRpbWV9IHRleHQ9e3Byb2plY3QuaW50cm99PlxuXG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW50cm8xIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC4xODtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvaW50cm8xLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbnRybzIge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwLjgwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL3JwaS9pbnRybzIucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4xIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC41NjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvbWFpbjEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4yIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC4yMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvbWFpbjIucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvcmVhY3QuRnJhZ21lbnQgPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENoYXRib3Q7Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/projects/ProjectChatbot.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectChatbot);

/***/ }),

/***/ "./components/projects/ProjectFunFactory.js":
/*!**************************************************!*\
  !*** ./components/projects/ProjectFunFactory.js ***!
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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout




const ProjectFunFactory = props => {
  const project = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: project.title,
    time: project.time,
    text: project.intro
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2214684551"
  }, ".intro1.jsx-2214684551{-webkit-flex:0.18;-ms-flex:0.18;flex:0.18;background-image:url('/static/images/projects/rpi/intro1.png');}.intro2.jsx-2214684551{-webkit-flex:0.80;-ms-flex:0.80;flex:0.80;background-image:url('/static/images/projects/rpi/intro2.png');}.main1.jsx-2214684551{-webkit-flex:0.56;-ms-flex:0.56;flex:0.56;background-image:url('/static/images/projects/rpi/main1.png');}.main2.jsx-2214684551{-webkit-flex:0.20;-ms-flex:0.20;flex:0.20;background-image:url('/static/images/projects/rpi/main2.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0RnVuRmFjdG9yeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjd0IsQUFHK0IsQUFLQSxBQUtBLEFBS0EsMENBZHFELEFBS0EsQUFLRCxBQUtBLDhEQUpsRSxBQUtBLENBZkEsQUFLQSIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdEZ1bkZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vaW1wb3J0IGxheW91dFxuaW1wb3J0IENvbnRlbnRGcmFnbWVudCBmcm9tICcuLi9sYXlvdXRzL0NvbnRlbnRGcmFnbWVudCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCBQcm9qZWN0RnVuRmFjdG9yeSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9wcy5kYXRhXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCB0aXRsZT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICB0aW1lPXtwcm9qZWN0LnRpbWV9IHRleHQ9e3Byb2plY3QuaW50cm99PlxuXG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW50cm8xIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC4xODtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvaW50cm8xLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbnRybzIge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwLjgwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL3JwaS9pbnRybzIucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4xIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC41NjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvbWFpbjEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4yIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC4yMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvbWFpbjIucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvcmVhY3QuRnJhZ21lbnQgPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdEZ1bkZhY3Rvcnk7Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/projects/ProjectFunFactory.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectFunFactory);

/***/ }),

/***/ "./components/projects/ProjectRecipeBook.js":
/*!**************************************************!*\
  !*** ./components/projects/ProjectRecipeBook.js ***!
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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout




const ProjectRecipeBook = props => {
  const project = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: project.title,
    time: project.time,
    text: project.intro
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2214684551"
  }, ".intro1.jsx-2214684551{-webkit-flex:0.18;-ms-flex:0.18;flex:0.18;background-image:url('/static/images/projects/rpi/intro1.png');}.intro2.jsx-2214684551{-webkit-flex:0.80;-ms-flex:0.80;flex:0.80;background-image:url('/static/images/projects/rpi/intro2.png');}.main1.jsx-2214684551{-webkit-flex:0.56;-ms-flex:0.56;flex:0.56;background-image:url('/static/images/projects/rpi/main1.png');}.main2.jsx-2214684551{-webkit-flex:0.20;-ms-flex:0.20;flex:0.20;background-image:url('/static/images/projects/rpi/main2.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0UmVjaXBlQm9vay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFjd0IsQUFHK0IsQUFLQSxBQUtBLEFBS0EsMENBZHFELEFBS0EsQUFLRCxBQUtBLDhEQUpsRSxBQUtBLENBZkEsQUFLQSIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdFJlY2lwZUJvb2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vaW1wb3J0IGxheW91dFxuaW1wb3J0IENvbnRlbnRGcmFnbWVudCBmcm9tICcuLi9sYXlvdXRzL0NvbnRlbnRGcmFnbWVudCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCBQcm9qZWN0UmVjaXBlQm9vayA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9wcy5kYXRhXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCB0aXRsZT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICB0aW1lPXtwcm9qZWN0LnRpbWV9IHRleHQ9e3Byb2plY3QuaW50cm99PlxuXG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW50cm8xIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC4xODtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvaW50cm8xLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbnRybzIge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwLjgwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL3JwaS9pbnRybzIucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4xIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC41NjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvbWFpbjEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4yIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC4yMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvbWFpbjIucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvcmVhY3QuRnJhZ21lbnQgPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFJlY2lwZUJvb2s7Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/projects/ProjectRecipeBook.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectRecipeBook);

/***/ }),

/***/ "./components/projects/ProjectRpi.js":
/*!*******************************************!*\
  !*** ./components/projects/ProjectRpi.js ***!
  \*******************************************/
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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout




const ProjectRpi = props => {
  const project = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: project.title,
    time: project.time,
    text: project.intro
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "intro1") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "intro2") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Main Development",
    text: project.main
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main1") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Technology",
    text: project.technology
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main1") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Results",
    text: project.results
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main1") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  })), __jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main1") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Videos",
    text: "Some videos related to this project can be found here: <a href=''>Video1</a> <a href=''>Video2</a> <a href=''>Video3</a>"
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2214684551"
  }, ".intro1.jsx-2214684551{-webkit-flex:0.18;-ms-flex:0.18;flex:0.18;background-image:url('/static/images/projects/rpi/intro1.png');}.intro2.jsx-2214684551{-webkit-flex:0.80;-ms-flex:0.80;flex:0.80;background-image:url('/static/images/projects/rpi/intro2.png');}.main1.jsx-2214684551{-webkit-flex:0.56;-ms-flex:0.56;flex:0.56;background-image:url('/static/images/projects/rpi/main1.png');}.main2.jsx-2214684551{-webkit-flex:0.20;-ms-flex:0.20;flex:0.20;background-image:url('/static/images/projects/rpi/main2.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0UnBpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEd0IsQUFHK0IsQUFLQSxBQUtBLEFBS0EsMENBZHFELEFBS0EsQUFLRCxBQUtBLDhEQUpsRSxBQUtBLENBZkEsQUFLQSIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdFJwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCdcblxuLy9pbXBvcnQgbGF5b3V0XG5pbXBvcnQgQ29udGVudEZyYWdtZW50IGZyb20gJy4uL2xheW91dHMvQ29udGVudEZyYWdtZW50J1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5cbmNvbnN0IFByb2plY3RScGkgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvcHMuZGF0YVxuICAgIHJldHVybiAoXG4gICAgICAgIDxyZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgdGl0bGU9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgdGltZT17cHJvamVjdC50aW1lfSB0ZXh0PXtwcm9qZWN0LmludHJvfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9cIiwgXCJpbnRybzFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1wiLCBcImludHJvMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIk1haW4gRGV2ZWxvcG1lbnRcIlxuICAgICAgICAgICAgICAgIHRleHQ9e3Byb2plY3QubWFpbn0+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvXCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1wiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9cIiwgXCJtYWluMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIlRlY2hub2xvZ3lcIlxuICAgICAgICAgICAgICAgIHRleHQ9e3Byb2plY3QudGVjaG5vbG9neX0+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvXCIsIFwibWFpbjFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1wiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9cIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cblxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIlJlc3VsdHNcIlxuICAgICAgICAgICAgICAgIHRleHQ9e3Byb2plY3QucmVzdWx0c30+XG5cbiAgICAgICAgICAgICAgICB7LyogUGhvdG9zICovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvXCIsIFwibWFpbjFcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1wiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9cIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9cIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvXCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1wiLCBcIm1haW4xXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICB7LyogVE8gRE86IG1ha2UgYSBmcmFnbWVudCB0byBzdG9yZSBsaW5rcyBpbnN0ZWFkICovfVxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIlZpZGVvc1wiXG4gICAgICAgICAgICAgICAgdGV4dD1cIlNvbWUgdmlkZW9zIHJlbGF0ZWQgdG8gdGhpcyBwcm9qZWN0IGNhbiBiZSBmb3VuZCBoZXJlOiA8YSBocmVmPScnPlZpZGVvMTwvYT4gPGEgaHJlZj0nJz5WaWRlbzI8L2E+IDxhIGhyZWY9Jyc+VmlkZW8zPC9hPlwiPlxuICAgICAgICAgICAgICAgIHsvKiBObyBQaG90b3MgKi99XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW50cm8xIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC4xODtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvaW50cm8xLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbnRybzIge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwLjgwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL3JwaS9pbnRybzIucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4xIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC41NjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvbWFpbjEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4yIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC4yMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvbWFpbjIucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvcmVhY3QuRnJhZ21lbnQgPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFJwaTsiXX0= */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/projects/ProjectRpi.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectRpi);

/***/ }),

/***/ "./components/projects/ProjectWeddingPlanner.js":
/*!******************************************************!*\
  !*** ./components/projects/ProjectWeddingPlanner.js ***!
  \******************************************************/
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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout




const ProjectWeddingPlanner = props => {
  const project = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: project.title,
    time: project.time,
    text: project.intro,
    link: project.link
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "intro1") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "intro2") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Main Development",
    text: project.main
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main1") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Technology",
    text: project.technology
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main1") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Results",
    text: project.results
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main1") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2214684551"
  }, ".intro1.jsx-2214684551{-webkit-flex:0.18;-ms-flex:0.18;flex:0.18;background-image:url('/static/images/projects/rpi/intro1.png');}.intro2.jsx-2214684551{-webkit-flex:0.80;-ms-flex:0.80;flex:0.80;background-image:url('/static/images/projects/rpi/intro2.png');}.main1.jsx-2214684551{-webkit-flex:0.56;-ms-flex:0.56;flex:0.56;background-image:url('/static/images/projects/rpi/main1.png');}.main2.jsx-2214684551{-webkit-flex:0.20;-ms-flex:0.20;flex:0.20;background-image:url('/static/images/projects/rpi/main2.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0V2VkZGluZ1BsYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0R3QixBQUcrQixBQUtBLEFBS0EsQUFLQSwwQ0FkcUQsQUFLQSxBQUtELEFBS0EsOERBSmxFLEFBS0EsQ0FmQSxBQUtBIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0V2VkZGluZ1BsYW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vaW1wb3J0IGxheW91dFxuaW1wb3J0IENvbnRlbnRGcmFnbWVudCBmcm9tICcuLi9sYXlvdXRzL0NvbnRlbnRGcmFnbWVudCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCBQcm9qZWN0V2VkZGluZ1BsYW5uZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvcHMuZGF0YVxuICAgIHJldHVybiAoXG4gICAgICAgIDxyZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgdGl0bGU9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgdGltZT17cHJvamVjdC50aW1lfSB0ZXh0PXtwcm9qZWN0LmludHJvfSBsaW5rPXtwcm9qZWN0Lmxpbmt9PlxuXG4gICAgICAgICAgICAgICAgey8qIFBob3RvcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1wiLCBcImludHJvMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvXCIsIFwiaW50cm8yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiTWFpbiBEZXZlbG9wbWVudFwiXG4gICAgICAgICAgICAgICAgdGV4dD17cHJvamVjdC5tYWlufT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9cIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvXCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1wiLCBcIm1haW4xXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiVGVjaG5vbG9neVwiXG4gICAgICAgICAgICAgICAgdGV4dD17cHJvamVjdC50ZWNobm9sb2d5fT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9cIiwgXCJtYWluMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvXCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1wiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiUmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgdGV4dD17cHJvamVjdC5yZXN1bHRzfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9cIiwgXCJtYWluMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvXCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1wiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5pbnRybzEge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwLjE4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL3JwaS9pbnRybzEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmludHJvMiB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAuODA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3N0YXRpYy9pbWFnZXMvcHJvamVjdHMvcnBpL2ludHJvMi5wbmcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWFpbjEge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwLjU2O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL3JwaS9tYWluMS5wbmcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWFpbjIge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwLjIwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL3JwaS9tYWluMi5wbmcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9yZWFjdC5GcmFnbWVudCA+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0V2VkZGluZ1BsYW5uZXI7Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/projects/ProjectWeddingPlanner.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectWeddingPlanner);

/***/ }),

/***/ "./components/projects/ProjectWifePort.js":
/*!************************************************!*\
  !*** ./components/projects/ProjectWifePort.js ***!
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


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import layout




const ProjectWifePort = props => {
  const project = props.data;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: project.title,
    time: project.time,
    text: project.intro,
    link: project.link
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "intro1") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "intro2") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Main Development",
    text: project.main
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main1") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Technology",
    text: project.technology
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main1") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Results",
    text: project.results
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main1") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-2214684551" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()("rowPhoto", "main2") || "")
  }))), __jsx(_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subtitle: "Videos",
    text: "Some videos related to this project can be found here: <a href=''>Video1</a> <a href=''>Video2</a> <a href=''>Video3</a>"
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2214684551"
  }, ".intro1.jsx-2214684551{-webkit-flex:0.18;-ms-flex:0.18;flex:0.18;background-image:url('/static/images/projects/rpi/intro1.png');}.intro2.jsx-2214684551{-webkit-flex:0.80;-ms-flex:0.80;flex:0.80;background-image:url('/static/images/projects/rpi/intro2.png');}.main1.jsx-2214684551{-webkit-flex:0.56;-ms-flex:0.56;flex:0.56;background-image:url('/static/images/projects/rpi/main1.png');}.main2.jsx-2214684551{-webkit-flex:0.20;-ms-flex:0.20;flex:0.20;background-image:url('/static/images/projects/rpi/main2.png');}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0V2lmZVBvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMER3QixBQUcrQixBQUtBLEFBS0EsQUFLQSwwQ0FkcUQsQUFLQSxBQUtELEFBS0EsOERBSmxFLEFBS0EsQ0FmQSxBQUtBIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9wcm9qZWN0cy9Qcm9qZWN0V2lmZVBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vaW1wb3J0IGxheW91dFxuaW1wb3J0IENvbnRlbnRGcmFnbWVudCBmcm9tICcuLi9sYXlvdXRzL0NvbnRlbnRGcmFnbWVudCdcbmltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuXG5jb25zdCBQcm9qZWN0V2lmZVBvcnQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvcHMuZGF0YVxuICAgIHJldHVybiAoXG4gICAgICAgIDxyZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxDb250ZW50RnJhZ21lbnQgdGl0bGU9e3Byb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgdGltZT17cHJvamVjdC50aW1lfSB0ZXh0PXtwcm9qZWN0LmludHJvfSBsaW5rPXtwcm9qZWN0Lmxpbmt9PlxuXG4gICAgICAgICAgICAgICAgey8qIFBob3RvcyAqL31cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1wiLCBcImludHJvMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvXCIsIFwiaW50cm8yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiTWFpbiBEZXZlbG9wbWVudFwiXG4gICAgICAgICAgICAgICAgdGV4dD17cHJvamVjdC5tYWlufT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9cIiwgXCJtYWluMlwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvXCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1wiLCBcIm1haW4xXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiVGVjaG5vbG9neVwiXG4gICAgICAgICAgICAgICAgdGV4dD17cHJvamVjdC50ZWNobm9sb2d5fT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9cIiwgXCJtYWluMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvXCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1wiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICA8Q29udGVudEZyYWdtZW50IHN1YnRpdGxlPVwiUmVzdWx0c1wiXG4gICAgICAgICAgICAgICAgdGV4dD17cHJvamVjdC5yZXN1bHRzfT5cblxuICAgICAgICAgICAgICAgIHsvKiBQaG90b3MgKi99XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KFwicm93UGhvdG9cIiwgXCJtYWluMVwiKX0+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcInJvd1Bob3RvXCIsIFwibWFpbjJcIil9PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJyb3dQaG90b1wiLCBcIm1haW4yXCIpfT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29udGVudEZyYWdtZW50PlxuXG4gICAgICAgICAgICB7LyogVE8gRE86IG1ha2UgYSBmcmFnbWVudCB0byBzdG9yZSBsaW5rcyBpbnN0ZWFkICovfVxuICAgICAgICAgICAgPENvbnRlbnRGcmFnbWVudCBzdWJ0aXRsZT1cIlZpZGVvc1wiXG4gICAgICAgICAgICAgICAgdGV4dD1cIlNvbWUgdmlkZW9zIHJlbGF0ZWQgdG8gdGhpcyBwcm9qZWN0IGNhbiBiZSBmb3VuZCBoZXJlOiA8YSBocmVmPScnPlZpZGVvMTwvYT4gPGEgaHJlZj0nJz5WaWRlbzI8L2E+IDxhIGhyZWY9Jyc+VmlkZW8zPC9hPlwiPlxuICAgICAgICAgICAgICAgIHsvKiBObyBQaG90b3MgKi99XG4gICAgICAgICAgICA8L0NvbnRlbnRGcmFnbWVudD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuaW50cm8xIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC4xODtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvaW50cm8xLnBuZycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pbnRybzIge1xuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwLjgwO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zdGF0aWMvaW1hZ2VzL3Byb2plY3RzL3JwaS9pbnRybzIucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4xIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC41NjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvbWFpbjEucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1haW4yIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMC4yMDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2ltYWdlcy9wcm9qZWN0cy9ycGkvbWFpbjIucG5nJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvcmVhY3QuRnJhZ21lbnQgPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFdpZmVQb3J0OyJdfQ== */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/projects/ProjectWifePort.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProjectWifePort);

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
  }, props.data.text));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentHead); // {props.children.map((element, idx) => {
//     // gives tag names
//     console.log(element.type)
//     //gives element value
//     //console.log(element.props.children)
//     return (
//         <div key={idx} className={`headStyles.${element.type}`}>
//             {element.props.children}
//         </div>
//     )
// })}

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
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/footer.module.scss */ "./components/shared/styles/footer.module.scss");
/* harmony import */ var _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import specific style here



class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.footer
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socmedContainer
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socmed
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.insta
    })), __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socmed
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.fb
    })), __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socmed
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.email
    })), __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socmed
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.linkedin
    })), __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.socmed
    }, __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.youtube
    }))), __jsx("div", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.text
    }, "Asyrul Hafetzy Ahmad \xA9", __jsx("span", {
      className: _styles_footer_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.year
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
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
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
    }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", null))), __jsx("div", {
      className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.navItems
    }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("a", null, "About")), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/projects"
    }, __jsx("a", null, "Projects")))));
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

/***/ "./components/shared/projects/ProProjects.js":
/*!***************************************************!*\
  !*** ./components/shared/projects/ProProjects.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proprojects.module.scss */ "./components/shared/projects/proprojects.module.scss");
/* harmony import */ var _proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import style



const ProProjects = props => {
  const project = props.data; // console.log(project.technology)

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.projectHeader || "")
  }, __jsx("h5", {
    className: "jsx-4133983565"
  }, project.title)), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.time || "")
  }, project.time), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.photosContainer || "")
  }, project.images.map((image, idx) => {
    return __jsx("div", {
      key: idx,
      style: {
        backgroundImage: 'url(' + image + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      },
      className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.image || "")
    });
  })), __jsx("p", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text || "")
  }, project.text), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.attributes || "")
  }, __jsx("span", {
    className: "jsx-4133983565"
  }, "Role:"), __jsx("p", {
    className: "jsx-4133983565"
  }, project.role)), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.attributes || "")
  }, __jsx("span", {
    className: "jsx-4133983565"
  }, "Main contribution:"), __jsx("p", {
    className: "jsx-4133983565"
  }, project.contribution)), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.attributes || "")
  }, __jsx("span", {
    className: "jsx-4133983565"
  }, "Technology:"), __jsx("div", {
    className: "jsx-4133983565" + " " + (_proprojects_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.technologyContainer || "")
  }, project.technology.map((tech, idx) => {
    return __jsx("p", {
      key: idx,
      className: "jsx-4133983565"
    }, tech);
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4133983565"
  }, "img.jsx-4133983565{width:100%;height:100%;object-fit:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvUHJvamVjdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0R3QixBQUdnQyxXQUNDLFlBQ0ssaUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvUHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5cbi8vaW1wb3J0IHN0eWxlXG5pbXBvcnQgcHJvcHJvamVjdFN0eWxlcyBmcm9tICcuL3Byb3Byb2plY3RzLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBQcm9Qcm9qZWN0cyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9wcy5kYXRhXG4gICAgLy8gY29uc29sZS5sb2cocHJvamVjdC50ZWNobm9sb2d5KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxyZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLnByb2plY3RIZWFkZXJ9PlxuICAgICAgICAgICAgICAgIDxoNT57cHJvamVjdC50aXRsZX08L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy50aW1lfT5cbiAgICAgICAgICAgICAgICB7cHJvamVjdC50aW1lfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLnBob3Rvc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAge3Byb2plY3QuaW1hZ2VzLm1hcCgoaW1hZ2UsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPXtwcm9wcm9qZWN0U3R5bGVzLmltYWdlfSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsgaW1hZ2UgKyAnKScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPXtpbWFnZX0gLz4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17cHJvcHJvamVjdFN0eWxlcy50ZXh0fT57cHJvamVjdC50ZXh0fTwvcD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3Byb2plY3RTdHlsZXMuYXR0cmlidXRlc30+XG4gICAgICAgICAgICAgICAgPHNwYW4+Um9sZTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHA+e3Byb2plY3Qucm9sZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3Byb2plY3RTdHlsZXMuYXR0cmlidXRlc30+XG4gICAgICAgICAgICAgICAgPHNwYW4+TWFpbiBjb250cmlidXRpb246PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxwPntwcm9qZWN0LmNvbnRyaWJ1dGlvbn08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3Byb2plY3RTdHlsZXMuYXR0cmlidXRlc30+XG4gICAgICAgICAgICAgICAgPHNwYW4+VGVjaG5vbG9neTo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3Byb3Byb2plY3RTdHlsZXMudGVjaG5vbG9neUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRlY2hub2xvZ3kubWFwKCh0ZWNoLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtpZHh9Pnt0ZWNofTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9yZWFjdC5GcmFnbWVudCA+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9Qcm9qZWN0czsiXX0= */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/projects/ProProjects.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ProProjects);

/***/ }),

/***/ "./components/shared/projects/Project.js":
/*!***********************************************!*\
  !*** ./components/shared/projects/Project.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProProjects */ "./components/shared/projects/ProProjects.js");
/* harmony import */ var _projects_ProjectRpi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/ProjectRpi */ "./components/projects/ProjectRpi.js");
/* harmony import */ var _projects_ProjectChatbot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects/ProjectChatbot */ "./components/projects/ProjectChatbot.js");
/* harmony import */ var _projects_ProjectWifePort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projects/ProjectWifePort */ "./components/projects/ProjectWifePort.js");
/* harmony import */ var _projects_ProjectWeddingPlanner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../projects/ProjectWeddingPlanner */ "./components/projects/ProjectWeddingPlanner.js");
/* harmony import */ var _projects_ProjectFunFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../projects/ProjectFunFactory */ "./components/projects/ProjectFunFactory.js");
/* harmony import */ var _projects_ProjectRecipeBook__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../projects/ProjectRecipeBook */ "./components/projects/ProjectRecipeBook.js");
/* harmony import */ var _public_static_data_projects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../public/static/data/projects */ "./public/static/data/projects.json");
var _public_static_data_projects__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../public/static/data/projects */ "./public/static/data/projects.json", 1);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 //import components








 // import data



const Project = props => {
  // console.log(props.id)
  return __jsx("div", {
    className: "jsx-482345856" + " " + 'projectContainer'
  }, (props.id === 'esri' || props.id === 'myipcs' || props.id === 'webcrawl') && __jsx(_ProProjects__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_9__.proProjects[`${props.id}`]
  }), props.id === 'rpi' && __jsx(_projects_ProjectRpi__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_9__.academicProjects[`${props.id}`]
  }), props.id === 'chatbot' && __jsx(_projects_ProjectChatbot__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_9__.academicProjects[`${props.id}`]
  }), props.id === 'wifePort' && __jsx(_projects_ProjectWifePort__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_9__.personalProjects[`${props.id}`]
  }), props.id === 'ultimatePort' && __jsx(_projects_ProjectWifePort__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_9__.personalProjects[`${props.id}`]
  }), props.id === 'wedding' && __jsx(_projects_ProjectWeddingPlanner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_9__.personalProjects[`${props.id}`]
  }), props.id === 'funfactory' && __jsx(_projects_ProjectFunFactory__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_9__.personalProjects[`${props.id}`]
  }), props.id === 'recipeBook' && __jsx(_projects_ProjectRecipeBook__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_9__.personalProjects[`${props.id}`]
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "482345856"
  }, ".projectContainer.jsx-482345856{width:100%;margin-top:80px;margin-bottom:120px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q3dCLEFBSWdDLFdBQ0ssZ0JBQ0ksb0JBRXhCIiwiZmlsZSI6Ii9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvcHJvamVjdHMvUHJvamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWFjdCBmcm9tICdyZWFjdCdcblxuLy9pbXBvcnQgY29tcG9uZW50c1xuaW1wb3J0IFByb1Byb2plY3RzIGZyb20gJy4vUHJvUHJvamVjdHMnXG5pbXBvcnQgUHJvamVjdFJwaSBmcm9tICcuLi8uLi9wcm9qZWN0cy9Qcm9qZWN0UnBpJ1xuaW1wb3J0IFByb2plY3RDaGF0Ym90IGZyb20gJy4uLy4uL3Byb2plY3RzL1Byb2plY3RDaGF0Ym90J1xuaW1wb3J0IFByb2plY3RXaWZlUG9ydCBmcm9tICcuLi8uLi9wcm9qZWN0cy9Qcm9qZWN0V2lmZVBvcnQnXG5pbXBvcnQgUHJvamVjdFVsdGltYXRlUG9ydCBmcm9tICcuLi8uLi9wcm9qZWN0cy9Qcm9qZWN0V2lmZVBvcnQnXG5pbXBvcnQgUHJvamVjdFdlZGRpbmdQbGFubmVyIGZyb20gJy4uLy4uL3Byb2plY3RzL1Byb2plY3RXZWRkaW5nUGxhbm5lcidcbmltcG9ydCBQcm9qZWN0RnVuRmFjdG9yeSBmcm9tICcuLi8uLi9wcm9qZWN0cy9Qcm9qZWN0RnVuRmFjdG9yeSdcbmltcG9ydCBQcm9qZWN0UmVjaXBlQm9vayBmcm9tICcuLi8uLi9wcm9qZWN0cy9Qcm9qZWN0UmVjaXBlQm9vaydcblxuLy8gaW1wb3J0IGRhdGFcbmltcG9ydCBwcm9qZWN0c0RhdGEgZnJvbSAnLi4vLi4vLi4vcHVibGljL3N0YXRpYy9kYXRhL3Byb2plY3RzJ1xuXG5jb25zdCBQcm9qZWN0ID0gKHByb3BzKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2cocHJvcHMuaWQpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Byb2plY3RDb250YWluZXInPlxuICAgICAgICAgICAgeyhwcm9wcy5pZCA9PT0gJ2VzcmknIHx8IHByb3BzLmlkID09PSAnbXlpcGNzJyB8fCBwcm9wcy5pZCA9PT0gJ3dlYmNyYXdsJykgJiZcbiAgICAgICAgICAgICAgICA8UHJvUHJvamVjdHMgZGF0YT17cHJvamVjdHNEYXRhLnByb1Byb2plY3RzW2Ake3Byb3BzLmlkfWBdfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyhwcm9wcy5pZCA9PT0gJ3JwaScpICYmXG4gICAgICAgICAgICAgICAgPFByb2plY3RScGkgZGF0YT17cHJvamVjdHNEYXRhLmFjYWRlbWljUHJvamVjdHNbYCR7cHJvcHMuaWR9YF19IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7KHByb3BzLmlkID09PSAnY2hhdGJvdCcpICYmXG4gICAgICAgICAgICAgICAgPFByb2plY3RDaGF0Ym90IGRhdGE9e3Byb2plY3RzRGF0YS5hY2FkZW1pY1Byb2plY3RzW2Ake3Byb3BzLmlkfWBdfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyhwcm9wcy5pZCA9PT0gJ3dpZmVQb3J0JykgJiZcbiAgICAgICAgICAgICAgICA8UHJvamVjdFdpZmVQb3J0IGRhdGE9e3Byb2plY3RzRGF0YS5wZXJzb25hbFByb2plY3RzW2Ake3Byb3BzLmlkfWBdfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyhwcm9wcy5pZCA9PT0gJ3VsdGltYXRlUG9ydCcpICYmXG4gICAgICAgICAgICAgICAgPFByb2plY3RVbHRpbWF0ZVBvcnQgZGF0YT17cHJvamVjdHNEYXRhLnBlcnNvbmFsUHJvamVjdHNbYCR7cHJvcHMuaWR9YF19IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7KHByb3BzLmlkID09PSAnd2VkZGluZycpICYmXG4gICAgICAgICAgICAgICAgPFByb2plY3RXZWRkaW5nUGxhbm5lciBkYXRhPXtwcm9qZWN0c0RhdGEucGVyc29uYWxQcm9qZWN0c1tgJHtwcm9wcy5pZH1gXX0gLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsocHJvcHMuaWQgPT09ICdmdW5mYWN0b3J5JykgJiZcbiAgICAgICAgICAgICAgICA8UHJvamVjdEZ1bkZhY3RvcnkgZGF0YT17cHJvamVjdHNEYXRhLnBlcnNvbmFsUHJvamVjdHNbYCR7cHJvcHMuaWR9YF19IC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7KHByb3BzLmlkID09PSAncmVjaXBlQm9vaycpICYmXG4gICAgICAgICAgICAgICAgPFByb2plY3RSZWNpcGVCb29rIGRhdGE9e3Byb2plY3RzRGF0YS5wZXJzb25hbFByb2plY3RzW2Ake3Byb3BzLmlkfWBdfSAvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLnByb2plY3RDb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IGJsdWUgMnB4IHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0Il19 */\n/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/projects/Project.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./components/shared/projects/proprojects.module.scss":
/*!************************************************************!*\
  !*** ./components/shared/projects/proprojects.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"projectHeader": "_3NKMuSnY7IOOBfzAuhfId1",
	"time": "_2dQqX1_xTLHJrXkb5cCmbO",
	"attributes": "_3D_1f4bBmrJg6lw1qMIqup",
	"photosContainer": "_2f1K1_cSqQxL8IrG6yurBl",
	"text": "_16fTmpqwuEgikDz6hiiY0d",
	"image": "_1pVWZb2uuOJBcOGWhXENY5",
	"technologyContainer": "_4giDwbc2xRCt48gKKGz_O"
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
	"innerLogo": "YLc3V1jOJQDlT1pigyU-m",
	"navLinks": "kPFk5WKPQbwwEkuo5RDYZ",
	"login": "_3MvDr5m91Pmmjf-i_ytVaJ",
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

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_ContentLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/ContentLayout */ "./components/layouts/ContentLayout.js");
/* harmony import */ var _components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layouts/ContentContainer */ "./components/layouts/ContentContainer.js");
/* harmony import */ var _components_shared_ContentHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shared/ContentHead */ "./components/shared/ContentHead.js");
/* harmony import */ var _components_shared_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared/Tabs */ "./components/shared/Tabs.js");
/* harmony import */ var _components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared/InnerTabs */ "./components/shared/InnerTabs.js");
/* harmony import */ var _components_shared_projects_Project__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/shared/projects/Project */ "./components/shared/projects/Project.js");
/* harmony import */ var _public_static_data_projects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/static/data/projects */ "./public/static/data/projects.json");
var _public_static_data_projects__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/static/data/projects */ "./public/static/data/projects.json", 1);
/* harmony import */ var _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/static/data/contentHeads.json */ "./public/static/data/contentHeads.json");
var _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/static/data/contentHeads.json */ "./public/static/data/contentHeads.json", 1);
/* harmony import */ var _styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/projects.module.scss */ "./pages/styles/projects.module.scss");
/* harmony import */ var _styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import layouts


 //import components




 //import data

 //import data

 //global styles can be found at ../styles/main.scss
//import specific styling module

 //React Reveal Animation



class Projects extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      activeTab: '',
      activeProject: ''
    };
    this.prevActiveTab = '';
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(active) {
    this.prevActiveTab = this.state.activeTab;
    this.setState({
      activeTab: active,
      activeProject: ''
    });
  }

  render() {
    // console.log(this.state)
    return __jsx(_components_layouts_ContentLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx("section", null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('hero', _styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.projectsHero)
    }), __jsx(_components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      delay: 200
    }, __jsx(_components_shared_ContentHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_10__.projects
    })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      delay: 300
    }, __jsx(_components_shared_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onChange: this.handleChange,
      active: this.state.activeTab
    }, __jsx("span", {
      key: "Academic"
    }, "Academic"), __jsx("span", {
      key: "Professional"
    }, "Professional"), __jsx("span", {
      key: "Personal"
    }, "Personal"))), this.state.activeTab === 'Academic' && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      duration: 500
    }, __jsx(_components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onChange: active => {
        this.setState({
          activeProject: active
        });
      },
      active: this.state.activeProject,
      data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_9__.slugs.Academic
    })), this.state.activeTab === 'Professional' && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      duration: 500
    }, __jsx(_components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onChange: active => {
        this.setState({
          activeProject: active
        });
      },
      active: this.state.activeProject,
      data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_9__.slugs.Professional
    })), this.state.activeTab === 'Personal' && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      duration: 500
    }, __jsx(_components_shared_InnerTabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onChange: active => {
        this.setState({
          activeProject: active
        });
      },
      active: this.state.activeProject,
      data: _public_static_data_projects__WEBPACK_IMPORTED_MODULE_9__.slugs.Personal
    })), this.state.activeProject !== '' && __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      duration: 500
    }, __jsx(_components_shared_projects_Project__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: this.state.activeProject
    })))));
  }

}

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

/***/ }),

/***/ "./pages/styles/projects.module.scss":
/*!*******************************************!*\
  !*** ./pages/styles/projects.module.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"projectsHero": "_19tIedMwwCZB8ahw0GdW9E"
};

/***/ }),

/***/ "./public/static/data/contentHeads.json":
/*!**********************************************!*\
  !*** ./public/static/data/contentHeads.json ***!
  \**********************************************/
/*! exports provided: about_top, about_skill, about_work, about_education, projects, fitness, travel, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"about_top\":{\"title\":\"Hi, nice to meet you!\",\"quote\":\"“A positive attitude is something everyone can work on, and everyone can learn how to employ it.”\",\"author\":\"Joan Lunden\",\"text\":\"I am an energetic, passionate, self-driven and hard-working individual with immense devotion to Computer Science and Software Engineering. Both a leader and a team-player, I work best in teams, even better under pressure. I love to learn as much as I do in sharing my knowledge, and I am constantly looking for opportunities to improve myself and enhance my skills. I am currently a student at the University of Manchester, pursuing a master’s degree in Advanced Computer Science with a major in Artificial Intelligence.\"},\"about_skill\":{\"title\":\"Technical Skills and Specialties\",\"quote\":\"“One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary”\",\"author\":\"Thomas A. Edison\",\"text\":\"My main specialties cover the areas of Software Engineering and Artificial Intelligence, with an overlap hint of overlap with Data Science. Throughout my years as a professional Software Engineer, I was extensively exposed to various programming languages - particularly JavaScript and Python - as well as various technology stacks as well. I have worked with the ReactJS-Express-MongoDB-NodeJS stack as well as the C#-.NET-OracleDB stack. Throughout my year as an MSc student, I worked primarily on Python, and was exposed to core AI subjects including: Machine Learning, Deep Neural Networks, Natural Language Processing and Computer Vision.\"},\"about_work\":{\"title\":\"Work Experience\",\"quote\":\"“Experience is the teacher of all things”\",\"author\":\"Julius Caesar\",\"text\":\"I have worked as a Software Engineer since the year 2016 during which I did my Internship at Schlumberger, KL. Over the years, I have absolutely no interest in working in jobs other than those that are related to my expertise; Computer Science and/or Software Engineering. Now with my newly-acquired knowledge of Data Science and AI, I would love to work in these fields as well.\"},\"about_education\":{\"title\":\"Education\",\"quote\":\"“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”\",\"author\":\"Malcolm X\",\"text\":\"I own a First Class Honours Bachelor's degree in Computer Science, majoring in Software Engineering from Multimedia University, Cyberjaya. I am currently pursuing my master's degree in Advanced Computer Science, majoring in Artificial Intelligence, at the University of Manchester. I expect to graduate in September 2020 with a Distinction.\"},\"projects\":{\"title\":\"My Portfolio\",\"quote\":\"“Anyone who has never made a mistake has never tried anything new.”\",\"author\":\"Albert Einstein\",\"text\":\"Throughout the past years, I have worked on various projects academically, professionally as well as personally. I love to push myself out of my comfort zone to try new possibilities, as well as to try out new technologies and concepts. I am not afraid of failing, but I am afraid of not trying at all.\"},\"fitness\":{\"title\":\"Fitness\",\"quote\":\"“The World is A Book and Those who Do not Travel read only a Page”\",\"author\":\"St. Augustine\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"travel\":{\"title\":\"Travel\",\"quote\":\"“The World is A Book and Those who Do not Travel read only a Page”\",\"author\":\"St. Augustine\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"}}");

/***/ }),

/***/ "./public/static/data/projects.json":
/*!******************************************!*\
  !*** ./public/static/data/projects.json ***!
  \******************************************/
/*! exports provided: slugs, proProjects, academicProjects, personalProjects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"slugs\":{\"Academic\":[{\"key\":\"rpi\",\"name\":\"Raspberry Pi CNC\"},{\"key\":\"chatbot\",\"name\":\"Chatbot Data Analysis\"}],\"Professional\":[{\"key\":\"esri\",\"name\":\"C# .NET ESRI\"},{\"key\":\"myipcs\",\"name\":\"Big Data (Census)\"},{\"key\":\"webcrawl\",\"name\":\"Python Web Crawl\"}],\"Personal\":[{\"key\":\"wedding\",\"name\":\"Wedding Planner\"},{\"key\":\"wifePort\",\"name\":\"Wife's Portfolio\"},{\"key\":\"ultimatePort\",\"name\":\"Ultimate Portfolio\"},{\"key\":\"recipeBook\",\"name\":\"Recipe Repository\"},{\"key\":\"funfactory\",\"name\":\"Kindergarden Website\"}]},\"proProjects\":{\"esri\":{\"title\":\"Cadu 2 C# and ESRI Development\",\"time\":\"Oct 2018 - Sept 2019\",\"text\":\"For this project I worked with another developer to perform maintenance and enhancements to the software that manages addresses’ geographical information on the Malaysian map. This software is being used internally to update map information regarding for example new household data, removing a household data, editing, and moving properties or roads across the map. The software development stack involved C#, .NET, Oracle DB, and is integrated with the ESRI ArcGIS Engine. Worked independently to fix and resolve various issues and enhancements.\",\"role\":\"Lead Developer\",\"contribution\":\"Fixed over 50+ bugs and did over 30+ feature enhancement on a pre-written code \",\"technology\":[\"C#\",\".NET Framework\",\"OracleDB\",\"ESRIArcGIS\"],\"images\":[\"/static/images/projects/esri/photo1.png\",\"/static/images/projects/esri/photo1.png\",\"/static/images/projects/esri/photo1.png\"]},\"myipcs\":{\"title\":\"Integrated Census (Big Data) Project\",\"time\":\"Oct 2017 - Oct 2018\",\"text\":\"For this project I led a team of six(6) programmers whom I worked with as the Data Management team of a large-scale, national-level Big Data project named MyIPCS (Malaysia Integrated Population Census System). We essentially handled Bi Data preperation - from exporting, cleaning, stemming, then upload them to ElasticSearch. The front-end developers would then query data from this endpoint to build dashboards for users. It was an End-to-end, Big Data processing and analytics web application development, using NodeJS, React and ElasticSearch.\",\"role\":\"Lead Developer\",\"contribution\":\"Address ID Proof of Concept\",\"technology\":[\"NodeJS\",\"ReactJS\",\"ElasticSearch\",\"GraphQL\"],\"images\":[\"/static/images/projects/myipcs/photo1.png\",\"/static/images/projects/myipcs/photo1.png\",\"/static/images/projects/myipcs/photo1.png\"]},\"webcrawl\":{\"title\":\"Web Crawling using Python\",\"time\":\"Sep 2017 - Oct 2017\",\"text\":\"As a Junior Data Engineer, I worked with my superior, who was the Data Scientist, to conduct Big data analytics on customer's insights on the organisation's products and services. My task was to perform web crawling using Python and the Scrapy Web Crawling engine to extract text data from various websites and news portal. The results would then be passed to the Data Scientist for further data analytics tasks. I had to move departments within only one month due to organisational decisions.\",\"role\":\"Junior Data Engineer\",\"contribution\":\"Applied Selenium to automate web browsing, to scrape dynamic web pages.\",\"technology\":[\"Python\",\"Scrapy Web Crawling Engine\",\"Beautiful Soup\",\"XPath\"],\"images\":[\"/static/images/projects/myipcs/photo1.png\",\"/static/images/projects/myipcs/photo1.png\",\"/static/images/projects/myipcs/photo1.png\"]}},\"academicProjects\":{\"rpi\":{\"title\":\"Using Raspberry Pi 3 Model B to Drive a CNC Machine in Real Time\",\"time\":\"2017\",\"intro\":\"This was part of my Bachelor degree's Final Year Project (FYP), which I spent over six months to complete. The project was well out of my degree's syllabus scope, as it covered various concepts such as multi-threading, parallel-processing, electrical signals and Single Board Computers. I developed two main programs; the G-Code Interpreter, and the Interpolation program. These two programs work together to drive an industry-grade Computerised Numerical Control (CNC) machine, which was connected to the Raspberry Pi's pins. \",\"main\":\"A digital image is first converted into a G-Code using a Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) softwares. I would then execute the G-code Interpreter that reads this G-Code file and translate it into a signal file, which is basically a file containing numbers. The Interpolation Program then takes this signal file to produce electrical pulses that drives the CNC machine to move a pen attached to it and draw the digital image on a piece of paper.\",\"technology\":\"The execution of this project exposed myself to an extensive amount of linux commands, since Raspberry Pi runs the Raspbian OS, which is based on Linux. I also did all developments on a seperate machine running Linux Debian. Development wise, the two programs were written heavily in C++/C++11. Parallel processing and multi-threading had to be implemented as signals need to be generated concurrently to the CNC machine's servo motors. I was also exposed to various Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) softwares, such as AutoCAD and PyCAM respectively.\",\"results\":\"The end product of this project opened my eyes to the power of Software Engineering, as those two programs I wrote actually drove the CNC machine to draw images on a piece of paper. Some mathematics was involved as well, hence I was very happy and blown away to see those numbers work together to produce real results. The full report/thesis for this project is available upon request.\"},\"chatbot\":{\"title\":\"A Chatbot to Facilitate Data Analysis\",\"time\":\"TBC 2020\",\"intro\":\"This is my MSc Project, in which I will be building a chatbot designed to faciliate Big Data preparation by helping users to choose the appropriate pipeline functions based on a set of predefined questions and answers. The chatbot will be integrated with a GUI-powered Data Analysis workflow tool to give the answers that users expect. This project is currently ongoing, hence the page will be updated once everything is complete.\",\"main\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"technology\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"results\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"}},\"personalProjects\":{\"wifePort\":{\"title\":\"Wife's Portfolio\",\"time\":\"2018\",\"link\":\"http://www.yasminraihan.com/\",\"intro\":\"Sometime in 2018 I helped my wife to develop her own Portfolio Website, to store all past projects that she was involved in, accademically and professionally. We spent around two(2) months for the completion of this full end-to-end, design-to-deploy development project. The pages are responsive as well as optimised for mobile experience as well.\",\"main\":\"The webpage was first designed using Figma, a web design software, similar to Sketch. There were data going in and out of this webpage, hence we kept things as simple as possible and focues primarily on its front-end design and feel.\",\"technology\":\"The core technology underlining this project was plain HTML, CSS3, but we implmented things in a full-stack way, except that we did not connect a database : NodeJS and Express in the backend, JQuery for DOM manipulation, and Ajax for optimisation. For deployment, we used Heroku, and purchased a domain from a Domain Provider. We also used Github to keep track of the code changes and versioning.\",\"results\":\"The end product of this project was a minimalistic but filled with the essential information that would keep track of my wife's past experiences and work portfolio. One way to improve this website is to implement new technologies such GatsbyJS or NextJS to improve the performance and speed of this website further. Another improvement is to abstract away data components of the website from the development code, hence enhancing software maintainability.\"},\"ultimatePort\":{\"title\":\"My Portfolio\",\"time\":\"TBC 2020\",\"intro\":\"This could be my own portfolio that stores all my acadmic and professional records, but what I designed it to be much more than just that. I designed it to also store useful contents that users can visit and learn a thing or two, and then share them if they think some of the articles might be useful. I aim to complete this project by the end of 2020. Therefore, this webpage shall be updated further as the project completes.\",\"main\":\"Some of the other contents that may be useful for the users include my travel blog, which could store and share my travel experiences around the world. We aim to provide feedback and opinions on for example the flight, accommodation, activities, and overall experiences, so users could read and make necessary preparations should they plan to travel to the same places as we did.\",\"technology\":\"For this project, I implemented NextJS, providing server-side rendering technology for fast browsing experience. At the point of writing this there is no need for a database connection, but this may subject to change. It would also be deployed on to heroku.\",\"results\":\"The result of this project is yet to be descibed, once the project is finished.\"},\"wedding\":{\"title\":\"Wedding Planning System\",\"link\":\"http://www.asyrulmarriesyasmin.com\",\"time\":\"2018\",\"intro\":\"Planning a wedding is not an easy task, especially when we have various tasks delegated amongst our own family members. The aim for this project was to help planning a wedding easier, by registering all required tasks into the system, and each task is monitored or managed by one person. This was my first full-stack web development project,, after I enrolled in a course called the Web Developer Bootcamp (Udemy), and completed the whole 46-hour video course to gain all the necessary knowledge.\",\"main\":\"This project covers a wide range of web development topics, such as HTML, CSS, Bootstrap, Authentication, Authorisation, Database, Express, and Deployment. Users are able to create a task, and assign this task to an individual. For each of these tasks, there is a page for them, where users can comment and do some minor discussion regarding the topic. The owner of the task, i.e. the person the task was assigned to, is able to delete/remove comments, and the progress in the task description, as well as to update the 'progress bar'.\",\"technology\":\"This project covers all aspect of a CRUD application (Create, Read, Update and Delete). I used NodeJS, Express, MongoDB and Bootstrap. I deployed it on Heroku, but for the development environment I used the Amazon Web Services (AWS) Cloud 9. GitHub was also used for source tracking.\",\"results\":\"The result of this project is full-fledged NodeJS application that allows users to log in, create a task, update their tasks, comment, delete and so on. The website also contains any relevant information related to the wedding, such as the map, the invitation card, and to monitor the number of guests. One way this project could have been improved is by implementing a Front-End framework, such as Angular or ReactJS.\"},\"funfactory\":{\"title\":\"Kindergarten Website\",\"time\":\"TBC 2020\",\"intro\":\"For this project I will be building a website for a Kindergarten Business owned by my mother-in-law. The sole purpose of this website is to provide necessary information about the business, as well as to provide contact information for potential customers. This project is currently under the design phase, and I plan to implement Gatsby JS into this project. We aim to complete this project by the end of 2020.\",\"main\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"technology\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"results\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"recipeBook\":{\"title\":\"Recipe Repository\",\"time\":\"TBC 2021\",\"intro\":\"This is the project that I aspire to complete by the end of 2021. The basic idea is to store all recipes from my mother's physical recipe book into a Graph-based datastore, to implement an achitechture similar to those of Search Engines or Wikepedia. This way, the system is able to process and return answers for queries based on natural language, such as 'How many grams of butter do I need to bake the Marble Cake' or 'How long should I leave the jelly in the fridge'. This would be the most challenging personal project for me, considering the amount of technology involved in the development.\",\"main\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"technology\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"results\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"}}}");

/***/ }),

/***/ 6:
/*!*********************************!*\
  !*** multi ./pages/projects.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/pages/projects.js */"./pages/projects.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "react-visibility-sensor":
/*!******************************************!*\
  !*** external "react-visibility-sensor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=projects.js.map