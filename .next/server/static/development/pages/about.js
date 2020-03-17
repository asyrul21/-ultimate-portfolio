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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
    }, __jsx("a", {
      className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.innerLogo
    }))), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("a", null, "About")), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/projects"
    }, __jsx("a", null, "Projects")), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/fitness"
    }, __jsx("a", null, "Fitness")), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blogs"
    }, __jsx("a", null, "Blogs")), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("a", null, "About")), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/projects"
    }, __jsx("a", null, "Projects")), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/fitness"
    }, __jsx("a", null, "Fitness")), __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blogs"
    }, __jsx("a", null, "Blogs"))), __jsx("div", {
      className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.login
    }, __jsx(next_Link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", null, "Log In"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/shared/SkillGraphics.js":
/*!********************************************!*\
  !*** ./components/shared/SkillGraphics.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_skillgraphic_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/skillgraphic.module.scss */ "./components/shared/styles/skillgraphic.module.scss");
/* harmony import */ var _styles_skillgraphic_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_skillgraphic_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _skills_Specialties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills/Specialties */ "./components/shared/skills/Specialties.js");
/* harmony import */ var _skills_SkillBars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skills/SkillBars */ "./components/shared/skills/SkillBars.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import specific style here
 // import relevant components




const SkillGraphics = () => {
  return __jsx("div", {
    className: _styles_skillgraphic_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.graphicsContainer
  }, __jsx(_skills_Specialties__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_skills_SkillBars__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (SkillGraphics);

/***/ }),

/***/ "./components/shared/Timeline.js":
/*!***************************************!*\
  !*** ./components/shared/Timeline.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/timeline.module.scss */ "./components/shared/styles/timeline.module.scss");
/* harmony import */ var _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import specific style here



const Timeline = props => {
  return (// <div className={cx('contentContainer')}>
    __jsx("div", {
      className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.timelineContainer
    }, props.data.map((item, idx) => {
      return __jsx("div", {
        key: idx,
        className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.timelineItem
      }, __jsx("div", {
        className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ball
      }), __jsx("div", {
        className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title
      }, item.title, ' ', __jsx("span", {
        className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.grade
      }, item.grade)), __jsx("div", {
        className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title
      }, item.sub), item.title && __jsx("div", {
        className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.time
      }, "(", item.time, ")"), __jsx("div", {
        className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text
      }, item.text), item.title && idx != props.data.length - 1 && __jsx("div", {
        align: "left",
        className: _styles_timeline_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.separator
      }));
    })) //</div> 

  );
};

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./components/shared/skills/Hexagon.js":
/*!*********************************************!*\
  !*** ./components/shared/skills/Hexagon.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hexagon_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hexagon.module.scss */ "./components/shared/skills/hexagon.module.scss");
/* harmony import */ var _hexagon_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hexagon_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import specific style here



const Hexagon = props => {
  return __jsx("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(_hexagon_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hexagonContainer, props.style)
  }, __jsx("img", null), __jsx("div", {
    className: _hexagon_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hexagon
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Hexagon); // "/static/images/specialties/ml.png"

/***/ }),

/***/ "./components/shared/skills/SkillBar.js":
/*!**********************************************!*\
  !*** ./components/shared/skills/SkillBar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _skillbar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skillbar.module.scss */ "./components/shared/skills/skillbar.module.scss");
/* harmony import */ var _skillbar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_4__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import specific style here





