(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./loadable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const isServerSide = true;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({
      error,
      isLoading,
      pastDelay
    }) => {
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react.default.createElement("p", null, error.message, /*#__PURE__*/_react.default.createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  const suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Audio */ "./src/components/Audio.js");
/* harmony import */ var _src_components_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Contact */ "./src/components/Contact.js");
/* harmony import */ var _src_components_Cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Cursor */ "./src/components/Cursor.js");
/* harmony import */ var _src_components_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Home */ "./src/components/Home.js");
/* harmony import */ var _src_components_News__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/News */ "./src/components/News.js");
/* harmony import */ var _src_components_Portfolio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/Portfolio */ "./src/components/Portfolio.js");
/* harmony import */ var _src_components_Price__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/Price */ "./src/components/Price.js");
/* harmony import */ var _src_components_Skills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/Skills */ "./src/components/Skills.js");
/* harmony import */ var _src_components_Timeline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/Timeline */ "./src/components/Timeline.js");
/* harmony import */ var _src_layout_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/layout/Footer */ "./src/layout/Footer.js");
/* harmony import */ var _src_layout_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/layout/Header */ "./src/layout/Header.js");
/* harmony import */ var _src_layout_Settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/layout/Settings */ "./src/layout/Settings.js");
/* harmony import */ var _src_PageHead__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/PageHead */ "./src/PageHead.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_News__WEBPACK_IMPORTED_MODULE_6__, _src_components_Portfolio__WEBPACK_IMPORTED_MODULE_7__]);
([_src_components_News__WEBPACK_IMPORTED_MODULE_6__, _src_components_Portfolio__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
var _jsxFileName = "D:\\Assignments\\kura\\pages\\index.js";


















const Index = ({
  data
}) => {
  const {
    0: portfolioData,
    1: setPortfolioData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_src_PageHead__WEBPACK_IMPORTED_MODULE_14__.default, {
      page: "Home",
      data: portfolioData
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
      id: "opened",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)("div", {
        className: "kura_tm_all_wrap",
        "data-color": "orange",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_src_layout_Settings__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_src_layout_Header__WEBPACK_IMPORTED_MODULE_12__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), portfolioData && portfolioData.user && portfolioData.user.about && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_src_components_Home__WEBPACK_IMPORTED_MODULE_5__.default, {
          data: portfolioData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 79
        }, undefined), portfolioData && portfolioData.user && portfolioData.user.portfolio && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_src_components_Portfolio__WEBPACK_IMPORTED_MODULE_7__.default, {
          data: portfolioData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 83
        }, undefined), portfolioData && portfolioData.user && portfolioData.user.skills && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_src_components_Skills__WEBPACK_IMPORTED_MODULE_9__.default, {
          data: portfolioData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 80
        }, undefined), portfolioData && portfolioData.user && portfolioData.user.timeline && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_src_components_Timeline__WEBPACK_IMPORTED_MODULE_10__.default, {
          data: portfolioData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 82
        }, undefined), portfolioData && portfolioData.user && portfolioData.user.services && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_src_components_Price__WEBPACK_IMPORTED_MODULE_8__.default, {
          data: portfolioData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 82
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_src_components_News__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined), portfolioData && portfolioData.user && portfolioData.user.about && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_src_components_Contact__WEBPACK_IMPORTED_MODULE_3__.default, {
          data: portfolioData
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 79
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_src_layout_Footer__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_src_components_Audio__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(_src_components_Cursor__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

async function getServerSideProps() {
  const userId = "65b3a22c01d900e96c4219ae";
  const apiUrl = `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${userId}`;

  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(apiUrl);
    const data = response.data; // console.log(data,"data ")

    return {
      props: {
        data
      }
    };
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return {
      props: {
        data: null
      }
    };
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);
});

/***/ }),

/***/ "./src/PageHead.js":
/*!*************************!*\
  !*** ./src/PageHead.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Assignments\\kura\\src\\PageHead.js";



const PageHead = ({
  page,
  data
}) => {
  var _data$user, _data$user$about;

  const userName = (data === null || data === void 0 ? void 0 : (_data$user = data.user) === null || _data$user === void 0 ? void 0 : (_data$user$about = _data$user.about) === null || _data$user$about === void 0 ? void 0 : _data$user$about.name) || "User";
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("title", {
      children: [userName, " | ", page]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHead);

/***/ }),

/***/ "./src/components/Audio.js":
/*!*********************************!*\
  !*** ./src/components/Audio.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Assignments\\kura\\src\\components\\Audio.js";



const Audio = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("audio", {
      id: "audio1",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("source", {
        src: "/audio/1.mp3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("audio", {
      id: "audio2",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("source", {
        src: "/audio/2.mp3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Audio);

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Assignments\\kura\\src\\components\\Contact.js";



const Contact = ({
  data
}) => {
  var _data$user, _data$user$about, _data$user2, _data$user2$about, _data$user3;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "contact",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "kura_tm_contact",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "kura_tm_main_title",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            children: "Contact"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            children: "Get in Touch"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 10,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "contact_inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "left wow fadeInUp",
            "data-wow-duration": ".7s",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "text",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: "Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "short",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      id: "Capa_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 512 512",
                      style: {
                        enableBackground: "new 0 0 512 512"
                      },
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M256,0C156.748,0,76,80.748,76,180c0,33.534,9.289,66.26,26.869,94.652l142.885,230.257    c2.737,4.411,7.559,7.091,12.745,7.091c0.04,0,0.079,0,0.119,0c5.231-0.041,10.063-2.804,12.75-7.292L410.611,272.22    C427.221,244.428,436,212.539,436,180C436,80.748,355.252,0,256,0z M384.866,256.818L258.272,468.186l-129.905-209.34    C113.734,235.214,105.8,207.95,105.8,180c0-82.71,67.49-150.2,150.2-150.2S406.1,97.29,406.1,180    C406.1,207.121,398.689,233.688,384.866,256.818z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 39,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 38,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 37,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M256,90c-49.626,0-90,40.374-90,90c0,49.309,39.717,90,90,90c50.903,0,90-41.233,90-90C346,130.374,305.626,90,256,90z     M256,240.2c-33.257,0-60.2-27.033-60.2-60.2c0-33.084,27.116-60.2,60.2-60.2s60.1,27.116,60.1,60.2    C316.1,212.683,289.784,240.2,256,240.2z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 44,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 43,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 42,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 47,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 48,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 49,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 50,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 51,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 52,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 53,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 54,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 56,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 58,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 59,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 61,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 25,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: data === null || data === void 0 ? void 0 : (_data$user = data.user) === null || _data$user === void 0 ? void 0 : (_data$user$about = _data$user.about) === null || _data$user$about === void 0 ? void 0 : _data$user$about.address
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 63,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 24,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 23,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      id: "Capa_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 473.806 473.806",
                      style: {
                        enableBackground: "new 0 0 512 512"
                      },
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M374.456,293.506c-9.7-10.1-21.4-15.5-33.8-15.5c-12.3,0-24.1,5.3-34.2,15.4l-31.6,31.5c-2.6-1.4-5.2-2.7-7.7-4    c-3.6-1.8-7-3.5-9.9-5.3c-29.6-18.8-56.5-43.3-82.3-75c-12.5-15.8-20.9-29.1-27-42.6c8.2-7.5,15.8-15.3,23.2-22.8    c2.8-2.8,5.6-5.7,8.4-8.5c21-21,21-48.2,0-69.2l-27.3-27.3c-3.1-3.1-6.3-6.3-9.3-9.5c-6-6.2-12.3-12.6-18.8-18.6    c-9.7-9.6-21.3-14.7-33.5-14.7s-24,5.1-34,14.7c-0.1,0.1-0.1,0.1-0.2,0.2l-34,34.3c-12.8,12.8-20.1,28.4-21.7,46.5    c-2.4,29.2,6.2,56.4,12.8,74.2c16.2,43.7,40.4,84.2,76.5,127.6c43.8,52.3,96.5,93.6,156.7,122.7c23,10.9,53.7,23.8,88,26    c2.1,0.1,4.3,0.2,6.3,0.2c23.1,0,42.5-8.3,57.7-24.8c0.1-0.2,0.3-0.3,0.4-0.5c5.2-6.3,11.2-12,17.5-18.1c4.3-4.1,8.7-8.4,13-12.9    c9.9-10.3,15.1-22.3,15.1-34.6c0-12.4-5.3-24.3-15.4-34.3L374.456,293.506z M410.256,398.806    C410.156,398.806,410.156,398.906,410.256,398.806c-3.9,4.2-7.9,8-12.2,12.2c-6.5,6.2-13.1,12.7-19.3,20    c-10.1,10.8-22,15.9-37.6,15.9c-1.5,0-3.1,0-4.6-0.1c-29.7-1.9-57.3-13.5-78-23.4c-56.6-27.4-106.3-66.3-147.6-115.6    c-34.1-41.1-56.9-79.1-72-119.9c-9.3-24.9-12.7-44.3-11.2-62.6c1-11.7,5.5-21.4,13.8-29.7l34.1-34.1c4.9-4.6,10.1-7.1,15.2-7.1    c6.3,0,11.4,3.8,14.6,7c0.1,0.1,0.2,0.2,0.3,0.3c6.1,5.7,11.9,11.6,18,17.9c3.1,3.2,6.3,6.4,9.5,9.7l27.3,27.3    c10.6,10.6,10.6,20.4,0,31c-2.9,2.9-5.7,5.8-8.6,8.6c-8.4,8.6-16.4,16.6-25.1,24.4c-0.2,0.2-0.4,0.3-0.5,0.5    c-8.6,8.6-7,17-5.2,22.7c0.1,0.3,0.2,0.6,0.3,0.9c7.1,17.2,17.1,33.4,32.3,52.7l0.1,0.1c27.6,34,56.7,60.5,88.8,80.8    c4.1,2.6,8.3,4.7,12.3,6.7c3.6,1.8,7,3.5,9.9,5.3c0.4,0.2,0.8,0.5,1.2,0.7c3.4,1.7,6.6,2.5,9.9,2.5c8.3,0,13.5-5.2,15.2-6.9    l34.2-34.2c3.4-3.4,8.8-7.5,15.1-7.5c6.2,0,11.3,3.9,14.4,7.3c0.1,0.1,0.1,0.1,0.2,0.2l55.1,55.1    C420.456,377.706,420.456,388.206,410.256,398.806z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 82,
                            columnNumber: 29
                          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M256.056,112.706c26.2,4.4,50,16.8,69,35.8s31.3,42.8,35.8,69c1.1,6.6,6.8,11.2,13.3,11.2c0.8,0,1.5-0.1,2.3-0.2    c7.4-1.2,12.3-8.2,11.1-15.6c-5.4-31.7-20.4-60.6-43.3-83.5s-51.8-37.9-83.5-43.3c-7.4-1.2-14.3,3.7-15.6,11    S248.656,111.506,256.056,112.706z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 83,
                            columnNumber: 29
                          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M473.256,209.006c-8.9-52.2-33.5-99.7-71.3-137.5s-85.3-62.4-137.5-71.3c-7.3-1.3-14.2,3.7-15.5,11    c-1.2,7.4,3.7,14.3,11.1,15.6c46.6,7.9,89.1,30,122.9,63.7c33.8,33.8,55.8,76.3,63.7,122.9c1.1,6.6,6.8,11.2,13.3,11.2    c0.8,0,1.5-0.1,2.3-0.2C469.556,223.306,474.556,216.306,473.256,209.006z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 84,
                            columnNumber: 29
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 81,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 88,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 90,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 91,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 93,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 94,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 96,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 97,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 100,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: data === null || data === void 0 ? void 0 : (_data$user2 = data.user) === null || _data$user2 === void 0 ? void 0 : (_data$user2$about = _data$user2.about) === null || _data$user2$about === void 0 ? void 0 : _data$user2$about.phoneNumber
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      id: "Capa_1",
                      enableBackground: "new 0 0 479.058 479.058",
                      height: "512",
                      viewBox: "0 0 479.058 479.058",
                      width: "512",
                      className: "svg replaced-svg",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m434.146 59.882h-389.234c-24.766 0-44.912 20.146-44.912 44.912v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159l-200.355 173.649-200.356-173.649c1.769-.736 3.704-1.159 5.738-1.159zm0 299.411h-389.234c-8.26 0-14.971-6.71-14.971-14.971v-251.648l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: data === null || data === void 0 ? void 0 : (_data$user3 = data.user) === null || _data$user3 === void 0 ? void 0 : _data$user3.email
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 119,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      id: "Capa_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 479.447 479.447",
                      style: {
                        enableBackground: "new 0 0 512 512"
                      },
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M239.446,0.022c-8.594,0-17.182,0.462-25.727,1.383c-7.832,0.8-15.568,2.112-23.2,3.704    c-1.477,0.309-2.955,0.635-4.432,0.976C141.12,16.323,100.06,39.314,67.831,72.301c-2.997,3.072-5.931,6.235-8.8,9.488    c-87.06,99.948-76.612,251.548,23.337,338.608c95.688,83.349,239.723,77.803,328.719-12.656c3.003-3.072,5.936-6.235,8.8-9.488    c38.421-43.754,59.594-100.003,59.56-158.232C479.447,107.472,371.995,0.021,239.446,0.022z M78.495,84.301    c1.264-1.312,2.576-2.568,3.864-3.84c1.488-1.464,2.968-2.936,4.488-4.352c1.336-1.248,2.712-2.448,4.08-3.664    c1.544-1.368,3.08-2.736,4.664-4.056c1.392-1.176,2.824-2.304,4.248-3.44c1.6-1.28,3.2-2.56,4.848-3.792    c1.456-1.096,2.936-2.16,4.424-3.2c1.656-1.184,3.32-2.4,5.008-3.504c1.512-1.024,3.04-2.016,4.576-3    c1.712-1.096,3.432-2.176,5.168-3.2c1.563-0.933,3.136-1.851,4.72-2.752c1.771-1.008,3.549-1.992,5.336-2.952    c1.6-0.853,3.2-1.688,4.8-2.504c1.824-0.92,3.664-1.808,5.512-2.68c1.6-0.76,3.264-1.52,4.912-2.24c1.88-0.8,3.784-1.6,5.688-2.4    c1.656-0.68,3.304-1.344,4.976-1.984c1.936-0.736,3.896-1.424,5.856-2.112c1.672-0.584,3.344-1.168,5.04-1.72    c1.992-0.64,4-1.232,6.016-1.816c1.688-0.488,3.36-0.992,5.056-1.448c0.648-0.168,1.296-0.304,1.944-0.472    c-23.68,22.993-41.253,51.529-51.128,83.024c-18.988-5.008-37.37-12.082-54.816-21.096C78.039,84.821,78.263,84.541,78.495,84.301    z M66.991,97.181c19.217,10.412,39.595,18.522,60.712,24.16c-10.352,35.996-15.786,73.227-16.152,110.68h-95.92    C17.374,182.632,35.435,135.214,66.991,97.181z M66.991,382.861c-31.554-38.034-49.615-85.452-51.36-134.84h95.92    c0.366,37.453,5.799,74.684,16.152,110.68C106.587,364.341,86.209,372.45,66.991,382.861z M181.727,456.429    c-1.616-0.408-3.288-0.936-4.952-1.424c-2.024-0.592-4.056-1.184-6.056-1.832c-1.688-0.544-3.352-1.128-5.016-1.712    c-1.968-0.68-3.936-1.376-5.88-2.12c-1.664-0.632-3.304-1.296-4.952-1.968c-1.912-0.8-3.824-1.6-5.72-2.4    c-1.632-0.72-3.256-1.461-4.872-2.224c-1.864-0.88-3.72-1.776-5.6-2.704c-1.6-0.8-3.2-1.6-4.8-2.472    c-1.808-0.968-3.6-1.96-5.392-2.984c-1.6-0.888-3.12-1.8-4.664-2.728c-1.76-1.056-3.488-2.144-5.216-3.256    c-1.52-0.968-3.04-1.952-4.536-2.96c-1.704-1.152-3.392-2.352-5.064-3.552c-1.464-1.048-2.928-2.096-4.368-3.2    c-1.656-1.248-3.28-2.536-4.896-3.832c-1.416-1.128-2.824-2.248-4.208-3.408c-1.6-1.328-3.144-2.712-4.696-4.088    c-1.36-1.208-2.728-2.4-4.056-3.632c-1.528-1.424-3.008-2.904-4.496-4.368c-1.288-1.272-2.6-2.528-3.864-3.832    c-0.232-0.248-0.456-0.504-0.688-0.744c17.445-9.018,35.827-16.095,54.816-21.104c9.877,31.494,27.449,60.029,51.128,83.024    C183.031,456.741,182.375,456.605,181.727,456.429z M231.447,463.389c-34.232-4.864-64.24-40.592-83.12-93.352    c27.296-6.112,55.151-9.391,83.12-9.784V463.389z M231.447,344.253c-29.67,0.39-59.215,3.914-88.144,10.512    c-10.045-34.707-15.344-70.615-15.752-106.744h103.896V344.253z M231.447,232.021H127.551    c0.407-36.129,5.706-72.037,15.752-106.744c28.929,6.597,58.475,10.121,88.144,10.512V232.021z M231.447,119.789    c-27.97-0.39-55.824-3.669-83.12-9.784c18.88-52.76,48.888-88.488,83.12-93.352V119.789z M411.903,97.181    c31.554,38.034,49.615,85.452,51.36,134.84h-95.92c-0.366-37.453-5.799-74.684-16.152-110.68    C372.307,115.7,392.685,107.591,411.903,97.181z M297.103,23.605c1.68,0.416,3.352,0.944,5.016,1.432    c2.024,0.592,4.056,1.184,6.056,1.832c1.688,0.544,3.352,1.128,5.016,1.712c1.968,0.68,3.936,1.376,5.88,2.12    c1.664,0.632,3.304,1.296,4.952,1.968c1.912,0.8,3.824,1.6,5.72,2.4c1.632,0.72,3.256,1.461,4.872,2.224    c1.864,0.88,3.72,1.776,5.6,2.704c1.6,0.8,3.2,1.6,4.8,2.472c1.808,0.968,3.6,1.96,5.392,2.984c1.6,0.888,3.12,1.8,4.664,2.728    c1.76,1.056,3.488,2.144,5.216,3.256c1.52,0.968,3.04,1.952,4.536,2.96c1.704,1.152,3.384,2.344,5.056,3.544    c1.472,1.048,2.936,2.104,4.384,3.2c1.648,1.24,3.264,2.528,4.888,3.824c1.408,1.12,2.824,2.24,4.208,3.408    c1.6,1.328,3.144,2.712,4.696,4.088c1.36,1.208,2.728,2.4,4.056,3.632c1.528,1.424,3.008,2.904,4.496,4.368    c1.288,1.272,2.6,2.528,3.864,3.832c0.232,0.248,0.456,0.504,0.688,0.744c-17.445,9.018-35.827,16.095-54.816,21.104    c-9.896-31.498-27.491-60.031-51.192-83.016C295.799,23.293,296.455,23.429,297.103,23.605z M247.447,16.653    c34.232,4.864,64.24,40.592,83.12,93.352c-27.296,6.112-55.151,9.391-83.12,9.784V16.653z M247.447,135.789    c29.67-0.39,59.215-3.914,88.144-10.512c10.045,34.707,15.344,70.615,15.752,106.744H247.447V135.789z M247.447,248.021h103.896    c-0.407,36.129-5.706,72.037-15.752,106.744h0c-28.929-6.597-58.474-10.121-88.144-10.512V248.021z M247.447,463.389V360.253    c27.97,0.39,55.824,3.669,83.12,9.784C311.687,422.797,281.679,458.525,247.447,463.389z M400.399,395.741    c-1.264,1.304-2.568,2.56-3.856,3.832c-1.488,1.464-2.976,2.944-4.504,4.368c-1.328,1.24-2.696,2.4-4.056,3.64    c-1.552,1.376-3.096,2.752-4.68,4.08c-1.4,1.168-2.824,2.296-4.248,3.432c-1.6,1.28-3.2,2.56-4.848,3.792    c-1.456,1.096-2.936,2.16-4.424,3.2c-1.656,1.184-3.32,2.4-5.008,3.504c-1.512,1.024-3.04,2.016-4.576,2.992    c-1.712,1.104-3.437,2.171-5.176,3.2c-1.6,0.936-3.128,1.848-4.704,2.752c-1.771,1.008-3.552,1.992-5.344,2.952    c-1.6,0.853-3.2,1.688-4.8,2.504c-1.824,0.92-3.664,1.808-5.512,2.68c-1.6,0.76-3.264,1.52-4.912,2.24    c-1.88,0.8-3.784,1.6-5.688,2.4c-1.656,0.672-3.304,1.344-4.968,1.976c-1.952,0.744-3.912,1.44-5.88,2.12    c-1.664,0.584-3.328,1.168-5.016,1.712c-2,0.648-4,1.24-6.04,1.824c-1.672,0.496-3.352,0.992-5.04,1.448    c-0.648,0.168-1.296,0.304-1.944,0.472c23.68-22.993,41.253-51.529,51.128-83.024c18.988,5.008,37.37,12.082,54.816,21.096    C400.855,395.221,400.631,395.501,400.399,395.741z M411.903,382.861c-19.217-10.412-39.595-18.522-60.712-24.16    c10.352-35.996,15.786-73.227,16.152-110.68h95.92C461.521,297.409,443.459,344.828,411.903,382.861z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 138,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 137,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 141,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 142,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 143,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 144,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 145,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 147,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 148,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 149,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 150,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 151,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 152,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 153,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 155,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 124,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: "www.domain.com"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 157,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 123,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "right wow fadeInUp",
            "data-wow-duration": ".7s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "fields",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
                action: "/",
                method: "post",
                className: "contact_form",
                id: "contact_form",
                autoComplete: "off",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "returnmessage",
                  "data-success": "Your message has been received, We will contact you soon."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "empty_notice",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                    children: "Please Fill Required Fields"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 177,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 176,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "first",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                        id: "name",
                        type: "text",
                        placeholder: "Name"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 182,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 181,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
                        id: "email",
                        type: "text",
                        placeholder: "Email"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 185,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 184,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 180,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "last",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("textarea", {
                    id: "message",
                    placeholder: "Message"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 190,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: "kura_tm_button",
                  "data-position": "left",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    id: "send_message",
                    className: "d-flex align-items-center",
                    href: "#",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                      children: "Submit"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 198,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      src: "/img/svg/right-arrow.svg",
                      className: "svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 199,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 193,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);

/***/ }),

/***/ "./src/components/ContentModal.js":
/*!****************************************!*\
  !*** ./src/components/ContentModal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsModal": () => (/* binding */ NewsModal),
/* harmony export */   "HomeModal": () => (/* binding */ HomeModal)
/* harmony export */ });
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-responsive-modal */ "react-responsive-modal");
/* harmony import */ var react_responsive_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Assignments\\kura\\src\\components\\ContentModal.js";


