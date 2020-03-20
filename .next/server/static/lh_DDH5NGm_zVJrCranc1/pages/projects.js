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

/***/ "+gaU":
/***/ (function(module) {

module.exports = JSON.parse("{\"slugs\":{\"Academic\":[{\"key\":\"rpi\",\"name\":\"Raspberry Pi CNC\"},{\"key\":\"chatbot\",\"name\":\"Chatbot Data Analysis\"}],\"Professional\":[{\"key\":\"esri\",\"name\":\"C# .NET ESRI\"},{\"key\":\"myipcs\",\"name\":\"Big Data (Census)\"},{\"key\":\"webcrawl\",\"name\":\"Python Web Crawl\"}],\"Personal\":[{\"key\":\"wedding\",\"name\":\"Wedding Planner\"},{\"key\":\"wifePort\",\"name\":\"Wife's Portfolio\"},{\"key\":\"ultimatePort\",\"name\":\"Ultimate Portfolio\"},{\"key\":\"recipeBook\",\"name\":\"Recipe Repository\"},{\"key\":\"funfactory\",\"name\":\"Kindergarden Website\"}]},\"proProjects\":{\"esri\":{\"title\":\"Cadu 2 C# and ESRI Development\",\"time\":\"Oct 2018 - Sept 2019\",\"text\":\"For this project I worked with another developer to perform maintenance and enhancements to the software that manages addresses’ geographical information on the Malaysian map. This software is being used internally to update map information regarding for example new household data, removing a household data, editing, and moving properties or roads across the map. The software development stack involved C#, .NET, Oracle DB, and is integrated with the ESRI ArcGIS Engine. Worked independently to fix and resolve various issues and enhancements.\",\"role\":\"Lead Developer\",\"contribution\":\"Fixed over 50+ bugs and did over 30+ feature enhancement on a pre-written code \",\"technology\":[\"C#\",\".NET Framework\",\"OracleDB\",\"ESRIArcGIS\"],\"images\":[\"/static/images/projects/esri/photo1.png\",\"/static/images/projects/esri/photo1.png\",\"/static/images/projects/esri/photo1.png\"]},\"myipcs\":{\"title\":\"Integrated Census (Big Data) Project\",\"time\":\"Oct 2017 - Oct 2018\",\"text\":\"For this project I led a team of six(6) programmers whom I worked with as the Data Management team of a large-scale, national-level Big Data project named MyIPCS (Malaysia Integrated Population Census System). We essentially handled Bi Data preperation - from exporting, cleaning, stemming, then upload them to ElasticSearch. The front-end developers would then query data from this endpoint to build dashboards for users. It was an End-to-end, Big Data processing and analytics web application development, using NodeJS, React and ElasticSearch.\",\"role\":\"Lead Developer\",\"contribution\":\"Address ID Proof of Concept\",\"technology\":[\"NodeJS\",\"ReactJS\",\"ElasticSearch\",\"GraphQL\"],\"images\":[\"/static/images/projects/myipcs/photo1.png\",\"/static/images/projects/myipcs/photo1.png\",\"/static/images/projects/myipcs/photo1.png\"]},\"webcrawl\":{\"title\":\"Web Crawling using Python\",\"time\":\"Sep 2017 - Oct 2017\",\"text\":\"As a Junior Data Engineer, I worked with my superior, who was the Data Scientist, to conduct Big data analytics on customer's insights on the organisation's products and services. My task was to perform web crawling using Python and the Scrapy Web Crawling engine to extract text data from various websites and news portal. The results would then be passed to the Data Scientist for further data analytics tasks. I had to move departments within only one month due to organisational decisions.\",\"role\":\"Junior Data Engineer\",\"contribution\":\"Applied Selenium to automate web browsing, to scrape dynamic web pages.\",\"technology\":[\"Python\",\"Scrapy Web Crawling Engine\",\"Beautiful Soup\",\"XPath\"],\"images\":[\"/static/images/projects/myipcs/photo1.png\",\"/static/images/projects/myipcs/photo1.png\",\"/static/images/projects/myipcs/photo1.png\"]}},\"academicProjects\":{\"rpi\":{\"title\":\"Using Raspberry Pi 3 Model B to Drive a CNC Machine in Real Time\",\"time\":\"2017\",\"intro\":\"This was part of my Bachelor degree's Final Year Project (FYP), which I spent over six months to complete. The project was well out of my degree's syllabus scope, as it covered various concepts such as multi-threading, parallel-processing, electrical signals and Single Board Computers. I developed two main programs; the G-Code Interpreter, and the Interpolation program. These two programs work together to drive an industry-grade Computerised Numerical Control (CNC) machine, which was connected to the Raspberry Pi's pins. \",\"main\":\"A digital image is first converted into a G-Code using a Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) softwares. I would then execute the G-code Interpreter that reads this G-Code file and translate it into a signal file, which is basically a file containing numbers. The Interpolation Program then takes this signal file to produce electrical pulses that drives the CNC machine to move a pen attached to it and draw the digital image on a piece of paper.\",\"technology\":\"The execution of this project exposed myself to an extensive amount of linux commands, since Raspberry Pi runs the Raspbian OS, which is based on Linux. I also did all developments on a seperate machine running Linux Debian. Development wise, the two programs were written heavily in C++/C++11. Parallel processing and multi-threading had to be implemented as signals need to be generated concurrently to the CNC machine's servo motors. I was also exposed to various Computer-Aided Design (CAD) and Computer-Aided Manufacturing (CAM) softwares, such as AutoCAD and PyCAM respectively.\",\"results\":\"The end product of this project opened my eyes to the power of Software Engineering, as those two programs I wrote actually drove the CNC machine to draw images on a piece of paper. Some mathematics was involved as well, hence I was very happy and blown away to see those numbers work together to produce real results. The full report/thesis for this project is available upon request.\"},\"chatbot\":{\"title\":\"A Chatbot to Facilitate Data Analysis\",\"time\":\"TBC 2020\",\"intro\":\"This is my MSc Project, in which I will be building a chatbot designed to faciliate Big Data preparation by helping users to choose the appropriate pipeline functions based on a set of predefined questions and answers. The chatbot will be integrated with a GUI-powered Data Analysis workflow tool to give the answers that users expect. This project is currently ongoing, hence the page will be updated once everything is complete.\",\"main\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"technology\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"results\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"}},\"personalProjects\":{\"wifePort\":{\"title\":\"Wife's Portfolio\",\"time\":\"2018\",\"link\":\"http://www.yasminraihan.com/\",\"intro\":\"Sometime in 2018 I helped my wife to develop her own Portfolio Website, to store all past projects that she was involved in, accademically and professionally. We spent around two(2) months for the completion of this full end-to-end, design-to-deploy development project. The pages are responsive as well as optimised for mobile experience as well.\",\"main\":\"The webpage was first designed using Figma, a web design software, similar to Sketch. There were data going in and out of this webpage, hence we kept things as simple as possible and focues primarily on its front-end design and feel.\",\"technology\":\"The core technology underlining this project was plain HTML, CSS3, but we implmented things in a full-stack way, except that we did not connect a database : NodeJS and Express in the backend, JQuery for DOM manipulation, and Ajax for optimisation. For deployment, we used Heroku, and purchased a domain from a Domain Provider. We also used Github to keep track of the code changes and versioning.\",\"results\":\"The end product of this project was a minimalistic but filled with the essential information that would keep track of my wife's past experiences and work portfolio. One way to improve this website is to implement new technologies such GatsbyJS or NextJS to improve the performance and speed of this website further. Another improvement is to abstract away data components of the website from the development code, hence enhancing software maintainability.\"},\"ultimatePort\":{\"title\":\"My Portfolio\",\"time\":\"TBC 2020\",\"intro\":\"This could be my own portfolio that stores all my acadmic and professional records, but what I designed it to be much more than just that. I designed it to also store useful contents that users can visit and learn a thing or two, and then share them if they think some of the articles might be useful. I aim to complete this project by the end of 2020. Therefore, this webpage shall be updated further as the project completes.\",\"main\":\"Some of the other contents that may be useful for the users include my travel blog, which could store and share my travel experiences around the world. We aim to provide feedback and opinions on for example the flight, accommodation, activities, and overall experiences, so users could read and make necessary preparations should they plan to travel to the same places as we did.\",\"technology\":\"For this project, I implemented NextJS, providing server-side rendering technology for fast browsing experience. At the point of writing this there is no need for a database connection, but this may subject to change. It would also be deployed on to heroku.\",\"results\":\"The result of this project is yet to be descibed, once the project is finished.\"},\"wedding\":{\"title\":\"Wedding Planning System\",\"link\":\"http://www.asyrulmarriesyasmin.com\",\"time\":\"2018\",\"intro\":\"Planning a wedding is not an easy task, especially when we have various tasks delegated amongst our own family members. The aim for this project was to help planning a wedding easier, by registering all required tasks into the system, and each task is monitored or managed by one person. This was my first full-stack web development project,, after I enrolled in a course called the Web Developer Bootcamp (Udemy), and completed the whole 46-hour video course to gain all the necessary knowledge.\",\"main\":\"This project covers a wide range of web development topics, such as HTML, CSS, Bootstrap, Authentication, Authorisation, Database, Express, and Deployment. Users are able to create a task, and assign this task to an individual. For each of these tasks, there is a page for them, where users can comment and do some minor discussion regarding the topic. The owner of the task, i.e. the person the task was assigned to, is able to delete/remove comments, and the progress in the task description, as well as to update the 'progress bar'.\",\"technology\":\"This project covers all aspect of a CRUD application (Create, Read, Update and Delete). I used NodeJS, Express, MongoDB and Bootstrap. I deployed it on Heroku, but for the development environment I used the Amazon Web Services (AWS) Cloud 9. GitHub was also used for source tracking.\",\"results\":\"The result of this project is full-fledged NodeJS application that allows users to log in, create a task, update their tasks, comment, delete and so on. The website also contains any relevant information related to the wedding, such as the map, the invitation card, and to monitor the number of guests. One way this project could have been improved is by implementing a Front-End framework, such as Angular or ReactJS.\"},\"funfactory\":{\"title\":\"Kindergarten Website\",\"time\":\"TBC 2020\",\"intro\":\"For this project I will be building a website for a Kindergarten Business owned by my mother-in-law. The sole purpose of this website is to provide necessary information about the business, as well as to provide contact information for potential customers. This project is currently under the design phase, and I plan to implement Gatsby JS into this project. We aim to complete this project by the end of 2020.\",\"main\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"technology\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"results\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"},\"recipeBook\":{\"title\":\"Recipe Repository\",\"time\":\"TBC 2021\",\"intro\":\"This is the project that I aspire to complete by the end of 2021. The basic idea is to store all recipes from my mother's physical recipe book into a Graph-based datastore, to implement an achitechture similar to those of Search Engines or Wikepedia. This way, the system is able to process and return answers for queries based on natural language, such as 'How many grams of butter do I need to bake the Marble Cake' or 'How long should I leave the jelly in the fridge'. This would be the most challenging personal project for me, considering the amount of technology involved in the development.\",\"main\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"technology\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\",\"results\":\"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the\"}}}");

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RHEb");


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