class SkillBar extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  // state = {
  //     visible: this.props.visible
  // }
  render() {
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3851723156", [this.props.visible ? this.props.stats : 5]]]) + " " + (_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.skillBarContainer || "")
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3851723156", [this.props.visible ? this.props.stats : 5]]]) + " " + (_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.skill || "")
    }, __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3851723156", [this.props.visible ? this.props.stats : 5]]])
    }, this.props.skill)), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3851723156", [this.props.visible ? this.props.stats : 5]]]) + " " + (_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.statsContainer || "")
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3851723156", [this.props.visible ? this.props.stats : 5]]]) + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()(_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.stats, 'statsAnimate') || "")
    })), __jsx("span", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3851723156", [this.props.visible ? this.props.stats : 5]]]) + " " + 'span2'
    }, this.props.stats, "%"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3851723156",
      dynamic: [this.props.visible ? this.props.stats : 5]
    }, `.statsAnimate.__jsx-style-dynamic-selector{-webkit-animation:expand-__jsx-style-dynamic-selector 1s ease-in;animation:expand-__jsx-style-dynamic-selector 1s ease-in;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.span2.__jsx-style-dynamic-selector{-webkit-animation:fadeIn-__jsx-style-dynamic-selector 0.5s ease-in forwards;animation:fadeIn-__jsx-style-dynamic-selector 0.5s ease-in forwards;-webkit-animation-delay:1s;animation-delay:1s;}@-webkit-keyframes expand-__jsx-style-dynamic-selector{from{width:1%;}to{width:${this.props.visible ? this.props.stats : 5}%;}}@keyframes expand-__jsx-style-dynamic-selector{from{width:1%;}to{width:${this.props.visible ? this.props.stats : 5}%;}}@-webkit-keyframes fadeIn-__jsx-style-dynamic-selector{to{opacity:1;}}@keyframes fadeIn-__jsx-style-dynamic-selector{to{opacity:1;}}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvc2tpbGxzL1NraWxsQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CNEIsQUFHcUQsQUFXVyxBQU01QixBQUcyQixBQU0xQixTQVJaLENBU0EsMEJBTkEsc0ZBcEI2QixzQkFZbEMsNENBVkMsRUFVQSIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvc2hhcmVkL3NraWxscy9Ta2lsbEJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBzcGVjaWZpYyBzdHlsZSBoZXJlXG5pbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc2tpbGxiYXJTdHlsZXMgZnJvbSAnLi9za2lsbGJhci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBWaXNpYmlsaXR5U2Vuc29yIGZyb20gJ3JlYWN0LXZpc2liaWxpdHktc2Vuc29yJ1xuXG5jbGFzcyBTa2lsbEJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgLy8gc3RhdGUgPSB7XG4gICAgLy8gICAgIHZpc2libGU6IHRoaXMucHJvcHMudmlzaWJsZVxuICAgIC8vIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NraWxsYmFyU3R5bGVzLnNraWxsQmFyQ29udGFpbmVyfSA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NraWxsYmFyU3R5bGVzLnNraWxsfT48c3Bhbj57dGhpcy5wcm9wcy5za2lsbH08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NraWxsYmFyU3R5bGVzLnN0YXRzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2N4KHNraWxsYmFyU3R5bGVzLnN0YXRzLCAnc3RhdHNBbmltYXRlJyl9PjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3BhbjInPnt0aGlzLnByb3BzLnN0YXRzfSU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAuc3RhdHNBbmltYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZXhwYW5kIDFzIGVhc2UtaW47XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyAuc3BhbjF7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UtaW4gZm9yd2FyZHM7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC5zcGFuMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2UtaW4gZm9yd2FyZHM7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDFzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBleHBhbmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICR7dGhpcy5wcm9wcy52aXNpYmxlID8gdGhpcy5wcm9wcy5zdGF0cyA6IDV9JTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTa2lsbEJhcjtcblxuLy8gc3R5bGU9e3sgd2lkdGg6IGAke3Byb3BzLnN0YXRzfSVgIH19XG4gICAgICAgICAgICAgICAvLyB3aWR0aDogJHtwcm9wcy5zdGF0c30lOyJdfQ== */
/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/skills/SkillBar.js */`));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SkillBar); // style={{ width: `${props.stats}%` }}
// width: ${props.stats}%;

/***/ }),

/***/ "./components/shared/skills/SkillBars.js":
/*!***********************************************!*\
  !*** ./components/shared/skills/SkillBars.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _skillbar_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skillbar.module.scss */ "./components/shared/skills/skillbar.module.scss");
/* harmony import */ var _skillbar_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_skillbar_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-visibility-sensor */ "react-visibility-sensor");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SkillBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SkillBar */ "./components/shared/skills/SkillBar.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import specific style here





