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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Rld":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_tabs_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("z3HB");
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

/* harmony default export */ __webpack_exports__["a"] = (Tabs); // handleClick(item) {
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

/***/ "0erD":
/***/ (function(module) {

module.exports = JSON.parse("{\"slugs\":{\"Achievements\":[{\"key\":\"transform\",\"name\":\"Transformation\"},{\"key\":\"race\",\"name\":\"Race Events\"}],\"Programs\":[{\"key\":\"hypertrophy\",\"name\":\"Hypertrophy\"},{\"key\":\"strength\",\"name\":\"Strength\"},{\"key\":\"fatloss\",\"name\":\"Fat Loss\"}],\"Diet\":[{\"key\":\"General\",\"name\":\"general\"},{\"key\":\"iifym\",\"name\":\"IIFYM\"}]},\"achievementItems\":{\"transform\":{\"title\":\"My Fitness Transformation\",\"time\":\"2012-2018\",\"intro\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main1\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main2\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"closure\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"race\":{\"title\":\"Participation in Various Race Events\",\"time\":\"2020\",\"intro\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main1\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main2\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"closure\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"}},\"programsItems\":{\"hypertrophy\":{\"title\":\"Hypertrophy Programs\",\"time\":\"2012-2018\",\"intro\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main1\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main2\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"closure\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"fatloss\":{\"title\":\"Fat Loss Workouts\",\"time\":\"2020\",\"intro\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main1\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main2\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"closure\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"strength\":{\"title\":\"Strength Programs\",\"time\":\"2020\",\"intro\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main1\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"main2\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"closure\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"}}}");

/***/ }),

/***/ "3335":
/***/ (function(module, exports) {

module.exports = {
	"fitnessHero": "_2LSEde_5fV_Z1iEjd5O82B"
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TS1Z");


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

/***/ "BoNS":
/***/ (function(module, exports) {

module.exports = {
	"projectsContainer": "_50IlI1eFp3e4llkoaohfz",
	"projectTabContainer": "_3VDDR-h_YBxxpLez2HW4XT",
	"active": "Impeb-zv_aTrO4JRMYwAN",
	"tabBox": "_30uZ8RAlNK3FnOa1AUsjop"
};

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IfBw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_contentHead_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("mtDU");
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

/* harmony default export */ __webpack_exports__["a"] = (ContentHead); // {props.children.map((element, idx) => {
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

/***/ "IrP5":
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KwCx":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "LJ+a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("biE2");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contentFragment_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lXDw");
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

/* harmony default export */ __webpack_exports__["a"] = (ContentFragment);

/***/ }),

/***/ "ONcy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_innertabs_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BoNS");
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

/* harmony default export */ __webpack_exports__["a"] = (InnerTabs);

/***/ }),

/***/ "TS1Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/Link"
var Link_ = __webpack_require__("biE2");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/layouts/ContentLayout.js
var ContentLayout = __webpack_require__("lfOJ");

// EXTERNAL MODULE: ./components/layouts/ContentContainer.js
var ContentContainer = __webpack_require__("tQjn");

// EXTERNAL MODULE: ./components/shared/ContentHead.js
var ContentHead = __webpack_require__("IfBw");

// EXTERNAL MODULE: ./components/shared/Tabs.js
var Tabs = __webpack_require__("+Rld");

// EXTERNAL MODULE: ./components/shared/InnerTabs.js
var InnerTabs = __webpack_require__("ONcy");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./components/layouts/ContentFragment.js
var ContentFragment = __webpack_require__("LJ+a");

// CONCATENATED MODULE: ./components/fitnessItems/ItemTransform.js


var __jsx = external_react_default.a.createElement;
 //import layout


 //import style
// import rpiStyles from './rpi.module.scss'