/***/ "HlfR":
/***/ (function(module, exports) {

module.exports = {
	"projectsHero": "_19tIedMwwCZB8ahw0GdW9E"
};

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

/***/ "RHEb":
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

// EXTERNAL MODULE: ./components/shared/projects/proprojects.module.scss
var proprojects_module = __webpack_require__("SBZH");
var proprojects_module_default = /*#__PURE__*/__webpack_require__.n(proprojects_module);

// CONCATENATED MODULE: ./components/shared/projects/ProProjects.js


var __jsx = external_react_default.a.createElement;
 //import style



const ProProjects = props => {
  const project = props.data; // console.log(project.technology)

  return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: "jsx-4133983565" + " " + (proprojects_module_default.a.projectHeader || "")
  }, __jsx("h5", {
    className: "jsx-4133983565"
  }, project.title)), __jsx("div", {
    className: "jsx-4133983565" + " " + (proprojects_module_default.a.time || "")
  }, project.time), __jsx("div", {
    className: "jsx-4133983565" + " " + (proprojects_module_default.a.photosContainer || "")
  }, project.images.map((image, idx) => {
    return __jsx("div", {
      key: idx,
      style: {
        backgroundImage: 'url(' + image + ')',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      },
      className: "jsx-4133983565" + " " + (proprojects_module_default.a.image || "")
    });
  })), __jsx("p", {
    className: "jsx-4133983565" + " " + (proprojects_module_default.a.text || "")
  }, project.text), __jsx("div", {
    className: "jsx-4133983565" + " " + (proprojects_module_default.a.attributes || "")
  }, __jsx("span", {
    className: "jsx-4133983565"
  }, "Role:"), __jsx("p", {
    className: "jsx-4133983565"
  }, project.role)), __jsx("div", {
    className: "jsx-4133983565" + " " + (proprojects_module_default.a.attributes || "")
  }, __jsx("span", {
    className: "jsx-4133983565"
  }, "Main contribution:"), __jsx("p", {
    className: "jsx-4133983565"
  }, project.contribution)), __jsx("div", {
    className: "jsx-4133983565" + " " + (proprojects_module_default.a.attributes || "")
  }, __jsx("span", {
    className: "jsx-4133983565"
  }, "Technology:"), __jsx("div", {
    className: "jsx-4133983565" + " " + (proprojects_module_default.a.technologyContainer || "")
  }, project.technology.map((tech, idx) => {
    return __jsx("p", {
      key: idx,
      className: "jsx-4133983565"
    }, tech);
  }))), __jsx(style_default.a, {
    id: "4133983565"
  }, ["img.jsx-4133983565{width:100%;height:100%;object-fit:cover;}"]));
};

