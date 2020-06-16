/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/navigo/lib/navigo.min.js":
/*!***********************************************!*\
  !*** ./node_modules/navigo/lib/navigo.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function n(e,n,o){this.root=null,this._routes=[],this._useHash=n,this._hash=void 0===o?"#":o,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!n&&t(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=n?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):n&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function o(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function i(e){return e.replace(/\/$/,"").split("/").length}function s(e,t){return i(t)-i(e)}function r(e,t){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(t){var i=function(e){var t=[];return{regexp:e instanceof RegExp?e:new RegExp(e.replace(n.PARAMETER_REGEXP,function(e,o,i){return t.push(i),n.REPLACE_VARIABLE_REGEXP}).replace(n.WILDCARD_REGEXP,n.REPLACE_WILDCARD)+n.FOLLOWED_BY_SLASH_REGEXP,n.MATCH_REGEXP_FLAGS),paramNames:t}}(o(t.route)),s=i.regexp,r=i.paramNames,a=e.replace(/^\/+/,"/").match(s),h=function(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}(a,r);return!!a&&{match:a,route:t,params:h}}).filter(function(e){return e})}(e,t)[0]||!1}function a(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),i=o(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:i}function h(e,n,o){var i,s=function(e){return e.split(/\?(.*)?$/)[0]};return void 0===o&&(o="#"),t()&&!n?s(e).split(o)[0]:(i=e.split(o)).length>1?s(i[1]):s(i[0])}function u(t,n,o){if(n&&"object"===(void 0===n?"undefined":e(n))){if(n.before)return void n.before(function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(t(),n.after&&n.after(o))},o);if(n.after)return t(),void(n.after&&n.after(o))}t()}return n.prototype={helpers:{match:r,root:a,clean:o,getOnlyURL:h},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/")).replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var t=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];if("function"==typeof o[0])this._defaultHandler={handler:o[0],hooks:o[1]};else if(o.length>=2)if("/"===o[0]){var r=o[1];"object"===e(o[1])&&(r=o[1].uses),this._defaultHandler={handler:r,hooks:o[2]}}else this._add(o[0],o[1],o[2]);else"object"===e(o[0])&&Object.keys(o[0]).sort(s).forEach(function(e){t.on(e,o[0][e])});return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var n,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var a=function(e){return e.split(/\?(.*)?$/).slice(1).join("")}(e||this._cLoc()),l=h(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&l===this._lastRouteResolved.url&&a===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=r(l,this._routes))?(this._callLeave(),this._lastRouteResolved={url:l,query:a,hooks:o.route.hooks,params:o.params,name:o.route.name},n=o.route.handler,u(function(){u(function(){o.route.route instanceof RegExp?n.apply(void 0,o.match.slice(1,o.match.length)):n(o.params,a)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===l||"/"===l||l===this._hash||function(e,n,o){if(t()&&!n)return!1;if(!e.match(o))return!1;var i=e.split(o);return i.length<2||""===i[1]}(l,this._useHash,this._hash))?(u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(a)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(a)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){if((n.ctrlKey||n.metaKey)&&"a"==n.target.tagName.toLowerCase())return!1;var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e)for(i in n=o.route,t)n=n.toString().replace(":"+i,t[i]);return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,this._historyAPIUpdateMethod=e?"replaceState":"pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return void 0===e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){t()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof t&&(t=encodeURI(t)),this._routes.push("object"===(void 0===n?"undefined":e(n))?{route:t,handler:n.uses,name:n.as,hooks:o||n.hooks}:{route:t,handler:n,hooks:o}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=a(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if("undefined"!=typeof window&&"onhashchange"in window)window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;(o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)})()}},_cLoc:function(){return"undefined"!=typeof window?void 0!==window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:o(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){var e=this._lastRouteResolved;e&&e.hooks&&e.hooks.leave&&e.hooks.leave(e.params)}},n.PARAMETER_REGEXP=/([:*])(\w+)/g,n.WILDCARD_REGEXP=/\*/g,n.REPLACE_VARIABLE_REGEXP="([^/]+)",n.REPLACE_WILDCARD="(?:.*)",n.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",n.MATCH_REGEXP_FLAGS="",n});
//# sourceMappingURL=navigo.min.js.map


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var navigo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! navigo */ "./node_modules/navigo/lib/navigo.min.js");
/* harmony import */ var navigo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(navigo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderView */ "./src/js/renderView.js");
/* harmony import */ var _page_scripts_HomeJS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-scripts/HomeJS */ "./src/js/page-scripts/HomeJS.js");
/* harmony import */ var _page_scripts_SettingsJS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-scripts/SettingsJS */ "./src/js/page-scripts/SettingsJS.js");



 // Comment out during development
// if('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js', { scope: '/' });
// };

$(document).ready(function () {
  window.nvgo_root = window.location.hostname === 'holyrosaryonline.com' ? 'https://holyrosaryonline.com' : 'http://' + window.location.hostname;
  window.nvgo_useHash = false; // Defaults to: false

  window.nvgo_hash = '#!'; // Defaults to: '#'

  window.nvgo_router = new navigo__WEBPACK_IMPORTED_MODULE_0___default.a(nvgo_root, nvgo_useHash, nvgo_hash);
  window.nvgo_router.on({
    'settings': function settings() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/settings');
      Object(_page_scripts_SettingsJS__WEBPACK_IMPORTED_MODULE_3__["default"])();
      window.nvgo_router.updatePageLinks();
    },
    'about': function about() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/about');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_joyful_1': function med_en_joyful_1() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_joyful_1');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_joyful_2': function med_en_joyful_2() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_joyful_2');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_joyful_3': function med_en_joyful_3() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_joyful_3');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_joyful_4': function med_en_joyful_4() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_joyful_4');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_joyful_5': function med_en_joyful_5() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_joyful_5');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_luminous_1': function med_en_luminous_1() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_luminous_1');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_luminous_2': function med_en_luminous_2() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_luminous_2');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_luminous_3': function med_en_luminous_3() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_luminous_3');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_luminous_4': function med_en_luminous_4() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_luminous_4');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_luminous_5': function med_en_luminous_5() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_luminous_5');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_sorrowful_1': function med_en_sorrowful_1() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_sorrowful_1');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_sorrowful_2': function med_en_sorrowful_2() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_sorrowful_2');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_sorrowful_3': function med_en_sorrowful_3() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_sorrowful_3');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_sorrowful_4': function med_en_sorrowful_4() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_sorrowful_4');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_sorrowful_5': function med_en_sorrowful_5() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_sorrowful_5');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_glorious_1': function med_en_glorious_1() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_glorious_1');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_glorious_2': function med_en_glorious_2() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_glorious_2');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_glorious_3': function med_en_glorious_3() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_glorious_3');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_glorious_4': function med_en_glorious_4() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_glorious_4');
      window.nvgo_router.updatePageLinks();
    },
    'med_en_glorious_5': function med_en_glorious_5() {
      Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/med_en_glorious_5');
      window.nvgo_router.updatePageLinks();
    }
  }).resolve(); // Seems for home and 404, we have to do it this way :(

  window.nvgo_router.on('/', function () {
    Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('/');
    Object(_page_scripts_HomeJS__WEBPACK_IMPORTED_MODULE_2__["default"])();
    window.nvgo_router.updatePageLinks();
  }).resolve();
  window.nvgo_router.notFound(function () {
    Object(_renderView__WEBPACK_IMPORTED_MODULE_1__["default"])('404');
    window.nvgo_router.updatePageLinks();
  }).resolve();
});

/***/ }),

/***/ "./src/js/page-scripts/HomeJS.js":
/*!***************************************!*\
  !*** ./src/js/page-scripts/HomeJS.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeJS; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/js/store.js");

function HomeJS() {
  if (_store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.hidePrayers) {
    $('.prayers').css({
      display: 'none'
    });
  } // Add index data to each bead, main loop and intro separated


  $('.rosary-main .bead').each(function (idx, el) {
    // index - 1 because medallion is actually second bead, the one before
    // it being an unclickable filler bead.
    $(this).data('bead-idx', idx - 1);
  });
  $('.rosary-intro .bead').each(function (idx, el) {
    $(this).data('bead-idx', idx);
    $('.bead').removeClass('bead--selected');
    $(this).addClass('bead--selected');
  }); // Set initial rotation variables

  var turnIncrement = 1 / 65;
  var lastRotation = 0;
  var lastBeadIdx = 0; // Rotate on click

  $('.rosary-main button.bead').click(function (event) {
    var currBeadIdx = $(this).data('bead-idx');
    rotateRosary(currBeadIdx);
    var fromBeadId = $('.bead--selected').attr('id');
    setBeadSelectedClass($(this)); // reset intro drag

    $('.rosary-wrapper-wrapper').css({
      transform: getRosaryWrapperTransformRotation() + ' translateY(0)',
      transition: 'transform .5s ease'
    });
    updatePrayers($(this).attr('id'), fromBeadId);
    localStorage.setItem('beadId', $(this).attr('id'));
    localStorage.setItem('prayerId', $('.prayer--current').attr('id'));
    centerPrayers();
  }); // Rotate back to beginning if necessary, then pull up/down to selected bead

  $('.rosary-intro button.bead').click(function (event) {
    rotateRosary(0);
    var currBeadIdx = $(this).data('bead-idx');
    var dragDist = (currBeadIdx - 10) * 42;
    $('.rosary-wrapper-wrapper').css({
      transform: getRosaryWrapperTransformRotation() + ' translateY(' + dragDist + 'px)',
      transition: 'transform .5s ease'
    });
    var fromBeadId = $('.bead--selected').attr('id');
    setBeadSelectedClass($(this));
    updatePrayers($(this).attr('id'), fromBeadId);
    localStorage.setItem('beadId', $(this).attr('id'));
    localStorage.setItem('prayerId', $('.prayer--current').attr('id'));
    leftAlignPrayers();
  }); // Next Prayer button

  $('#next-prayer, #next-prayer-btn-within-beads, [data-rosary-next]').click(nextPrayer); // Prev Prayer button

  $('[data-rosary-prev]').click(prevPrayer); // Reset button

  $('[data-rosary-reset]').click(resetRosary); // Activate first click

  var savedPrayerId = localStorage.getItem('prayerId');
  var savedBeadId = localStorage.getItem('beadId');

  if (savedBeadId) {
    $('#' + savedBeadId).click();
  } else {
    $('.bead--crucifix').click();
  }

  $('.prayer').removeClass('prayer--current');

  if (savedPrayerId) {
    $('#' + savedPrayerId).addClass('prayer--current');
    prependImageToBody();
    localStorage.setItem('prayerId', $('.prayer--current').attr('id'));
  } else {
    $('.prayer').first().addClass('prayer--current');
    prependImageToBody();
    localStorage.setItem('prayerId', $('.prayer--current').attr('id'));
  }

  function rotateRosary(currBeadIdx) {
    var rotationAmount = (currBeadIdx - lastBeadIdx) * turnIncrement;

    if (rotationAmount < -.5) {
      rotationAmount = 1 + rotationAmount;
    } else if (rotationAmount > .5) {
      rotationAmount = -(1 - rotationAmount);
    }

    var rotation = rotationAmount + lastRotation;
    $('.rosary-wrapper').css({
      transition: 'transform .5s ease',
      transform: 'rotate(' + -rotation + 'turn)'
    });
    lastRotation = rotation;
    lastBeadIdx = currBeadIdx;
  }

  function setBeadSelectedClass($bead) {
    $('.bead').removeClass('bead--selected');
    $bead.addClass('bead--selected');
  }

  function updatePrayers(beadId, fromBeadId) {
    var prayers = [];
    var language = _store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.rosaryLanguage;
    var mysteries = _store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.mysteries;

    if (beadId === 'crucifix') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.signOfTheCross[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.signOfTheCross[language].text
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.apostlesCreed[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.apostlesCreed[language].text
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.signOfTheCross[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.signOfTheCross[language].text
        }];
      }
    } else if (beadId.slice(0, 9) === 'intro-hai' || beadId.slice(0, 9) === 'hail-mary') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.divineMercy) {
        if (beadId.slice(0, 9) === 'intro-hai') {
          prayers = [{
            title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].text
          }];
        } else if (beadId.slice(0, 11) === 'hail-mary-1') {
          prayers = [{
            image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][0].image,
            title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].text
          }];
        } else if (beadId.slice(0, 11) === 'hail-mary-2') {
          prayers = [{
            image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][1].image,
            title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].text
          }];
        } else if (beadId.slice(0, 11) === 'hail-mary-3') {
          prayers = [{
            image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][2].image,
            title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].text
          }];
        } else if (beadId.slice(0, 11) === 'hail-mary-4') {
          prayers = [{
            image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][3].image,
            title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].text
          }];
        } else if (beadId.slice(0, 11) === 'hail-mary-5') {
          prayers = [{
            image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][4].image,
            title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].text
          }];
        } else {
          prayers = [{
            title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].text
          }];
        }
      } else {
        if (beadId.slice(0, 9) === 'hail-mary') {
          prayers = [{
            title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.forTheSake[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.forTheSake[language].text
          }];
        }

        if (beadId === 'intro-hail-mary-1') {
          prayers = [{
            title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.ourFather[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.ourFather[language].text
          }];
        }

        if (beadId === 'intro-hail-mary-2') {
          prayers = [{
            title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailMary[language].text
          }];
        }

        if (beadId === 'intro-hail-mary-3') {
          prayers = [{
            title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.apostlesCreed[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.apostlesCreed[language].text
          }];
        }
      }
    } else if (beadId === 'intro-our-father-1') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.ourFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.ourFather[language].text
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.optionalOpening[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.optionalOpening[language].text
        }];
      }
    } else if (beadId === 'intro-our-father-2') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.gloryBe[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.gloryBe[language].text
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.fatimaPrayer[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.fatimaPrayer[language].text
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][0].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][0].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][0].image
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.ourFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.ourFather[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][0].image
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.eternalFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.eternalFather[language].text
        }];
      }
    } else if (beadId === 'our-father-2') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.gloryBe[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.gloryBe[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][0].image
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.fatimaPrayer[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.fatimaPrayer[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][0].image
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][1].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][1].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][1].image
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.ourFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.ourFather[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][1].image
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.eternalFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.eternalFather[language].text
        }];
      }
    } else if (beadId === 'our-father-3') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.gloryBe[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.gloryBe[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][1].image
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.fatimaPrayer[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.fatimaPrayer[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][1].image
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][2].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][2].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][2].image
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.ourFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.ourFather[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][2].image
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.eternalFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.eternalFather[language].text
        }];
      }
    } else if (beadId === 'our-father-4') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.gloryBe[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.gloryBe[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][2].image
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.fatimaPrayer[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.fatimaPrayer[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][2].image
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][3].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][3].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][3].image
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.ourFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.ourFather[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][3].image
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.eternalFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.eternalFather[language].text
        }];
      }
    } else if (beadId === 'our-father-5') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.gloryBe[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.gloryBe[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][3].image
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.fatimaPrayer[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.fatimaPrayer[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][3].image
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][4].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][4].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][4].image
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.ourFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.ourFather[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][4].image
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.eternalFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.eternalFather[language].text
        }];
      }
    } else if (beadId === 'medallion') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.gloryBe[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.gloryBe[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][4].image
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.fatimaPrayer[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.fatimaPrayer[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.mysteries[mysteries][language][4].image
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailHolyQueen[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.hailHolyQueen[language].text
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.prayerAfterRosary[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.prayerAfterRosary[language].text
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.signOfTheCross[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.signOfTheCross[language].text
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.holyGod[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.holyGod[language].text
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.optionalClosing[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__["default"].prayers.divineMercy.optionalClosing[language].text
        }];
      }
    }

    var prayersHTML = prayers.reduce(function (output, prayer, idx, srcArr) {
      output += '<div class="prayer" id="prayer-' + idx + '">' + '<div class="prayer__copy">';

      if (prayer.title) {
        output += '<h2 class="label">' + prayer.title + '</h2>';
      }

      if (prayer.text) {
        output += '<p>' + prayer.text + '</p>';
      }

      output += '</div>';

      if (prayer.image) {
        var noGradient = _store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.hidePrayers ? 'prayer__image--hide-prayers' : '';
        output += '<div class="prayer__image ' + noGradient + '"><img src="' + prayer.image + '" alt="Image of this mystery"></div>';
      }

      output += '</div>';
      return output;
    }, '');
    $('#prayers-content').html(prayersHTML);
    var $previousToFromBead = $('#' + fromBeadId).parent().prev();
    if ($previousToFromBead.hasClass('bead-wrapper--filler')) $previousToFromBead = $previousToFromBead.prev();
    var previousToFromBeadId = $previousToFromBead.find('.bead').attr('id');
    if (fromBeadId === 'hail-mary-1-01') previousToFromBeadId = 'intro-our-father-2';

    if (beadId === previousToFromBeadId || _store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.hidePrayers) {
      $('.prayer').last().addClass('prayer--current');
    } else {
      $('.prayer').first().addClass('prayer--current');
    }

    prependImageToBody();
    localStorage.setItem('prayerId', $('.prayer--current').attr('id'));
    window.nvgo_router.updatePageLinks();
  }

  function centerPrayers() {
    $('.prayers').addClass('prayers--centered');
  }

  function leftAlignPrayers() {
    $('.prayers').removeClass('prayers--centered');
  }

  function getRosaryWrapperTransformRotation() {
    //return window.matchMedia('(min-width: 1000px)').matches ? 'rotate(-45deg)' : ''
    return '';
  }

  function nextPrayer() {
    if ($(this).attr('id') === 'next-prayer' && !_store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.hidePrayers) {
      return;
    }

    if (!_store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.hidePrayers) {
      var $currPrayer = $('.prayer--current');

      if ($currPrayer.length && $currPrayer.next().length) {
        $currPrayer.removeClass('prayer--current');
        $currPrayer.next().addClass('prayer--current');
        prependImageToBody();
        localStorage.setItem('prayerId', $('.prayer--current').attr('id'));
        return;
      }
    }

    if ($('button.bead--selected').attr('id') === 'intro-our-father-2') {
      $('#hail-mary-1-01').click(); // $('.prayer').removeClass('prayer--current');
      // $('.prayer').first().addClass('prayer--current');

      return;
    }

    var $next = $('button.bead--selected').parent().next();

    if (!$next.hasClass('bead-wrapper--filler') && $next.length) {
      $next.find('.bead').click();
    } else if ($next.next().length) {
      $next.next().find('.bead').click();
    } else {
      $('.bead--medallion').click();
    } // $('.prayer').removeClass('prayer--current');
    // $('.prayer').first().addClass('prayer--current');
    // prependImageToBody();

  }

  function prevPrayer() {
    var $currPrayer = $('.prayer--current');

    if ($currPrayer.length && $currPrayer.prev().length) {
      $currPrayer.removeClass('prayer--current');
      $currPrayer.prev().addClass('prayer--current');
      localStorage.setItem('prayerId', $('.prayer--current').attr('id'));
      prependImageToBody();
      return;
    }

    if ($('button.bead--selected').attr('id') === 'hail-mary-1-01') {
      $('#intro-our-father-2').click();
      $('.prayer').removeClass('prayer--current');
      $('.prayer').last().addClass('prayer--current');
      return;
    }

    var $prev = $('button.bead--selected').parent().prev();

    if (!$prev.hasClass('bead-wrapper--filler') && $prev.length) {
      $prev.find('.bead').click();
      $('.prayer').removeClass('prayer--current');
      $('.prayer').last().addClass('prayer--current');
      localStorage.setItem('prayerId', $('.prayer--current').attr('id'));
      return;
    }

    if ($prev.prev().length) {
      $prev.prev().find('.bead').click();
      $('.prayer').removeClass('prayer--current');
      $('.prayer').last().addClass('prayer--current');
      localStorage.setItem('prayerId', $('.prayer--current').attr('id'));
      return;
    }
  }

  function resetRosary() {
    $('#crucifix').click();
    $('.prayer').removeClass('prayer--current');
    $('.prayer').first().addClass('prayer--current');
  }

  function prependImageToBody() {
    // Prevent image from hiding scroll in .prayers div
    $('body > .prayer__image').remove();
    $('.prayer--current .prayer__image').clone().prependTo('body');
  }
}
;

/***/ }),

