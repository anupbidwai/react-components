/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/cursor"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fcemtrex%2FDocuments%2FGitHub%2Freact-next-components%2Fpages%2Fcursor.js&page=%2Fcursor!":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fcemtrex%2FDocuments%2FGitHub%2Freact-next-components%2Fpages%2Fcursor.js&page=%2Fcursor! ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/cursor\",\n      function () {\n        return __webpack_require__(/*! ./pages/cursor.js */ \"./pages/cursor.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/cursor\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmNlbXRyZXglMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZyZWFjdC1uZXh0LWNvbXBvbmVudHMlMkZwYWdlcyUyRmN1cnNvci5qcyZwYWdlPSUyRmN1cnNvciEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDMUM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzk2M2IiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9jdXJzb3JcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2N1cnNvci5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvY3Vyc29yXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fcemtrex%2FDocuments%2FGitHub%2Freact-next-components%2Fpages%2Fcursor.js&page=%2Fcursor!\n"));

/***/ }),

/***/ "./components/Common/Cursor/index.js":
/*!*******************************************!*\
  !*** ./components/Common/Cursor/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar cusrsorImg = \"/logo/logo.svg\";\nvar Cursor = /*#__PURE__*/ _s(react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(_c = _s(function(props, ref) {\n    _s();\n    var _$ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), cords = _$ref[0], setCords = _$ref[1];\n    var element = null, btnPlayPause = null, video = null;\n    // set logo position\n    var setPosition = function(event) {\n        var bounds = element.getBoundingClientRect();\n        setCords({\n            x: event.clientX - bounds.x,\n            y: event.clientY - bounds.y\n        });\n    };\n    // reset logo position\n    var resetPosition = function() {\n        setCords({\n            x: \"50%\",\n            y: \"50%\",\n            transition: \"all 0.5s\"\n        });\n    };\n    // handle play pause\n    var handlePlayPause = function() {\n        if (video.paused) {\n            video.play();\n        } else {\n            video.pause();\n        }\n    };\n    // btn style\n    var btnStyle = {\n        left: cords.x,\n        top: cords.y,\n        transition: cords.transition\n    };\n    // mounting effect\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        // https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event\n        // get current\n        element = ref.current;\n        // get HTML video and set to variable\n        if (element.childNodes[0].tagName.toLowerCase() === \"video\") {\n            video = element.childNodes[0];\n        }\n        // get HTML button and set to variable\n        if (element.childNodes[1].tagName.toLowerCase() === \"button\") {\n            btnPlayPause = element.childNodes[1];\n            btnPlayPause.addEventListener(\"click\", handlePlayPause);\n        }\n        // register event\n        element.addEventListener(\"pointermove\", setPosition);\n        element.addEventListener(\"pointerout\", resetPosition);\n        // clean up\n        return function() {\n            if (element) {\n                element.removeEventListener(\"pointermove\", setPosition);\n                element.removeEventListener(\"pointerout\", resetPosition);\n            }\n            if (element.childNodes[1].tagName.toLowerCase() === \"button\") {\n                btnPlayPause.removeEventListener(\"click\", handlePlayPause);\n            }\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cursor\",\n        ref: ref,\n        children: [\n            props.children,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: \"btn\",\n                style: btnStyle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: cusrsorImg,\n                    alt: \"logo\",\n                    width: \"40\",\n                    height: \"40\"\n                }, void 0, false, {\n                    fileName: \"/Users/cemtrex/Documents/GitHub/react-next-components/components/Common/Cursor/index.js\",\n                    lineNumber: 82,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/cemtrex/Documents/GitHub/react-next-components/components/Common/Cursor/index.js\",\n                lineNumber: 81,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/cemtrex/Documents/GitHub/react-next-components/components/Common/Cursor/index.js\",\n        lineNumber: 79,\n        columnNumber: 3\n    }, _this);\n}, \"bZvTV4UWTy+ePeavylPDvbKzupU=\")), \"bZvTV4UWTy+ePeavylPDvbKzupU=\");\n_c1 = Cursor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cursor);\nvar _c, _c1;\n$RefreshReg$(_c, \"Cursor$React.forwardRef\");\n$RefreshReg$(_c1, \"Cursor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFDLFlBQVksRUFBRWQsYUFBYSxDQUFDLENBQUM7WUFDMUQsQ0FBQztZQUNELElBQUlYLE9BQU8sQ0FBQ3FCLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLEVBQUUsS0FBSyxRQUFRLEVBQUU7Z0JBQzdEdEIsWUFBWSxDQUFDd0IsbUJBQW1CLENBQUMsT0FBTyxFQUFFWixlQUFlLENBQUMsQ0FBQztZQUM1RCxDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNDLDhEQUFDYSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxRQUFRO1FBQUM5QixHQUFHLEVBQUVBLEdBQUc7O1lBQzlCRCxLQUFLLENBQUNnQyxRQUFROzBCQUNmLDhEQUFDQyxRQUFNO2dCQUFDQyxFQUFFLEVBQUMsS0FBSztnQkFBQ0MsS0FBSyxFQUFFZCxRQUFROzBCQUMvQiw0RUFBQ2UsS0FBRztvQkFDSEMsR0FBRyxFQUFFeEMsVUFBVTtvQkFDZnlDLEdBQUcsRUFBQyxNQUFNO29CQUNWQyxLQUFLLEVBQUMsSUFBSTtvQkFDVkMsTUFBTSxFQUFDLElBQUk7Ozs7O3lCQUNWOzs7OztxQkFDTTs7Ozs7O2FBQ0osQ0FDTjtBQUNGLENBQUMsa0NBQUM7O0FBRUYsK0RBQWUxQyxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vQ3Vyc29yL2luZGV4LmpzPzA4MWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IGN1c3Jzb3JJbWcgPSBcIi9sb2dvL2xvZ28uc3ZnXCI7XG5cbmNvbnN0IEN1cnNvciA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcblx0Y29uc3QgW2NvcmRzLCBzZXRDb3Jkc10gPSB1c2VTdGF0ZSh7fSk7XG5cdGxldCBlbGVtZW50ID0gbnVsbCxcblx0XHRidG5QbGF5UGF1c2UgPSBudWxsLFxuXHRcdHZpZGVvID0gbnVsbDtcblxuXHQvLyBzZXQgbG9nbyBwb3NpdGlvblxuXHRsZXQgc2V0UG9zaXRpb24gPSAoZXZlbnQpID0+IHtcblx0XHRsZXQgYm91bmRzID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRzZXRDb3Jkcyh7XG5cdFx0XHR4OiAoZXZlbnQuY2xpZW50WCAtIGJvdW5kcy54KSxcblx0XHRcdHk6IChldmVudC5jbGllbnRZIC0gYm91bmRzLnkpXG5cdFx0fSk7XG5cdH07XG5cblx0Ly8gcmVzZXQgbG9nbyBwb3NpdGlvblxuXHRjb25zdCByZXNldFBvc2l0aW9uID0gKCkgPT4ge1xuXHRcdHNldENvcmRzKHtcblx0XHRcdHg6ICc1MCUnLFxuXHRcdFx0eTogXCI1MCVcIixcblx0XHRcdHRyYW5zaXRpb246ICdhbGwgMC41cydcblx0XHR9KVxuXHR9O1xuXG5cdC8vIGhhbmRsZSBwbGF5IHBhdXNlXG5cdGNvbnN0IGhhbmRsZVBsYXlQYXVzZSA9ICgpID0+IHtcblx0XHRpZiAodmlkZW8ucGF1c2VkKSB7XG5cdFx0XHR2aWRlby5wbGF5KClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmlkZW8ucGF1c2UoKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gYnRuIHN0eWxlXG5cdGNvbnN0IGJ0blN0eWxlID0ge1xuXHRcdGxlZnQ6IGNvcmRzLngsXG5cdFx0dG9wOiBjb3Jkcy55LFxuXHRcdHRyYW5zaXRpb246IGNvcmRzLnRyYW5zaXRpb25cblx0fVxuXG5cdC8vIG1vdW50aW5nIGVmZmVjdFxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50L3BvaW50ZXJtb3ZlX2V2ZW50XG5cblx0XHQvLyBnZXQgY3VycmVudFxuXHRcdGVsZW1lbnQgPSByZWYuY3VycmVudDtcblxuXHRcdC8vIGdldCBIVE1MIHZpZGVvIGFuZCBzZXQgdG8gdmFyaWFibGVcblx0XHRpZiAoZWxlbWVudC5jaGlsZE5vZGVzWzBdLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3ZpZGVvJykge1xuXHRcdFx0dmlkZW8gPSBlbGVtZW50LmNoaWxkTm9kZXNbMF07XG5cdFx0fVxuXG5cdFx0Ly8gZ2V0IEhUTUwgYnV0dG9uIGFuZCBzZXQgdG8gdmFyaWFibGVcblx0XHRpZiAoZWxlbWVudC5jaGlsZE5vZGVzWzFdLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2J1dHRvbicpIHtcblx0XHRcdGJ0blBsYXlQYXVzZSA9IGVsZW1lbnQuY2hpbGROb2Rlc1sxXTtcblx0XHRcdGJ0blBsYXlQYXVzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUGxheVBhdXNlKTtcblx0XHR9XG5cblx0XHQvLyByZWdpc3RlciBldmVudFxuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJtb3ZlXCIsIHNldFBvc2l0aW9uKTtcblx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIHJlc2V0UG9zaXRpb24pO1xuXG5cdFx0Ly8gY2xlYW4gdXBcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9pbnRlcm1vdmVcIiwgc2V0UG9zaXRpb24pO1xuXHRcdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb2ludGVyb3V0XCIsIHJlc2V0UG9zaXRpb24pO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVsZW1lbnQuY2hpbGROb2Rlc1sxXS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nKSB7XG5cdFx0XHRcdGJ0blBsYXlQYXVzZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUGxheVBhdXNlKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yXCIgcmVmPXtyZWZ9ID5cblx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHRcdDxidXR0b24gaWQ9XCJidG5cIiBzdHlsZT17YnRuU3R5bGV9PlxuXHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0c3JjPXtjdXNyc29ySW1nfVxuXHRcdFx0XHRcdGFsdD1cImxvZ29cIlxuXHRcdFx0XHRcdHdpZHRoPVwiNDBcIlxuXHRcdFx0XHRcdGhlaWdodD1cIjQwXCJcblx0XHRcdFx0Lz5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ3Vyc29yOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3VzcnNvckltZyIsIkN1cnNvciIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImNvcmRzIiwic2V0Q29yZHMiLCJlbGVtZW50IiwiYnRuUGxheVBhdXNlIiwidmlkZW8iLCJzZXRQb3NpdGlvbiIsImV2ZW50IiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsInJlc2V0UG9zaXRpb24iLCJ0cmFuc2l0aW9uIiwiaGFuZGxlUGxheVBhdXNlIiwicGF1c2VkIiwicGxheSIsInBhdXNlIiwiYnRuU3R5bGUiLCJsZWZ0IiwidG9wIiwiY3VycmVudCIsImNoaWxkTm9kZXMiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwiYnV0dG9uIiwiaWQiLCJzdHlsZSIsImltZyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Common/Cursor/index.js\n"));

/***/ }),

/***/ "./pages/cursor.js":
/*!*************************!*\
  !*** ./pages/cursor.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Common_Cursor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Common/Cursor */ \"./components/Common/Cursor/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar PageCursor = function() {\n    _s();\n    var vRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_Cursor__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        ref: vRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n            src: \"/video.mp4\",\n            muted: true,\n            loop: true,\n            playsInline: true\n        }, void 0, false, {\n            fileName: \"/Users/cemtrex/Documents/GitHub/react-next-components/pages/cursor.js\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/cemtrex/Documents/GitHub/react-next-components/pages/cursor.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, _this);\n};\n_s(PageCursor, \"yOqBxlW7AmlNaFNmFQGkiQcDrl4=\");\n_c = PageCursor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageCursor);\nvar _c;\n$RefreshReg$(_c, \"PageCursor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jdXJzb3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7OztBQUFnRDtBQUNqQjtBQUUvQixJQUFNRSxVQUFVLEdBQUcsV0FBTTs7SUFDckIsSUFBTUMsSUFBSSxHQUFHRiw2Q0FBTSxFQUFFO0lBQ3JCLHFCQUNJLDhEQUFDRCxpRUFBTTtRQUFDSSxHQUFHLEVBQUVELElBQUk7a0JBQ2IsNEVBQUNFLE9BQUs7WUFBQ0MsR0FBRyxFQUFDLFlBQVk7WUFBQ0MsS0FBSztZQUFDQyxJQUFJO1lBQUNDLFdBQVc7Ozs7O2lCQUFHOzs7OzthQUM1QyxDQUNaO0FBQ0wsQ0FBQztHQVBLUCxVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUFTaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jdXJzb3IuanM/MjYyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3Vyc29yIGZyb20gXCJAL2NvbXBvbmVudHMvQ29tbW9uL0N1cnNvclwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBQYWdlQ3Vyc29yID0gKCkgPT4ge1xuICAgIGNvbnN0IHZSZWYgPSB1c2VSZWYoKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q3Vyc29yIHJlZj17dlJlZn0+XG4gICAgICAgICAgICA8dmlkZW8gc3JjPVwiL3ZpZGVvLm1wNFwiIG11dGVkIGxvb3AgcGxheXNJbmxpbmUgLz5cbiAgICAgICAgPC9DdXJzb3I+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlQ3Vyc29yOyJdLCJuYW1lcyI6WyJDdXJzb3IiLCJ1c2VSZWYiLCJQYWdlQ3Vyc29yIiwidlJlZiIsInJlZiIsInZpZGVvIiwic3JjIiwibXV0ZWQiLCJsb29wIiwicGxheXNJbmxpbmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/cursor.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fcemtrex%2FDocuments%2FGitHub%2Freact-next-components%2Fpages%2Fcursor.js&page=%2Fcursor!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);