/* harmony default export */ var projects_ProProjects = (ProProjects);
// EXTERNAL MODULE: ./components/layouts/ContentFragment.js
var ContentFragment = __webpack_require__("LJ+a");

// CONCATENATED MODULE: ./components/projects/ProjectRpi.js


var ProjectRpi_jsx = external_react_default.a.createElement;
 //import layout




const ProjectRpi = props => {
  const project = props.data;
  return ProjectRpi_jsx(external_react_default.a.Fragment, null, ProjectRpi_jsx(ContentFragment["a" /* default */], {
    title: project.title,
    time: project.time,
    text: project.intro
  }, ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "intro1") || "")
  }), ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "intro2") || "")
  }))), ProjectRpi_jsx(ContentFragment["a" /* default */], {
    subtitle: "Main Development",
    text: project.main
  }, ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main1") || "")
  }))), ProjectRpi_jsx(ContentFragment["a" /* default */], {
    subtitle: "Technology",
    text: project.technology
  }, ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main1") || "")
  }), ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }))), ProjectRpi_jsx(ContentFragment["a" /* default */], {
    subtitle: "Results",
    text: project.results
  }, ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main1") || "")
  }), ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  })), ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), ProjectRpi_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main1") || "")
  }))), ProjectRpi_jsx(ContentFragment["a" /* default */], {
    subtitle: "Videos",
    text: "Some videos related to this project can be found here: <a href=''>Video1</a> <a href=''>Video2</a> <a href=''>Video3</a>"
  }), ProjectRpi_jsx(style_default.a, {
    id: "2214684551"
  }, [".intro1.jsx-2214684551{-webkit-flex:0.18;-ms-flex:0.18;flex:0.18;background-image:url('/static/images/projects/rpi/intro1.png');}", ".intro2.jsx-2214684551{-webkit-flex:0.80;-ms-flex:0.80;flex:0.80;background-image:url('/static/images/projects/rpi/intro2.png');}", ".main1.jsx-2214684551{-webkit-flex:0.56;-ms-flex:0.56;flex:0.56;background-image:url('/static/images/projects/rpi/main1.png');}", ".main2.jsx-2214684551{-webkit-flex:0.20;-ms-flex:0.20;flex:0.20;background-image:url('/static/images/projects/rpi/main2.png');}"]));
};