/***/ "./src/js/page-scripts/SettingsJS.js":
/*!*******************************************!*\
  !*** ./src/js/page-scripts/SettingsJS.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsJS; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/js/store.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");


function SettingsJS() {
  updateFields();

  if (!$('#form-settings-hide-prayers').is(':checked') && !$('#form-settings-divine-mercy').is(':checked')) {
    $('#advanced-settings-more').hide();
  } else {
    $('#settings-more-btn').text('Hide');
  }

  $('#settings-more-btn').click(function (event) {
    $('#advanced-settings-more').slideToggle(300, function () {
      if ($('#advanced-settings-more').is(':visible')) {
        $('#settings-more-btn').text('Hide');
      } else {
        $('#settings-more-btn').text('Show');
      }
    });
  });
  $('#form-settings').change(function (event) {
    //$(this).find('input[type="submit"').val('Save Changes');
    $(this).submit();
  });
  $('#form-settings').submit(function (event) {
    event.preventDefault();
    var fields = $(this).serializeArray();
    var hidePrayersCheckoxExists = false;
    var anotherDevotionCheckoxExists = false;

    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];

      if (field['name'] === 'mysteries') {
        if (field['value'] === 'joyful' || field['value'] === 'luminous' || field['value'] === 'sorrowful' || field['value'] === 'glorious') {
          _store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.mysteries = field['value'];
          localStorage.setItem('mysteries', field['value']);
        }

        if (field['value'] === 'byday') {
          _store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.mysteries = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getMysteriesForCurrDay"])();
          localStorage.setItem('mysteries', '');
        }
      }

      if (field['name'] === 'rosary-language') {
        if (field['value'] === 'EN' || field['value'] === 'EN_TRAD' || field['value'] === 'LA') {
          _store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.rosaryLanguage = field['value'];
          localStorage.setItem('rosaryLanguage', field['value']);
        }
      }

      if (field['name'] === 'hide-prayers') {
        _store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.hidePrayers = true;
        localStorage.setItem('hidePrayers', true);
        hidePrayersCheckoxExists = true;
      }

      if (field['name'] === 'divine-mercy') {
        _store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.divineMercy = true;
        localStorage.setItem('divineMercy', true);
        anotherDevotionCheckoxExists = true;
      }
    } // Unchecked checkboxes don't show up in the form data.


    if (!hidePrayersCheckoxExists) {
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.hidePrayers = false;
      localStorage.setItem('hidePrayers', false);
    }

    if (!anotherDevotionCheckoxExists) {
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.divineMercy = false;
      localStorage.setItem('divineMercy', false);
    }

    $(this).find('input[type="submit"').val('Saved!');
  });

  function updateFields() {
    updateRosaryLanguage();
    updateHidePrayers();
    updateMysteries();
    updateDivineMercy();
  }

  function updateRosaryLanguage() {
    $('#form-settings-rosary-language').find('option[value="' + _store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.rosaryLanguage + '"]').attr('selected', 'selected');
  }

  function updateHidePrayers() {
    $('#form-settings-hide-prayers').attr('checked', _store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.hidePrayers);
  }

  function updateMysteries() {
    $('#form-settings-mysteries').find('option[value="' + localStorage.getItem('mysteries') + '"]').attr('selected', 'selected');
  }

  function updateDivineMercy() {
    $('#form-settings-divine-mercy').attr('checked', _store__WEBPACK_IMPORTED_MODULE_0__["default"].settings.divineMercy);
  }
}
;

/***/ }),

/***/ "./src/js/renderView.js":
/*!******************************!*\
  !*** ./src/js/renderView.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderView; });
/* harmony import */ var _templates_home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/home.html */ "./src/js/templates/home.html");
/* harmony import */ var _templates_home_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_home_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates_settings_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/settings.html */ "./src/js/templates/settings.html");
/* harmony import */ var _templates_settings_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_settings_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates_about_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/about.html */ "./src/js/templates/about.html");
/* harmony import */ var _templates_about_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_templates_about_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_404_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/404.html */ "./src/js/templates/404.html");
/* harmony import */ var _templates_404_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_templates_404_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _templates_meditations_med_en_joyful_1_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/meditations/med_en_joyful_1.html */ "./src/js/templates/meditations/med_en_joyful_1.html");
/* harmony import */ var _templates_meditations_med_en_joyful_1_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_joyful_1_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _templates_meditations_med_en_joyful_2_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/meditations/med_en_joyful_2.html */ "./src/js/templates/meditations/med_en_joyful_2.html");
/* harmony import */ var _templates_meditations_med_en_joyful_2_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_joyful_2_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _templates_meditations_med_en_joyful_3_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/meditations/med_en_joyful_3.html */ "./src/js/templates/meditations/med_en_joyful_3.html");
/* harmony import */ var _templates_meditations_med_en_joyful_3_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_joyful_3_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _templates_meditations_med_en_joyful_4_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/meditations/med_en_joyful_4.html */ "./src/js/templates/meditations/med_en_joyful_4.html");
/* harmony import */ var _templates_meditations_med_en_joyful_4_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_joyful_4_html__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _templates_meditations_med_en_joyful_5_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/meditations/med_en_joyful_5.html */ "./src/js/templates/meditations/med_en_joyful_5.html");
/* harmony import */ var _templates_meditations_med_en_joyful_5_html__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_joyful_5_html__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _templates_meditations_med_en_sorrowful_1_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/meditations/med_en_sorrowful_1.html */ "./src/js/templates/meditations/med_en_sorrowful_1.html");
/* harmony import */ var _templates_meditations_med_en_sorrowful_1_html__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_sorrowful_1_html__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _templates_meditations_med_en_sorrowful_2_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/meditations/med_en_sorrowful_2.html */ "./src/js/templates/meditations/med_en_sorrowful_2.html");
/* harmony import */ var _templates_meditations_med_en_sorrowful_2_html__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_sorrowful_2_html__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _templates_meditations_med_en_sorrowful_3_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./templates/meditations/med_en_sorrowful_3.html */ "./src/js/templates/meditations/med_en_sorrowful_3.html");
/* harmony import */ var _templates_meditations_med_en_sorrowful_3_html__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_sorrowful_3_html__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _templates_meditations_med_en_sorrowful_4_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./templates/meditations/med_en_sorrowful_4.html */ "./src/js/templates/meditations/med_en_sorrowful_4.html");
/* harmony import */ var _templates_meditations_med_en_sorrowful_4_html__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_sorrowful_4_html__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _templates_meditations_med_en_sorrowful_5_html__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./templates/meditations/med_en_sorrowful_5.html */ "./src/js/templates/meditations/med_en_sorrowful_5.html");
/* harmony import */ var _templates_meditations_med_en_sorrowful_5_html__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_sorrowful_5_html__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _templates_meditations_med_en_glorious_1_html__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./templates/meditations/med_en_glorious_1.html */ "./src/js/templates/meditations/med_en_glorious_1.html");
/* harmony import */ var _templates_meditations_med_en_glorious_1_html__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_glorious_1_html__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _templates_meditations_med_en_glorious_2_html__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./templates/meditations/med_en_glorious_2.html */ "./src/js/templates/meditations/med_en_glorious_2.html");
/* harmony import */ var _templates_meditations_med_en_glorious_2_html__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_glorious_2_html__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _templates_meditations_med_en_glorious_3_html__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./templates/meditations/med_en_glorious_3.html */ "./src/js/templates/meditations/med_en_glorious_3.html");
/* harmony import */ var _templates_meditations_med_en_glorious_3_html__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_glorious_3_html__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _templates_meditations_med_en_glorious_4_html__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./templates/meditations/med_en_glorious_4.html */ "./src/js/templates/meditations/med_en_glorious_4.html");
/* harmony import */ var _templates_meditations_med_en_glorious_4_html__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_glorious_4_html__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _templates_meditations_med_en_glorious_5_html__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./templates/meditations/med_en_glorious_5.html */ "./src/js/templates/meditations/med_en_glorious_5.html");
/* harmony import */ var _templates_meditations_med_en_glorious_5_html__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_glorious_5_html__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _templates_meditations_med_en_luminous_1_html__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./templates/meditations/med_en_luminous_1.html */ "./src/js/templates/meditations/med_en_luminous_1.html");
/* harmony import */ var _templates_meditations_med_en_luminous_1_html__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_luminous_1_html__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _templates_meditations_med_en_luminous_2_html__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./templates/meditations/med_en_luminous_2.html */ "./src/js/templates/meditations/med_en_luminous_2.html");
/* harmony import */ var _templates_meditations_med_en_luminous_2_html__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_luminous_2_html__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _templates_meditations_med_en_luminous_3_html__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./templates/meditations/med_en_luminous_3.html */ "./src/js/templates/meditations/med_en_luminous_3.html");
/* harmony import */ var _templates_meditations_med_en_luminous_3_html__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_luminous_3_html__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _templates_meditations_med_en_luminous_4_html__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./templates/meditations/med_en_luminous_4.html */ "./src/js/templates/meditations/med_en_luminous_4.html");
/* harmony import */ var _templates_meditations_med_en_luminous_4_html__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_luminous_4_html__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _templates_meditations_med_en_luminous_5_html__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./templates/meditations/med_en_luminous_5.html */ "./src/js/templates/meditations/med_en_luminous_5.html");
/* harmony import */ var _templates_meditations_med_en_luminous_5_html__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_luminous_5_html__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _templates_partials_header_html__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./templates/partials/header.html */ "./src/js/templates/partials/header.html");
/* harmony import */ var _templates_partials_header_html__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_templates_partials_header_html__WEBPACK_IMPORTED_MODULE_24__);

























