"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/react/dropdown";
exports.ids = ["pages/react/dropdown"];
exports.modules = {

/***/ "./components/common/ReactDropdown.js":
/*!********************************************!*\
  !*** ./components/common/ReactDropdown.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Dropdown */ \"react-bootstrap/Dropdown\");\n/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/DropdownButton */ \"react-bootstrap/DropdownButton\");\n/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst defaultOptions = [\n    {\n        title: \"US\"\n    },\n    {\n        title: \"FR\"\n    }\n];\nconst ReactDropdown = (props)=>{\n    const { options =defaultOptions  } = props;\n    const { 0: show , 1: setShow  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(options[0].title);\n    let dropdownItems = options.map((item)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_2___default().Item), {\n            as: \"button\",\n            onClick: ()=>setTitle(item.title),\n            children: item.title\n        }, item.title, false, {\n            fileName: \"/Users/cemtrex/Documents/GitHub/react-next-components/components/common/ReactDropdown.js\",\n            lineNumber: 20,\n            columnNumber: 16\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"react-dropdown\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_3___default()), {\n            title: title,\n            // show={show}\n            onToggle: ()=>console.log(\"toggled\"),\n            children: dropdownItems\n        }, void 0, false, {\n            fileName: \"/Users/cemtrex/Documents/GitHub/react-next-components/components/common/ReactDropdown.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/cemtrex/Documents/GitHub/react-next-components/components/common/ReactDropdown.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactDropdown);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9SZWFjdERyb3Bkb3duLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQWlDO0FBQ2U7QUFDWTtBQUU1RCxNQUFNRyxjQUFjLEdBQUc7SUFDbkI7UUFDSUMsS0FBSyxFQUFFLElBQUk7S0FDZDtJQUNEO1FBQ0lBLEtBQUssRUFBRSxJQUFJO0tBQ2Q7Q0FDSjtBQUVELE1BQU1DLGFBQWEsR0FBRyxDQUFDQyxLQUFLLEdBQUs7SUFDN0IsTUFBTSxFQUFFQyxPQUFPLEVBQUdKLGNBQWMsR0FBRSxHQUFHRyxLQUFLO0lBQzFDLE1BQU0sS0FBQ0UsSUFBSSxNQUFFQyxPQUFPLE1BQUlULCtDQUFRLENBQUMsS0FBSyxDQUFDO0lBQ3ZDLE1BQU0sS0FBQ0ksS0FBSyxNQUFFTSxRQUFRLE1BQUlWLCtDQUFRLENBQUNPLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0gsS0FBSyxDQUFDO0lBRXBELElBQUlPLGFBQWEsR0FBR0osT0FBTyxDQUFDSyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxHQUFLO1FBQ3RDLHFCQUFPLDhEQUFDWixzRUFBYTtZQUFDYyxFQUFFLEVBQUMsUUFBUTtZQUFrQkMsT0FBTyxFQUFFLElBQU1OLFFBQVEsQ0FBQ0csSUFBSSxDQUFDVCxLQUFLLENBQUM7c0JBQUdTLElBQUksQ0FBQ1QsS0FBSztXQUE1RFMsSUFBSSxDQUFDVCxLQUFLOzs7O3FCQUFtRTtJQUN4SCxDQUFDLENBQUM7SUFFRixxQkFDSSw4REFBQ2EsS0FBRztRQUFDQyxTQUFTLEVBQUMsZ0JBQWdCO2tCQUMzQiw0RUFBQ2hCLHVFQUFjO1lBQ1hFLEtBQUssRUFBRUEsS0FBSztZQUNaLGNBQWM7WUFDZGUsUUFBUSxFQUFFLElBQU1DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztzQkFFckNWLGFBQWE7Ozs7O3FCQUNEOzs7OztpQkFDZixDQUNUO0FBQ0wsQ0FBQztBQUNELGlFQUFlTixhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXByZXN0YXJ0Ly4vY29tcG9uZW50cy9jb21tb24vUmVhY3REcm9wZG93bi5qcz85YzdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Ecm9wZG93bic7XG5pbXBvcnQgRHJvcGRvd25CdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duQnV0dG9uJztcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ1VTJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0ZSJ1xuICAgIH1cbl07XG5cbmNvbnN0IFJlYWN0RHJvcGRvd24gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IG9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucyB9ID0gcHJvcHM7XG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUob3B0aW9uc1swXS50aXRsZSlcblxuICAgIGxldCBkcm9wZG93bkl0ZW1zID0gb3B0aW9ucy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIDxEcm9wZG93bi5JdGVtIGFzPVwiYnV0dG9uXCIga2V5PXtpdGVtLnRpdGxlfSBvbkNsaWNrPXsoKSA9PiBzZXRUaXRsZShpdGVtLnRpdGxlKX0+e2l0ZW0udGl0bGV9PC9Ecm9wZG93bi5JdGVtPlxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlYWN0LWRyb3Bkb3duJz5cbiAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvblxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAvLyBzaG93PXtzaG93fVxuICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXsoKSA9PiBjb25zb2xlLmxvZygndG9nZ2xlZCcpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkcm9wZG93bkl0ZW1zfVxuICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcbmV4cG9ydCBkZWZhdWx0IFJlYWN0RHJvcGRvd247Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRHJvcGRvd24iLCJEcm9wZG93bkJ1dHRvbiIsImRlZmF1bHRPcHRpb25zIiwidGl0bGUiLCJSZWFjdERyb3Bkb3duIiwicHJvcHMiLCJvcHRpb25zIiwic2hvdyIsInNldFNob3ciLCJzZXRUaXRsZSIsImRyb3Bkb3duSXRlbXMiLCJtYXAiLCJpdGVtIiwiSXRlbSIsImFzIiwib25DbGljayIsImRpdiIsImNsYXNzTmFtZSIsIm9uVG9nZ2xlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/common/ReactDropdown.js\n");

/***/ }),