/* harmony default export */ var projects_ProjectRpi = (ProjectRpi);
// CONCATENATED MODULE: ./components/projects/ProjectChatbot.js


var ProjectChatbot_jsx = external_react_default.a.createElement;
 //import layout




const ProjectChatbot = props => {
  const project = props.data;
  return ProjectChatbot_jsx(external_react_default.a.Fragment, null, ProjectChatbot_jsx(ContentFragment["a" /* default */], {
    title: project.title,
    time: project.time,
    text: project.intro
  }), ProjectChatbot_jsx(style_default.a, {
    id: "2214684551"
  }, [".intro1.jsx-2214684551{-webkit-flex:0.18;-ms-flex:0.18;flex:0.18;background-image:url('/static/images/projects/rpi/intro1.png');}", ".intro2.jsx-2214684551{-webkit-flex:0.80;-ms-flex:0.80;flex:0.80;background-image:url('/static/images/projects/rpi/intro2.png');}", ".main1.jsx-2214684551{-webkit-flex:0.56;-ms-flex:0.56;flex:0.56;background-image:url('/static/images/projects/rpi/main1.png');}", ".main2.jsx-2214684551{-webkit-flex:0.20;-ms-flex:0.20;flex:0.20;background-image:url('/static/images/projects/rpi/main2.png');}"]));
};