function renderView(pathname, params) {
  $('div#app').html(' '); // Remove our crazy mystery image

  $('body > .prayer__image').remove();

  switch (pathname) {
    case '/':
      $('body').addClass('fixed');
      $('div#app').append(_templates_partials_header_html__WEBPACK_IMPORTED_MODULE_24___default.a + _templates_home_html__WEBPACK_IMPORTED_MODULE_0___default.a);
      break;

    case '/settings':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_settings_html__WEBPACK_IMPORTED_MODULE_1___default.a);
      break;

    case '/about':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_about_html__WEBPACK_IMPORTED_MODULE_2___default.a);
      break;

    case '/med_en_joyful_1':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_joyful_1_html__WEBPACK_IMPORTED_MODULE_4___default.a);
      break;

    case '/med_en_joyful_2':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_joyful_2_html__WEBPACK_IMPORTED_MODULE_5___default.a);
      break;

    case '/med_en_joyful_3':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_joyful_3_html__WEBPACK_IMPORTED_MODULE_6___default.a);
      break;

    case '/med_en_joyful_4':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_joyful_4_html__WEBPACK_IMPORTED_MODULE_7___default.a);
      break;

    case '/med_en_joyful_5':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_joyful_5_html__WEBPACK_IMPORTED_MODULE_8___default.a);
      break;

    case '/med_en_luminous_1':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_luminous_1_html__WEBPACK_IMPORTED_MODULE_19___default.a);
      break;

    case '/med_en_luminous_2':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_luminous_2_html__WEBPACK_IMPORTED_MODULE_20___default.a);
      break;

    case '/med_en_luminous_3':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_luminous_3_html__WEBPACK_IMPORTED_MODULE_21___default.a);
      break;

    case '/med_en_luminous_4':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_luminous_4_html__WEBPACK_IMPORTED_MODULE_22___default.a);
      break;

    case '/med_en_luminous_5':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_luminous_5_html__WEBPACK_IMPORTED_MODULE_23___default.a);
      break;

    case '/med_en_sorrowful_1':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_sorrowful_1_html__WEBPACK_IMPORTED_MODULE_9___default.a);
      break;

    case '/med_en_sorrowful_2':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_sorrowful_2_html__WEBPACK_IMPORTED_MODULE_10___default.a);
      break;

    case '/med_en_sorrowful_3':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_sorrowful_3_html__WEBPACK_IMPORTED_MODULE_11___default.a);
      break;

    case '/med_en_sorrowful_4':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_sorrowful_4_html__WEBPACK_IMPORTED_MODULE_12___default.a);
      break;

    case '/med_en_sorrowful_5':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_sorrowful_5_html__WEBPACK_IMPORTED_MODULE_13___default.a);
      break;

    case '/med_en_glorious_1':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_glorious_1_html__WEBPACK_IMPORTED_MODULE_14___default.a);
      break;

    case '/med_en_glorious_2':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_glorious_2_html__WEBPACK_IMPORTED_MODULE_15___default.a);
      break;

    case '/med_en_glorious_3':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_glorious_3_html__WEBPACK_IMPORTED_MODULE_16___default.a);
      break;

    case '/med_en_glorious_4':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_glorious_4_html__WEBPACK_IMPORTED_MODULE_17___default.a);
      break;

    case '/med_en_glorious_5':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_meditations_med_en_glorious_5_html__WEBPACK_IMPORTED_MODULE_18___default.a);
      break;

    case '404':
      $('body').removeClass('fixed');
      $('div#app').append(_templates_404_html__WEBPACK_IMPORTED_MODULE_3___default.a);
      break;

    default:
      $('body').removeClass('fixed');
      $('div#app').append(_templates_404_html__WEBPACK_IMPORTED_MODULE_3___default.a);
  }
}

/***/ }),