const ItemTransform = props => {
  const item = props.data;
  return __jsx(external_react_default.a.Fragment, null, __jsx(ContentFragment["a" /* default */], {
    title: item.title,
    time: item.time,
    text: item.intro
  }, __jsx("div", {
    className: "jsx-1053674562" + " " + "row"
  }, __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "intro1") || "")
  }), __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "intro2") || "")
  }))), __jsx(ContentFragment["a" /* default */], {
    subtitle: "Main Development",
    text: item.main1
  }, __jsx("div", {
    className: "jsx-1053674562" + " " + "row"
  }, __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }))), __jsx(ContentFragment["a" /* default */], {
    subtitle: "Technology",
    text: item.main2
  }, __jsx("div", {
    className: "jsx-1053674562" + " " + "row"
  }, __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  })), __jsx("div", {
    className: "jsx-1053674562" + " " + "row"
  }, __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }))), __jsx(ContentFragment["a" /* default */], {
    subtitle: "Results",
    text: item.closure
  }, __jsx("div", {
    className: "jsx-1053674562" + " " + "row"
  }, __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "main1") || "")
  }), __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), __jsx("div", {
    className: "jsx-1053674562" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }))), __jsx(ContentFragment["a" /* default */], {
    subtitle: "Placement Text",
    text: item.main1
  }), __jsx(ContentFragment["a" /* default */], {
    subtitle: "Placement Text",
    text: item.main1
  }), __jsx(style_default.a, {
    id: "1053674562"
  }, [".intro1.jsx-1053674562{-webkit-flex:0.18;-ms-flex:0.18;flex:0.18;background-image:url('/static/images/fitness/achievements/transformation/intro1.png');}", ".intro2.jsx-1053674562{-webkit-flex:0.80;-ms-flex:0.80;flex:0.80;background-image:url('/static/images/fitness/achievements/transformation/intro2.png');}", ".main1.jsx-1053674562{-webkit-flex:0.56;-ms-flex:0.56;flex:0.56;background-image:url('/static/images/fitness/achievements/transformation/main1.png');}", ".main2.jsx-1053674562{-webkit-flex:0.20;-ms-flex:0.20;flex:0.20;background-image:url('/static/images/fitness/achievements/transformation/main2.png');}"]));
};

/* harmony default export */ var fitnessItems_ItemTransform = (ItemTransform);
// EXTERNAL MODULE: ./public/static/data/fitness.json
var fitness = __webpack_require__("0erD");

// CONCATENATED MODULE: ./components/shared/FitnessItem.js


var FitnessItem_jsx = external_react_default.a.createElement;
 //import components

 // import data



const FitnessItem = props => {
  return FitnessItem_jsx("div", {
    className: "jsx-3019113223" + " " + 'fitnessContainer'
  }, (props.id === 'transform' || props.id === 'race') && FitnessItem_jsx(fitnessItems_ItemTransform, {
    data: fitness.achievementItems[`${props.id}`]
  }), (props.id === 'hypertrophy' || props.id === 'fatloss' || props.id === 'strength') && FitnessItem_jsx(fitnessItems_ItemTransform, {
    data: fitness.programsItems[`${props.id}`]
  }), FitnessItem_jsx(style_default.a, {
    id: "3019113223"
  }, [".fitnessContainer.jsx-3019113223{width:100%;margin-top:80px;margin-bottom:120px;}"]));
};

/* harmony default export */ var shared_FitnessItem = (FitnessItem);
// EXTERNAL MODULE: ./pages/styles/fitness.module.scss
var fitness_module = __webpack_require__("3335");
var fitness_module_default = /*#__PURE__*/__webpack_require__.n(fitness_module);

// EXTERNAL MODULE: ./public/static/data/contentHeads.json
var contentHeads = __webpack_require__("aEgt");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// CONCATENATED MODULE: ./pages/fitness.js

var fitness_jsx = external_react_default.a.createElement;


 // import layouts


 //import components




 //global styles can be found at ../styles/main.scss
//import specific styling module

 // import data


 //React Reveal Animation



class fitness_Fitness extends external_react_default.a.Component {
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
    console.log(this.state.activeTab);
    return fitness_jsx(ContentLayout["a" /* default */], null, fitness_jsx("section", null, fitness_jsx("div", {
      className: external_classnames_default()('hero', fitness_module_default.a.fitnessHero)
    }), fitness_jsx(ContentContainer["a" /* default */], null, fitness_jsx(Fade_default.a, {
      delay: 200
    }, fitness_jsx(ContentHead["a" /* default */], {
      data: contentHeads.fitness
    })), fitness_jsx(Fade_default.a, {
      delay: 300
    }, fitness_jsx(Tabs["a" /* default */], {
      onChange: this.handleChange,
      active: this.state.activeTab
    }, fitness_jsx("span", {
      key: "Achievements"
    }, "Achievements"), fitness_jsx("span", {
      key: "Programs"
    }, "Programs"), fitness_jsx("span", {
      key: "Diet"
    }, "Diet"))), this.state.activeTab === 'Achievements' && fitness_jsx(Fade_default.a, {
      duration: 500
    }, fitness_jsx(InnerTabs["a" /* default */], {
      onChange: active => {
        this.setState({
          activeItem: active
        });
      },
      active: this.state.activeItem,
      data: fitness.slugs.Achievements
    })), this.state.activeTab === 'Programs' && fitness_jsx(Fade_default.a, {
      duration: 500
    }, fitness_jsx(InnerTabs["a" /* default */], {
      onChange: active => {
        this.setState({
          activeItem: active
        });
      },
      active: this.state.activeItem,
      data: fitness.slugs.Programs
    })), this.state.activeTab === 'Diet' && fitness_jsx(Fade_default.a, {
      duration: 500
    }, fitness_jsx(InnerTabs["a" /* default */], {
      onChange: active => {
        this.setState({
          activeItem: active
        });
      },
      active: this.state.activeItem,
      data: fitness.slugs.Diet
    })), this.state.activeItem !== '' && fitness_jsx(Fade_default.a, {
      duration: 500
    }, fitness_jsx(shared_FitnessItem, {
      id: this.state.activeItem
    })))));
  }

}