/* harmony default export */ var projects_ProjectChatbot = (ProjectChatbot);
// CONCATENATED MODULE: ./components/projects/ProjectWifePort.js


var ProjectWifePort_jsx = external_react_default.a.createElement;
 //import layout




const ProjectWifePort = props => {
  const project = props.data;
  return ProjectWifePort_jsx(external_react_default.a.Fragment, null, ProjectWifePort_jsx(ContentFragment["a" /* default */], {
    title: project.title,
    time: project.time,
    text: project.intro,
    link: project.link
  }, ProjectWifePort_jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, ProjectWifePort_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "intro1") || "")
  }), ProjectWifePort_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "intro2") || "")
  }))), ProjectWifePort_jsx(ContentFragment["a" /* default */], {
    subtitle: "Main Development",
    text: project.main
  }, ProjectWifePort_jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, ProjectWifePort_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), ProjectWifePort_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), ProjectWifePort_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main1") || "")
  }))), ProjectWifePort_jsx(ContentFragment["a" /* default */], {
    subtitle: "Technology",
    text: project.technology
  }, ProjectWifePort_jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, ProjectWifePort_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main1") || "")
  }), ProjectWifePort_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), ProjectWifePort_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }))), ProjectWifePort_jsx(ContentFragment["a" /* default */], {
    subtitle: "Results",
    text: project.results
  }, ProjectWifePort_jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, ProjectWifePort_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main1") || "")
  }), ProjectWifePort_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), ProjectWifePort_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }))), ProjectWifePort_jsx(ContentFragment["a" /* default */], {
    subtitle: "Videos",
    text: "Some videos related to this project can be found here: <a href=''>Video1</a> <a href=''>Video2</a> <a href=''>Video3</a>"
  }), ProjectWifePort_jsx(style_default.a, {
    id: "2214684551"
  }, [".intro1.jsx-2214684551{-webkit-flex:0.18;-ms-flex:0.18;flex:0.18;background-image:url('/static/images/projects/rpi/intro1.png');}", ".intro2.jsx-2214684551{-webkit-flex:0.80;-ms-flex:0.80;flex:0.80;background-image:url('/static/images/projects/rpi/intro2.png');}", ".main1.jsx-2214684551{-webkit-flex:0.56;-ms-flex:0.56;flex:0.56;background-image:url('/static/images/projects/rpi/main1.png');}", ".main2.jsx-2214684551{-webkit-flex:0.20;-ms-flex:0.20;flex:0.20;background-image:url('/static/images/projects/rpi/main2.png');}"]));
};

/* harmony default export */ var projects_ProjectWifePort = (ProjectWifePort);
// CONCATENATED MODULE: ./components/projects/ProjectWeddingPlanner.js


var ProjectWeddingPlanner_jsx = external_react_default.a.createElement;
 //import layout




const ProjectWeddingPlanner = props => {
  const project = props.data;
  return ProjectWeddingPlanner_jsx(external_react_default.a.Fragment, null, ProjectWeddingPlanner_jsx(ContentFragment["a" /* default */], {
    title: project.title,
    time: project.time,
    text: project.intro,
    link: project.link
  }, ProjectWeddingPlanner_jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, ProjectWeddingPlanner_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "intro1") || "")
  }), ProjectWeddingPlanner_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "intro2") || "")
  }))), ProjectWeddingPlanner_jsx(ContentFragment["a" /* default */], {
    subtitle: "Main Development",
    text: project.main
  }, ProjectWeddingPlanner_jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, ProjectWeddingPlanner_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), ProjectWeddingPlanner_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), ProjectWeddingPlanner_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main1") || "")
  }))), ProjectWeddingPlanner_jsx(ContentFragment["a" /* default */], {
    subtitle: "Technology",
    text: project.technology
  }, ProjectWeddingPlanner_jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, ProjectWeddingPlanner_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main1") || "")
  }), ProjectWeddingPlanner_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), ProjectWeddingPlanner_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }))), ProjectWeddingPlanner_jsx(ContentFragment["a" /* default */], {
    subtitle: "Results",
    text: project.results
  }, ProjectWeddingPlanner_jsx("div", {
    className: "jsx-2214684551" + " " + "row"
  }, ProjectWeddingPlanner_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main1") || "")
  }), ProjectWeddingPlanner_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }), ProjectWeddingPlanner_jsx("div", {
    className: "jsx-2214684551" + " " + (external_classnames_default()("rowPhoto", "main2") || "")
  }))), ProjectWeddingPlanner_jsx(style_default.a, {
    id: "2214684551"
  }, [".intro1.jsx-2214684551{-webkit-flex:0.18;-ms-flex:0.18;flex:0.18;background-image:url('/static/images/projects/rpi/intro1.png');}", ".intro2.jsx-2214684551{-webkit-flex:0.80;-ms-flex:0.80;flex:0.80;background-image:url('/static/images/projects/rpi/intro2.png');}", ".main1.jsx-2214684551{-webkit-flex:0.56;-ms-flex:0.56;flex:0.56;background-image:url('/static/images/projects/rpi/main1.png');}", ".main2.jsx-2214684551{-webkit-flex:0.20;-ms-flex:0.20;flex:0.20;background-image:url('/static/images/projects/rpi/main2.png');}"]));
};