/***/ "./src/js/store.js":
/*!*************************!*\
  !*** ./src/js/store.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  settings: {
    mysteries: localStorage.getItem('mysteries') || Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getMysteriesForCurrDay"])(),
    rosaryLanguage: localStorage.getItem('rosaryLanguage') || 'EN',
    hidePrayers: localStorage.getItem('hidePrayers') === 'true' ? true : false,
    divineMercy: localStorage.getItem('divineMercy') === 'true' ? true : false
  },
  prayers: {
    signOfTheCross: {
      EN: {
        title: 'Sign of the Cross',
        text: '<span class="red-text">+</span> In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
        source: 'http://www.newadvent.org/images/rosary.pdf'
      },
      EN_TRAD: {
        title: 'Sign of the Cross',
        text: '<span class="red-text">+</span> In the name of the Father, and of the Son, and of the Holy Ghost. Amen.',
        source: 'Baronius Press, Daily Missal 1962'
      },
      LA: {
        title: 'Signum Crucis',
        text: '<span class="red-text">+</span> In Nómine Patris, et Fílii, et Spíritus Sancti. Amen.',
        source: 'Baronius Press, Daily Missal 1962'
      }
    },
    apostlesCreed: {
      EN: {
        title: 'Apostle&rsquo;s Creed',
        text: 'I believe in God, the Father almighty, Creator of Heaven and earth. And in Jesus Christ, His only Son, our Lord, Who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate; was crucified, died, and was buried. He descended into Hell. The third day He rose again from the dead. He ascended into Heaven, and sits at the right hand of God, the Father almighty. He shall come again to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and the life everlasting. Amen.',
        source: 'http://www.newadvent.org/images/rosary.pdf'
      },
      EN_TRAD: {
        title: 'Apostle&rsquo;s Creed',
        text: 'I believe in God the Father Almighty, Creator of heaven and earth. And in Jesus Christ, His only Son, our Lord, Who was conceived by the Holy Ghost, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and buried: He descended into Hell, the third day He rose again from the dead, He ascended into heaven, sitteth at the right hand of God the Father Almighty, from thence He shall come to judge the living and the dead. I believe in the Holy Ghost, the holy Catholic Church, the communion of Saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.',
        source: 'Baronius Press, Daily Missal 1962'
      },
      LA: {
        title: 'Symbólum Apostolórum',
        text: 'Credo in Deum, Patrem omnipoténtem, Creatórem cœli et terræ. Et in Jesum Christum, Fílium ejus únicum, Dóminum nostrum; qui concéptus est de Spíritu Sancto, natus ex María Vírgine; passus sub Póntio Piláto, crucifíxus, mórtuus et sepúltus: descéndit ad ínferos; tértia die resurréxit a mórtuis: ascéndit ad cœlos, sedet ad déxteram Dei Patris omnipoténtis; inde ventúrus est judicáre vivos et mórtuos. Credo in Spíritum Sanctum, sanctam Ecclésiam cathólicam, Sanctórum communiónem, remissiónem peccatórum, carnis resurrectiónem, vitam ætérnam. Amen.',
        source: 'Baronius Press, Daily Missal 1962'
      }
    },
    ourFather: {
      EN: {
        title: 'Our Father',
        text: 'Our Father, Who art in Heaven, hallowed be Thy Name. Thy kingdom come, Thy will be done on earth as it is in Heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil. Amen.',
        source: 'http://www.newadvent.org/images/rosary.pdf'
      },
      EN_TRAD: {
        title: 'Our Father',
        text: 'Our Father, who art in heaven, hallowed be Thy Name. Thy kingdom come. Thy will be done on earth, as it is in heaven: Give us this day our daily bread. And forgive us our trespasses, as we forgive those that trespass against us. And lead us not into temptation, but deliver us from evil. Amen.',
        source: 'Baronius Press, Daily Missal 1962'
      },
      LA: {
        title: 'Pater Noster',
        text: 'Pater noster, qui es in cœlis, sanctificétur nomen tuum. Advéniat regnum tuum. Fiat volúntas tua, sicut in cœlo et in terra. Panem nostrum quotidiánum da nobis hódie. Et dimítte nobis débita nostra, sicut et nos dimíttimus debitóribus nostris. Et ne nos indúcas in tentatiónem: sed líbera nos a malo. Amen.',
        source: 'Baronius Press, Daily Missal 1962'
      }
    },
    hailMary: {
      EN: {
        title: 'Hail Mary',
        text: 'Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
        source: 'http://www.newadvent.org/images/rosary.pdf'
      },
      EN_TRAD: {
        title: 'Hail Mary',
        text: 'Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the Fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.',
        source: 'Baronius Press, Daily Missal 1962'
      },
      LA: {
        title: 'Ave María',
        text: 'Ave María, grátia plena, Dóminus tecum; benedícta tu in muliéribus, et benedíctus fructus ventris tui, Jesus. Sancta María, Mater Dei, ora pro nobis peccatóribus, nunc et in hora mortis nostræ. Amen.',
        source: 'Baronius Press, Daily Missal 1962'
      }
    },
    gloryBe: {
      EN: {
        title: 'Glory Be',
        text: 'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.',
        source: 'Adapted from http://www.newadvent.org/images/rosary.pdf'
      },
      EN_TRAD: {
        title: 'Glory Be',
        text: 'Glory be to the Father, and to the Son, and to the Holy Ghost. As it was in the beginning, is now, and ever shall be, world without end. Amen.',
        source: 'Baronius Press, Daily Missal 1962'
      },
      LA: {
        title: 'Gloria Patri',
        text: 'Gloria Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio et nunc et semper et in sæcula sæculórum. Amen.',
        source: 'Baronius Press, Daily Missal 1962'
      }
    },
    fatimaPrayer: {
      EN: {
        title: 'Fatima Prayer',
        text: 'O my Jesus, forgive us of our sins, save us from the fires of Hell; lead all souls to Heaven, especially those in most need of Thy mercy. Amen.',
        source: 'http://www.newadvent.org/images/rosary.pdf'
      },
      EN_TRAD: {
        title: 'Fatima Prayer',
        text: 'O my Jesus, forgive us our sins, save us from the fires of Hell. Lead all souls to heaven, especially those most in need of your mercy. Amen.',
        source: 'Baronius Press, Daily Missal 1962'
      },
      LA: {
        title: 'Orátio Fátimæ',
        text: 'O mi Jesu, remítte nobis peccáta nostra, salva nos ab igne inférni, perduc in cælum omnes ánimas, præsértim eas quæ misericórdiæ tuæ máxime índigent. Amen.',
        source: 'http://prayers.gleeson.us/oratio_fatimae.html'
      }
    },
    hailHolyQueen: {
      EN: {
        title: 'Hail Holy Queen',
        text: 'Hail Holy Queen, mother of mercy; our life, our sweetness, and our hope. To thee we cry, poor banished children of Eve. To thee we send up our sighs, mourning and weeping in this vale of tears. Turn, then, most gracious advocate, thine eyes of mercy toward us. And after this, our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen.',
        source: 'http://www.newadvent.org/images/rosary.pdf'
      },
      EN_TRAD: {
        title: 'Hail Holy Queen',
        text: 'Hail Holy Queen, mother of mercy; our life, our sweetness, and our hope. To thee we cry, poor banished children of Eve. To thee we send up our sighs, mourning and weeping in this vale of tears. Turn, then, most gracious advocate, thine eyes of mercy toward us. And after this, our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen.',
        source: 'http://www.newadvent.org/images/rosary.pdf'
      },
      LA: {
        title: 'Salve Regína',
        text: 'Salve, Regína, mater misericórdiæ, vita, dulcédo et spes nostra, salve. Ad te clamámus, exsúles fílii Evæ. Ad te suspirámus, geméntes et ﬂentes in hac lacrimárum valle. Eja ergo, advocáta nostra, illos tuos misericórdes óculos ad nos convérte, et Jesum, benedíctum fructum ventris tui, nobis post hoc exsílium osténde. O clemens, o pia, o dulcis Virgo María. <br>(V. Ora pro nobis, sancta Dei Génetrix. <br>R. Ut digni efﬁciámur promissiónibus Christi.) <br>Amen.',
        source: 'http://prayers.gleeson.us/salve_regina.html'
      }
    },
    prayerAfterRosary: {
      EN: {
        title: 'Final Prayer',
        text: 'Let us pray. O God, whose only begotten Son by His life, death and resurrection, has purchased for us the rewards of eternal life, grant, we beseech Thee, that by meditating upon these mysteries of the Most Holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ Our Lord. Amen.',
        source: 'http://www.newadvent.org/images/rosary.pdf'
      },
      EN_TRAD: {
        title: 'Final Prayer',
        text: 'Let us pray. O God, whose only begotten Son by His life, death and resurrection, has purchased for us the rewards of eternal life, grant, we beseech Thee, that by meditating upon these mysteries of the Most Holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ Our Lord. Amen.',
        source: 'http://www.newadvent.org/images/rosary.pdf'
      },
      LA: {
        title: 'Ad Finem Rosárii Dicéndæ',
        text: 'Orémus: Deus, cujus Unigénitus, per vitam, mortem et resurrectiónem suam, nobis salútis ætérnæ præmia comparávit, concéde, quǽsumus, ut, hæc mystéria sanctíssimo beátæ Maríæ Vírginis Rosário recoléntes, et imitémur quod cóntinent, et quod promíttunt, assequámur. Per eúndem Christum Dóminum nostrum. Amen.',
        source: 'http://prayers.gleeson.us/ad_finem_rosarii_dicendae.html'
      }
    },
    mysteries: {
      joyful: {
        EN: [{
          title: 'The First Joyful Mystery',
          text: 'The Annunciation of Gabriel to Mary. (<a href="/med_en_joyful_1" data-navigo>Luke 1:26-38</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/annunciation.jpg'
        }, {
          title: 'The Second Joyful Mystery',
          text: 'The Visitation  of Mary to Elizabeth. (<a href="/med_en_joyful_2" data-navigo>Luke 1:39-56</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/visitation.jpg'
        }, {
          title: 'The Third Joyful Mystery',
          text: 'The Birth of Our Lord. (<a href="/med_en_joyful_3" data-navigo>Luke 2:1-21</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/nativity.jpg'
        }, {
          title: 'The Fourth Joyful Mystery',
          text: 'The Presentation of Our Lord. (<a href="/med_en_joyful_4" data-navigo>Luke 2:22-38</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/presentation.jpg'
        }, {
          title: 'The Fifth Joyful Mystery',
          text: 'The Finding of Our Lord in the Temple. (<a href="/med_en_joyful_5" data-navigo>Luke 2:41-52</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/finding.jpg'
        }],
        EN_TRAD: [{
          title: 'The First Joyful Mystery',
          text: 'The Annunciation. (<a href="/med_en_joyful_1" data-navigo>Luke 1:26-38</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/annunciation.jpg'
        }, {
          title: 'The Second Joyful Mystery',
          text: 'The Visitation. (<a href="/med_en_joyful_2" data-navigo>Luke 1:39-56</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/visitation.jpg'
        }, {
          title: 'The Third Joyful Mystery',
          text: 'The Nativity. (<a href="/med_en_joyful_3" data-navigo>Luke 2:1-21</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/nativity.jpg'
        }, {
          title: 'The Fourth Joyful Mystery',
          text: 'The Presentation. (<a href="/med_en_joyful_4" data-navigo>Luke 2:22-38</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/presentation.jpg'
        }, {
          title: 'The Fifth Joyful Mystery',
          text: 'The Finding in the Temple. (<a href="/med_en_joyful_5" data-navigo>Luke 2:41-52</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/finding.jpg'
        }],
        LA: [{
          title: 'Prímum Mystérium Gaudiósum',
          text: 'Annuntiátio. (<a href="/med_en_joyful_1" data-navigo>Luke 1:26-38</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/annunciation.jpg'
        }, {
          title: 'Secúndum Mystérium Gaudiósum',
          text: 'Visitátio. (<a href="/med_en_joyful_2" data-navigo>Luke 1:39-56</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/visitation.jpg'
        }, {
          title: 'Tértium Mystérium Gaudiósum',
          text: 'Natívitas Dómini nostri Jesu Christi. (<a href="/med_en_joyful_3" data-navigo>Luke 2:1-21</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/nativity.jpg'
        }, {
          title: 'Quartum Mystérium Gaudiósum',
          text: 'Præsentátio Púeri Jesu in Templo. (<a href="/med_en_joyful_4" data-navigo>Luke 2:22-38</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/presentation.jpg'
        }, {
          title: 'Quintum Mystérium Gaudiósum',
          text: 'Invéntio Púeri Jesu in Templo. (<a href="/med_en_joyful_5" data-navigo>Luke 2:41-52</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/finding.jpg'
        }]
      },
      luminous: {
        EN: [{
          title: 'The First Luminous Mystery',
          text: 'The Baptism of Our Lord in the River Jordan. (<a href="/med_en_luminous_1" data-navigo>Matthew 3:13-16</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf'
        }, {
          title: 'The Second Luminous Mystery',
          text: 'The Wedding at Cana, when Christ manifested Himself. (<a href="/med_en_luminous_2" data-navigo>John 2:1-11</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf'
        }, {
          title: 'The Third Luminous Mystery',
          text: 'The Proclamation of the Kingdom of God. (<a href="/med_en_luminous_3" data-navigo>Mark 1:14-15</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf'
        }, {
          title: 'The Fourth Luminous Mystery',
          text: 'The Transfiguration of Our Lord. (<a href="/med_en_luminous_4" data-navigo>Matthew 17:1-8</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf'
        }, {
          title: 'The Fifth Luminous Mystery',
          text: 'The Last Supper, when Our Lord gave us the Holy Eucharist. (<a href="/med_en_luminous_5" data-navigo>Matthew 26:17-29</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf'
        }],
        EN_TRAD: [{
          title: 'The First Luminous Mystery',
          text: 'The Baptism of Christ in the Jordan. (<a href="/med_en_luminous_1" data-navigo>Matthew 3:13-16</a>)',
          source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm'
        }, {
          title: 'The Second Luminous Mystery',
          text: 'The Wedding Feast at Cana. (<a href="/med_en_luminous_2" data-navigo>John 2:1-11</a>)',
          source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm'
        }, {
          title: 'The Third Luminous Mystery',
          text: 'Jesus&rsquo; Proclamation of the Coming of the Kingdom of God. (<a href="/med_en_luminous_3" data-navigo>Mark 1:14-15</a>)',
          source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm'
        }, {
          title: 'The Fourth Luminous Mystery',
          text: 'The Transfiguration. (<a href="/med_en_luminous_4" data-navigo>Matthew 17:1-8</a>)',
          source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm'
        }, {
          title: 'The Fifth Luminous Mystery',
          text: 'The Institution of the Eucharist. (<a href="/med_en_luminous_5" data-navigo>Matthew 26:17-29</a>)',
          source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm'
        }],
        LA: [{
          title: 'Prímum Mystérium Luminósum',
          text: 'Baptísma Dómini nostri Jesu Christi apud Jordánem. (<a href="/med_en_luminous_1" data-navigo>Matthew 3:13-16</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
        }, {
          title: 'Secúndum Mystérium Luminósum',
          text: 'Núptiæ Canénses. (<a href="/med_en_luminous_2" data-navigo>John 2:1-11</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
        }, {
          title: 'Tértium Mystérium Luminósum',
          text: 'Proclamátio Regni Dei. (<a href="/med_en_luminous_3" data-navigo>Mark 1:14-15</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
        }, {
          title: 'Quartum Mystérium Luminósum',
          text: 'Transfigurátio. (<a href="/med_en_luminous_4" data-navigo>Matthew 17:1-8</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
        }, {
          title: 'Quintum Mystérium Luminósum',
          text: 'Institútio Eucharístiæ. (<a href="/med_en_luminous_5" data-navigo>Matthew 26:17-29</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
        }]
      },
      sorrowful: {
        EN: [{
          title: 'The First Sorrowful Mystery',
          text: 'The Agony of Our Lord in the Garden. (<a href="/med_en_sorrowful_1" data-navigo>Matthew 26:36-56</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf'
        }, {
          title: 'The Second Sorrowful Mystery',
          text: 'Our Lord is Scourged at the Pillar. (<a href="/med_en_sorrowful_2" data-navigo>Matthew 27:24-26</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf'
        }, {
          title: 'The Third Sorrowful Mystery',
          text: 'Our Lord is Crowned with Thorns. (<a href="/med_en_sorrowful_3" data-navigo>Matthew 27:27-31</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf'
        }, {
          title: 'The Fourth Sorrowful Mystery',
          text: 'Our Lord Carries the Cross to Calvary. (<a href="/med_en_sorrowful_4" data-navigo>Matthew 27:32</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf'
        }, {
          title: 'The Fifth Sorrowful Mystery',
          text: 'The Crucifixion of Our Lord. (<a href="/med_en_sorrowful_5" data-navigo>Matthew 27:33-56</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf'
        }],
        EN_TRAD: [{
          title: 'The First Sorrowful Mystery',
          text: 'The Agony in the Garden. (<a href="/med_en_sorrowful_1" data-navigo>Matthew 26:36-56</a>)',
          source: 'Baronius Press, Daily Missal 1962'
        }, {
          title: 'The Second Sorrowful Mystery',
          text: 'The Scourging of Our Blessed Lord at the Pillar. (<a href="/med_en_sorrowful_2" data-navigo>Matthew 27:24-26</a>)',
          source: 'Baronius Press, Daily Missal 1962'
        }, {
          title: 'The Third Sorrowful Mystery',
          text: 'The Crowning of our Blessed Lord with Thorns. (<a href="/med_en_sorrowful_3" data-navigo>Matthew 27:27-31</a>)',
          source: 'Baronius Press, Daily Missal 1962'
        }, {
          title: 'The Fourth Sorrowful Mystery',
          text: 'Our Blessed Lord carrying His Cross. (<a href="/med_en_sorrowful_4" data-navigo>Matthew 27:32</a>)',
          source: 'Baronius Press, Daily Missal 1962'
        }, {
          title: 'The Fifth Sorrowful Mystery',
          text: 'The Crucifixion. (<a href="/med_en_sorrowful_5" data-navigo>Matthew 27:33-56</a>)',
          source: 'Baronius Press, Daily Missal 1962'
        }],
        LA: [{
          title: 'Prímum Mystérium Dolorósum',
          text: 'Agónia in Horto. (<a href="/med_en_sorrowful_1" data-navigo>Matthew 26:36-56</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
        }, {
          title: 'Secúndum Mystérium Dolorósum',
          text: 'Flagellátio. (<a href="/med_en_sorrowful_2" data-navigo>Matthew 27:24-26</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
        }, {
          title: 'Tértium Mystérium Dolorósum',
          text: 'Coronátio spinis. (<a href="/med_en_sorrowful_3" data-navigo>Matthew 27:27-31</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
        }, {
          title: 'Quartum Mystérium Dolorósum',
          text: 'Bajulátio Crucis. (<a href="/med_en_sorrowful_4" data-navigo>Matthew 27:32</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
        }, {
          title: 'Quintum Mystérium Dolorósum',
          text: 'Crucifíxio et Mors Dómini nostri Jesu Christi. (<a href="/med_en_sorrowful_5" data-navigo>Matthew 27:33-56</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
        }]
      },
      glorious: {
        EN: [{
          title: 'The First Glorious Mystery',
          text: 'The Glorious Resurrection of Our Lord. (<a href="/med_en_glorious_1" data-navigo>John 20:1-29</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf'
        }, {
          title: 'The Second Glorious Mystery',
          text: 'The Ascension of Our Lord. (<a href="/med_en_glorious_2" data-navigo>Luke 24:36-53</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf'
        }, {
          title: 'The Third Glorious Mystery',
          text: 'The Descent of the Holy Spirit at Pentecost. (<a href="/med_en_glorious_3" data-navigo>Acts 2:1-41</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf'
        }, {
          title: 'The Fourth Glorious Mystery',
          text: 'The Assumption of Mary into Heaven. (<a href="/med_en_glorious_4" data-navigo>St. John of Damascus, Excerpt from Second Sermon On the Assumption of Mary</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf'
        }, {
          title: 'The Fifth Glorious Mystery',
          text: 'The Coronation of Mary as Queen of Heaven and Earth. (<a href="/med_en_glorious_5" data-navigo>Sermon of St. Peter Canisius On the Incomparable Virgin Mary, Mother of God</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf'
        }],
        EN_TRAD: [{
          title: 'The First Glorious Mystery',
          text: 'The Resurrection. (<a href="/med_en_glorious_1" data-navigo>John 20:1-29</a>)',
          source: 'Baronius Press, Daily Missal 1962'
        }, {
          title: 'The Second Glorious Mystery',
          text: 'The Ascension. (<a href="/med_en_glorious_2" data-navigo>Luke 24:36-53</a>)',
          source: 'Baronius Press, Daily Missal 1962'
        }, {
          title: 'The Third Glorious Mystery',
          text: 'The Descent of the Holy Ghost on the Apostles. (<a href="/med_en_glorious_3" data-navigo>Acts 2:1-41</a>)',
          source: 'Baronius Press, Daily Missal 1962'
        }, {
          title: 'The Fourth Glorious Mystery',
          text: 'The Assumption of Our Lady into Heaven. (<a href="/med_en_glorious_4" data-navigo>St. John of Damascus, Excerpt from Second Sermon On the Assumption of Mary</a>)',
          source: 'Baronius Press, Daily Missal 1962'
        }, {
          title: 'The Fifth Glorious Mystery',
          text: 'The Coronation of Our Lady and the Glory of all the Saints. (<a href="/med_en_glorious_5" data-navigo>Sermon of St. Peter Canisius On the Incomparable Virgin Mary, Mother of God</a>)',
          source: 'Baronius Press, Daily Missal 1962'
        }],
        LA: [{
          title: 'Prímum Mystérium Gloriósum',
          text: 'Resurréctio. (<a href="/med_en_glorious_1" data-navigo>John 20:1-29</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
        }, {
          title: 'Secúndum Mystérium Gloriósum',
          text: 'Ascénsio. (<a href="/med_en_glorious_2" data-navigo>Luke 24:36-53</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
        }, {
          title: 'Tértium Mystérium Gloriósum',
          text: 'Descénsus Spíritus Sancti. (<a href="/med_en_glorious_3" data-navigo>Acts 2:1-41</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
        }, {
          title: 'Quartum Mystérium Gloriósum',
          text: 'Assúmptio. (<a href="/med_en_glorious_4" data-navigo>St. John of Damascus, Excerpt from Second Sermon On the Assumption of Mary</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
        }, {
          title: 'Quintum Mystérium Gloriósum',
          text: 'Coronátio Beátæ Maríæ Vírginis in Cælis. (<a href="/med_en_glorious_5" data-navigo>Sermon of St. Peter Canisius On the Incomparable Virgin Mary, Mother of God</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf'
        }]
      }
    },
    divineMercy: {
      eternalFather: {
        EN: {
          title: 'Eternal Father',
          text: 'Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world.',
          source: 'Baronius Press, Daily Missal 1962'
        },
        EN_TRAD: {
          title: 'Eternal Father',
          text: 'Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world.',
          source: 'Baronius Press, Daily Missal 1962'
        },
        LA: {
          title: 'Pater Æterne',
          text: 'Pater ætérne, óffero tibi Corpus et Sánguinem, ánimam et divinitátem dilectíssimi Fílii Tui, Dómini nostri, Jesu Christi, in propitiatióne pro peccátis nostris et totíus mundi.',
          source: 'http://www.windsorlatinmass.org/wtnews/170423.pdf'
        }
      },
      forTheSake: {
        EN: {
          title: 'For the Sake of His Sorrowful Passion',
          text: 'For the sake of His sorrowful Passion, have mercy on us and on the whole world.',
          source: 'Baronius Press, Daily Missal 1962'
        },
        EN_TRAD: {
          title: 'For the Sake of His Sorrowful Passion',
          text: 'For the sake of His sorrowful Passion, have mercy on us and on the whole world.',
          source: 'Baronius Press, Daily Missal 1962'
        },
        LA: {
          title: 'Pro Dolorosa Ejus Passione',
          text: 'Pro dolorosa Ejus passióne, miserére nobis et totíus mundi.',
          source: 'http://www.windsorlatinmass.org/wtnews/170423.pdf'
        }
      },
      holyGod: {
        EN: {
          title: 'Holy God',
          text: '<em>Conclude with (three times):</em> Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.',
          source: 'Baronius Press, Daily Missal 1962'
        },
        EN_TRAD: {
          title: 'Holy God',
          text: '<em>Conclude with (three times):</em> Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.',
          source: 'Baronius Press, Daily Missal 1962'
        },
        LA: {
          title: 'Sanctus Deus',
          text: '<em>Conclude with (three times):</em> Sanctus Deus, Sanctus Fortis, Sanctus Immortális, miserére nobis et totíus mundi.',
          source: 'http://www.windsorlatinmass.org/wtnews/170423.pdf'
        }
      },
      optionalOpening: {
        EN: {
          title: 'Optional Opening',
          text: 'You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us. <br><br> <em>(Repeat 3 times)</em> O Blood and Water, which gushed forth from the Heart of Jesus as a fountain of Mercy for us, I trust in You!',
          source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
        },
        EN_TRAD: {
          title: 'Optional Opening',
          text: 'You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us. <br><br> <em>(Repeat 3 times)</em> O Blood and Water, which gushed forth from the Heart of Jesus as a fountain of Mercy for us, I trust in You!',
          source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
        },
        LA: {
          title: 'Optional Opening',
          text: 'You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us. <br><br> <em>(Repeat 3 times)</em> O Blood and Water, which gushed forth from the Heart of Jesus as a fountain of Mercy for us, I trust in You!',
          source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
        }
      },
      optionalClosing: {
        EN: {
          title: 'Optional Closing',
          text: 'Eternal God, in whom mercy is endless and the treasury of compassion inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself.',
          source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
        },
        EN_TRAD: {
          title: 'Optional Closing',
          text: 'Eternal God, in whom mercy is endless and the treasury of compassion inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself.',
          source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
        },
        LA: {
          title: 'Optional Closing',
          text: 'Eternal God, in whom mercy is endless and the treasury of compassion inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself.',
          source: 'http://www.usccb.org/beliefs-and-teachings/how-we-teach/new-evangelization/year-of-faith/how-to-pray-the-chaplet-of-divine-mercy.cfm'
        }
      }
    }
  }
});

/***/ }),

