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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/6kG":
/***/ (function(module, exports) {

module.exports = {
	"hexagonContainer": "hBEYRskoJVNSrZpcq_q1v",
	"ml": "_1hAZ_2bWel_tI3n1Fv2IN3",
	"hexagon": "_3wr5roWCjxm2MuwTOa8x1_",
	"rotation": "_3r8uUYD0jYD0ufO32Ptvm"
};

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Juyh");


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

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IK1M":
/***/ (function(module, exports) {



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

/***/ "Juyh":
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

// EXTERNAL MODULE: ./components/shared/styles/timeline.module.scss
var timeline_module = __webpack_require__("abBs");
var timeline_module_default = /*#__PURE__*/__webpack_require__.n(timeline_module);

// CONCATENATED MODULE: ./components/shared/Timeline.js

var __jsx = external_react_default.a.createElement;

 // import specific style here



const Timeline = props => {
  return (// <div className={cx('contentContainer')}>
    __jsx("div", {
      className: timeline_module_default.a.timelineContainer
    }, props.data.map((item, idx) => {
      return __jsx("div", {
        key: idx,
        className: timeline_module_default.a.timelineItem
      }, __jsx("div", {
        className: timeline_module_default.a.ball
      }), __jsx("div", {
        className: timeline_module_default.a.title
      }, item.title, ' ', __jsx("span", {
        className: timeline_module_default.a.grade
      }, item.grade)), __jsx("div", {
        className: timeline_module_default.a.title
      }, item.sub), item.title && __jsx("div", {
        className: timeline_module_default.a.time
      }, "(", item.time, ")"), __jsx("div", {
        className: timeline_module_default.a.text
      }, item.text), item.title && idx != props.data.length - 1 && __jsx("div", {
        align: "left",
        className: timeline_module_default.a.separator
      }));
    })) //</div> 

  );
};

/* harmony default export */ var shared_Timeline = (Timeline);
// EXTERNAL MODULE: ./components/shared/styles/skillgraphic.module.scss
var skillgraphic_module = __webpack_require__("IK1M");
var skillgraphic_module_default = /*#__PURE__*/__webpack_require__.n(skillgraphic_module);

// EXTERNAL MODULE: ./components/shared/skills/specialties.module.scss
var specialties_module = __webpack_require__("mBkN");
var specialties_module_default = /*#__PURE__*/__webpack_require__.n(specialties_module);

// EXTERNAL MODULE: ./components/shared/skills/specialty.module.scss
var specialty_module = __webpack_require__("UWut");
var specialty_module_default = /*#__PURE__*/__webpack_require__.n(specialty_module);

// EXTERNAL MODULE: ./components/shared/skills/hexagon.module.scss
var hexagon_module = __webpack_require__("/6kG");
var hexagon_module_default = /*#__PURE__*/__webpack_require__.n(hexagon_module);

// CONCATENATED MODULE: ./components/shared/skills/Hexagon.js

var Hexagon_jsx = external_react_default.a.createElement;
// import specific style here



const Hexagon = props => {
  return Hexagon_jsx("div", {
    className: external_classnames_default()(hexagon_module_default.a.hexagonContainer, props.style)
  }, Hexagon_jsx("img", null), Hexagon_jsx("div", {
    className: hexagon_module_default.a.hexagon
  }));
};

/* harmony default export */ var skills_Hexagon = (Hexagon); // "/static/images/specialties/ml.png"
// CONCATENATED MODULE: ./components/shared/skills/Specialty.js

var Specialty_jsx = external_react_default.a.createElement;
// import specific style here
 // import relevant components



const Specialty = props => {
  return Specialty_jsx("div", {
    className: specialty_module_default.a.specialtyContainer
  }, Specialty_jsx(skills_Hexagon, {
    style: props.style
  }), Specialty_jsx("p", {
    className: specialty_module_default.a.title
  }, props.title), Specialty_jsx("p", {
    className: specialty_module_default.a.sub
  }, props.sub));
};

/* harmony default export */ var skills_Specialty = (Specialty);
// CONCATENATED MODULE: ./components/shared/skills/Specialties.js

var Specialties_jsx = external_react_default.a.createElement;
// import specific style here
 // import relevant components



const Specialties = () => {
  return Specialties_jsx("div", {
    className: specialties_module_default.a.specialtiesContainer
  }, Specialties_jsx(skills_Specialty, {
    title: "Machine Learning",
    sub: "Supervised, Unsupervised",
    style: specialties_module_default.a.ml
  }), Specialties_jsx(skills_Specialty, {
    title: "Chatbots",
    sub: "Querying Knowledge Graphs",
    style: specialties_module_default.a.robot
  }), Specialties_jsx(skills_Specialty, {
    title: "Natural Language Processing",
    sub: "Text Mining Pipeline",
    style: specialties_module_default.a.nlp
  }), Specialties_jsx(skills_Specialty, {
    title: "Software Engineering",
    sub: "Full-stack Web Development",
    style: specialties_module_default.a.se
  }));
};

/* harmony default export */ var skills_Specialties = (Specialties);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./components/shared/skills/skillbar.module.scss
var skillbar_module = __webpack_require__("XGBe");
var skillbar_module_default = /*#__PURE__*/__webpack_require__.n(skillbar_module);

// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__("iwtP");
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);

// CONCATENATED MODULE: ./components/shared/skills/SkillBar.js


var SkillBar_jsx = external_react_default.a.createElement;
// import specific style here





class SkillBar_SkillBar extends external_react_default.a.Component {
  // state = {
  //     visible: this.props.visible
  // }
  render() {
    return SkillBar_jsx("div", {
      className: style_default.a.dynamic([["3851723156", [this.props.visible ? this.props.stats : 5]]]) + " " + (skillbar_module_default.a.skillBarContainer || "")
    }, SkillBar_jsx("div", {
      className: style_default.a.dynamic([["3851723156", [this.props.visible ? this.props.stats : 5]]]) + " " + (skillbar_module_default.a.skill || "")
    }, SkillBar_jsx("span", {
      className: style_default.a.dynamic([["3851723156", [this.props.visible ? this.props.stats : 5]]])
    }, this.props.skill)), SkillBar_jsx("div", {
      className: style_default.a.dynamic([["3851723156", [this.props.visible ? this.props.stats : 5]]]) + " " + (skillbar_module_default.a.statsContainer || "")
    }, SkillBar_jsx("div", {
      className: style_default.a.dynamic([["3851723156", [this.props.visible ? this.props.stats : 5]]]) + " " + (external_classnames_default()(skillbar_module_default.a.stats, 'statsAnimate') || "")
    })), SkillBar_jsx("span", {
      className: style_default.a.dynamic([["3851723156", [this.props.visible ? this.props.stats : 5]]]) + " " + 'span2'
    }, this.props.stats, "%"), SkillBar_jsx(style_default.a, {
      id: "3851723156",
      dynamic: [this.props.visible ? this.props.stats : 5]
    }, [".statsAnimate.__jsx-style-dynamic-selector{-webkit-animation:expand-__jsx-style-dynamic-selector 1s ease-in;animation:expand-__jsx-style-dynamic-selector 1s ease-in;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}", ".span2.__jsx-style-dynamic-selector{-webkit-animation:fadeIn-__jsx-style-dynamic-selector 0.5s ease-in forwards;animation:fadeIn-__jsx-style-dynamic-selector 0.5s ease-in forwards;-webkit-animation-delay:1s;animation-delay:1s;}", `@-webkit-keyframes expand-__jsx-style-dynamic-selector{from{width:1%;}to{width:${this.props.visible ? this.props.stats : 5}%;}}`, `@keyframes expand-__jsx-style-dynamic-selector{from{width:1%;}to{width:${this.props.visible ? this.props.stats : 5}%;}}`, "@-webkit-keyframes fadeIn-__jsx-style-dynamic-selector{to{opacity:1;}}", "@keyframes fadeIn-__jsx-style-dynamic-selector{to{opacity:1;}}"]));
  }

}

/* harmony default export */ var skills_SkillBar = (SkillBar_SkillBar); // style={{ width: `${props.stats}%` }}
// width: ${props.stats}%;
// CONCATENATED MODULE: ./components/shared/skills/SkillBars.js


var SkillBars_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import specific style here





class SkillBars_SkillBars extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      visible: false
    });
  }

  render() {
    return SkillBars_jsx(external_react_visibility_sensor_default.a, {
      partialVisibility: true,
      onChange: isVisible => {
        if (!this.state.visible) {
          this.setState({
            visible: isVisible
          });
        }
      }
    }, SkillBars_jsx("div", {
      className: style_default.a.dynamic([["463741454", [this.state.visible ? 1 : 0]]]) + " " + 'skillbarsContainer'
    }, SkillBars_jsx(skills_SkillBar, {
      visible: this.state.visible,
      skill: "Python",
      stats: "80"
    }), SkillBars_jsx(skills_SkillBar, {
      visible: this.state.visible,
      skill: "JavaScript",
      stats: "80"
    }), SkillBars_jsx(skills_SkillBar, {
      visible: this.state.visible,
      skill: "React",
      stats: "70"
    }), SkillBars_jsx(skills_SkillBar, {
      visible: this.state.visible,
      skill: "Express",
      stats: "70"
    }), SkillBars_jsx(skills_SkillBar, {
      visible: this.state.visible,
      skill: "Figma",
      stats: "60"
    }), SkillBars_jsx(skills_SkillBar, {
      visible: this.state.visible,
      skill: "C#",
      stats: "75"
    }), SkillBars_jsx(skills_SkillBar, {
      visible: this.state.visible,
      skill: "C/C++",
      stats: "80"
    }), SkillBars_jsx(skills_SkillBar, {
      visible: this.state.visible,
      skill: "Guitar",
      stats: "60"
    }), SkillBars_jsx(skills_SkillBar, {
      visible: this.state.visible,
      skill: "Gardening",
      stats: "10"
    }), SkillBars_jsx(style_default.a, {
      id: "463741454",
      dynamic: [this.state.visible ? 1 : 0]
    }, [`.skillbarsContainer.__jsx-style-dynamic-selector{padding:0;margin:0;height:420px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;opacity:${this.state.visible ? 1 : 0};-webkit-transition:opacity 1s linear;transition:opacity 1s linear;}`])));
  }

}

