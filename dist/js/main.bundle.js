/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/styles.css?");

/***/ }),

/***/ "./src/js/DarkMode/DarkMode.js":
/*!*************************************!*\
  !*** ./src/js/DarkMode/DarkMode.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar DarkMode = function DarkMode(currentTheme, toggleSwitch) {\n  var _this = this;\n\n  _classCallCheck(this, DarkMode);\n\n  this.init = function () {\n    if (_this.currentTheme === \"dark\") {\n      document.body.classList.replace(\"light\", \"dark\");\n      _this.toggleSwitch.checked = true;\n    } else {\n      _this.toggleSwitch.checked = false;\n    }\n  };\n\n  this.switchTheme = function (e) {\n    var checked = e.target.checked;\n\n    if (checked) {\n      document.body.classList.replace(\"light\", \"dark\");\n      localStorage.setItem(\"theme\", \"dark\");\n    } else {\n      document.body.classList.replace(\"dark\", \"light\");\n      localStorage.setItem(\"theme\", \"light\");\n    }\n  };\n\n  this.currentTheme = currentTheme;\n  this.toggleSwitch = toggleSwitch;\n  this.init();\n  toggleSwitch.addEventListener(\"change\", this.switchTheme, false);\n}\n/**\n * Check if user pref was previously saved in\n * localStorage, set switch accordingly.\n *\n * @param {HTMLElement} toggleSwitch\n */\n;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DarkMode);\n\n//# sourceURL=webpack:///./src/js/DarkMode/DarkMode.js?");

/***/ }),

/***/ "./src/js/Scroll/Scroll.js":
/*!*********************************!*\
  !*** ./src/js/Scroll/Scroll.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Scroll = function Scroll(selectors) {\n  var _this = this;\n\n  _classCallCheck(this, Scroll);\n\n  this.init = function () {\n    _this.selectors.forEach(function (selector) {\n      _this.elems.push(document.querySelector(selector));\n    });\n  };\n\n  this.elemInViewport = function (elem) {\n    var rect = elem.getBoundingClientRect();\n    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);\n  };\n\n  this.checkScrollPos = function () {\n    _this.elems.forEach(function (elem) {\n      if (_this.elemInViewport(elem)) {\n        elem.classList.add(\"slide-right\");\n      }\n    });\n  };\n\n  this.selectors = selectors;\n  this.elems = [];\n  this.init();\n  window.addEventListener(\"scroll\", this.checkScrollPos, false);\n}\n/**\n * Create arr of elements from selectors.\n */\n;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scroll);\n\n//# sourceURL=webpack:///./src/js/Scroll/Scroll.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DarkMode_DarkMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DarkMode/DarkMode */ \"./src/js/DarkMode/DarkMode.js\");\n/* harmony import */ var _Scroll_Scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scroll/Scroll */ \"./src/js/Scroll/Scroll.js\");\n\n\nvar scroll = new _Scroll_Scroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([\".skills .text-title\", \".contact .text-title\"]);\nvar darkMode = new _DarkMode_DarkMode__WEBPACK_IMPORTED_MODULE_0__[\"default\"](localStorage.getItem(\"theme\"), document.querySelector(\"#toggleDarkMode\"));\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/css/styles.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/main.js */\"./src/js/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/css/styles.css */\"./src/css/styles.css\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js_./src/css/styles.css?");

/***/ })

/******/ });