/***/ "./src/js/templates/404.html":
/*!***********************************!*\
  !*** ./src/js/templates/404.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"template-about\" class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1>Page not found</h1>\n\n        <p>Sorry, but the page you are looking for cannot be found.</p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/about.html":
/*!*************************************!*\
  !*** ./src/js/templates/about.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"template-about\" class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1>About</h1>\n\n        <p>HolyRosaryOnline.com is a small website meant to help people pray the\n        Rosary. It is an open source project maintained by web developer Matt\n        Watson. Different options are available in\n        <a href=\"/settings\" data-navigo>Settings</a>.</p>\n\n        <p>Click the beads as you go along, or click anywhere inside the rosary\n        to go to the next bead.</p>\n\n        <p>Email <a href=\"mailto:matt@mattwatson.org\">matt@mattwatson.org</a>\n        for questions or <a href=\"https://github.com/mateowatson/holyrosaryonline/issues\">\n        leave an issue on the GitHub page</a>.</p>\n\n        <h2>Sources</h2>\n\n        <p>The texts of the prayers were taken in fair use from various sources.\n            The source for each prayer is noted in the source code,\n        but overall, they include:</p>\n\n        <ul>\n            <li>The regular English prayers are primarily taken from:\n                <a href=\"http://www.newadvent.org/images/rosary.pdf\">\n                    www.newadvent.org</a>.\n            </li>\n            <li>The &ldquo;English - Traditional&rdquo; and Latin prayers are primarily taken from:<br>\n                <em>The Daily Missal and Liturgical Manual</em>. Summorum Pontificum\n                    Edition. Baronius Press, 2019.\n            </li>\n            <li>The mysteries in Latin are taken from:\n                <a href=\"http://www.windsorlatinmass.org/wtnews/070408.pdf\">\n                    www.windsorlatinmass.org\n                </a>.\n            </li>\n            <li>Some Latin prayers not included in the Baronius Press missal,\n                as well as some prayer titles in Latin,\n                are taken from:\n                <a href=\"http://prayers.gleeson.us\">prayers.gleeson.us</a>.\n            </li>\n            <li>The luminous mysteries in \"English - Traditional\" are taken from:\n                <a href=\"http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm\">\n                    www.usccb.org</a>.\n            </li>\n        </ul>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/home.html":
/*!************************************!*\
  !*** ./src/js/templates/home.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"template-home\">\n    <button id=\"next-prayer\">Next Prayer</button>\n    <button class=\"prayers-reset\" data-rosary-reset>\n        Reset\n    </button>\n\n    <div aria-live=\"polite\" class=\"prayers\" id=\"prayers\">\n        <div class=\"prayers__content prayers-content\" id=\"prayers-content\">\n\n        </div>\n        <div class=\"prayers-prev-next\">\n            <button class=\"prayers-prev-next__prev\" data-rosary-prev>\n                <span class=\"sr-only\">Previous</span>\n                <span class=\"prayers-prev-next__prev-icon\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z\"/></svg>\n                </span>\n            </button>\n            <button class=\"prayers-prev-next__next\" data-rosary-next>\n                <span class=\"sr-only\">Next</span>\n                <span class=\"prayers-prev-next__next-icon\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z\"/></svg>\n                </span>\n            </button>\n        </div>\n        \n    </div>\n\n    \n    <div class=\"rosary-wrapper-wrapper-mask\">\n    <div class=\"rosary-wrapper-wrapper\">\n    <div class=\"rosary-wrapper\">\n    <div class=\"rosary\">\n        <div class=\"rosary-intro-chain\"></div>\n        <div class=\"rosary-intro\">\n            <div class=\"bead-wrapper\"><button class=\"rosary-intro__crucifix bead bead--crucifix\" id=\"crucifix\">\n                <svg width=\"53\" height=\"102\" viewBox=\"0 0 53 102\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M30.2053 3.05746L30.1627 23.0574L50.1627 23.1L50.1478 30.1L37.1478 30.0723L35.6457 31.0691L32.6414 33.0627L30.1372 35.0574L30.1223 42.0574L31.118 44.0595L31.1117 47.0595L30.1042 50.5574L29.9999 99.5572L23 99.5423L23.0989 53.0425L22.5957 54.5414L21.1021 51.5382L21.1106 47.5382L22.6138 46.0414L21.6149 45.5393L21.6191 43.5393L23.1191 43.5425L21.6276 39.5393L21.1372 35.0382L19.1415 33.034L17.1436 32.0297L14.6457 31.0244L3.14577 30.9999L3.16279 23L23.1627 23.0425L23.2053 3.04256L30.2053 3.05746Z\" fill=\"#fff\" stroke=\"#ccc\" stroke-width=\"4\"/>\n                </svg>\n                <span class=\"sr-only\">Sign of the Cross</span>\n            </button></div>\n\n            <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n            <div class=\"bead-wrapper\"><button class=\"rosary-intro__our-father bead bead--our-father\" id=\"intro-our-father-1\"><span class=\"sr-only\">Our Father</span></button></div>\n            <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n\n            <div class=\"bead-wrapper\"><button class=\"rosary-intro__hail-mary bead\" id=\"intro-hail-mary-1\"><span class=\"sr-only\">Hail Mary</span></button></div>\n            <div class=\"bead-wrapper\"><button class=\"rosary-intro__hail-mary bead\" id=\"intro-hail-mary-2\"><span class=\"sr-only\">Hail Mary</span></button></div>\n            <div class=\"bead-wrapper\"><button class=\"rosary-intro__hail-mary bead\" id=\"intro-hail-mary-3\"><span class=\"sr-only\">Hail Mary</span></button></div>\n\n            <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n            <div class=\"bead-wrapper\"><button class=\"rosary-intro__our-father bead bead--our-father\" id=\"intro-our-father-2\"><span class=\"sr-only\">Our Father</span></button></div>\n            <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n        </div>\n\n        <div class=\"rosary-main-wrapper\">\n            <div class=\"rosary-main\">\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n                <div class=\"bead-wrapper medallion\"><button class=\"bead bead--medallion\" id=\"medallion\">\n                    <!-- Medallion\n                    <div class=\"bead\"></div> -->\n                    <svg width=\"59\" height=\"52\" viewBox=\"0 0 59 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M35.6514 44.9919C32.7178 49.7185 25.8402 49.7185 22.9066 44.9919L3.64349 13.955C0.542614 8.95888 4.13567 2.5 10.0159 2.5H48.5421C54.4223 2.5 58.0154 8.95889 54.9145 13.955L35.6514 44.9919Z\" fill=\"#fff\" stroke=\"#ccc\" stroke-width=\"5\"/>\n                    </svg>\n                    <span class=\"sr-only\">Medallion, end of rosary</span>\n                </button></div>\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-01\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-02\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-03\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-04\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-05\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-06\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-07\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-08\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-09\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-10\"><span class=\"sr-only\">Hail Mary</span></button></div>\n\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n                <div class=\"bead-wrapper\"><button class=\"bead bead--our-father\" id=\"our-father-2\"><span class=\"sr-only\">Our Father</span></button></div>\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-01\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-02\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-03\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-04\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-05\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-06\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-07\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-08\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-09\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-10\"><span class=\"sr-only\">Hail Mary</span></button></div>\n\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n                <div class=\"bead-wrapper\"><button class=\"bead bead--our-father\" id=\"our-father-3\"><span class=\"sr-only\">Our Father</span></button></div>\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-01\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-02\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-03\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-04\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-05\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-06\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-07\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-08\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-09\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-10\"><span class=\"sr-only\">Hail Mary</span></button></div>\n\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n                <div class=\"bead-wrapper\"><button class=\"bead bead--our-father\" id=\"our-father-4\"><span class=\"sr-only\">Our Father</span></button></div>\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-01\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-02\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-03\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-04\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-05\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-06\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-07\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-08\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-09\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-10\"><span class=\"sr-only\">Hail Mary</span></button></div>\n\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n                <div class=\"bead-wrapper\"><button class=\"bead bead--our-father\" id=\"our-father-5\"><span class=\"sr-only\">Our Father</span></button></div>\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-01\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-02\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-03\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-04\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-05\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-06\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-07\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-08\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-09\"><span class=\"sr-only\">Hail Mary</span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-10\"><span class=\"sr-only\">Hail Mary</span></button></div>\n            </div>\n        </div>\n    <button id=\"next-prayer-btn-within-beads\"><span class=\"sr-only\">Next Prayer</span></button>\n    </div>\n    </div>\n    </div>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_glorious_1.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_glorious_1.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">John 20:1-29 (RSVCE)</h1>\n\n        <p><sup>20</sup>Now on the first day of the week Mary Mag&prime;dalene came\n        to the tomb early, while it was still dark, and saw that the stone had\n        been taken away from the tomb. <sup>2</sup>So she ran, and went to Simon\n        Peter and the other disciple, the one whom Jesus loved, and said to\n        them, &ldquo;They have taken the Lord out of the tomb, and we do not\n        know where they have laid him.&rdquo; <sup>3</sup>Peter then came out\n        with the other disciple, and they went toward the tomb. <sup>4</sup>They\n        both ran, but the other disciple outran Peter and reached the tomb\n        first; <sup>5</sup>and stooping to look in, he saw the linen cloths\n        lying there, but he did not go in. <sup>6</sup>Then Simon Peter came,\n        following him, and went into the tomb; he saw the linen cloths lying,\n        <sup>7</sup>and the napkin, which had been on his head, not lying with\n        the linen cloths but rolled up in a place by itself. <sup>8</sup>Then\n        the other disciple, who reached the tomb first, also went in, and he saw\n        and believed; <sup>9</sup>for as yet they did not know the scripture,\n        that he must rise from the dead. <sup>10</sup>Then the disciples went\n        back to their homes.</p>\n\n        <p><sup>11</sup>But Mary stood weeping outside the tomb, and as she wept\n        she stooped to look into the tomb; <sup>12</sup>and she saw two angels\n        in white, sitting where the body of Jesus had lain, one at the head and\n        one at the feet. <sup>13</sup>They said to her, &ldquo;Woman, why are\n        you weeping?&rdquo; She said to them, &ldquo;Because they have taken\n        away my Lord, and I do not know where they have laid him.&rdquo;\n        <sup>14</sup>Saying this, she turned round and saw Jesus standing, but\n        she did not know that it was Jesus. <sup>15</sup>Jesus said to her,\n        &ldquo;Woman, why are you weeping? Whom do you seek?&rdquo; Supposing\n        him to be the gardener, she said to him, &ldquo;Sir, if you have carried\n        him away, tell me where you have laid him, and I will take him\n        away.&rdquo; <sup>16</sup>Jesus said to her, &ldquo;Mary.&rdquo; She\n        turned and said to him in Hebrew, &ldquo;Rab-bo&prime;ni!&rdquo; (which\n        means Teacher). <sup>17</sup>Jesus said to her, &ldquo;Do not hold me,\n        for I have not yet ascended to the Father; but go to my brethren and say\n        to them, I am ascending to my Father and your Father, to my God and your\n        God.&rdquo; <sup>18</sup>Mary Mag&prime;dalene went and said to the\n        disciples, &ldquo;I have seen the Lord&ldquo;; and she told them that he\n        had said these things to her.</p>\n\n        <sup>19</sup>On the evening of that day, the first day of the week, the\n        doors being shut where the disciples were, for fear of the Jews, Jesus\n        came and stood among them and said to them, &ldquo;Peace be with you.&rdquo;\n        <sup>20</sup>When he had said this, he showed them his hands and his\n        side. Then the disciples were glad when they saw the Lord.\n        <sup>21</sup>Jesus said to them again, &ldquo;Peace be with you. As the\n        Father has sent me, even so I send you.&rdquo; <sup>22</sup>And when he\n        had said this, he breathed on them, and said to them, &ldquo;Receive the\n        Holy Spirit. <sup>23</sup>If you forgive the sins of any, they are\n        forgiven; if you retain the sins of any, they are retained.&rdquo;\n\n        <p><sup>24</sup>Now Thomas, one of the twelve, called the Twin, was not\n        with them when Jesus came. <sup>25</sup>So the other disciples told him,\n        &ldquo;We have seen the Lord.&rdquo; But he said to them, &ldquo;Unless\n        I see in his hands the print of the nails, and place my finger in the\n        mark of the nails, and place my hand in his side, I will not believe.&rdquo;</p>\n\n        <p><sup>26</sup>Eight days later, his disciples were again in the house,\n        and Thomas was with them. The doors were shut, but Jesus came and stood\n        among them, and said, &ldquo;Peace be with you.&rdquo; <sup>27</sup>Then\n        he said to Thomas, &ldquo;Put your finger here, and see my hands; and\n        put out your hand, and place it in my side; do not be faithless, but\n        believing.&rdquo; <sup>28</sup>Thomas answered him, &ldquo;My Lord and\n        my God!&rdquo; <sup>29</sup>Jesus said to him, &ldquo;Have you believed\n        because you have seen me? Blessed are those who have not seen and yet\n        believe.&rdquo;</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_glorious_2.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_glorious_2.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Luke 24:36-53 (RSVCE)</h1>\n\n        <p><sup>36</sup>As they were saying this, Jesus himself stood among them,\n        and said to them, &ldquo;Peace to you.&rdquo; <sup>37</sup>But they were\n        startled and frightened, and supposed that they saw a spirit.\n        <sup>38</sup>And he said to them, &ldquo;Why are you troubled, and why\n        do questionings rise in your hearts? <sup>39</sup>See my hands and my\n        feet, that it is I myself; handle me, and see; for a spirit has not\n        flesh and bones as you see that I have.&rdquo; <sup>40</sup>And when he\n        had said this, he showed them his hands and his feet. <sup>41</sup>And\n        while they still disbelieved for joy, and wondered, he said to them,\n        &ldquo;Have you anything here to eat?&rdquo; <sup>42</sup>They gave him\n        a piece of broiled fish, <sup>43</sup>and he took it and ate before\n        them.</p>\n\n        <p><sup>44</sup>Then he said to them, &ldquo;These are my words which I\n        spoke to you, while I was still with you, that everything written about\n        me in the law of Moses and the prophets and the psalms must be\n        fulfilled.&rdquo; <sup>45</sup>Then he opened their minds to understand\n        the scriptures, <sup>46</sup>and said to them, &ldquo;Thus it is\n        written, that the Christ should suffer and on the third day rise from\n        the dead, <sup>47</sup>and that repentance and forgiveness of sins\n        should be preached in his name to all nations, beginning from Jerusalem.\n        <sup>48</sup>You are witnesses of these things. <sup>49</sup>And behold,\n        I send the promise of my Father upon you; but stay in the city, until\n        you are clothed with power from on high.&rdquo;</p>\n\n        <p><sup>50</sup>Then he led them out as far as Bethany, and lifting up his\n        hands he blessed them. <sup>51</sup>While he blessed them, he parted\n        from them and was carried up into heaven. <sup>52</sup>And they\n        worshiped him, and returned to Jerusalem with great joy,\n        <sup>53</sup>and were continually in the temple blessing God.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_glorious_3.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_glorious_3.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Acts 2:1-41 (RSVCE)</h1>\n\n        <p><sup>1</sup>When the day of Pentecost had come, they were all together\n        in one place. <sup>2</sup>And suddenly a sound came from heaven like the\n        rush of a mighty wind, and it filled all the house where they were\n        sitting. <sup>3</sup>And there appeared to them tongues as of fire,\n        distributed and resting on each one of them. <sup>4</sup>And they were\n        all filled with the Holy Spirit and began to speak in other tongues, as\n        the Spirit gave them utterance.</p>\n\n        <p><sup>5</sup>Now there were dwelling in Jerusalem Jews, devout men from\n        every nation under heaven. <sup>6</sup>And at this sound the multitude\n        came together, and they were bewildered, because each one heard them\n        speaking in his own language. <sup>7</sup>And they were amazed and\n        wondered, saying, &ldquo;Are not all these who are speaking Galileans?\n        <sup>8</sup>And how is it that we hear, each of us in his own native\n        language? <sup>9</sup>Par&prime;thians and Medes and E&prime;lamites and\n        residents of Mesopota&prime;mia, Judea and Cappado&prime;cia, Pontus and\n        Asia, <sup>10</sup>Phryg&prime;ia and Pamphyl&prime;ia, Egypt and the\n        parts of Libya belonging to Cyre&prime;ne, and visitors from Rome, both\n        Jews and proselytes, <sup>11</sup>Cretans and Arabians, we hear them\n        telling in our own tongues the mighty works of God.&rdquo;\n        <sup>12</sup>And all were amazed and perplexed, saying to one another,\n        &ldquo;What does this mean?&rdquo; <sup>13</sup>But others mocking said,\n        &ldquo;They are filled with new wine.&rdquo;</p>\n\n        <p><sup>14</sup>But Peter, standing with the eleven, lifted up his voice\n        and addressed them, &ldquo;Men of Judea and all who dwell in Jerusalem,\n        let this be known to you, and give ear to my words. <sup>15</sup>For\n        these men are not drunk, as you suppose, since it is only the third hour\n        of the day; <sup>16</sup>but this is what was spoken by the prophet Joel:</p>\n\n        <blockquote><sup>17</sup>&lsquo;And in the last days it shall be, God declares,<br>\n        that I will pour out my Spirit upon all flesh,<br>\n        and your sons and your daughters shall prophesy,<br>\n        and your young men shall see visions,<br>\n        and your old men shall dream dreams;<br>\n        <sup>18</sup>yea, and on my menservants and my maidservants in those days<br>\n        I will pour out my Spirit; and they shall prophesy.<br>\n        <sup>19</sup>And I will show wonders in the heaven above<br>\n        and signs on the earth beneath,<br>\n        blood, and fire, and vapor of smoke;<br>\n        <sup>20</sup>the sun shall be turned into darkness<br>\n        and the moon into blood,<br>\n        before the day of the Lord comes,<br>\n        the great and manifest day.<br>\n        <sup>21</sup>And it shall be that whoever calls on the name of the Lord\n        shall be saved.&rsquo;</blockquote>\n\n        <p><sup>22</sup>&ldquo;Men of Israel, hear these words: Jesus of Nazareth,\n        a man attested to you by God with mighty works and wonders and signs\n        which God did through him in your midst, as you yourselves know&mdash;\n        <sup>23</sup>this Jesus, delivered up according to the definite plan and\n        foreknowledge of God, you crucified and killed by the hands of lawless\n        men. <sup>24</sup>But God raised him up, having loosed the pangs of\n        death, because it was not possible for him to be held by it.\n        <sup>25</sup>For David says concerning him,</p>\n\n        <blockquote>&lsquo;I saw the Lord always before me,<br>\n        for he is at my right hand that I may not be shaken;<br>\n        <sup>26</sup>therefore my heart was glad, and my tongue rejoiced;<br>\n        moreover my flesh will dwell in hope.<br>\n        <sup>27</sup>For thou wilt not abandon my soul to Hades,<br>\n        nor let thy Holy One see corruption.<br>\n        <sup>28</sup>Thou hast made known to me the ways of life;<br>\n        thou wilt make me full of gladness with thy presence.&rsquo;</blockquote>\n\n        <p><sup>29</sup>&ldquo;Brethren, I may say to you confidently of the\n        patriarch David that he both died and was buried, and his tomb is with\n        us to this day. <sup>30</sup>Being therefore a prophet, and knowing that\n        God had sworn with an oath to him that he would set one of his\n        descendants upon his throne, <sup>31</sup>he foresaw and spoke of the\n        resurrection of the Christ, that he was not abandoned to Hades, nor did\n        his flesh see corruption. <sup>32</sup>This Jesus God raised up, and of\n        that we all are witnesses. <sup>33</sup>Being therefore exalted at the\n        right hand of God, and having received from the Father the promise of\n        the Holy Spirit, he has poured out this which you see and hear.\n        <sup>34</sup>For David did not ascend into the heavens; but he himself\n        says,</p>\n\n        <blockquote>&lsquo;The Lord said to my Lord, Sit at my right hand,<br>\n        <sup>35</sup>till I make thy enemies a stool for thy feet.&rsquo;</blockquote>\n\n        <p><sup>36</sup>Let all the house of Israel therefore know assuredly that\n        God has made him both Lord and Christ, this Jesus whom you crucified.&ldquo;</p>\n\n        <p><sup>37</sup>Now when they heard this they were cut to the heart, and\n        said to Peter and the rest of the apostles, &ldquo;Brethren, what shall\n        we do?&rdquo; <sup>38</sup>And Peter said to them, &ldquo;Repent, and be\n        baptized every one of you in the name of Jesus Christ for the\n        forgiveness of your sins; and you shall receive the gift of the Holy\n        Spirit. <sup>39</sup>For the promise is to you and to your children and\n        to all that are far off, every one whom the Lord our God calls to\n        him.&rdquo; <sup>40</sup>And he testified with many other words and\n        exhorted them, saying, &ldquo;Save yourselves from this crooked\n        generation.&rdquo; <sup>41</sup>So those who received his word were\n        baptized, and there were added that day about three thousand souls.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_glorious_4.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_glorious_4.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">St. John of Damascus, Excerpt from the Second Sermon On\n        the Assumption of Mary</h1>\n\n        <p>When the Ark of God, departing from Mount Sion for the heavenly\n        country, was borne on the shoulders of the Apostles, it was placed on\n        the way in the tomb. First it was taken through the city, as a bride\n        dazzling with spiritual radiance, and then carried to the sacred place of\n        Gethsemane, angels overshadowing it with their wings, going before,\n        accompanying, and following it, together with the whole assembly of the\n        Church. King Solomon compelled all the elders of Israel in Sion to bear\n        the ark of the covenant of the Lord from the city of David, that is Sion,\n        to rest in the temple of the Lord, which he had built, and the priests\n        took the ark and the tabernacle of the testimony, and the priests and\n        levites raised it. And the king and all the people sacrificed numberless\n        oxen and sheep before the ark. And the priests carried in the ark of the\n        testimony of God into its place, into the Holy of Holies, beneath the\n        wings of the cherubim. So is it now with the dwelling-place of the true\n        ark, no longer of the testimony, but the very substance of God the Word.\n        The new Solomon, the Prince of peace, the Creator of all things in the\n        heavens and on the earth, assembled together to-day the supporters of\n        the new covenant, that is the Apostles, with all the people of the\n        saints in Jerusalem, brought in her soul through angels to the true Holy\n        of Holies, under the wings of the four living creatures, and set her on\n        His throne within the veil, where Christ Himself had preceded her. Her\n        body the while is borne by the Apostles&rsquo; hands, the King of Kings\n        covering her with the splendour of His invisible Godhead, the whole\n        assembly of the saints preceding her, with sacred song and sacrifice of\n        praise until through the tomb it was placed in the delights of Eden, the\n        heavenly tabernacles.</p>\n\n        <p>[&hellip;]</p>\n\n        <p>Then they reached the most sacred Gethsemane, and once more there\n        were embracings and prayers and panegyrics, hymns and tears, poured\n        forth by sorrowful and loving hearts. They mingled a flood of weeping\n        and sweating. And thus the immaculate (πανάγιον) body was laid in the\n        tomb. Then it was assumed after three days to the heavenly mansions. The\n        bosom of the earth was no fitting receptacle for the Lord&rsquo;s\n        dwelling-place, the living source of cleansing water, the corn of\n        heavenly bread, the sacred vine of divine wine, the evergreen and\n        fruitful olive-branch of God&rsquo;s mercy. And just as the all holy\n        body of God&rsquo;s Son, which was taken from her, rose from the dead on\n        the third day, it followed that she should be snatched from the tomb,\n        that the mother should be united to her Son; and as He had come down to\n        her, so she should be raised up to Him, into the more perfect\n        dwelling-place, heaven itself. It was meet that she, who had sheltered\n        God the Word in her own womb, should inhabit the tabernacles of her Son.\n        And as our Lord said it behoved Him to be concerned with His\n        Father&rsquo;s business, so it behoved His mother that she should dwell\n        in the courts of her Son, in the house of the Lord, and in the courts of\n        the house of our God. If all those who rejoice dwell in Him, where must\n        the cause itself of joy abide? It was fitting that the body of her, who\n        preserved her virginity unsullied in her motherhood, should be kept from\n        corruption even after death. She who nursed her Creator as an infant at\n        her breast, had a right to be in the divine tabernacles. The place of\n        the bride whom the Father had espoused, was in the heavenly courts. It\n        was fitting that she who saw her Son die on the cross, and received in\n        her heart the sword of pain which she had not felt in childbirth, should\n        gaze upon Him seated next to the Father. The Mother of God had a right\n        to the possession of her Son, and as handmaid and Mother of God to the\n        worship of all creation. The inheritance of the parents ever passes to\n        the children. Now, as a wise man said, the sources of sacred waters are\n        above. The Son made all creation serve His Mother.</p>\n\n        <hr>\n\n        <p>\n            John of Damascus, Saint.\n            <em>St John Damascene on Holy Images (πρὸς τοὺς διαβάλλοντας τᾶς\n            ἁγίας εἰκόνας). Followed by Three Sermons on the Assumption\n            (κοίμησις)</em>.\n            Trans. Allies, Mary H. (Mary Helen), 1852-1927.\n            Project Gutenberg: September 9, 2015.\n            <a href=\"https://www.gutenberg.org/ebooks/49917\">\n                www.gutenberg.org\n            </a>\n        </p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_glorious_5.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_glorious_5.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Sermon of St. Peter Canisius On the Incomparable\n        Virgin Mary, Mother of God</h1>\n\n        <p>If we follow St. John Damascene, St. Athanasius and others, are we\n        not forced to call Mary Queen, since her father David receiveth the\n        highest praise in Scripture as a renowned king, and her son as King of\n        kings and Lord of lords, reigning forever? She is Queen, moreover, when\n        compared with the Saints who reign like kings in the heavenly kingdom,\n        co-heirs with Christ, the great King, placed on the same throne with\n        him, as the Scripture saith. And as Queen she is second to none of the\n        elect, but in dignity is raised so high above both Angels and men that\n        nothing can be higher or holier than she, who alone hath the same Son as\n        God the Father, and who seeth above her only God and Christ, and below\n        her creatures other than herself.</p>\n\n        <p>The great Athanasius said clearly: Mary is not only the Mother of\n        God, but also can be properly and truly called Queen and Lady, since in\n        fact the Christ who was born of the Virgin Mother is God and Lord and\n        also King. It is to this Queen, therefore, that the Psalmist&rsquo;s words are\n        applied: The Queen taketh her place at thy right hand in garments of\n        gold. Thus Mary is rightly called Queen, not only of heaven, but also of\n        the heavens, as the Mother of the King of Angels, and as the Bride and\n        beloved of the King of the heavens. O Mary, most august Queen and most\n        faithful Mother, to whom no one prayeth in vain who prayeth devoutly,\n        and to whom all mortal men are bound by the enduring memory of so many\n        benefits, again and again reverently I beseech thee to accept and be\n        pleased with every evidence of my devotion to thee, to value the poor\n        gift I offer according to the zeal with which it is offered, and to\n        recommend it to thine all-powerful Son.</p>\n\n        <hr>\n\n        <p>\n            Peter Canisius, Saint.\n            <em>On the Incomparable\n            Virgin Mary, Mother of God</em>.\n            The Divinum Officium Project. Matins for May 31, 2019, 1960 rubrics.\n            <a href=\"http://divinumofficium.com\">\n                divinumofficium.com\n            </a>\n        </p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_joyful_1.html":
/*!***********************************************************!*\
  !*** ./src/js/templates/meditations/med_en_joyful_1.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Luke 1:26-38 (RSVCE)</h1>\n\n        <p><sup>26</sup>In the sixth month the angel Gabriel was sent from God to a\n        city of Galilee named Nazareth, <sup>27</sup>to a virgin betrothed to a man whose\n        name was Joseph, of the house of David; and the virgin&rsquo;s name was Mary.\n        <sup>28</sup>And he came to her and said, &ldquo;Hail, full of grace, the Lord\n        is with you!&rdquo; <sup>29</sup>But she was greatly troubled at the\n        saying, and considered in her mind what sort of greeting this might be.\n        <sup>30</sup>And the angel said to her, &ldquo;Do not be afraid, Mary, for you have\n        found favor with God. <sup>31</sup>And behold, you will conceive in your womb\n        and bear a son, and you shall call his name Jesus.</p>\n\n        <blockquote>\n            <p><sup>32</sup>He will be great, and will be called the Son of the Most High;<br>\n            and the Lord God will give to him the throne of his father David,</p>\n            <p><sup>33</sup>and he will reign over the house of Jacob for ever;<br>\n            and of his kingdom there will be no end.&rdquo;</p>\n        </blockquote>\n\n        </p><sup>34</sup>And Mary said to the angel, &ldquo;How can this be, since\n        I have no husband?&rdquo; <sup>35</sup>And the angel said to her,</p>\n\n        <blockquote>\n            <p>&ldquo;The Holy Spirit will come upon you,<br>\n            and the power of the Most High will overshadow you;<br>\n            therefore the child to be born will be called holy,<br>\n            the Son of God.</p>\n        </blockquote>\n\n        <p><sup>36</sup>And behold, your kinswoman Elizabeth in her old age has\n        also conceived a son; and this is the sixth month with her who was\n        called barren. <sup>37</sup>For with God nothing will be impossible.&rdquo;\n        <sup>38</sup>And Mary said, &ldquo;Behold, I am the handmaid of the Lord;\n        let it be to me according to your word.&rdquo; And the angel departed from her.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_joyful_2.html":
/*!***********************************************************!*\
  !*** ./src/js/templates/meditations/med_en_joyful_2.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Luke 1:39-56 (RSVCE)</h1>\n\n        <p><sup>39</sup>In those days Mary arose and went with haste into the hill\n        country, to a city of Judah, <sup>40</sup>and she entered the house of\n        Zechari&prime;ah and greeted Elizabeth. <sup>41</sup>And when Elizabeth\n        heard the greeting of Mary, the babe leaped in her womb; and Elizabeth\n        was filled with the Holy Spirit <sup>42</sup>and she exclaimed with a\n        loud cry, &ldquo;Blessed are you among women, and blessed is the fruit\n        of your womb! <sup>43</sup>And why is this granted me, that the mother\n        of my Lord should come to me? <sup>44</sup>For behold, when the voice of\n        your greeting came to my ears, the babe in my womb leaped for joy.\n        <sup>45</sup>And blessed is she who believed that there would be a\n        fulfilment of what was spoken to her from the Lord.&rdquo;\n        <sup>46</sup>And Mary said,</p>\n\n        <blockquote>&ldquo;My soul magnifies the Lord,<br>\n        <sup>47</sup>and my spirit rejoices in God my Savior,<br>\n        <sup>48</sup>for he has regarded the low estate of his handmaiden.<br>\n        For behold, henceforth all generations will call me blessed;<br>\n        <sup>49</sup>for he who is mighty has done great things for me,<br>\n        and holy is his name.<br>\n        <sup>50</sup>And his mercy is on those who fear him<br>\n        from generation to generation.<br>\n        <sup>51</sup>He has shown strength with his arm,<br>\n        he has scattered the proud in the imagination of their hearts,<br>\n        <sup>52</sup>he has put down the mighty from their thrones,<br>\n        and exalted those of low degree;<br>\n        <sup>53</sup>he has filled the hungry with good things,<br>\n        and the rich he has sent empty away.<br>\n        <sup>54</sup>He has helped his servant Israel,<br>\n        in remembrance of his mercy,<br>\n        <sup>55</sup>as he spoke to our fathers,<br>\n        to Abraham and to his posterity for ever.&rdquo;</blockquote>\n\n        <p><sup>56</sup>And Mary remained with her about three months, and\n        returned to her home.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_joyful_3.html":
/*!***********************************************************!*\
  !*** ./src/js/templates/meditations/med_en_joyful_3.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Luke 2:1-21 (RSVCE)</h1>\n\n        <p><sup>2</sup>In those days a decree went out from Caesar Augustus that\n        all the world should be enrolled. <sup>2</sup>This was the first\n        enrollment, when Quirin&prime;i-us was governor of Syria.\n        <sup>3</sup>And all went to be enrolled, each to his own city.\n        <sup>4</sup>And Joseph also went up from Galilee, from the city of\n        Nazareth, to Judea, to the city of David, which is called Bethlehem,\n        because he was of the house and lineage of David, <sup>5</sup>to be\n        enrolled with Mary, his betrothed, who was with child. <sup>6</sup>And\n        while they were there, the time came for her to be delivered.\n        <sup>7</sup>And she gave birth to her first-born son and wrapped him in\n        swaddling cloths, and laid him in a manger, because there was no place\n        for them in the inn.</p>\n\n        <p><sup>8</sup>And in that region there were shepherds out in the field,\n        keeping watch over their flock by night. <sup>9</sup>And an angel of the\n        Lord appeared to them, and the glory of the Lord shone around them, and\n        they were filled with fear. <sup>10</sup>And the angel said to them,\n        &ldquo;Be not afraid; for behold, I bring you good news of a great joy\n        which will come to all the people; <sup>11</sup>for to you is born this\n        day in the city of David a Savior, who is Christ the Lord.\n        <sup>12</sup>And this will be a sign for you: you will find a babe\n        wrapped in swaddling cloths and lying in a manger.&rdquo;\n        <sup>13</sup>And suddenly there was with the angel a multitude of the\n        heavenly host praising God and saying,</p>\n\n        <blockquote><sup>14</sup>&ldquo;Glory to God in the highest,<br>\n        and on earth peace among men with whom he is pleased!&rdquo;</blockquote>\n\n        <p><sup>15</sup>When the angels went away from them into heaven, the\n        shepherds said to one another, &ldquo;Let us go over to Bethlehem and\n        see this thing that has happened, which the Lord has made known to\n        us.&rdquo; <sup>16</sup>And they went with haste, and found Mary and\n        Joseph, and the babe lying in a manger. <sup>17</sup>And when they saw\n        it they made known the saying which had been told them concerning this\n        child; <sup>18</sup>and all who heard it wondered at what the shepherds\n        told them. <sup>19</sup>But Mary kept all these things, pondering them\n        in her heart. <sup>20</sup>And the shepherds returned, glorifying and\n        praising God for all they had heard and seen, as it had been told them.</p>\n\n        <p><sup>21</sup>And at the end of eight days, when he was circumcised, he\n        was called Jesus, the name given by the angel before he was conceived\n        in the womb.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_joyful_4.html":
/*!***********************************************************!*\
  !*** ./src/js/templates/meditations/med_en_joyful_4.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Luke 2:22-38 (RSVCE)</h1>\n\n        <p><sup>22</sup>And when the time came for their purification according to\n        the law of Moses, they brought him up to Jerusalem to present him to the\n        Lord <sup>23</sup>(as it is written in the law of the Lord, &ldquo;Every\n        male that opens the womb shall be called holy to the Lord&rdquo;)\n        <sup>24</sup>and to offer a sacrifice according to what is said in the\n        law of the Lord, &ldquo;a pair of turtledoves, or two young\n        pigeons.&rdquo; <sup>25</sup>Now there was a man in Jerusalem, whose\n        name was Simeon, and this man was righteous and devout, looking for the\n        consolation of Israel, and the Holy Spirit was upon him.\n        <sup>26</sup>And it had been revealed to him by the Holy Spirit that he\n        should not see death before he had seen the Lord&rsquo;s Christ.\n        <sup>27</sup>And inspired by the Spirit he came into the temple; and\n        when the parents brought in the child Jesus, to do for him according to\n        the custom of the law, <sup>28</sup>he took him up in his arms and\n        blessed God and said,</p>\n\n        <blockquote><sup>29</sup>&ldquo;Lord, now lettest thou thy servant depart in peace,<br>\n        according to thy word;<br>\n        <sup>30</sup>for mine eyes have seen thy salvation<br>\n        <sup>31</sup>which thou hast prepared in the presence of all peoples,<br>\n        <sup>32</sup>a light for revelation to the Gentiles,<br>\n        and for glory to thy people Israel.&rdquo;</blockquote>\n\n        <p><sup>33</sup>And his father and his mother marveled at what was said\n        about him; <sup>34</sup>and Simeon blessed them and said to Mary his\n        mother,</p>\n\n        <blockquote>&ldquo;Behold, this child is set for the fall and rising of many in Israel,<br>\n        and for a sign that is spoken against<br>\n        <sup>35</sup>(and a sword will pierce through your own soul also),<br>\n        that thoughts out of many hearts may be revealed.&rdquo;</blockquote>\n\n        <p><sup>36</sup>And there was a prophetess, Anna, the daughter of\n        Phan&prime;u-el, of the tribe of Asher; she was of a great age, having\n        lived with her husband seven years from her virginity, <sup>37</sup>and\n        as a widow till she was eighty-four. She did not depart from the temple,\n        worshiping with fasting and prayer night and day. <sup>38</sup>And\n        coming up at that very hour she gave thanks to God, and spoke of him to\n        all who were looking for the redemption of Jerusalem.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_joyful_5.html":
/*!***********************************************************!*\
  !*** ./src/js/templates/meditations/med_en_joyful_5.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Luke 2:41-52 (RSVCE)</h1>\n\n        <p><sup>41</sup>Now his parents went to Jerusalem every year at the feast of the\n        Passover. <sup>42</sup>And when he was twelve years old, they went up\n        according to custom; <sup>43</sup>and when the feast was ended, as they\n        were returning, the boy Jesus stayed behind in Jerusalem. His parents\n        did not know it, <sup>44</sup>but supposing him to be in the company they went a\n        day&rsquo;s journey, and they sought him among their kinsfolk\n        and acquaintances; <sup>45</sup>and when they did not find him, they\n        returned to Jerusalem, seeking him. <sup>46</sup>After three days they\n        found him in the temple, sitting among the teachers, listening\n        to them and asking them questions; <sup>47</sup>and all who heard him were\n        amazed at his understanding and his answers. <sup>48</sup>And when they saw\n        him they were astonished; and his mother said to him,\n        &ldquo;Son, why have you treated us so? Behold, your father and\n        I have been looking for you anxiously.&rdquo; <sup>49</sup>And he said\n        to them, &ldquo;How is it that you sought me? Did you not know\n        that I must be in my Father&rsquo;s house?&rdquo; <sup>50</sup>And they did\n        not understand the saying which he spoke to them. <sup>51</sup>And he went\n        down with them and came to Nazareth, and was obedient to them;\n        and his mother kept all these things in her heart.</p>\n\n        <p><sup>52</sup>And Jesus increased in wisdom and in stature, and in\n        favor with God and man.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_luminous_1.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_luminous_1.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 3:13-16 (RSVCE)</h1>\n\n        <p><sup>13</sup>Then Jesus came from Galilee to the Jordan to John, to be\n        baptized by him. <sup>14</sup>John would have prevented him, saying,\n        &ldquo;I need to be baptized by you, and do you come to me?&rdquo;\n        <sup>15</sup>But Jesus answered him, &ldquo;Let it be so now; for thus\n        it is fitting for us to fulfil all righteousness.&rdquo; Then he\n        consented. <sup>16</sup>And when Jesus was baptized, he went up\n        immediately from the water, and behold, the heavens were opened and he\n        saw the Spirit of God descending like a dove, and alighting on him;</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_luminous_2.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_luminous_2.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">John 2:1-11 (RSVCE)</h1>\n\n        <p><sup>1</sup>On the third day there was a marriage at Cana in Galilee,\n        and the mother of Jesus was there; <sup>2</sup>Jesus also was invited to\n        the marriage, with his disciples. <sup>3</sup>When the wine failed, the\n        mother of Jesus said to him, &ldquo;They have no wine.&rdquo;\n        <sup>4</sup>And Jesus said to her, &ldquo;O woman, what have you to do\n        with me? My hour has not yet come.&rdquo; <sup>5</sup>His mother said to\n        the servants, &ldquo;Do whatever he tells you.&rdquo; <sup>6</sup>Now\n        six stone jars were standing there, for the Jewish rites of\n        purification, each holding twenty or thirty gallons. <sup>7</sup>Jesus\n        said to them, &ldquo;Fill the jars with water.&rdquo; And they filled\n        them up to the brim. <sup>8</sup>He said to them, &ldquo;Now draw some\n        out, and take it to the steward of the feast.&rdquo; So they took it.\n        <sup>9</sup>When the steward of the feast tasted the water now become\n        wine, and did not know where it came from (though the servants who had\n        drawn the water knew), the steward of the feast called the bridegroom\n        <sup>10</sup>and said to him, &ldquo;Every man serves the good wine\n        first; and when men have drunk freely, then the poor wine; but you have\n        kept the good wine until now.&rdquo; <sup>11</sup>This, the first of his\n        signs, Jesus did at Cana in Galilee, and manifested his glory; and his\n        disciples believed in him.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_luminous_3.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_luminous_3.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Mark 1:14-15 (RSVCE)</h1>\n\n        <p><sup>14</sup>Now after John was arrested, Jesus came into Galilee,\n        preaching the gospel of God, <sup>15</sup>and saying, &ldquo;The time is\n        fulfilled, and the kingdom of God is at hand; repent, and believe in the\n        gospel.&rdquo;</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_luminous_4.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_luminous_4.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 17:1-8 (RSVCE)</h1>\n\n        <p><sup>17</sup>And after six days Jesus took with him Peter and James and\n        John his brother, and led them up a high mountain apart. <sup>2</sup>And\n        he was transfigured before them, and his face shone like the sun, and\n        his garments became white as light. <sup>3</sup>And behold, there\n        appeared to them Moses and Eli&prime;jah, talking with him.\n        <sup>4</sup>And Peter said to Jesus, &ldquo;Lord, it is well that we are\n        here; if you wish, I will make three booths here, one for you and one\n        for Moses and one for Eli′jah.&rdquo; <sup>5</sup>He was still speaking,\n        when lo, a bright cloud overshadowed them, and a voice from the cloud\n        said, &ldquo;This is my beloved Son, with whom I am well pleased; listen\n        to him.&rdquo; <sup>6</sup>When the disciples heard this, they fell on\n        their faces, and were filled with awe. <sup>7</sup>But Jesus came and\n        touched them, saying, &ldquo;Rise, and have no fear.&rdquo;\n        <sup>8</sup>And when they lifted up their eyes, they saw no one but\n        Jesus only.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_luminous_5.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_luminous_5.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 26:17-29 (RSVCE)</h1>\n\n        <p><sup>17</sup>Now on the first day of Unleavened Bread the disciples came\n        to Jesus, saying, &ldquo;Where will you have us prepare for you to eat\n        the passover?&rdquo; <sup>18</sup>He said, &ldquo;Go into the city to\n        such a one, and say to him, &lsquo;The Teacher says, My time is at hand;\n        I will keep the passover at your house with my disciples.&lsquo;&rdquo;\n        <sup>19</sup>And the disciples did as Jesus had directed them, and they\n        prepared the passover.</p>\n\n        <p><sup>20</sup>When it was evening, he sat at table with the twelve\n        disciples; <sup>21</sup>and as they were eating, he said, &ldquo;Truly,\n        I say to you, one of you will betray me.&rdquo; <sup>22</sup>And they\n        were very sorrowful, and began to say to him one after another,\n        &ldquo;Is it I, Lord?&rdquo; <sup>23</sup>He answered, &ldquo;He who has\n        dipped his hand in the dish with me, will betray me. <sup>24</sup>The\n        Son of man goes as it is written of him, but woe to that man by whom the\n        Son of man is betrayed! It would have been better for that man if he had\n        not been born.&rdquo; <sup>25</sup>Judas, who betrayed him, said,\n        &ldquo;Is it I, Master?&rdquo; He said to him, &ldquo;You have said\n        so.&rdquo;</p>\n\n        <p><sup>26</sup>Now as they were eating, Jesus took bread, and blessed, and\n        broke it, and gave it to the disciples and said, &ldquo;Take, eat; this\n        is my body.&rdquo; <sup>27</sup>And he took a cup, and when he had given\n        thanks he gave it to them, saying, &ldquo;Drink of it, all of you;\n        <sup>28</sup>for this is my blood of the covenant, which is poured out\n        for many for the forgiveness of sins. <sup>29</sup>I tell you I shall\n        not drink again of this fruit of the vine until that day when I drink it\n        new with you in my Father&rsquo;s kingdom.&rdquo;</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_sorrowful_1.html":
/*!**************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_sorrowful_1.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 26:36-56 (RSVCE)</h1>\n\n        <p><sup>36</sup>Then Jesus went with them to a place called\n        Gethsem&prime;ane, and he said to his disciples, &ldquo;Sit here, while\n        I go yonder and pray.&rdquo; <sup>37</sup>And taking with him Peter and\n        the two sons of Zeb&prime;edee, he began to be sorrowful and troubled.\n        <sup>38</sup>Then he said to them, &ldquo;My soul is very sorrowful,\n        even to death; remain here, and watch with me.&rdquo; <sup>39</sup>And\n        going a little farther he fell on his face and prayed, &ldquo;My Father,\n        if it be possible, let this cup pass from me; nevertheless, not as I\n        will, but as thou wilt.&rdquo; <sup>40</sup>And he came to the disciples\n        and found them sleeping; and he said to Peter, &ldquo;So, could you not\n        watch with me one hour? <sup>41</sup>Watch and pray that you may not\n        enter into temptation; the spirit indeed is willing, but the flesh is\n        weak.&rdquo; <sup>42</sup>Again, for the second time, he went away and\n        prayed, &ldquo;My Father, if this cannot pass unless I drink it, thy\n        will be done.&rdquo; <sup>43</sup>And again he came and found them\n        sleeping, for their eyes were heavy. <sup>44</sup>So, leaving them\n        again, he went away and prayed for the third time, saying the same\n        words. <sup>45</sup>Then he came to the disciples and said to them,\n        &ldquo;Are you still sleeping and taking your rest? Behold, the hour is\n        at hand, and the Son of man is betrayed into the hands of sinners.\n        <sup>46</sup>Rise, let us be going; see, my betrayer is at hand.&rdquo;</p>\n\n        <p><sup>47</sup>While he was still speaking, Judas came, one of the twelve,\n        and with him a great crowd with swords and clubs, from the chief priests\n        and the elders of the people. <sup>48</sup>Now the betrayer had given\n        them a sign, saying, &ldquo;The one I shall kiss is the man; seize\n        him.&rdquo; <sup>49</sup>And he came up to Jesus at once and said,\n        &ldquo;Hail, Master!&rdquo; And he kissed him. <sup>50</sup>Jesus said\n        to him, &ldquo;Friend, why are you here?&rdquo; Then they came up and\n        laid hands on Jesus and seized him. <sup>51</sup>And behold, one of\n        those who were with Jesus stretched out his hand and drew his sword, and\n        struck the slave of the high priest, and cut off his ear.\n        <sup>52</sup>Then Jesus said to him, &ldquo;Put your sword back into its\n        place; for all who take the sword will perish by the sword.\n        <sup>53</sup>Do you think that I cannot appeal to my Father, and he will\n        at once send me more than twelve legions of angels? <sup>54</sup>But how\n        then should the scriptures be fulfilled, that it must be so?&rdquo;\n        <sup>55</sup>At that hour Jesus said to the crowds, &ldquo;Have you come\n        out as against a robber, with swords and clubs to capture me? Day after\n        day I sat in the temple teaching, and you did not seize me.\n        <sup>56</sup>But all this has taken place, that the scriptures of the\n        prophets might be fulfilled.&rdquo; Then all the disciples forsook him\n        and fled.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>\n\n\n\n\n";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_sorrowful_2.html":
/*!**************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_sorrowful_2.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 27:24-26 (RSVCE)</h1>\n\n        <p><sup>24</sup>So when Pilate saw that he was gaining nothing, but rather\n        that a riot was beginning, he took water and washed his hands before the\n        crowd, saying, &ldquo;I am innocent of this righteous man&rsquo;s blood;\n        see to it yourselves.&rdquo; <sup>25</sup>And all the people answered,\n        &ldquo;His blood be on us and on our children!&rdquo; <sup>26</sup>Then\n        he released for them Barab&prime;bas, and having scourged Jesus,\n        delivered him to be crucified.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>\n\n\n\n\n";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_sorrowful_3.html":
/*!**************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_sorrowful_3.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 27:27-31 (RSVCE)</h1>\n\n        <p><sup>27</sup>Then the soldiers of the governor took Jesus into the\n        praetorium, and they gathered the whole battalion before him.\n        <sup>28</sup>And they stripped him and put a scarlet robe upon him,\n        <sup>29</sup>and plaiting a crown of thorns they put it on his head, and\n        put a reed in his right hand. And kneeling before him they mocked him,\n        saying, &ldquo;Hail, King of the Jews!&rdquo; <sup>30</sup>And they spat\n        upon him, and took the reed and struck him on the head. <sup>31</sup>And\n        when they had mocked him, they stripped him of the robe, and put his own\n        clothes on him, and led him away to crucify him.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>\n\n\n\n\n";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_sorrowful_4.html":
/*!**************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_sorrowful_4.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 27:32 (RSVCE)</h1>\n\n        <p><sup>32</sup>As they were marching out, they came upon a man of\n        Cyre&prime;ne, Simon by name; this man they compelled to carry his\n        cross.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>\n\n\n\n\n";

/***/ }),

