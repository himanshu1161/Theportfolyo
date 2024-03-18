"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContentModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentModal */ "./src/components/ContentModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Assignments\\kura\\src\\components\\Home.js",
    _this = undefined,
    _s = $RefreshSig$();





var Home = function Home(_ref) {
  _s();

  var _data$user, _data$user$about, _data$user2, _data$user2$about, _data$user3, _data$user3$about, _data$user3$about$ava, _data$user4, _data$user4$about, _data$user5, _data$user5$about;

  var data = _ref.data;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    img: null,
    title: ""
  }),
      modalValue = _useState2[0],
      setModalValue = _useState2[1];

  var onOpenModal = function onOpenModal(img, title) {
    setOpen(true);
    setModalValue({
      img: img,
      title: title
    });
  };

  var _onCloseModal = function onCloseModal() {
    setOpen(false);
    setModalValue({
      img: null,
      title: ""
    });
  }; // Check if data is available before accessing its properties


  var userName = (data === null || data === void 0 ? void 0 : (_data$user = data.user) === null || _data$user === void 0 ? void 0 : (_data$user$about = _data$user.about) === null || _data$user$about === void 0 ? void 0 : _data$user$about.name) || "User";
  var subTitle = (data === null || data === void 0 ? void 0 : (_data$user2 = data.user) === null || _data$user2 === void 0 ? void 0 : (_data$user2$about = _data$user2.about) === null || _data$user2$about === void 0 ? void 0 : _data$user2$about.subTitle) || "Subtitle";
  var avatarUrl = (data === null || data === void 0 ? void 0 : (_data$user3 = data.user) === null || _data$user3 === void 0 ? void 0 : (_data$user3$about = _data$user3.about) === null || _data$user3$about === void 0 ? void 0 : (_data$user3$about$ava = _data$user3$about.avatar) === null || _data$user3$about$ava === void 0 ? void 0 : _data$user3$about$ava.url) || "/default-avatar.jpg";
  var expYears = (data === null || data === void 0 ? void 0 : (_data$user4 = data.user) === null || _data$user4 === void 0 ? void 0 : (_data$user4$about = _data$user4.about) === null || _data$user4$about === void 0 ? void 0 : _data$user4$about.exp_year) || 0;
  var total = (data === null || data === void 0 ? void 0 : (_data$user5 = data.user) === null || _data$user5 === void 0 ? void 0 : (_data$user5$about = _data$user5.about) === null || _data$user5$about === void 0 ? void 0 : _data$user5$about.some_total) || 0;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "home",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "kura_tm_hero",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "content",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "left",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
              className: "name",
              children: userName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
              className: "job",
              children: subTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "services",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    onClick: function onClick() {
                      return onOpenModal("/img/service/1.jpg", "Creative Designer based in Japan");
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "image",
                      src: "/img/service/1.jpg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Web Development"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 49,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/right-arrow.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    onClick: function onClick() {
                      return onOpenModal("/img/service/2.jpg", "Digital Marketing");
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "image",
                      src: "/img/service/2.jpg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Digital Marketing"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/right-arrow.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    onClick: function onClick() {
                      return onOpenModal("/img/service/1.jpg", "Graphic Design");
                    },
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "image",
                      src: "/img/service/3.jpg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Graphic Design"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/right-arrow.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "short_info",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                      children: expYears
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: ["Years of", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 25
                      }, _this), "Experience"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                      children: total
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: ["Happy", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 25
                      }, _this), "Customers"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "right",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "image",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: avatarUrl,
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "main",
                style: {
                  backgroundImage: "url(".concat(avatarUrl, ")")
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "shape"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "down anchor",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              href: "#portfolio",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                className: "svg",
                src: "/img/svg/down-arrow.svg",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ContentModal__WEBPACK_IMPORTED_MODULE_1__.HomeModal, {
      open: open,
      onCloseModal: function onCloseModal() {
        return _onCloseModal();
      },
      img: modalValue.img,
      title: modalValue.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, _this);
};

