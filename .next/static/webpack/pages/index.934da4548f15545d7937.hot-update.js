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
  } // Filter and sort enabled skills


  var enabledSkills = data.user.skills.filter(function (skill) {
    return skill.enabled;
  }) // Filter enabled skills
  .sort(function (a, b) {
    return a.sequence - b.sequence;
  }); // Sort by sequence

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
                lineNumber: 38,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                children: "Programming Skills"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "text wow fadeInUp",
              "data-wow-duration": ".7s",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                children: data === null || data === void 0 ? void 0 : (_data$user = data.user) === null || _data$user === void 0 ? void 0 : (_data$user$about = _data$user.about) === null || _data$user$about === void 0 ? void 0 : _data$user$about.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "dodo_progress wow fadeInUp",
              "data-wow-duration": ".7s",
              "data-wow-delay": ".2s",
              children: enabledSkills.map(function (skill, index) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "progress_inner",
                  "data-value": skill.percentage,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                      className: "label",
                      children: skill.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                      className: "number",
                      children: skill.percentage
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 49,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
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
                        lineNumber: 53,
                        columnNumber: 25
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 21
                  }, _this)]
                }, index, true, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 19
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ParallaxVideo, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "my_image jarallax",
              "data-speed": "0",
              style: {
                backgroundImage: "url(/img/portfolio/2.jpg)"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTM0ZGE0NTQ4ZjE1NTQ1ZDc5MzcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1JLGFBQWEsR0FBR0osbURBQU87QUFBQSxTQUFDLHlLQUFEO0FBQUEsR0FBdUI7QUFDbERLLEVBQUFBLEdBQUcsRUFBRSxLQUQ2QztBQUFBO0FBQUE7QUFBQSxrQ0FBZixnREFBZTtBQUFBO0FBQUEscURBQWYsWUFBZTtBQUFBO0FBQUEsQ0FBdkIsQ0FBN0I7TUFBTUQ7O0FBSU4sSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBYztBQUFBOztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUMzQkwsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QkwsTUFBQUEsNkRBQW1CO0FBQ3BCLEtBRkQ7O0FBSUFNLElBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NGLFlBQWxDO0FBRUEsV0FBTyxZQUFNO0FBQ1hDLE1BQUFBLE1BQU0sQ0FBQ0UsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNILFlBQXJDO0FBQ0QsS0FGRDtBQUdELEdBVlEsRUFVTixFQVZNLENBQVQ7O0FBWUEsTUFBSSxDQUFDRCxJQUFELElBQVMsQ0FBQ0EsSUFBSSxDQUFDSyxJQUFmLElBQXVCLENBQUNMLElBQUksQ0FBQ0ssSUFBTCxDQUFVQyxNQUFsQyxJQUE0Q04sSUFBSSxDQUFDSyxJQUFMLENBQVVDLE1BQVYsQ0FBaUJDLE1BQWpCLEtBQTRCLENBQTVFLEVBQStFO0FBQzdFLFdBQU8sZUFBUDtBQUNELEdBZjBCLENBaUIzQjs7O0FBQ0EsTUFBTUMsYUFBYSxHQUFHUixJQUFJLENBQUNLLElBQUwsQ0FBVUMsTUFBVixDQUNuQkcsTUFEbUIsQ0FDWixVQUFBQyxLQUFLO0FBQUEs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OztNQUFBQTtBQThETiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ta2lsbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGFjdGl2ZVNraWxsUHJvZ3Jlc3MgfSBmcm9tIFwiLi4vdXRpbGl0c1wiO1xyXG5cclxuY29uc3QgUGFyYWxsYXhWaWRlbyA9IGR5bmFtaWMoaW1wb3J0KFwiLi9QYXJhbGxheFwiKSwge1xyXG4gIHNzcjogZmFsc2UsXHJcbn0pO1xyXG5cclxuY29uc3QgU2tpbGxzID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgYWN0aXZlU2tpbGxQcm9ncmVzcygpO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKCFkYXRhIHx8ICFkYXRhLnVzZXIgfHwgIWRhdGEudXNlci5za2lsbHMgfHwgZGF0YS51c2VyLnNraWxscy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiBcIk5vdCBhdmFpbGFibGVcIjtcclxuICB9XHJcblxyXG4gIC8vIEZpbHRlciBhbmQgc29ydCBlbmFibGVkIHNraWxsc1xyXG4gIGNvbnN0IGVuYWJsZWRTa2lsbHMgPSBkYXRhLnVzZXIuc2tpbGxzXHJcbiAgICAuZmlsdGVyKHNraWxsID0+IHNraWxsLmVuYWJsZWQpIC8vIEZpbHRlciBlbmFibGVkIHNraWxsc1xyXG4gICAgLnNvcnQoKGEsIGIpID0+IGEuc2VxdWVuY2UgLSBiLnNlcXVlbmNlKTsgLy8gU29ydCBieSBzZXF1ZW5jZVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3NlY3Rpb25cIiBpZD1cInNraWxsc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2tpbGxzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzX2lubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9tYWluX3RpdGxlIGxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Ta2lsbHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aDM+UHJvZ3JhbW1pbmcgU2tpbGxzPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIj5cclxuICAgICAgICAgICAgICAgIDxwPntkYXRhPy51c2VyPy5hYm91dD8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9kb19wcm9ncmVzcyB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiIGRhdGEtd293LWRlbGF5PVwiLjJzXCI+XHJcbiAgICAgICAgICAgICAgICB7ZW5hYmxlZFNraWxscy5tYXAoKHNraWxsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzX2lubmVyXCIga2V5PXtpbmRleH0gZGF0YS12YWx1ZT17c2tpbGwucGVyY2VudGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPntza2lsbC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlclwiPntza2lsbC5wZXJjZW50YWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcl9pblwiIHN0eWxlPXt7IHdpZHRoOiBgJHtza2lsbC5wZXJjZW50YWdlfSVgIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPFBhcmFsbGF4VmlkZW8gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15X2ltYWdlIGphcmFsbGF4XCIgZGF0YS1zcGVlZD1cIjBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9pbWcvcG9ydGZvbGlvLzIuanBnKVwiIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XHJcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJhY3RpdmVTa2lsbFByb2dyZXNzIiwiUGFyYWxsYXhWaWRlbyIsInNzciIsIlNraWxscyIsImRhdGEiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVzZXIiLCJza2lsbHMiLCJsZW5ndGgiLCJlbmFibGVkU2tpbGxzIiwiZmlsdGVyIiwic2tpbGwiLCJlbmFibGVkIiwic29ydCIsImEiLCJiIiwic2VxdWVuY2UiLCJhYm91dCIsImRlc2NyaXB0aW9uIiwibWFwIiwiaW5kZXgiLCJwZXJjZW50YWdlIiwibmFtZSIsIndpZHRoIiwiYmFja2dyb3VuZEltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==