/***/ "./src/js/templates/meditations/med_en_sorrowful_5.html":
/*!**************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_sorrowful_5.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 27:33-56 (RSVCE)</h1>\n\n        <p><sup>33</sup>And when they came to a place called Gol&prime;gotha (which\n        means the place of a skull), <sup>34</sup>they offered him wine to\n        drink, mingled with gall; but when he tasted it, he would not drink it.\n        <sup>35</sup>And when they had crucified him, they divided his garments\n        among them by casting lots; <sup>36</sup>then they sat down and kept\n        watch over him there. <sup>37</sup>And over his head they put the charge\n        against him, which read, &ldquo;This is Jesus the King of the\n        Jews.&rdquo; <sup>38</sup>Then two robbers were crucified with him, one\n        on the right and one on the left. <sup>39</sup>And those who passed by\n        derided him, wagging their heads <sup>40</sup>and saying, &ldquo;You who\n        would destroy the temple and build it in three days, save yourself! If\n        you are the Son of God, come down from the cross.&rdquo; <sup>41</sup>So\n        also the chief priests, with the scribes and elders, mocked him, saying,\n        <sup>42</sup>&ldquo;He saved others; he cannot save himself. He is the\n        King of Israel; let him come down now from the cross, and we will\n        believe in him. <sup>43</sup>He trusts in God; let God deliver him now,\n        if he desires him; for he said, &lsquo;I am the Son of\n        God.&rsquo;&rdquo; <sup>44</sup>And the robbers who were crucified with\n        him also reviled him in the same way.<p>\n\n        <p><sup>45</sup>Now from the sixth hour there was darkness over all the land\n        until the ninth hour. <sup>46</sup>And about the ninth hour Jesus cried with a\n        loud voice, &ldquo;Eli, Eli, la&prime;ma sabach-tha&prime;ni?&rdquo;\n        that is, &ldquo;My God, my God, why hast thou forsaken me?&rdquo;\n        <sup>47</sup>And some of the bystanders hearing it said, &ldquo;This man is\n        calling Eli&prime;jah.&rdquo; <sup>48</sup>And one of them at once ran and\n        took a sponge, filled it with vinegar, and put it on a reed, and\n        gave it to him to drink. <sup>49</sup>But the others said, &ldquo;Wait, let us\n        see whether Eli&prime;jah will come to save him.&rdquo; <sup>50</sup>And\n        Jesus cried again with a loud voice and yielded up his spirit.</p>\n\n        <p><sup>51</sup>And behold, the curtain of the temple was torn in two, from\n        top to bottom; and the earth shook, and the rocks were split;\n        <sup>52</sup>the tombs also were opened, and many bodies of the saints who\n        had fallen asleep were raised, <sup>53</sup>and coming out of the tombs\n        after his resurrection they went into the holy city and appeared\n        to many. <sup>54</sup>When the centurion and those who were with him,\n        keeping watch over Jesus, saw the earthquake and what took place,\n        they were filled with awe, and said, &ldquo;Truly this was the\n        Son of God!&rdquo;</p>\n\n        <p><sup>55</sup>There were also many women there, looking on from afar, who\n        had followed Jesus from Galilee, ministering to him; <sup>56</sup>among\n        whom were Mary Mag&prime;dalene, and Mary the mother of James and\n        Joseph, and the mother of the sons of Zeb&prime;edee.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>\n\n\n\n\n";

/***/ }),

