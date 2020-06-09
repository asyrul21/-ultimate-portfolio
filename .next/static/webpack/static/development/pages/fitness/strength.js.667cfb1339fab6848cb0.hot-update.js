webpackHotUpdate("static/development/pages/fitness/strength.js",{

/***/ "./pages/fitness/strength.js":
/*!***********************************!*\
  !*** ./pages/fitness/strength.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layouts_FitnessLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layouts/FitnessLayout */ "./components/layouts/FitnessLayout.js");
/* harmony import */ var _components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layouts/ContentContainer */ "./components/layouts/ContentContainer.js");
/* harmony import */ var _components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/layouts/ContentFragment */ "./components/layouts/ContentFragment.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/fitness/WorkoutContainer */ "./components/fitness/WorkoutContainer.js");
/* harmony import */ var _components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/fitness/WorkoutItem */ "./components/fitness/WorkoutItem.js");
/* harmony import */ var _components_shared_disclaimer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/shared/disclaimer */ "./components/shared/disclaimer.js");
/* harmony import */ var _components_fitness_WorkoutNotation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/fitness/WorkoutNotation */ "./components/fitness/WorkoutNotation.js");
/* harmony import */ var _components_shared_SuggestPages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/shared/SuggestPages */ "./components/shared/SuggestPages.js");
/* harmony import */ var _public_static_data_FitnessItems_strength__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../public/static/data/FitnessItems/strength */ "./public/static/data/FitnessItems/strength.json");
var _public_static_data_FitnessItems_strength__WEBPACK_IMPORTED_MODULE_15___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/data/FitnessItems/strength */ "./public/static/data/FitnessItems/strength.json", 1);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_16__);





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

 //import layout




 // import components





 //import data




