"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Portfolio.js":
/*!*************************************!*\
  !*** ./src/components/Portfolio.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Assignments_kura_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-lightbox */ "./node_modules/react-awesome-lightbox/build/index.js");
/* harmony import */ var react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/react/swiper-react.js");
/* harmony import */ var _swiperSliderProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../swiperSliderProps */ "./src/swiperSliderProps.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Assignments\\kura\\src\\components\\Portfolio.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Assignments_kura_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Portfolio = function Portfolio(_ref) {
  _s();

  var _data$user, _data$user2;

  var data = _ref.data;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      showLight = _useState[0],
      setShowLight = _useState[1];

  var showLightBox = function showLightBox(index) {
    setShowLight({
      startIndex: index
    });
  };

  var hideLightBox = function hideLightBox() {
    setShowLight(null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "kura_tm_section",
      id: "portfolio",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: "kura_tm_portfolio",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "kura_tm_main_title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
              children: "Portfolio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
              children: "Selected Works"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "portfolio_list gallery_zoom wow fadeInUp",
            "data-wow-duration": ".7s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
              className: "swiper-container",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "swiper-wrapper",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, _objectSpread(_objectSpread({}, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_4__.portfolioSlider), {}, {
                  children: data === null || data === void 0 ? void 0 : (_data$user = data.user) === null || _data$user === void 0 ? void 0 : _data$user.projects.map(function (project, index) {
                    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                      className: "swiper-slide",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                        className: "list_inner",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                          className: "image",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                            src: project.image.url,
                            alt: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 39,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                            className: "main",
                            style: {
                              backgroundImage: "url(".concat(project.image.url, ")")
                            }
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 40,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                            className: "overlay"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 46,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                            className: "svg",
                            src: "/img/svg/right-arrow.svg",
                            alt: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 47,
                            columnNumber: 29
                          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                            className: "details",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
                              children: project.title
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 53,
                              columnNumber: 31
                            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
                              children: project.techStack.join(", ")
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 54,
                              columnNumber: 31
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 52,
                            columnNumber: 29
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 38,
                          columnNumber: 27
                        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                          className: "kura_tm_full_link popup-vimeo",
                          onClick: function onClick() {
                            return showLightBox(index);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 57,
                          columnNumber: 27
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 37,
                        columnNumber: 25
                      }, _this)
                    }, project._id, false, {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                      columnNumber: 23
                    }, _this);
                  })
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                className: "kura_tm_swiper_progress fill",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "my_pagination_in"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
                  className: "my_navigation",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                        className: "my_prev",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                          className: "svg",
                          src: "img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 72,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
                        className: "my_next",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("img", {
                          className: "svg",
                          src: "img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 81,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this), showLight ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_2___default()), {
      images: data === null || data === void 0 ? void 0 : (_data$user2 = data.user) === null || _data$user2 === void 0 ? void 0 : _data$user2.projects.map(function (project) {
        return {
          url: project.image.url,
          title: project.title
        };
      }),
      startIndex: showLight.startIndex,
      onClose: hideLightBox
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, _this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_s(Portfolio, "PkiaNWqbBTXvtgljQ75OMhj4mS0=");

_c = Portfolio;
/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

var _c;

$RefreshReg$(_c, "Portfolio");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjFhOTM5NTAzZjEwNDZhZjJjMWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTU8sU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBYztBQUFBOztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFDOUIsa0JBQWtDTiwrQ0FBUSxDQUFDLElBQUQsQ0FBMUM7QUFBQSxNQUFPTyxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUM5QkYsSUFBQUEsWUFBWSxDQUFDO0FBQ1hHLE1BQUFBLFVBQVUsRUFBRUQ7QUFERCxLQUFELENBQVo7QUFHRCxHQUpEOztBQU1BLE1BQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekJKLElBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxHQUZEOztBQUlBLHNCQUNFLDhEQUFDLDJDQUFEO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBaUMsUUFBRSxFQUFDLFdBQXBDO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsb0JBQWY7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQ0UscUJBQVMsRUFBQywwQ0FEWjtBQUVFLGlDQUFrQixLQUZwQjtBQUFBLG1DQUlFO0FBQUssdUJBQVMsRUFBQyxrQkFBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQyxnQkFB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQTRFR2hCLFNBQVMsZ0JBQ1IsOERBQUMsK0RBQUQ7QUFDRSxZQUFNLEVBQUVELElBQUYsYUFBRUEsSUFBRixzQ0FBRUEsSUFBSSxDQUFFTyxJQUFSLGdEQUFFLFlBQVlDLFFBQVosQ0FBcUJDLEdBQXJCLENBQXlCLFVBQUNDLE9BQUQ7QUFBQSxlQUFjO0FBQzdDRSxVQUFBQSxHQUFHLEVBQUVGLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQyxHQUQwQjtBQUU3Q0UsVUFBQUEsS0FBSyxFQUFFSixPQUFPLENBQUNJO0FBRjhCLFNBQWQ7QUFBQSxPQUF6QixDQURWO0FBS0UsZ0JBQVUsRUFBRWIsU0FBUyxDQUFDSSxVQUx4QjtBQU1FLGFBQU8sRUFBRUM7QUFOWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFEsR0FTTixJQXJGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlGRCxDQXRHRDs7R0FBTVA7O0tBQUFBO0FBd0dOLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1BvcnRmb2xpby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaWdodEJveCBmcm9tIFwicmVhY3QtYXdlc29tZS1saWdodGJveFwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgeyBwb3J0Zm9saW9TbGlkZXIgfSBmcm9tIFwiLi4vc3dpcGVyU2xpZGVyUHJvcHNcIjtcclxuXHJcbmNvbnN0IFBvcnRmb2xpbyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TGlnaHQsIHNldFNob3dMaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3Qgc2hvd0xpZ2h0Qm94ID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRTaG93TGlnaHQoe1xyXG4gICAgICBzdGFydEluZGV4OiBpbmRleCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhpZGVMaWdodEJveCA9ICgpID0+IHtcclxuICAgIHNldFNob3dMaWdodChudWxsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2VjdGlvblwiIGlkPVwicG9ydGZvbGlvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3BvcnRmb2xpb1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX21haW5fdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Qb3J0Zm9saW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgzPlNlbGVjdGVkIFdvcmtzPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3J0Zm9saW9fbGlzdCBnYWxsZXJ5X3pvb20gd293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFN3aXBlciB7Li4ucG9ydGZvbGlvU2xpZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YT8udXNlcj8ucHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17cHJvamVjdC5faWR9IGNsYXNzTmFtZT1cInN3aXBlci1zbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvamVjdC5pbWFnZS51cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb2plY3QuaW1hZ2UudXJsfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cHJvamVjdC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvamVjdC50ZWNoU3RhY2suam9pbihcIiwgXCIpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrdXJhX3RtX2Z1bGxfbGluayBwb3B1cC12aW1lb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93TGlnaHRCb3goaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zd2lwZXJfcHJvZ3Jlc3MgZmlsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15X3BhZ2luYXRpb25faW5cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteV9uYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJteV9wcmV2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXlfbmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93TGlnaHQgPyAoXHJcbiAgICAgICAgPExpZ2h0Qm94XHJcbiAgICAgICAgICBpbWFnZXM9e2RhdGE/LnVzZXI/LnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKHtcclxuICAgICAgICAgICAgdXJsOiBwcm9qZWN0LmltYWdlLnVybCxcclxuICAgICAgICAgICAgdGl0bGU6IHByb2plY3QudGl0bGUsXHJcbiAgICAgICAgICB9KSl9XHJcbiAgICAgICAgICBzdGFydEluZGV4PXtzaG93TGlnaHQuc3RhcnRJbmRleH1cclxuICAgICAgICAgIG9uQ2xvc2U9e2hpZGVMaWdodEJveH1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRnJhZ21lbnQiLCJ1c2VTdGF0ZSIsIkxpZ2h0Qm94IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJwb3J0Zm9saW9TbGlkZXIiLCJQb3J0Zm9saW8iLCJkYXRhIiwic2hvd0xpZ2h0Iiwic2V0U2hvd0xpZ2h0Iiwic2hvd0xpZ2h0Qm94IiwiaW5kZXgiLCJzdGFydEluZGV4IiwiaGlkZUxpZ2h0Qm94IiwidXNlciIsInByb2plY3RzIiwibWFwIiwicHJvamVjdCIsImltYWdlIiwidXJsIiwiYmFja2dyb3VuZEltYWdlIiwidGl0bGUiLCJ0ZWNoU3RhY2siLCJqb2luIiwiX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==