/* harmony default export */ var skills_SkillBars = (SkillBars_SkillBars);
// CONCATENATED MODULE: ./components/shared/SkillGraphics.js

var SkillGraphics_jsx = external_react_default.a.createElement;
// import specific style here
 // import relevant components




const SkillGraphics = () => {
  return SkillGraphics_jsx("div", {
    className: skillgraphic_module_default.a.graphicsContainer
  }, SkillGraphics_jsx(skills_Specialties, null), SkillGraphics_jsx(skills_SkillBars, null));
};

/* harmony default export */ var shared_SkillGraphics = (SkillGraphics);
// EXTERNAL MODULE: ./public/static/data/work.json
var work = __webpack_require__("jUBc");

// EXTERNAL MODULE: ./public/static/data/education.json
var education = __webpack_require__("mfyX");

// EXTERNAL MODULE: ./public/static/data/contentHeads.json
var contentHeads = __webpack_require__("aEgt");

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// EXTERNAL MODULE: ./pages/styles/about.module.scss
var about_module = __webpack_require__("xB9Y");
var about_module_default = /*#__PURE__*/__webpack_require__.n(about_module);

// CONCATENATED MODULE: ./pages/about.js

var about_jsx = external_react_default.a.createElement;


 // import layouts


 //import components



 //import data



 //React Reveal Animation

 //global styles can be found at ../styles/main.scss