var Strength = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Strength, _React$Component);

  var _super = _createSuper(Strength);

  function Strength() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Strength);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Strength, [{
    key: "render",
    value: function render() {
      var headerData = _public_static_data_FitnessItems_strength__WEBPACK_IMPORTED_MODULE_15__.header;
      var keyIdeaData = _public_static_data_FitnessItems_strength__WEBPACK_IMPORTED_MODULE_15__.keyidea;
      var fiveByfiveData = _public_static_data_FitnessItems_strength__WEBPACK_IMPORTED_MODULE_15__.fivebyfive;
      var texasData = _public_static_data_FitnessItems_strength__WEBPACK_IMPORTED_MODULE_15__.texasmethod;
      return __jsx(_components_layouts_FitnessLayout__WEBPACK_IMPORTED_MODULE_6__["default"], null, __jsx(_components_layouts_ContentContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        breadcrumbs: ['Fitness', 'Strength']
      }, __jsx(_components_shared_disclaimer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        text: _public_static_data_FitnessItems_strength__WEBPACK_IMPORTED_MODULE_15__.disclaimer
      }), __jsx(_components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: headerData.title,
        text: headerData.text
      }), __jsx(_components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_8__["default"], {
        subtitle: keyIdeaData.title,
        text: keyIdeaData.text
      }), __jsx(_components_fitness_WorkoutNotation__WEBPACK_IMPORTED_MODULE_13__["default"], null), __jsx(_components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: fiveByfiveData.title,
        text: fiveByfiveData.text,
        link: fiveByfiveData.link,
        linkText: "Read More"
      }, __jsx("div", {
        className: "row"
      }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_16___default.a, {
        bottom: true,
        distance: "20px"
      }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Week A Day 1 (Monday)",
        notes: "Rest between 90-180 seconds between sets.",
        itemsPerRow: 3,
        theme: "blue"
      }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Warm ups",
        sets: "10mins"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Squat",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Bench Press",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Row",
        sets: "5x5"
      }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_16___default.a, {
        bottom: true,
        distance: "20px",
        delay: 200
      }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Week A Day 2 (Wednesday)",
        notes: "Rest between 90-180 seconds between sets. For deadlifts start light then work your way up to 1 heavy set of 5.",
        itemsPerRow: 3,
        theme: "green"
      }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Warm ups",
        sets: "10mins"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Squat",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Overhead BB Press",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Deadlift",
        sets: "1x5"
      }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_16___default.a, {
        bottom: true,
        distance: "20px",
        delay: 400
      }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Week A Day 3 (Friday)",
        notes: "Rest between 90-180 seconds between sets.",
        itemsPerRow: 3,
        theme: "purple"
      }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Warm ups",
        sets: "10mins"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Squat",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Bench Press",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Row",
        sets: "5x5"
      })))), __jsx("div", {
        className: "row"
      }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_16___default.a, {
        bottom: true,
        distance: "20px"
      }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Week B Day 1 (Monday)",
        notes: "Rest between 90-180 seconds between sets. For deadlifts start light then work your way up to 1 heavy set of 5.",
        itemsPerRow: 3,
        theme: "blue"
      }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Warm ups",
        sets: "10mins"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Squat",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Overhead BB Press",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Deadlift",
        sets: "1x5"
      }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_16___default.a, {
        bottom: true,
        distance: "20px",
        delay: 200
      }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Week B Day 2 (Wednesday)",
        notes: "Rest between 90-180 seconds between sets.",
        itemsPerRow: 3,
        theme: "green"
      }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Warm ups",
        sets: "10mins"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Squat",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Bench Press",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Row",
        sets: "5x5"
      }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_16___default.a, {
        bottom: true,
        distance: "20px",
        delay: 400
      }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Week B Day 3 (Friday)",
        notes: "Rest between 90-180 seconds between sets. For deadlifts start light then work your way up to 1 heavy set of 5.",
        itemsPerRow: 3,
        theme: "purple"
      }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Warm ups",
        sets: "10mins"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Squat",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Overhead BB Press",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Deadlift",
        sets: "1x5"
      }))))), __jsx(_components_layouts_ContentFragment__WEBPACK_IMPORTED_MODULE_8__["default"], {
        title: texasData.title,
        text: texasData.text,
        link: texasData.link,
        linkText: "Read More"
      }, __jsx("div", {
        className: "row"
      }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_16___default.a, {
        bottom: true,
        distance: "20px"
      }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Week A Volume Day (Monday)",
        notes: "Rest between 90-180 seconds between sets.",
        itemsPerRow: 3,
        theme: "blue"
      }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Warm ups",
        sets: "10mins"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Squat",
        sets: "5x5@90%5RM"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Bench Press",
        sets: "5x5@90%5RM"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Row",
        sets: "5x5@90%5RM"
      }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_16___default.a, {
        bottom: true,
        distance: "20px",
        delay: 200
      }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Week A Recovery Day (Wednesday)",
        notes: "Rest between 90-180 seconds between sets. * at slightly lighter load than previous Overhead BB Press weight.",
        itemsPerRow: 3,
        theme: "green"
      }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Warm ups",
        sets: "10mins"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Squat",
        sets: "2x5@80% of  Monday"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Overhead BB Press",
        sets: "3x5*"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Chin ups",
        sets: "3xMax effort"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Back Hyperextensions",
        sets: "5x10"
      }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_16___default.a, {
        bottom: true,
        distance: "20px",
        delay: 400
      }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Week A PR Day (Friday)",
        notes: "Warm up, then work up to one set of 5 reps. Must be slightly heavier than last week's (new PR).",
        itemsPerRow: 3,
        theme: "purple"
      }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Warm ups",
        sets: "10mins"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Squat",
        sets: "1x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Bench Press",
        sets: "1x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Deadlifts",
        sets: "5x5"
      })))), __jsx("div", {
        className: "row"
      }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_16___default.a, {
        bottom: true,
        distance: "20px"
      }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Week B Volume Day (Monday)",
        notes: "Rest between 90-180 seconds between sets. For deadlifts start light then work your way up to 1 heavy set of 5.",
        itemsPerRow: 3,
        theme: "blue"
      }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Warm ups",
        sets: "10mins"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Squat",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Overhead BB Press",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Deadlift",
        sets: "1x5"
      }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_16___default.a, {
        bottom: true,
        distance: "20px",
        delay: 200
      }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Week B Recovery Day (Wednesday)",
        notes: "Rest between 90-180 seconds between sets.",
        itemsPerRow: 3,
        theme: "green"
      }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Warm ups",
        sets: "10mins"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Squat",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Bench Press",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Row",
        sets: "5x5"
      }))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_16___default.a, {
        bottom: true,
        distance: "20px",
        delay: 400
      }, __jsx(_components_fitness_WorkoutContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        title: "Week B PR Day (Friday)",
        notes: "Rest between 90-180 seconds between sets. For deadlifts start light then work your way up to 1 heavy set of 5.",
        itemsPerRow: 3,
        theme: "purple"
      }, __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Warm ups",
        sets: "10mins"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "BB Squat",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Overhead BB Press",
        sets: "5x5"
      }), __jsx(_components_fitness_WorkoutItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        name: "Deadlift",
        sets: "1x5"
      })))))));
    }
  }]);

  return Strength;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Strength);

/***/ })

})
//# sourceMappingURL=strength.js.667cfb1339fab6848cb0.hot-update.js.map