/***/ "./src/js/templates/partials/header.html":
/*!***********************************************!*\
  !*** ./src/js/templates/partials/header.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <h1 class=\"sr-only\">Holy Rosary Online</h1>\n\n    <nav>\n        <ul>\n            <li>\n                <a href=\"/about\" data-navigo title=\"About\">\n                    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M10.5 7.125C10.5 6.50625 11.0063 6 11.625 6H12.375C12.9938 6 13.5 6.50625 13.5 7.125V7.875C13.5 8.49375 12.9938 9 12.375 9H11.625C11.0063 9 10.5 8.49375 10.5 7.875V7.125Z\"/>\n                        <path d=\"M15 18H9V16.5H10.5V12H9V10.5H13.5V16.5H15V18Z\"/>\n                        <path d=\"M12 0C5.37225 0 0 5.37225 0 12C0 18.6278 5.37225 24 12 24C18.6278 24 24 18.6278 24 12C24 5.37225 18.6278 0 12 0ZM12 21.75C6.615 21.75 2.25 17.385 2.25 12C2.25 6.615 6.615 2.25 12 2.25C17.385 2.25 21.75 6.615 21.75 12C21.75 17.385 17.385 21.75 12 21.75Z\"/>\n                    </svg>\n                    <span class=\"sr-only\">About</span>\n                </a>\n            </li>\n            <li>\n                <a href=\"/settings\" data-navigo title=\"Settings\">\n                    <svg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M22.2469 14.8263C20.9416 12.5656 21.7268 9.66888 24 8.35192L21.555 4.11726C20.8569 4.52697 20.0444 4.76175 19.1776 4.76175C16.5647 4.76175 14.447 2.63004 14.447 0H9.55771C9.56393 0.811635 9.3618 1.63493 8.92721 2.38671C7.62191 4.64747 4.72055 5.41635 2.44424 4.1056L0 8.34025C0.703573 8.74063 1.31308 9.32603 1.7461 10.077C3.04908 12.3339 2.26854 15.2259 0.00388714 16.5445L2.4489 20.7791C3.1447 20.3733 3.95322 20.1416 4.81539 20.1416C7.41978 20.1416 9.53205 22.2601 9.54527 24.8777H14.4345C14.4322 24.0739 14.6359 23.2607 15.065 22.5159C16.368 20.259 19.2623 19.4886 21.5371 20.7908L23.9821 16.5561C23.2832 16.1557 22.6776 15.5719 22.2469 14.8256V14.8263ZM11.9996 17.4766C9.21797 17.4766 6.96265 15.2213 6.96265 12.4396C6.96265 9.658 9.21797 7.40268 11.9996 7.40268C14.7813 7.40268 17.0366 9.658 17.0366 12.4396C17.0366 15.2213 14.7813 17.4766 11.9996 17.4766Z\"/>\n                    </svg>\n                    <span class=\"sr-only\">Settings</span>\n                </a>\n            </li>\n        </ul>\n    </nav>\n</header>";

/***/ }),

