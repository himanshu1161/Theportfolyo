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
    return null;
  }

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
            lineNumber: 36,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            children: "Working Period"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "timeline_list",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
            children: data.user.timeline.map(function (item) {
              return renderTimelineItem(item);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGZhMzBiYWU1NmRmMDFmYmVlMzguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFEO0FBQUEsc0JBQ3pCO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFHRSx5QkFBa0IsS0FIcEI7QUFJRSxnQ0FBbUJBLElBQUksQ0FBQ0MsUUFBTCxHQUFnQixHQUFuQyxNQUpGLENBSTZDO0FBSjdDO0FBQUEsNEJBTUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNFO0FBQUEsbUJBQ0dILGdEQUFNLENBQUMsSUFBSUksSUFBSixDQUFTRixJQUFJLENBQUNHLFNBQWQsQ0FBRCxFQUEyQixXQUEzQixDQURULFFBQ29ELEdBRHBELEVBRUdMLGdEQUFNLENBQUMsSUFBSUksSUFBSixDQUFTRixJQUFJLENBQUNJLE9BQWQsQ0FBRCxFQUF5QixXQUF6QixDQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQVlFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRTtBQUFBLGtCQUFPSixJQUFJLENBQUNLO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixlQWVFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRTtBQUFBLGtCQUFPTCxJQUFJLENBQUNNO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRjtBQUFBLEtBQ09OLElBQUksQ0FBQ08sR0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHlCO0FBQUEsQ0FBM0I7O0FBc0JBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQzdCLE1BQUksQ0FBQ0EsSUFBRCxJQUFTLENBQUNBLElBQUksQ0FBQ0MsSUFBZixJQUF1QixDQUFDRCxJQUFJLENBQUNDLElBQUwsQ0FBVUMsUUFBdEMsRUFBZ0Q7QUFDOUMsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBaUMsTUFBRSxFQUFDLFVBQXBDO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxvQkFBZjtBQUFBLGtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0U7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxpQ0FDRTtBQUFBLHNCQUNHRixJQUFJLENBQUNDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBQ1osSUFBRDtBQUFBLHFCQUFVRCxrQkFBa0IsQ0FBQ0MsSUFBRCxDQUE1QjtBQUFBLGFBQXZCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQXRCRDs7S0FBTVE7QUF3Qk4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmNvbnN0IHJlbmRlclRpbWVsaW5lSXRlbSA9IChpdGVtKSA9PiAoXHJcbiAgPGxpXHJcbiAgICBrZXk9e2l0ZW0uX2lkfVxyXG4gICAgY2xhc3NOYW1lPVwid293IGZhZGVJblVwXCJcclxuICAgIGRhdGEtd293LWR1cmF0aW9uPVwiLjdzXCJcclxuICAgIGRhdGEtd293LWRlbGF5PXtgJHtpdGVtLnNlcXVlbmNlICogMC4yfXNgfSAvLyBBZGp1c3QgZGVsYXkgYmFzZWQgb24gc2VxdWVuY2VcclxuICA+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge2Zvcm1hdChuZXcgRGF0ZShpdGVtLnN0YXJ0RGF0ZSksIFwiTU1NTSB5eXl5XCIpfSAte1wiIFwifVxyXG4gICAgICAgIHtmb3JtYXQobmV3IERhdGUoaXRlbS5lbmREYXRlKSwgXCJNTU1NIHl5eXlcIil9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgIDxzcGFuPntpdGVtLmpvYlRpdGxlfTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgIDxzcGFuPntpdGVtLmpvYkxvY2F0aW9ufTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbGk+XHJcbik7XHJcblxyXG5jb25zdCBUaW1lbGluZSA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGlmICghZGF0YSB8fCAhZGF0YS51c2VyIHx8ICFkYXRhLnVzZXIudGltZWxpbmUpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zZWN0aW9uXCIgaWQ9XCJ0aW1lbGluZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fdGltZWxpbmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX21haW5fdGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+VGltZWxpbmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMz5Xb3JraW5nIFBlcmlvZDwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmVfbGlzdFwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAge2RhdGEudXNlci50aW1lbGluZS5tYXAoKGl0ZW0pID0+IHJlbmRlclRpbWVsaW5lSXRlbShpdGVtKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcm1hdCIsInJlbmRlclRpbWVsaW5lSXRlbSIsIml0ZW0iLCJzZXF1ZW5jZSIsIkRhdGUiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiam9iVGl0bGUiLCJqb2JMb2NhdGlvbiIsIl9pZCIsIlRpbWVsaW5lIiwiZGF0YSIsInVzZXIiLCJ0aW1lbGluZSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=