//import specific styling module



class about_About extends external_react_default.a.Component {
  render() {
    // console.log(contentHeadData.about_top)
    return about_jsx(ContentLayout["a" /* default */], null, about_jsx("section", null, about_jsx("div", {
      className: external_classnames_default()('hero', about_module_default.a.aboutHero)
    }), about_jsx(ContentContainer["a" /* default */], null, about_jsx(Fade_default.a, {
      delay: 200
    }, about_jsx(ContentHead["a" /* default */], {
      data: contentHeads.about_top
    })))), about_jsx("section", null, about_jsx("div", {
      className: external_classnames_default()('hero', about_module_default.a.skillHero)
    }), about_jsx(ContentContainer["a" /* default */], null, about_jsx(Fade_default.a, {
      delay: 200
    }, about_jsx(ContentHead["a" /* default */], {
      data: contentHeads.about_skill
    })), about_jsx(shared_SkillGraphics, null))), about_jsx("section", null, about_jsx("div", {
      className: external_classnames_default()('hero', about_module_default.a.workHero)
    }), about_jsx(ContentContainer["a" /* default */], null, about_jsx(Fade_default.a, {
      delay: 200
    }, about_jsx(ContentHead["a" /* default */], {
      data: contentHeads.about_work
    })), about_jsx(Fade_default.a, {
      delay: 300
    }, about_jsx(shared_Timeline, {
      data: work.work
    })))), about_jsx("section", null, about_jsx("div", {
      className: external_classnames_default()('hero', about_module_default.a.educationHero)
    }), about_jsx(ContentContainer["a" /* default */], null, about_jsx(Fade_default.a, {
      delay: 200
    }, about_jsx(ContentHead["a" /* default */], {
      data: contentHeads.about_education
    })), about_jsx(Fade_default.a, {
      delay: 300
    }, about_jsx(shared_Timeline, {
      data: education.education
    })))));
  }

}

