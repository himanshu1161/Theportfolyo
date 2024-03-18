"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Timeline.js":
/*!************************************!*\
  !*** ./src/components/Timeline.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.mjs");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Assignments\\kura\\src\\components\\Timeline.js",
    _this = undefined;





var renderTimelineItem = function renderTimelineItem(item) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
    className: "wow fadeInUp",
    "data-wow-duration": ".7s",
    "data-wow-delay": "".concat(item.sequence * 0.2, "s") // Adjust delay based on sequence
    ,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "list_inner",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        children: [(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(item.startDate), "MMMM yyyy"), " -", " ", (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(item.endDate), "MMMM yyyy")]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "list_inner",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        children: item.jobTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "list_inner",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        children: item.jobLocation
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, _this)]
  }, item._id, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, _this);
};

var Timeline = function Timeline(_ref) {
  var data = _ref.data;

  if (!data || !data.user || !data.user.timeline) {
    return "Not Available";
  }

  var sortedTimeline = data.user.timeline.sort(function (a, b) {
    return a.sequence - b.sequence;
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "timeline",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "kura_tm_timeline",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "kura_tm_main_title",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            children: "Timeline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            children: "Working Period"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "timeline_list",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
            children: sortedTimeline.map(function (item) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
                children: item.forEducation ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: [(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(item.startDate), "MMMM yyyy"), " -", " ", (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(new Date(item.endDate), "MMMM yyyy")]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: item.jobTitle
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 54,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: item.jobLocation
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 57,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 21
                }, _this) : renderTimelineItem(item)
              }, item._id, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);
};

_c = Timeline;
/* harmony default export */ __webpack_exports__["default"] = (Timeline);

var _c;

