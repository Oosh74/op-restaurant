/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/playfair-display-v39-latin-regular.woff2 */ \"./src/assets/fonts/playfair-display-v39-latin-regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/playfair-display-v39-latin-700.woff2 */ \"./src/assets/fonts/playfair-display-v39-latin-700.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/lora-v36-latin-regular.woff2 */ \"./src/assets/fonts/lora-v36-latin-regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/imgs/OLD_PAPER_TEXTURE-1.webp */ \"./src/assets/imgs/OLD_PAPER_TEXTURE-1.webp\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n  margin: 0;\n}\n\n/* 3. Enable keyword animations */\n@media (prefers-reduced-motion: no-preference) {\n  html {\n    interpolate-size: allow-keywords;\n  }\n}\n\nbody {\n  /* 4. Add accessible line-height */\n  line-height: 1.7;\n  /* 5. Improve text rendering */\n  -webkit-font-smoothing: antialiased;\n  font-family: 'Lora';\n  color: #2c2c2c;\n  font-size: var(--size-step-0);\n}\n\n/* 6. Improve media defaults */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n\n/* 7. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* 8. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n\nh1 {\n  font-size: var(--size-step-4);\n  max-width: 20ch;\n}\n\nh2,\nh3 {\n  max-width: 28ch;\n}\n\nh2 {\n  font-size: var(--size-step-3);\n}\n\nh3 {\n  font-size: var(--size-step-2);\n}\n\n/* 9. Improve line wrapping */\np {\n  text-wrap: pretty;\n  font-family: 'Lora';\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  text-wrap: balance;\n  font-family: 'Playfair Display';\n  font-weight: 700;\n  line-height: 1.1;\n  color: #2c2c2c;\n}\n\n/*\n  10. Create a root stacking context\n*/\nbutton {\n  -webkit-appearance: none;\n  border-radius: 0;\n  text-align: inherit;\n  background: none;\n  box-shadow: none;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  color: inherit;\n  font: inherit;\n}\n\n#root,\n#__next {\n  isolation: isolate;\n}\n\n:root {\n  --complimentary-color: #f0ede5;\n  --background-beige: #fbf9f5;\n  --size-step-0: clamp(1rem, calc(0.96rem + 0.22vw), 1.13rem);\n  --size-step-1: clamp(1.25rem, calc(1.16rem + 0.43vw), 1.5rem);\n  --size-step-2: clamp(1.56rem, calc(1.41rem + 0.76vw), 2rem);\n  --size-step-3: clamp(1.95rem, calc(1.71rem + 1.24vw), 2.66rem);\n  --size-step-4: clamp(2.44rem, calc(2.05rem + 1.93vw), 3.55rem);\n}\n\n/* playfair-display-regular - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: 'Playfair Display';\n  font-style: normal;\n  font-weight: 400;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___})\n    format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n/* playfair-display-700 - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: 'Playfair Display';\n  font-style: normal;\n  font-weight: 700;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___})\n    format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n/* lora-regular - latin */\n@font-face {\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n  font-family: 'Lora';\n  font-style: normal;\n  font-weight: 400;\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\nheader {\n  padding: 16px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #fbf9f5;\n}\n\nnav {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 1200px;\n  width: 90%;\n}\n\n.nav-btns-container {\n  display: flex;\n  gap: 4px;\n  margin-right: 8px;\n}\n\n.nav-logo-container {\n  margin-right: auto;\n}\n\n.nav-cta-btn {\n  margin-left: 24px;\n}\n\n.nav-btn,\n#hero-btn {\n  cursor: pointer;\n  padding: 4px;\n  font-size: clamp(0.75rem, 2vw + 1rem, 1rem);\n}\n\n#order-online-btn,\n#hero-btn {\n  background-color: #8c5e3c;\n  color: white;\n  padding: 8px 16px;\n  text-align: center;\n  line-height: 1.2;\n}\n\n#hero-btn {\n  margin-top: 32px;\n  max-width: 50%;\n}\n\n.nav-btn:hover:not(#order-online-btn) {\n  border-bottom: 1px solid black;\n}\n\n.hero-section {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\n  background-repeat: repeat;\n  background-position: top left;\n  background-size: auto;\n  padding: clamp(56px, 5vw, 80px) 0;\n}\n\n.section-container,\n.form-container {\n  max-width: 1200px;\n  width: 90%;\n  height: auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.menu-section,\n.form-container {\n  flex-direction: column;\n}\n\n.hero-text-column {\n  flex-basis: 50%;\n  display: flex;\n  flex-direction: column;\n}\n\n.hero-text-column h1 {\n  margin-bottom: 32px;\n}\n\n.hero-text-column p {\n  max-width: 50ch;\n}\n\n.hero-img-column {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-basis: 50%;\n}\n\n.hero-img-column img {\n  max-height: 550px;\n  width: auto;\n  border-radius: 24px;\n  min-height: auto;\n}\n\nfooter {\n  display: flex;\n  padding: clamp(24px, 2vw, 56px) 0px;\n  align-items: center;\n  justify-content: center;\n  background-color: #fbf9f5;\n  flex-direction: column;\n}\n\n.footer-container,\n.copyright {\n  display: flex;\n  flex-direction: row;\n  max-width: 1200px;\n  gap: 24px;\n  width: 90%;\n  justify-content: center;\n  align-content: center;\n}\n\n.copyright {\n  margin-top: 40px;\n  text-align: center;\n  max-width: 100ch;\n  font-size: 0.9rem;\n}\n\n.footer-column {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.footer-column h2 {\n  margin-bottom: 16px;\n}\n\n.footer-btns {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  gap: 4px;\n}\n\n.menu-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: auto auto;\n  gap: 80px;\n}\n\n.menu-section {\n  display: flex;\n  gap: 16px;\n}\n\n.sub-menu-item {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 16px;\n}\n\n.menu-section h1 {\n  margin-bottom: 32px;\n}\n\n.menu-section:nth-child(1) {\n  grid-column: 1;\n  grid-row: 1 / span 2;\n}\n\n.menu-section:nth-child(2) {\n  grid-column: 3;\n}\n\n.menu-section:nth-child(3) {\n  grid-column: 2;\n  grid-row: 1 / span 2;\n}\n\n.menu-section:nth-child(4) {\n  grid-column: 3;\n  grid-row: 2;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n  gap: 40px;\n}\n\nform button {\n  background-color: rgba(255, 255, 255, 0.314);\n  padding: 16px 24px;\n  text-align: center;\n  border: 1px solid rgb(244, 244, 244);\n  box-shadow: 0px 0px 12px -8px #00000030;\n}\n\n.form-element-container {\n  display: flex;\n  flex-direction: column;\n}\n\n@media (max-width: 768px) {\n  .section-container {\n    flex-direction: column;\n  }\n\n  .hero-text-column {\n    margin-bottom: 32px;\n  }\n\n  .nav-logo-container,\n  .nav-cta-btn,\n  .nav-btns-container {\n    margin: 0;\n  }\n\n  nav {\n    gap: 8px;\n  }\n\n  .nav-cta-btn {\n    display: none;\n  }\n\n  .footer-container {\n    flex-direction: column;\n  }\n\n  .menu-grid {\n    display: flex !important;\n    flex-direction: column;\n    gap: 40px;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://op-restaurant/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://op-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://op-restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://op-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://op-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://op-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://op-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://op-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://op-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://op-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/fonts/lora-v36-latin-regular.woff2":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/lora-v36-latin-regular.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1c5b39f71ec9893c2d11.woff2\";\n\n//# sourceURL=webpack://op-restaurant/./src/assets/fonts/lora-v36-latin-regular.woff2?");

