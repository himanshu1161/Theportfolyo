"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Skills.js":
/*!**********************************!*\
  !*** ./src/components/Skills.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilits */ "./src/utilits.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Assignments\\kura\\src\\components\\Skills.js",
    _this = undefined,
    _s = $RefreshSig$();





var ParallaxVideo = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ "src_components_Parallax_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Parallax */ "./src/components/Parallax.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Parallax */ "./src/components/Parallax.js")];
    },
    modules: ["..\\src\\components\\Skills.js -> " + "./Parallax"]
  }
});
_c2 = ParallaxVideo;

var Skills = function Skills(_ref) {
  _s();

  var _data$user, _data$user$about;

  var data = _ref.data;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleScroll = function handleScroll() {
      (0,_utilits__WEBPACK_IMPORTED_MODULE_2__.activeSkillProgress)();
    };

    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!data || !data.user || !data.user.skills || data.user.skills.length === 0) {
    return "Not available";
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "skills",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "kura_tm_skills",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "skills_inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "left",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "kura_tm_main_title light",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                children: "Skills"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                children: "Programming Skills"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "text wow fadeInUp",
              "data-wow-duration": ".7s",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                children: data === null || data === void 0 ? void 0 : (_data$user = data.user) === null || _data$user === void 0 ? void 0 : (_data$user$about = _data$user.about) === null || _data$user$about === void 0 ? void 0 : _data$user$about.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "dodo_progress wow fadeInUp",
              "data-wow-duration": ".7s",
              "data-wow-delay": ".2s",
              children: data.user.skills.slice(0, 3).map(function (skill, index) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "progress_inner",
                  "data-value": skill.percentage,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                      className: "label",
                      children: skill.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                      className: "number",
                      children: skill.percentage
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 44,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "background",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "bar",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                        className: "bar_in",
                        style: {
                          width: "".concat(skill.percentage, "%")
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 48,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 47,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 21
                  }, _this)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ParallaxVideo, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "my_image jarallax",
              "data-speed": "0",
              style: {
                backgroundImage: "url(/img/portfolio/2.jpg)"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};

_s(Skills, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c3 = Skills;
/* harmony default export */ __webpack_exports__["default"] = (Skills);

var _c, _c2, _c3;

$RefreshReg$(_c, "ParallaxVideo$dynamic");
$RefreshReg$(_c2, "ParallaxVideo");
$RefreshReg$(_c3, "Skills");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWFmZjFhNmZiMmVlZTgzYjI5MzQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1JLGFBQWEsR0FBR0osbURBQU87QUFBQSxTQUFDLHlLQUFEO0FBQUEsR0FBdUI7QUFDbERLLEVBQUFBLEdBQUcsRUFBRSxLQUQ2QztBQUFBO0FBQUE7QUFBQSxrQ0FBZixnREFBZTtBQUFBO0FBQUEscURBQWYsWUFBZTtBQUFBO0FBQUEsQ0FBdkIsQ0FBN0I7TUFBTUQ7O0FBSU4sSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBYztBQUFBOztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUMzQkwsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkwsTUFBQUEsNkRBQW1CO0FBQ3BCLEtBRkQ7O0FBSUFNLElBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NGLFlBQWxDO0FBRUEsV0FBTyxZQUFNO0FBQ1hDLE1BQUFBLE1BQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNILFlBQXJDO0FBQ0QsS0FGRDtBQUdELEdBVlEsRUFVTixFQVZNLENBQVQ7O0FBWUEsTUFBSSxDQUFDRCxJQUFELElBQVMsQ0FBQ0EsSUFBSSxDQUFDSyxJQUFmLElBQXVCLENBQUNMLElBQUksQ0FBQ0ssSUFBTCxDQUFVQyxNQUFsQyxJQUE0Q04sSUFBSSxDQUFDSyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLE1BQWpCLEtBQTRCLENBQTVFLEVBQStFO0FBQzdFLFdBQU8sZUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQWlDLE1BQUUsRUFBQyxRQUFwQztBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsY0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxNQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLDBCQUFmO0FBQUEsc0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFLRTtBQUFLLHVCQUFTLEVBQUMsbUJBQWY7QUFBbUMsbUNBQWtCLEtBQXJEO0FBQUEscUNBQ0U7QUFBQSwwQkFBSVAsSUFBSixhQUFJQSxJQUFKLHFDQUFJQSxJQUFJLENBQUVLLElBQVYsbUVBQUksV0FBWUcsS0FBaEIscURBQUksaUJBQW1CQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRixlQVFFO0FBQUssdUJBQVMsRUFBQyw0QkFBZjtBQUE0QyxtQ0FBa0IsS0FBOUQ7QUFBb0UsZ0NBQWUsS0FBbkY7QUFBQSx3QkFDR1QsSUFBSSxDQUFDSyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJJLEtBQWpCLENBQXVCLENBQXZCLEVBQXlCLENBQXpCLEVBQTRCQyxHQUE1QixDQUFnQyxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxvQ0FDL0I7QUFBSywyQkFBUyxFQUFDLGdCQUFmO0FBQTRDLGdDQUFZRCxLQUFLLENBQUNFLFVBQTlEO0FBQUEsMENBQ0U7QUFBQSw0Q0FDRTtBQUFNLCtCQUFTLEVBQUMsT0FBaEI7QUFBQSxnQ0FBeUJGLEtBQUssQ0FBQ0c7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixlQUVFO0FBQU0sK0JBQVMsRUFBQyxRQUFoQjtBQUFBLGdDQUEwQkgsS0FBSyxDQUFDRTtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQUtFO0FBQUssNkJBQVMsRUFBQyxZQUFmO0FBQUEsMkNBQ0U7QUFBSywrQkFBUyxFQUFDLEtBQWY7QUFBQSw2Q0FDRTtBQUFLLGlDQUFTLEVBQUMsUUFBZjtBQUF3Qiw2QkFBSyxFQUFFO0FBQUVFLDBCQUFBQSxLQUFLLFlBQUtKLEtBQUssQ0FBQ0UsVUFBWDtBQUFQO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMRjtBQUFBLG1CQUFxQ0QsS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEK0I7QUFBQSxlQUFoQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBeUJFO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsb0NBQ0UsOERBQUMsYUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSyx1QkFBUyxFQUFDLG1CQUFmO0FBQW1DLDRCQUFXLEdBQTlDO0FBQWtELG1CQUFLLEVBQUU7QUFBRUksZ0JBQUFBLGVBQWUsRUFBRTtBQUFuQjtBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQ0QsQ0F2REQ7O0dBQU1sQjs7TUFBQUE7QUF5RE4sK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhY3RpdmVTa2lsbFByb2dyZXNzIH0gZnJvbSBcIi4uL3V0aWxpdHNcIjtcclxuXHJcbmNvbnN0IFBhcmFsbGF4VmlkZW8gPSBkeW5hbWljKGltcG9ydChcIi4vUGFyYWxsYXhcIiksIHtcclxuICBzc3I6IGZhbHNlLFxyXG59KTtcclxuXHJcbmNvbnN0IFNraWxscyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGFjdGl2ZVNraWxsUHJvZ3Jlc3MoKTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmICghZGF0YSB8fCAhZGF0YS51c2VyIHx8ICFkYXRhLnVzZXIuc2tpbGxzIHx8IGRhdGEudXNlci5za2lsbHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gXCJOb3QgYXZhaWxhYmxlXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3NlY3Rpb25cIiBpZD1cInNraWxsc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2tpbGxzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzX2lubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9tYWluX3RpdGxlIGxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Ta2lsbHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aDM+UHJvZ3JhbW1pbmcgU2tpbGxzPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIj5cclxuICAgICAgICAgICAgICAgIDxwPntkYXRhPy51c2VyPy5hYm91dD8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9kb19wcm9ncmVzcyB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiIGRhdGEtd293LWRlbGF5PVwiLjJzXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS51c2VyLnNraWxscy5zbGljZSgwLDMpLm1hcCgoc2tpbGwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NfaW5uZXJcIiBrZXk9e2luZGV4fSBkYXRhLXZhbHVlPXtza2lsbC5wZXJjZW50YWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsXCI+e3NraWxsLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibnVtYmVyXCI+e3NraWxsLnBlcmNlbnRhZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyX2luXCIgc3R5bGU9e3sgd2lkdGg6IGAke3NraWxsLnBlcmNlbnRhZ2V9JWAgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICA8UGFyYWxsYXhWaWRlbyAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlfaW1hZ2UgamFyYWxsYXhcIiBkYXRhLXNwZWVkPVwiMFwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2ltZy9wb3J0Zm9saW8vMi5qcGcpXCIgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNraWxscztcclxuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJSZWFjdCIsInVzZUVmZmVjdCIsImFjdGl2ZVNraWxsUHJvZ3Jlc3MiLCJQYXJhbGxheFZpZGVvIiwic3NyIiwiU2tpbGxzIiwiZGF0YSIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXNlciIsInNraWxscyIsImxlbmd0aCIsImFib3V0IiwiZGVzY3JpcHRpb24iLCJzbGljZSIsIm1hcCIsInNraWxsIiwiaW5kZXgiLCJwZXJjZW50YWdlIiwibmFtZSIsIndpZHRoIiwiYmFja2dyb3VuZEltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==