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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("m5Sm");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "78su":
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

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "ZfN1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/Link"
var Link_ = __webpack_require__("biE2");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/shared/styles/header.module.scss
var header_module = __webpack_require__("78su");
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);

// CONCATENATED MODULE: ./components/shared/Header.js

var __jsx = external_react_default.a.createElement;


 // import specific style here



class Header_Header extends external_react_default.a.Component {
  render() {
    // items in return block are JSX
    // React.Fragments can be used interchangeably with divs
    // divs are not always necessary
    return __jsx("div", {
      className: external_classnames_default()(header_module_default.a.navBar, header_module_default.a.showNav)
    }, __jsx("div", {
      className: header_module_default.a.navLinks
    }, __jsx("div", {
      className: header_module_default.a.Logo
    }, __jsx(Link_default.a, {
      href: "/"
    }, __jsx("a", null))), __jsx("div", {
      className: header_module_default.a.navItems
    }, __jsx(Link_default.a, {
      href: "/about"
    }, __jsx("a", null, "About")), __jsx(Link_default.a, {
      href: "/projects"
    }, __jsx("a", null, "Projects")))));
  }

}

/* harmony default export */ var shared_Header = (Header_Header);
// EXTERNAL MODULE: ./components/shared/styles/footer.module.scss
var footer_module = __webpack_require__("Zu4H");
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);

// CONCATENATED MODULE: ./components/shared/Footer.js

var Footer_jsx = external_react_default.a.createElement;


 // import specific style here



class Footer_Footer extends external_react_default.a.Component {
  render() {
    return Footer_jsx("div", {
      className: footer_module_default.a.footer
    }, Footer_jsx("div", {
      className: footer_module_default.a.socmedContainer
    }, Footer_jsx("div", {
      className: footer_module_default.a.socmed
    }, Footer_jsx("div", {
      className: footer_module_default.a.insta
    })), Footer_jsx("div", {
      className: footer_module_default.a.socmed
    }, Footer_jsx("div", {
      className: footer_module_default.a.fb
    })), Footer_jsx("div", {
      className: footer_module_default.a.socmed
    }, Footer_jsx("div", {
      className: footer_module_default.a.email
    })), Footer_jsx("div", {
      className: footer_module_default.a.socmed
    }, Footer_jsx("div", {
      className: footer_module_default.a.linkedin
    })), Footer_jsx("div", {
      className: footer_module_default.a.socmed
    }, Footer_jsx("div", {
      className: footer_module_default.a.youtube
    }))), Footer_jsx("div", {
      className: footer_module_default.a.text
    }, "Asyrul Hafetzy Ahmad \xA9", Footer_jsx("span", {
      className: footer_module_default.a.year
    }, "2020")));
  }

}

/* harmony default export */ var shared_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/layouts/BaseLayout.js

var BaseLayout_jsx = external_react_default.a.createElement;


 //functional component, instead of class
//because simpler

const BaseLayout = props => {
  return BaseLayout_jsx(external_react_default.a.Fragment, null, BaseLayout_jsx(shared_Header, null), props.children, BaseLayout_jsx(shared_Footer, null));
};

/* harmony default export */ var layouts_BaseLayout = __webpack_exports__["a"] = (BaseLayout);

/***/ }),

/***/ "Zu4H":
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

/***/ "biE2":
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "m5Sm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("biE2");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZfN1");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // works with withRouter. useRouter giving Hook errors
// import { useRouter } from 'next/router';

 //global styles can be found at ../styles/main.scss
//import specific styling module
//import blogStyles from './blog.module.scss'

class Blog extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static async getInitialProps(context) {
    let post = {};
    const postId = context.query.id;

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      post = await response.json();
    } catch (err) {
      console.log(err);
    }

    return {
      post
    }; //similar to return {post : post} //same key value pair
  }

  render() {
    // const router = useRouter();
    const {
      post
    } = this.props;
    return __jsx(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null, __jsx("h1", null, post.title), __jsx("h2", null, post.body), __jsx("p", null, post.id));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Blog));

/***/ })

/******/ });