/* harmony default export */ var about = __webpack_exports__["default"] = (about_About);
{
  /* <div className={aboutStyles.yasminBoxContainer}>
     <div className={aboutStyles.box}></div>
     <div className={aboutStyles.box}></div>
     <div className={aboutStyles.box}></div>
  </div> */
}

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KwCx":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),

/***/ "UWut":
/***/ (function(module, exports) {

module.exports = {
	"specialtyContainer": "EPRlncvCdvWRVh8-NEwjV",
	"title": "r7G-_Tc8Pgr1-E50yRw7D",
	"sub": "_2Ic5Sicwgj0OCY1AojKl3R"
};

/***/ }),

/***/ "XGBe":
/***/ (function(module, exports) {

module.exports = {
	"skillBarContainer": "_1xl2X4QSeyI12-7M6IFu8c",
	"skill": "_3ru7x4_zsS1uSTN_n4ZN3n",
	"statsContainer": "_2FHjsU-Df7Oc7gBUWnHrNL",
	"stats": "_2o-5bA9iHN8ueHi7p6EaVI"
};

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

/***/ "abBs":
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

/***/ "jUBc":
/***/ (function(module) {

module.exports = JSON.parse("{\"work\":[{\"title\":\"C# .NET ESRI (GIS) Software Engineer\",\"sub\":\"Telekom Malaysia Berhad\",\"time\":\"Oct 2018 – Aug 2019\",\"text\":\"Performed maintenance and enhancements to the software that manages addresses’ geographical information on the Malaysian map. Involved C#, .NET, Oracle DB, and integration with the ESRI ArcGIS Engine. Worked independently to fix and resolve various issues and enhancements.\"},{\"title\":\"Assistant Manager, Map Content Developer\",\"sub\":\"Telekom Malaysia Berhad\",\"time\":\"Oct 2017 – Sep 2018\",\"text\":\"Team Lead for the Data Management team of a large-scale, national-level Big Data project named MyIPCS (Malaysia Integrated Population Census System). End-to-end, Big Data processing and analytics web application development, using NodeJS, React and ElasticSearch.\"},{\"title\":\"Assistant Manager, Junior Data Engineer (Python)\",\"sub\":\"Telekom Malaysia Berhad\",\"time\":\"Sep 2017 – Oct 2017\",\"text\":\"I was involved heavily with Python web crawling engine called Scrapy, to crawl and extract data from various websites and news portals. The extracted data is then passed to my superior, who was the Data Scientist of the team.\"},{\"title\":\"Junior Software Developer\",\"sub\":\"Annata\",\"time\":\"Jun 2017 – Aug 2017\",\"text\":\"I was involved in solving software errors and bugs, while working closely with Microsoft Dynamics AX.\"},{\"title\":\"Software Engineer Intern\",\"sub\":\"Schlumberger\",\"time\":\"Mar 2016 – Jun 2016\",\"text\":\"Involved heavily with Microsoft Excel and Microsoft Access, macros, and Visual Basic programming language to automate and assist data management processes.\"}]}");

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

/***/ "mBkN":
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

/***/ "mfyX":
/***/ (function(module) {

module.exports = JSON.parse("{\"education\":[{\"title\":\"The University of Manchester\",\"sub\":\"MSc Advanced Computer Science: Artificial Intelligence\",\"time\":\"Sept 2019 - Sept 20\",\"grade\":\"(Expected) Grade: Distinction\",\"text\":\"The course lasts twelve(12) months of academic year, the first six months of which the following modules were covered: Foundations of Machine Leearning, Data Modelling, Unsupervised Learning, Data Querying, Text Mining/NLP, and Computer Vision, and the other 6 months are for the competion of a full MSc Project with a written Dissertation.\"},{\"title\":\"Multimedia University, Cyberjaya\",\"sub\":\"BSc Computer Science (Software Engineering)\",\"time\":\"Oct 2013 - March 2017\",\"grade\":\"Grade: CGPA 3.71 (First Class Honours)\",\"text\":\"This was when I was exposed to the beauty and excitement of software programming. We covered various topics including Software Design, Web Development, Algorithm Design and Analysis, Artificial Intelligence, Databases, Computer Networks and Security.\"},{\"title\":\"INTEC (International Education Center)\",\"sub\":\"A-Levels\",\"time\":\"Jul 2011 - Jun 2013\",\"grade\":\"Results: Biology: E  Chemistry: D  Mathematics: B\",\"text\":\"This was the point in my life that I actually failed and stumbled. I believe that great people fail, but what makes them great is the fact that they did not stay defeated, but they stay persistent to their goals and dreams, got back up, and try harder/smarter. Walt Disney, Stephen King, Bill Gates, JK Rowling are examples of personalities that failed before succeeding.\"},{\"title\":\"Sekolah Menengah Kebangsaan Taman S.E.A.\",\"sub\":\"Sijil Pelajaran Malaysia (Malaysia Certificate of Education) - equivalent to the O-Levels\",\"time\":\"2006 - 2010\",\"grade\":\"Results: 9A's: 5A+\",\"text\":\"My High School days. Worked very hard to achieve the results.\"}]}");

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

/***/ "xB9Y":
/***/ (function(module, exports) {

module.exports = {
	"aboutHero": "_2IPjBvKLklHNGOw9B57hZi",
	"skillHero": "_6CFWrb-v32RKCgSbNHdM4",
	"workHero": "_1vtSvnJFaK8-Hwf7E6SbWv",
	"educationHero": "_2guBLTSEwhldHqNw03PBfz",
	"yasminBoxContainer": "_122z1L_Fn86hjjGH3l0tNq",
	"box": "_3PM6D4V7MHYF0o8o1cb6DF"
};

/***/ })

/******/ });