class SkillBars extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      visible: false
    });
  }

  render() {
    return __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default.a, {
      partialVisibility: true,
      onChange: isVisible => {
        if (!this.state.visible) {
          this.setState({
            visible: isVisible
          });
        }
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["463741454", [this.state.visible ? 1 : 0]]]) + " " + 'skillbarsContainer'
    }, __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: this.state.visible,
      skill: "Python",
      stats: "80"
    }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: this.state.visible,
      skill: "JavaScript",
      stats: "80"
    }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: this.state.visible,
      skill: "React",
      stats: "70"
    }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: this.state.visible,
      skill: "Express",
      stats: "70"
    }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: this.state.visible,
      skill: "Figma",
      stats: "60"
    }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: this.state.visible,
      skill: "C#",
      stats: "75"
    }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: this.state.visible,
      skill: "C/C++",
      stats: "80"
    }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: this.state.visible,
      skill: "Guitar",
      stats: "60"
    }), __jsx(_SkillBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      visible: this.state.visible,
      skill: "Gardening",
      stats: "10"
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "463741454",
      dynamic: [this.state.visible ? 1 : 0]
    }, `.skillbarsContainer.__jsx-style-dynamic-selector{padding:0;margin:0;height:420px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;opacity:${this.state.visible ? 1 : 0};-webkit-transition:opacity 1s linear;transition:opacity 1s linear;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hc3lydWxoYWZldHp5L0RvY3VtZW50cy9DU0RldmVsb3BtZW50L1dlYi9teVVsdGltYXRlUG9ydGZvbGlvL3VsdGltYXRlcG9ydGZvbGlvLW5leHQvY29tcG9uZW50cy9zaGFyZWQvc2tpbGxzL1NraWxsQmFycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2lDLEFBR3VDLFVBQ0QsU0FDSSxhQUVBLDBFQUNTLDhFQUNRLG1IQUVPLHFDQUNSLGtFQUNqQyIsImZpbGUiOiIvVXNlcnMvYXN5cnVsaGFmZXR6eS9Eb2N1bWVudHMvQ1NEZXZlbG9wbWVudC9XZWIvbXlVbHRpbWF0ZVBvcnRmb2xpby91bHRpbWF0ZXBvcnRmb2xpby1uZXh0L2NvbXBvbmVudHMvc2hhcmVkL3NraWxscy9Ta2lsbEJhcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgc3BlY2lmaWMgc3R5bGUgaGVyZVxuaW1wb3J0IHJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHNraWxsYmFyU3R5bGVzIGZyb20gJy4vc2tpbGxiYXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFZpc2liaWxpdHlTZW5zb3IgZnJvbSAncmVhY3QtdmlzaWJpbGl0eS1zZW5zb3InXG5cbmltcG9ydCBTa2lsbEJhciBmcm9tICcuL1NraWxsQmFyJ1xuXG5jbGFzcyBTa2lsbEJhcnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yXG4gICAgICAgICAgICAgICAgcGFydGlhbFZpc2liaWxpdHlcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGlzVmlzaWJsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUudmlzaWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZpc2libGU6IGlzVmlzaWJsZSB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2tpbGxiYXJzQ29udGFpbmVyJyA+XG4gICAgICAgICAgICAgICAgICAgIDxTa2lsbEJhciB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9IHNraWxsPSdQeXRob24nIHN0YXRzPSc4MCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNraWxsQmFyIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX0gc2tpbGw9J0phdmFTY3JpcHQnIHN0YXRzPSc4MCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNraWxsQmFyIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX0gc2tpbGw9J1JlYWN0JyBzdGF0cz0nNzAnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTa2lsbEJhciB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9IHNraWxsPSdFeHByZXNzJyBzdGF0cz0nNzAnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTa2lsbEJhciB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9IHNraWxsPSdGaWdtYScgc3RhdHM9JzYwJyAvPlxuICAgICAgICAgICAgICAgICAgICA8U2tpbGxCYXIgdmlzaWJsZT17dGhpcy5zdGF0ZS52aXNpYmxlfSBza2lsbD0nQyMnIHN0YXRzPSc3NScgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNraWxsQmFyIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX0gc2tpbGw9J0MvQysrJyBzdGF0cz0nODAnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxTa2lsbEJhciB2aXNpYmxlPXt0aGlzLnN0YXRlLnZpc2libGV9IHNraWxsPSdHdWl0YXInIHN0YXRzPSc2MCcgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNraWxsQmFyIHZpc2libGU9e3RoaXMuc3RhdGUudmlzaWJsZX0gc2tpbGw9J0dhcmRlbmluZycgc3RhdHM9JzEwJyAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBzdHlsaW5nIHVzaW5nIENTUyBpbiBKUyAqL31cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD4ge2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5za2lsbGJhcnNDb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDIwcHg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogJHt0aGlzLnN0YXRlLnZpc2libGUgPyAxIDogMH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBsaW5lYXI7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGUgPlxuICAgICAgICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxCYXJzOyJdfQ== */
/*@ sourceURL=/Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/components/shared/skills/SkillBars.js */`)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SkillBars);