/***/ }),

/***/ "./src/assets/fonts/playfair-display-v39-latin-700.woff2":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/playfair-display-v39-latin-700.woff2 ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c5ef2f58f78c060654eb.woff2\";\n\n//# sourceURL=webpack://op-restaurant/./src/assets/fonts/playfair-display-v39-latin-700.woff2?");

/***/ }),

/***/ "./src/assets/fonts/playfair-display-v39-latin-regular.woff2":
/*!*******************************************************************!*\
  !*** ./src/assets/fonts/playfair-display-v39-latin-regular.woff2 ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b62b7a3c7bf50278e98f.woff2\";\n\n//# sourceURL=webpack://op-restaurant/./src/assets/fonts/playfair-display-v39-latin-regular.woff2?");

/***/ }),

/***/ "./src/assets/imgs/OLD_PAPER_TEXTURE-1.webp":
/*!**************************************************!*\
  !*** ./src/assets/imgs/OLD_PAPER_TEXTURE-1.webp ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2a10ff934c32a183d829.webp\";\n\n//# sourceURL=webpack://op-restaurant/./src/assets/imgs/OLD_PAPER_TEXTURE-1.webp?");

/***/ }),

/***/ "./src/assets/imgs/prancing-pony-drawing-1.webp":
/*!******************************************************!*\
  !*** ./src/assets/imgs/prancing-pony-drawing-1.webp ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2898b8272d37548dd4ab.webp\";\n\n//# sourceURL=webpack://op-restaurant/./src/assets/imgs/prancing-pony-drawing-1.webp?");

/***/ }),

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst aboutPage = () => {\n  const section = document.createElement('section');\n  const title = document.createElement('h1');\n  const paragraph = document.createElement('p');\n  const container = document.createElement('div');\n  const textColumn = document.createElement('div');\n\n  section.classList.add('hero-section');\n  container.classList.add('section-container');\n  textColumn.classList.add('hero-text-column');\n\n  title.textContent = 'About Us';\n  paragraph.textContent =\n    \"Bree's most beloved inn and meeting place for travelers, adventurers, and locals alike. Nestled at the crossroads of the Great East Road and the Greenway, our establishment has been serving fine ale, hearty meals, and warm beds since the Third Age. Owned and operated by the ever-hospitable Barliman Butterbur, The Prancing Pony offers more than just food and lodging. It's a place where stories are shared, songs are sung, and the unexpected often finds its way through the front door. Whether you're a ranger passing through, a hobbit far from home, or just someone in search of a good pint, there's always a seat by the fire waiting for you. So take off your cloak, rest your feet, and stay awhile. You never know who you'll meet — or what tale you'll become part of — at The Prancing Pony.\";\n\n  section.appendChild(container);\n  container.appendChild(textColumn);\n  textColumn.appendChild(title);\n  textColumn.appendChild(paragraph);\n\n  return section;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);\n\n\n//# sourceURL=webpack://op-restaurant/./src/components/about.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactPage = () => {\n  const section = document.createElement('section');\n  const title = document.createElement('h1');\n  const container = document.createElement('div');\n  const form = document.createElement('form');\n  const firstNameLabel = document.createElement('label');\n  const lastNameLabel = document.createElement('label');\n  const emailLabel = document.createElement('label');\n  const msgLabel = document.createElement('label');\n  const firstNameInput = document.createElement('input');\n  const lastNameInput = document.createElement('input');\n  const emailInput = document.createElement('input');\n  const msgInput = document.createElement('textarea');\n  const firstNameContainer = document.createElement('div');\n  const lastNameContainer = document.createElement('div');\n  const emailContainer = document.createElement('div');\n  const msgContainer = document.createElement('div');\n\n  const submitBtn = document.createElement('button');\n\n  section.classList.add('hero-section');\n  container.classList.add('form-container');\n  firstNameContainer.classList.add('form-element-container');\n  lastNameContainer.classList.add('form-element-container');\n  emailContainer.classList.add('form-element-container');\n  msgContainer.classList.add('form-element-container');\n\n  title.textContent = 'Contact Us';\n  firstNameLabel.textContent = 'First Name';\n  lastNameLabel.textContent = 'Last Name';\n  emailLabel.textContent = 'Email';\n  msgLabel.textContent = 'Message';\n  firstNameLabel.setAttribute('for', 'first-name');\n  lastNameLabel.setAttribute('for', 'last-name');\n  emailLabel.setAttribute('for', 'email');\n  msgLabel.setAttribute('for', 'msg');\n  firstNameInput.setAttribute('id', 'first-name');\n  firstNameInput.setAttribute('type', 'text');\n  firstNameInput.setAttribute('name', 'first-name');\n  emailInput.setAttribute('type', 'email');\n  emailInput.setAttribute('id', 'email');\n  emailInput.setAttribute('name', 'email');\n  lastNameInput.setAttribute('id', 'last-name');\n  lastNameInput.setAttribute('type', 'input');\n  lastNameInput.setAttribute('name', 'last-name');\n  msgInput.setAttribute('id', 'msg');\n  msgInput.setAttribute('form', 'contact-form');\n  msgInput.setAttribute('name', 'msg');\n  form.setAttribute('id', 'contact-form');\n\n  submitBtn.textContent = 'Send Message';\n\n  section.appendChild(container);\n  container.appendChild(title);\n  container.appendChild(form);\n  form.append(\n    firstNameContainer,\n    lastNameContainer,\n    emailContainer,\n    msgContainer\n  );\n  firstNameContainer.append(firstNameLabel, firstNameInput);\n  lastNameContainer.append(lastNameLabel, lastNameInput);\n  emailContainer.append(emailLabel, emailInput);\n  msgContainer.append(msgLabel, msgInput);\n\n  form.append(submitBtn);\n\n  submitBtn.addEventListener('click', (event) => {\n    event.preventDefault();\n\n    form.remove();\n    let msgSent = document.createElement('p');\n    msgSent.textContent = 'Message has been sent!';\n    container.append(msgSent);\n  });\n\n  return section;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n\n//# sourceURL=webpack://op-restaurant/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/homepage.js":
/*!************************************!*\
  !*** ./src/components/homepage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_imgs_prancing_pony_drawing_1_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/imgs/prancing-pony-drawing-1.webp */ \"./src/assets/imgs/prancing-pony-drawing-1.webp\");\n\n\nconst homePage = () => {\n  const section = document.createElement('section');\n  const title = document.createElement('h1');\n  const paragraph = document.createElement('p');\n  const container = document.createElement('div');\n  const textColumn = document.createElement('div');\n  const imgColumn = document.createElement('div');\n  const imgElement = document.createElement('img');\n  const heroBtn = document.createElement('button');\n\n  section.classList.add('hero-section');\n  container.classList.add('section-container');\n  textColumn.classList.add('hero-text-column');\n  imgColumn.classList.add('hero-img-column');\n  heroBtn.id = 'hero-btn';\n\n  imgElement.src = _assets_imgs_prancing_pony_drawing_1_webp__WEBPACK_IMPORTED_MODULE_0__;\n\n  title.textContent = 'Where Stories are Shared and Legends Begin';\n  paragraph.textContent =\n    'Welcome to Bree’s most beloved tavern — serving hearty food, frothy pints, and warm company for travelers and locals alike.';\n  heroBtn.textContent = 'Order Online';\n\n  heroBtn.addEventListener('click', () => {\n    window.location.href = 'https://www.youtube.com/watch?v=uE-1RPDqJAY';\n  });\n\n  section.appendChild(container);\n  container.appendChild(textColumn);\n  container.appendChild(imgColumn);\n  textColumn.appendChild(title);\n  textColumn.appendChild(paragraph);\n  textColumn.appendChild(heroBtn);\n  imgColumn.appendChild(imgElement);\n\n  return section;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n\n//# sourceURL=webpack://op-restaurant/./src/components/homepage.js?");

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuPage = () => {\n  const section = document.createElement('section');\n  const title = document.createElement('h1');\n  const container = document.createElement('div');\n  const menuGrid = document.createElement('div');\n\n  section.classList.add('hero-section');\n  container.classList.add('section-container', 'menu-section');\n  menuGrid.classList.add('menu-grid');\n\n  title.textContent = 'Menu';\n\n  section.appendChild(container);\n  container.appendChild(title);\n  container.appendChild(menuGrid);\n\n  const createItem = (itemName, itemPrice, itemDescp) => ({\n    itemName,\n    itemPrice,\n    itemDescp,\n  });\n\n  class MenuSection {\n    constructor(title, items) {\n      this.name = title;\n      this.items = items;\n    }\n\n    render() {\n      const div = document.createElement('div');\n      div.classList.add('menu-section');\n      const title = document.createElement('h2');\n\n      title.textContent = this.name;\n\n      menuGrid.appendChild(div);\n      div.appendChild(title);\n\n      this.items.map((item) => {\n        const { itemName, itemPrice, itemDescp } = item;\n\n        const itemNameTitle = document.createElement('h3');\n        const desc = document.createElement('p');\n        const price = document.createElement('p');\n        const menuItemCont = document.createElement('div');\n\n        menuItemCont.classList.add('sub-menu-item');\n\n        itemNameTitle.textContent = itemName;\n        desc.textContent = itemDescp;\n        price.textContent = itemPrice;\n\n        menuItemCont.append(itemNameTitle, price, desc);\n        div.appendChild(menuItemCont);\n      });\n    }\n  }\n\n  const heartyMeals = new MenuSection('Hearty Meals', [\n    createItem(\n      'Bree-land Stew',\n      '8 cp',\n      'A rich and savory lamb and root vegetable stew, slow-cooked with barley and wild herbs. Served with a crust of brown bread.'\n    ),\n    createItem(\n      'Second Breakfast Platter',\n      '9 cp',\n      'Fried eggs, rashers of bacon, grilled tomatoes, and fried bread — perfect for hobbits and hungry humans alike.'\n    ),\n    createItem(\n      'Ranger’s Roast',\n      '10 cp',\n      'Smoked venison haunch glazed with honey and mead, accompanied by roasted tubers and pickled mushrooms.'\n    ),\n    createItem(\n      'Shire Pie',\n      '10 cp',\n      'A thick-crusted pie stuffed with seasonal greens, leeks, and cheese from the Southfarthing.'\n    ),\n    createItem(\n      'Mushroom Medley',\n      '6 cp',\n      'Sautéed mushrooms from Farmer Maggot’s fields, tossed with garlic, onions, and a splash of ale.'\n    ),\n  ]);\n\n  const snacks = new MenuSection('Snacks & Sides', [\n    createItem(\n      'Pony Pickles',\n      '2 cp',\n      'A jar of pickled vegetables and herbs, made in-house.'\n    ),\n    createItem(\n      'Cheese & Crackers Board',\n      '4 cp',\n      'Assorted Bree cheeses with oatcakes and a dab of gooseberry jam.'\n    ),\n    createItem(\n      'Hot Buttered Turnips',\n      '10 cp',\n      'Roasted golden turnips with melted butter and cracked black pepper.'\n    ),\n  ]);\n\n  const drinks = new MenuSection('Ales, Brews, and Beverages', [\n    createItem(\n      'Butterbur’s Best Bitter (House Ale)',\n      '3 cp',\n      'Malty and dark, with notes of oak and toffee.'\n    ),\n    createItem(\n      'Bree Blonde',\n      '3 cp',\n      'A light, crisp ale brewed in town — a favorite among travelers.'\n    ),\n    createItem(\n      'Old Toby’s Reserve Cider',\n      '4 cp',\n      'Tart apple cider with a dash of cinnamon and clove.'\n    ),\n    createItem(\n      'Traveler’s Mulled Wine',\n      '5 cp',\n      'Spiced red wine, served warm. A winter favorite.'\n    ),\n    createItem(\n      'Dwarven Stout (LIMITED)',\n      '6 cp',\n      'Heavy and smoky, with hints of stonefruit. Brewed deep in the Blue Mountains. Ask Barliman if it’s in stock.'\n    ),\n  ]);\n\n  const dessert = new MenuSection('Sweet Treats', [\n    createItem(\n      'Honey-Cakes',\n      '3 cp',\n      'Sweet and spongy, made with real wildflower honey.'\n    ),\n    createItem(\n      'Seedcake Slice',\n      '2 cp',\n      'A dense, nutty treat perfect with cider or tea.'\n    ),\n    createItem(\n      'Berry Crumble',\n      '4 cp',\n      'Served warm, with seasonal berries from the Chetwood.'\n    ),\n  ]);\n\n  heartyMeals.render();\n  snacks.render();\n  drinks.render();\n  dessert.render();\n\n  return section;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n\n//# sourceURL=webpack://op-restaurant/./src/components/menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _components_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homepage.js */ \"./src/components/homepage.js\");\n/* harmony import */ var _components_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about.js */ \"./src/components/about.js\");\n/* harmony import */ var _components_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact.js */ \"./src/components/contact.js\");\n/* harmony import */ var _components_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu.js */ \"./src/components/menu.js\");\n\n\n\n\n\n\nconst content = document.querySelector('#content');\nconst navBtnArr = Array.from(document.querySelectorAll('.nav-btn'));\n\nconst renderPage = (newPage) => {\n  content.innerHTML = '';\n  content.appendChild(newPage);\n};\n\nnavBtnArr.forEach((navBtn) => {\n  navBtn.addEventListener('click', (e) => {\n    const btn = e.target.id;\n    if (btn === 'home-btn') {\n      renderPage((0,_components_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    } else if (btn === 'about-btn') {\n      renderPage((0,_components_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    } else if (btn === 'menu-btn') {\n      renderPage((0,_components_menu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n    } else if (btn === 'contact-btn') {\n      renderPage((0,_components_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    } else {\n      window.location.href = 'https://youtu.be/uE-1RPDqJAY';\n    }\n  });\n});\n\ncontent.appendChild((0,_components_homepage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n\n//# sourceURL=webpack://op-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://op-restaurant/./src/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;