/* harmony default export */ var projects_ProjectWeddingPlanner = (ProjectWeddingPlanner);
// CONCATENATED MODULE: ./components/projects/ProjectFunFactory.js


var ProjectFunFactory_jsx = external_react_default.a.createElement;
 //import layout




const ProjectFunFactory = props => {
  const project = props.data;
  return ProjectFunFactory_jsx(external_react_default.a.Fragment, null, ProjectFunFactory_jsx(ContentFragment["a" /* default */], {
    title: project.title,
    time: project.time,
    text: project.intro
  }), ProjectFunFactory_jsx(style_default.a, {
    id: "2214684551"
  }, [".intro1.jsx-2214684551{-webkit-flex:0.18;-ms-flex:0.18;flex:0.18;background-image:url('/static/images/projects/rpi/intro1.png');}", ".intro2.jsx-2214684551{-webkit-flex:0.80;-ms-flex:0.80;flex:0.80;background-image:url('/static/images/projects/rpi/intro2.png');}", ".main1.jsx-2214684551{-webkit-flex:0.56;-ms-flex:0.56;flex:0.56;background-image:url('/static/images/projects/rpi/main1.png');}", ".main2.jsx-2214684551{-webkit-flex:0.20;-ms-flex:0.20;flex:0.20;background-image:url('/static/images/projects/rpi/main2.png');}"]));
};

/* harmony default export */ var projects_ProjectFunFactory = (ProjectFunFactory);
// CONCATENATED MODULE: ./components/projects/ProjectRecipeBook.js


var ProjectRecipeBook_jsx = external_react_default.a.createElement;
 //import layout




const ProjectRecipeBook = props => {
  const project = props.data;
  return ProjectRecipeBook_jsx(external_react_default.a.Fragment, null, ProjectRecipeBook_jsx(ContentFragment["a" /* default */], {
    title: project.title,
    time: project.time,
    text: project.intro
  }), ProjectRecipeBook_jsx(style_default.a, {
    id: "2214684551"
  }, [".intro1.jsx-2214684551{-webkit-flex:0.18;-ms-flex:0.18;flex:0.18;background-image:url('/static/images/projects/rpi/intro1.png');}", ".intro2.jsx-2214684551{-webkit-flex:0.80;-ms-flex:0.80;flex:0.80;background-image:url('/static/images/projects/rpi/intro2.png');}", ".main1.jsx-2214684551{-webkit-flex:0.56;-ms-flex:0.56;flex:0.56;background-image:url('/static/images/projects/rpi/main1.png');}", ".main2.jsx-2214684551{-webkit-flex:0.20;-ms-flex:0.20;flex:0.20;background-image:url('/static/images/projects/rpi/main2.png');}"]));
};

/* harmony default export */ var projects_ProjectRecipeBook = (ProjectRecipeBook);
// EXTERNAL MODULE: ./public/static/data/projects.json
var projects = __webpack_require__("+gaU");

// CONCATENATED MODULE: ./components/shared/projects/Project.js


var Project_jsx = external_react_default.a.createElement;
 //import components








 // import data



