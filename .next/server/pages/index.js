"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6124:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2704);
/* harmony import */ var _src_components_Contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9500);
/* harmony import */ var _src_components_Cursor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85);
/* harmony import */ var _src_components_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(253);
/* harmony import */ var _src_components_News__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1995);
/* harmony import */ var _src_components_Portfolio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4899);
/* harmony import */ var _src_components_Price__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3820);
/* harmony import */ var _src_components_Skills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7438);
/* harmony import */ var _src_components_Timeline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9666);
/* harmony import */ var _src_layout_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5096);
/* harmony import */ var _src_layout_Header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4882);
/* harmony import */ var _src_layout_Settings__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5194);
/* harmony import */ var _src_PageHead__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3946);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_News__WEBPACK_IMPORTED_MODULE_6__, _src_components_Portfolio__WEBPACK_IMPORTED_MODULE_7__]);
([_src_components_News__WEBPACK_IMPORTED_MODULE_6__, _src_components_Portfolio__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



















const Index = ({
  data
}) => {
  const {
    0: portfolioData,
    1: setPortfolioData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_src_PageHead__WEBPACK_IMPORTED_MODULE_14__/* .default */ .Z, {
      page: "Home",
      data: portfolioData
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
      id: "opened",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: "kura_tm_all_wrap",
        "data-color": "orange",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_src_layout_Settings__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_src_layout_Header__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {}), portfolioData && portfolioData.user && portfolioData.user.about && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_src_components_Home__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
          data: portfolioData
        }), portfolioData && portfolioData.user && portfolioData.user.portfolio && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_src_components_Portfolio__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
          data: portfolioData
        }), portfolioData && portfolioData.user && portfolioData.user.skills && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_src_components_Skills__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
          data: portfolioData
        }), portfolioData && portfolioData.user && portfolioData.user.timeline && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_src_components_Timeline__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
          data: portfolioData
        }), portfolioData && portfolioData.user && portfolioData.user.services && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_src_components_Price__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
          data: portfolioData
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_src_components_News__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {}), portfolioData && portfolioData.user && portfolioData.user.about && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_src_components_Contact__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          data: portfolioData
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_src_layout_Footer__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_src_components_Audio__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_src_components_Cursor__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {})]
      })
    })]
  });
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

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3879:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 4993:
/***/ ((module) => {

module.exports = require("jarallax");

/***/ }),

/***/ 2307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 671:
/***/ ((module) => {

module.exports = require("react-awesome-lightbox");

/***/ }),

/***/ 1463:
/***/ ((module) => {

module.exports = require("react-responsive-modal");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4074:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 2156:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,134,90,72], () => (__webpack_exec__(6124)));
module.exports = __webpack_exports__;

})();