/***/ }),

/***/ "./components/shared/skills/Specialties.js":
/*!*************************************************!*\
  !*** ./components/shared/skills/Specialties.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _specialties_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specialties.module.scss */ "./components/shared/skills/specialties.module.scss");
/* harmony import */ var _specialties_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_specialties_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Specialty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Specialty */ "./components/shared/skills/Specialty.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import specific style here
 // import relevant components



const Specialties = () => {
  return __jsx("div", {
    className: _specialties_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.specialtiesContainer
  }, __jsx(_Specialty__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Machine Learning",
    sub: "Supervised, Unsupervised",
    style: _specialties_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.ml
  }), __jsx(_Specialty__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Chatbots",
    sub: "Querying Knowledge Graphs",
    style: _specialties_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.robot
  }), __jsx(_Specialty__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Natural Language Processing",
    sub: "Text Mining Pipeline",
    style: _specialties_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.nlp
  }), __jsx(_Specialty__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Software Engineering",
    sub: "Full-stack Web Development",
    style: _specialties_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.se
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Specialties);

/***/ }),

/***/ "./components/shared/skills/Specialty.js":
/*!***********************************************!*\
  !*** ./components/shared/skills/Specialty.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _specialty_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specialty.module.scss */ "./components/shared/skills/specialty.module.scss");
/* harmony import */ var _specialty_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_specialty_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Hexagon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hexagon */ "./components/shared/skills/Hexagon.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import specific style here
 // import relevant components



const Specialty = props => {
  return __jsx("div", {
    className: _specialty_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.specialtyContainer
  }, __jsx(_Hexagon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: props.style
  }), __jsx("p", {
    className: _specialty_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title
  }, props.title), __jsx("p", {
    className: _specialty_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.sub
  }, props.sub));
};

/* harmony default export */ __webpack_exports__["default"] = (Specialty);

/***/ }),

/***/ "./components/shared/skills/hexagon.module.scss":
/*!******************************************************!*\
  !*** ./components/shared/skills/hexagon.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"hexagonContainer": "hBEYRskoJVNSrZpcq_q1v",
	"ml": "_1hAZ_2bWel_tI3n1Fv2IN3",
	"hexagon": "_3wr5roWCjxm2MuwTOa8x1_",
	"rotation": "_3r8uUYD0jYD0ufO32Ptvm"
};

/***/ }),

/***/ "./components/shared/skills/skillbar.module.scss":
/*!*******************************************************!*\
  !*** ./components/shared/skills/skillbar.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"skillBarContainer": "_1xl2X4QSeyI12-7M6IFu8c",
	"skill": "_3ru7x4_zsS1uSTN_n4ZN3n",
	"statsContainer": "_2FHjsU-Df7Oc7gBUWnHrNL",
	"stats": "_2o-5bA9iHN8ueHi7p6EaVI"
};

/***/ }),

/***/ "./components/shared/skills/specialties.module.scss":
/*!**********************************************************!*\
  !*** ./components/shared/skills/specialties.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"specialtiesContainer": "dPgXLwbmdbiH4SZ7LLP-1",
	"ml": "_13VWTdaTLgZMuUXo_YDLqF",
	"robot": "_1ZxyB_O2uLMC6EmQ6H4uuI",
	"nlp": "_2IjlLPr2o1gDFz6VNLCOD4",
	"se": "_1GSobTqM8rnxGEPUWS8oMX",
	"bigdata": "_1slb7aWKib8dC7786R_mNS",
	"rotation": "_1o8bu0b7g8AkZ6Rk0g_1CC",
	"rotation-anti": "_2JUaQK39KUGTIs8Nk61vRI",
	"rotate-back": "rm0fyz_jVqgB2YtQyIvc5"
};

/***/ }),