/***/ "./src/js/templates/settings.html":
/*!****************************************!*\
  !*** ./src/js/templates/settings.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"template-settings\" class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n        <h1>Settings</h1>\n        <form action=\"\" method=\"post\" id=\"form-settings\">\n            <label for=\"form-settings-mysteries\">Mysteries</label>\n            <select id=\"form-settings-mysteries\" name=\"mysteries\">\n                <option value=\"byday\">By day</option>\n                <option value=\"joyful\">Joyful</option>\n                <option value=\"luminous\">Luminous</option>\n                <option value=\"sorrowful\">Sorrowful</option>\n                <option value=\"glorious\">Glorious</option>\n            </select>\n\n            <label for=\"form-settings-rosary-language\">Rosary Language</label>\n            <select id=\"form-settings-rosary-language\" name=\"rosary-language\">\n                <option value=\"EN\">English</option>\n                <option value=\"EN_TRAD\">English - Traditional</option>\n                <option value=\"LA\">Latin</option>\n            </select>\n\n            \n\n            <h2 class=\"label\">More Options</h2>\n            <button id=\"settings-more-btn\" type=\"button\">\n                Show\n            </button>\n            <div id=\"advanced-settings-more\">\n                <label for=\"form-settings-hide-prayers\">\n                    Hide the words to the prayers. Click blank space to go to the\n                    next prayer.\n                </label>\n                <input type=\"checkbox\" name=\"hide-prayers\"\n                    id=\"form-settings-hide-prayers\">\n\n                <label for=\"form-settings-divine-mercy\">\n                    Pray the Divine Mercy Chaplet instead.\n                </label>\n                <input id=\"form-settings-divine-mercy\" name=\"divine-mercy\"\n                    type=\"checkbox\">\n            </div>\n\n            \n\n            <input type=\"submit\" value=\"Saved!\">\n\n            \n        </form>\n    </div>\n</div>";

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: getMysteriesForCurrDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMysteriesForCurrDay", function() { return getMysteriesForCurrDay; });
var getMysteriesForCurrDay = function getMysteriesForCurrDay() {
  var dayToMysteriesMap = {
    0: 'glorious',
    1: 'joyful',
    2: 'sorrowful',
    3: 'glorious',
    4: 'luminous',
    5: 'sorrowful',
    6: 'joyful'
  };
  var date = new Date();
  var day = date.getDay();
  return dayToMysteriesMap[day];
};

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/sass/main.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/matt/dev/holyrosaryonline/src/js/main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! /home/matt/dev/holyrosaryonline/src/sass/main.scss */"./src/sass/main.scss");


/***/ })

/******/ });