$RefreshReg$(_c, "Timeline");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzA4NzE1MmFiMjk4MmEwOTBkNjYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFEO0FBQUEsc0JBQ3pCO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFHRSx5QkFBa0IsS0FIcEI7QUFJRSxnQ0FBbUJBLElBQUksQ0FBQ0MsUUFBTCxHQUFnQixHQUFuQyxNQUpGLENBSTZDO0FBSjdDO0FBQUEsNEJBTUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNFO0FBQUEsbUJBQ0dILGdEQUFNLENBQUMsSUFBSUksSUFBSixDQUFTRixJQUFJLENBQUNHLFNBQWQsQ0FBRCxFQUEyQixXQUEzQixDQURULFFBQ29ELEdBRHBELEVBRUdMLGdEQUFNLENBQUMsSUFBSUksSUFBSixDQUFTRixJQUFJLENBQUNJLE9BQWQsQ0FBRCxFQUF5QixXQUF6QixDQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQVlFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRTtBQUFBLGtCQUFPSixJQUFJLENBQUNLO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixlQWVFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRTtBQUFBLGtCQUFPTCxJQUFJLENBQUNNO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRjtBQUFBLEtBQ09OLElBQUksQ0FBQ08sR0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHlCO0FBQUEsQ0FBM0I7O0FBc0JBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQzdCLE1BQUksQ0FBQ0EsSUFBRCxJQUFTLENBQUNBLElBQUksQ0FBQ0MsSUFBZixJQUF1QixDQUFDRCxJQUFJLENBQUNDLElBQUwsQ0FBVUMsUUFBdEMsRUFBZ0Q7QUFDOUMsV0FBTyxlQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsY0FBYyxHQUFHSCxJQUFJLENBQUNDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkUsSUFBbkIsQ0FBd0IsVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsV0FBVUQsQ0FBQyxDQUFDYixRQUFGLEdBQWFjLENBQUMsQ0FBQ2QsUUFBekI7QUFBQSxHQUF4QixDQUF2QjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQWlDLE1BQUUsRUFBQyxVQUFwQztBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFO0FBQUssbUJBQVMsRUFBQyxlQUFmO0FBQUEsaUNBQ0U7QUFBQSxzQkFDR1csY0FBYyxDQUFDSSxHQUFmLENBQW1CLFVBQUNoQixJQUFEO0FBQUEsa0NBQ2xCLDhEQUFDLHVEQUFEO0FBQUEsMEJBQ0dBLElBQUksQ0FBQ2lCLFlBQUwsZ0JBQ0M7QUFBQSwwQ0FDRTtBQUFLLDZCQUFTLEVBQUMsWUFBZjtBQUFBLDJDQUNFO0FBQUEsaUNBQ0duQixnREFBTSxDQUFDLElBQUlJLElBQUosQ0FBU0YsSUFBSSxDQUFDRyxTQUFkLENBQUQsRUFBMkIsV0FBM0IsQ0FEVCxRQUNvRCxHQURwRCxFQUVHTCxnREFBTSxDQUFDLElBQUlJLElBQUosQ0FBU0YsSUFBSSxDQUFDSSxPQUFkLENBQUQsRUFBeUIsV0FBekIsQ0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBT0U7QUFBSyw2QkFBUyxFQUFDLFlBQWY7QUFBQSwyQ0FDRTtBQUFBLGdDQUFPSixJQUFJLENBQUNLO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBUEYsZUFVRTtBQUFLLDZCQUFTLEVBQUMsWUFBZjtBQUFBLDJDQUNFO0FBQUEsZ0NBQU9MLElBQUksQ0FBQ007QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREQsR0FnQkNQLGtCQUFrQixDQUFDQyxJQUFEO0FBakJ0QixpQkFBcUJBLElBQUksQ0FBQ08sR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEa0I7QUFBQSxhQUFuQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQ0QsQ0E3Q0Q7O0tBQU1DO0FBK0NOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1RpbWVsaW5lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5jb25zdCByZW5kZXJUaW1lbGluZUl0ZW0gPSAoaXRlbSkgPT4gKFxyXG4gIDxsaVxyXG4gICAga2V5PXtpdGVtLl9pZH1cclxuICAgIGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcFwiXHJcbiAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiXHJcbiAgICBkYXRhLXdvdy1kZWxheT17YCR7aXRlbS5zZXF1ZW5jZSAqIDAuMn1zYH0gLy8gQWRqdXN0IGRlbGF5IGJhc2VkIG9uIHNlcXVlbmNlXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIHtmb3JtYXQobmV3IERhdGUoaXRlbS5zdGFydERhdGUpLCBcIk1NTU0geXl5eVwiKX0gLXtcIiBcIn1cclxuICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKGl0ZW0uZW5kRGF0ZSksIFwiTU1NTSB5eXl5XCIpfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICA8c3Bhbj57aXRlbS5qb2JUaXRsZX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICA8c3Bhbj57aXRlbS5qb2JMb2NhdGlvbn08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2xpPlxyXG4pO1xyXG5cclxuY29uc3QgVGltZWxpbmUgPSAoeyBkYXRhIH0pID0+IHtcclxuICBpZiAoIWRhdGEgfHwgIWRhdGEudXNlciB8fCAhZGF0YS51c2VyLnRpbWVsaW5lKSB7XHJcbiAgICByZXR1cm4gXCJOb3QgQXZhaWxhYmxlXCI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzb3J0ZWRUaW1lbGluZSA9IGRhdGEudXNlci50aW1lbGluZS5zb3J0KChhLCBiKSA9PiBhLnNlcXVlbmNlIC0gYi5zZXF1ZW5jZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2VjdGlvblwiIGlkPVwidGltZWxpbmVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3RpbWVsaW5lXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9tYWluX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlRpbWVsaW5lPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDM+V29ya2luZyBQZXJpb2Q8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lX2xpc3RcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtzb3J0ZWRUaW1lbGluZS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uZm9yRWR1Y2F0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKGl0ZW0uc3RhcnREYXRlKSwgXCJNTU1NIHl5eXlcIil9IC17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdChuZXcgRGF0ZShpdGVtLmVuZERhdGUpLCBcIk1NTU0geXl5eVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uam9iVGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uam9iTG9jYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUaW1lbGluZUl0ZW0oaXRlbSlcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcm1hdCIsInJlbmRlclRpbWVsaW5lSXRlbSIsIml0ZW0iLCJzZXF1ZW5jZSIsIkRhdGUiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiam9iVGl0bGUiLCJqb2JMb2NhdGlvbiIsIl9pZCIsIlRpbWVsaW5lIiwiZGF0YSIsInVzZXIiLCJ0aW1lbGluZSIsInNvcnRlZFRpbWVsaW5lIiwic29ydCIsImEiLCJiIiwibWFwIiwiZm9yRWR1Y2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==