/* harmony default export */ var pages_fitness = __webpack_exports__["default"] = (fitness_Fitness);

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

/***/ "aEgt":
/***/ (function(module) {

module.exports = JSON.parse("{\"about_top\":{\"title\":\"Hi, nice to meet you!\",\"quote\":\"“A positive attitude is something everyone can work on, and everyone can learn how to employ it.”\",\"author\":\"Joan Lunden\",\"text\":\"I am an energetic, passionate, self-driven and hard-working individual with immense devotion to Computer Science and Software Engineering. Both a leader and a team-player, I work best in teams, even better under pressure. I love to learn as much as I do in sharing my knowledge, and I am constantly looking for opportunities to improve myself and enhance my skills. I am currently a student at the University of Manchester, pursuing a master’s degree in Advanced Computer Science with a major in Artificial Intelligence.\"},\"about_skill\":{\"title\":\"Technical Skills and Specialties\",\"quote\":\"“One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary”\",\"author\":\"Thomas A. Edison\",\"text\":\"My main specialties cover the areas of Software Engineering and Artificial Intelligence, with an overlap hint of overlap with Data Science. Throughout my years as a professional Software Engineer, I was extensively exposed to various programming languages - particularly JavaScript and Python - as well as various technology stacks as well. I have worked with the ReactJS-Express-MongoDB-NodeJS stack as well as the C#-.NET-OracleDB stack. Throughout my year as an MSc student, I worked primarily on Python, and was exposed to core AI subjects including: Machine Learning, Deep Neural Networks, Natural Language Processing and Computer Vision.\"},\"about_work\":{\"title\":\"Work Experience\",\"quote\":\"“Experience is the teacher of all things”\",\"author\":\"Julius Caesar\",\"text\":\"I have worked as a Software Engineer since the year 2016 during which I did my Internship at Schlumberger, KL. Over the years, I have absolutely no interest in working in jobs other than those that are related to my expertise; Computer Science and/or Software Engineering. Now with my newly-acquired knowledge of Data Science and AI, I would love to work in these fields as well.\"},\"about_education\":{\"title\":\"Education\",\"quote\":\"“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”\",\"author\":\"Malcolm X\",\"text\":\"I own a First Class Honours Bachelor's degree in Computer Science, majoring in Software Engineering from Multimedia University, Cyberjaya. I am currently pursuing my master's degree in Advanced Computer Science, majoring in Artificial Intelligence, at the University of Manchester. I expect to graduate in September 2020 with a Distinction.\"},\"projects\":{\"title\":\"My Portfolio\",\"quote\":\"“Anyone who has never made a mistake has never tried anything new.”\",\"author\":\"Albert Einstein\",\"text\":\"Throughout the past years, I have worked on various projects academically, professionally as well as personally. I love to push myself out of my comfort zone to try new possibilities, as well as to try out new technologies and concepts. I am not afraid of failing, but I am afraid of not trying at all.\"},\"fitness\":{\"title\":\"Fitness\",\"quote\":\"“The World is A Book and Those who Do not Travel read only a Page”\",\"author\":\"St. Augustine\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"travel\":{\"title\":\"Travel\",\"quote\":\"“The World is A Book and Those who Do not Travel read only a Page”\",\"author\":\"St. Augustine\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"}}");

/***/ }),

/***/ "biE2":
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "iwtP":
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "lXDw":
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

/***/ "lfOJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ZfN1");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ContentLayout = props => {
  return __jsx(_BaseLayout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (ContentLayout); // {props.children.map((child, idx) => {
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

/***/ "mtDU":
/***/ (function(module, exports) {

module.exports = {
	"title": "_1qJqvjFdArUczCb9Hw-xG1",
	"quote": "_3cUM3i_ShnS59iohtQew57",
	"author": "lV8OG2KRXm5Csh6a3S3pS",
	"text": "nTfcgQMaTNiKLER9c4L0z"
};

/***/ }),

/***/ "tQjn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KwCx");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iwtP");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("IrP5");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ContentContainer = props => {
  return __jsx("div", {
    className: "contentContainer"
  }, props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (ContentContainer);
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

/***/ "z3HB":
/***/ (function(module, exports) {

module.exports = {
	"tabContainer": "_2Us9WewTmbvlOKZCqMMP4e",
	"active": "_3he9mWRDgEgjRmSH-yuGUA"
};

/***/ })

/******/ });