const NewsModal = ({
  open,
  onCloseModal,
  img,
  title,
  date
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_responsive_modal__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    open: open,
    onClose: () => onCloseModal(),
    center: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "box_inner",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "description_wrap",
        style: {
          padding: "30px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "news_popup_informations",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "image",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: img,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 9,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 8,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "details",
            style: {
              marginBottom: "20px"
            },
            children: [date && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
              children: title ? title : `VS Code Gets New JavaScript Debugger`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "text",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 7,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined);
};
const HomeModal = ({
  open,
  onCloseModal,
  img,
  title,
  date
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_responsive_modal__WEBPACK_IMPORTED_MODULE_0__.Modal, {
    open: open,
    onClose: () => onCloseModal(),
    center: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "box_inner",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "description_wrap",
        style: {
          padding: "30px"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "news_popup_informations",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "image",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: img,
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "details",
            style: {
              marginBottom: "20px"
            },
            children: [date && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
              children: date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 24
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
              children: title ? title : `VS Code Gets New JavaScript Debugger`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "hidden_content",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "popup_informations",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "description",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/Cursor.js":
/*!**********************************!*\
  !*** ./src/components/Cursor.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilits */ "./src/utilits.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Assignments\\kura\\src\\components\\Cursor.js";




const Cursor = () => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_utilits__WEBPACK_IMPORTED_MODULE_1__.customCursor)();
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "mouse-cursor cursor-outer"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "mouse-cursor cursor-inner"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cursor);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ContentModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentModal */ "./src/components/ContentModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Assignments\\kura\\src\\components\\Home.js";




const Home = ({
  data
}) => {
  var _data$user, _data$user$about, _data$user2, _data$user2$about, _data$user3, _data$user3$about, _data$user3$about$ava, _data$user4, _data$user4$about, _data$user5, _data$user5$about;

  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: modalValue,
    1: setModalValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    img: null,
    title: ""
  });

  const onOpenModal = (img, title) => {
    setOpen(true);
    setModalValue({
      img,
      title
    });
  };

  const onCloseModal = () => {
    setOpen(false);
    setModalValue({
      img: null,
      title: ""
    });
  }; // Check if data is available before accessing its properties


  const userName = (data === null || data === void 0 ? void 0 : (_data$user = data.user) === null || _data$user === void 0 ? void 0 : (_data$user$about = _data$user.about) === null || _data$user$about === void 0 ? void 0 : _data$user$about.name) || "User";
  const subTitle = (data === null || data === void 0 ? void 0 : (_data$user2 = data.user) === null || _data$user2 === void 0 ? void 0 : (_data$user2$about = _data$user2.about) === null || _data$user2$about === void 0 ? void 0 : _data$user2$about.subTitle) || "Subtitle";
  const avatarUrl = (data === null || data === void 0 ? void 0 : (_data$user3 = data.user) === null || _data$user3 === void 0 ? void 0 : (_data$user3$about = _data$user3.about) === null || _data$user3$about === void 0 ? void 0 : (_data$user3$about$ava = _data$user3$about.avatar) === null || _data$user3$about$ava === void 0 ? void 0 : _data$user3$about$ava.url) || "/default-avatar.jpg";
  const expYears = (data === null || data === void 0 ? void 0 : (_data$user4 = data.user) === null || _data$user4 === void 0 ? void 0 : (_data$user4$about = _data$user4.about) === null || _data$user4$about === void 0 ? void 0 : _data$user4$about.exp_year) || 0;
  const total = (data === null || data === void 0 ? void 0 : (_data$user5 = data.user) === null || _data$user5 === void 0 ? void 0 : (_data$user5$about = _data$user5.about) === null || _data$user5$about === void 0 ? void 0 : _data$user5$about.some_total) || 0;
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
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
              className: "job",
              children: subTitle
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "services",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    onClick: () => onOpenModal("/img/service/1.jpg", "Creative Designer based in Japan"),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "image",
                      src: "/img/service/1.jpg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 48,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Web Development"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 49,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/right-arrow.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    onClick: () => onOpenModal("/img/service/2.jpg", "Digital Marketing"),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "image",
                      src: "/img/service/2.jpg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 64,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Digital Marketing"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/right-arrow.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#",
                    onClick: () => onOpenModal("/img/service/1.jpg", "Graphic Design"),
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "image",
                      src: "/img/service/3.jpg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: "Graphic Design"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 81,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/right-arrow.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 74,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 73,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
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
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: ["Years of", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 25
                      }, undefined), "Experience"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
                      children: [total, "+"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                      children: ["Happy", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("br", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 25
                      }, undefined), "Customers"]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
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
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "main",
                style: {
                  backgroundImage: `url(${avatarUrl})`
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "shape"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
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
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_ContentModal__WEBPACK_IMPORTED_MODULE_1__.HomeModal, {
      open: open,
      onCloseModal: () => onCloseModal(),
      img: modalValue.img,
      title: modalValue.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/components/News.js":
/*!********************************!*\
  !*** ./src/components/News.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var _swiperSliderProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../swiperSliderProps */ "./src/swiperSliderProps.js");
/* harmony import */ var _ContentModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentModal */ "./src/components/ContentModal.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
var _jsxFileName = "D:\\Assignments\\kura\\src\\components\\News.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const News = () => {
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: modalValue,
    1: setModalValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    img: null,
    title: "",
    date: ""
  });

  const onOpenModal = (img, title, date) => {
    setOpen(true);
    setModalValue({
      img,
      title,
      date
    });
  };

  const onCloseModal = () => {
    setOpen(false);
    setModalValue({
      img: null,
      title: "",
      date: ""
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "kura_tm_section",
      id: "news",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "kura_tm_news",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "kura_tm_main_title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              children: "News"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
              children: "Latest News"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "news_list wow fadeInUp",
            "data-wow-duration": ".7s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "slick-container",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "slick-wrapper",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, _objectSpread(_objectSpread({}, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_2__.newsSlider), {}, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    className: "slick-slide",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "list_inner",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "image",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          src: "/img/portfolio/410-460.jpg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 38,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "main",
                          style: {
                            backgroundImage: "url(/img/news/1.jpg)"
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 39,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 37,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "overlay"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 46,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                        className: "svg",
                        src: "/img/svg/right-arrow.svg",
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 47,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "details",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                          children: "September 02, 2021"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 53,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                          children: "VS Code Gets New JavaScript Debugger"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 54,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 52,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "kura_tm_full_link",
                        onClick: () => onOpenModal(`img/news/1.jpg`, "VS Code Gets New JavaScript Debugger", "September 02, 2021")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 56,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "news_hidden_details",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "news_popup_informations",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                            className: "text",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 69,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 77,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 85,
                              columnNumber: 31
                            }, undefined)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 68,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 67,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 66,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    className: "slick-slide",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "list_inner",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "image",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          src: "/img/portfolio/410-460.jpg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 103,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "main",
                          style: {
                            backgroundImage: "url(/img/news/2.jpg)"
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 104,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "overlay"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                        className: "svg",
                        src: "/img/svg/right-arrow.svg",
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "details",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                          children: "August 17, 2021"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 118,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                          children: "Javalin Framework for Kotlin and Java Updated"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 119,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "kura_tm_full_link",
                        onClick: () => onOpenModal(`img/news/2.jpg`, "Javalin Framework for Kotlin and Java Updated", "August 17, 2021")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 121,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "news_hidden_details",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "news_popup_informations",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                            className: "text",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 134,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 142,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 150,
                              columnNumber: 31
                            }, undefined)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 133,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 132,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 131,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    className: "slick-slide",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "list_inner",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "image",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          src: "/img/portfolio/410-460.jpg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 168,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "main",
                          style: {
                            backgroundImage: "url(/img/news/3.jpg)"
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 169,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 167,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "overlay"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 176,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                        className: "svg",
                        src: "/img/svg/right-arrow.svg",
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 177,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "details",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                          children: "July 05, 2021"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 183,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                          children: "JavaScript Dominated Open Source in 2021"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 184,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 182,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "kura_tm_full_link",
                        onClick: () => onOpenModal(`img/news/3.jpg`, "JavaScript Dominated Open Source in 2021", "July 05, 2021")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 186,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "news_hidden_details",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "news_popup_informations",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                            className: "text",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 199,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 207,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 215,
                              columnNumber: 31
                            }, undefined)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 198,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 197,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 196,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 166,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 165,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                    className: "slick-slide",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "list_inner",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "image",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          src: "/img/portfolio/410-460.jpg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 233,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "main",
                          style: {
                            backgroundImage: "url(/img/news/4.jpg)"
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 234,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 232,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "overlay"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 241,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                        className: "svg",
                        src: "/img/svg/right-arrow.svg",
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 242,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "details",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                          children: "April 22, 2021"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 248,
                          columnNumber: 27
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                          children: "Perfecto Tests Progressive Web Apps"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 249,
                          columnNumber: 27
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 247,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "kura_tm_full_link",
                        onClick: () => onOpenModal(`img/news/4.jpg`, "Perfecto Tests Progressive Web Apps", "April 22, 2021")
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 251,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "news_hidden_details",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "news_popup_informations",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                            className: "text",
                            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 264,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "In today\u2019s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user\u2019s first impression relates to web design. It\u2019s also why web design services can have an immense impact on your company\u2019s bottom line."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 272,
                              columnNumber: 31
                            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
                              children: "That\u2019s why more companies are not only reevaluating their website\u2019s design but also partnering with Kura, the web design agency that\u2019s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business."
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 280,
                              columnNumber: 31
                            }, undefined)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 263,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 262,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 261,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 230,
                    columnNumber: 21
                  }, undefined)]
                }), void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "kura_tm_swiper_progress fill",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "my_pagination_in"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 299,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "my_navigation",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "my_prev",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          className: "svg",
                          src: "img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 304,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 303,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 302,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "my_next",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          className: "svg",
                          src: "img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 313,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 312,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 311,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 300,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_ContentModal__WEBPACK_IMPORTED_MODULE_3__.NewsModal, {
      open: open,
      onCloseModal: () => onCloseModal(),
      img: modalValue.img,
      title: modalValue.title,
      date: modalValue.date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);
});

/***/ }),

/***/ "./src/components/Portfolio.js":
/*!*************************************!*\
  !*** ./src/components/Portfolio.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-awesome-lightbox */ "react-awesome-lightbox");
/* harmony import */ var react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var _swiperSliderProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swiperSliderProps */ "./src/swiperSliderProps.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
var _jsxFileName = "D:\\Assignments\\kura\\src\\components\\Portfolio.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Portfolio = ({
  data
}) => {
  var _data$user, _data$user2;

  const {
    0: showLight,
    1: setShowLight
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const showLightBox = index => {
    setShowLight({
      startIndex: index
    });
  };

  const hideLightBox = () => {
    setShowLight(null);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "kura_tm_section",
      id: "portfolio",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "kura_tm_portfolio",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "kura_tm_main_title",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
              children: "Portfolio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
              children: "Selected Works"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            className: "portfolio_list gallery_zoom wow fadeInUp",
            "data-wow-duration": ".7s",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
              className: "swiper-container",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "swiper-wrapper",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, _objectSpread(_objectSpread({}, _swiperSliderProps__WEBPACK_IMPORTED_MODULE_3__.portfolioSlider), {}, {
                  children: data === null || data === void 0 ? void 0 : (_data$user = data.user) === null || _data$user === void 0 ? void 0 : _data$user.projects.map((project, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                    className: "swiper-slide",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                      className: "list_inner",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                        className: "image",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          src: project.image.url,
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 39,
                          columnNumber: 29
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "main",
                          style: {
                            backgroundImage: `url(${project.image.url})`
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 40,
                          columnNumber: 29
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "overlay"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 46,
                          columnNumber: 29
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          className: "svg",
                          src: "/img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 47,
                          columnNumber: 29
                        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                          className: "details",
                          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h3", {
                            children: project.title
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 53,
                            columnNumber: 31
                          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
                            children: project.techStack.join(", ")
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 54,
                            columnNumber: 31
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 52,
                          columnNumber: 29
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 38,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "kura_tm_full_link popup-vimeo",
                        onClick: () => showLightBox(index)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 27
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 25
                    }, undefined)
                  }, project._id, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 23
                  }, undefined))
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                className: "kura_tm_swiper_progress fill",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "my_pagination_in"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
                  className: "my_navigation",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "my_prev",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          className: "svg",
                          src: "img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 72,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
                        className: "my_next",
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("img", {
                          className: "svg",
                          src: "img/svg/right-arrow.svg",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 81,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 79,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 69,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), showLight ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((react_awesome_lightbox__WEBPACK_IMPORTED_MODULE_1___default()), {
      images: data === null || data === void 0 ? void 0 : (_data$user2 = data.user) === null || _data$user2 === void 0 ? void 0 : _data$user2.projects.map(project => ({
        url: project.image.url,
        title: project.title
      })),
      startIndex: showLight.startIndex,
      onClose: hideLightBox
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }, undefined) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);
});

/***/ }),

/***/ "./src/components/Price.js":
/*!*********************************!*\
  !*** ./src/components/Price.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Assignments\\kura\\src\\components\\Price.js";



const Price = ({
  data
}) => {
  var _data$user, _data$user$about, _data$user2, _data$user2$services$, _data$user3, _data$user3$services$, _data$user4, _data$user4$services$, _data$user5, _data$user5$services$, _data$user6, _data$user6$services$, _data$user7, _data$user7$services$, _data$user8, _data$user8$services$, _data$user9, _data$user9$services$, _data$user10, _data$user10$services, _data$user11, _data$user11$services;

  if (!data) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: "Data is not available"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "price",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "kura_tm_pricing",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "container",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "pricing_inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "left",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "kura_tm_sticky_section",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "kura_tm_main_title",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                  children: "Pricing"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                  children: "Service Prices"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 16,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                className: "text",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                  children: data === null || data === void 0 ? void 0 : (_data$user = data.user) === null || _data$user === void 0 ? void 0 : (_data$user$about = _data$user.about) === null || _data$user$about === void 0 ? void 0 : _data$user$about.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 19,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "right",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "kura_tm_sticky_section",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  className: "wow fadeInUp",
                  "data-wow-duration": ".7s",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "title",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: data === null || data === void 0 ? void 0 : (_data$user2 = data.user) === null || _data$user2 === void 0 ? void 0 : (_data$user2$services$ = _data$user2.services[0]) === null || _data$user2$services$ === void 0 ? void 0 : _data$user2$services$.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 31,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 30,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "cost",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: data === null || data === void 0 ? void 0 : (_data$user3 = data.user) === null || _data$user3 === void 0 ? void 0 : (_data$user3$services$ = _data$user3.services[0]) === null || _data$user3$services$ === void 0 ? void 0 : _data$user3$services$.charge
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 34,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 33,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      id: "Bold",
                      enableBackground: "new 0 0 24 24",
                      height: "512",
                      viewBox: "0 0 24 24",
                      width: "512",
                      className: "svg replaced-svg",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m12 0c-6.615 0-12 5.381-12 12 0 6.615 5.385 12 12 12s12-5.385 12-12c0-6.62-5.385-12-12-12zm-10.79 11.999c0-1.563.333-3.048.934-4.389l5.148 14.1c-3.601-1.751-6.082-5.442-6.082-9.711zm10.79 10.791c-1.06 0-2.081-.155-3.048-.441l3.237-9.406 3.315 9.087c.024.054.049.101.077.15-1.118.392-2.323.61-3.581.61zm1.485-15.845v-.001c.648-.034 1.233-.101 1.233-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-1.06 0-2.841-.135-2.841-.135-.58-.034-.647.857-.067.891 0 0 .551.068 1.132.101l1.679 4.606-2.361 7.079-3.928-11.685c.649-.034 1.234-.101 1.234-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-.203 0-.441-.005-.697-.014 1.931-2.928 5.245-4.863 9.015-4.863 2.807 0 5.366 1.075 7.287 2.83-.049-.005-.092-.009-.14-.009-1.06 0-1.81.924-1.81 1.916 0 .89.513 1.64 1.06 2.531.411.716.891 1.64.891 2.976 0 .924-.353 1.993-.823 3.489l-1.075 3.595zm7.985-.122c.842 1.539 1.321 3.3 1.321 5.178 0 3.982-2.158 7.456-5.366 9.324l-.001-.001 3.295-9.528c.614-1.539.823-2.767.823-3.866 0-.396-.024-.764-.072-1.107z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 46,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 29,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 28,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  className: "wow fadeInUp",
                  "data-wow-duration": ".7s",
                  "data-wow-delay": ".2s",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "title",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: data === null || data === void 0 ? void 0 : (_data$user4 = data.user) === null || _data$user4 === void 0 ? void 0 : (_data$user4$services$ = _data$user4.services[1]) === null || _data$user4$services$ === void 0 ? void 0 : _data$user4$services$.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 57,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 56,
                      columnNumber: 21
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "cost",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: data === null || data === void 0 ? void 0 : (_data$user5 = data.user) === null || _data$user5 === void 0 ? void 0 : (_data$user5$services$ = _data$user5.services[1]) === null || _data$user5$services$ === void 0 ? void 0 : _data$user5$services$.charge
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 60,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      id: "Layer_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 512 512",
                      style: {
                        enableBackground: "new 0 0 512 512"
                      },
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M464.372,214.326v-96.7L346.747,0H47.628v214.326H23.814v226.233h23.814V512h416.744v-71.442h23.814V214.326H464.372z     M357.209,60.979l46.184,46.184h-46.184V60.979z M83.349,35.721h238.14v107.163h107.163v71.442H83.349V35.721z M428.651,476.279    H83.349v-35.721h345.302V476.279z M452.465,404.837H59.535V250.047h392.93V404.837z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 76,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 75,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 74,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
                            points: "153.874,287.077 153.874,316.547 123.549,316.547 123.549,287.077 105.975,287.077 105.975,363.163     123.549,363.163 123.549,331.978 153.874,331.978 153.874,363.163 171.451,363.163 171.451,287.077   "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 81,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 80,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 79,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
                            points: "185.381,287.077 185.381,302.509 208.636,302.509 208.636,363.163 226.21,363.163 226.21,302.509     249.357,302.509 249.357,287.077   "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 86,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 85,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
                            points: "321.905,287.077 302.079,326.835 282.362,287.077 263.287,287.077 263.287,363.163 280.862,363.163     280.862,317.619 297.365,350.732 306.795,350.732 323.298,317.619 323.298,363.163 340.873,363.163 340.873,287.077   "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 91,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 90,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("polygon", {
                            points: "378.378,347.731 378.378,287.077 360.803,287.077 360.803,363.163 415.242,363.163 415.242,347.731   "
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 96,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 95,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 94,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 100,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 103,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 105,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 107,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 109,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 62,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 50,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  className: "wow fadeInUp",
                  "data-wow-duration": ".7s",
                  "data-wow-delay": ".4s",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "title",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: data === null || data === void 0 ? void 0 : (_data$user6 = data.user) === null || _data$user6 === void 0 ? void 0 : (_data$user6$services$ = _data$user6.services[2]) === null || _data$user6$services$ === void 0 ? void 0 : _data$user6$services$.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 124,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 123,
                      columnNumber: 21
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "cost",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: data === null || data === void 0 ? void 0 : (_data$user7 = data.user) === null || _data$user7 === void 0 ? void 0 : (_data$user7$services$ = _data$user7.services[2]) === null || _data$user7$services$ === void 0 ? void 0 : _data$user7$services$.charge
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 127,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      id: "_x31__x2C_5",
                      enableBackground: "new 0 0 24 24",
                      height: "512",
                      viewBox: "0 0 24 24",
                      width: "512",
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m16.81 13h-12.06c-.414 0-.75-.336-.75-.75v-4.5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75v2.25c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-1.5h-13v3h11.31c.414 0 .75.336.75.75s-.336.75-.75.75z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m13.82 15.99h-9.02c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h9.02c.414 0 .75.336.75.75s-.336.75-.75.75z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 139,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m10.84 18.99h-6.04c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.04c.414 0 .75.336.75.75s-.336.75-.75.75z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 140,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m12.527 24c-.197 0-.389-.078-.53-.22-.173-.173-.251-.419-.208-.661l.53-3.005c.027-.151.1-.291.208-.4l7.425-7.424c.316-.316.651-.513.996-.585.477-.1.939.045 1.302.409l1.237 1.237c.682.682.682 1.792 0 2.475l-7.424 7.425c-.109.109-.249.182-.4.208l-3.005.53c-.044.007-.087.011-.131.011zm3.006-1.28h.01zm-1.778-2.112-.303 1.717 1.717-.303 7.257-7.258c.097-.098.097-.256 0-.354l-1.228-1.228c-.01.019-.085.067-.186.167z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 141,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m9.83 22h-7.08c-1.517 0-2.75-1.233-2.75-2.75v-16.5c0-1.517 1.233-2.75 2.75-2.75h18.5c1.517 0 2.75 1.233 2.75 2.75v7.29c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-7.29c0-.689-.561-1.25-1.25-1.25h-18.5c-.689 0-1.25.561-1.25 1.25v16.5c0 .689.561 1.25 1.25 1.25h7.08c.414 0 .75.336.75.75s-.336.75-.75.75z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 142,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                        d: "m23.25 5h-22.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h22.5c.414 0 .75.336.75.75s-.336.75-.75.75z"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 143,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 129,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 122,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  className: "wow fadeInUp",
                  "data-wow-duration": ".7s",
                  "data-wow-delay": ".6s",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "title",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: data === null || data === void 0 ? void 0 : (_data$user8 = data.user) === null || _data$user8 === void 0 ? void 0 : (_data$user8$services$ = _data$user8.services[3]) === null || _data$user8$services$ === void 0 ? void 0 : _data$user8$services$.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 154,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 153,
                      columnNumber: 21
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "cost",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: data === null || data === void 0 ? void 0 : (_data$user9 = data.user) === null || _data$user9 === void 0 ? void 0 : (_data$user9$services$ = _data$user9.services[3]) === null || _data$user9$services$ === void 0 ? void 0 : _data$user9$services$.charge
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 157,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 156,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      id: "Capa_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 512 512",
                      style: {
                        enableBackground: "new 0 0 512 512"
                      },
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M432,100c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.52,0,10-4.48,10-10S437.52,100,432,100z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 173,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 172,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 171,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M80,100c-5.52,0-10,4.48-10,10s4.48,10,10,10s10-4.48,10-10S85.52,100,80,100z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 178,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 177,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 176,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M502,220h-11.96c-3.738-28.804-12.77-56.253-26.944-81.705c-2.687-4.824-8.776-6.559-13.602-3.872    c-4.825,2.687-6.559,8.777-3.872,13.602c12.508,22.463,20.646,46.628,24.252,71.975H462c-5.523,0-10,4.477-10,10v40    c0,5.523,4.477,10,10,10h40c5.523,0,10-4.477,10-10v-40C512,224.477,507.523,220,502,220z M492,260h-20v-20h9.078    c0.003,0,0.007,0,0.01,0c0.004,0,0.007,0,0.011,0H492V260z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 183,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 182,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 181,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M365.981,292.621c-0.006-0.155-0.01-0.31-0.023-0.465c-0.018-0.212-0.047-0.421-0.078-0.629    c-0.019-0.128-0.034-0.256-0.059-0.384c-0.046-0.245-0.106-0.485-0.169-0.724c-0.024-0.091-0.043-0.182-0.07-0.272    c-0.089-0.299-0.193-0.592-0.309-0.879c-0.013-0.031-0.022-0.064-0.035-0.095c-0.138-0.334-0.293-0.659-0.465-0.973    l-99.998-182.996C263.022,101.996,259.657,100,256,100c-3.657,0-7.022,1.996-8.775,5.205l-99.998,182.996    c-0.172,0.314-0.327,0.639-0.465,0.973c-0.013,0.031-0.022,0.063-0.035,0.095c-0.116,0.287-0.22,0.58-0.309,0.879    c-0.027,0.09-0.046,0.181-0.07,0.272c-0.064,0.239-0.123,0.478-0.169,0.724c-0.024,0.127-0.039,0.255-0.059,0.384    c-0.031,0.208-0.06,0.417-0.078,0.629c-0.013,0.155-0.018,0.31-0.023,0.465c-0.005,0.126-0.019,0.25-0.019,0.378    c0,0.066,0.009,0.129,0.01,0.195c0.003,0.157,0.013,0.313,0.024,0.47c0.013,0.199,0.029,0.397,0.054,0.593    c0.018,0.138,0.04,0.275,0.063,0.413c0.036,0.216,0.079,0.43,0.129,0.641c0.028,0.119,0.059,0.238,0.092,0.356    c0.063,0.228,0.135,0.452,0.213,0.673c0.022,0.063,0.036,0.127,0.06,0.19l36.064,95.569c-2.893,1.434-5.569,3.339-7.92,5.689    C169.121,403.457,166,410.99,166,419c0,13.036,8.361,24.152,20,28.28V502c0,5.523,4.477,10,10,10h120c5.523,0,10-4.477,10-10    v-54.703c4.169-1.471,7.992-3.866,11.212-7.086C342.879,434.543,346,427.01,346,419c0-11.773-6.819-21.978-16.713-26.887    l36.069-95.582c0.024-0.063,0.038-0.127,0.06-0.19c0.078-0.221,0.15-0.445,0.213-0.673c0.033-0.118,0.063-0.237,0.092-0.356    c0.05-0.211,0.092-0.425,0.129-0.641c0.023-0.138,0.046-0.275,0.063-0.413c0.025-0.196,0.041-0.394,0.054-0.593    c0.01-0.157,0.021-0.313,0.024-0.47c0.001-0.065,0.01-0.129,0.01-0.195C366,292.872,365.986,292.748,365.981,292.621z M256,283    c5.514,0,10,4.486,10,10c0,5.514-4.486,10-10,10c-5.514,0-10-4.486-10-10C246,287.486,250.486,283,256,283z M306,492H206v-43h100    V492z M323.069,426.068c-1.89,1.891-4.401,2.932-7.069,2.932H196c-5.514,0-10-4.486-10-10c0-2.668,1.041-5.179,2.931-7.068    c1.891-1.891,4.401-2.932,7.069-2.932h119.933c0.022,0,0.044,0.003,0.066,0.003c0.011,0,0.023-0.001,0.034-0.001    c5.499,0.018,9.968,4.495,9.968,9.998C326,421.668,324.959,424.179,323.069,426.068z M309.085,389h-106.17l-32.453-86H196    c5.523,0,10-4.477,10-10s-4.477-10-10-10h-23.14L246,149.154V264.72c-11.639,4.128-20,15.243-20,28.28c0,16.542,13.458,30,30,30    s30-13.458,30-30c0-13.036-8.361-24.152-20-28.28V149.154L339.14,283H316c-5.523,0-10,4.477-10,10s4.477,10,10,10h25.538    L309.085,389z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 188,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 187,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 186,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M62.505,134.423c-4.826-2.688-10.916-0.954-13.602,3.872C34.73,163.747,25.697,191.196,21.96,220H10    c-5.523,0-10,4.477-10,10v40c0,5.523,4.477,10,10,10h40c5.523,0,10-4.477,10-10v-40c0-5.523-4.477-10-10-10h-7.875    c3.607-25.347,11.744-49.512,24.252-71.975C69.064,143.2,67.331,137.11,62.505,134.423z M40,260H20v-20h10.901    c0.004,0,0.007,0,0.011,0c0.003,0,0.007,0,0.01,0H40V260z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 193,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 192,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 191,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M482,0c-13.036,0-24.152,8.361-28.28,20H286V10c0-5.523-4.477-10-10-10h-40c-5.523,0-10,4.477-10,10v10H58.28    C54.152,8.361,43.036,0,30,0C13.458,0,0,13.458,0,30s13.458,30,30,30c13.036,0,24.152-8.361,28.28-20h100.534    c-21.329,8.925-40.889,20.511-56.989,34.084c-4.223,3.56-4.76,9.869-1.2,14.091c1.978,2.347,4.805,3.555,7.65,3.555    c2.276,0,4.564-0.772,6.44-2.354C143.407,65.188,184.353,47.913,226,42.119V50c0,5.523,4.477,10,10,10h40c5.523,0,10-4.477,10-10    v-7.881c41.647,5.794,82.593,23.069,111.285,47.256c1.876,1.582,4.164,2.355,6.44,2.354c2.846,0,5.673-1.208,7.65-3.555    c3.561-4.221,3.023-10.53-1.2-14.09c-16.1-13.573-35.66-25.159-56.989-34.084H453.72c4.128,11.639,15.243,20,28.28,20    c16.542,0,30-13.458,30-30S498.542,0,482,0z M30,40c-5.514,0-10-4.486-10-10s4.486-10,10-10s10,4.486,10,10S35.514,40,30,40z     M266,30v0.9V40h-20v-9.1V30V20h20V30z M482,40c-5.514,0-10-4.486-10-10s4.486-10,10-10c5.514,0,10,4.486,10,10S487.514,40,482,40    z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 198,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 197,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 196,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 201,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 202,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 203,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 204,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 205,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 206,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 207,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 208,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 209,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 210,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 212,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 213,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 214,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 215,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 152,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 147,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  className: "wow fadeInUp",
                  "data-wow-duration": ".7s",
                  "data-wow-delay": ".8s",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                    className: "list_inner",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "title",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: data === null || data === void 0 ? void 0 : (_data$user10 = data.user) === null || _data$user10 === void 0 ? void 0 : (_data$user10$services = _data$user10.services[4]) === null || _data$user10$services === void 0 ? void 0 : _data$user10$services.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 226,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 225,
                      columnNumber: 21
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                      className: "cost",
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                        children: data === null || data === void 0 ? void 0 : (_data$user11 = data.user) === null || _data$user11 === void 0 ? void 0 : (_data$user11$services = _data$user11.services[4]) === null || _data$user11$services === void 0 ? void 0 : _data$user11$services.charge
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 229,
                        columnNumber: 25
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 228,
                      columnNumber: 23
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      version: "1.1",
                      id: "Capa_1",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 512 512",
                      style: {
                        enableBackground: "new 0 0 512 512"
                      },
                      className: "svg replaced-svg",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M0,0v512h512V0H0z M482,482H30V30h452V482z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 245,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 244,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 243,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M213.102,181.6h-72.24V352h33.12v-57.12h40.32c29.531,0,53.04-25.713,53.04-56.64    C267.342,212,246.166,181.6,213.102,181.6z M212.382,265.84h-38.4v-55.2h36.96c14.057,0,22.8,13.2,22.8,27.6    C233.742,255,224,265.84,212.382,265.84z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 250,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 249,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 248,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                            d: "M336.939,276.64c-4.642-1.118-24.72-4.39-24.72-15.84c0-9.175,7.531-14.16,19.2-14.16c15.831,0,30.079,9.12,36.48,13.92    l12.96-19.44c-6.881-6.079-21.609-17.28-49.2-17.28c-26.284,0-49.44,14.91-49.44,41.52c0,27.64,36.72,32.801,44.88,35.04    c9.757,2.723,27.6,6.225,27.6,17.04c0,8.81-8.449,13.92-20.64,13.92c-18.809,0-36.48-11.119-44.16-16.56l-12,20.16    c7.2,6.24,27.851,19.44,56.88,19.44c15.679,0,50.88-4.9,50.88-39.84C385.659,285,345.579,278.882,336.939,276.64z"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 255,
                            columnNumber: 29
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 254,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 253,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 258,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 259,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 260,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 261,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 262,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 263,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 264,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 265,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 266,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 267,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 268,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 269,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 270,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 271,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 272,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 231,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 224,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);

/***/ }),