const Project = props => {
  // console.log(props.id)
  return Project_jsx("div", {
    className: "jsx-482345856" + " " + 'projectContainer'
  }, (props.id === 'esri' || props.id === 'myipcs' || props.id === 'webcrawl') && Project_jsx(projects_ProProjects, {
    data: projects.proProjects[`${props.id}`]
  }), props.id === 'rpi' && Project_jsx(projects_ProjectRpi, {
    data: projects.academicProjects[`${props.id}`]
  }), props.id === 'chatbot' && Project_jsx(projects_ProjectChatbot, {
    data: projects.academicProjects[`${props.id}`]
  }), props.id === 'wifePort' && Project_jsx(projects_ProjectWifePort, {
    data: projects.personalProjects[`${props.id}`]
  }), props.id === 'ultimatePort' && Project_jsx(projects_ProjectWifePort, {
    data: projects.personalProjects[`${props.id}`]
  }), props.id === 'wedding' && Project_jsx(projects_ProjectWeddingPlanner, {
    data: projects.personalProjects[`${props.id}`]
  }), props.id === 'funfactory' && Project_jsx(projects_ProjectFunFactory, {
    data: projects.personalProjects[`${props.id}`]
  }), props.id === 'recipeBook' && Project_jsx(projects_ProjectRecipeBook, {
    data: projects.personalProjects[`${props.id}`]
  }), Project_jsx(style_default.a, {
    id: "482345856"
  }, [".projectContainer.jsx-482345856{width:100%;margin-top:80px;margin-bottom:120px;}"]));
};

/* harmony default export */ var projects_Project = (Project);
// EXTERNAL MODULE: ./public/static/data/contentHeads.json
var contentHeads = __webpack_require__("aEgt");

// EXTERNAL MODULE: ./pages/styles/projects.module.scss
var projects_module = __webpack_require__("HlfR");
var projects_module_default = /*#__PURE__*/__webpack_require__.n(projects_module);

// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__("IrP5");
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);

// CONCATENATED MODULE: ./pages/projects.js
var projects_jsx = external_react_default.a.createElement;


 // import layouts


 //import components




 //import data

 //import data

 //global styles can be found at ../styles/main.scss
//import specific styling module

 //React Reveal Animation



class projects_Projects extends external_react_default.a.Component {
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
    return projects_jsx(ContentLayout["a" /* default */], null, projects_jsx("section", null, projects_jsx("div", {
      className: external_classnames_default()('hero', projects_module_default.a.projectsHero)
    }), projects_jsx(ContentContainer["a" /* default */], null, projects_jsx(Fade_default.a, {
      delay: 200
    }, projects_jsx(ContentHead["a" /* default */], {
      data: contentHeads.projects
    })), projects_jsx(Fade_default.a, {
      delay: 300
    }, projects_jsx(Tabs["a" /* default */], {
      onChange: this.handleChange,
      active: this.state.activeTab
    }, projects_jsx("span", {
      key: "Academic"
    }, "Academic"), projects_jsx("span", {
      key: "Professional"
    }, "Professional"), projects_jsx("span", {
      key: "Personal"
    }, "Personal"))), this.state.activeTab === 'Academic' && projects_jsx(Fade_default.a, {
      duration: 500
    }, projects_jsx(InnerTabs["a" /* default */], {
      onChange: active => {
        this.setState({
          activeProject: active
        });
      },
      active: this.state.activeProject,
      data: projects.slugs.Academic
    })), this.state.activeTab === 'Professional' && projects_jsx(Fade_default.a, {
      duration: 500
    }, projects_jsx(InnerTabs["a" /* default */], {
      onChange: active => {
        this.setState({
          activeProject: active
        });
      },
      active: this.state.activeProject,
      data: projects.slugs.Professional
    })), this.state.activeTab === 'Personal' && projects_jsx(Fade_default.a, {
      duration: 500
    }, projects_jsx(InnerTabs["a" /* default */], {
      onChange: active => {
        this.setState({
          activeProject: active
        });
      },
      active: this.state.activeProject,
      data: projects.slugs.Personal
    })), this.state.activeProject !== '' && projects_jsx(Fade_default.a, {
      duration: 500
    }, projects_jsx(projects_Project, {
      id: this.state.activeProject
    })))));
  }

}

/* harmony default export */ var pages_projects = __webpack_exports__["default"] = (projects_Projects); // <Fade right=
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

/***/ "SBZH":
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