/***/ "./components/shared/skills/specialty.module.scss":
/*!********************************************************!*\
  !*** ./components/shared/skills/specialty.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"specialtyContainer": "EPRlncvCdvWRVh8-NEwjV",
	"title": "r7G-_Tc8Pgr1-E50yRw7D",
	"sub": "_2Ic5Sicwgj0OCY1AojKl3R"
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
	"innerLogo": "YLc3V1jOJQDlT1pigyU-m",
	"navLinks": "kPFk5WKPQbwwEkuo5RDYZ",
	"login": "_3MvDr5m91Pmmjf-i_ytVaJ",
	"showNav": "_3Z7Nj8sD8W-qNi1c5vPZY4",
	"slideDown": "HIFhD7XAyO9o5tAYfgII5"
};

/***/ }),

/***/ "./components/shared/styles/skillgraphic.module.scss":
/*!***********************************************************!*\
  !*** ./components/shared/styles/skillgraphic.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/shared/styles/timeline.module.scss":
/*!*******************************************************!*\
  !*** ./components/shared/styles/timeline.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"timelineContainer": "_1gz8WVIRY01mgPwgmG1it9",
	"timelineItem": "_3O5WlyrJkDdPrTpcIQrFSa",
	"title": "_3Ymvf0f66co0Op9wUO8oiA",
	"time": "Ya8Ns6nsXoGJ6zAmmq4Dm",
	"text": "_3M0zgXAIG34Gn7vlTzqetu",
	"grade": "_2bZweFgbhSrHfoG6_B5srG",
	"ball": "_1y7EnvO89BxiPGskuIxqRM",
	"separator": "_1tRGPJAkQ2JyXV_uTtwZ4m"
};

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
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
/* harmony import */ var _components_shared_Timeline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared/Timeline */ "./components/shared/Timeline.js");
/* harmony import */ var _components_shared_SkillGraphics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shared/SkillGraphics */ "./components/shared/SkillGraphics.js");
/* harmony import */ var _public_static_data_work_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/static/data/work.json */ "./public/static/data/work.json");
var _public_static_data_work_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/static/data/work.json */ "./public/static/data/work.json", 1);
/* harmony import */ var _public_static_data_education_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/static/data/education.json */ "./public/static/data/education.json");
var _public_static_data_education_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/static/data/education.json */ "./public/static/data/education.json", 1);
/* harmony import */ var _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/static/data/contentHeads.json */ "./public/static/data/contentHeads.json");
var _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../public/static/data/contentHeads.json */ "./public/static/data/contentHeads.json", 1);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_about_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/about.module.scss */ "./pages/styles/about.module.scss");
/* harmony import */ var _styles_about_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_about_module_scss__WEBPACK_IMPORTED_MODULE_12__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import layouts


 //import components



 //import data



 //React Reveal Animation

 //global styles can be found at ../styles/main.scss
//import specific styling module