/***/ "./src/components/Skills.js":
/*!**********************************!*\
  !*** ./src/components/Skills.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilits */ "./src/utilits.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Assignments\\kura\\src\\components\\Skills.js";




const ParallaxVideo = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(() => __webpack_require__.e(/*! import() */ "src_components_Parallax_js").then(__webpack_require__.bind(__webpack_require__, /*! ./Parallax */ "./src/components/Parallax.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! ./Parallax */ "./src/components/Parallax.js")],
    modules: ["..\\src\\components\\Skills.js -> " + "./Parallax"]
  }
});

const Skills = ({
  data
}) => {
  var _data$user, _data$user$about;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleScroll = () => {
      (0,_utilits__WEBPACK_IMPORTED_MODULE_2__.activeSkillProgress)();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!data || !data.user || !data.user.skills || data.user.skills.length === 0) {
    return "Not available";
  } // Filter and sort enabled skills


  const enabledSkills = data.user.skills.filter(skill => skill.enabled).sort((a, b) => a.sequence - b.sequence);
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
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h3", {
                children: "Programming Skills"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "text wow fadeInUp",
              "data-wow-duration": ".7s",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
                children: data === null || data === void 0 ? void 0 : (_data$user = data.user) === null || _data$user === void 0 ? void 0 : (_data$user$about = _data$user.about) === null || _data$user$about === void 0 ? void 0 : _data$user$about.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "dodo_progress wow fadeInUp",
              "data-wow-duration": ".7s",
              "data-wow-delay": ".2s",
              children: enabledSkills.map((skill, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
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
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                    className: "number",
                    children: skill.percentage
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                  className: "background",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                    className: "bar",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
                      className: "bar_in",
                      style: {
                        width: `${skill.percentage}%`
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 21
                }, undefined)]
              }, index, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 19
              }, undefined))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: "right",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(ParallaxVideo, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
              className: "my_image jarallax",
              "data-speed": "0",
              style: {
                backgroundImage: "url(/img/portfolio/2.jpg)"
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);

/***/ }),

/***/ "./src/components/Timeline.js":
/*!************************************!*\
  !*** ./src/components/Timeline.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Assignments\\kura\\src\\components\\Timeline.js";




const renderTimelineItem = item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
  className: "wow fadeInUp",
  "data-wow-duration": ".7s",
  "data-wow-delay": `${item.sequence * 0.2}s` // Adjust delay based on sequence
  ,
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "list_inner",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      children: [(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(item.startDate), "MMMM yyyy"), " -", " ", (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(item.endDate), "MMMM yyyy")]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "list_inner",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      children: item.jobTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "list_inner",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
      children: item.jobLocation
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined)]
}, item._id, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

const Timeline = ({
  data
}) => {
  if (!data || !data.user || !data.user.timeline) {
    return "Not Available";
  }

  const sortedTimeline = data.user.timeline.sort((a, b) => a.sequence - b.sequence);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "kura_tm_section",
    id: "timeline",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "kura_tm_timeline",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "kura_tm_main_title",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
            children: "Timeline"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
            children: "Working Period"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "timeline_list",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
            children: sortedTimeline.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
              children: item.forEducation ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "list_inner",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                    children: [(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(item.startDate), "MMMM yyyy"), " -", " ", (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(item.endDate), "MMMM yyyy")]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "list_inner",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                    children: item.jobTitle
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "list_inner",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("span", {
                    children: item.jobLocation
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 21
              }, undefined) : renderTimelineItem(item)
            }, item._id, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 17
            }, undefined))
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timeline);

/***/ }),

/***/ "./src/layout/Footer.js":
/*!******************************!*\
  !*** ./src/layout/Footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Assignments\\kura\\src\\layout\\Footer.js";



const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "kura_tm_section",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "kura_tm_copyright",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: "copyright_inner wow fadeInUp",
            "data-wow-duration": ".7s",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "text",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
                children: ["Copyright \xA9 ", new Date().getFullYear(), ". All rights reserved."]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: "social",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/social/facebook.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/social/twitter.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 31,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/social/instagram.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 41,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/social/dribbble.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 50,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                    href: "#",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
                      className: "svg",
                      src: "/img/svg/social/tik-tok.svg",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 58,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/layout/Header.js":
/*!******************************!*\
  !*** ./src/layout/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilits */ "./src/utilits.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Assignments\\kura\\src\\layout\\Header.js";




const Header = ({
  dark
}) => {
  const {
    0: isToggled,
    1: setToggled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const toggleTrueFalse = () => {
    setToggled(!isToggled);
    (0,_utilits__WEBPACK_IMPORTED_MODULE_1__.openNav)(!isToggled);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (0,_utilits__WEBPACK_IMPORTED_MODULE_1__.audioSoundAndOpen)();
    window.addEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_1__.scroll_);
    window.addEventListener("scroll", _utilits__WEBPACK_IMPORTED_MODULE_1__.stickyNav);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "kura_tm_topbar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "wrapper",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "topbar_inner",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "logo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: dark ? "/img/logo/logo.png" : "/img/logo/dark.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 24,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "menu",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "list",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
                className: "anchor_nav",
                id: "anchor_nav",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#home",
                    children: "Home"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#portfolio",
                    children: "Portfolio"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#skills",
                    children: "Skills"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#timeline",
                    children: "Timeline"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#price",
                    children: "Price"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#news",
                    children: "News"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                    href: "#contact",
                    children: "Contact"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 51,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: "trigger",
              onClick: () => toggleTrueFalse(),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: `hamburger hamburger--slider ${isToggled ? " is-active" : ""}`,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "hamburger-box",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                    className: "hamburger-inner"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 63,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "kura_tm_mobile_menu",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "mobile_menu_inner",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "mobile_in",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "logo",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
                src: dark ? "/img/logo/logo.png" : "/img/logo/dark.png",
                alt: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: "trigger",
            onClick: toggleTrueFalse,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: isToggled ? "hamburger hamburger--slider is-active" : "hamburger hamburger--slider",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: "hamburger-box",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                  className: "hamburger-inner"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: isToggled ? "dropdown active" : "dropdown",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "dropdown_inner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("ul", {
            className: "anchor_nav",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              className: "current",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#home",
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#portfolio",
                children: "Portfolio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#skills",
                children: "Skills"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 107,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#timeline",
                children: "Timeline"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#price",
                children: "Price"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#news",
                children: "News"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("li", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
                href: "#contact",
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/layout/Settings.js":
/*!********************************!*\
  !*** ./src/layout/Settings.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Assignments\\kura\\src\\layout\\Settings.js";



const Settings = () => {
  const {
    0: toggle,
    1: setToggle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: cursor,
    1: setCursor
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const colors = document.querySelectorAll("#colors li a");
    colors.forEach(color => {
      color.addEventListener("click", () => {
        document.querySelector(".kura_tm_all_wrap").setAttribute("data-color", color.classList[0]);
      });
    });
  }, []);

  const onClick = value => {
    setCursor(value);
    document.querySelector(".kura_tm_all_wrap").setAttribute("data-magic-cursor", value === 1 ? "show" : "hide");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: `kura_tm_settings ${toggle ? "opened" : ""}`,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "icon",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          version: "1.1",
          id: "Capa_1",
          x: "0px",
          y: "0px",
          viewBox: "0 0 268.765 268.765",
          xmlSpace: "preserve",
          className: "svg settingSvg replaced-svg changeDark",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
            id: "Settings",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                d: "M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617    c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133    c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529    c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08    c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574    c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214    c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597    c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415    c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508    c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167    c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817    c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572    c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213    c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043    c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491    c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824    C179.418,159.385,159.312,179.491,134.595,179.491z",
                style: {
                  fillRule: "evenodd",
                  clipRule: "evenodd"
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          className: "link",
          href: "#",
          onClick: () => setToggle(!toggle)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "wrapper",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: "title",
          children: "Unlimited Colors"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          className: "colors",
          id: "colors",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "blue",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "green",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "brown",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "pink",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "orange",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: "bl",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "black",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: "wh",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "white",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "purple",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "sky",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "cadetBlue",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "crimson",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "olive",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: "red",
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          className: "title",
          children: "Magic Cursor"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
          className: "cursor",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: `${cursor === 1 ? "showme show" : "hidden"}`,
              onClick: () => onClick(1),
              href: "#"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
              className: `${cursor === 2 ? "showme show" : "hidden"}`,
              onClick: () => onClick(2),
              href: "#",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                id: "Capa_1",
                enableBackground: "new 0 0 512 512",
                height: 512,
                viewBox: "0 0 512 512",
                width: 512,
                className: "svg settingSvg replaced-svg changeDark",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("g", {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m451.002 183.574h29.997v84.853h-29.997z",
                    transform: "matrix(.707 -.707 .707 .707 -23.318 395.706)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m271.002 3.574h29.997v84.853h-29.997z",
                    transform: "matrix(.707 -.707 .707 .707 51.241 215.706)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 138,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m423.574 31.002h84.853v29.997h-84.853z",
                    transform: "matrix(.707 -.707 .707 .707 103.961 342.985)"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m42.422 512 150.458-150.458 42.114 125.464 152.988-362.988-362.988 152.988 125.464 42.114-150.458 150.458z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m361 0h30v61h-30z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
                    d: "m451 121h61v30h-61z"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);

/***/ }),

/***/ "./src/swiperSliderProps.js":
/*!**********************************!*\
  !*** ./src/swiperSliderProps.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "portfolioSlider": () => (/* binding */ portfolioSlider),
/* harmony export */   "newsSlider": () => (/* binding */ newsSlider)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "swiper");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

swiper__WEBPACK_IMPORTED_MODULE_0__.default.use([swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation]);
const portfolioSlider = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: false,
  navigation: {
    prevEl: ".my_prev",
    nextEl: ".my_next"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
};
const newsSlider = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: false,
  navigation: {
    prevEl: ".my_prev",
    nextEl: ".my_next"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
};
});

/***/ }),

/***/ "./src/utilits.js":
/*!************************!*\
  !*** ./src/utilits.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wowJsAnimation": () => (/* binding */ wowJsAnimation),
/* harmony export */   "customCursor": () => (/* binding */ customCursor),
/* harmony export */   "kura_tm_my_load": () => (/* binding */ kura_tm_my_load),
/* harmony export */   "stickyNav": () => (/* binding */ stickyNav),
/* harmony export */   "audioSoundAndOpen": () => (/* binding */ audioSoundAndOpen),
/* harmony export */   "openNav": () => (/* binding */ openNav),
/* harmony export */   "activeSkillProgress": () => (/* binding */ activeSkillProgress),
/* harmony export */   "activeMenuBySection": () => (/* binding */ activeMenuBySection),
/* harmony export */   "aTagClick": () => (/* binding */ aTagClick),
/* harmony export */   "scroll_": () => (/* binding */ scroll_)
/* harmony export */ });
const kura_tm_preloader = () => {
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
  let preloader = document.getElementById("preloader");

  if (preloader) {
    if (!isMobile) {
      setTimeout(function () {
        preloader.classList.add("preloaded");
      }, 800);
      setTimeout(function () {
        preloader.remove();
      }, 2000);
    } else {
      preloader.remove();
    }
  }
};

const wowJsAnimation = () => {
  if (false) {}

  new WOW.WOW().init();
};
const customCursor = () => {
  var myCursor = document.querySelectorAll(".mouse-cursor"),
      hamburger = document.querySelector(".hamburger"),
      kura_tm_topbar = document.querySelector(".kura_tm_topbar "),
      pointer = document.querySelector(".cursor-pointer"),
      e = document.querySelector(".cursor-inner"),
      t = document.querySelector(".cursor-outer");

  function mouseEvent(element) {
    element.addEventListener("mouseenter", function () {
      e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
    });
    element.addEventListener("mouseleave", function () {
      e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
    });
  }

  if (myCursor.length) {
    if (document.body) {
      let n,
          i = 0,
          o = !1;
      window.onmousemove = function (s) {
        // console.log(document.querySelector(this));
        o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
      }, document.body.addEventListener("mouseenter", // "a,.kura_tm_topbar .trigger, .cursor-pointer",
      function () {
        let a = document.querySelectorAll("a");
        e.classList.add("cursor-inner"), t.classList.add("cursor-outer");

        for (let i = 0; i < a.length; i++) {
          const element = a[i];
          mouseEvent(element);
        }

        hamburger && mouseEvent(hamburger);
        kura_tm_topbar && mouseEvent(kura_tm_topbar);
        pointer && mouseEvent(pointer);
      }), e.style.visibility = "visible", t.style.visibility = "visible";
    }
  }
};
const kura_tm_my_load = () => {
  kura_tm_preloader();
  setTimeout(() => {
    document.querySelector("body").classList.add("opened");
  }, 1500);
}; // Header

const stickyNav = () => {
  let offset = window.scrollY;
  const stickys = document.querySelectorAll(".kura_tm_topbar");
  stickys.forEach(sticky => {
    if (sticky) {
      if (offset > 100) {
        sticky.classList.add("animate");
      } else {
        sticky.classList.remove("animate");
      }
    }
  });
};
const audioSoundAndOpen = () => {
  var audio1 = document.querySelectorAll("#audio1");
  var audio2 = document.querySelectorAll("#audio2");
  var hamburgers = document.querySelectorAll(".trigger .hamburger");
  hamburgers.forEach(hamburger => {
    hamburger.addEventListener("click", function () {
      var element = this;

      if (element.classList.contains("is-active")) {
        audio1[0].play();
      } else {
        audio2[0].play();
      }

      return false;
    });
  });
};
const openNav = toggle => {
  const navItems = document.querySelectorAll("#anchor_nav> li");

  if (navItems) {
    navItems.forEach(nav => {
      toggle ? nav.classList.add("opened") : nav.classList.remove("opened");
    });
  }
};
const activeSkillProgress = () => {
  const boxes = document.querySelectorAll(".bar");
  const triggerBottom = window.innerHeight / 5 * 5;
  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("open");
    } else {
      box.classList.remove("open");
    }
  });
}; // active

const activeMenuBySection = id => {
  const boxes = document.querySelectorAll(`#${id ? id : "home"}`);
  window.addEventListener("scroll", checkBoxes);
  checkBoxes();

  function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 5;
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        activeMenu(id ? id : "home");
      } else {
        activeMenu("");
      }
    });
  }
};

const activeMenu = active => {
  const navItems = document.querySelectorAll("#anchor_nav> li");

  if (navItems) {
    navItems.forEach(nav => {
      if (nav.classList.contains(active)) {
        nav.classList.add("current");
      } else {
        nav.classList.remove("current");
      }
    });
  }
};

