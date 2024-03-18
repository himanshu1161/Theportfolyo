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
  } // Sort timeline items based on sequence


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
            lineNumber: 39,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            children: "Working Period"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
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
                      lineNumber: 49,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: item.jobTitle
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 55,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: item.jobLocation
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 21
                }, _this) : renderTimelineItem(item)
              }, item._id, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 17
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWQwZDRmZjk3Njk0MjUyNmZiODYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsSUFBTUUsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxJQUFEO0FBQUEsc0JBQ3pCO0FBRUUsYUFBUyxFQUFDLGNBRlo7QUFHRSx5QkFBa0IsS0FIcEI7QUFJRSxnQ0FBbUJBLElBQUksQ0FBQ0MsUUFBTCxHQUFnQixHQUFuQyxNQUpGLENBSTZDO0FBSjdDO0FBQUEsNEJBTUU7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBLDZCQUNFO0FBQUEsbUJBQ0dILGdEQUFNLENBQUMsSUFBSUksSUFBSixDQUFTRixJQUFJLENBQUNHLFNBQWQsQ0FBRCxFQUEyQixXQUEzQixDQURULFFBQ29ELEdBRHBELEVBRUdMLGdEQUFNLENBQUMsSUFBSUksSUFBSixDQUFTRixJQUFJLENBQUNJLE9BQWQsQ0FBRCxFQUF5QixXQUF6QixDQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQVlFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRTtBQUFBLGtCQUFPSixJQUFJLENBQUNLO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFaRixlQWVFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRTtBQUFBLGtCQUFPTCxJQUFJLENBQUNNO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRjtBQUFBLEtBQ09OLElBQUksQ0FBQ08sR0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRHlCO0FBQUEsQ0FBM0I7O0FBc0JBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQzdCLE1BQUksQ0FBQ0EsSUFBRCxJQUFTLENBQUNBLElBQUksQ0FBQ0MsSUFBZixJQUF1QixDQUFDRCxJQUFJLENBQUNDLElBQUwsQ0FBVUMsUUFBdEMsRUFBZ0Q7QUFDOUMsV0FBTyxlQUFQO0FBQ0QsR0FINEIsQ0FLN0I7OztBQUNBLE1BQU1DLGNBQWMsR0FBR0gsSUFBSSxDQUFDQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJFLElBQW5CLENBQXdCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFdBQVVELENBQUMsQ0FBQ2IsUUFBRixHQUFhYyxDQUFDLENBQUNkLFFBQXpCO0FBQUEsR0FBeEIsQ0FBdkI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFpQyxNQUFFLEVBQUMsVUFBcEM7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLG9CQUFmO0FBQUEsa0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFLRTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGlDQUNFO0FBQUEsc0JBQ0dXLGNBQWMsQ0FBQ0ksR0FBZixDQUFtQixVQUFDaEIsSUFBRDtBQUFBLGtDQUNsQiw4REFBQyx1REFBRDtBQUFBLDBCQUNHQSxJQUFJLENBQUNpQixZQUFMLGdCQUNDO0FBQUEsMENBQ0U7QUFBSyw2QkFBUyxFQUFDLFlBQWY7QUFBQSwyQ0FDRTtBQUFBLGlDQUNHbkIsZ0RBQU0sQ0FBQyxJQUFJSSxJQUFKLENBQVNGLElBQUksQ0FBQ0csU0FBZCxDQUFELEVBQTJCLFdBQTNCLENBRFQsUUFDb0QsR0FEcEQsRUFFR0wsZ0RBQU0sQ0FBQyxJQUFJSSxJQUFKLENBQVNGLElBQUksQ0FBQ0ksT0FBZCxDQUFELEVBQXlCLFdBQXpCLENBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixlQU9FO0FBQUssNkJBQVMsRUFBQyxZQUFmO0FBQUEsMkNBQ0U7QUFBQSxnQ0FBT0osSUFBSSxDQUFDSztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBGLGVBVUU7QUFBSyw2QkFBUyxFQUFDLFlBQWY7QUFBQSwyQ0FDRTtBQUFBLGdDQUFPTCxJQUFJLENBQUNNO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURELEdBZ0JDUCxrQkFBa0IsQ0FBQ0MsSUFBRDtBQWpCdEIsaUJBQXFCQSxJQUFJLENBQUNPLEdBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGtCO0FBQUEsYUFBbkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0NELENBOUNEOztLQUFNQztBQWdETiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuY29uc3QgcmVuZGVyVGltZWxpbmVJdGVtID0gKGl0ZW0pID0+IChcclxuICA8bGlcclxuICAgIGtleT17aXRlbS5faWR9XHJcbiAgICBjbGFzc05hbWU9XCJ3b3cgZmFkZUluVXBcIlxyXG4gICAgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIlxyXG4gICAgZGF0YS13b3ctZGVsYXk9e2Ake2l0ZW0uc2VxdWVuY2UgKiAwLjJ9c2B9IC8vIEFkanVzdCBkZWxheSBiYXNlZCBvbiBzZXF1ZW5jZVxyXG4gID5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKGl0ZW0uc3RhcnREYXRlKSwgXCJNTU1NIHl5eXlcIil9IC17XCIgXCJ9XHJcbiAgICAgICAge2Zvcm1hdChuZXcgRGF0ZShpdGVtLmVuZERhdGUpLCBcIk1NTU0geXl5eVwiKX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgPHNwYW4+e2l0ZW0uam9iVGl0bGV9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgPHNwYW4+e2l0ZW0uam9iTG9jYXRpb259PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9saT5cclxuKTtcclxuXHJcbmNvbnN0IFRpbWVsaW5lID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgaWYgKCFkYXRhIHx8ICFkYXRhLnVzZXIgfHwgIWRhdGEudXNlci50aW1lbGluZSkge1xyXG4gICAgcmV0dXJuIFwiTm90IEF2YWlsYWJsZVwiO1xyXG4gIH1cclxuXHJcbiAgLy8gU29ydCB0aW1lbGluZSBpdGVtcyBiYXNlZCBvbiBzZXF1ZW5jZVxyXG4gIGNvbnN0IHNvcnRlZFRpbWVsaW5lID0gZGF0YS51c2VyLnRpbWVsaW5lLnNvcnQoKGEsIGIpID0+IGEuc2VxdWVuY2UgLSBiLnNlcXVlbmNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zZWN0aW9uXCIgaWQ9XCJ0aW1lbGluZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fdGltZWxpbmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX21haW5fdGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+VGltZWxpbmU8L3NwYW4+XHJcbiAgICAgICAgICAgIDxoMz5Xb3JraW5nIFBlcmlvZDwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZWxpbmVfbGlzdFwiPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAge3NvcnRlZFRpbWVsaW5lLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aXRlbS5faWR9PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5mb3JFZHVjYXRpb24gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXQobmV3IERhdGUoaXRlbS5zdGFydERhdGUpLCBcIk1NTU0geXl5eVwiKX0gLXtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKGl0ZW0uZW5kRGF0ZSksIFwiTU1NTSB5eXl5XCIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5qb2JUaXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5qb2JMb2NhdGlvbn08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclRpbWVsaW5lSXRlbShpdGVtKVxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaW1lbGluZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiZm9ybWF0IiwicmVuZGVyVGltZWxpbmVJdGVtIiwiaXRlbSIsInNlcXVlbmNlIiwiRGF0ZSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJqb2JUaXRsZSIsImpvYkxvY2F0aW9uIiwiX2lkIiwiVGltZWxpbmUiLCJkYXRhIiwidXNlciIsInRpbWVsaW5lIiwic29ydGVkVGltZWxpbmUiLCJzb3J0IiwiYSIsImIiLCJtYXAiLCJmb3JFZHVjYXRpb24iXSwic291cmNlUm9vdCI6IiJ9