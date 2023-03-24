module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/global */ "./src/styles/global.ts");
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/theme */ "./src/styles/theme.ts");

var _jsxFileName = "C:\\Users\\Alber\\go\\src\\github.com\\albertoparente\\goFinance-app-frontend\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_4__["default"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Next App"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "shortcut icon",
        href: "/img/icon-512.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "apple-touch-icon",
        href: "/img/icon-512.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "manifest",
        href: "/manifest.json"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Next Js boilerplate"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_global__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/styles/global.ts":
/*!******************************!*\
  !*** ./src/styles/global.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

@font-face {
  font-family: Rubik;
  src: local(Rubik-Light),
    url('/fonts/Rubik-Light.ttf') format("truetype");
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
   font-display: swap;

}
@font-face {
  font-family: Rubik;
  src: local(Rubik-Regular),
    url('/fonts/Rubik-Regular.ttf') format("truetype");
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
   font-display: swap;
}
@font-face {
  font-family: Rubik;
  src: local(Rubik-Medium),
      url('fonts/Rubik-Medium.ttf') format("truetype");
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
   font-display: swap;
}
@font-face {
  font-family: Linearicons;
  src: local(Linearicons),
      url('fonts/Linearicons.ttf') format("truetype");
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  font-display: swap;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({
  theme,
  removeBg
}) => styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};

      ${!removeBg && styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
        background-color: ${theme.colors.mainBg};
      `}
    }
  `}

`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family: "Rubik, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    icon: "Linearicons, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem'
    }
  },
  colors: {
    primary: '#2e5bff',
    secondary: '#3CD3C1',
    mainBg: '#06092B',
    lightBg: '#F2F2F2',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    red: '#FF6347',
    baseColorBlack2: '#69707f',
    baseColorBlue: '#2e5bff',
    baseColorGray: '#bfc5d2',
    baseColorBlack3: '#8798ad',
    baseColorWhite: '#ffffff',
    baseColorBlack: '#2e384d',
    baseColorGray2: '#f4f6fc',
    baseColorGray3: '#eef3f5',
    baseColorGreen: '#33ac2e',
    baseColorYellow: '#f7c137',
    baseColorTeal: '#00c1d4',
    baseColorRed: '#d63649',
    baseColorPurple: '#8c54ff',
    lightPeriwinkle: '#d6dfff',
    cloudyBlue: '#b0bac9',
    tomato: '#e74133',
    blueSide: '#1a4679',
    baseColorBlue20: 'rgba(46, 91, 255, 0.2)',
    color01: '#7fffff',
    divider: '#c8c9cc',
    baseColorRed10: 'rgba(214, 54, 73, 0.1)',
    baseColorGreen15: 'rgba(80, 173, 48, 0.15)',
    baseColorBlue10: 'rgba(46, 91, 255, 0.1)',
    baseColorYellow10: 'rgba(247, 193, 55, 0.1)'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
});

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2xvYmFsLnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ0aGVtZSIsIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwicmVtb3ZlQmciLCJjc3MiLCJmb250IiwiZmFtaWx5Iiwic2l6ZXMiLCJtZWRpdW0iLCJjb2xvcnMiLCJtYWluQmciLCJncmlkIiwiY29udGFpbmVyIiwiZ3V0dGVyIiwiYm9yZGVyIiwicmFkaXVzIiwiaWNvbiIsImxpZ2h0Iiwibm9ybWFsIiwiYm9sZCIsInhzbWFsbCIsInNtYWxsIiwibGFyZ2UiLCJ4bGFyZ2UiLCJ4eGxhcmdlIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImxpZ2h0QmciLCJ3aGl0ZSIsImJsYWNrIiwibGlnaHRHcmF5IiwiZ3JheSIsImRhcmtHcmF5IiwicmVkIiwiYmFzZUNvbG9yQmxhY2syIiwiYmFzZUNvbG9yQmx1ZSIsImJhc2VDb2xvckdyYXkiLCJiYXNlQ29sb3JCbGFjazMiLCJiYXNlQ29sb3JXaGl0ZSIsImJhc2VDb2xvckJsYWNrIiwiYmFzZUNvbG9yR3JheTIiLCJiYXNlQ29sb3JHcmF5MyIsImJhc2VDb2xvckdyZWVuIiwiYmFzZUNvbG9yWWVsbG93IiwiYmFzZUNvbG9yVGVhbCIsImJhc2VDb2xvclJlZCIsImJhc2VDb2xvclB1cnBsZSIsImxpZ2h0UGVyaXdpbmtsZSIsImNsb3VkeUJsdWUiLCJ0b21hdG8iLCJibHVlU2lkZSIsImJhc2VDb2xvckJsdWUyMCIsImNvbG9yMDEiLCJkaXZpZGVyIiwiYmFzZUNvbG9yUmVkMTAiLCJiYXNlQ29sb3JHcmVlbjE1IiwiYmFzZUNvbG9yQmx1ZTEwIiwiYmFzZUNvbG9yWWVsbG93MTAiLCJzcGFjaW5ncyIsInh4c21hbGwiLCJsYXllcnMiLCJiYXNlIiwibWVudSIsIm92ZXJsYXkiLCJtb2RhbCIsImFsd2F5c09uVG9wIiwidHJhbnNpdGlvbiIsImRlZmF1bHQiLCJmYXN0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLEdBQVQsQ0FBYTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBYixFQUFpRDtBQUMvQyxzQkFDRSxxRUFBQywrREFBRDtBQUFlLFNBQUss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QUFDVkMsV0FBTyxFQUFFLGtCQURDO0FBRVZDLFFBQUksRUFBRTtBQUZJO0FBN0VDLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gJ0Avc3R5bGVzL2dsb2JhbCdcclxuaW1wb3J0IHRoZW1lIGZyb20gJ0Avc3R5bGVzL3RoZW1lJ1xyXG5cclxuZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5leHQgQXBwPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9pbWcvaWNvbi01MTIucG5nXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cIi9pbWcvaWNvbi01MTIucG5nXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIk5leHQgSnMgYm9pbGVycGxhdGVcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxHbG9iYWxTdHlsZXMgLz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlR2xvYmFsU3R5bGUsXHJcbiAgY3NzLFxyXG4gIERlZmF1bHRUaGVtZSxcclxuICBHbG9iYWxTdHlsZUNvbXBvbmVudFxyXG59IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxudHlwZSBHbG9iYWxTdHlsZXNQcm9wcyA9IHtcclxuICByZW1vdmVCZz86IGJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgR2xvYmFsU3R5bGVzOiBHbG9iYWxTdHlsZUNvbXBvbmVudDxcclxuICBHbG9iYWxTdHlsZXNQcm9wcyxcclxuICBEZWZhdWx0VGhlbWVcclxuPiA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJ1YmlrO1xyXG4gIHNyYzogbG9jYWwoUnViaWstTGlnaHQpLFxyXG4gICAgdXJsKCcvZm9udHMvUnViaWstTGlnaHQudHRmJykgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuXHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJ1YmlrO1xyXG4gIHNyYzogbG9jYWwoUnViaWstUmVndWxhciksXHJcbiAgICB1cmwoJy9mb250cy9SdWJpay1SZWd1bGFyLnR0ZicpIGZvcm1hdChcInRydWV0eXBlXCIpO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IFJ1YmlrO1xyXG4gIHNyYzogbG9jYWwoUnViaWstTWVkaXVtKSxcclxuICAgICAgdXJsKCdmb250cy9SdWJpay1NZWRpdW0udHRmJykgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogTGluZWFyaWNvbnM7XHJcbiAgc3JjOiBsb2NhbChMaW5lYXJpY29ucyksXHJcbiAgICAgIHVybCgnZm9udHMvTGluZWFyaWNvbnMudHRmJykgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG59XHJcblxyXG4gICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcblxyXG4gICAgJjo6YmVmb3JlLFxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJHsoeyB0aGVtZSwgcmVtb3ZlQmcgfSkgPT4gY3NzYFxyXG4gICAgaHRtbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNjIuNSU7XHJcbiAgICB9XHJcblxyXG4gICAgYm9keSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lLmZvbnQuZmFtaWx5fTtcclxuICAgICAgZm9udC1zaXplOiAke3RoZW1lLmZvbnQuc2l6ZXMubWVkaXVtfTtcclxuXHJcbiAgICAgICR7IXJlbW92ZUJnICYmXHJcbiAgICAgIGNzc2BcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLmNvbG9ycy5tYWluQmd9O1xyXG4gICAgICBgfVxyXG4gICAgfVxyXG4gIGB9XHJcblxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZXNcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdyaWQ6IHtcclxuICAgIGNvbnRhaW5lcjogJzEzMHJlbScsXHJcbiAgICBndXR0ZXI6ICczLjJyZW0nXHJcbiAgfSxcclxuICBib3JkZXI6IHtcclxuICAgIHJhZGl1czogJzAuNHJlbSdcclxuICB9LFxyXG4gIGZvbnQ6IHtcclxuICAgIGZhbWlseTpcclxuICAgICAgXCJSdWJpaywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmXCIsXHJcbiAgICBpY29uOiBcIkxpbmVhcmljb25zLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWZcIixcclxuXHJcbiAgICBsaWdodDogMzAwLFxyXG4gICAgbm9ybWFsOiA0MDAsXHJcbiAgICBib2xkOiA2MDAsXHJcbiAgICBzaXplczoge1xyXG4gICAgICB4c21hbGw6ICcxLjJyZW0nLFxyXG4gICAgICBzbWFsbDogJzEuNHJlbScsXHJcbiAgICAgIG1lZGl1bTogJzEuNnJlbScsXHJcbiAgICAgIGxhcmdlOiAnMS44cmVtJyxcclxuICAgICAgeGxhcmdlOiAnMi4wcmVtJyxcclxuICAgICAgeHhsYXJnZTogJzIuOHJlbSdcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbG9yczoge1xyXG4gICAgcHJpbWFyeTogJyMyZTViZmYnLFxyXG4gICAgc2Vjb25kYXJ5OiAnIzNDRDNDMScsXHJcbiAgICBtYWluQmc6ICcjMDYwOTJCJyxcclxuICAgIGxpZ2h0Qmc6ICcjRjJGMkYyJyxcclxuICAgIHdoaXRlOiAnI0ZBRkFGQScsXHJcbiAgICBibGFjazogJyMwMzA1MTcnLFxyXG4gICAgbGlnaHRHcmF5OiAnI0VBRUFFQScsXHJcbiAgICBncmF5OiAnIzhGOEY4RicsXHJcbiAgICBkYXJrR3JheTogJyMyRTJGNDInLFxyXG4gICAgcmVkOiAnI0ZGNjM0NycsXHJcbiAgICBiYXNlQ29sb3JCbGFjazI6ICcjNjk3MDdmJyxcclxuICAgIGJhc2VDb2xvckJsdWU6ICcjMmU1YmZmJyxcclxuICAgIGJhc2VDb2xvckdyYXk6ICcjYmZjNWQyJyxcclxuICAgIGJhc2VDb2xvckJsYWNrMzogJyM4Nzk4YWQnLFxyXG4gICAgYmFzZUNvbG9yV2hpdGU6ICcjZmZmZmZmJyxcclxuICAgIGJhc2VDb2xvckJsYWNrOiAnIzJlMzg0ZCcsXHJcbiAgICBiYXNlQ29sb3JHcmF5MjogJyNmNGY2ZmMnLFxyXG4gICAgYmFzZUNvbG9yR3JheTM6ICcjZWVmM2Y1JyxcclxuICAgIGJhc2VDb2xvckdyZWVuOiAnIzMzYWMyZScsXHJcbiAgICBiYXNlQ29sb3JZZWxsb3c6ICcjZjdjMTM3JyxcclxuICAgIGJhc2VDb2xvclRlYWw6ICcjMDBjMWQ0JyxcclxuICAgIGJhc2VDb2xvclJlZDogJyNkNjM2NDknLFxyXG4gICAgYmFzZUNvbG9yUHVycGxlOiAnIzhjNTRmZicsXHJcbiAgICBsaWdodFBlcml3aW5rbGU6ICcjZDZkZmZmJyxcclxuICAgIGNsb3VkeUJsdWU6ICcjYjBiYWM5JyxcclxuICAgIHRvbWF0bzogJyNlNzQxMzMnLFxyXG4gICAgYmx1ZVNpZGU6ICcjMWE0Njc5JyxcclxuICAgIGJhc2VDb2xvckJsdWUyMDogJ3JnYmEoNDYsIDkxLCAyNTUsIDAuMiknLFxyXG4gICAgY29sb3IwMTogJyM3ZmZmZmYnLFxyXG4gICAgZGl2aWRlcjogJyNjOGM5Y2MnLFxyXG4gICAgYmFzZUNvbG9yUmVkMTA6ICdyZ2JhKDIxNCwgNTQsIDczLCAwLjEpJyxcclxuICAgIGJhc2VDb2xvckdyZWVuMTU6ICdyZ2JhKDgwLCAxNzMsIDQ4LCAwLjE1KScsXHJcbiAgICBiYXNlQ29sb3JCbHVlMTA6ICdyZ2JhKDQ2LCA5MSwgMjU1LCAwLjEpJyxcclxuICAgIGJhc2VDb2xvclllbGxvdzEwOiAncmdiYSgyNDcsIDE5MywgNTUsIDAuMSknXHJcbiAgfSxcclxuICBzcGFjaW5nczoge1xyXG4gICAgeHhzbWFsbDogJzAuOHJlbScsXHJcbiAgICB4c21hbGw6ICcxLjZyZW0nLFxyXG4gICAgc21hbGw6ICcyLjRyZW0nLFxyXG4gICAgbWVkaXVtOiAnMy4ycmVtJyxcclxuICAgIGxhcmdlOiAnNC4wcmVtJyxcclxuICAgIHhsYXJnZTogJzQuOHJlbScsXHJcbiAgICB4eGxhcmdlOiAnNS42cmVtJ1xyXG4gIH0sXHJcbiAgbGF5ZXJzOiB7XHJcbiAgICBiYXNlOiAxMCxcclxuICAgIG1lbnU6IDIwLFxyXG4gICAgb3ZlcmxheTogMzAsXHJcbiAgICBtb2RhbDogNDAsXHJcbiAgICBhbHdheXNPblRvcDogNTBcclxuICB9LFxyXG4gIHRyYW5zaXRpb246IHtcclxuICAgIGRlZmF1bHQ6ICcwLjNzIGVhc2UtaW4tb3V0JyxcclxuICAgIGZhc3Q6ICcwLjFzIGVhc2UtaW4tb3V0J1xyXG4gIH1cclxufSBhcyBjb25zdFxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=