const aTagClick = () => {
  const aTag = document.querySelectorAll("[href='#']");

  for (let i = 0; i < aTag.length; i++) {
    const a = aTag[i];
    a.addEventListener("click", e => {
      e.preventDefault();
    });
  }
};
const scroll_ = () => {
  const sections = document.querySelectorAll(".kura_tm_section");
  const navLi = document.querySelectorAll(".anchor_nav li");
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navLi.forEach(li => {
    li.classList.remove("current");

    if (li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`) {
      li.classList.add("current");
    }
  });
};

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ "./node_modules/next/dist/shared/lib/dynamic.js")


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ "jarallax":
/*!***************************!*\
  !*** external "jarallax" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("jarallax");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-awesome-lightbox":
/*!*****************************************!*\
  !*** external "react-awesome-lightbox" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-awesome-lightbox");

/***/ }),

/***/ "react-responsive-modal":
/*!*****************************************!*\
  !*** external "react-responsive-modal" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive-modal");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ "swiper/react":
/*!*******************************!*\
  !*** external "swiper/react" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxFQUFFLENBQUNyRixTQUFILENBQWF5QixNQUFiLENBQW9CLFNBQXBCOztBQUNBLFFBQUk0RCxFQUFFLENBQUNDLG9CQUFILENBQXdCLEdBQXhCLEVBQTZCLENBQTdCLEVBQWdDRixZQUFoQyxDQUE2QyxNQUE3QyxLQUF5RCxJQUFHUCxPQUFRLEVBQXhFLEVBQTJFO0FBQ3pFUSxNQUFBQSxFQUFFLENBQUNyRixTQUFILENBQWF3QixHQUFiLENBQWlCLFNBQWpCO0FBQ0Q7QUFDRixHQUxEO0FBTUQsQ0FqQk07Ozs7Ozs7Ozs7QUMzTFAsdUhBQXFEOzs7Ozs7Ozs7Ozs7QUNBckQ7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rdXJhLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvUGFnZUhlYWQuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy9jb21wb25lbnRzL0F1ZGlvLmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvY29tcG9uZW50cy9Db250YWN0LmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvY29tcG9uZW50cy9Db250ZW50TW9kYWwuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy9jb21wb25lbnRzL0N1cnNvci5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL2NvbXBvbmVudHMvSG9tZS5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL2NvbXBvbmVudHMvTmV3cy5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL2NvbXBvbmVudHMvUG9ydGZvbGlvLmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvY29tcG9uZW50cy9QcmljZS5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL2NvbXBvbmVudHMvU2tpbGxzLmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvY29tcG9uZW50cy9UaW1lbGluZS5qcyIsIndlYnBhY2s6Ly9rdXJhLy4vc3JjL2xheW91dC9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy9sYXlvdXQvSGVhZGVyLmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvbGF5b3V0L1NldHRpbmdzLmpzIiwid2VicGFjazovL2t1cmEvLi9zcmMvc3dpcGVyU2xpZGVyUHJvcHMuanMiLCJ3ZWJwYWNrOi8va3VyYS8uL3NyYy91dGlsaXRzLmpzIiwid2VicGFjazovL2t1cmEvLi9ub2RlX21vZHVsZXMvbmV4dC9keW5hbWljLmpzIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJqYXJhbGxheFwiIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9sb2FkYWJsZS5qc1wiIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9rdXJhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9rdXJhL2V4dGVybmFsIFwicmVhY3QtYXdlc29tZS1saWdodGJveFwiIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJyZWFjdC1yZXNwb25zaXZlLW1vZGFsXCIiLCJ3ZWJwYWNrOi8va3VyYS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2t1cmEvZXh0ZXJuYWwgXCJzd2lwZXJcIiIsIndlYnBhY2s6Ly9rdXJhL2V4dGVybmFsIFwic3dpcGVyL3JlYWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm5vU1NSID0gbm9TU1I7XG5leHBvcnRzLmRlZmF1bHQgPSBkeW5hbWljO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfbG9hZGFibGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2xvYWRhYmxlXCIpKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IGlzU2VydmVyU2lkZSA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplciwgbG9hZGFibGVPcHRpb25zKSB7XG4gICAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gICAgaWYgKCFpc1NlcnZlclNpZGUpIHtcbiAgICAgICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nO1xuICAgIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgIHJldHVybiAoKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9KVxuICAgIDtcbn1cbmZ1bmN0aW9uIGR5bmFtaWMoZHluYW1pY09wdGlvbnMsIG9wdGlvbnMpIHtcbiAgICBsZXQgbG9hZGFibGVGbiA9IF9sb2FkYWJsZS5kZWZhdWx0O1xuICAgIGxldCBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG4gICAgICAgIGxvYWRpbmc6ICh7IGVycm9yICwgaXNMb2FkaW5nICwgcGFzdERlbGF5ICB9KT0+e1xuICAgICAgICAgICAgaWYgKCFwYXN0RGVsYXkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGVycm9yLm1lc3NhZ2UsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLCBlcnJvci5zdGFjaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvLyBTdXBwb3J0IGZvciBkaXJlY3QgaW1wb3J0KCksIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBvbmx5IGtlcHQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgc29tZW9uZSBpcyBwYXNzaW5nIGluIGEgcHJvbWlzZSBhcyBmaXJzdCBhcmd1bWVudFxuICAgIC8vIFRoZSByZWFjdC1sb2FkYWJsZSBiYWJlbCBwbHVnaW4gd2lsbCB0dXJuIGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKSBpbnRvIGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIC8vIFRvIG1ha2Ugc3VyZSB3ZSBkb24ndCBleGVjdXRlIHRoZSBpbXBvcnQgd2l0aG91dCByZW5kZXJpbmcgZmlyc3RcbiAgICBpZiAoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSAoKT0+ZHluYW1pY09wdGlvbnNcbiAgICAgICAgO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9ucztcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAgICAgLi4uZHluYW1pY09wdGlvbnNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gU3VwcG9ydCBmb3IgcGFzc2luZyBvcHRpb25zLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtsb2FkaW5nOiAoKSA9PiA8cD5Mb2FkaW5nIHNvbWV0aGluZzwvcD59KVxuICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgLi4ubG9hZGFibGVPcHRpb25zLFxuICAgICAgICAuLi5vcHRpb25zXG4gICAgfTtcbiAgICBjb25zdCBzdXNwZW5zZU9wdGlvbnMgPSBsb2FkYWJsZU9wdGlvbnM7XG4gICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfQ09OQ1VSUkVOVF9GRUFUVVJFUykge1xuICAgICAgICAvLyBFcnJvciBpZiByZWFjdCByb290IGlzIG5vdCBlbmFibGVkIGFuZCBgc3VzcGVuc2VgIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZVxuICAgICAgICBpZiAoIXByb2Nlc3MuZW52Ll9fTkVYVF9SRUFDVF9ST09UICYmIHN1c3BlbnNlT3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICAgICAgLy8gVE9ETzogYWRkIGVycm9yIGRvYyB3aGVuIHRoaXMgZmVhdHVyZSBpcyBzdGFibGVcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzdXNwZW5zZSBvcHRpb24gdXNhZ2UgaW4gbmV4dC9keW5hbWljLiBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtZHluYW1pYy1zdXNwZW5zZWApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChzdXNwZW5zZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgcmV0dXJuIGxvYWRhYmxlRm4oc3VzcGVuc2VPcHRpb25zKTtcbiAgICB9XG4gICAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgICBpZiAobG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZFxuICAgICAgICB9O1xuICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkO1xuICAgIH1cbiAgICAvLyBzdXBwb3J0IGZvciBkaXNhYmxpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJyksIHtzc3I6IGZhbHNlfSlcbiAgICBpZiAodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3IgPT09ICdib29sZWFuJykge1xuICAgICAgICBpZiAoIWxvYWRhYmxlT3B0aW9ucy5zc3IpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgICAgICAgICAgcmV0dXJuIG5vU1NSKGxvYWRhYmxlRm4sIGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5zc3I7XG4gICAgfVxuICAgIHJldHVybiBsb2FkYWJsZUZuKGxvYWRhYmxlT3B0aW9ucyk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWR5bmFtaWMuanMubWFwIiwiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBdWRpbyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQXVkaW9cIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Db250YWN0XCI7XG5pbXBvcnQgQ3Vyc29yIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9DdXJzb3JcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Ib21lXCI7XG5pbXBvcnQgTmV3cyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTmV3c1wiO1xuaW1wb3J0IFBvcnRmb2xpbyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvUG9ydGZvbGlvXCI7XG5pbXBvcnQgUHJpY2UgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1ByaWNlXCI7XG5pbXBvcnQgU2tpbGxzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Ta2lsbHNcIjtcbmltcG9ydCBUaW1lbGluZSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvVGltZWxpbmVcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL3NyYy9sYXlvdXQvRm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9zcmMvbGF5b3V0L0hlYWRlclwiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuLi9zcmMvbGF5b3V0L1NldHRpbmdzXCI7XG5pbXBvcnQgUGFnZUhlYWQgZnJvbSBcIi4uL3NyYy9QYWdlSGVhZFwiO1xuXG5jb25zdCBJbmRleCA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zdCBbcG9ydGZvbGlvRGF0YSwgc2V0UG9ydGZvbGlvRGF0YV0gPSB1c2VTdGF0ZShkYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxQYWdlSGVhZCBwYWdlPVwiSG9tZVwiIGRhdGE9e3BvcnRmb2xpb0RhdGF9Lz5cbiAgICAgIDxkaXYgaWQ9XCJvcGVuZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX2FsbF93cmFwXCIgZGF0YS1jb2xvcj1cIm9yYW5nZVwiPlxuICAgICAgICAgIDxTZXR0aW5ncyAvPlxuICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICB7cG9ydGZvbGlvRGF0YSAmJiBwb3J0Zm9saW9EYXRhLnVzZXIgJiYgcG9ydGZvbGlvRGF0YS51c2VyLmFib3V0ICYmIDxIb21lIGRhdGE9e3BvcnRmb2xpb0RhdGF9IC8+fVxuICAgICAgICAgIHtwb3J0Zm9saW9EYXRhICYmIHBvcnRmb2xpb0RhdGEudXNlciAmJiBwb3J0Zm9saW9EYXRhLnVzZXIucG9ydGZvbGlvICYmIDxQb3J0Zm9saW8gZGF0YT17cG9ydGZvbGlvRGF0YX0gLz59XG4gICAgICAgICAge3BvcnRmb2xpb0RhdGEgJiYgcG9ydGZvbGlvRGF0YS51c2VyICYmIHBvcnRmb2xpb0RhdGEudXNlci5za2lsbHMgJiYgPFNraWxscyBkYXRhPXtwb3J0Zm9saW9EYXRhfSAvPn1cbiAgICAgICAgICB7cG9ydGZvbGlvRGF0YSAmJiBwb3J0Zm9saW9EYXRhLnVzZXIgJiYgcG9ydGZvbGlvRGF0YS51c2VyLnRpbWVsaW5lICYmIDxUaW1lbGluZSBkYXRhPXtwb3J0Zm9saW9EYXRhfSAvPn1cbiAgICAgICAgICB7cG9ydGZvbGlvRGF0YSAmJiBwb3J0Zm9saW9EYXRhLnVzZXIgJiYgcG9ydGZvbGlvRGF0YS51c2VyLnNlcnZpY2VzICYmIDxQcmljZSBkYXRhPXtwb3J0Zm9saW9EYXRhfSAvPn1cbiAgICAgICAgICA8TmV3cyAvPlxuICAgICAgICAgIHtwb3J0Zm9saW9EYXRhICYmIHBvcnRmb2xpb0RhdGEudXNlciAmJiBwb3J0Zm9saW9EYXRhLnVzZXIuYWJvdXQgJiYgPENvbnRhY3QgZGF0YT17cG9ydGZvbGlvRGF0YX0gLz59XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgIDxBdWRpbyAvPlxuICAgICAgICAgIDxDdXJzb3IgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgdXNlcklkID0gXCI2NWIzYTIyYzAxZDkwMGU5NmM0MjE5YWVcIjtcbiAgY29uc3QgYXBpVXJsID0gYGh0dHBzOi8vcG9ydGZvbGlvLWJhY2tlbmQtMzBtcC5vbnJlbmRlci5jb20vYXBpL3YxL2dldC91c2VyLyR7dXNlcklkfWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChhcGlVcmwpO1xuICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsXCJkYXRhIFwiKVxuICAgIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB0aGUgZmV0Y2ggb3BlcmF0aW9uOicsIGVycm9yKTtcbiAgICByZXR1cm4geyBwcm9wczogeyBkYXRhOiBudWxsIH0gfTsgXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmNvbnN0IFBhZ2VIZWFkID0gKHsgcGFnZSxkYXRhIH0pID0+IHtcclxuICBjb25zdCB1c2VyTmFtZSA9IGRhdGE/LnVzZXI/LmFib3V0Py5uYW1lIHx8IFwiVXNlclwiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57dXNlck5hbWV9IHwge3BhZ2V9PC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUhlYWQ7XHJcbiIsImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBdWRpbyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8YXVkaW8gaWQ9XCJhdWRpbzFcIj5cclxuICAgICAgICA8c291cmNlIHNyYz1cIi9hdWRpby8xLm1wM1wiIC8+XHJcbiAgICAgIDwvYXVkaW8+XHJcbiAgICAgIDxhdWRpbyBpZD1cImF1ZGlvMlwiPlxyXG4gICAgICAgIDxzb3VyY2Ugc3JjPVwiL2F1ZGlvLzIubXAzXCIgLz5cclxuICAgICAgPC9hdWRpbz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1ZGlvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBDb250YWN0ID0gKHtkYXRhfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2VjdGlvblwiIGlkPVwiY29udGFjdFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fY29udGFjdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fbWFpbl90aXRsZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5Db250YWN0PC9zcGFuPlxyXG4gICAgICAgICAgICA8aDM+R2V0IGluIFRvdWNoPC9oMz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgIFBsZWFzZSBmaWxsIG91dCB0aGUgZm9ybSBvbiB0aGlzIHNlY3Rpb24gdG8gY29udGFjdCB3aXRoIG1lLlxyXG4gICAgICAgICAgICAgICAgICBPciBjYWxsIGJldHdlZW4gOTowMCBhLm0uIGFuZCA4OjAwIHAubS4gRVQsIE1vbmRheSB0aHJvdWdoXHJcbiAgICAgICAgICAgICAgICAgIEZyaWRheVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcnRcIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiQ2FwYV8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUJhY2tncm91bmQ6IFwibmV3IDAgMCA1MTIgNTEyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2ZyByZXBsYWNlZC1zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjU2LDBDMTU2Ljc0OCwwLDc2LDgwLjc0OCw3NiwxODBjMCwzMy41MzQsOS4yODksNjYuMjYsMjYuODY5LDk0LjY1MmwxNDIuODg1LDIzMC4yNTcgICAgYzIuNzM3LDQuNDExLDcuNTU5LDcuMDkxLDEyLjc0NSw3LjA5MWMwLjA0LDAsMC4wNzksMCwwLjExOSwwYzUuMjMxLTAuMDQxLDEwLjA2My0yLjgwNCwxMi43NS03LjI5Mkw0MTAuNjExLDI3Mi4yMiAgICBDNDI3LjIyMSwyNDQuNDI4LDQzNiwyMTIuNTM5LDQzNiwxODBDNDM2LDgwLjc0OCwzNTUuMjUyLDAsMjU2LDB6IE0zODQuODY2LDI1Ni44MThMMjU4LjI3Miw0NjguMTg2bC0xMjkuOTA1LTIwOS4zNCAgICBDMTEzLjczNCwyMzUuMjE0LDEwNS44LDIwNy45NSwxMDUuOCwxODBjMC04Mi43MSw2Ny40OS0xNTAuMiwxNTAuMi0xNTAuMlM0MDYuMSw5Ny4yOSw0MDYuMSwxODAgICAgQzQwNi4xLDIwNy4xMjEsMzk4LjY4OSwyMzMuNjg4LDM4NC44NjYsMjU2LjgxOHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNTYsOTBjLTQ5LjYyNiwwLTkwLDQwLjM3NC05MCw5MGMwLDQ5LjMwOSwzOS43MTcsOTAsOTAsOTBjNTAuOTAzLDAsOTAtNDEuMjMzLDkwLTkwQzM0NiwxMzAuMzc0LDMwNS42MjYsOTAsMjU2LDkweiAgICAgTTI1NiwyNDAuMmMtMzMuMjU3LDAtNjAuMi0yNy4wMzMtNjAuMi02MC4yYzAtMzMuMDg0LDI3LjExNi02MC4yLDYwLjItNjAuMnM2MC4xLDI3LjExNiw2MC4xLDYwLjIgICAgQzMxNi4xLDIxMi42ODMsMjg5Ljc4NCwyNDAuMiwyNTYsMjQwLjJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YT8udXNlcj8uYWJvdXQ/LmFkZHJlc3N9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDczLjgwNiA0NzMuODA2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVCYWNrZ3JvdW5kOiBcIm5ldyAwIDAgNTEyIDUxMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmcgcmVwbGFjZWQtc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM3NC40NTYsMjkzLjUwNmMtOS43LTEwLjEtMjEuNC0xNS41LTMzLjgtMTUuNWMtMTIuMywwLTI0LjEsNS4zLTM0LjIsMTUuNGwtMzEuNiwzMS41Yy0yLjYtMS40LTUuMi0yLjctNy43LTQgICAgYy0zLjYtMS44LTctMy41LTkuOS01LjNjLTI5LjYtMTguOC01Ni41LTQzLjMtODIuMy03NWMtMTIuNS0xNS44LTIwLjktMjkuMS0yNy00Mi42YzguMi03LjUsMTUuOC0xNS4zLDIzLjItMjIuOCAgICBjMi44LTIuOCw1LjYtNS43LDguNC04LjVjMjEtMjEsMjEtNDguMiwwLTY5LjJsLTI3LjMtMjcuM2MtMy4xLTMuMS02LjMtNi4zLTkuMy05LjVjLTYtNi4yLTEyLjMtMTIuNi0xOC44LTE4LjYgICAgYy05LjctOS42LTIxLjMtMTQuNy0zMy41LTE0LjdzLTI0LDUuMS0zNCwxNC43Yy0wLjEsMC4xLTAuMSwwLjEtMC4yLDAuMmwtMzQsMzQuM2MtMTIuOCwxMi44LTIwLjEsMjguNC0yMS43LDQ2LjUgICAgYy0yLjQsMjkuMiw2LjIsNTYuNCwxMi44LDc0LjJjMTYuMiw0My43LDQwLjQsODQuMiw3Ni41LDEyNy42YzQzLjgsNTIuMyw5Ni41LDkzLjYsMTU2LjcsMTIyLjdjMjMsMTAuOSw1My43LDIzLjgsODgsMjYgICAgYzIuMSwwLjEsNC4zLDAuMiw2LjMsMC4yYzIzLjEsMCw0Mi41LTguMyw1Ny43LTI0LjhjMC4xLTAuMiwwLjMtMC4zLDAuNC0wLjVjNS4yLTYuMywxMS4yLTEyLDE3LjUtMTguMWM0LjMtNC4xLDguNy04LjQsMTMtMTIuOSAgICBjOS45LTEwLjMsMTUuMS0yMi4zLDE1LjEtMzQuNmMwLTEyLjQtNS4zLTI0LjMtMTUuNC0zNC4zTDM3NC40NTYsMjkzLjUwNnogTTQxMC4yNTYsMzk4LjgwNiAgICBDNDEwLjE1NiwzOTguODA2LDQxMC4xNTYsMzk4LjkwNiw0MTAuMjU2LDM5OC44MDZjLTMuOSw0LjItNy45LDgtMTIuMiwxMi4yYy02LjUsNi4yLTEzLjEsMTIuNy0xOS4zLDIwICAgIGMtMTAuMSwxMC44LTIyLDE1LjktMzcuNiwxNS45Yy0xLjUsMC0zLjEsMC00LjYtMC4xYy0yOS43LTEuOS01Ny4zLTEzLjUtNzgtMjMuNGMtNTYuNi0yNy40LTEwNi4zLTY2LjMtMTQ3LjYtMTE1LjYgICAgYy0zNC4xLTQxLjEtNTYuOS03OS4xLTcyLTExOS45Yy05LjMtMjQuOS0xMi43LTQ0LjMtMTEuMi02Mi42YzEtMTEuNyw1LjUtMjEuNCwxMy44LTI5LjdsMzQuMS0zNC4xYzQuOS00LjYsMTAuMS03LjEsMTUuMi03LjEgICAgYzYuMywwLDExLjQsMy44LDE0LjYsN2MwLjEsMC4xLDAuMiwwLjIsMC4zLDAuM2M2LjEsNS43LDExLjksMTEuNiwxOCwxNy45YzMuMSwzLjIsNi4zLDYuNCw5LjUsOS43bDI3LjMsMjcuMyAgICBjMTAuNiwxMC42LDEwLjYsMjAuNCwwLDMxYy0yLjksMi45LTUuNyw1LjgtOC42LDguNmMtOC40LDguNi0xNi40LDE2LjYtMjUuMSwyNC40Yy0wLjIsMC4yLTAuNCwwLjMtMC41LDAuNSAgICBjLTguNiw4LjYtNywxNy01LjIsMjIuN2MwLjEsMC4zLDAuMiwwLjYsMC4zLDAuOWM3LjEsMTcuMiwxNy4xLDMzLjQsMzIuMyw1Mi43bDAuMSwwLjFjMjcuNiwzNCw1Ni43LDYwLjUsODguOCw4MC44ICAgIGM0LjEsMi42LDguMyw0LjcsMTIuMyw2LjdjMy42LDEuOCw3LDMuNSw5LjksNS4zYzAuNCwwLjIsMC44LDAuNSwxLjIsMC43YzMuNCwxLjcsNi42LDIuNSw5LjksMi41YzguMywwLDEzLjUtNS4yLDE1LjItNi45ICAgIGwzNC4yLTM0LjJjMy40LTMuNCw4LjgtNy41LDE1LjEtNy41YzYuMiwwLDExLjMsMy45LDE0LjQsNy4zYzAuMSwwLjEsMC4xLDAuMSwwLjIsMC4ybDU1LjEsNTUuMSAgICBDNDIwLjQ1NiwzNzcuNzA2LDQyMC40NTYsMzg4LjIwNiw0MTAuMjU2LDM5OC44MDZ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNTYuMDU2LDExMi43MDZjMjYuMiw0LjQsNTAsMTYuOCw2OSwzNS44czMxLjMsNDIuOCwzNS44LDY5YzEuMSw2LjYsNi44LDExLjIsMTMuMywxMS4yYzAuOCwwLDEuNS0wLjEsMi4zLTAuMiAgICBjNy40LTEuMiwxMi4zLTguMiwxMS4xLTE1LjZjLTUuNC0zMS43LTIwLjQtNjAuNi00My4zLTgzLjVzLTUxLjgtMzcuOS04My41LTQzLjNjLTcuNC0xLjItMTQuMywzLjctMTUuNiwxMSAgICBTMjQ4LjY1NiwxMTEuNTA2LDI1Ni4wNTYsMTEyLjcwNnpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ3My4yNTYsMjA5LjAwNmMtOC45LTUyLjItMzMuNS05OS43LTcxLjMtMTM3LjVzLTg1LjMtNjIuNC0xMzcuNS03MS4zYy03LjMtMS4zLTE0LjIsMy43LTE1LjUsMTEgICAgYy0xLjIsNy40LDMuNywxNC4zLDExLjEsMTUuNmM0Ni42LDcuOSw4OS4xLDMwLDEyMi45LDYzLjdjMzMuOCwzMy44LDU1LjgsNzYuMyw2My43LDEyMi45YzEuMSw2LjYsNi44LDExLjIsMTMuMywxMS4yICAgIGMwLjgsMCwxLjUtMC4xLDIuMy0wLjJDNDY5LjU1NiwyMjMuMzA2LDQ3NC41NTYsMjE2LjMwNiw0NzMuMjU2LDIwOS4wMDZ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YT8udXNlcj8uYWJvdXQ/LnBob25lTnVtYmVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVCYWNrZ3JvdW5kPVwibmV3IDAgMCA0NzkuMDU4IDQ3OS4wNThcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ3OS4wNTggNDc5LjA1OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnIHJlcGxhY2VkLXN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtNDM0LjE0NiA1OS44ODJoLTM4OS4yMzRjLTI0Ljc2NiAwLTQ0LjkxMiAyMC4xNDYtNDQuOTEyIDQ0LjkxMnYyNjkuNDdjMCAyNC43NjYgMjAuMTQ2IDQ0LjkxMiA0NC45MTIgNDQuOTEyaDM4OS4yMzRjMjQuNzY2IDAgNDQuOTEyLTIwLjE0NiA0NC45MTItNDQuOTEydi0yNjkuNDdjMC0yNC43NjYtMjAuMTQ2LTQ0LjkxMi00NC45MTItNDQuOTEyem0wIDI5Ljk0MWMyLjAzNCAwIDMuOTY5LjQyMiA1LjczOCAxLjE1OWwtMjAwLjM1NSAxNzMuNjQ5LTIwMC4zNTYtMTczLjY0OWMxLjc2OS0uNzM2IDMuNzA0LTEuMTU5IDUuNzM4LTEuMTU5em0wIDI5OS40MTFoLTM4OS4yMzRjLTguMjYgMC0xNC45NzEtNi43MS0xNC45NzEtMTQuOTcxdi0yNTEuNjQ4bDE5OS43NzggMTczLjE0MWMyLjgyMiAyLjQ0MSA2LjMxNiAzLjY1NSA5LjgxIDMuNjU1czYuOTg4LTEuMjEzIDkuODEtMy42NTVsMTk5Ljc3OC0xNzMuMTQxdjI1MS42NDljLS4wMDEgOC4yNi02LjcxMSAxNC45Ny0xNC45NzEgMTQuOTd6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YT8udXNlcj8uZW1haWx9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDc5LjQ0NyA0NzkuNDQ3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVCYWNrZ3JvdW5kOiBcIm5ldyAwIDAgNTEyIDUxMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmcgcmVwbGFjZWQtc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIzOS40NDYsMC4wMjJjLTguNTk0LDAtMTcuMTgyLDAuNDYyLTI1LjcyNywxLjM4M2MtNy44MzIsMC44LTE1LjU2OCwyLjExMi0yMy4yLDMuNzA0ICAgIGMtMS40NzcsMC4zMDktMi45NTUsMC42MzUtNC40MzIsMC45NzZDMTQxLjEyLDE2LjMyMywxMDAuMDYsMzkuMzE0LDY3LjgzMSw3Mi4zMDFjLTIuOTk3LDMuMDcyLTUuOTMxLDYuMjM1LTguOCw5LjQ4OCAgICBjLTg3LjA2LDk5Ljk0OC03Ni42MTIsMjUxLjU0OCwyMy4zMzcsMzM4LjYwOGM5NS42ODgsODMuMzQ5LDIzOS43MjMsNzcuODAzLDMyOC43MTktMTIuNjU2YzMuMDAzLTMuMDcyLDUuOTM2LTYuMjM1LDguOC05LjQ4OCAgICBjMzguNDIxLTQzLjc1NCw1OS41OTQtMTAwLjAwMyw1OS41Ni0xNTguMjMyQzQ3OS40NDcsMTA3LjQ3MiwzNzEuOTk1LDAuMDIxLDIzOS40NDYsMC4wMjJ6IE03OC40OTUsODQuMzAxICAgIGMxLjI2NC0xLjMxMiwyLjU3Ni0yLjU2OCwzLjg2NC0zLjg0YzEuNDg4LTEuNDY0LDIuOTY4LTIuOTM2LDQuNDg4LTQuMzUyYzEuMzM2LTEuMjQ4LDIuNzEyLTIuNDQ4LDQuMDgtMy42NjQgICAgYzEuNTQ0LTEuMzY4LDMuMDgtMi43MzYsNC42NjQtNC4wNTZjMS4zOTItMS4xNzYsMi44MjQtMi4zMDQsNC4yNDgtMy40NGMxLjYtMS4yOCwzLjItMi41Niw0Ljg0OC0zLjc5MiAgICBjMS40NTYtMS4wOTYsMi45MzYtMi4xNiw0LjQyNC0zLjJjMS42NTYtMS4xODQsMy4zMi0yLjQsNS4wMDgtMy41MDRjMS41MTItMS4wMjQsMy4wNC0yLjAxNiw0LjU3Ni0zICAgIGMxLjcxMi0xLjA5NiwzLjQzMi0yLjE3Niw1LjE2OC0zLjJjMS41NjMtMC45MzMsMy4xMzYtMS44NTEsNC43Mi0yLjc1MmMxLjc3MS0xLjAwOCwzLjU0OS0xLjk5Miw1LjMzNi0yLjk1MiAgICBjMS42LTAuODUzLDMuMi0xLjY4OCw0LjgtMi41MDRjMS44MjQtMC45MiwzLjY2NC0xLjgwOCw1LjUxMi0yLjY4YzEuNi0wLjc2LDMuMjY0LTEuNTIsNC45MTItMi4yNGMxLjg4LTAuOCwzLjc4NC0xLjYsNS42ODgtMi40ICAgIGMxLjY1Ni0wLjY4LDMuMzA0LTEuMzQ0LDQuOTc2LTEuOTg0YzEuOTM2LTAuNzM2LDMuODk2LTEuNDI0LDUuODU2LTIuMTEyYzEuNjcyLTAuNTg0LDMuMzQ0LTEuMTY4LDUuMDQtMS43MiAgICBjMS45OTItMC42NCw0LTEuMjMyLDYuMDE2LTEuODE2YzEuNjg4LTAuNDg4LDMuMzYtMC45OTIsNS4wNTYtMS40NDhjMC42NDgtMC4xNjgsMS4yOTYtMC4zMDQsMS45NDQtMC40NzIgICAgYy0yMy42OCwyMi45OTMtNDEuMjUzLDUxLjUyOS01MS4xMjgsODMuMDI0Yy0xOC45ODgtNS4wMDgtMzcuMzctMTIuMDgyLTU0LjgxNi0yMS4wOTZDNzguMDM5LDg0LjgyMSw3OC4yNjMsODQuNTQxLDc4LjQ5NSw4NC4zMDEgICAgeiBNNjYuOTkxLDk3LjE4MWMxOS4yMTcsMTAuNDEyLDM5LjU5NSwxOC41MjIsNjAuNzEyLDI0LjE2Yy0xMC4zNTIsMzUuOTk2LTE1Ljc4Niw3My4yMjctMTYuMTUyLDExMC42OGgtOTUuOTIgICAgQzE3LjM3NCwxODIuNjMyLDM1LjQzNSwxMzUuMjE0LDY2Ljk5MSw5Ny4xODF6IE02Ni45OTEsMzgyLjg2MWMtMzEuNTU0LTM4LjAzNC00OS42MTUtODUuNDUyLTUxLjM2LTEzNC44NGg5NS45MiAgICBjMC4zNjYsMzcuNDUzLDUuNzk5LDc0LjY4NCwxNi4xNTIsMTEwLjY4QzEwNi41ODcsMzY0LjM0MSw4Ni4yMDksMzcyLjQ1LDY2Ljk5MSwzODIuODYxeiBNMTgxLjcyNyw0NTYuNDI5ICAgIGMtMS42MTYtMC40MDgtMy4yODgtMC45MzYtNC45NTItMS40MjRjLTIuMDI0LTAuNTkyLTQuMDU2LTEuMTg0LTYuMDU2LTEuODMyYy0xLjY4OC0wLjU0NC0zLjM1Mi0xLjEyOC01LjAxNi0xLjcxMiAgICBjLTEuOTY4LTAuNjgtMy45MzYtMS4zNzYtNS44OC0yLjEyYy0xLjY2NC0wLjYzMi0zLjMwNC0xLjI5Ni00Ljk1Mi0xLjk2OGMtMS45MTItMC44LTMuODI0LTEuNi01LjcyLTIuNCAgICBjLTEuNjMyLTAuNzItMy4yNTYtMS40NjEtNC44NzItMi4yMjRjLTEuODY0LTAuODgtMy43Mi0xLjc3Ni01LjYtMi43MDRjLTEuNi0wLjgtMy4yLTEuNi00LjgtMi40NzIgICAgYy0xLjgwOC0wLjk2OC0zLjYtMS45Ni01LjM5Mi0yLjk4NGMtMS42LTAuODg4LTMuMTItMS44LTQuNjY0LTIuNzI4Yy0xLjc2LTEuMDU2LTMuNDg4LTIuMTQ0LTUuMjE2LTMuMjU2ICAgIGMtMS41Mi0wLjk2OC0zLjA0LTEuOTUyLTQuNTM2LTIuOTZjLTEuNzA0LTEuMTUyLTMuMzkyLTIuMzUyLTUuMDY0LTMuNTUyYy0xLjQ2NC0xLjA0OC0yLjkyOC0yLjA5Ni00LjM2OC0zLjIgICAgYy0xLjY1Ni0xLjI0OC0zLjI4LTIuNTM2LTQuODk2LTMuODMyYy0xLjQxNi0xLjEyOC0yLjgyNC0yLjI0OC00LjIwOC0zLjQwOGMtMS42LTEuMzI4LTMuMTQ0LTIuNzEyLTQuNjk2LTQuMDg4ICAgIGMtMS4zNi0xLjIwOC0yLjcyOC0yLjQtNC4wNTYtMy42MzJjLTEuNTI4LTEuNDI0LTMuMDA4LTIuOTA0LTQuNDk2LTQuMzY4Yy0xLjI4OC0xLjI3Mi0yLjYtMi41MjgtMy44NjQtMy44MzIgICAgYy0wLjIzMi0wLjI0OC0wLjQ1Ni0wLjUwNC0wLjY4OC0wLjc0NGMxNy40NDUtOS4wMTgsMzUuODI3LTE2LjA5NSw1NC44MTYtMjEuMTA0YzkuODc3LDMxLjQ5NCwyNy40NDksNjAuMDI5LDUxLjEyOCw4My4wMjQgICAgQzE4My4wMzEsNDU2Ljc0MSwxODIuMzc1LDQ1Ni42MDUsMTgxLjcyNyw0NTYuNDI5eiBNMjMxLjQ0Nyw0NjMuMzg5Yy0zNC4yMzItNC44NjQtNjQuMjQtNDAuNTkyLTgzLjEyLTkzLjM1MiAgICBjMjcuMjk2LTYuMTEyLDU1LjE1MS05LjM5MSw4My4xMi05Ljc4NFY0NjMuMzg5eiBNMjMxLjQ0NywzNDQuMjUzYy0yOS42NywwLjM5LTU5LjIxNSwzLjkxNC04OC4xNDQsMTAuNTEyICAgIGMtMTAuMDQ1LTM0LjcwNy0xNS4zNDQtNzAuNjE1LTE1Ljc1Mi0xMDYuNzQ0aDEwMy44OTZWMzQ0LjI1M3ogTTIzMS40NDcsMjMyLjAyMUgxMjcuNTUxICAgIGMwLjQwNy0zNi4xMjksNS43MDYtNzIuMDM3LDE1Ljc1Mi0xMDYuNzQ0YzI4LjkyOSw2LjU5Nyw1OC40NzUsMTAuMTIxLDg4LjE0NCwxMC41MTJWMjMyLjAyMXogTTIzMS40NDcsMTE5Ljc4OSAgICBjLTI3Ljk3LTAuMzktNTUuODI0LTMuNjY5LTgzLjEyLTkuNzg0YzE4Ljg4LTUyLjc2LDQ4Ljg4OC04OC40ODgsODMuMTItOTMuMzUyVjExOS43ODl6IE00MTEuOTAzLDk3LjE4MSAgICBjMzEuNTU0LDM4LjAzNCw0OS42MTUsODUuNDUyLDUxLjM2LDEzNC44NGgtOTUuOTJjLTAuMzY2LTM3LjQ1My01Ljc5OS03NC42ODQtMTYuMTUyLTExMC42OCAgICBDMzcyLjMwNywxMTUuNywzOTIuNjg1LDEwNy41OTEsNDExLjkwMyw5Ny4xODF6IE0yOTcuMTAzLDIzLjYwNWMxLjY4LDAuNDE2LDMuMzUyLDAuOTQ0LDUuMDE2LDEuNDMyICAgIGMyLjAyNCwwLjU5Miw0LjA1NiwxLjE4NCw2LjA1NiwxLjgzMmMxLjY4OCwwLjU0NCwzLjM1MiwxLjEyOCw1LjAxNiwxLjcxMmMxLjk2OCwwLjY4LDMuOTM2LDEuMzc2LDUuODgsMi4xMiAgICBjMS42NjQsMC42MzIsMy4zMDQsMS4yOTYsNC45NTIsMS45NjhjMS45MTIsMC44LDMuODI0LDEuNiw1LjcyLDIuNGMxLjYzMiwwLjcyLDMuMjU2LDEuNDYxLDQuODcyLDIuMjI0ICAgIGMxLjg2NCwwLjg4LDMuNzIsMS43NzYsNS42LDIuNzA0YzEuNiwwLjgsMy4yLDEuNiw0LjgsMi40NzJjMS44MDgsMC45NjgsMy42LDEuOTYsNS4zOTIsMi45ODRjMS42LDAuODg4LDMuMTIsMS44LDQuNjY0LDIuNzI4ICAgIGMxLjc2LDEuMDU2LDMuNDg4LDIuMTQ0LDUuMjE2LDMuMjU2YzEuNTIsMC45NjgsMy4wNCwxLjk1Miw0LjUzNiwyLjk2YzEuNzA0LDEuMTUyLDMuMzg0LDIuMzQ0LDUuMDU2LDMuNTQ0ICAgIGMxLjQ3MiwxLjA0OCwyLjkzNiwyLjEwNCw0LjM4NCwzLjJjMS42NDgsMS4yNCwzLjI2NCwyLjUyOCw0Ljg4OCwzLjgyNGMxLjQwOCwxLjEyLDIuODI0LDIuMjQsNC4yMDgsMy40MDggICAgYzEuNiwxLjMyOCwzLjE0NCwyLjcxMiw0LjY5Niw0LjA4OGMxLjM2LDEuMjA4LDIuNzI4LDIuNCw0LjA1NiwzLjYzMmMxLjUyOCwxLjQyNCwzLjAwOCwyLjkwNCw0LjQ5Niw0LjM2OCAgICBjMS4yODgsMS4yNzIsMi42LDIuNTI4LDMuODY0LDMuODMyYzAuMjMyLDAuMjQ4LDAuNDU2LDAuNTA0LDAuNjg4LDAuNzQ0Yy0xNy40NDUsOS4wMTgtMzUuODI3LDE2LjA5NS01NC44MTYsMjEuMTA0ICAgIGMtOS44OTYtMzEuNDk4LTI3LjQ5MS02MC4wMzEtNTEuMTkyLTgzLjAxNkMyOTUuNzk5LDIzLjI5MywyOTYuNDU1LDIzLjQyOSwyOTcuMTAzLDIzLjYwNXogTTI0Ny40NDcsMTYuNjUzICAgIGMzNC4yMzIsNC44NjQsNjQuMjQsNDAuNTkyLDgzLjEyLDkzLjM1MmMtMjcuMjk2LDYuMTEyLTU1LjE1MSw5LjM5MS04My4xMiw5Ljc4NFYxNi42NTN6IE0yNDcuNDQ3LDEzNS43ODkgICAgYzI5LjY3LTAuMzksNTkuMjE1LTMuOTE0LDg4LjE0NC0xMC41MTJjMTAuMDQ1LDM0LjcwNywxNS4zNDQsNzAuNjE1LDE1Ljc1MiwxMDYuNzQ0SDI0Ny40NDdWMTM1Ljc4OXogTTI0Ny40NDcsMjQ4LjAyMWgxMDMuODk2ICAgIGMtMC40MDcsMzYuMTI5LTUuNzA2LDcyLjAzNy0xNS43NTIsMTA2Ljc0NGgwYy0yOC45MjktNi41OTctNTguNDc0LTEwLjEyMS04OC4xNDQtMTAuNTEyVjI0OC4wMjF6IE0yNDcuNDQ3LDQ2My4zODlWMzYwLjI1MyAgICBjMjcuOTcsMC4zOSw1NS44MjQsMy42NjksODMuMTIsOS43ODRDMzExLjY4Nyw0MjIuNzk3LDI4MS42NzksNDU4LjUyNSwyNDcuNDQ3LDQ2My4zODl6IE00MDAuMzk5LDM5NS43NDEgICAgYy0xLjI2NCwxLjMwNC0yLjU2OCwyLjU2LTMuODU2LDMuODMyYy0xLjQ4OCwxLjQ2NC0yLjk3NiwyLjk0NC00LjUwNCw0LjM2OGMtMS4zMjgsMS4yNC0yLjY5NiwyLjQtNC4wNTYsMy42NCAgICBjLTEuNTUyLDEuMzc2LTMuMDk2LDIuNzUyLTQuNjgsNC4wOGMtMS40LDEuMTY4LTIuODI0LDIuMjk2LTQuMjQ4LDMuNDMyYy0xLjYsMS4yOC0zLjIsMi41Ni00Ljg0OCwzLjc5MiAgICBjLTEuNDU2LDEuMDk2LTIuOTM2LDIuMTYtNC40MjQsMy4yYy0xLjY1NiwxLjE4NC0zLjMyLDIuNC01LjAwOCwzLjUwNGMtMS41MTIsMS4wMjQtMy4wNCwyLjAxNi00LjU3NiwyLjk5MiAgICBjLTEuNzEyLDEuMTA0LTMuNDM3LDIuMTcxLTUuMTc2LDMuMmMtMS42LDAuOTM2LTMuMTI4LDEuODQ4LTQuNzA0LDIuNzUyYy0xLjc3MSwxLjAwOC0zLjU1MiwxLjk5Mi01LjM0NCwyLjk1MiAgICBjLTEuNiwwLjg1My0zLjIsMS42ODgtNC44LDIuNTA0Yy0xLjgyNCwwLjkyLTMuNjY0LDEuODA4LTUuNTEyLDIuNjhjLTEuNiwwLjc2LTMuMjY0LDEuNTItNC45MTIsMi4yNCAgICBjLTEuODgsMC44LTMuNzg0LDEuNi01LjY4OCwyLjRjLTEuNjU2LDAuNjcyLTMuMzA0LDEuMzQ0LTQuOTY4LDEuOTc2Yy0xLjk1MiwwLjc0NC0zLjkxMiwxLjQ0LTUuODgsMi4xMiAgICBjLTEuNjY0LDAuNTg0LTMuMzI4LDEuMTY4LTUuMDE2LDEuNzEyYy0yLDAuNjQ4LTQsMS4yNC02LjA0LDEuODI0Yy0xLjY3MiwwLjQ5Ni0zLjM1MiwwLjk5Mi01LjA0LDEuNDQ4ICAgIGMtMC42NDgsMC4xNjgtMS4yOTYsMC4zMDQtMS45NDQsMC40NzJjMjMuNjgtMjIuOTkzLDQxLjI1My01MS41MjksNTEuMTI4LTgzLjAyNGMxOC45ODgsNS4wMDgsMzcuMzcsMTIuMDgyLDU0LjgxNiwyMS4wOTYgICAgQzQwMC44NTUsMzk1LjIyMSw0MDAuNjMxLDM5NS41MDEsNDAwLjM5OSwzOTUuNzQxeiBNNDExLjkwMywzODIuODYxYy0xOS4yMTctMTAuNDEyLTM5LjU5NS0xOC41MjItNjAuNzEyLTI0LjE2ICAgIGMxMC4zNTItMzUuOTk2LDE1Ljc4Ni03My4yMjcsMTYuMTUyLTExMC42OGg5NS45MkM0NjEuNTIxLDI5Ny40MDksNDQzLjQ1OSwzNDQuODI4LDQxMS45MDMsMzgyLjg2MXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnd3dy5kb21haW4uY29tPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkc1wiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiL1wiXHJcbiAgICAgICAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb250YWN0X2Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICBpZD1cImNvbnRhY3RfZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXR1cm5tZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXN1Y2Nlc3M9XCJZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gcmVjZWl2ZWQsIFdlIHdpbGwgY29udGFjdCB5b3Ugc29vbi5cIlxyXG4gICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW1wdHlfbm90aWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+UGxlYXNlIEZpbGwgUmVxdWlyZWQgRmllbGRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIk1lc3NhZ2VcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX2J1dHRvblwiIGRhdGEtcG9zaXRpb249XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2VuZF9tZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlN1Ym1pdDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdDtcclxuIiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1tb2RhbFwiO1xyXG5leHBvcnQgY29uc3QgTmV3c01vZGFsID0gKHsgb3Blbiwgb25DbG9zZU1vZGFsLCBpbWcsIHRpdGxlLCBkYXRlIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1vZGFsIG9wZW49e29wZW59IG9uQ2xvc2U9eygpID0+IG9uQ2xvc2VNb2RhbCgpfSBjZW50ZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94X2lubmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbl93cmFwXCIgc3R5bGU9e3sgcGFkZGluZzogXCIzMHB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfcG9wdXBfaW5mb3JtYXRpb25zXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAge2RhdGUgJiYgPHNwYW4+e2RhdGV9PC9zcGFuPn1cclxuICAgICAgICAgICAgICA8aDM+e3RpdGxlID8gdGl0bGUgOiBgVlMgQ29kZSBHZXRzIE5ldyBKYXZhU2NyaXB0IERlYnVnZ2VyYH08L2gzPlxyXG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIEt1cmEgaXMgYSBsZWFkaW5nIHdlYiBkZXNpZ24gYWdlbmN5IHdpdGggYW4gYXdhcmQtd2lubmluZyBkZXNpZ25cclxuICAgICAgICAgICAgICAgIHRlYW0gdGhhdCBjcmVhdGVzIGlubm92YXRpdmUsIGVmZmVjdGl2ZSB3ZWJzaXRlcyB0aGF0IGNhcHR1cmVcclxuICAgICAgICAgICAgICAgIHlvdXIgYnJhbmQsIGltcHJvdmUgeW91ciBjb252ZXJzaW9uIHJhdGVzLCBhbmQgbWF4aW1pemUgeW91clxyXG4gICAgICAgICAgICAgICAgcmV2ZW51ZSB0byBoZWxwIGdyb3cgeW91ciBidXNpbmVzcyBhbmQgYWNoaWV2ZSB5b3VyIGdvYWxzLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIEluIHRvZGF54oCZcyBkaWdpdGFsIHdvcmxkLCB5b3VyIHdlYnNpdGUgaXMgdGhlIGZpcnN0IGludGVyYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdW1lcnMgaGF2ZSB3aXRoIHlvdXIgYnVzaW5lc3MuIFRoYXQncyB3aHkgYWxtb3N0IDk1IHBlcmNlbnRcclxuICAgICAgICAgICAgICAgIG9mIGEgdXNlcuKAmXMgZmlyc3QgaW1wcmVzc2lvbiByZWxhdGVzIHRvIHdlYiBkZXNpZ24uIEl04oCZcyBhbHNvXHJcbiAgICAgICAgICAgICAgICB3aHkgd2ViIGRlc2lnbiBzZXJ2aWNlcyBjYW4gaGF2ZSBhbiBpbW1lbnNlIGltcGFjdCBvbiB5b3VyXHJcbiAgICAgICAgICAgICAgICBjb21wYW554oCZcyBib3R0b20gbGluZS5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBUaGF04oCZcyB3aHkgbW9yZSBjb21wYW5pZXMgYXJlIG5vdCBvbmx5IHJlZXZhbHVhdGluZyB0aGVpclxyXG4gICAgICAgICAgICAgICAgd2Vic2l0ZeKAmXMgZGVzaWduIGJ1dCBhbHNvIHBhcnRuZXJpbmcgd2l0aCBLdXJhLCB0aGUgd2ViIGRlc2lnblxyXG4gICAgICAgICAgICAgICAgYWdlbmN5IHRoYXTigJlzIGRyaXZlbiBtb3JlIHRoYW4gJDIuNCBiaWxsaW9uIGluIHJldmVudWUgZm9yIGl0c1xyXG4gICAgICAgICAgICAgICAgY2xpZW50cy4gV2l0aCBvdmVyIDUwIHdlYiBkZXNpZ24gYXdhcmRzIHVuZGVyIG91ciBiZWx0LCB3ZSdyZVxyXG4gICAgICAgICAgICAgICAgY29uZmlkZW50IHdlIGNhbiBkZXNpZ24gYSBjdXN0b20gd2Vic2l0ZSB0aGF0IGRyaXZlcyBzYWxlcyBmb3JcclxuICAgICAgICAgICAgICAgIHlvdXIgdW5pcXVlIGJ1c2luZXNzLlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBIb21lTW9kYWwgPSAoeyBvcGVuLCBvbkNsb3NlTW9kYWwsIGltZywgdGl0bGUsIGRhdGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TW9kYWwgb3Blbj17b3Blbn0gb25DbG9zZT17KCkgPT4gb25DbG9zZU1vZGFsKCl9IGNlbnRlcj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hfaW5uZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uX3dyYXBcIiBzdHlsZT17eyBwYWRkaW5nOiBcIjMwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19wb3B1cF9pbmZvcm1hdGlvbnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICB7ZGF0ZSAmJiA8c3Bhbj57ZGF0ZX08L3NwYW4+fVxyXG4gICAgICAgICAgICAgIDxoMz57dGl0bGUgPyB0aXRsZSA6IGBWUyBDb2RlIEdldHMgTmV3IEphdmFTY3JpcHQgRGVidWdnZXJgfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwX2luZm9ybWF0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBLdXJhIGlzIGEgbGVhZGluZyB3ZWIgZGVzaWduIGFnZW5jeSB3aXRoIGFuIGF3YXJkLXdpbm5pbmdcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ24gdGVhbSB0aGF0IGNyZWF0ZXMgaW5ub3ZhdGl2ZSwgZWZmZWN0aXZlIHdlYnNpdGVzIHRoYXRcclxuICAgICAgICAgICAgICAgICAgICBjYXB0dXJlIHlvdXIgYnJhbmQsIGltcHJvdmUgeW91ciBjb252ZXJzaW9uIHJhdGVzLCBhbmRcclxuICAgICAgICAgICAgICAgICAgICBtYXhpbWl6ZSB5b3VyIHJldmVudWUgdG8gaGVscCBncm93IHlvdXIgYnVzaW5lc3MgYW5kIGFjaGlldmVcclxuICAgICAgICAgICAgICAgICAgICB5b3VyIGdvYWxzLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIEluIHRvZGF54oCZcyBkaWdpdGFsIHdvcmxkLCB5b3VyIHdlYnNpdGUgaXMgdGhlIGZpcnN0XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb24gY29uc3VtZXJzIGhhdmUgd2l0aCB5b3VyIGJ1c2luZXNzLiBUaGF0J3Mgd2h5XHJcbiAgICAgICAgICAgICAgICAgICAgYWxtb3N0IDk1IHBlcmNlbnQgb2YgYSB1c2Vy4oCZcyBmaXJzdCBpbXByZXNzaW9uIHJlbGF0ZXMgdG9cclxuICAgICAgICAgICAgICAgICAgICB3ZWIgZGVzaWduLiBJdOKAmXMgYWxzbyB3aHkgd2ViIGRlc2lnbiBzZXJ2aWNlcyBjYW4gaGF2ZSBhblxyXG4gICAgICAgICAgICAgICAgICAgIGltbWVuc2UgaW1wYWN0IG9uIHlvdXIgY29tcGFueeKAmXMgYm90dG9tIGxpbmUuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgVGhhdOKAmXMgd2h5IG1vcmUgY29tcGFuaWVzIGFyZSBub3Qgb25seSByZWV2YWx1YXRpbmcgdGhlaXJcclxuICAgICAgICAgICAgICAgICAgICB3ZWJzaXRl4oCZcyBkZXNpZ24gYnV0IGFsc28gcGFydG5lcmluZyB3aXRoIEt1cmEsIHRoZSB3ZWJcclxuICAgICAgICAgICAgICAgICAgICBkZXNpZ24gYWdlbmN5IHRoYXTigJlzIGRyaXZlbiBtb3JlIHRoYW4gJDIuNCBiaWxsaW9uIGluXHJcbiAgICAgICAgICAgICAgICAgICAgcmV2ZW51ZSBmb3IgaXRzIGNsaWVudHMuIFdpdGggb3ZlciA1MCB3ZWIgZGVzaWduIGF3YXJkc1xyXG4gICAgICAgICAgICAgICAgICAgIHVuZGVyIG91ciBiZWx0LCB3ZSdyZSBjb25maWRlbnQgd2UgY2FuIGRlc2lnbiBhIGN1c3RvbVxyXG4gICAgICAgICAgICAgICAgICAgIHdlYnNpdGUgdGhhdCBkcml2ZXMgc2FsZXMgZm9yIHlvdXIgdW5pcXVlIGJ1c2luZXNzLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L01vZGFsPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3VzdG9tQ3Vyc29yIH0gZnJvbSBcIi4uL3V0aWxpdHNcIjtcclxuXHJcbmNvbnN0IEN1cnNvciA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY3VzdG9tQ3Vyc29yKCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3VzZS1jdXJzb3IgY3Vyc29yLW91dGVyXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW91c2UtY3Vyc29yIGN1cnNvci1pbm5lclwiPjwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3Vyc29yO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIb21lTW9kYWwgfSBmcm9tIFwiLi9Db250ZW50TW9kYWxcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vZGFsVmFsdWUsIHNldE1vZGFsVmFsdWVdID0gdXNlU3RhdGUoe1xyXG4gICAgaW1nOiBudWxsLFxyXG4gICAgdGl0bGU6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uT3Blbk1vZGFsID0gKGltZywgdGl0bGUpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICBzZXRNb2RhbFZhbHVlKHsgaW1nLCB0aXRsZSB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIHNldE1vZGFsVmFsdWUoeyBpbWc6IG51bGwsIHRpdGxlOiBcIlwiIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIENoZWNrIGlmIGRhdGEgaXMgYXZhaWxhYmxlIGJlZm9yZSBhY2Nlc3NpbmcgaXRzIHByb3BlcnRpZXNcclxuICBjb25zdCB1c2VyTmFtZSA9IGRhdGE/LnVzZXI/LmFib3V0Py5uYW1lIHx8IFwiVXNlclwiO1xyXG4gIGNvbnN0IHN1YlRpdGxlID0gZGF0YT8udXNlcj8uYWJvdXQ/LnN1YlRpdGxlIHx8IFwiU3VidGl0bGVcIjtcclxuICBjb25zdCBhdmF0YXJVcmwgPSBkYXRhPy51c2VyPy5hYm91dD8uYXZhdGFyPy51cmwgfHwgXCIvZGVmYXVsdC1hdmF0YXIuanBnXCI7XHJcbiAgY29uc3QgZXhwWWVhcnMgPSBkYXRhPy51c2VyPy5hYm91dD8uZXhwX3llYXIgfHwgMDtcclxuICBjb25zdCB0b3RhbCA9ICBkYXRhPy51c2VyPy5hYm91dD8uc29tZV90b3RhbCB8fCAwO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3NlY3Rpb25cIiBpZD1cImhvbWVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX2hlcm9cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWVcIj57dXNlck5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJqb2JcIj57c3ViVGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuTW9kYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvaW1nL3NlcnZpY2UvMS5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNyZWF0aXZlIERlc2lnbmVyIGJhc2VkIGluIEphcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9XCIvaW1nL3NlcnZpY2UvMS5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+V2ViIERldmVsb3BtZW50PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3N2Zy9yaWdodC1hcnJvdy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuTW9kYWwoXCIvaW1nL3NlcnZpY2UvMi5qcGdcIiwgXCJEaWdpdGFsIE1hcmtldGluZ1wiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9XCIvaW1nL3NlcnZpY2UvMi5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+RGlnaXRhbCBNYXJrZXRpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk9wZW5Nb2RhbChcIi9pbWcvc2VydmljZS8xLmpwZ1wiLCBcIkdyYXBoaWMgRGVzaWduXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZVwiIHNyYz1cIi9pbWcvc2VydmljZS8zLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5HcmFwaGljIERlc2lnbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3J0X2luZm9cIj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzPntleHBZZWFyc308L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFllYXJzIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBFeHBlcmllbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz57dG90YWx9KzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgSGFwcHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEN1c3RvbWVyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFyVXJsfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YXZhdGFyVXJsfSlgIH19XHJcbiAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvd24gYW5jaG9yXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwb3J0Zm9saW9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3ZnXCIgc3JjPVwiL2ltZy9zdmcvZG93bi1hcnJvdy5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxIb21lTW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2VNb2RhbD17KCkgPT4gb25DbG9zZU1vZGFsKCl9XHJcbiAgICAgICAgaW1nPXttb2RhbFZhbHVlLmltZ31cclxuICAgICAgICB0aXRsZT17bW9kYWxWYWx1ZS50aXRsZX1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XHJcbmltcG9ydCB7IG5ld3NTbGlkZXIgfSBmcm9tIFwiLi4vc3dpcGVyU2xpZGVyUHJvcHNcIjtcclxuaW1wb3J0IHsgTmV3c01vZGFsIH0gZnJvbSBcIi4vQ29udGVudE1vZGFsXCI7XHJcblxyXG5jb25zdCBOZXdzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxWYWx1ZSwgc2V0TW9kYWxWYWx1ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpbWc6IG51bGwsXHJcbiAgICB0aXRsZTogXCJcIixcclxuICAgIGRhdGU6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3Qgb25PcGVuTW9kYWwgPSAoaW1nLCB0aXRsZSwgZGF0ZSkgPT4ge1xyXG4gICAgc2V0T3Blbih0cnVlKTtcclxuICAgIHNldE1vZGFsVmFsdWUoeyBpbWcsIHRpdGxlLCBkYXRlIH0pO1xyXG4gIH07XHJcbiAgY29uc3Qgb25DbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBzZXRNb2RhbFZhbHVlKHsgaW1nOiBudWxsLCB0aXRsZTogXCJcIiwgZGF0ZTogXCJcIiB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2VjdGlvblwiIGlkPVwibmV3c1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9uZXdzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fbWFpbl90aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPk5ld3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgzPkxhdGVzdCBOZXdzPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19saXN0IHdvdyBmYWRlSW5VcFwiIGRhdGEtd293LWR1cmF0aW9uPVwiLjdzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGljay1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpY2std3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8U3dpcGVyIHsuLi5uZXdzU2xpZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8U3dpcGVyU2xpZGUgY2xhc3NOYW1lPVwic2xpY2stc2xpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1nL3BvcnRmb2xpby80MTAtNDYwLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9pbWcvbmV3cy8xLmpwZylcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2VwdGVtYmVyIDAyLCAyMDIxPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5WUyBDb2RlIEdldHMgTmV3IEphdmFTY3JpcHQgRGVidWdnZXI8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrdXJhX3RtX2Z1bGxfbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbk1vZGFsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW1nL25ld3MvMS5qcGdgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZTIENvZGUgR2V0cyBOZXcgSmF2YVNjcmlwdCBEZWJ1Z2dlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNlcHRlbWJlciAwMiwgMjAyMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfaGlkZGVuX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfcG9wdXBfaW5mb3JtYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS3VyYSBpcyBhIGxlYWRpbmcgd2ViIGRlc2lnbiBhZ2VuY3kgd2l0aCBhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YXJkLXdpbm5pbmcgZGVzaWduIHRlYW0gdGhhdCBjcmVhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5ub3ZhdGl2ZSwgZWZmZWN0aXZlIHdlYnNpdGVzIHRoYXQgY2FwdHVyZSB5b3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJhbmQsIGltcHJvdmUgeW91ciBjb252ZXJzaW9uIHJhdGVzLCBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbWl6ZSB5b3VyIHJldmVudWUgdG8gaGVscCBncm93IHlvdXIgYnVzaW5lc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgYWNoaWV2ZSB5b3VyIGdvYWxzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluIHRvZGF54oCZcyBkaWdpdGFsIHdvcmxkLCB5b3VyIHdlYnNpdGUgaXMgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QgaW50ZXJhY3Rpb24gY29uc3VtZXJzIGhhdmUgd2l0aCB5b3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzaW5lc3MuIFRoYXQncyB3aHkgYWxtb3N0IDk1IHBlcmNlbnQgb2YgYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXLigJlzIGZpcnN0IGltcHJlc3Npb24gcmVsYXRlcyB0byB3ZWIgZGVzaWduLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl04oCZcyBhbHNvIHdoeSB3ZWIgZGVzaWduIHNlcnZpY2VzIGNhbiBoYXZlIGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1tZW5zZSBpbXBhY3Qgb24geW91ciBjb21wYW554oCZcyBib3R0b20gbGluZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGF04oCZcyB3aHkgbW9yZSBjb21wYW5pZXMgYXJlIG5vdCBvbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVldmFsdWF0aW5nIHRoZWlyIHdlYnNpdGXigJlzIGRlc2lnbiBidXQgYWxzb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRuZXJpbmcgd2l0aCBLdXJhLCB0aGUgd2ViIGRlc2lnbiBhZ2VuY3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF04oCZcyBkcml2ZW4gbW9yZSB0aGFuICQyLjQgYmlsbGlvbiBpbiByZXZlbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIGl0cyBjbGllbnRzLiBXaXRoIG92ZXIgNTAgd2ViIGRlc2lnbiBhd2FyZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlciBvdXIgYmVsdCwgd2UncmUgY29uZmlkZW50IHdlIGNhbiBkZXNpZ24gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbSB3ZWJzaXRlIHRoYXQgZHJpdmVzIHNhbGVzIGZvciB5b3VyIHVuaXF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1c2luZXNzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTd2lwZXJTbGlkZSBjbGFzc05hbWU9XCJzbGljay1zbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvcG9ydGZvbGlvLzQxMC00NjAuanBnXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2ltZy9uZXdzLzIuanBnKVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BdWd1c3QgMTcsIDIwMjE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkphdmFsaW4gRnJhbWV3b3JrIGZvciBLb3RsaW4gYW5kIEphdmEgVXBkYXRlZDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1cmFfdG1fZnVsbF9saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuTW9kYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBpbWcvbmV3cy8yLmpwZ2AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSmF2YWxpbiBGcmFtZXdvcmsgZm9yIEtvdGxpbiBhbmQgSmF2YSBVcGRhdGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXVndXN0IDE3LCAyMDIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19oaWRkZW5fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19wb3B1cF9pbmZvcm1hdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLdXJhIGlzIGEgbGVhZGluZyB3ZWIgZGVzaWduIGFnZW5jeSB3aXRoIGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhcmQtd2lubmluZyBkZXNpZ24gdGVhbSB0aGF0IGNyZWF0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5vdmF0aXZlLCBlZmZlY3RpdmUgd2Vic2l0ZXMgdGhhdCBjYXB0dXJlIHlvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmFuZCwgaW1wcm92ZSB5b3VyIGNvbnZlcnNpb24gcmF0ZXMsIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltaXplIHlvdXIgcmV2ZW51ZSB0byBoZWxwIGdyb3cgeW91ciBidXNpbmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBhY2hpZXZlIHlvdXIgZ29hbHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW4gdG9kYXnigJlzIGRpZ2l0YWwgd29ybGQsIHlvdXIgd2Vic2l0ZSBpcyB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdCBpbnRlcmFjdGlvbiBjb25zdW1lcnMgaGF2ZSB3aXRoIHlvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXNpbmVzcy4gVGhhdCdzIHdoeSBhbG1vc3QgOTUgcGVyY2VudCBvZiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcuKAmXMgZmlyc3QgaW1wcmVzc2lvbiByZWxhdGVzIHRvIHdlYiBkZXNpZ24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXTigJlzIGFsc28gd2h5IHdlYiBkZXNpZ24gc2VydmljZXMgY2FuIGhhdmUgYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbW1lbnNlIGltcGFjdCBvbiB5b3VyIGNvbXBhbnnigJlzIGJvdHRvbSBsaW5lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoYXTigJlzIHdoeSBtb3JlIGNvbXBhbmllcyBhcmUgbm90IG9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWV2YWx1YXRpbmcgdGhlaXIgd2Vic2l0ZeKAmXMgZGVzaWduIGJ1dCBhbHNvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydG5lcmluZyB3aXRoIEt1cmEsIHRoZSB3ZWIgZGVzaWduIGFnZW5jeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXTigJlzIGRyaXZlbiBtb3JlIHRoYW4gJDIuNCBiaWxsaW9uIGluIHJldmVudWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgaXRzIGNsaWVudHMuIFdpdGggb3ZlciA1MCB3ZWIgZGVzaWduIGF3YXJkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVyIG91ciBiZWx0LCB3ZSdyZSBjb25maWRlbnQgd2UgY2FuIGRlc2lnbiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tIHdlYnNpdGUgdGhhdCBkcml2ZXMgc2FsZXMgZm9yIHlvdXIgdW5pcXVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzaW5lc3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInNsaWNrLXNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9wb3J0Zm9saW8vNDEwLTQ2MC5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgvaW1nL25ld3MvMy5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3N2Zy9yaWdodC1hcnJvdy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkp1bHkgMDUsIDIwMjE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkphdmFTY3JpcHQgRG9taW5hdGVkIE9wZW4gU291cmNlIGluIDIwMjE8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrdXJhX3RtX2Z1bGxfbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3Blbk1vZGFsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaW1nL25ld3MvMy5qcGdgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkphdmFTY3JpcHQgRG9taW5hdGVkIE9wZW4gU291cmNlIGluIDIwMjFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJKdWx5IDA1LCAyMDIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19oaWRkZW5fZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19wb3B1cF9pbmZvcm1hdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBLdXJhIGlzIGEgbGVhZGluZyB3ZWIgZGVzaWduIGFnZW5jeSB3aXRoIGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhcmQtd2lubmluZyBkZXNpZ24gdGVhbSB0aGF0IGNyZWF0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5vdmF0aXZlLCBlZmZlY3RpdmUgd2Vic2l0ZXMgdGhhdCBjYXB0dXJlIHlvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmFuZCwgaW1wcm92ZSB5b3VyIGNvbnZlcnNpb24gcmF0ZXMsIGFuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGltaXplIHlvdXIgcmV2ZW51ZSB0byBoZWxwIGdyb3cgeW91ciBidXNpbmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBhY2hpZXZlIHlvdXIgZ29hbHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW4gdG9kYXnigJlzIGRpZ2l0YWwgd29ybGQsIHlvdXIgd2Vic2l0ZSBpcyB0aGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdCBpbnRlcmFjdGlvbiBjb25zdW1lcnMgaGF2ZSB3aXRoIHlvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXNpbmVzcy4gVGhhdCdzIHdoeSBhbG1vc3QgOTUgcGVyY2VudCBvZiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcuKAmXMgZmlyc3QgaW1wcmVzc2lvbiByZWxhdGVzIHRvIHdlYiBkZXNpZ24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSXTigJlzIGFsc28gd2h5IHdlYiBkZXNpZ24gc2VydmljZXMgY2FuIGhhdmUgYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbW1lbnNlIGltcGFjdCBvbiB5b3VyIGNvbXBhbnnigJlzIGJvdHRvbSBsaW5lLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoYXTigJlzIHdoeSBtb3JlIGNvbXBhbmllcyBhcmUgbm90IG9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWV2YWx1YXRpbmcgdGhlaXIgd2Vic2l0ZeKAmXMgZGVzaWduIGJ1dCBhbHNvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFydG5lcmluZyB3aXRoIEt1cmEsIHRoZSB3ZWIgZGVzaWduIGFnZW5jeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXTigJlzIGRyaXZlbiBtb3JlIHRoYW4gJDIuNCBiaWxsaW9uIGluIHJldmVudWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgaXRzIGNsaWVudHMuIFdpdGggb3ZlciA1MCB3ZWIgZGVzaWduIGF3YXJkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVyIG91ciBiZWx0LCB3ZSdyZSBjb25maWRlbnQgd2UgY2FuIGRlc2lnbiBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tIHdlYnNpdGUgdGhhdCBkcml2ZXMgc2FsZXMgZm9yIHlvdXIgdW5pcXVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzaW5lc3MuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGNsYXNzTmFtZT1cInNsaWNrLXNsaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9wb3J0Zm9saW8vNDEwLTQ2MC5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcInVybCgvaW1nL25ld3MvNC5qcGcpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3N2Zy9yaWdodC1hcnJvdy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFwcmlsIDIyLCAyMDIxPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5QZXJmZWN0byBUZXN0cyBQcm9ncmVzc2l2ZSBXZWIgQXBwczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImt1cmFfdG1fZnVsbF9saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuTW9kYWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBpbWcvbmV3cy80LmpwZ2AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUGVyZmVjdG8gVGVzdHMgUHJvZ3Jlc3NpdmUgV2ViIEFwcHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHJpbCAyMiwgMjAyMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfaGlkZGVuX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfcG9wdXBfaW5mb3JtYXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgS3VyYSBpcyBhIGxlYWRpbmcgd2ViIGRlc2lnbiBhZ2VuY3kgd2l0aCBhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YXJkLXdpbm5pbmcgZGVzaWduIHRlYW0gdGhhdCBjcmVhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5ub3ZhdGl2ZSwgZWZmZWN0aXZlIHdlYnNpdGVzIHRoYXQgY2FwdHVyZSB5b3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJhbmQsIGltcHJvdmUgeW91ciBjb252ZXJzaW9uIHJhdGVzLCBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhpbWl6ZSB5b3VyIHJldmVudWUgdG8gaGVscCBncm93IHlvdXIgYnVzaW5lc3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgYWNoaWV2ZSB5b3VyIGdvYWxzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluIHRvZGF54oCZcyBkaWdpdGFsIHdvcmxkLCB5b3VyIHdlYnNpdGUgaXMgdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QgaW50ZXJhY3Rpb24gY29uc3VtZXJzIGhhdmUgd2l0aCB5b3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzaW5lc3MuIFRoYXQncyB3aHkgYWxtb3N0IDk1IHBlcmNlbnQgb2YgYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXLigJlzIGZpcnN0IGltcHJlc3Npb24gcmVsYXRlcyB0byB3ZWIgZGVzaWduLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEl04oCZcyBhbHNvIHdoeSB3ZWIgZGVzaWduIHNlcnZpY2VzIGNhbiBoYXZlIGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1tZW5zZSBpbXBhY3Qgb24geW91ciBjb21wYW554oCZcyBib3R0b20gbGluZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGF04oCZcyB3aHkgbW9yZSBjb21wYW5pZXMgYXJlIG5vdCBvbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVldmFsdWF0aW5nIHRoZWlyIHdlYnNpdGXigJlzIGRlc2lnbiBidXQgYWxzb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRuZXJpbmcgd2l0aCBLdXJhLCB0aGUgd2ViIGRlc2lnbiBhZ2VuY3lcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF04oCZcyBkcml2ZW4gbW9yZSB0aGFuICQyLjQgYmlsbGlvbiBpbiByZXZlbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIGl0cyBjbGllbnRzLiBXaXRoIG92ZXIgNTAgd2ViIGRlc2lnbiBhd2FyZHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlciBvdXIgYmVsdCwgd2UncmUgY29uZmlkZW50IHdlIGNhbiBkZXNpZ24gYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbSB3ZWJzaXRlIHRoYXQgZHJpdmVzIHNhbGVzIGZvciB5b3VyIHVuaXF1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1c2luZXNzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICAgICAgICAgICA8L1N3aXBlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zd2lwZXJfcHJvZ3Jlc3MgZmlsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15X3BhZ2luYXRpb25faW5cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteV9uYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJteV9wcmV2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXlfbmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOZXdzTW9kYWxcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2VNb2RhbD17KCkgPT4gb25DbG9zZU1vZGFsKCl9XHJcbiAgICAgICAgaW1nPXttb2RhbFZhbHVlLmltZ31cclxuICAgICAgICB0aXRsZT17bW9kYWxWYWx1ZS50aXRsZX1cclxuICAgICAgICBkYXRlPXttb2RhbFZhbHVlLmRhdGV9XHJcbiAgICAgIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaWdodEJveCBmcm9tIFwicmVhY3QtYXdlc29tZS1saWdodGJveFwiO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xyXG5pbXBvcnQgeyBwb3J0Zm9saW9TbGlkZXIgfSBmcm9tIFwiLi4vc3dpcGVyU2xpZGVyUHJvcHNcIjtcclxuXHJcbmNvbnN0IFBvcnRmb2xpbyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IFtzaG93TGlnaHQsIHNldFNob3dMaWdodF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3Qgc2hvd0xpZ2h0Qm94ID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRTaG93TGlnaHQoe1xyXG4gICAgICBzdGFydEluZGV4OiBpbmRleCxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhpZGVMaWdodEJveCA9ICgpID0+IHtcclxuICAgIHNldFNob3dMaWdodChudWxsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2VjdGlvblwiIGlkPVwicG9ydGZvbGlvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3BvcnRmb2xpb1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX21haW5fdGl0bGVcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5Qb3J0Zm9saW88L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgzPlNlbGVjdGVkIFdvcmtzPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3J0Zm9saW9fbGlzdCBnYWxsZXJ5X3pvb20gd293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN3aXBlci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dpcGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFN3aXBlciB7Li4ucG9ydGZvbGlvU2xpZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YT8udXNlcj8ucHJvamVjdHMubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17cHJvamVjdC5faWR9IGNsYXNzTmFtZT1cInN3aXBlci1zbGlkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvamVjdC5pbWFnZS51cmx9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb2plY3QuaW1hZ2UudXJsfSlgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cHJvamVjdC50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvamVjdC50ZWNoU3RhY2suam9pbihcIiwgXCIpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJrdXJhX3RtX2Z1bGxfbGluayBwb3B1cC12aW1lb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzaG93TGlnaHRCb3goaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9Td2lwZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zd2lwZXJfcHJvZ3Jlc3MgZmlsbFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15X3BhZ2luYXRpb25faW5cIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteV9uYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJteV9wcmV2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImltZy9zdmcvcmlnaHQtYXJyb3cuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibXlfbmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJpbWcvc3ZnL3JpZ2h0LWFycm93LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtzaG93TGlnaHQgPyAoXHJcbiAgICAgICAgPExpZ2h0Qm94XHJcbiAgICAgICAgICBpbWFnZXM9e2RhdGE/LnVzZXI/LnByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKHtcclxuICAgICAgICAgICAgdXJsOiBwcm9qZWN0LmltYWdlLnVybCxcclxuICAgICAgICAgICAgdGl0bGU6IHByb2plY3QudGl0bGUsXHJcbiAgICAgICAgICB9KSl9XHJcbiAgICAgICAgICBzdGFydEluZGV4PXtzaG93TGlnaHQuc3RhcnRJbmRleH1cclxuICAgICAgICAgIG9uQ2xvc2U9e2hpZGVMaWdodEJveH1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvcnRmb2xpbztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUHJpY2UgPSAoe2RhdGF9KSA9PiB7XHJcbiAgaWYgKCFkYXRhKSB7XHJcbiAgICByZXR1cm4gPGRpdj5EYXRhIGlzIG5vdCBhdmFpbGFibGU8L2Rpdj47XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2VjdGlvblwiIGlkPVwicHJpY2VcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3ByaWNpbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljaW5nX2lubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zdGlja3lfc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX21haW5fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+UHJpY2luZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGgzPlNlcnZpY2UgUHJpY2VzPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhPy51c2VyPy5hYm91dD8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9zdGlja3lfc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwid293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGE/LnVzZXI/LnNlcnZpY2VzWzBdPy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkYXRhPy51c2VyPy5zZXJ2aWNlc1swXT8uY2hhcmdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJCb2xkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmcgcmVwbGFjZWQtc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm0xMiAwYy02LjYxNSAwLTEyIDUuMzgxLTEyIDEyIDAgNi42MTUgNS4zODUgMTIgMTIgMTJzMTItNS4zODUgMTItMTJjMC02LjYyLTUuMzg1LTEyLTEyLTEyem0tMTAuNzkgMTEuOTk5YzAtMS41NjMuMzMzLTMuMDQ4LjkzNC00LjM4OWw1LjE0OCAxNC4xYy0zLjYwMS0xLjc1MS02LjA4Mi01LjQ0Mi02LjA4Mi05LjcxMXptMTAuNzkgMTAuNzkxYy0xLjA2IDAtMi4wODEtLjE1NS0zLjA0OC0uNDQxbDMuMjM3LTkuNDA2IDMuMzE1IDkuMDg3Yy4wMjQuMDU0LjA0OS4xMDEuMDc3LjE1LTEuMTE4LjM5Mi0yLjMyMy42MS0zLjU4MS42MXptMS40ODUtMTUuODQ1di0uMDAxYy42NDgtLjAzNCAxLjIzMy0uMTAxIDEuMjMzLS4xMDEuNTgxLS4wNjguNTEzLS45MjQtLjA2OC0uODkxIDAgMC0xLjc0Ny4xMzUtMi44NzQuMTM1LTEuMDYgMC0yLjg0MS0uMTM1LTIuODQxLS4xMzUtLjU4LS4wMzQtLjY0Ny44NTctLjA2Ny44OTEgMCAwIC41NTEuMDY4IDEuMTMyLjEwMWwxLjY3OSA0LjYwNi0yLjM2MSA3LjA3OS0zLjkyOC0xMS42ODVjLjY0OS0uMDM0IDEuMjM0LS4xMDEgMS4yMzQtLjEwMS41ODEtLjA2OC41MTMtLjkyNC0uMDY4LS44OTEgMCAwLTEuNzQ3LjEzNS0yLjg3NC4xMzUtLjIwMyAwLS40NDEtLjAwNS0uNjk3LS4wMTQgMS45MzEtMi45MjggNS4yNDUtNC44NjMgOS4wMTUtNC44NjMgMi44MDcgMCA1LjM2NiAxLjA3NSA3LjI4NyAyLjgzLS4wNDktLjAwNS0uMDkyLS4wMDktLjE0LS4wMDktMS4wNiAwLTEuODEuOTI0LTEuODEgMS45MTYgMCAuODkuNTEzIDEuNjQgMS4wNiAyLjUzMS40MTEuNzE2Ljg5MSAxLjY0Ljg5MSAyLjk3NiAwIC45MjQtLjM1MyAxLjk5My0uODIzIDMuNDg5bC0xLjA3NSAzLjU5NXptNy45ODUtLjEyMmMuODQyIDEuNTM5IDEuMzIxIDMuMyAxLjMyMSA1LjE3OCAwIDMuOTgyLTIuMTU4IDcuNDU2LTUuMzY2IDkuMzI0bC0uMDAxLS4wMDEgMy4yOTUtOS41MjhjLjYxNC0xLjUzOS44MjMtMi43NjcuODIzLTMuODY2IDAtLjM5Ni0uMDI0LS43NjQtLjA3Mi0xLjEwN3pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIuMnNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YT8udXNlcj8uc2VydmljZXNbMV0/Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGE/LnVzZXI/LnNlcnZpY2VzWzFdPy5jaGFyZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJMYXllcl8xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeD1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHk9XCIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUJhY2tncm91bmQ6IFwibmV3IDAgMCA1MTIgNTEyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2ZyByZXBsYWNlZC1zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDY0LjM3MiwyMTQuMzI2di05Ni43TDM0Ni43NDcsMEg0Ny42Mjh2MjE0LjMyNkgyMy44MTR2MjI2LjIzM2gyMy44MTRWNTEyaDQxNi43NDR2LTcxLjQ0MmgyMy44MTRWMjE0LjMyNkg0NjQuMzcyeiAgICAgTTM1Ny4yMDksNjAuOTc5bDQ2LjE4NCw0Ni4xODRoLTQ2LjE4NFY2MC45Nzl6IE04My4zNDksMzUuNzIxaDIzOC4xNHYxMDcuMTYzaDEwNy4xNjN2NzEuNDQySDgzLjM0OVYzNS43MjF6IE00MjguNjUxLDQ3Ni4yNzkgICAgSDgzLjM0OXYtMzUuNzIxaDM0NS4zMDJWNDc2LjI3OXogTTQ1Mi40NjUsNDA0LjgzN0g1OS41MzVWMjUwLjA0N2gzOTIuOTNWNDA0LjgzN3pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPVwiMTUzLjg3NCwyODcuMDc3IDE1My44NzQsMzE2LjU0NyAxMjMuNTQ5LDMxNi41NDcgMTIzLjU0OSwyODcuMDc3IDEwNS45NzUsMjg3LjA3NyAxMDUuOTc1LDM2My4xNjMgICAgIDEyMy41NDksMzYzLjE2MyAxMjMuNTQ5LDMzMS45NzggMTUzLjg3NCwzMzEuOTc4IDE1My44NzQsMzYzLjE2MyAxNzEuNDUxLDM2My4xNjMgMTcxLjQ1MSwyODcuMDc3ICAgXCI+PC9wb2x5Z29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjE4NS4zODEsMjg3LjA3NyAxODUuMzgxLDMwMi41MDkgMjA4LjYzNiwzMDIuNTA5IDIwOC42MzYsMzYzLjE2MyAyMjYuMjEsMzYzLjE2MyAyMjYuMjEsMzAyLjUwOSAgICAgMjQ5LjM1NywzMDIuNTA5IDI0OS4zNTcsMjg3LjA3NyAgIFwiPjwvcG9seWdvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XCIzMjEuOTA1LDI4Ny4wNzcgMzAyLjA3OSwzMjYuODM1IDI4Mi4zNjIsMjg3LjA3NyAyNjMuMjg3LDI4Ny4wNzcgMjYzLjI4NywzNjMuMTYzIDI4MC44NjIsMzYzLjE2MyAgICAgMjgwLjg2MiwzMTcuNjE5IDI5Ny4zNjUsMzUwLjczMiAzMDYuNzk1LDM1MC43MzIgMzIzLjI5OCwzMTcuNjE5IDMyMy4yOTgsMzYzLjE2MyAzNDAuODczLDM2My4xNjMgMzQwLjg3MywyODcuMDc3ICAgXCI+PC9wb2x5Z29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjM3OC4zNzgsMzQ3LjczMSAzNzguMzc4LDI4Ny4wNzcgMzYwLjgwMywyODcuMDc3IDM2MC44MDMsMzYzLjE2MyA0MTUuMjQyLDM2My4xNjMgNDE1LjI0MiwzNDcuNzMxICAgXCI+PC9wb2x5Z29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PVwiLjRzXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGE/LnVzZXI/LnNlcnZpY2VzWzJdPy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3N0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntkYXRhPy51c2VyPy5zZXJ2aWNlc1syXT8uY2hhcmdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJfeDMxX194MkNfNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUJhY2tncm91bmQ9XCJuZXcgMCAwIDI0IDI0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnIHJlcGxhY2VkLXN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMTYuODEgMTNoLTEyLjA2Yy0uNDE0IDAtLjc1LS4zMzYtLjc1LS43NXYtNC41YzAtLjQxNC4zMzYtLjc1Ljc1LS43NWgxNC41Yy40MTQgMCAuNzUuMzM2Ljc1Ljc1djIuMjVjMCAuNDE0LS4zMzYuNzUtLjc1Ljc1cy0uNzUtLjMzNi0uNzUtLjc1di0xLjVoLTEzdjNoMTEuMzFjLjQxNCAwIC43NS4zMzYuNzUuNzVzLS4zMzYuNzUtLjc1Ljc1elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm0xMy44MiAxNS45OWgtOS4wMmMtLjQxNCAwLS43NS0uMzM2LS43NS0uNzVzLjMzNi0uNzUuNzUtLjc1aDkuMDJjLjQxNCAwIC43NS4zMzYuNzUuNzVzLS4zMzYuNzUtLjc1Ljc1elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm0xMC44NCAxOC45OWgtNi4wNGMtLjQxNCAwLS43NS0uMzM2LS43NS0uNzVzLjMzNi0uNzUuNzUtLjc1aDYuMDRjLjQxNCAwIC43NS4zMzYuNzUuNzVzLS4zMzYuNzUtLjc1Ljc1elwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm0xMi41MjcgMjRjLS4xOTcgMC0uMzg5LS4wNzgtLjUzLS4yMi0uMTczLS4xNzMtLjI1MS0uNDE5LS4yMDgtLjY2MWwuNTMtMy4wMDVjLjAyNy0uMTUxLjEtLjI5MS4yMDgtLjRsNy40MjUtNy40MjRjLjMxNi0uMzE2LjY1MS0uNTEzLjk5Ni0uNTg1LjQ3Ny0uMS45MzkuMDQ1IDEuMzAyLjQwOWwxLjIzNyAxLjIzN2MuNjgyLjY4Mi42ODIgMS43OTIgMCAyLjQ3NWwtNy40MjQgNy40MjVjLS4xMDkuMTA5LS4yNDkuMTgyLS40LjIwOGwtMy4wMDUuNTNjLS4wNDQuMDA3LS4wODcuMDExLS4xMzEuMDExem0zLjAwNi0xLjI4aC4wMXptLTEuNzc4LTIuMTEyLS4zMDMgMS43MTcgMS43MTctLjMwMyA3LjI1Ny03LjI1OGMuMDk3LS4wOTguMDk3LS4yNTYgMC0uMzU0bC0xLjIyOC0xLjIyOGMtLjAxLjAxOS0uMDg1LjA2Ny0uMTg2LjE2N3pcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtOS44MyAyMmgtNy4wOGMtMS41MTcgMC0yLjc1LTEuMjMzLTIuNzUtMi43NXYtMTYuNWMwLTEuNTE3IDEuMjMzLTIuNzUgMi43NS0yLjc1aDE4LjVjMS41MTcgMCAyLjc1IDEuMjMzIDIuNzUgMi43NXY3LjI5YzAgLjQxNC0uMzM2Ljc1LS43NS43NXMtLjc1LS4zMzYtLjc1LS43NXYtNy4yOWMwLS42ODktLjU2MS0xLjI1LTEuMjUtMS4yNWgtMTguNWMtLjY4OSAwLTEuMjUuNTYxLTEuMjUgMS4yNXYxNi41YzAgLjY4OS41NjEgMS4yNSAxLjI1IDEuMjVoNy4wOGMuNDE0IDAgLjc1LjMzNi43NS43NXMtLjMzNi43NS0uNzUuNzV6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwibTIzLjI1IDVoLTIyLjVjLS40MTQgMC0uNzUtLjMzNi0uNzUtLjc1cy4zMzYtLjc1Ljc1LS43NWgyMi41Yy40MTQgMCAuNzUuMzM2Ljc1Ljc1cy0uMzM2Ljc1LS43NS43NXpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIuNnNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YT8udXNlcj8uc2VydmljZXNbM10/Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGE/LnVzZXI/LnNlcnZpY2VzWzNdPy5jaGFyZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZDogXCJuZXcgMCAwIDUxMiA1MTJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnIHJlcGxhY2VkLXN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MzIsMTAwYy01LjUyLDAtMTAsNC40OC0xMCwxMHM0LjQ4LDEwLDEwLDEwYzUuNTIsMCwxMC00LjQ4LDEwLTEwUzQzNy41MiwxMDAsNDMyLDEwMHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04MCwxMDBjLTUuNTIsMC0xMCw0LjQ4LTEwLDEwczQuNDgsMTAsMTAsMTBzMTAtNC40OCwxMC0xMFM4NS41MiwxMDAsODAsMTAwelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUwMiwyMjBoLTExLjk2Yy0zLjczOC0yOC44MDQtMTIuNzctNTYuMjUzLTI2Ljk0NC04MS43MDVjLTIuNjg3LTQuODI0LTguNzc2LTYuNTU5LTEzLjYwMi0zLjg3MiAgICBjLTQuODI1LDIuNjg3LTYuNTU5LDguNzc3LTMuODcyLDEzLjYwMmMxMi41MDgsMjIuNDYzLDIwLjY0Niw0Ni42MjgsMjQuMjUyLDcxLjk3NUg0NjJjLTUuNTIzLDAtMTAsNC40NzctMTAsMTB2NDAgICAgYzAsNS41MjMsNC40NzcsMTAsMTAsMTBoNDBjNS41MjMsMCwxMC00LjQ3NywxMC0xMHYtNDBDNTEyLDIyNC40NzcsNTA3LjUyMywyMjAsNTAyLDIyMHogTTQ5MiwyNjBoLTIwdi0yMGg5LjA3OCAgICBjMC4wMDMsMCwwLjAwNywwLDAuMDEsMGMwLjAwNCwwLDAuMDA3LDAsMC4wMTEsMEg0OTJWMjYwelwiPjwvcGF0aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM2NS45ODEsMjkyLjYyMWMtMC4wMDYtMC4xNTUtMC4wMS0wLjMxLTAuMDIzLTAuNDY1Yy0wLjAxOC0wLjIxMi0wLjA0Ny0wLjQyMS0wLjA3OC0wLjYyOSAgICBjLTAuMDE5LTAuMTI4LTAuMDM0LTAuMjU2LTAuMDU5LTAuMzg0Yy0wLjA0Ni0wLjI0NS0wLjEwNi0wLjQ4NS0wLjE2OS0wLjcyNGMtMC4wMjQtMC4wOTEtMC4wNDMtMC4xODItMC4wNy0wLjI3MiAgICBjLTAuMDg5LTAuMjk5LTAuMTkzLTAuNTkyLTAuMzA5LTAuODc5Yy0wLjAxMy0wLjAzMS0wLjAyMi0wLjA2NC0wLjAzNS0wLjA5NWMtMC4xMzgtMC4zMzQtMC4yOTMtMC42NTktMC40NjUtMC45NzMgICAgbC05OS45OTgtMTgyLjk5NkMyNjMuMDIyLDEwMS45OTYsMjU5LjY1NywxMDAsMjU2LDEwMGMtMy42NTcsMC03LjAyMiwxLjk5Ni04Ljc3NSw1LjIwNWwtOTkuOTk4LDE4Mi45OTYgICAgYy0wLjE3MiwwLjMxNC0wLjMyNywwLjYzOS0wLjQ2NSwwLjk3M2MtMC4wMTMsMC4wMzEtMC4wMjIsMC4wNjMtMC4wMzUsMC4wOTVjLTAuMTE2LDAuMjg3LTAuMjIsMC41OC0wLjMwOSwwLjg3OSAgICBjLTAuMDI3LDAuMDktMC4wNDYsMC4xODEtMC4wNywwLjI3MmMtMC4wNjQsMC4yMzktMC4xMjMsMC40NzgtMC4xNjksMC43MjRjLTAuMDI0LDAuMTI3LTAuMDM5LDAuMjU1LTAuMDU5LDAuMzg0ICAgIGMtMC4wMzEsMC4yMDgtMC4wNiwwLjQxNy0wLjA3OCwwLjYyOWMtMC4wMTMsMC4xNTUtMC4wMTgsMC4zMS0wLjAyMywwLjQ2NWMtMC4wMDUsMC4xMjYtMC4wMTksMC4yNS0wLjAxOSwwLjM3OCAgICBjMCwwLjA2NiwwLjAwOSwwLjEyOSwwLjAxLDAuMTk1YzAuMDAzLDAuMTU3LDAuMDEzLDAuMzEzLDAuMDI0LDAuNDdjMC4wMTMsMC4xOTksMC4wMjksMC4zOTcsMC4wNTQsMC41OTMgICAgYzAuMDE4LDAuMTM4LDAuMDQsMC4yNzUsMC4wNjMsMC40MTNjMC4wMzYsMC4yMTYsMC4wNzksMC40MywwLjEyOSwwLjY0MWMwLjAyOCwwLjExOSwwLjA1OSwwLjIzOCwwLjA5MiwwLjM1NiAgICBjMC4wNjMsMC4yMjgsMC4xMzUsMC40NTIsMC4yMTMsMC42NzNjMC4wMjIsMC4wNjMsMC4wMzYsMC4xMjcsMC4wNiwwLjE5bDM2LjA2NCw5NS41NjljLTIuODkzLDEuNDM0LTUuNTY5LDMuMzM5LTcuOTIsNS42ODkgICAgQzE2OS4xMjEsNDAzLjQ1NywxNjYsNDEwLjk5LDE2Niw0MTljMCwxMy4wMzYsOC4zNjEsMjQuMTUyLDIwLDI4LjI4VjUwMmMwLDUuNTIzLDQuNDc3LDEwLDEwLDEwaDEyMGM1LjUyMywwLDEwLTQuNDc3LDEwLTEwICAgIHYtNTQuNzAzYzQuMTY5LTEuNDcxLDcuOTkyLTMuODY2LDExLjIxMi03LjA4NkMzNDIuODc5LDQzNC41NDMsMzQ2LDQyNy4wMSwzNDYsNDE5YzAtMTEuNzczLTYuODE5LTIxLjk3OC0xNi43MTMtMjYuODg3ICAgIGwzNi4wNjktOTUuNTgyYzAuMDI0LTAuMDYzLDAuMDM4LTAuMTI3LDAuMDYtMC4xOWMwLjA3OC0wLjIyMSwwLjE1LTAuNDQ1LDAuMjEzLTAuNjczYzAuMDMzLTAuMTE4LDAuMDYzLTAuMjM3LDAuMDkyLTAuMzU2ICAgIGMwLjA1LTAuMjExLDAuMDkyLTAuNDI1LDAuMTI5LTAuNjQxYzAuMDIzLTAuMTM4LDAuMDQ2LTAuMjc1LDAuMDYzLTAuNDEzYzAuMDI1LTAuMTk2LDAuMDQxLTAuMzk0LDAuMDU0LTAuNTkzICAgIGMwLjAxLTAuMTU3LDAuMDIxLTAuMzEzLDAuMDI0LTAuNDdjMC4wMDEtMC4wNjUsMC4wMS0wLjEyOSwwLjAxLTAuMTk1QzM2NiwyOTIuODcyLDM2NS45ODYsMjkyLjc0OCwzNjUuOTgxLDI5Mi42MjF6IE0yNTYsMjgzICAgIGM1LjUxNCwwLDEwLDQuNDg2LDEwLDEwYzAsNS41MTQtNC40ODYsMTAtMTAsMTBjLTUuNTE0LDAtMTAtNC40ODYtMTAtMTBDMjQ2LDI4Ny40ODYsMjUwLjQ4NiwyODMsMjU2LDI4M3ogTTMwNiw0OTJIMjA2di00M2gxMDAgICAgVjQ5MnogTTMyMy4wNjksNDI2LjA2OGMtMS44OSwxLjg5MS00LjQwMSwyLjkzMi03LjA2OSwyLjkzMkgxOTZjLTUuNTE0LDAtMTAtNC40ODYtMTAtMTBjMC0yLjY2OCwxLjA0MS01LjE3OSwyLjkzMS03LjA2OCAgICBjMS44OTEtMS44OTEsNC40MDEtMi45MzIsNy4wNjktMi45MzJoMTE5LjkzM2MwLjAyMiwwLDAuMDQ0LDAuMDAzLDAuMDY2LDAuMDAzYzAuMDExLDAsMC4wMjMtMC4wMDEsMC4wMzQtMC4wMDEgICAgYzUuNDk5LDAuMDE4LDkuOTY4LDQuNDk1LDkuOTY4LDkuOTk4QzMyNiw0MjEuNjY4LDMyNC45NTksNDI0LjE3OSwzMjMuMDY5LDQyNi4wNjh6IE0zMDkuMDg1LDM4OWgtMTA2LjE3bC0zMi40NTMtODZIMTk2ICAgIGM1LjUyMywwLDEwLTQuNDc3LDEwLTEwcy00LjQ3Ny0xMC0xMC0xMGgtMjMuMTRMMjQ2LDE0OS4xNTRWMjY0LjcyYy0xMS42MzksNC4xMjgtMjAsMTUuMjQzLTIwLDI4LjI4YzAsMTYuNTQyLDEzLjQ1OCwzMCwzMCwzMCAgICBzMzAtMTMuNDU4LDMwLTMwYzAtMTMuMDM2LTguMzYxLTI0LjE1Mi0yMC0yOC4yOFYxNDkuMTU0TDMzOS4xNCwyODNIMzE2Yy01LjUyMywwLTEwLDQuNDc3LTEwLDEwczQuNDc3LDEwLDEwLDEwaDI1LjUzOCAgICBMMzA5LjA4NSwzODl6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNjIuNTA1LDEzNC40MjNjLTQuODI2LTIuNjg4LTEwLjkxNi0wLjk1NC0xMy42MDIsMy44NzJDMzQuNzMsMTYzLjc0NywyNS42OTcsMTkxLjE5NiwyMS45NiwyMjBIMTAgICAgYy01LjUyMywwLTEwLDQuNDc3LTEwLDEwdjQwYzAsNS41MjMsNC40NzcsMTAsMTAsMTBoNDBjNS41MjMsMCwxMC00LjQ3NywxMC0xMHYtNDBjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMGgtNy44NzUgICAgYzMuNjA3LTI1LjM0NywxMS43NDQtNDkuNTEyLDI0LjI1Mi03MS45NzVDNjkuMDY0LDE0My4yLDY3LjMzMSwxMzcuMTEsNjIuNTA1LDEzNC40MjN6IE00MCwyNjBIMjB2LTIwaDEwLjkwMSAgICBjMC4wMDQsMCwwLjAwNywwLDAuMDExLDBjMC4wMDMsMCwwLjAwNywwLDAuMDEsMEg0MFYyNjB6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDgyLDBjLTEzLjAzNiwwLTI0LjE1Miw4LjM2MS0yOC4yOCwyMEgyODZWMTBjMC01LjUyMy00LjQ3Ny0xMC0xMC0xMGgtNDBjLTUuNTIzLDAtMTAsNC40NzctMTAsMTB2MTBINTguMjggICAgQzU0LjE1Miw4LjM2MSw0My4wMzYsMCwzMCwwQzEzLjQ1OCwwLDAsMTMuNDU4LDAsMzBzMTMuNDU4LDMwLDMwLDMwYzEzLjAzNiwwLDI0LjE1Mi04LjM2MSwyOC4yOC0yMGgxMDAuNTM0ICAgIGMtMjEuMzI5LDguOTI1LTQwLjg4OSwyMC41MTEtNTYuOTg5LDM0LjA4NGMtNC4yMjMsMy41Ni00Ljc2LDkuODY5LTEuMiwxNC4wOTFjMS45NzgsMi4zNDcsNC44MDUsMy41NTUsNy42NSwzLjU1NSAgICBjMi4yNzYsMCw0LjU2NC0wLjc3Miw2LjQ0LTIuMzU0QzE0My40MDcsNjUuMTg4LDE4NC4zNTMsNDcuOTEzLDIyNiw0Mi4xMTlWNTBjMCw1LjUyMyw0LjQ3NywxMCwxMCwxMGg0MGM1LjUyMywwLDEwLTQuNDc3LDEwLTEwICAgIHYtNy44ODFjNDEuNjQ3LDUuNzk0LDgyLjU5MywyMy4wNjksMTExLjI4NSw0Ny4yNTZjMS44NzYsMS41ODIsNC4xNjQsMi4zNTUsNi40NCwyLjM1NGMyLjg0NiwwLDUuNjczLTEuMjA4LDcuNjUtMy41NTUgICAgYzMuNTYxLTQuMjIxLDMuMDIzLTEwLjUzLTEuMi0xNC4wOWMtMTYuMS0xMy41NzMtMzUuNjYtMjUuMTU5LTU2Ljk4OS0zNC4wODRINDUzLjcyYzQuMTI4LDExLjYzOSwxNS4yNDMsMjAsMjguMjgsMjAgICAgYzE2LjU0MiwwLDMwLTEzLjQ1OCwzMC0zMFM0OTguNTQyLDAsNDgyLDB6IE0zMCw0MGMtNS41MTQsMC0xMC00LjQ4Ni0xMC0xMHM0LjQ4Ni0xMCwxMC0xMHMxMCw0LjQ4NiwxMCwxMFMzNS41MTQsNDAsMzAsNDB6ICAgICBNMjY2LDMwdjAuOVY0MGgtMjB2LTkuMVYzMFYyMGgyMFYzMHogTTQ4Miw0MGMtNS41MTQsMC0xMC00LjQ4Ni0xMC0xMHM0LjQ4Ni0xMCwxMC0xMGM1LjUxNCwwLDEwLDQuNDg2LDEwLDEwUzQ4Ny41MTQsNDAsNDgyLDQwICAgIHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwid293IGZhZGVJblVwXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9XCIuOHNcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57ZGF0YT8udXNlcj8uc2VydmljZXNbNF0/Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGE/LnVzZXI/LnNlcnZpY2VzWzRdPy5jaGFyZ2V9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4PVwiMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeT1cIjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZDogXCJuZXcgMCAwIDUxMiA1MTJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnIHJlcGxhY2VkLXN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wLDB2NTEyaDUxMlYwSDB6IE00ODIsNDgySDMwVjMwaDQ1MlY0ODJ6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEzLjEwMiwxODEuNmgtNzIuMjRWMzUyaDMzLjEydi01Ny4xMmg0MC4zMmMyOS41MzEsMCw1My4wNC0yNS43MTMsNTMuMDQtNTYuNjQgICAgQzI2Ny4zNDIsMjEyLDI0Ni4xNjYsMTgxLjYsMjEzLjEwMiwxODEuNnogTTIxMi4zODIsMjY1Ljg0aC0zOC40di01NS4yaDM2Ljk2YzE0LjA1NywwLDIyLjgsMTMuMiwyMi44LDI3LjYgICAgQzIzMy43NDIsMjU1LDIyNCwyNjUuODQsMjEyLjM4MiwyNjUuODR6XCI+PC9wYXRoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzM2LjkzOSwyNzYuNjRjLTQuNjQyLTEuMTE4LTI0LjcyLTQuMzktMjQuNzItMTUuODRjMC05LjE3NSw3LjUzMS0xNC4xNiwxOS4yLTE0LjE2YzE1LjgzMSwwLDMwLjA3OSw5LjEyLDM2LjQ4LDEzLjkyICAgIGwxMi45Ni0xOS40NGMtNi44ODEtNi4wNzktMjEuNjA5LTE3LjI4LTQ5LjItMTcuMjhjLTI2LjI4NCwwLTQ5LjQ0LDE0LjkxLTQ5LjQ0LDQxLjUyYzAsMjcuNjQsMzYuNzIsMzIuODAxLDQ0Ljg4LDM1LjA0ICAgIGM5Ljc1NywyLjcyMywyNy42LDYuMjI1LDI3LjYsMTcuMDRjMCw4LjgxLTguNDQ5LDEzLjkyLTIwLjY0LDEzLjkyYy0xOC44MDksMC0zNi40OC0xMS4xMTktNDQuMTYtMTYuNTZsLTEyLDIwLjE2ICAgIGM3LjIsNi4yNCwyNy44NTEsMTkuNDQsNTYuODgsMTkuNDRjMTUuNjc5LDAsNTAuODgtNC45LDUwLjg4LTM5Ljg0QzM4NS42NTksMjg1LDM0NS41NzksMjc4Ljg4MiwzMzYuOTM5LDI3Ni42NHpcIj48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPjwvZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+PC9nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz48L2c+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlO1xyXG4iLCJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgYWN0aXZlU2tpbGxQcm9ncmVzcyB9IGZyb20gXCIuLi91dGlsaXRzXCI7XHJcblxyXG5jb25zdCBQYXJhbGxheFZpZGVvID0gZHluYW1pYyhpbXBvcnQoXCIuL1BhcmFsbGF4XCIpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcblxyXG5jb25zdCBTa2lsbHMgPSAoeyBkYXRhIH0pID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBhY3RpdmVTa2lsbFByb2dyZXNzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoIWRhdGEgfHwgIWRhdGEudXNlciB8fCAhZGF0YS51c2VyLnNraWxscyB8fCBkYXRhLnVzZXIuc2tpbGxzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIFwiTm90IGF2YWlsYWJsZVwiO1xyXG4gIH1cclxuXHJcbiAgLy8gRmlsdGVyIGFuZCBzb3J0IGVuYWJsZWQgc2tpbGxzXHJcbiAgY29uc3QgZW5hYmxlZFNraWxscyA9IGRhdGEudXNlci5za2lsbHNcclxuICAgIC5maWx0ZXIoc2tpbGwgPT4gc2tpbGwuZW5hYmxlZCkgXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYS5zZXF1ZW5jZSAtIGIuc2VxdWVuY2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3NlY3Rpb25cIiBpZD1cInNraWxsc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2tpbGxzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzX2lubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9tYWluX3RpdGxlIGxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Ta2lsbHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aDM+UHJvZ3JhbW1pbmcgU2tpbGxzPC9oMz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQgd293IGZhZGVJblVwXCIgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIj5cclxuICAgICAgICAgICAgICAgIDxwPntkYXRhPy51c2VyPy5hYm91dD8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9kb19wcm9ncmVzcyB3b3cgZmFkZUluVXBcIiBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiIGRhdGEtd293LWRlbGF5PVwiLjJzXCI+XHJcbiAgICAgICAgICAgICAgICB7ZW5hYmxlZFNraWxscy5tYXAoKHNraWxsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzX2lubmVyXCIga2V5PXtpbmRleH0gZGF0YS12YWx1ZT17c2tpbGwucGVyY2VudGFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsYWJlbFwiPntza2lsbC5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bWJlclwiPntza2lsbC5wZXJjZW50YWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcl9pblwiIHN0eWxlPXt7IHdpZHRoOiBgJHtza2lsbC5wZXJjZW50YWdlfSVgIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPFBhcmFsbGF4VmlkZW8gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15X2ltYWdlIGphcmFsbGF4XCIgZGF0YS1zcGVlZD1cIjBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9pbWcvcG9ydGZvbGlvLzIuanBnKVwiIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTa2lsbHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5jb25zdCByZW5kZXJUaW1lbGluZUl0ZW0gPSAoaXRlbSkgPT4gKFxyXG4gIDxsaVxyXG4gICAga2V5PXtpdGVtLl9pZH1cclxuICAgIGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcFwiXHJcbiAgICBkYXRhLXdvdy1kdXJhdGlvbj1cIi43c1wiXHJcbiAgICBkYXRhLXdvdy1kZWxheT17YCR7aXRlbS5zZXF1ZW5jZSAqIDAuMn1zYH0gLy8gQWRqdXN0IGRlbGF5IGJhc2VkIG9uIHNlcXVlbmNlXHJcbiAgPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0X2lubmVyXCI+XHJcbiAgICAgIDxzcGFuPlxyXG4gICAgICAgIHtmb3JtYXQobmV3IERhdGUoaXRlbS5zdGFydERhdGUpLCBcIk1NTU0geXl5eVwiKX0gLXtcIiBcIn1cclxuICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKGl0ZW0uZW5kRGF0ZSksIFwiTU1NTSB5eXl5XCIpfVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICA8c3Bhbj57aXRlbS5qb2JUaXRsZX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICA8c3Bhbj57aXRlbS5qb2JMb2NhdGlvbn08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2xpPlxyXG4pO1xyXG5cclxuY29uc3QgVGltZWxpbmUgPSAoeyBkYXRhIH0pID0+IHtcclxuICBpZiAoIWRhdGEgfHwgIWRhdGEudXNlciB8fCAhZGF0YS51c2VyLnRpbWVsaW5lKSB7XHJcbiAgICByZXR1cm4gXCJOb3QgQXZhaWxhYmxlXCI7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzb3J0ZWRUaW1lbGluZSA9IGRhdGEudXNlci50aW1lbGluZS5zb3J0KChhLCBiKSA9PiBhLnNlcXVlbmNlIC0gYi5zZXF1ZW5jZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fc2VjdGlvblwiIGlkPVwidGltZWxpbmVcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3RpbWVsaW5lXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia3VyYV90bV9tYWluX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlRpbWVsaW5lPC9zcGFuPlxyXG4gICAgICAgICAgICA8aDM+V29ya2luZyBQZXJpb2Q8L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVsaW5lX2xpc3RcIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtzb3J0ZWRUaW1lbGluZS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l0ZW0uX2lkfT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0uZm9yRWR1Y2F0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdF9pbm5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKGl0ZW0uc3RhcnREYXRlKSwgXCJNTU1NIHl5eXlcIil9IC17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdChuZXcgRGF0ZShpdGVtLmVuZERhdGUpLCBcIk1NTU0geXl5eVwiKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uam9iVGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uam9iTG9jYXRpb259PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUaW1lbGluZUl0ZW0oaXRlbSlcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGltZWxpbmU7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX3NlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImt1cmFfdG1fY29weXJpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29weXJpZ2h0X2lubmVyIHdvdyBmYWRlSW5VcFwiXHJcbiAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249XCIuN3NcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgQ29weXJpZ2h0ICZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfS4gQWxsIHJpZ2h0c1xyXG4gICAgICAgICAgICAgICAgICByZXNlcnZlZC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbFwiPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9zdmcvc29jaWFsL2ZhY2Vib29rLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvc3ZnL3NvY2lhbC90d2l0dGVyLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvc3ZnL3NvY2lhbC9pbnN0YWdyYW0uc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy9zdmcvc29jaWFsL2RyaWJiYmxlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvc3ZnL3NvY2lhbC90aWstdG9rLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGF1ZGlvU291bmRBbmRPcGVuLCBvcGVuTmF2LCBzY3JvbGxfLCBzdGlja3lOYXYgfSBmcm9tIFwiLi4vdXRpbGl0c1wiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgZGFyayB9KSA9PiB7XHJcbiAgY29uc3QgW2lzVG9nZ2xlZCwgc2V0VG9nZ2xlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdG9nZ2xlVHJ1ZUZhbHNlID0gKCkgPT4ge1xyXG4gICAgc2V0VG9nZ2xlZCghaXNUb2dnbGVkKTtcclxuICAgIG9wZW5OYXYoIWlzVG9nZ2xlZCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF1ZGlvU291bmRBbmRPcGVuKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxfKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHN0aWNreU5hdik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImt1cmFfdG1fdG9wYmFyXCJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BiYXJfaW5uZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtkYXJrID8gXCIvaW1nL2xvZ28vbG9nby5wbmdcIiA6IFwiL2ltZy9sb2dvL2RhcmsucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImFuY2hvcl9uYXZcIiBpZD1cImFuY2hvcl9uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjaG9tZVwiPkhvbWU8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3BvcnRmb2xpb1wiPlBvcnRmb2xpbzwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjc2tpbGxzXCI+U2tpbGxzPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiN0aW1lbGluZVwiPlRpbWVsaW5lPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwcmljZVwiPlByaWNlPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNuZXdzXCI+TmV3czwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiPkNvbnRhY3Q8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpZ2dlclwiIG9uQ2xpY2s9eygpID0+IHRvZ2dsZVRydWVGYWxzZSgpfT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGFtYnVyZ2VyIGhhbWJ1cmdlci0tc2xpZGVyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNUb2dnbGVkID8gXCIgaXMtYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlci1pbm5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJrdXJhX3RtX21vYmlsZV9tZW51XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGVfbWVudV9pbm5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2JpbGVfaW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtkYXJrID8gXCIvaW1nL2xvZ28vbG9nby5wbmdcIiA6IFwiL2ltZy9sb2dvL2RhcmsucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpZ2dlclwiIG9uQ2xpY2s9e3RvZ2dsZVRydWVGYWxzZX0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgaXNUb2dnbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImhhbWJ1cmdlciBoYW1idXJnZXItLXNsaWRlciBpcy1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJoYW1idXJnZXIgaGFtYnVyZ2VyLS1zbGlkZXJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhbWJ1cmdlci1pbm5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lzVG9nZ2xlZCA/IFwiZHJvcGRvd24gYWN0aXZlXCIgOiBcImRyb3Bkb3duXCJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bl9pbm5lclwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYW5jaG9yX25hdlwiPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjdXJyZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2hvbWVcIj5Ib21lPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNwb3J0Zm9saW9cIj5Qb3J0Zm9saW88L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI3NraWxsc1wiPlNraWxsczwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjdGltZWxpbmVcIj5UaW1lbGluZTwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJpY2VcIj5QcmljZTwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjbmV3c1wiPk5ld3M8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2NvbnRhY3RcIj5Db250YWN0PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTZXR0aW5ncyA9ICgpID0+IHtcclxuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXJzb3IsIHNldEN1cnNvcl0gPSB1c2VTdGF0ZSgxKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgY29sb3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNjb2xvcnMgbGkgYVwiKTtcclxuICAgIGNvbG9ycy5mb3JFYWNoKChjb2xvcikgPT4ge1xyXG4gICAgICBjb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5rdXJhX3RtX2FsbF93cmFwXCIpXHJcbiAgICAgICAgICAuc2V0QXR0cmlidXRlKFwiZGF0YS1jb2xvclwiLCBjb2xvci5jbGFzc0xpc3RbMF0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DbGljayA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0Q3Vyc29yKHZhbHVlKTtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmt1cmFfdG1fYWxsX3dyYXBcIilcclxuICAgICAgLnNldEF0dHJpYnV0ZShcImRhdGEtbWFnaWMtY3Vyc29yXCIsIHZhbHVlID09PSAxID8gXCJzaG93XCIgOiBcImhpZGVcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtga3VyYV90bV9zZXR0aW5ncyAke3RvZ2dsZSA/IFwib3BlbmVkXCIgOiBcIlwifWB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiPlxyXG4gICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxyXG4gICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgaWQ9XCJDYXBhXzFcIlxyXG4gICAgICAgICAgICB4PVwiMHB4XCJcclxuICAgICAgICAgICAgeT1cIjBweFwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjY4Ljc2NSAyNjguNzY1XCJcclxuICAgICAgICAgICAgeG1sU3BhY2U9XCJwcmVzZXJ2ZVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInN2ZyBzZXR0aW5nU3ZnIHJlcGxhY2VkLXN2ZyBjaGFuZ2VEYXJrXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGcgaWQ9XCJTZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgZD1cIk0yNjcuOTIsMTE5LjQ2MWMtMC40MjUtMy43NzgtNC44My02LjYxNy04LjYzOS02LjYxNyAgICBjLTEyLjMxNSwwLTIzLjI0My03LjIzMS0yNy44MjYtMTguNDE0Yy00LjY4Mi0xMS40NTQtMS42NjMtMjQuODEyLDcuNTE1LTMzLjIzMWMyLjg4OS0yLjY0MSwzLjI0LTcuMDYyLDAuODE3LTEwLjEzMyAgICBjLTYuMzAzLTguMDA0LTEzLjQ2Ny0xNS4yMzQtMjEuMjg5LTIxLjVjLTMuMDYzLTIuNDU4LTcuNTU3LTIuMTE2LTEwLjIxMywwLjgyNWMtOC4wMSw4Ljg3MS0yMi4zOTgsMTIuMTY4LTMzLjUxNiw3LjUyOSAgICBjLTExLjU3LTQuODY3LTE4Ljg2Ni0xNi41OTEtMTguMTUyLTI5LjE3NmMwLjIzNS0zLjk1My0yLjY1NC03LjM5LTYuNTk1LTcuODQ5Yy0xMC4wMzgtMS4xNjEtMjAuMTY0LTEuMTk3LTMwLjIzMi0wLjA4ICAgIGMtMy44OTYsMC40My02Ljc4NSwzLjc4Ni02LjY1NCw3LjY4OWMwLjQzOCwxMi40NjEtNi45NDYsMjMuOTgtMTguNDAxLDI4LjY3MmMtMTAuOTg1LDQuNDg3LTI1LjI3MiwxLjIxOC0zMy4yNjYtNy41NzQgICAgYy0yLjY0Mi0yLjg5Ni03LjA2My0zLjI1Mi0xMC4xNDEtMC44NTNjLTguMDU0LDYuMzE5LTE1LjM3OSwxMy41NTUtMjEuNzQsMjEuNDkzYy0yLjQ4MSwzLjA4Ni0yLjExNiw3LjU1OSwwLjgwMiwxMC4yMTQgICAgYzkuMzUzLDguNDcsMTIuMzczLDIxLjk0NCw3LjUxNCwzMy41M2MtNC42MzksMTEuMDQ2LTE2LjEwOSwxOC4xNjUtMjkuMjQsMTguMTY1Yy00LjI2MS0wLjEzNy03LjI5NiwyLjcyMy03Ljc2Miw2LjU5NyAgICBjLTEuMTgyLDEwLjA5Ni0xLjE5NiwyMC4zODMtMC4wNTgsMzAuNTYxYzAuNDIyLDMuNzk0LDQuOTYxLDYuNjA4LDguODEyLDYuNjA4YzExLjcwMi0wLjI5OSwyMi45MzcsNi45NDYsMjcuNjUsMTguNDE1ICAgIGM0LjY5OCwxMS40NTQsMS42NzgsMjQuODA0LTcuNTE0LDMzLjIzYy0yLjg3NSwyLjY0MS0zLjI0LDcuMDU1LTAuODE3LDEwLjEyNmM2LjI0NCw3Ljk1MywxMy40MDksMTUuMTksMjEuMjU5LDIxLjUwOCAgICBjMy4wNzksMi40ODEsNy41NTksMi4xMzEsMTAuMjI4LTAuODFjOC4wNC04Ljg5MywyMi40MjctMTIuMTg0LDMzLjUwMS03LjUzNmMxMS41OTksNC44NTIsMTguODk1LDE2LjU3NSwxOC4xODEsMjkuMTY3ICAgIGMtMC4yMzMsMy45NTUsMi42Nyw3LjM5OCw2LjU5NSw3Ljg1YzUuMTM1LDAuNTk5LDEwLjMwMSwwLjg5OCwxNS40ODEsMC44OThjNC45MTcsMCw5LjgzNS0wLjI3LDE0Ljc1Mi0wLjgxNyAgICBjMy44OTctMC40Myw2Ljc4NC0zLjc4Niw2LjY1My03LjY5NmMtMC40NTEtMTIuNDU0LDYuOTQ2LTIzLjk3MywxOC4zODYtMjguNjU3YzExLjA1OS00LjUxNywyNS4yODYtMS4yMTEsMzMuMjgxLDcuNTcyICAgIGMyLjY1NywyLjg5LDcuMDQ3LDMuMjM5LDEwLjE0MiwwLjg0OGM4LjAzOS02LjMwNCwxNS4zNDktMTMuNTM0LDIxLjc0LTIxLjQ5NGMyLjQ4LTMuMDc5LDIuMTMtNy41NTktMC44MDMtMTAuMjEzICAgIGMtOS4zNTMtOC40Ny0xMi4zODgtMjEuOTQ2LTcuNTI5LTMzLjUyNGM0LjU2OC0xMC44OTksMTUuNjEyLTE4LjIxNywyNy40OTEtMTguMjE3bDEuNjYyLDAuMDQzICAgIGMzLjg1MywwLjMxMyw3LjM5OC0yLjY1NSw3Ljg2NS02LjU4OEMyNjkuMDQ0LDEzOS45MTcsMjY5LjA1OCwxMjkuNjM5LDI2Ny45MiwxMTkuNDYxeiBNMTM0LjU5NSwxNzkuNDkxICAgIGMtMjQuNzE4LDAtNDQuODI0LTIwLjEwNi00NC44MjQtNDQuODI0YzAtMjQuNzE3LDIwLjEwNi00NC44MjQsNDQuODI0LTQ0LjgyNGMyNC43MTcsMCw0NC44MjMsMjAuMTA3LDQ0LjgyMyw0NC44MjQgICAgQzE3OS40MTgsMTU5LjM4NSwxNTkuMzEyLDE3OS40OTEsMTM0LjU5NSwxNzkuNDkxelwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZpbGxSdWxlOiBcImV2ZW5vZGRcIiwgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiIH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8ZyAvPlxyXG4gICAgICAgICAgICA8ZyAvPlxyXG4gICAgICAgICAgICA8ZyAvPlxyXG4gICAgICAgICAgICA8ZyAvPlxyXG4gICAgICAgICAgICA8ZyAvPlxyXG4gICAgICAgICAgICA8ZyAvPlxyXG4gICAgICAgICAgICA8ZyAvPlxyXG4gICAgICAgICAgICA8ZyAvPlxyXG4gICAgICAgICAgICA8ZyAvPlxyXG4gICAgICAgICAgICA8ZyAvPlxyXG4gICAgICAgICAgICA8ZyAvPlxyXG4gICAgICAgICAgICA8ZyAvPlxyXG4gICAgICAgICAgICA8ZyAvPlxyXG4gICAgICAgICAgICA8ZyAvPlxyXG4gICAgICAgICAgICA8ZyAvPlxyXG4gICAgICAgICAgPC9zdmc+XHJcblxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpfT48L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aXRsZVwiPlVubGltaXRlZCBDb2xvcnM8L3NwYW4+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sb3JzXCIgaWQ9XCJjb2xvcnNcIj5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJsdWVcIiBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyZWVuXCIgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJicm93blwiIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicGlua1wiIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwib3JhbmdlXCIgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJibFwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJsYWNrXCIgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ3aFwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIndoaXRlXCIgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwdXJwbGVcIiBocmVmPVwiI1wiPjwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInNreVwiIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FkZXRCbHVlXCIgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjcmltc29uXCIgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvbGl2ZVwiIGhyZWY9XCIjXCI+PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVkXCIgaHJlZj1cIiNcIj48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5NYWdpYyBDdXJzb3I8L3NwYW4+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY3Vyc29yXCI+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjdXJzb3IgPT09IDEgPyBcInNob3dtZSBzaG93XCIgOiBcImhpZGRlblwifWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKDEpfVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgID48L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjdXJzb3IgPT09IDIgPyBcInNob3dtZSBzaG93XCIgOiBcImhpZGRlblwifWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKDIpfVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwiQ2FwYV8xXCJcclxuICAgICAgICAgICAgICAgICAgZW5hYmxlQmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NTEyfVxyXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17NTEyfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdmcgc2V0dGluZ1N2ZyByZXBsYWNlZC1zdmcgY2hhbmdlRGFya1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwibTQ1MS4wMDIgMTgzLjU3NGgyOS45OTd2ODQuODUzaC0yOS45OTd6XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cIm1hdHJpeCguNzA3IC0uNzA3IC43MDcgLjcwNyAtMjMuMzE4IDM5NS43MDYpXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwibTI3MS4wMDIgMy41NzRoMjkuOTk3djg0Ljg1M2gtMjkuOTk3elwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJtYXRyaXgoLjcwNyAtLjcwNyAuNzA3IC43MDcgNTEuMjQxIDIxNS43MDYpXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwibTQyMy41NzQgMzEuMDAyaDg0Ljg1M3YyOS45OTdoLTg0Ljg1M3pcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwibWF0cml4KC43MDcgLS43MDcgLjcwNyAuNzA3IDEwMy45NjEgMzQyLjk4NSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm00Mi40MjIgNTEyIDE1MC40NTgtMTUwLjQ1OCA0Mi4xMTQgMTI1LjQ2NCAxNTIuOTg4LTM2Mi45ODgtMzYyLjk4OCAxNTIuOTg4IDEyNS40NjQgNDIuMTE0LTE1MC40NTggMTUwLjQ1OHpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJtMzYxIDBoMzB2NjFoLTMwelwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIm00NTEgMTIxaDYxdjMwaC02MXpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5ncztcclxuIiwiaW1wb3J0IFN3aXBlckNvcmUsIHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiB9IGZyb20gXCJzd2lwZXJcIjtcclxuU3dpcGVyQ29yZS51c2UoW1BhZ2luYXRpb24sIE5hdmlnYXRpb25dKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3J0Zm9saW9TbGlkZXIgPSB7XHJcbiAgc2xpZGVzUGVyVmlldzogMyxcclxuICBzcGFjZUJldHdlZW46IDMwLFxyXG4gIGxvb3A6IHRydWUsXHJcbiAgcGFnaW5hdGlvbjogZmFsc2UsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgcHJldkVsOiBcIi5teV9wcmV2XCIsXHJcbiAgICBuZXh0RWw6IFwiLm15X25leHRcIixcclxuICB9LFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAzMjA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgIH0sXHJcbiAgICA2NDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgIH0sXHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgIH0sXHJcbiAgICAxMDI0OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogNDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbmV3c1NsaWRlciA9IHtcclxuICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBwYWdpbmF0aW9uOiBmYWxzZSxcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBwcmV2RWw6IFwiLm15X3ByZXZcIixcclxuICAgIG5leHRFbDogXCIubXlfbmV4dFwiLFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDMyMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgfSxcclxuICAgIDY0MDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgfSxcclxuICAgIDEwMjQ6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiA0MCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiY29uc3Qga3VyYV90bV9wcmVsb2FkZXIgPSAoKSA9PiB7XHJcbiAgbGV0IGlzTW9iaWxlID0gL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5L2kudGVzdChcclxuICAgIG5hdmlnYXRvci51c2VyQWdlbnRcclxuICApXHJcbiAgICA/IHRydWVcclxuICAgIDogZmFsc2U7XHJcbiAgbGV0IHByZWxvYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlbG9hZGVyXCIpO1xyXG5cclxuICBpZiAocHJlbG9hZGVyKSB7XHJcbiAgICBpZiAoIWlzTW9iaWxlKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHByZWxvYWRlci5jbGFzc0xpc3QuYWRkKFwicHJlbG9hZGVkXCIpO1xyXG4gICAgICB9LCA4MDApO1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwcmVsb2FkZXIucmVtb3ZlKCk7XHJcbiAgICAgIH0sIDIwMDApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJlbG9hZGVyLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB3b3dKc0FuaW1hdGlvbiA9ICgpID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgd2luZG93LldPVyA9IHJlcXVpcmUoXCJ3b3dqc1wiKTtcclxuICB9XHJcbiAgbmV3IFdPVy5XT1coKS5pbml0KCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY3VzdG9tQ3Vyc29yID0gKCkgPT4ge1xyXG4gIHZhciBteUN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW91c2UtY3Vyc29yXCIpLFxyXG4gICAgaGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oYW1idXJnZXJcIiksXHJcbiAgICBrdXJhX3RtX3RvcGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIua3VyYV90bV90b3BiYXIgXCIpLFxyXG4gICAgcG9pbnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3Vyc29yLXBvaW50ZXJcIiksXHJcbiAgICBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJzb3ItaW5uZXJcIiksXHJcbiAgICB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXJzb3Itb3V0ZXJcIik7XHJcblxyXG4gIGZ1bmN0aW9uIG1vdXNlRXZlbnQoZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGUuY2xhc3NMaXN0LmFkZChcImN1cnNvci1ob3ZlclwiKSwgdC5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yLWhvdmVyXCIpO1xyXG4gICAgfSk7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiY3Vyc29yLWhvdmVyXCIpLCB0LmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJzb3ItaG92ZXJcIik7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKG15Q3Vyc29yLmxlbmd0aCkge1xyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgbGV0IG4sXHJcbiAgICAgICAgaSA9IDAsXHJcbiAgICAgICAgbyA9ICExO1xyXG4gICAgICAod2luZG93Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMpKTtcclxuICAgICAgICBvIHx8XHJcbiAgICAgICAgICAodC5zdHlsZS50cmFuc2Zvcm0gPVxyXG4gICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIHMuY2xpZW50WCArIFwicHgsIFwiICsgcy5jbGllbnRZICsgXCJweClcIiksXHJcbiAgICAgICAgICAoZS5zdHlsZS50cmFuc2Zvcm0gPVxyXG4gICAgICAgICAgICBcInRyYW5zbGF0ZShcIiArIHMuY2xpZW50WCArIFwicHgsIFwiICsgcy5jbGllbnRZICsgXCJweClcIiksXHJcbiAgICAgICAgICAobiA9IHMuY2xpZW50WSksXHJcbiAgICAgICAgICAoaSA9IHMuY2xpZW50WCk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICAgIFwibW91c2VlbnRlclwiLFxyXG4gICAgICAgICAgLy8gXCJhLC5rdXJhX3RtX3RvcGJhciAudHJpZ2dlciwgLmN1cnNvci1wb2ludGVyXCIsXHJcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFcIik7XHJcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZChcImN1cnNvci1pbm5lclwiKSwgdC5jbGFzc0xpc3QuYWRkKFwiY3Vyc29yLW91dGVyXCIpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGFbaV07XHJcbiAgICAgICAgICAgICAgbW91c2VFdmVudChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaGFtYnVyZ2VyICYmIG1vdXNlRXZlbnQoaGFtYnVyZ2VyKTtcclxuICAgICAgICAgICAga3VyYV90bV90b3BiYXIgJiYgbW91c2VFdmVudChrdXJhX3RtX3RvcGJhcik7XHJcbiAgICAgICAgICAgIHBvaW50ZXIgJiYgbW91c2VFdmVudChwb2ludGVyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApLFxyXG4gICAgICAgIChlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIiksXHJcbiAgICAgICAgKHQuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qga3VyYV90bV9teV9sb2FkID0gKCkgPT4ge1xyXG4gIGt1cmFfdG1fcHJlbG9hZGVyKCk7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5jbGFzc0xpc3QuYWRkKFwib3BlbmVkXCIpO1xyXG4gIH0sIDE1MDApO1xyXG59O1xyXG5cclxuLy8gSGVhZGVyXHJcbmV4cG9ydCBjb25zdCBzdGlja3lOYXYgPSAoKSA9PiB7XHJcbiAgbGV0IG9mZnNldCA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gIGNvbnN0IHN0aWNreXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmt1cmFfdG1fdG9wYmFyXCIpO1xyXG4gIHN0aWNreXMuZm9yRWFjaCgoc3RpY2t5KSA9PiB7XHJcbiAgICBpZiAoc3RpY2t5KSB7XHJcbiAgICAgIGlmIChvZmZzZXQgPiAxMDApIHtcclxuICAgICAgICBzdGlja3kuY2xhc3NMaXN0LmFkZChcImFuaW1hdGVcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RpY2t5LmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXVkaW9Tb3VuZEFuZE9wZW4gPSAoKSA9PiB7XHJcbiAgdmFyIGF1ZGlvMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjYXVkaW8xXCIpO1xyXG4gIHZhciBhdWRpbzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2F1ZGlvMlwiKTtcclxuICB2YXIgaGFtYnVyZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudHJpZ2dlciAuaGFtYnVyZ2VyXCIpO1xyXG5cclxuICBoYW1idXJnZXJzLmZvckVhY2goKGhhbWJ1cmdlcikgPT4ge1xyXG4gICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcztcclxuXHJcbiAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLWFjdGl2ZVwiKSkge1xyXG4gICAgICAgIGF1ZGlvMVswXS5wbGF5KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXVkaW8yWzBdLnBsYXkoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBvcGVuTmF2ID0gKHRvZ2dsZSkgPT4ge1xyXG4gIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNhbmNob3JfbmF2PiBsaVwiKTtcclxuICBpZiAobmF2SXRlbXMpIHtcclxuICAgIG5hdkl0ZW1zLmZvckVhY2goKG5hdikgPT4ge1xyXG4gICAgICB0b2dnbGUgPyBuYXYuY2xhc3NMaXN0LmFkZChcIm9wZW5lZFwiKSA6IG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwib3BlbmVkXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGl2ZVNraWxsUHJvZ3Jlc3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgYm94ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJhclwiKTtcclxuICBjb25zdCB0cmlnZ2VyQm90dG9tID0gKHdpbmRvdy5pbm5lckhlaWdodCAvIDUpICogNTtcclxuICBib3hlcy5mb3JFYWNoKChib3gpID0+IHtcclxuICAgIGNvbnN0IGJveFRvcCA9IGJveC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcbiAgICBpZiAoYm94VG9wIDwgdHJpZ2dlckJvdHRvbSkge1xyXG4gICAgICBib3guY2xhc3NMaXN0LmFkZChcIm9wZW5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG4vLyBhY3RpdmVcclxuZXhwb3J0IGNvbnN0IGFjdGl2ZU1lbnVCeVNlY3Rpb24gPSAoaWQpID0+IHtcclxuICBjb25zdCBib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYCMke2lkID8gaWQgOiBcImhvbWVcIn1gKTtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGVja0JveGVzKTtcclxuICBjaGVja0JveGVzKCk7XHJcbiAgZnVuY3Rpb24gY2hlY2tCb3hlcygpIHtcclxuICAgIGNvbnN0IHRyaWdnZXJCb3R0b20gPSAod2luZG93LmlubmVySGVpZ2h0IC8gNSkgKiA1O1xyXG4gICAgYm94ZXMuZm9yRWFjaCgoYm94KSA9PiB7XHJcbiAgICAgIGNvbnN0IGJveFRvcCA9IGJveC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XHJcblxyXG4gICAgICBpZiAoYm94VG9wIDwgdHJpZ2dlckJvdHRvbSkge1xyXG4gICAgICAgIGFjdGl2ZU1lbnUoaWQgPyBpZCA6IFwiaG9tZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhY3RpdmVNZW51KFwiXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBhY3RpdmVNZW51ID0gKGFjdGl2ZSkgPT4ge1xyXG4gIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNhbmNob3JfbmF2PiBsaVwiKTtcclxuICBpZiAobmF2SXRlbXMpIHtcclxuICAgIG5hdkl0ZW1zLmZvckVhY2goKG5hdikgPT4ge1xyXG4gICAgICBpZiAobmF2LmNsYXNzTGlzdC5jb250YWlucyhhY3RpdmUpKSB7XHJcbiAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgYVRhZ0NsaWNrID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2hyZWY9JyMnXVwiKTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFUYWcubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGEgPSBhVGFnW2ldO1xyXG4gICAgYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNjcm9sbF8gPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmt1cmFfdG1fc2VjdGlvblwiKTtcclxuICBjb25zdCBuYXZMaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYW5jaG9yX25hdiBsaVwiKTtcclxuICBsZXQgY3VycmVudCA9IFwiXCI7XHJcbiAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgY29uc3Qgc2VjdGlvblRvcCA9IHNlY3Rpb24ub2Zmc2V0VG9wO1xyXG4gICAgY29uc3Qgc2VjdGlvbkhlaWdodCA9IHNlY3Rpb24uY2xpZW50SGVpZ2h0O1xyXG4gICAgaWYgKHBhZ2VZT2Zmc2V0ID49IHNlY3Rpb25Ub3AgLSBzZWN0aW9uSGVpZ2h0IC8gMykge1xyXG4gICAgICBjdXJyZW50ID0gc2VjdGlvbi5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgIH1cclxuICB9KTtcclxuICBuYXZMaS5mb3JFYWNoKChsaSkgPT4ge1xyXG4gICAgbGkuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcbiAgICBpZiAobGkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpWzBdLmdldEF0dHJpYnV0ZShcImhyZWZcIikgPT0gYCMke2N1cnJlbnR9YCkge1xyXG4gICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiY3VycmVudFwiKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9keW5hbWljJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImphcmFsbGF4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2xvYWRhYmxlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hd2Vzb21lLWxpZ2h0Ym94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlc3BvbnNpdmUtbW9kYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gaW1wb3J0KFwic3dpcGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IGltcG9ydChcInN3aXBlci9yZWFjdFwiKTs7Il0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibm9TU1IiLCJkZWZhdWx0IiwiZHluYW1pYyIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2xvYWRhYmxlIiwib2JqIiwiX19lc01vZHVsZSIsImlzU2VydmVyU2lkZSIsIkxvYWRhYmxlSW5pdGlhbGl6ZXIiLCJsb2FkYWJsZU9wdGlvbnMiLCJ3ZWJwYWNrIiwibW9kdWxlcyIsIkxvYWRpbmciLCJsb2FkaW5nIiwiY3JlYXRlRWxlbWVudCIsImVycm9yIiwiaXNMb2FkaW5nIiwicGFzdERlbGF5IiwidGltZWRPdXQiLCJkeW5hbWljT3B0aW9ucyIsIm9wdGlvbnMiLCJsb2FkYWJsZUZuIiwibWVzc2FnZSIsInN0YWNrIiwiUHJvbWlzZSIsImxvYWRlciIsInN1c3BlbnNlT3B0aW9ucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfQ09OQ1VSUkVOVF9GRUFUVVJFUyIsIl9fTkVYVF9SRUFDVF9ST09UIiwic3VzcGVuc2UiLCJFcnJvciIsImxvYWRhYmxlR2VuZXJhdGVkIiwic3NyIiwiRnJhZ21lbnQiLCJheGlvcyIsInVzZVN0YXRlIiwiQXVkaW8iLCJDb250YWN0IiwiQ3Vyc29yIiwiSG9tZSIsIk5ld3MiLCJQb3J0Zm9saW8iLCJQcmljZSIsIlNraWxscyIsIlRpbWVsaW5lIiwiRm9vdGVyIiwiSGVhZGVyIiwiU2V0dGluZ3MiLCJQYWdlSGVhZCIsIkluZGV4IiwiZGF0YSIsInBvcnRmb2xpb0RhdGEiLCJzZXRQb3J0Zm9saW9EYXRhIiwidXNlciIsImFib3V0IiwicG9ydGZvbGlvIiwic2tpbGxzIiwidGltZWxpbmUiLCJzZXJ2aWNlcyIsImdldFNlcnZlclNpZGVQcm9wcyIsInVzZXJJZCIsImFwaVVybCIsInJlc3BvbnNlIiwiZ2V0IiwicHJvcHMiLCJjb25zb2xlIiwiSGVhZCIsInBhZ2UiLCJ1c2VyTmFtZSIsIm5hbWUiLCJSZWFjdCIsImVuYWJsZUJhY2tncm91bmQiLCJhZGRyZXNzIiwicGhvbmVOdW1iZXIiLCJlbWFpbCIsIk1vZGFsIiwiTmV3c01vZGFsIiwib3BlbiIsIm9uQ2xvc2VNb2RhbCIsImltZyIsInRpdGxlIiwiZGF0ZSIsInBhZGRpbmciLCJtYXJnaW5Cb3R0b20iLCJIb21lTW9kYWwiLCJ1c2VFZmZlY3QiLCJjdXN0b21DdXJzb3IiLCJzZXRPcGVuIiwibW9kYWxWYWx1ZSIsInNldE1vZGFsVmFsdWUiLCJvbk9wZW5Nb2RhbCIsInN1YlRpdGxlIiwiYXZhdGFyVXJsIiwiYXZhdGFyIiwidXJsIiwiZXhwWWVhcnMiLCJleHBfeWVhciIsInRvdGFsIiwic29tZV90b3RhbCIsImJhY2tncm91bmRJbWFnZSIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwibmV3c1NsaWRlciIsIkxpZ2h0Qm94IiwicG9ydGZvbGlvU2xpZGVyIiwic2hvd0xpZ2h0Iiwic2V0U2hvd0xpZ2h0Iiwic2hvd0xpZ2h0Qm94IiwiaW5kZXgiLCJzdGFydEluZGV4IiwiaGlkZUxpZ2h0Qm94IiwicHJvamVjdHMiLCJtYXAiLCJwcm9qZWN0IiwiaW1hZ2UiLCJ0ZWNoU3RhY2siLCJqb2luIiwiX2lkIiwiZGVzY3JpcHRpb24iLCJjaGFyZ2UiLCJhY3RpdmVTa2lsbFByb2dyZXNzIiwiUGFyYWxsYXhWaWRlbyIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGVuZ3RoIiwiZW5hYmxlZFNraWxscyIsImZpbHRlciIsInNraWxsIiwiZW5hYmxlZCIsInNvcnQiLCJhIiwiYiIsInNlcXVlbmNlIiwicGVyY2VudGFnZSIsIndpZHRoIiwiZm9ybWF0IiwicmVuZGVyVGltZWxpbmVJdGVtIiwiaXRlbSIsIkRhdGUiLCJzdGFydERhdGUiLCJlbmREYXRlIiwiam9iVGl0bGUiLCJqb2JMb2NhdGlvbiIsInNvcnRlZFRpbWVsaW5lIiwiZm9yRWR1Y2F0aW9uIiwiZ2V0RnVsbFllYXIiLCJhdWRpb1NvdW5kQW5kT3BlbiIsIm9wZW5OYXYiLCJzY3JvbGxfIiwic3RpY2t5TmF2IiwiZGFyayIsImlzVG9nZ2xlZCIsInNldFRvZ2dsZWQiLCJ0b2dnbGVUcnVlRmFsc2UiLCJ0b2dnbGUiLCJzZXRUb2dnbGUiLCJjdXJzb3IiLCJzZXRDdXJzb3IiLCJjb2xvcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY29sb3IiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0Iiwib25DbGljayIsImZpbGxSdWxlIiwiY2xpcFJ1bGUiLCJTd2lwZXJDb3JlIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJ1c2UiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibG9vcCIsInBhZ2luYXRpb24iLCJuYXZpZ2F0aW9uIiwicHJldkVsIiwibmV4dEVsIiwiYnJlYWtwb2ludHMiLCJrdXJhX3RtX3ByZWxvYWRlciIsImlzTW9iaWxlIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInByZWxvYWRlciIsImdldEVsZW1lbnRCeUlkIiwic2V0VGltZW91dCIsImFkZCIsInJlbW92ZSIsIndvd0pzQW5pbWF0aW9uIiwiV09XIiwiaW5pdCIsIm15Q3Vyc29yIiwiaGFtYnVyZ2VyIiwia3VyYV90bV90b3BiYXIiLCJwb2ludGVyIiwiZSIsInQiLCJtb3VzZUV2ZW50IiwiZWxlbWVudCIsImJvZHkiLCJuIiwiaSIsIm8iLCJvbm1vdXNlbW92ZSIsInMiLCJzdHlsZSIsInRyYW5zZm9ybSIsImNsaWVudFgiLCJjbGllbnRZIiwidmlzaWJpbGl0eSIsImt1cmFfdG1fbXlfbG9hZCIsIm9mZnNldCIsInNjcm9sbFkiLCJzdGlja3lzIiwic3RpY2t5IiwiYXVkaW8xIiwiYXVkaW8yIiwiaGFtYnVyZ2VycyIsImNvbnRhaW5zIiwicGxheSIsIm5hdkl0ZW1zIiwibmF2IiwiYm94ZXMiLCJ0cmlnZ2VyQm90dG9tIiwiaW5uZXJIZWlnaHQiLCJib3giLCJib3hUb3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJhY3RpdmVNZW51QnlTZWN0aW9uIiwiaWQiLCJjaGVja0JveGVzIiwiYWN0aXZlTWVudSIsImFjdGl2ZSIsImFUYWdDbGljayIsImFUYWciLCJwcmV2ZW50RGVmYXVsdCIsInNlY3Rpb25zIiwibmF2TGkiLCJjdXJyZW50Iiwic2VjdGlvbiIsInNlY3Rpb25Ub3AiLCJvZmZzZXRUb3AiLCJzZWN0aW9uSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwicGFnZVlPZmZzZXQiLCJnZXRBdHRyaWJ1dGUiLCJsaSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==