_s(Home, "1qLsiDJoVFdOT1G+lsg79+9M9z8=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODg4YzZjMjlkMmQwY2E1MjU3OGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ3pCLGtCQUF3QkgsK0NBQVEsQ0FBQyxLQUFELENBQWhDO0FBQUEsTUFBT0ksSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQW9DTCwrQ0FBUSxDQUFDO0FBQzNDTSxJQUFBQSxHQUFHLEVBQUUsSUFEc0M7QUFFM0NDLElBQUFBLEtBQUssRUFBRTtBQUZvQyxHQUFELENBQTVDO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFLQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDSixHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDbENGLElBQUFBLE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDQUksSUFBQUEsYUFBYSxDQUFDO0FBQUVILE1BQUFBLEdBQUcsRUFBSEEsR0FBRjtBQUFPQyxNQUFBQSxLQUFLLEVBQUxBO0FBQVAsS0FBRCxDQUFiO0FBQ0QsR0FIRDs7QUFLQSxNQUFNSSxhQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCTixJQUFBQSxPQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FJLElBQUFBLGFBQWEsQ0FBQztBQUFFSCxNQUFBQSxHQUFHLEVBQUUsSUFBUDtBQUFhQyxNQUFBQSxLQUFLLEVBQUU7QUFBcEIsS0FBRCxDQUFiO0FBQ0QsR0FIRCxDQVp5QixDQWlCekI7OztBQUNBLE1BQU1LLFFBQVEsR0FBRyxDQUFBVCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLDBCQUFBQSxJQUFJLENBQUVVLElBQU4sOEVBQVlDLEtBQVosc0VBQW1CQyxJQUFuQixLQUEyQixNQUE1QztBQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFBYixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLDJCQUFBQSxJQUFJLENBQUVVLElBQU4saUZBQVlDLEtBQVosd0VBQW1CRSxRQUFuQixLQUErQixVQUFoRDtBQUNBLE1BQU1DLFNBQVMsR0FBRyxDQUFBZCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLDJCQUFBQSxJQUFJLENBQUVVLElBQU4saUZBQVlDLEtBQVosaUdBQW1CSSxNQUFuQixnRkFBMkJDLEdBQTNCLEtBQWtDLHFCQUFwRDtBQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFBakIsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSiwyQkFBQUEsSUFBSSxDQUFFVSxJQUFOLGlGQUFZQyxLQUFaLHdFQUFtQk8sUUFBbkIsS0FBK0IsQ0FBaEQ7QUFDQSxNQUFNQyxLQUFLLEdBQUksQ0FBQW5CLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosMkJBQUFBLElBQUksQ0FBRVUsSUFBTixpRkFBWUMsS0FBWix3RUFBbUJTLFVBQW5CLEtBQWlDLENBQWhEO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBaUMsTUFBRSxFQUFDLE1BQXBDO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsTUFBZjtBQUFBLG9DQUNFO0FBQU0sdUJBQVMsRUFBQyxNQUFoQjtBQUFBLHdCQUF3Qlg7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUksdUJBQVMsRUFBQyxLQUFkO0FBQUEsd0JBQXFCSTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBR0U7QUFBSyx1QkFBUyxFQUFDLFVBQWY7QUFBQSxxQ0FDRTtBQUFBLHdDQUNFO0FBQUEseUNBQ0U7QUFDRSx3QkFBSSxFQUFDLEdBRFA7QUFFRSwyQkFBTyxFQUFFO0FBQUEsNkJBQ1BOLFdBQVcsQ0FDVCxvQkFEUyxFQUVULGtDQUZTLENBREo7QUFBQSxxQkFGWDtBQUFBLDRDQVNFO0FBQUssK0JBQVMsRUFBQyxPQUFmO0FBQXVCLHlCQUFHLEVBQUMsb0JBQTNCO0FBQWdELHlCQUFHLEVBQUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFURixlQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVZGLGVBV0U7QUFDRSwrQkFBUyxFQUFDLEtBRFo7QUFFRSx5QkFBRyxFQUFDLDBCQUZOO0FBR0UseUJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQW9CRTtBQUFBLHlDQUNFO0FBQ0Usd0JBQUksRUFBQyxHQURQO0FBRUUsMkJBQU8sRUFBRTtBQUFBLDZCQUNQQSxXQUFXLENBQUMsb0JBQUQsRUFBdUIsbUJBQXZCLENBREo7QUFBQSxxQkFGWDtBQUFBLDRDQU1FO0FBQUssK0JBQVMsRUFBQyxPQUFmO0FBQXVCLHlCQUFHLEVBQUMsb0JBQTNCO0FBQWdELHlCQUFHLEVBQUM7QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFORixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVBGLGVBUUU7QUFDRSwrQkFBUyxFQUFDLEtBRFo7QUFFRSx5QkFBRyxFQUFDLDBCQUZOO0FBR0UseUJBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFwQkYsZUFvQ0U7QUFBQSx5Q0FDRTtBQUNFLHdCQUFJLEVBQUMsR0FEUDtBQUVFLDJCQUFPLEVBQUU7QUFBQSw2QkFDUEEsV0FBVyxDQUFDLG9CQUFELEVBQXVCLGdCQUF2QixDQURKO0FBQUEscUJBRlg7QUFBQSw0Q0FNRTtBQUFLLCtCQUFTLEVBQUMsT0FBZjtBQUF1Qix5QkFBRyxFQUFDLG9CQUEzQjtBQUFnRCx5QkFBRyxFQUFDO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBTkYsZUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFQRixlQVFFO0FBQ0UsK0JBQVMsRUFBQyxLQURaO0FBRUUseUJBQUcsRUFBQywwQkFGTjtBQUdFLHlCQUFHLEVBQUM7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsZUEwREU7QUFBSyx1QkFBUyxFQUFDLFlBQWY7QUFBQSxxQ0FDRTtBQUFBLHdDQUNFO0FBQUEseUNBQ0U7QUFBSyw2QkFBUyxFQUFDLFlBQWY7QUFBQSw0Q0FDRTtBQUFBLGdDQUFLVTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsZUFFRTtBQUFBLDBEQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFXRTtBQUFBLHlDQUNFO0FBQUssNkJBQVMsRUFBQyxZQUFmO0FBQUEsNENBQ0U7QUFBQSxnQ0FBS0U7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLGVBRUU7QUFBQSx1REFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBMURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQW9GRTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxPQUFmO0FBQUEsc0NBQ0U7QUFBSyxtQkFBRyxFQUFFTCxTQUFWO0FBQXFCLG1CQUFHLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQ0UseUJBQVMsRUFBQyxNQURaO0FBRUUscUJBQUssRUFBRTtBQUFFTyxrQkFBQUEsZUFBZSxnQkFBU1AsU0FBVDtBQUFqQjtBQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsZUFNRTtBQUFLLHlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEZGLGVBOEZFO0FBQUsscUJBQVMsRUFBQyxhQUFmO0FBQUEsbUNBQ0U7QUFBRyxrQkFBSSxFQUFDLFlBQVI7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUMsS0FBZjtBQUFxQixtQkFBRyxFQUFDLHlCQUF6QjtBQUFtRCxtQkFBRyxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE5RkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQXlHRSw4REFBQyxvREFBRDtBQUNFLFVBQUksRUFBRWIsSUFEUjtBQUVFLGtCQUFZLEVBQUU7QUFBQSxlQUFNTyxhQUFZLEVBQWxCO0FBQUEsT0FGaEI7QUFHRSxTQUFHLEVBQUVILFVBQVUsQ0FBQ0YsR0FIbEI7QUFJRSxXQUFLLEVBQUVFLFVBQVUsQ0FBQ0Q7QUFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtIRCxDQTFJRDs7R0FBTUw7O0tBQUFBO0FBNElOLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSG9tZU1vZGFsIH0gZnJvbSBcIi4vQ29udGVudE1vZGFsXCI7XHJcblxyXG5jb25zdCBIb21lID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbFZhbHVlLCBzZXRNb2RhbFZhbHVlXSA9IHVzZVN0YXRlKHtcclxuICAgIGltZzogbnVsbCxcclxuICAgIHRpdGxlOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvbk9wZW5Nb2RhbCA9IChpbWcsIHRpdGxlKSA9PiB7XHJcbiAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgc2V0TW9kYWxWYWx1ZSh7IGltZywgdGl0bGUgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBzZXRNb2RhbFZhbHVlKHsgaW1nOiBudWxsLCB0aXRsZTogXCJcIiB9KTtcclxuICB9O1xyXG5cclxuICAvLyBDaGVjayBpZiBkYXRhIGlzIGF2YWlsYWJsZSBiZWZvcmUgYWNjZXNzaW5nIGl0cyBwcm9wZXJ0aWVzXHJcbiAgY29uc3QgdXNlck5hbWUgPSBkYXRhPy51c2VyPy5hYm91dD8ubmFtZSB8fCBcIlVzZXJcIjtcclxuICBjb25zdCBzdWJUaXRsZSA9IGRhdGE/LnVzZXI/LmFib3V0Py5zdWJUaXRsZSB8fCBcIlN1YnRpdGxlXCI7XHJcbiAgY29uc3QgYXZhdGFyVXJsID0gZGF0YT8udXNlcj8uYWJvdXQ/LmF2YXRhcj8udXJsIHx8IFwiL2RlZmF1bHQtYXZhdGFyLmpwZ1wiO1xyXG4gIGNvbnN0IGV4cFllYXJzID0gZGF0YT8udXNlcj8uYWJvdXQ/LmV4cF95ZWFyIHx8IDA7XHJcbiAgY29uc3QgdG90YWwgPSAgZGF0YT8udXNlcj8uYWJvdXQ/LnNvbWVfdG90YWwgfHwgMDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zZWN0aW9uXCIgaWQ9XCJob21lXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9oZXJvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYW1lXCI+e3VzZXJOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiam9iXCI+e3N1YlRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlc1wiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbk1vZGFsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiL2ltZy9zZXJ2aWNlLzEuanBnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDcmVhdGl2ZSBEZXNpZ25lciBiYXNlZCBpbiBKYXBhblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPVwiL2ltZy9zZXJ2aWNlLzEuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPldlYiBEZXZlbG9wbWVudDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbk1vZGFsKFwiL2ltZy9zZXJ2aWNlLzIuanBnXCIsIFwiRGlnaXRhbCBNYXJrZXRpbmdcIilcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPVwiL2ltZy9zZXJ2aWNlLzIuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkRpZ2l0YWwgTWFya2V0aW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3N2Zy9yaWdodC1hcnJvdy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuTW9kYWwoXCIvaW1nL3NlcnZpY2UvMS5qcGdcIiwgXCJHcmFwaGljIERlc2lnblwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9XCIvaW1nL3NlcnZpY2UvMy5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+R3JhcGhpYyBEZXNpZ248L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9ydF9pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz57ZXhwWWVhcnN9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBZZWFycyBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRXhwZXJpZW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDM+e3RvdGFsfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSGFwcHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEN1c3RvbWVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFyVXJsfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YXZhdGFyVXJsfSlgIH19XHJcbiAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd24gYW5jaG9yXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwb3J0Zm9saW9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3ZnXCIgc3JjPVwiL2ltZy9zdmcvZG93bi1hcnJvdy5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxIb21lTW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2VNb2RhbD17KCkgPT4gb25DbG9zZU1vZGFsKCl9XHJcbiAgICAgICAgaW1nPXttb2RhbFZhbHVlLmltZ31cclxuICAgICAgICB0aXRsZT17bW9kYWxWYWx1ZS50aXRsZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lTW9kYWwiLCJIb21lIiwiZGF0YSIsIm9wZW4iLCJzZXRPcGVuIiwiaW1nIiwidGl0bGUiLCJtb2RhbFZhbHVlIiwic2V0TW9kYWxWYWx1ZSIsIm9uT3Blbk1vZGFsIiwib25DbG9zZU1vZGFsIiwidXNlck5hbWUiLCJ1c2VyIiwiYWJvdXQiLCJuYW1lIiwic3ViVGl0bGUiLCJhdmF0YXJVcmwiLCJhdmF0YXIiLCJ1cmwiLCJleHBZZWFycyIsImV4cF95ZWFyIiwidG90YWwiLCJzb21lX3RvdGFsIiwiYmFja2dyb3VuZEltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==