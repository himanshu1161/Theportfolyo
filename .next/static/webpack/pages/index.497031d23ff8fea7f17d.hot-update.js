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

  var _data$user, _data$user$about, _data$user2, _data$user2$about, _data$user3, _data$user3$about, _data$user3$about$ava, _data$user4, _data$user4$about;

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
              lineNumber: 33,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
              className: "job",
              children: subTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
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
                      lineNumber: 47,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Web Development"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/right-arrow.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 49,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 38,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
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
                      lineNumber: 63,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Digital Marketing"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/right-arrow.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
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
                      lineNumber: 79,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Graphic Design"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/right-arrow.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 73,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
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
                      lineNumber: 94,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: ["Years of", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 25
                      }, _this), "Experience"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 95,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                      children: "3K+"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: ["Happy", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 107,
                        columnNumber: 25
                      }, _this), "Customers"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
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
                lineNumber: 117,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "main",
                style: {
                  backgroundImage: "url(".concat(avatarUrl, ")")
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "shape"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
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
                lineNumber: 127,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
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
      lineNumber: 133,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDk3MDMxZDIzZmY4ZmVhN2YxN2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUVBLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ3pCLGtCQUF3QkgsK0NBQVEsQ0FBQyxLQUFELENBQWhDO0FBQUEsTUFBT0ksSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQW9DTCwrQ0FBUSxDQUFDO0FBQzNDTSxJQUFBQSxHQUFHLEVBQUUsSUFEc0M7QUFFM0NDLElBQUFBLEtBQUssRUFBRTtBQUZvQyxHQUFELENBQTVDO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFLQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDSixHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDbENGLElBQUFBLE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDQUksSUFBQUEsYUFBYSxDQUFDO0FBQUVILE1BQUFBLEdBQUcsRUFBSEEsR0FBRjtBQUFPQyxNQUFBQSxLQUFLLEVBQUxBO0FBQVAsS0FBRCxDQUFiO0FBQ0QsR0FIRDs7QUFLQSxNQUFNSSxhQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCTixJQUFBQSxPQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0FJLElBQUFBLGFBQWEsQ0FBQztBQUFFSCxNQUFBQSxHQUFHLEVBQUUsSUFBUDtBQUFhQyxNQUFBQSxLQUFLLEVBQUU7QUFBcEIsS0FBRCxDQUFiO0FBQ0QsR0FIRCxDQVp5QixDQWlCekI7OztBQUNBLE1BQU1LLFFBQVEsR0FBRyxDQUFBVCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLDBCQUFBQSxJQUFJLENBQUVVLElBQU4sOEVBQVlDLEtBQVosc0VBQW1CQyxJQUFuQixLQUEyQixNQUE1QztBQUNBLE1BQU1D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dUJBREYsZUFFRTtBQUNFLHlCQUFTLEVBQUMsTUFEWjtBQUVFLHFCQUFLLEVBQUU7QUFBRUssa0JBQUFBLGVBQWUsZ0JBQVNMLFNBQVQ7QUFBakI7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBTUU7QUFBSyx5QkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXBGRixlQThGRTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLG1DQUNFO0FBQUcsa0JBQUksRUFBQyxZQUFSO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLEtBQWY7QUFBcUIsbUJBQUcsRUFBQyx5QkFBekI7QUFBbUQsbUJBQUcsRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBOUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUF5R0UsOERBQUMsb0RBQUQ7QUFDRSxVQUFJLEVBQUViLElBRFI7QUFFRSxrQkFBWSxFQUFFO0FBQUEsZUFBTU8sYUFBWSxFQUFsQjtBQUFBLE9BRmhCO0FBR0UsU0FBRyxFQUFFSCxVQUFVLENBQUNGLEdBSGxCO0FBSUUsV0FBSyxFQUFFRSxVQUFVLENBQUNEO0FBSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrSEQsQ0F6SUQ7O0dBQU1MOztLQUFBQTtBQTJJTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhvbWVNb2RhbCB9IGZyb20gXCIuL0NvbnRlbnRNb2RhbFwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxWYWx1ZSwgc2V0TW9kYWxWYWx1ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbWc6IG51bGwsXHJcbiAgICB0aXRsZTogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25PcGVuTW9kYWwgPSAoaW1nLCB0aXRsZSkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICAgIHNldE1vZGFsVmFsdWUoeyBpbWcsIHRpdGxlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgc2V0TW9kYWxWYWx1ZSh7IGltZzogbnVsbCwgdGl0bGU6IFwiXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gQ2hlY2sgaWYgZGF0YSBpcyBhdmFpbGFibGUgYmVmb3JlIGFjY2Vzc2luZyBpdHMgcHJvcGVydGllc1xyXG4gIGNvbnN0IHVzZXJOYW1lID0gZGF0YT8udXNlcj8uYWJvdXQ/Lm5hbWUgfHwgXCJVc2VyXCI7XHJcbiAgY29uc3Qgc3ViVGl0bGUgPSBkYXRhPy51c2VyPy5hYm91dD8uc3ViVGl0bGUgfHwgXCJTdWJ0aXRsZVwiO1xyXG4gIGNvbnN0IGF2YXRhclVybCA9IGRhdGE/LnVzZXI/LmFib3V0Py5hdmF0YXI/LnVybCB8fCBcIi9kZWZhdWx0LWF2YXRhci5qcGdcIjtcclxuICBjb25zdCBleHBZZWFycyA9IGRhdGE/LnVzZXI/LmFib3V0Py5leHBfeWVhciB8fCAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3NlY3Rpb25cIiBpZD1cImhvbWVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX2hlcm9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlck5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqb2JcIj57c3ViVGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuTW9kYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvaW1nL3NlcnZpY2UvMS5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNyZWF0aXZlIERlc2lnbmVyIGJhc2VkIGluIEphcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9XCIvaW1nL3NlcnZpY2UvMS5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+V2ViIERldmVsb3BtZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3N2Zy9yaWdodC1hcnJvdy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuTW9kYWwoXCIvaW1nL3NlcnZpY2UvMi5qcGdcIiwgXCJEaWdpdGFsIE1hcmtldGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9XCIvaW1nL3NlcnZpY2UvMi5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGlnaXRhbCBNYXJrZXRpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5Nb2RhbChcIi9pbWcvc2VydmljZS8xLmpwZ1wiLCBcIkdyYXBoaWMgRGVzaWduXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZVwiIHNyYz1cIi9pbWcvc2VydmljZS8zLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5HcmFwaGljIERlc2lnbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3J0X2luZm9cIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzPntleHBZZWFyc308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFllYXJzIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFeHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz4zSys8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEhhcHB5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDdXN0b21lcnNcclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhclVybH0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpblwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2F2YXRhclVybH0pYCB9fVxyXG4gICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3duIGFuY2hvclwiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjcG9ydGZvbGlvXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInN2Z1wiIHNyYz1cIi9pbWcvc3ZnL2Rvd24tYXJyb3cuc3ZnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8SG9tZU1vZGFsXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlTW9kYWw9eygpID0+IG9uQ2xvc2VNb2RhbCgpfVxyXG4gICAgICAgIGltZz17bW9kYWxWYWx1ZS5pbWd9XHJcbiAgICAgICAgdGl0bGU9e21vZGFsVmFsdWUudGl0bGV9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSG9tZU1vZGFsIiwiSG9tZSIsImRhdGEiLCJvcGVuIiwic2V0T3BlbiIsImltZyIsInRpdGxlIiwibW9kYWxWYWx1ZSIsInNldE1vZGFsVmFsdWUiLCJvbk9wZW5Nb2RhbCIsIm9uQ2xvc2VNb2RhbCIsInVzZXJOYW1lIiwidXNlciIsImFib3V0IiwibmFtZSIsInN1YlRpdGxlIiwiYXZhdGFyVXJsIiwiYXZhdGFyIiwidXJsIiwiZXhwWWVhcnMiLCJleHBfeWVhciIsImJhY2tncm91bmRJbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=