class About extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    // console.log(contentHeadData.about_top)
    return __jsx(_components_layouts_ContentLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, __jsx("section", null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('hero', _styles_about_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.aboutHero)
    }), __jsx(_components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11___default.a, {
      delay: 200
    }, __jsx(_components_shared_ContentHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_10__.about_top
    })))), __jsx("section", null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('hero', _styles_about_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.skillHero)
    }), __jsx(_components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11___default.a, {
      delay: 200
    }, __jsx(_components_shared_ContentHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_10__.about_skill
    })), __jsx(_components_shared_SkillGraphics__WEBPACK_IMPORTED_MODULE_7__["default"], null))), __jsx("section", null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('hero', _styles_about_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.workHero)
    }), __jsx(_components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11___default.a, {
      delay: 200
    }, __jsx(_components_shared_ContentHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_10__.about_work
    })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11___default.a, {
      delay: 300
    }, __jsx(_components_shared_Timeline__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: _public_static_data_work_json__WEBPACK_IMPORTED_MODULE_8__.work
    })))), __jsx("section", null, __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('hero', _styles_about_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.educationHero)
    }), __jsx(_components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11___default.a, {
      delay: 200
    }, __jsx(_components_shared_ContentHead__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: _public_static_data_contentHeads_json__WEBPACK_IMPORTED_MODULE_10__.about_education
    })), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_11___default.a, {
      delay: 300
    }, __jsx(_components_shared_Timeline__WEBPACK_IMPORTED_MODULE_6__["default"], {
      data: _public_static_data_education_json__WEBPACK_IMPORTED_MODULE_9__.education
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./pages/styles/about.module.scss":
/*!****************************************!*\
  !*** ./pages/styles/about.module.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"aboutHero": "_2IPjBvKLklHNGOw9B57hZi",
	"skillHero": "_6CFWrb-v32RKCgSbNHdM4",
	"workHero": "_1vtSvnJFaK8-Hwf7E6SbWv",
	"educationHero": "_2guBLTSEwhldHqNw03PBfz"
};

/***/ }),

/***/ "./public/static/data/contentHeads.json":
/*!**********************************************!*\
  !*** ./public/static/data/contentHeads.json ***!
  \**********************************************/
/*! exports provided: about_top, about_skill, about_work, about_education, projects, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"about_top\":{\"title\":\"Hi, nice to meet you!\",\"quote\":\"“One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary”\",\"author\":\"Thomas A. Edison\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"about_skill\":{\"title\":\"Skills and Specialties\",\"quote\":\"“One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary”\",\"author\":\"Thomas A. Edison\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"about_work\":{\"title\":\"Work Experience\",\"quote\":\"“One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary”\",\"author\":\"Thomas A. Edison\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"about_education\":{\"title\":\"Education\",\"quote\":\"“One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary”\",\"author\":\"Thomas A. Edison\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"projects\":{\"title\":\"My Portfolio\",\"quote\":\"“The World is A Book and Those who Do not Travel read only a Page”\",\"author\":\"St. Augustine\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"}}");

/***/ }),

/***/ "./public/static/data/education.json":
/*!*******************************************!*\
  !*** ./public/static/data/education.json ***!
  \*******************************************/
/*! exports provided: education, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"education\":[{\"title\":\"Assistant Manager, C# ESRI GIS Application Developer\",\"sub\":\"Telekom Malaysia Berhad\",\"time\":\"month 2019 - month 2019\",\"grade\":\"Grade: Distinction\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one.\"},{\"title\":\"Assistant Manager, C# ESRI GIS Application Developer\",\"sub\":\"Telekom Malaysia Berhad\",\"time\":\"month 2019 - month 2019\",\"grade\":\"Grade: Distinction\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one.\"},{\"title\":\"Assistant Manager, C# ESRI GIS Application Developer\",\"sub\":\"Telekom Malaysia Berhad\",\"time\":\"month 2019 - month 2019\",\"grade\":\"Grade: Distinction\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one.\"}]}");

/***/ }),

/***/ "./public/static/data/work.json":
/*!**************************************!*\
  !*** ./public/static/data/work.json ***!
  \**************************************/
/*! exports provided: work, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"work\":[{},{\"title\":\"Assistant Manager, C# ESRI GIS Application Developer\",\"sub\":\"Telekom Malaysia Berhad\",\"time\":\"month 2019 - month 2019\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one.\"},{\"title\":\"Assistant Manager, C# ESRI GIS Application Developer\",\"sub\":\"Telekom Malaysia Berhad\",\"time\":\"month 2019 - month 2019\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one.\"},{\"title\":\"Assistant Manager, C# ESRI GIS Application Developer\",\"sub\":\"Telekom Malaysia Berhad\",\"time\":\"month 2019 - month 2019\",\"text\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one.\"}]}");

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/asyrulhafetzy/Documents/CSDevelopment/Web/myUltimatePortfolio/ultimateportfolio-next/pages/about.js */"./pages/about.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion");

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
//# sourceMappingURL=about.js.map