/***/ "./pages/react/dropdown.js":
/*!*********************************!*\
  !*** ./pages/react/dropdown.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_common_ReactDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/common/ReactDropdown */ \"./components/common/ReactDropdown.js\");\n\n\nconst PageReactDropdown = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_ReactDropdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/cemtrex/Documents/GitHub/react-next-components/pages/react/dropdown.js\",\n        lineNumber: 3,\n        columnNumber: 33\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageReactDropdown);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWFjdC9kcm9wZG93bi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBOEQ7QUFFOUQsTUFBTUMsaUJBQWlCLEdBQUcsa0JBQU0sOERBQUNELHdFQUFhOzs7O2lCQUFHO0FBRWpELGlFQUFlQyxpQkFBaUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcHJlc3RhcnQvLi9wYWdlcy9yZWFjdC9kcm9wZG93bi5qcz8xZmJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdERyb3Bkb3duIGZyb20gXCJAL2NvbXBvbmVudHMvY29tbW9uL1JlYWN0RHJvcGRvd25cIjtcblxuY29uc3QgUGFnZVJlYWN0RHJvcGRvd24gPSAoKSA9PiA8UmVhY3REcm9wZG93biAvPlxuXG5leHBvcnQgZGVmYXVsdCBQYWdlUmVhY3REcm9wZG93bjsiXSwibmFtZXMiOlsiUmVhY3REcm9wZG93biIsIlBhZ2VSZWFjdERyb3Bkb3duIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/react/dropdown.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Dropdown":
/*!*******************************************!*\
  !*** external "react-bootstrap/Dropdown" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ "react-bootstrap/DropdownButton":
/*!*************************************************!*\
  !*** external "react-bootstrap/DropdownButton" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("react-bootstrap/DropdownButton");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/react/dropdown.js"));
module.exports = __webpack_exports__;

})();