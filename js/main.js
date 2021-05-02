/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var navigo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! navigo */ "./node_modules/navigo/lib/navigo.min.js");
/* harmony import */ var navigo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(navigo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderView */ "./src/js/renderView.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/js/store.js");
/* harmony import */ var _page_scripts_HomeJS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-scripts/HomeJS */ "./src/js/page-scripts/HomeJS.js");
/* harmony import */ var _page_scripts_SettingsJS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-scripts/SettingsJS */ "./src/js/page-scripts/SettingsJS.js");
/* harmony import */ var _page_scripts_ArtworkJS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-scripts/ArtworkJS */ "./src/js/page-scripts/ArtworkJS.js");





 // Comment out during development

/* if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' });
}; */

$(document).ready(function () {
  window.nvgo_root = window.location.hostname === 'holyrosaryonline.com' ? 'https://holyrosaryonline.com' : 'http://' + window.location.host;
  window.nvgo_useHash = false; // Defaults to: false

  window.nvgo_hash = '#!'; // Defaults to: '#'

  window.nvgo_router = new (navigo__WEBPACK_IMPORTED_MODULE_0___default())(nvgo_root, nvgo_useHash, nvgo_hash);
  window.nvgo_router.on({
    'settings': function settings() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/settings');
      (0,_page_scripts_SettingsJS__WEBPACK_IMPORTED_MODULE_4__.default)();
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'about': function about() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/about');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'artwork': function artwork() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/artwork');
      (0,_page_scripts_ArtworkJS__WEBPACK_IMPORTED_MODULE_5__.default)();
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_joyful_1': function med_en_joyful_1() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_joyful_1');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_joyful_2': function med_en_joyful_2() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_joyful_2');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_joyful_3': function med_en_joyful_3() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_joyful_3');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_joyful_4': function med_en_joyful_4() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_joyful_4');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_joyful_5': function med_en_joyful_5() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_joyful_5');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_luminous_1': function med_en_luminous_1() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_luminous_1');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_luminous_2': function med_en_luminous_2() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_luminous_2');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_luminous_3': function med_en_luminous_3() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_luminous_3');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_luminous_4': function med_en_luminous_4() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_luminous_4');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_luminous_5': function med_en_luminous_5() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_luminous_5');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_sorrowful_1': function med_en_sorrowful_1() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_sorrowful_1');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_sorrowful_2': function med_en_sorrowful_2() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_sorrowful_2');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_sorrowful_3': function med_en_sorrowful_3() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_sorrowful_3');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_sorrowful_4': function med_en_sorrowful_4() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_sorrowful_4');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_sorrowful_5': function med_en_sorrowful_5() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_sorrowful_5');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_glorious_1': function med_en_glorious_1() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_glorious_1');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_glorious_2': function med_en_glorious_2() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_glorious_2');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_glorious_3': function med_en_glorious_3() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_glorious_3');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_glorious_4': function med_en_glorious_4() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_glorious_4');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_en_glorious_5': function med_en_glorious_5() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_en_glorious_5');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    // SPANISH
    'med_es_joyful_1': function med_es_joyful_1() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_es_joyful_1');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_es_joyful_2': function med_es_joyful_2() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_es_joyful_2');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_es_joyful_3': function med_es_joyful_3() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_es_joyful_3');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_es_joyful_4': function med_es_joyful_4() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_es_joyful_4');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_es_joyful_5': function med_es_joyful_5() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_es_joyful_5');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_es_glorious_1': function med_es_glorious_1() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_es_glorious_1');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_es_glorious_2': function med_es_glorious_2() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_es_glorious_2');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_es_glorious_3': function med_es_glorious_3() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_es_glorious_3');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_es_glorious_4': function med_es_glorious_4() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_es_glorious_4');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    },
    'med_es_glorious_5': function med_es_glorious_5() {
      (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/med_es_glorious_5');
      window.nvgo_router.updatePageLinks();
      hro_localize();
    }
  }).resolve(); // Seems for home and 404, we have to do it this way :(

  window.nvgo_router.on('/', function () {
    (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('/');
    (0,_page_scripts_HomeJS__WEBPACK_IMPORTED_MODULE_3__.default)();
    window.nvgo_router.updatePageLinks();
    hro_localize();
  }).resolve();
  window.nvgo_router.notFound(function () {
    (0,_renderView__WEBPACK_IMPORTED_MODULE_1__.default)('404');
    window.nvgo_router.updatePageLinks();
    hro_localize();
  }).resolve(); // Localize. We either surround the text in the <hro-localize> tag, or when that's not
  // possible, as in, for some reason, select options, then we put the data-hro-localize
  // attribute on the element, with it not set to equal anything

  function hro_localize() {
    $('hro-localize, [data-hro-localize]').text(function (idx, text) {
      if (_store__WEBPACK_IMPORTED_MODULE_2__.default.localization.ES[text]) {
        text = _store__WEBPACK_IMPORTED_MODULE_2__.default.localization.ES[text];
      }

      return text;
    });
  }
});

/***/ }),

/***/ "./src/js/page-scripts/ArtworkJS.js":
/*!******************************************!*\
  !*** ./src/js/page-scripts/ArtworkJS.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArtworkJS)
/* harmony export */ });
/* harmony import */ var _images_default_agony_md__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../images/default/agony.md */ "./images/default/agony.md");
/* harmony import */ var _images_default_agony_md__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_images_default_agony_md__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_default_annunciation_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../images/default/annunciation.md */ "./images/default/annunciation.md");
/* harmony import */ var _images_default_annunciation_md__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_default_annunciation_md__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_default_ascension_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../images/default/ascension.md */ "./images/default/ascension.md");
/* harmony import */ var _images_default_ascension_md__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_default_ascension_md__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_default_assumption_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/default/assumption.md */ "./images/default/assumption.md");
/* harmony import */ var _images_default_assumption_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_default_assumption_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_default_baptism_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../images/default/baptism.md */ "./images/default/baptism.md");
/* harmony import */ var _images_default_baptism_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_default_baptism_md__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_default_cana_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../images/default/cana.md */ "./images/default/cana.md");
/* harmony import */ var _images_default_cana_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_default_cana_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_default_coronation_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../images/default/coronation.md */ "./images/default/coronation.md");
/* harmony import */ var _images_default_coronation_md__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_default_coronation_md__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_default_cross_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../images/default/cross.md */ "./images/default/cross.md");
/* harmony import */ var _images_default_cross_md__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_default_cross_md__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_default_crucifixion_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../images/default/crucifixion.md */ "./images/default/crucifixion.md");
/* harmony import */ var _images_default_crucifixion_md__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_default_crucifixion_md__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_default_default_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../images/default/default.md */ "./images/default/default.md");
/* harmony import */ var _images_default_default_md__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_default_default_md__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_default_descent_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../images/default/descent.md */ "./images/default/descent.md");
/* harmony import */ var _images_default_descent_md__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_default_descent_md__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_default_eucharist_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../images/default/eucharist.md */ "./images/default/eucharist.md");
/* harmony import */ var _images_default_eucharist_md__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_default_eucharist_md__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_default_finding_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../images/default/finding.md */ "./images/default/finding.md");
/* harmony import */ var _images_default_finding_md__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_default_finding_md__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_default_nativity_md__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../images/default/nativity.md */ "./images/default/nativity.md");
/* harmony import */ var _images_default_nativity_md__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_images_default_nativity_md__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _images_default_presentation_md__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../images/default/presentation.md */ "./images/default/presentation.md");
/* harmony import */ var _images_default_presentation_md__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_images_default_presentation_md__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _images_default_proclamation_md__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../images/default/proclamation.md */ "./images/default/proclamation.md");
/* harmony import */ var _images_default_proclamation_md__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_images_default_proclamation_md__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _images_default_resurrection_md__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../images/default/resurrection.md */ "./images/default/resurrection.md");
/* harmony import */ var _images_default_resurrection_md__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_images_default_resurrection_md__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _images_default_scourging_md__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../images/default/scourging.md */ "./images/default/scourging.md");
/* harmony import */ var _images_default_scourging_md__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_images_default_scourging_md__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _images_default_thorns_md__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../images/default/thorns.md */ "./images/default/thorns.md");
/* harmony import */ var _images_default_thorns_md__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_images_default_thorns_md__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _images_default_transfiguration_md__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../images/default/transfiguration.md */ "./images/default/transfiguration.md");
/* harmony import */ var _images_default_transfiguration_md__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_images_default_transfiguration_md__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _images_default_visitation_md__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../images/default/visitation.md */ "./images/default/visitation.md");
/* harmony import */ var _images_default_visitation_md__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_images_default_visitation_md__WEBPACK_IMPORTED_MODULE_20__);








 // Default is reserved in js I think













function ArtworkJS() {
  appendHTML('#artwork-joyful', (_images_default_annunciation_md__WEBPACK_IMPORTED_MODULE_1___default()), 'annunciation');
  appendHTML('#artwork-joyful', (_images_default_visitation_md__WEBPACK_IMPORTED_MODULE_20___default()), 'visitation');
  appendHTML('#artwork-joyful', (_images_default_nativity_md__WEBPACK_IMPORTED_MODULE_13___default()), 'nativity');
  appendHTML('#artwork-joyful', (_images_default_presentation_md__WEBPACK_IMPORTED_MODULE_14___default()), 'presentation');
  appendHTML('#artwork-joyful', (_images_default_finding_md__WEBPACK_IMPORTED_MODULE_12___default()), 'finding');
  appendHTML('#artwork-sorrowful', (_images_default_agony_md__WEBPACK_IMPORTED_MODULE_0___default()), 'agony');
  appendHTML('#artwork-sorrowful', (_images_default_scourging_md__WEBPACK_IMPORTED_MODULE_17___default()), 'scourging');
  appendHTML('#artwork-sorrowful', (_images_default_thorns_md__WEBPACK_IMPORTED_MODULE_18___default()), 'thorns');
  appendHTML('#artwork-sorrowful', (_images_default_cross_md__WEBPACK_IMPORTED_MODULE_7___default()), 'cross');
  appendHTML('#artwork-sorrowful', (_images_default_crucifixion_md__WEBPACK_IMPORTED_MODULE_8___default()), 'crucifixion');
  appendHTML('#artwork-glorious', (_images_default_resurrection_md__WEBPACK_IMPORTED_MODULE_16___default()), 'resurrection');
  appendHTML('#artwork-glorious', (_images_default_ascension_md__WEBPACK_IMPORTED_MODULE_2___default()), 'ascension');
  appendHTML('#artwork-glorious', (_images_default_descent_md__WEBPACK_IMPORTED_MODULE_10___default()), 'descent');
  appendHTML('#artwork-glorious', (_images_default_assumption_md__WEBPACK_IMPORTED_MODULE_3___default()), 'assumption');
  appendHTML('#artwork-glorious', (_images_default_coronation_md__WEBPACK_IMPORTED_MODULE_6___default()), 'coronation');
  appendHTML('#artwork-luminous', (_images_default_baptism_md__WEBPACK_IMPORTED_MODULE_4___default()), 'baptism');
  appendHTML('#artwork-luminous', (_images_default_cana_md__WEBPACK_IMPORTED_MODULE_5___default()), 'cana');
  appendHTML('#artwork-luminous', (_images_default_proclamation_md__WEBPACK_IMPORTED_MODULE_15___default()), 'proclamation');
  appendHTML('#artwork-luminous', (_images_default_transfiguration_md__WEBPACK_IMPORTED_MODULE_19___default()), 'transfiguration');
  appendHTML('#artwork-luminous', (_images_default_eucharist_md__WEBPACK_IMPORTED_MODULE_11___default()), 'eucharist');

  function appendHTML(el, copy, img) {
    $(el).append('<div id="img-copy' + img + '">' + copy + '</div>');
    var title = $('#img-copy' + img).find('h1').html();
    $('#img-copy' + img).find('h1').remove();
    $('#img-copy' + img).prepend('<h3>&ldquo;' + title + '&rdquo;</h3>');
    var url = document.createElement('a');
    url.href = $('#img-copy' + img).find('a').attr('href');
    $('#img-copy' + img).find('a').text(url.hostname + ' ...');
    $('<img src="/images/default/' + img + '.jpg" alt="Image of this mystery"' + 'style="width: 100%; height: auto;">').insertAfter('#img-copy' + img + ' > h3');
  }
}

/***/ }),

/***/ "./src/js/page-scripts/HomeJS.js":
/*!***************************************!*\
  !*** ./src/js/page-scripts/HomeJS.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeJS)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/js/store.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");


function HomeJS() {
  if (_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hidePrayers) {
    $('.prayers').css({
      display: 'none'
    });
  } // Add user-selected bead color style element


  $('#template-home').prepend("\n        <style>\n            .bead::after {\n                background-color: ".concat(_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.rosaryColor, ";\n            }\n            .bead--filler::after, .bead--medallion::after, .bead--crucifix::after {\n                background-color: transparent;\n            }\n        </style>\n    ")); // Reset prev image window variable

  window.HRO_prev_appended = null; // Add index data to each bead, main loop and intro separated

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
  var lastBeadIdx = 0; // Set no-images classes if necessary

  if (_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hideImages) {
    $('.rosary-wrapper-wrapper-mask').addClass('rosary-wrapper-wrapper-mask--no-images');
    $('.prayers').addClass('prayers--no-images');
    $('.prayers-prev-next').addClass('prayers-prev-next--no-images');
    $('.prayers-reset').addClass('prayers-reset--no-images');
  } // Rotate on click


  $('.rosary-main button.bead').click(function (event) {
    var currBeadIdx = $(this).data('bead-idx');
    rotateRosary(currBeadIdx);
    var fromBeadId = $('.bead--selected').attr('id');
    setBeadSelectedClass($(this)); // reset intro drag

    $('.rosary-wrapper-wrapper').css({
      transform: 'translateY(0)',
      transition: 'transform .5s ease'
    }); // If same bead, go to next prayer in bead, or if on last one, stop

    if (fromBeadId === $('.bead--selected').attr('id')) {
      if ($('.prayer--current ~ .prayer').length) {
        $('[data-rosary-next]').click();
        return;
      } else {
        return;
      }
    }

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
      transform: 'translateY(' + dragDist + 'px)',
      transition: 'transform .5s ease'
    });
    var fromBeadId = $('.bead--selected').attr('id');
    setBeadSelectedClass($(this)); // If same bead, go to next prayer in bead, or if on last one, stop

    if (fromBeadId === $('.bead--selected').attr('id')) {
      if ($('.prayer--current ~ .prayer').length) {
        $('[data-rosary-next]').click();
        return;
      } else {
        return;
      }
    }

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

  if (savedPrayerId && $('#' + savedPrayerId).length) {
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
    var language = _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.rosaryLanguage;
    var mysteries = _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.mysteries;

    if (beadId === 'crucifix') {
      // Sense day change if necessary
      if (!localStorage.getItem('mysteries')) _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.mysteries = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getMysteriesForCurrDay)();

      if (!_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.signOfTheCross[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.signOfTheCross[language].text
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.apostlesCreed[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.apostlesCreed[language].text
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.signOfTheCross[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.signOfTheCross[language].text
        }];
      }
    } else if (beadId.slice(0, 9) === 'intro-hai' || beadId.slice(0, 9) === 'hail-mary') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.divineMercy) {
        if (beadId.slice(0, 9) === 'intro-hai') {
          prayers = [{
            title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].text
          }];
        } else if (beadId.slice(0, 11) === 'hail-mary-1') {
          prayers = [{
            image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][0].image,
            imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][0].imagePosition,
            title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].text
          }];
        } else if (beadId.slice(0, 11) === 'hail-mary-2') {
          prayers = [{
            image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][1].image,
            imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][1].imagePosition,
            title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].text
          }];
        } else if (beadId.slice(0, 11) === 'hail-mary-3') {
          prayers = [{
            image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][2].image,
            imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][2].imagePosition,
            title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].text
          }];
        } else if (beadId.slice(0, 11) === 'hail-mary-4') {
          prayers = [{
            image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][3].image,
            imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][3].imagePosition,
            title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].text
          }];
        } else if (beadId.slice(0, 11) === 'hail-mary-5') {
          prayers = [{
            image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][4].image,
            imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][4].imagePosition,
            title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].text
          }];
        } else {
          prayers = [{
            title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].text
          }];
        }
      } else {
        if (beadId.slice(0, 9) === 'hail-mary') {
          prayers = [{
            title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.forTheSake[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.forTheSake[language].text
          }];
        }

        if (beadId === 'intro-hail-mary-1') {
          prayers = [{
            title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.ourFather[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.ourFather[language].text
          }];
        }

        if (beadId === 'intro-hail-mary-2') {
          prayers = [{
            title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailMary[language].text
          }];
        }

        if (beadId === 'intro-hail-mary-3') {
          prayers = [{
            title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.apostlesCreed[language].title,
            text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.apostlesCreed[language].text
          }];
        }
      }
    } else if (beadId === 'intro-our-father-1') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.ourFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.ourFather[language].text
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.optionalOpening[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.optionalOpening[language].text
        }];
      }
    } else if (beadId === 'intro-our-father-2') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.gloryBe[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.gloryBe[language].text
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.fatimaPrayer[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.fatimaPrayer[language].text
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][0].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][0].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][0].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][0].imagePosition
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.ourFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.ourFather[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][0].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][0].imagePosition
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.eternalFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.eternalFather[language].text
        }];
      }
    } else if (beadId === 'our-father-2') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.gloryBe[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.gloryBe[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][0].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][0].imagePosition
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.fatimaPrayer[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.fatimaPrayer[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][0].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][0].imagePosition
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][1].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][1].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][1].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][1].imagePosition
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.ourFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.ourFather[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][1].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][1].imagePosition
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.eternalFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.eternalFather[language].text
        }];
      }
    } else if (beadId === 'our-father-3') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.gloryBe[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.gloryBe[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][1].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][1].imagePosition
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.fatimaPrayer[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.fatimaPrayer[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][1].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][1].imagePosition
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][2].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][2].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][2].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][2].imagePosition
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.ourFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.ourFather[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][2].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][2].imagePosition
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.eternalFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.eternalFather[language].text
        }];
      }
    } else if (beadId === 'our-father-4') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.gloryBe[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.gloryBe[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][2].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][2].imagePosition
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.fatimaPrayer[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.fatimaPrayer[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][2].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][2].imagePosition
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][3].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][3].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][3].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][3].imagePosition
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.ourFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.ourFather[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][3].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][3].imagePosition
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.eternalFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.eternalFather[language].text
        }];
      }
    } else if (beadId === 'our-father-5') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.gloryBe[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.gloryBe[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][3].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][3].imagePosition
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.fatimaPrayer[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.fatimaPrayer[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][3].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][3].imagePosition
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][4].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][4].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][4].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][4].imagePosition
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.ourFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.ourFather[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][4].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][4].imagePosition
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.eternalFather[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.eternalFather[language].text
        }];
      }
    } else if (beadId === 'medallion') {
      if (!_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.divineMercy) {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.gloryBe[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.gloryBe[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][4].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][4].imagePosition
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.fatimaPrayer[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.fatimaPrayer[language].text,
          image: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][4].image,
          imagePosition: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language][4].imagePosition
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailHolyQueen[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.hailHolyQueen[language].text
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.prayerAfterRosary[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.prayerAfterRosary[language].text
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.signOfTheCross[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.signOfTheCross[language].text
        }];
      } else {
        prayers = [{
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.holyGod[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.holyGod[language].text
        }, {
          title: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.optionalClosing[language].title,
          text: _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.divineMercy.optionalClosing[language].text
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

      if (prayer.image && !_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hideImages) {
        var noGradient = _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hidePrayers ? 'prayer__image--hide-prayers' : '';
        output += '<div class="prayer__image ' + noGradient + '"><img src="' + prayer.image + '" alt="Image of this mystery" class="object-position-' + prayer.imagePosition.split(' ').join('-') + '"></div>';
      } else if (!_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hideImages) {
        var noGradient = _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hidePrayers ? 'prayer__image--hide-prayers' : '';
        output += '<div class="prayer__image ' + noGradient + '"><img src="' + '/images/default/default.jpg' + '" alt="Image of this mystery" class="object-position-center-top"></div>';
      }

      output += '</div>';
      return output;
    }, ''); // Preload all images for this mystery (mainly for first time visitors
    // or visitors without a ServiceWorker)

    var imagesToPreload = _store__WEBPACK_IMPORTED_MODULE_0__.default.prayers.mysteries[mysteries][language].reduce(function (output, mystery) {
      if (mystery.image) output.push(mystery.image);
      return output;
    }, []);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.preloadImages)(imagesToPreload);
    $('#prayers-content').html(prayersHTML);
    var $previousToFromBead = $('#' + fromBeadId).parent().prev();
    if ($previousToFromBead.hasClass('bead-wrapper--filler')) $previousToFromBead = $previousToFromBead.prev();
    var previousToFromBeadId = $previousToFromBead.find('.bead').attr('id');
    if (fromBeadId === 'hail-mary-1-01') previousToFromBeadId = 'intro-our-father-2';

    if (beadId === previousToFromBeadId || _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hidePrayers) {
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

  function nextPrayer() {
    if ($(this).attr('id') === 'next-prayer' && !_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hidePrayers) {
      return;
    }

    if (!_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hidePrayers) {
      var $currPrayer = $('.prayer--current');
      var $beadSelected = $('button.bead--selected');

      if ($currPrayer.attr('id') === 'prayer-4' && $beadSelected.attr('id') === 'medallion') {
        var byDayReminder = '';

        if (!localStorage.getItem('mysteries')) {
          byDayReminder = ' You will need to switch back to "By Day" in Settings tomorrow.';
        }

        if (_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.mysteries === 'joyful') {
          var advanceMysteries = confirm('Would you like to switch to the Luminous mysteries?' + byDayReminder);

          if (advanceMysteries) {
            _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.mysteries = 'luminous';
            localStorage.setItem('mysteries', 'luminous');
          }
        } else if (_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.mysteries === 'luminous') {
          var advanceMysteries = confirm('Would you like to switch to the Sorrowful mysteries?' + byDayReminder);

          if (advanceMysteries) {
            _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.mysteries = 'sorrowful';
            localStorage.setItem('mysteries', 'sorrowful');
          }
        } else if (_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.mysteries === 'sorrowful') {
          var advanceMysteries = confirm('Would you like to switch to the Glorious mysteries?' + byDayReminder);

          if (advanceMysteries) {
            _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.mysteries = 'glorious';
            localStorage.setItem('mysteries', 'glorious');
          }
        } else if (_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.mysteries === 'glorious') {
          var advanceMysteries = confirm('Would you like to switch to the Joyful mysteries?' + byDayReminder);

          if (advanceMysteries) {
            _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.mysteries = 'joyful';
            localStorage.setItem('mysteries', 'joyful');
          }
        }

        $('#intro-our-father-2').click();
        nextPrayer();
        nextPrayer();
        return;
      }
    }

    if (!_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hidePrayers) {
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
      $('#hail-mary-1-01').click();
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
      localStorage.setItem('prayerId', $('.prayer--current').attr('id'));
      return;
    }

    if ($('button.bead--selected').attr('id') === 'medallion') {
      $('#hail-mary-5-10').click();
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
    if (_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hideImages) return;
    if ($('.prayer--current .prayer__image').find('img').attr('src') === window.HRO_prev_appended && $('.prayer--current .prayer__image').find('img').attr('src').length) return;
    $('body > .prayer__image').remove();
    $('.prayer--current .prayer__image').clone().prependTo('body');
    window.HRO_prev_appended = $('body > .prayer__image').find('img').attr('src');
  }
}
;

/***/ }),

/***/ "./src/js/page-scripts/SettingsJS.js":
/*!*******************************************!*\
  !*** ./src/js/page-scripts/SettingsJS.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsJS)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/js/store.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/js/utils.js");


function SettingsJS() {
  updateFields();
  $('#form-settings-rosary-color').spectrum({
    type: "color",
    showPalette: false,
    showInitial: true,
    showAlpha: false,
    allowEmpty: false,
    change: function change(color) {
      $('#form-settings-rosary-color').val(color.toHexString());
      $('#form-settings').submit();
    }
  });
  $('#form-settings-reset-rosary-color').click(function (event) {
    event.preventDefault();
    $('#form-settings-rosary-color').spectrum('set', '#f1e4c4');
    $('#form-settings').submit();
  });
  $('#form-settings').change(function (event) {
    //$(this).find('input[type="submit"').val('Save Changes');
    $(this).submit();
  });
  $('#form-settings').submit(function (event) {
    event.preventDefault();
    var fields = $(this).serializeArray();
    var hidePrayersCheckboxExists = false;
    var hideImagesCheckboxExists = false;
    var anotherDevotionCheckboxExists = false;

    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];

      if (field['name'] === 'mysteries') {
        if (field['value'] === 'joyful' || field['value'] === 'luminous' || field['value'] === 'sorrowful' || field['value'] === 'glorious') {
          _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.mysteries = field['value'];
          localStorage.setItem('mysteries', field['value']);
        }

        if (field['value'] === 'byday') {
          _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.mysteries = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getMysteriesForCurrDay)();
          localStorage.setItem('mysteries', '');
        }
      }

      if (field['name'] === 'language') {
        if (field['value'] === 'EN' || field['value'] === 'ES') {
          _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.language = field['value'];
          localStorage.setItem('language', field['value']);
        }
      }

      if (field['name'] === 'rosary-language') {
        if (field['value'] === 'EN' || field['value'] === 'EN_TRAD' || field['value'] === 'LA' || field['value'] === 'ES') {
          _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.rosaryLanguage = field['value'];
          localStorage.setItem('rosaryLanguage', field['value']);
        }
      }

      if (field['name'] === 'rosary-color') {
        _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.rosaryColor = field['value'];
        localStorage.setItem('rosaryColor', field['value']);
      }

      if (field['name'] === 'hide-images') {
        _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hideImages = true;
        localStorage.setItem('hideImages', true);
        hideImagesCheckboxExists = true;
      }

      if (field['name'] === 'hide-prayers') {
        _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hidePrayers = true;
        localStorage.setItem('hidePrayers', true);
        hidePrayersCheckboxExists = true;
      }

      if (field['name'] === 'divine-mercy') {
        _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.divineMercy = true;
        localStorage.setItem('divineMercy', true);
        anotherDevotionCheckboxExists = true;
      }
    } // Unchecked checkboxes don't show up in the form data.


    if (!hideImagesCheckboxExists) {
      _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hideImages = false;
      localStorage.setItem('hideImages', false);
    }

    if (!hidePrayersCheckboxExists) {
      _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hidePrayers = false;
      localStorage.setItem('hidePrayers', false);
    }

    if (!anotherDevotionCheckboxExists) {
      _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.divineMercy = false;
      localStorage.setItem('divineMercy', false);
    }

    $(this).find('input[type="submit"]').val('Saved!');
  });

  function updateFields() {
    updateLanguage();
    updateRosaryLanguage();
    updateHidePrayers();
    updateHideImages();
    updateMysteries();
    updateDivineMercy();
    updateRosaryColor();
  }

  function updateLanguage() {
    $('#form-settings-language').find('option[value="' + _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.language + '"]').attr('selected', 'selected');
  }

  function updateRosaryLanguage() {
    $('#form-settings-rosary-language').find('option[value="' + _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.rosaryLanguage + '"]').attr('selected', 'selected');
  }

  function updateRosaryColor() {
    $('#form-settings-rosary-color').val(_store__WEBPACK_IMPORTED_MODULE_0__.default.settings.rosaryColor);
  }

  function updateHideImages() {
    $('#form-settings-hide-images').attr('checked', _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hideImages);
  }

  function updateHidePrayers() {
    $('#form-settings-hide-prayers').attr('checked', _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.hidePrayers);
  }

  function updateMysteries() {
    $('#form-settings-mysteries').find('option[value="' + localStorage.getItem('mysteries') + '"]').attr('selected', 'selected');
  }

  function updateDivineMercy() {
    $('#form-settings-divine-mercy').attr('checked', _store__WEBPACK_IMPORTED_MODULE_0__.default.settings.divineMercy);
  }
}
;

/***/ }),

/***/ "./src/js/renderView.js":
/*!******************************!*\
  !*** ./src/js/renderView.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderView)
/* harmony export */ });
/* harmony import */ var _templates_home_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/home.html */ "./src/js/templates/home.html");
/* harmony import */ var _templates_home_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_home_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates_settings_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/settings.html */ "./src/js/templates/settings.html");
/* harmony import */ var _templates_settings_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_settings_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _templates_about_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/about.html */ "./src/js/templates/about.html");
/* harmony import */ var _templates_about_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_templates_about_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_artwork_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/artwork.html */ "./src/js/templates/artwork.html");
/* harmony import */ var _templates_artwork_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_templates_artwork_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _templates_404_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/404.html */ "./src/js/templates/404.html");
/* harmony import */ var _templates_404_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_templates_404_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _templates_meditations_med_en_joyful_1_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/meditations/med_en_joyful_1.html */ "./src/js/templates/meditations/med_en_joyful_1.html");
/* harmony import */ var _templates_meditations_med_en_joyful_1_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_joyful_1_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _templates_meditations_med_en_joyful_2_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/meditations/med_en_joyful_2.html */ "./src/js/templates/meditations/med_en_joyful_2.html");
/* harmony import */ var _templates_meditations_med_en_joyful_2_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_joyful_2_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _templates_meditations_med_en_joyful_3_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/meditations/med_en_joyful_3.html */ "./src/js/templates/meditations/med_en_joyful_3.html");
/* harmony import */ var _templates_meditations_med_en_joyful_3_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_joyful_3_html__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _templates_meditations_med_en_joyful_4_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/meditations/med_en_joyful_4.html */ "./src/js/templates/meditations/med_en_joyful_4.html");
/* harmony import */ var _templates_meditations_med_en_joyful_4_html__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_joyful_4_html__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _templates_meditations_med_en_joyful_5_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./templates/meditations/med_en_joyful_5.html */ "./src/js/templates/meditations/med_en_joyful_5.html");
/* harmony import */ var _templates_meditations_med_en_joyful_5_html__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_joyful_5_html__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _templates_meditations_med_en_sorrowful_1_html__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./templates/meditations/med_en_sorrowful_1.html */ "./src/js/templates/meditations/med_en_sorrowful_1.html");
/* harmony import */ var _templates_meditations_med_en_sorrowful_1_html__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_sorrowful_1_html__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _templates_meditations_med_en_sorrowful_2_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./templates/meditations/med_en_sorrowful_2.html */ "./src/js/templates/meditations/med_en_sorrowful_2.html");
/* harmony import */ var _templates_meditations_med_en_sorrowful_2_html__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_sorrowful_2_html__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _templates_meditations_med_en_sorrowful_3_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./templates/meditations/med_en_sorrowful_3.html */ "./src/js/templates/meditations/med_en_sorrowful_3.html");
/* harmony import */ var _templates_meditations_med_en_sorrowful_3_html__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_sorrowful_3_html__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _templates_meditations_med_en_sorrowful_4_html__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./templates/meditations/med_en_sorrowful_4.html */ "./src/js/templates/meditations/med_en_sorrowful_4.html");
/* harmony import */ var _templates_meditations_med_en_sorrowful_4_html__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_sorrowful_4_html__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _templates_meditations_med_en_sorrowful_5_html__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./templates/meditations/med_en_sorrowful_5.html */ "./src/js/templates/meditations/med_en_sorrowful_5.html");
/* harmony import */ var _templates_meditations_med_en_sorrowful_5_html__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_sorrowful_5_html__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _templates_meditations_med_en_glorious_1_html__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./templates/meditations/med_en_glorious_1.html */ "./src/js/templates/meditations/med_en_glorious_1.html");
/* harmony import */ var _templates_meditations_med_en_glorious_1_html__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_glorious_1_html__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _templates_meditations_med_en_glorious_2_html__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./templates/meditations/med_en_glorious_2.html */ "./src/js/templates/meditations/med_en_glorious_2.html");
/* harmony import */ var _templates_meditations_med_en_glorious_2_html__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_glorious_2_html__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _templates_meditations_med_en_glorious_3_html__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./templates/meditations/med_en_glorious_3.html */ "./src/js/templates/meditations/med_en_glorious_3.html");
/* harmony import */ var _templates_meditations_med_en_glorious_3_html__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_glorious_3_html__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _templates_meditations_med_en_glorious_4_html__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./templates/meditations/med_en_glorious_4.html */ "./src/js/templates/meditations/med_en_glorious_4.html");
/* harmony import */ var _templates_meditations_med_en_glorious_4_html__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_glorious_4_html__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _templates_meditations_med_en_glorious_5_html__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./templates/meditations/med_en_glorious_5.html */ "./src/js/templates/meditations/med_en_glorious_5.html");
/* harmony import */ var _templates_meditations_med_en_glorious_5_html__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_glorious_5_html__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _templates_meditations_med_en_luminous_1_html__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./templates/meditations/med_en_luminous_1.html */ "./src/js/templates/meditations/med_en_luminous_1.html");
/* harmony import */ var _templates_meditations_med_en_luminous_1_html__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_luminous_1_html__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _templates_meditations_med_en_luminous_2_html__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./templates/meditations/med_en_luminous_2.html */ "./src/js/templates/meditations/med_en_luminous_2.html");
/* harmony import */ var _templates_meditations_med_en_luminous_2_html__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_luminous_2_html__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _templates_meditations_med_en_luminous_3_html__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./templates/meditations/med_en_luminous_3.html */ "./src/js/templates/meditations/med_en_luminous_3.html");
/* harmony import */ var _templates_meditations_med_en_luminous_3_html__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_luminous_3_html__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _templates_meditations_med_en_luminous_4_html__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./templates/meditations/med_en_luminous_4.html */ "./src/js/templates/meditations/med_en_luminous_4.html");
/* harmony import */ var _templates_meditations_med_en_luminous_4_html__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_luminous_4_html__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _templates_meditations_med_en_luminous_5_html__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./templates/meditations/med_en_luminous_5.html */ "./src/js/templates/meditations/med_en_luminous_5.html");
/* harmony import */ var _templates_meditations_med_en_luminous_5_html__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_en_luminous_5_html__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _templates_meditations_med_es_joyful_1_html__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./templates/meditations/med_es_joyful_1.html */ "./src/js/templates/meditations/med_es_joyful_1.html");
/* harmony import */ var _templates_meditations_med_es_joyful_1_html__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_es_joyful_1_html__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _templates_meditations_med_es_joyful_2_html__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./templates/meditations/med_es_joyful_2.html */ "./src/js/templates/meditations/med_es_joyful_2.html");
/* harmony import */ var _templates_meditations_med_es_joyful_2_html__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_es_joyful_2_html__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _templates_meditations_med_es_joyful_3_html__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./templates/meditations/med_es_joyful_3.html */ "./src/js/templates/meditations/med_es_joyful_3.html");
/* harmony import */ var _templates_meditations_med_es_joyful_3_html__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_es_joyful_3_html__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _templates_meditations_med_es_joyful_4_html__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./templates/meditations/med_es_joyful_4.html */ "./src/js/templates/meditations/med_es_joyful_4.html");
/* harmony import */ var _templates_meditations_med_es_joyful_4_html__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_es_joyful_4_html__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _templates_meditations_med_es_joyful_5_html__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./templates/meditations/med_es_joyful_5.html */ "./src/js/templates/meditations/med_es_joyful_5.html");
/* harmony import */ var _templates_meditations_med_es_joyful_5_html__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_es_joyful_5_html__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _templates_meditations_med_es_glorious_1_html__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./templates/meditations/med_es_glorious_1.html */ "./src/js/templates/meditations/med_es_glorious_1.html");
/* harmony import */ var _templates_meditations_med_es_glorious_1_html__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_es_glorious_1_html__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _templates_meditations_med_es_glorious_2_html__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./templates/meditations/med_es_glorious_2.html */ "./src/js/templates/meditations/med_es_glorious_2.html");
/* harmony import */ var _templates_meditations_med_es_glorious_2_html__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_es_glorious_2_html__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _templates_meditations_med_es_glorious_3_html__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./templates/meditations/med_es_glorious_3.html */ "./src/js/templates/meditations/med_es_glorious_3.html");
/* harmony import */ var _templates_meditations_med_es_glorious_3_html__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_es_glorious_3_html__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _templates_meditations_med_es_glorious_4_html__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./templates/meditations/med_es_glorious_4.html */ "./src/js/templates/meditations/med_es_glorious_4.html");
/* harmony import */ var _templates_meditations_med_es_glorious_4_html__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_es_glorious_4_html__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _templates_meditations_med_es_glorious_5_html__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./templates/meditations/med_es_glorious_5.html */ "./src/js/templates/meditations/med_es_glorious_5.html");
/* harmony import */ var _templates_meditations_med_es_glorious_5_html__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_templates_meditations_med_es_glorious_5_html__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _templates_partials_header_html__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./templates/partials/header.html */ "./src/js/templates/partials/header.html");
/* harmony import */ var _templates_partials_header_html__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_templates_partials_header_html__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./store */ "./src/js/store.js");





































function renderView(pathname, params) {
  $('div#app').html(' '); // Remove our crazy mystery image

  $('body > .prayer__image').remove();

  switch (pathname) {
    case '/':
      $('body').addClass('fixed');
      /* var spotsToTranslate = Home.match(/{{.*}}/g);
      for(var i = 0; i < spotsToTranslate.length; i++) {
          var phrase = spotsToTranslate[i].replace('{{', '');
          phrase = phrase.replace('}}', '');
          phrase = phrase.trim();
          phrase = store.localization.ES[phrase];
          Home = Home.replace(spotsToTranslate[i], phrase);
      } */

      $('div#app').append((_templates_partials_header_html__WEBPACK_IMPORTED_MODULE_35___default()) + (_templates_home_html__WEBPACK_IMPORTED_MODULE_0___default()));
      break;

    case '/settings':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_settings_html__WEBPACK_IMPORTED_MODULE_1___default()));
      break;

    case '/about':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_about_html__WEBPACK_IMPORTED_MODULE_2___default()));
      break;

    case '/artwork':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_artwork_html__WEBPACK_IMPORTED_MODULE_3___default()));
      break;

    case '/med_en_joyful_1':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_joyful_1_html__WEBPACK_IMPORTED_MODULE_5___default()));
      break;

    case '/med_en_joyful_2':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_joyful_2_html__WEBPACK_IMPORTED_MODULE_6___default()));
      break;

    case '/med_en_joyful_3':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_joyful_3_html__WEBPACK_IMPORTED_MODULE_7___default()));
      break;

    case '/med_en_joyful_4':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_joyful_4_html__WEBPACK_IMPORTED_MODULE_8___default()));
      break;

    case '/med_en_joyful_5':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_joyful_5_html__WEBPACK_IMPORTED_MODULE_9___default()));
      break;

    case '/med_en_luminous_1':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_luminous_1_html__WEBPACK_IMPORTED_MODULE_20___default()));
      break;

    case '/med_en_luminous_2':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_luminous_2_html__WEBPACK_IMPORTED_MODULE_21___default()));
      break;

    case '/med_en_luminous_3':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_luminous_3_html__WEBPACK_IMPORTED_MODULE_22___default()));
      break;

    case '/med_en_luminous_4':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_luminous_4_html__WEBPACK_IMPORTED_MODULE_23___default()));
      break;

    case '/med_en_luminous_5':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_luminous_5_html__WEBPACK_IMPORTED_MODULE_24___default()));
      break;

    case '/med_en_sorrowful_1':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_sorrowful_1_html__WEBPACK_IMPORTED_MODULE_10___default()));
      break;

    case '/med_en_sorrowful_2':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_sorrowful_2_html__WEBPACK_IMPORTED_MODULE_11___default()));
      break;

    case '/med_en_sorrowful_3':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_sorrowful_3_html__WEBPACK_IMPORTED_MODULE_12___default()));
      break;

    case '/med_en_sorrowful_4':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_sorrowful_4_html__WEBPACK_IMPORTED_MODULE_13___default()));
      break;

    case '/med_en_sorrowful_5':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_sorrowful_5_html__WEBPACK_IMPORTED_MODULE_14___default()));
      break;

    case '/med_en_glorious_1':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_glorious_1_html__WEBPACK_IMPORTED_MODULE_15___default()));
      break;

    case '/med_en_glorious_2':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_glorious_2_html__WEBPACK_IMPORTED_MODULE_16___default()));
      break;

    case '/med_en_glorious_3':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_glorious_3_html__WEBPACK_IMPORTED_MODULE_17___default()));
      break;

    case '/med_en_glorious_4':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_glorious_4_html__WEBPACK_IMPORTED_MODULE_18___default()));
      break;

    case '/med_en_glorious_5':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_en_glorious_5_html__WEBPACK_IMPORTED_MODULE_19___default()));
      break;

    case '/med_es_joyful_1':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_es_joyful_1_html__WEBPACK_IMPORTED_MODULE_25___default()));
      break;

    case '/med_es_joyful_2':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_es_joyful_2_html__WEBPACK_IMPORTED_MODULE_26___default()));
      break;

    case '/med_es_joyful_3':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_es_joyful_3_html__WEBPACK_IMPORTED_MODULE_27___default()));
      break;

    case '/med_es_joyful_4':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_es_joyful_4_html__WEBPACK_IMPORTED_MODULE_28___default()));
      break;

    case '/med_es_joyful_5':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_es_joyful_5_html__WEBPACK_IMPORTED_MODULE_29___default()));
      break;

    case '/med_es_glorious_1':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_es_glorious_1_html__WEBPACK_IMPORTED_MODULE_30___default()));
      break;

    case '/med_es_glorious_2':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_es_glorious_2_html__WEBPACK_IMPORTED_MODULE_31___default()));
      break;

    case '/med_es_glorious_3':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_es_glorious_3_html__WEBPACK_IMPORTED_MODULE_32___default()));
      break;

    case '/med_es_glorious_4':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_es_glorious_4_html__WEBPACK_IMPORTED_MODULE_33___default()));
      break;

    case '/med_es_glorious_5':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_meditations_med_es_glorious_5_html__WEBPACK_IMPORTED_MODULE_34___default()));
      break;

    case '404':
      $('body').removeClass('fixed');
      $('div#app').append((_templates_404_html__WEBPACK_IMPORTED_MODULE_4___default()));
      break;

    default:
      $('body').removeClass('fixed');
      $('div#app').append((_templates_404_html__WEBPACK_IMPORTED_MODULE_4___default()));
  }
}

/***/ }),

/***/ "./src/js/store.js":
/*!*************************!*\
  !*** ./src/js/store.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  settings: {
    mysteries: localStorage.getItem('mysteries') || (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getMysteriesForCurrDay)(),
    language: localStorage.getItem('language') || 'EN',
    rosaryLanguage: localStorage.getItem('rosaryLanguage') || 'EN',
    rosaryColor: localStorage.getItem('rosaryColor') || '#f1e4c4',
    hideImages: localStorage.getItem('hideImages') === 'true' ? true : false,
    hidePrayers: localStorage.getItem('hidePrayers') === 'true' ? true : false,
    divineMercy: localStorage.getItem('divineMercy') === 'true' ? true : false
  },
  localization: {
    ES: {
      "Holy Rosary Online": "Santo Rosario en Línea (Holy Rosary Online)",
      "Settings": "Configuración",
      "About": "Información",
      "Home": "Página Principal",
      "Reset": "Reinicie",
      "Next Prayer": "Adelante",
      "Previous": "Atrás",
      "Next": "Adelante",
      "Sign of the Cross": "La Señal de la Cruz",
      "Our Father": "Padre Nuestro",
      "Hail Mary": "Ave María",
      "Medallion, end of rosary": "Medallón, fin del rosario",
      "Language": "Idioma",
      "Mysteries": "Misterios",
      "Rosary Language": "Idioma del rosario",
      "By day": "Por día",
      "Joyful": "De gozos",
      "Luminous": "De luz",
      "Sorrowful": "De dolor",
      "Glorious": "De gloria",
      "Latin": "Latín",
      "Rosary Color": "Color del rosario",
      "Reset Color": "Use el color predeterminado",
      "Hide the prayer images.": "Esconda las pinturas de los misterios.",
      "Hide the words to the prayers. Click blank space to go to the next prayer.": "Esconda las palabras de las oraciones. Haga clíc en el espacio dentro del rosario para ir adelante.",
      "Pray the Divine Mercy Chaplet instead.": "Rece la Coronilla de la Divina Misericordia"
    }
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
      ES: {
        title: 'La Señal de la Cruz',
        text: '<span class="red-text">+</span> En el nombre del Padre, y del Hijo, y del Espíritu Santo.',
        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479'
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
      ES: {
        title: 'Símbolo de los Apóstoles',
        text: 'Creo en Dios Padre, Todopoderoso, Creador del cielo y de la tierra. Y en Jesucristo su único Hijo, Nuestro Señor; que fue concebido por obra y gracia del Espíritu Santo; y nació de Santa María Virgen; padeció bajo el poder de Poncio Pilato; fué crucificado, muerto y sepultado; descendió a los infiernos; al tercer día resucitó de entre los muertos; subió a los cielos y está sentado a la diestra de Dios Padre Todopoderoso; desde allí ha de venir a juzgar a los vivos y a los muertos. Creo en el Esprítu Santo, en la Santa Iglesia Católica; la comunión de los santos; el perdón de los pecados; la resurrección de la carne y la vida eterna. Amén.',
        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479'
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
      ES: {
        title: 'El Padre Nuestro',
        text: 'Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad, en la tierra como en el cielo. Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en tentación, y líbranos del mal. Amén.',
        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479'
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
      ES: {
        title: 'El Ave María',
        text: 'Dios te salve, María; llena eres de gracia; el Señor es contigo; bendita Tú eres entre todas las mujeres, y bendito es el fruto de tu vientre Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.',
        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479'
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
      ES: {
        title: 'El Gloria',
        text: 'Gloria al Padre, y al Hijo, y al Espíritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Amén.',
        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479'
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
      ES: {
        title: 'Oración de Fátima',
        text: 'Oh Jesús, perdónanos nuestros pecados, sálvanos del fuego del infierno y guía todas las almas al Cielo, especialmente aquellas que necesitan más de tu misericordia.',
        source: 'http://www.devocionario.com/maria/rosario_1.html'
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
      ES: {
        title: 'La Salve',
        text: 'Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A Ti llamamos los desterrados hijos de Eva; a Ti suspiramos gimiendo y llorando, en este valle de lágrimas. Ea, pues, Señora nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh clementísima, oh piadosa, oh dulce siempre Virgen María! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén.',
        source: 'https://www.ewtn.com/es/catolicismo/devociones/santo-rosario-20479'
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
      ES: {
        title: 'Oración Final',
        text: 'Omnipotente y sempiterno Dios, que con la cooperación del Espíritu Santo, preparaste el cuerpo y el alma de la gloriosa Virgen y Madre María para que fuese merecedora de ser digna morada de tu Hijo; concédenos que, pues celebramos con alegría su conmemoración, por su piadosa intercesión seamos liberados de los males presentes y de la muerte eterna. Por el mismo Cristo nuestro Señor. Amén.',
        source: 'http://www.devocionario.com/maria/rosario_1.html'
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
          image: '/images/default/annunciation.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Second Joyful Mystery',
          text: 'The Visitation  of Mary to Elizabeth. (<a href="/med_en_joyful_2" data-navigo>Luke 1:39-56</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/visitation.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Third Joyful Mystery',
          text: 'The Birth of Our Lord. (<a href="/med_en_joyful_3" data-navigo>Luke 2:1-21</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/nativity.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Fourth Joyful Mystery',
          text: 'The Presentation of Our Lord. (<a href="/med_en_joyful_4" data-navigo>Luke 2:22-38</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/presentation.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Fifth Joyful Mystery',
          text: 'The Finding of Our Lord in the Temple. (<a href="/med_en_joyful_5" data-navigo>Luke 2:41-52</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/finding.jpg',
          imagePosition: 'right center'
        }],
        EN_TRAD: [{
          title: 'The First Joyful Mystery',
          text: 'The Annunciation. (<a href="/med_en_joyful_1" data-navigo>Luke 1:26-38</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/default/annunciation.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Second Joyful Mystery',
          text: 'The Visitation. (<a href="/med_en_joyful_2" data-navigo>Luke 1:39-56</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/default/visitation.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Third Joyful Mystery',
          text: 'The Nativity. (<a href="/med_en_joyful_3" data-navigo>Luke 2:1-21</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/default/nativity.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Fourth Joyful Mystery',
          text: 'The Presentation. (<a href="/med_en_joyful_4" data-navigo>Luke 2:22-38</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/default/presentation.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Fifth Joyful Mystery',
          text: 'The Finding in the Temple. (<a href="/med_en_joyful_5" data-navigo>Luke 2:41-52</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/default/finding.jpg',
          imagePosition: 'right center'
        }],
        LA: [{
          title: 'Prímum Mystérium Gaudiósum',
          text: 'Annuntiátio. (<a href="/med_en_joyful_1" data-navigo>Luke 1:26-38</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/annunciation.jpg',
          imagePosition: 'center'
        }, {
          title: 'Secúndum Mystérium Gaudiósum',
          text: 'Visitátio. (<a href="/med_en_joyful_2" data-navigo>Luke 1:39-56</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/visitation.jpg',
          imagePosition: 'center'
        }, {
          title: 'Tértium Mystérium Gaudiósum',
          text: 'Natívitas Dómini nostri Jesu Christi. (<a href="/med_en_joyful_3" data-navigo>Luke 2:1-21</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/nativity.jpg',
          imagePosition: 'center'
        }, {
          title: 'Quartum Mystérium Gaudiósum',
          text: 'Præsentátio Púeri Jesu in Templo. (<a href="/med_en_joyful_4" data-navigo>Luke 2:22-38</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/presentation.jpg',
          imagePosition: 'center'
        }, {
          title: 'Quintum Mystérium Gaudiósum',
          text: 'Invéntio Púeri Jesu in Templo. (<a href="/med_en_joyful_5" data-navigo>Luke 2:41-52</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/finding.jpg',
          imagePosition: 'right center'
        }],
        ES: [{
          title: 'The First Joyful Mystery',
          text: 'The Annunciation of Gabriel to Mary. (<a href="/med_en_joyful_1" data-navigo>Luke 1:26-38</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/annunciation.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Second Joyful Mystery',
          text: 'The Visitation  of Mary to Elizabeth. (<a href="/med_en_joyful_2" data-navigo>Luke 1:39-56</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/visitation.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Third Joyful Mystery',
          text: 'The Birth of Our Lord. (<a href="/med_en_joyful_3" data-navigo>Luke 2:1-21</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/nativity.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Fourth Joyful Mystery',
          text: 'The Presentation of Our Lord. (<a href="/med_en_joyful_4" data-navigo>Luke 2:22-38</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/presentation.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Fifth Joyful Mystery',
          text: 'The Finding of Our Lord in the Temple. (<a href="/med_en_joyful_5" data-navigo>Luke 2:41-52</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/finding.jpg',
          imagePosition: 'right center'
        }]
      },
      luminous: {
        EN: [{
          title: 'The First Luminous Mystery',
          text: 'The Baptism of Our Lord in the River Jordan. (<a href="/med_en_luminous_1" data-navigo>Matthew 3:13-16</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/baptism.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Second Luminous Mystery',
          text: 'The Wedding at Cana, when Christ manifested Himself. (<a href="/med_en_luminous_2" data-navigo>John 2:1-11</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/cana.jpg',
          imagePosition: 'left center'
        }, {
          title: 'The Third Luminous Mystery',
          text: 'The Proclamation of the Kingdom of God. (<a href="/med_en_luminous_3" data-navigo>Mark 1:14-15</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/proclamation.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Fourth Luminous Mystery',
          text: 'The Transfiguration of Our Lord. (<a href="/med_en_luminous_4" data-navigo>Matthew 17:1-8</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/transfiguration.jpg',
          imagePosition: 'center top'
        }, {
          title: 'The Fifth Luminous Mystery',
          text: 'The Last Supper, when Our Lord gave us the Holy Eucharist. (<a href="/med_en_luminous_5" data-navigo>Matthew 26:17-29</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/eucharist.jpg',
          imagePosition: 'center'
        }],
        EN_TRAD: [{
          title: 'The First Luminous Mystery',
          text: 'The Baptism of Christ in the Jordan. (<a href="/med_en_luminous_1" data-navigo>Matthew 3:13-16</a>)',
          source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm',
          image: '/images/default/baptism.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Second Luminous Mystery',
          text: 'The Wedding Feast at Cana. (<a href="/med_en_luminous_2" data-navigo>John 2:1-11</a>)',
          source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm',
          image: '/images/default/cana.jpg',
          imagePosition: 'left center'
        }, {
          title: 'The Third Luminous Mystery',
          text: 'Jesus&rsquo; Proclamation of the Coming of the Kingdom of God. (<a href="/med_en_luminous_3" data-navigo>Mark 1:14-15</a>)',
          source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm',
          image: '/images/default/proclamation.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Fourth Luminous Mystery',
          text: 'The Transfiguration. (<a href="/med_en_luminous_4" data-navigo>Matthew 17:1-8</a>)',
          source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm',
          image: '/images/default/transfiguration.jpg',
          imagePosition: 'center top'
        }, {
          title: 'The Fifth Luminous Mystery',
          text: 'The Institution of the Eucharist. (<a href="/med_en_luminous_5" data-navigo>Matthew 26:17-29</a>)',
          source: 'http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm',
          image: '/images/default/eucharist.jpg',
          imagePosition: 'center'
        }],
        LA: [{
          title: 'Prímum Mystérium Luminósum',
          text: 'Baptísma Dómini nostri Jesu Christi apud Jordánem. (<a href="/med_en_luminous_1" data-navigo>Matthew 3:13-16</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/baptism.jpg',
          imagePosition: 'center'
        }, {
          title: 'Secúndum Mystérium Luminósum',
          text: 'Núptiæ Canénses. (<a href="/med_en_luminous_2" data-navigo>John 2:1-11</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/cana.jpg',
          imagePosition: 'left center'
        }, {
          title: 'Tértium Mystérium Luminósum',
          text: 'Proclamátio Regni Dei. (<a href="/med_en_luminous_3" data-navigo>Mark 1:14-15</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/proclamation.jpg',
          imagePosition: 'center'
        }, {
          title: 'Quartum Mystérium Luminósum',
          text: 'Transfigurátio. (<a href="/med_en_luminous_4" data-navigo>Matthew 17:1-8</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/transfiguration.jpg',
          imagePosition: 'center top'
        }, {
          title: 'Quintum Mystérium Luminósum',
          text: 'Institútio Eucharístiæ. (<a href="/med_en_luminous_5" data-navigo>Matthew 26:17-29</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/eucharist.jpg',
          imagePosition: 'center'
        }],
        ES: [{
          title: 'The First Luminous Mystery',
          text: 'The Baptism of Our Lord in the River Jordan. (<a href="/med_en_luminous_1" data-navigo>Matthew 3:13-16</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/baptism.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Second Luminous Mystery',
          text: 'The Wedding at Cana, when Christ manifested Himself. (<a href="/med_en_luminous_2" data-navigo>John 2:1-11</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/cana.jpg',
          imagePosition: 'left center'
        }, {
          title: 'The Third Luminous Mystery',
          text: 'The Proclamation of the Kingdom of God. (<a href="/med_en_luminous_3" data-navigo>Mark 1:14-15</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/proclamation.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Fourth Luminous Mystery',
          text: 'The Transfiguration of Our Lord. (<a href="/med_en_luminous_4" data-navigo>Matthew 17:1-8</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/transfiguration.jpg',
          imagePosition: 'center top'
        }, {
          title: 'The Fifth Luminous Mystery',
          text: 'The Last Supper, when Our Lord gave us the Holy Eucharist. (<a href="/med_en_luminous_5" data-navigo>Matthew 26:17-29</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/eucharist.jpg',
          imagePosition: 'center'
        }]
      },
      sorrowful: {
        EN: [{
          title: 'The First Sorrowful Mystery',
          text: 'The Agony of Our Lord in the Garden. (<a href="/med_en_sorrowful_1" data-navigo>Matthew 26:36-56</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/agony.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Second Sorrowful Mystery',
          text: 'Our Lord is Scourged at the Pillar. (<a href="/med_en_sorrowful_2" data-navigo>Matthew 27:24-26</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/scourging.jpg',
          imagePosition: 'center top'
        }, {
          title: 'The Third Sorrowful Mystery',
          text: 'Our Lord is Crowned with Thorns. (<a href="/med_en_sorrowful_3" data-navigo>Matthew 27:27-31</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/thorns.jpg',
          imagePosition: 'center top'
        }, {
          title: 'The Fourth Sorrowful Mystery',
          text: 'Our Lord Carries the Cross to Calvary. (<a href="/med_en_sorrowful_4" data-navigo>Matthew 27:32</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/cross.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Fifth Sorrowful Mystery',
          text: 'The Crucifixion of Our Lord. (<a href="/med_en_sorrowful_5" data-navigo>Matthew 27:33-56</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/crucifixion.jpg',
          imagePosition: 'center top'
        }],
        EN_TRAD: [{
          title: 'The First Sorrowful Mystery',
          text: 'The Agony in the Garden. (<a href="/med_en_sorrowful_1" data-navigo>Matthew 26:36-56</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/default/agony.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Second Sorrowful Mystery',
          text: 'The Scourging of Our Blessed Lord at the Pillar. (<a href="/med_en_sorrowful_2" data-navigo>Matthew 27:24-26</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/default/scourging.jpg',
          imagePosition: 'center top'
        }, {
          title: 'The Third Sorrowful Mystery',
          text: 'The Crowning of our Blessed Lord with Thorns. (<a href="/med_en_sorrowful_3" data-navigo>Matthew 27:27-31</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/default/thorns.jpg',
          imagePosition: 'center top'
        }, {
          title: 'The Fourth Sorrowful Mystery',
          text: 'Our Blessed Lord carrying His Cross. (<a href="/med_en_sorrowful_4" data-navigo>Matthew 27:32</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/default/cross.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Fifth Sorrowful Mystery',
          text: 'The Crucifixion. (<a href="/med_en_sorrowful_5" data-navigo>Matthew 27:33-56</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/default/crucifixion.jpg',
          imagePosition: 'center top'
        }],
        LA: [{
          title: 'Prímum Mystérium Dolorósum',
          text: 'Agónia in Horto. (<a href="/med_en_sorrowful_1" data-navigo>Matthew 26:36-56</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/agony.jpg',
          imagePosition: 'center'
        }, {
          title: 'Secúndum Mystérium Dolorósum',
          text: 'Flagellátio. (<a href="/med_en_sorrowful_2" data-navigo>Matthew 27:24-26</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/scourging.jpg',
          imagePosition: 'center top'
        }, {
          title: 'Tértium Mystérium Dolorósum',
          text: 'Coronátio spinis. (<a href="/med_en_sorrowful_3" data-navigo>Matthew 27:27-31</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/thorns.jpg',
          imagePosition: 'center top'
        }, {
          title: 'Quartum Mystérium Dolorósum',
          text: 'Bajulátio Crucis. (<a href="/med_en_sorrowful_4" data-navigo>Matthew 27:32</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/cross.jpg',
          imagePosition: 'center'
        }, {
          title: 'Quintum Mystérium Dolorósum',
          text: 'Crucifíxio et Mors Dómini nostri Jesu Christi. (<a href="/med_en_sorrowful_5" data-navigo>Matthew 27:33-56</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/crucifixion.jpg',
          imagePosition: 'center top'
        }],
        ES: [{
          title: 'The First Sorrowful Mystery',
          text: 'The Agony of Our Lord in the Garden. (<a href="/med_en_sorrowful_1" data-navigo>Matthew 26:36-56</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/agony.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Second Sorrowful Mystery',
          text: 'Our Lord is Scourged at the Pillar. (<a href="/med_en_sorrowful_2" data-navigo>Matthew 27:24-26</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/scourging.jpg',
          imagePosition: 'center top'
        }, {
          title: 'The Third Sorrowful Mystery',
          text: 'Our Lord is Crowned with Thorns. (<a href="/med_en_sorrowful_3" data-navigo>Matthew 27:27-31</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/thorns.jpg',
          imagePosition: 'center top'
        }, {
          title: 'The Fourth Sorrowful Mystery',
          text: 'Our Lord Carries the Cross to Calvary. (<a href="/med_en_sorrowful_4" data-navigo>Matthew 27:32</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/cross.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Fifth Sorrowful Mystery',
          text: 'The Crucifixion of Our Lord. (<a href="/med_en_sorrowful_5" data-navigo>Matthew 27:33-56</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/crucifixion.jpg',
          imagePosition: 'center top'
        }]
      },
      glorious: {
        EN: [{
          title: 'The First Glorious Mystery',
          text: 'The Glorious Resurrection of Our Lord. (<a href="/med_en_glorious_1" data-navigo>John 20:1-29</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/resurrection.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Second Glorious Mystery',
          text: 'The Ascension of Our Lord. (<a href="/med_en_glorious_2" data-navigo>Luke 24:36-53</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/ascension.jpg',
          imagePosition: 'center top'
        }, {
          title: 'The Third Glorious Mystery',
          text: 'The Descent of the Holy Spirit at Pentecost. (<a href="/med_en_glorious_3" data-navigo>Acts 2:1-41</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/descent.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Fourth Glorious Mystery',
          text: 'The Assumption of Mary into Heaven. (<a href="/med_en_glorious_4" data-navigo>St. John of Damascus, Excerpt from Second Sermon On the Assumption of Mary</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/assumption.jpg',
          imagePosition: 'center top'
        }, {
          title: 'The Fifth Glorious Mystery',
          text: 'The Coronation of Mary as Queen of Heaven and Earth. (<a href="/med_en_glorious_5" data-navigo>Sermon of St. Peter Canisius On the Incomparable Virgin Mary, Mother of God</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/coronation.jpg',
          imagePosition: 'center top'
        }],
        EN_TRAD: [{
          title: 'The First Glorious Mystery',
          text: 'The Resurrection. (<a href="/med_en_glorious_1" data-navigo>John 20:1-29</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/default/resurrection.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Second Glorious Mystery',
          text: 'The Ascension. (<a href="/med_en_glorious_2" data-navigo>Luke 24:36-53</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/default/ascension.jpg',
          imagePosition: 'center top'
        }, {
          title: 'The Third Glorious Mystery',
          text: 'The Descent of the Holy Ghost on the Apostles. (<a href="/med_en_glorious_3" data-navigo>Acts 2:1-41</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/default/descent.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Fourth Glorious Mystery',
          text: 'The Assumption of Our Lady into Heaven. (<a href="/med_en_glorious_4" data-navigo>St. John of Damascus, Excerpt from Second Sermon On the Assumption of Mary</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/default/assumption.jpg',
          imagePosition: 'center top'
        }, {
          title: 'The Fifth Glorious Mystery',
          text: 'The Coronation of Our Lady and the Glory of all the Saints. (<a href="/med_en_glorious_5" data-navigo>Sermon of St. Peter Canisius On the Incomparable Virgin Mary, Mother of God</a>)',
          source: 'Baronius Press, Daily Missal 1962',
          image: '/images/default/coronation.jpg',
          imagePosition: 'center top'
        }],
        LA: [{
          title: 'Prímum Mystérium Gloriósum',
          text: 'Resurréctio. (<a href="/med_en_glorious_1" data-navigo>John 20:1-29</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/resurrection.jpg',
          imagePosition: 'center'
        }, {
          title: 'Secúndum Mystérium Gloriósum',
          text: 'Ascénsio. (<a href="/med_en_glorious_2" data-navigo>Luke 24:36-53</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/ascension.jpg',
          imagePosition: 'center top'
        }, {
          title: 'Tértium Mystérium Gloriósum',
          text: 'Descénsus Spíritus Sancti. (<a href="/med_en_glorious_3" data-navigo>Acts 2:1-41</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/descent.jpg',
          imagePosition: 'center'
        }, {
          title: 'Quartum Mystérium Gloriósum',
          text: 'Assúmptio. (<a href="/med_en_glorious_4" data-navigo>St. John of Damascus, Excerpt from Second Sermon On the Assumption of Mary</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/assumption.jpg',
          imagePosition: 'center top'
        }, {
          title: 'Quintum Mystérium Gloriósum',
          text: 'Coronátio Beátæ Maríæ Vírginis in Cælis. (<a href="/med_en_glorious_5" data-navigo>Sermon of St. Peter Canisius On the Incomparable Virgin Mary, Mother of God</a>)',
          source: 'http://www.windsorlatinmass.org/wtnews/070408.pdf',
          image: '/images/default/coronation.jpg',
          imagePosition: 'center top'
        }],
        ES: [{
          title: 'The First Glorious Mystery',
          text: 'The Glorious Resurrection of Our Lord. (<a href="/med_en_glorious_1" data-navigo>John 20:1-29</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/resurrection.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Second Glorious Mystery',
          text: 'The Ascension of Our Lord. (<a href="/med_en_glorious_2" data-navigo>Luke 24:36-53</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/ascension.jpg',
          imagePosition: 'center top'
        }, {
          title: 'The Third Glorious Mystery',
          text: 'The Descent of the Holy Spirit at Pentecost. (<a href="/med_en_glorious_3" data-navigo>Acts 2:1-41</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/descent.jpg',
          imagePosition: 'center'
        }, {
          title: 'The Fourth Glorious Mystery',
          text: 'The Assumption of Mary into Heaven. (<a href="/med_en_glorious_4" data-navigo>St. John of Damascus, Excerpt from Second Sermon On the Assumption of Mary</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/assumption.jpg',
          imagePosition: 'center top'
        }, {
          title: 'The Fifth Glorious Mystery',
          text: 'The Coronation of Mary as Queen of Heaven and Earth. (<a href="/med_en_glorious_5" data-navigo>Sermon of St. Peter Canisius On the Incomparable Virgin Mary, Mother of God</a>)',
          source: 'http://www.newadvent.org/images/rosary.pdf',
          image: '/images/default/coronation.jpg',
          imagePosition: 'center top'
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

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMysteriesForCurrDay": () => (/* binding */ getMysteriesForCurrDay),
/* harmony export */   "preloadImages": () => (/* binding */ preloadImages)
/* harmony export */ });
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
}; // Source: https://stackoverflow.com/questions/10240110/how-do-you-cache-an-image-in-javascript

var preloadImages = function preloadImages(array) {
  if (!window.preloadImagesList) {
    window.preloadImagesList = [];
  }

  var list = window.preloadImagesList;

  for (var i = 0; i < array.length; i++) {
    if (window.preloadImagesList.indexOf(array[i]) !== -1) return;
    window.preloadImagesList.push(array[i]);
    var img = new Image();
    img.src = array[i];
  }
};

/***/ }),

/***/ "./images/default/agony.md":
/*!*********************************!*\
  !*** ./images/default/agony.md ***!
  \*********************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"the-agony-in-the-garden\">The Agony in the Garden</h1>\n<p>Artist: Cristóbal de Villalpando</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:The_Agony_in_the_Garden_(Crist%C3%B3bal_de_Villalpando).jpg\">https://commons.wikimedia.org/wiki/File:The_Agony_in_the_Garden_(Crist%C3%B3bal_de_Villalpando).jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/annunciation.md":
/*!****************************************!*\
  !*** ./images/default/annunciation.md ***!
  \****************************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"annunciation\">Annunciation</h1>\n<p>Artist: Bartolomé Esteban Murillo</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Bartolom%C3%A9_Esteban_Perez_Murillo_-_Annunciation_-_WGA16375.jpg\">https://commons.wikimedia.org/wiki/File:Bartolom%C3%A9_Esteban_Perez_Murillo_-_Annunciation_-_WGA16375.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/ascension.md":
/*!*************************************!*\
  !*** ./images/default/ascension.md ***!
  \*************************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"the-ascension\">The Ascension</h1>\n<p>Artist: Paolo Veronese</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Veronese_-_The_Ascension_-_Google_Art_Project.jpg\">https://commons.wikimedia.org/wiki/File:Veronese_-_The_Ascension_-_Google_Art_Project.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/assumption.md":
/*!**************************************!*\
  !*** ./images/default/assumption.md ***!
  \**************************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"assumption-of-the-virgin\">Assumption of the Virgin</h1>\n<p>Artist: Bartolomé Esteban Murillo</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Bartolome_Murillo_-_Assumption_of_the_Virgin.jpg\">https://commons.wikimedia.org/wiki/File:Bartolome_Murillo_-_Assumption_of_the_Virgin.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/baptism.md":
/*!***********************************!*\
  !*** ./images/default/baptism.md ***!
  \***********************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"the-baptism-of-christ\">The Baptism of Christ</h1>\n<p>Artist: Bartolomé Esteban Murillo</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Bartolom%C3%A9_Esteban_Perez_Murillo_-_Baptism_of_Christ_-_WGA16366.jpg\">https://commons.wikimedia.org/wiki/File:Bartolom%C3%A9_Esteban_Perez_Murillo_-_Baptism_of_Christ_-_WGA16366.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/cana.md":
/*!********************************!*\
  !*** ./images/default/cana.md ***!
  \********************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"the-marriage-feast-at-cana\">The Marriage Feast at Cana</h1>\n<p>Artist: Bartolomé Esteban Murillo</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:The_Barber_Institute_of_Fine_Arts_-_Bartolom%C3%A9_Esteban_Murillo_-_The_Marriage_Feast_at_Cana.jpg\">https://commons.wikimedia.org/wiki/File:The_Barber_Institute_of_Fine_Arts_-_Bartolom%C3%A9_Esteban_Murillo_-_The_Marriage_Feast_at_Cana.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/coronation.md":
/*!**************************************!*\
  !*** ./images/default/coronation.md ***!
  \**************************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"coronation-of-the-virgin\">Coronation of the Virgin</h1>\n<p>Artist: Diego Velázquez</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Diego_Vel%C3%A1zquez_-_Coronation_of_the_Virgin_-_Prado.jpg\">https://commons.wikimedia.org/wiki/File:Diego_Vel%C3%A1zquez_-_Coronation_of_the_Virgin_-_Prado.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/cross.md":
/*!*********************************!*\
  !*** ./images/default/cross.md ***!
  \*********************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"christ-carrying-the-cross\">Christ Carrying the Cross</h1>\n<p>Artist: Titian</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Titian_-_Christ_Carrying_the_Cross_-_WGA22830.jpg\">https://commons.wikimedia.org/wiki/File:Titian_-_Christ_Carrying_the_Cross_-_WGA22830.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/crucifixion.md":
/*!***************************************!*\
  !*** ./images/default/crucifixion.md ***!
  \***************************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"christ-crucified\">Christ Crucified</h1>\n<p>Artist: Diego Velázquez</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Diego_Vel%C3%A1zquez_-_Christ_on_the_Cross_-_WGA24389.jpg\">https://commons.wikimedia.org/wiki/File:Diego_Vel%C3%A1zquez_-_Christ_on_the_Cross_-_WGA24389.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/default.md":
/*!***********************************!*\
  !*** ./images/default/default.md ***!
  \***********************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"virgin-and-child-with-a-rosary\">Virgin and Child with a Rosary</h1>\n<p>Artist: Bartolomé Esteban Murillo</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Bartolom%C3%A9_Esteban_Perez_Murillo_-_Virgin_and_Child_with_a_Rosary_-_WGA16360.jpg\">https://commons.wikimedia.org/wiki/File:Bartolom%C3%A9_Esteban_Perez_Murillo_-_Virgin_and_Child_with_a_Rosary_-_WGA16360.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/descent.md":
/*!***********************************!*\
  !*** ./images/default/descent.md ***!
  \***********************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"pentecost\">Pentecost</h1>\n<p>Artist: Juan Bautista Maíno</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Maino_Pentecost%C3%A9s,_1620-1625._Museo_del_Prado.jpg\">https://commons.wikimedia.org/wiki/File:Maino_Pentecost%C3%A9s,_1620-1625._Museo_del_Prado.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/eucharist.md":
/*!*************************************!*\
  !*** ./images/default/eucharist.md ***!
  \*************************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"the-last-supper\">The Last Supper</h1>\n<p>Artist: Joan de Joanes</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:La_%C3%9Altima_Cena_(Juan_de_Juanes)_(restaurada).jpg\">https://commons.wikimedia.org/wiki/File:La_%C3%9Altima_Cena_(Juan_de_Juanes)_(restaurada).jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/finding.md":
/*!***********************************!*\
  !*** ./images/default/finding.md ***!
  \***********************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"christ-among-the-doctors\">Christ among the Doctors</h1>\n<p>Artist: Circle of Jusepe de Ribera</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Follower_of_Ribera_-_Christ_among_the_Doctors.jpg\">https://commons.wikimedia.org/wiki/File:Follower_of_Ribera_-_Christ_among_the_Doctors.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/nativity.md":
/*!************************************!*\
  !*** ./images/default/nativity.md ***!
  \************************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"nativity-with-the-annunciation-to-the-shepherds\">Nativity with the Annunciation to the Shepherds</h1>\n<p>Artist: Bartolomé Esteban Murillo</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Murillo-atribucion_natividad_con_el_anuncio_a_los_pastores.jpg\">https://commons.wikimedia.org/wiki/File:Murillo-atribucion_natividad_con_el_anuncio_a_los_pastores.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/presentation.md":
/*!****************************************!*\
  !*** ./images/default/presentation.md ***!
  \****************************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"presentation-of-jesus-christ-at-the-temple\">Presentation of Jesus Christ at the Temple</h1>\n<p>Artist: Palma il Giovane</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Palma_il_giovane_-_Presentation_of_Jesus_Christ_at_the_Temple_-_San_Giorgio_Maggiore.jpg\">https://commons.wikimedia.org/wiki/File:Palma_il_giovane_-_Presentation_of_Jesus_Christ_at_the_Temple_-_San_Giorgio_Maggiore.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/proclamation.md":
/*!****************************************!*\
  !*** ./images/default/proclamation.md ***!
  \****************************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"sermon-on-the-mount\">Sermon on the Mount</h1>\n<p>Artist: Cosimo Rosselli</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Cosimo_Rosselli_Sermone_della_Montagna.jpg\">https://commons.wikimedia.org/wiki/File:Cosimo_Rosselli_Sermone_della_Montagna.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/resurrection.md":
/*!****************************************!*\
  !*** ./images/default/resurrection.md ***!
  \****************************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"the-resurrected-christ-appears-to-the-virgin\">The Resurrected Christ Appears to the Virgin</h1>\n<p>Artist: Guercino</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Guercino_Cr_ris_Madonna.jpg\">https://commons.wikimedia.org/wiki/File:Guercino_Cr_ris_Madonna.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/scourging.md":
/*!*************************************!*\
  !*** ./images/default/scourging.md ***!
  \*************************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"the-scourging-of-christ\">The Scourging of Christ</h1>\n<p>Artist: Giulio Cesare Procaccini</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Giulio_Cesare_Procaccini_-_The_Scourging_of_Christ_-_1981.353_-_Museum_of_Fine_Arts.jpg\">https://commons.wikimedia.org/wiki/File:Giulio_Cesare_Procaccini_-_The_Scourging_of_Christ_-_1981.353_-_Museum_of_Fine_Arts.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/thorns.md":
/*!**********************************!*\
  !*** ./images/default/thorns.md ***!
  \**********************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"christ-crowned-with-thorns\">Christ Crowned with Thorns</h1>\n<p>Artist: Caravaggio</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:CaravaggioCrowning01.jpg\">https://commons.wikimedia.org/wiki/File:CaravaggioCrowning01.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/transfiguration.md":
/*!*******************************************!*\
  !*** ./images/default/transfiguration.md ***!
  \*******************************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"transfiguration\">Transfiguration</h1>\n<p>Artist: Raphael</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Cosimo_Rosselli_Sermone_della_Montagna.jpg\">https://commons.wikimedia.org/wiki/File:Cosimo_Rosselli_Sermone_della_Montagna.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./images/default/visitation.md":
/*!**************************************!*\
  !*** ./images/default/visitation.md ***!
  \**************************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"visitation\">Visitation</h1>\n<p>Artist: Mariotto Albertinelli</p>\n<p>Source: <a href=\"https://commons.wikimedia.org/wiki/File:Mariotto_Albertinelli_-_Visitation_-_WGA0129.jpg\">https://commons.wikimedia.org/wiki/File:Mariotto_Albertinelli_-_Visitation_-_WGA0129.jpg</a></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/404.html":
/*!***********************************!*\
  !*** ./src/js/templates/404.html ***!
  \***********************************/
/***/ ((module) => {

// Module
var code = "<div id=\"template-about\" class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1>Page not found</h1>\n\n        <p>Sorry, but the page you are looking for cannot be found.</p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/about.html":
/*!*************************************!*\
  !*** ./src/js/templates/about.html ***!
  \*************************************/
/***/ ((module) => {

// Module
var code = "<div id=\"template-about\" class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1>About</h1>\n\n        <p>HolyRosaryOnline.com is a website meant to help people pray the\n        Rosary. It is an open source project maintained by web developer Matt\n        Watson. Different options are available in\n        <a href=\"/settings\" data-navigo>Settings</a>.</p>\n\n        <p>Click the beads as you go along, or click anywhere inside the rosary\n        to go to the next bead.</p>\n\n        <p>Email <a href=\"mailto:matt@mattwatson.org\">matt@mattwatson.org</a>\n        for questions or <a href=\"https://github.com/mateowatson/holyrosaryonline/issues\">\n        leave an issue on the GitHub page</a>.</p>\n\n        <h2>Sources</h2>\n\n        <p>The texts of the prayers were taken in fair use from various sources.\n            The source for each prayer is noted in the source code,\n        but overall, they include:</p>\n\n        <ul>\n            <li>The regular English prayers are primarily taken from:\n                <a href=\"http://www.newadvent.org/images/rosary.pdf\">\n                    www.newadvent.org</a>.\n            </li>\n            <li>The &ldquo;English - Traditional&rdquo; and Latin prayers are primarily taken from:<br>\n                <em>The Daily Missal and Liturgical Manual</em>. Summorum Pontificum\n                    Edition. Baronius Press, 2019.\n            </li>\n            <li>The mysteries in Latin are taken from:\n                <a href=\"http://www.windsorlatinmass.org/wtnews/070408.pdf\">\n                    www.windsorlatinmass.org\n                </a>.\n            </li>\n            <li>Some Latin prayers not included in the Baronius Press missal,\n                as well as some prayer titles in Latin,\n                are taken from:\n                <a href=\"http://prayers.gleeson.us\">prayers.gleeson.us</a>.\n            </li>\n            <li>The luminous mysteries in \"English - Traditional\" are taken from:\n                <a href=\"http://www.usccb.org/prayer-and-worship/prayers-and-devotions/rosaries/how-to-pray-the-rosary.cfm\">\n                    www.usccb.org</a>.\n            </li>\n        </ul>\n\n        <h2>Artwork</h2>\n\n        <p>Artwork has been added by default as an aid to contemplation. You may\n            find out more about these images on the <a href=\"/artwork\" data-navigo>artwork\n            page</a>.</p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/artwork.html":
/*!***************************************!*\
  !*** ./src/js/templates/artwork.html ***!
  \***************************************/
/***/ ((module) => {

// Module
var code = "<div id=\"template-artwork\" class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1>Artwork Titles, Artist Names and Links</h1>\n\n        <h2>Depictions of the joyful mysteries</h2>\n\n        <div id=\"artwork-joyful\"></div>\n\n        <h2>Depictions of the luminous mysteries</h2>\n\n        <div id=\"artwork-luminous\"></div>\n\n        <h2>Depictions of the sorrowful mysteries</h2>\n\n        <div id=\"artwork-sorrowful\"></div>\n\n        <h2>Depictions of the glorious mysteries</h2>\n\n        <div id=\"artwork-glorious\"></div>\n\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/home.html":
/*!************************************!*\
  !*** ./src/js/templates/home.html ***!
  \************************************/
/***/ ((module) => {

// Module
var code = "<div id=\"template-home\">\n    <button id=\"next-prayer\"><hro-localize>Next Prayer</hro-localize></button>\n    <button class=\"prayers-reset\" data-rosary-reset>\n        <hro-localize>Reset</hro-localize>\n    </button>\n\n    <div aria-live=\"polite\" class=\"prayers\" id=\"prayers\">\n        <div class=\"prayers__content prayers-content\" id=\"prayers-content\">\n\n        </div>\n        <div class=\"prayers-prev-next\">\n            <button class=\"prayers-prev-next__prev\" data-rosary-prev>\n                <span class=\"sr-only\"><hro-localize>Previous</hro-localize></span>\n                <span class=\"prayers-prev-next__prev-icon\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z\"/></svg>\n                </span>\n            </button>\n            <button class=\"prayers-prev-next__next\" data-rosary-next>\n                <span class=\"sr-only\"><hro-localize>Next</hro-localize></span>\n                <span class=\"prayers-prev-next__next-icon\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z\"/></svg>\n                </span>\n            </button>\n        </div>\n        \n    </div>\n\n    \n    <div class=\"rosary-wrapper-wrapper-mask\">\n    <div class=\"rosary-wrapper-wrapper\">\n    <div class=\"rosary-wrapper\">\n    <div class=\"rosary\">\n        <div class=\"rosary-intro-chain\"></div>\n        <div class=\"rosary-intro\">\n            <div class=\"bead-wrapper\"><button class=\"rosary-intro__crucifix bead bead--crucifix\" id=\"crucifix\">\n                <svg width=\"53\" height=\"102\" viewBox=\"0 0 53 102\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <path d=\"M30.2053 3.05746L30.1627 23.0574L50.1627 23.1L50.1478 30.1L37.1478 30.0723L35.6457 31.0691L32.6414 33.0627L30.1372 35.0574L30.1223 42.0574L31.118 44.0595L31.1117 47.0595L30.1042 50.5574L29.9999 99.5572L23 99.5423L23.0989 53.0425L22.5957 54.5414L21.1021 51.5382L21.1106 47.5382L22.6138 46.0414L21.6149 45.5393L21.6191 43.5393L23.1191 43.5425L21.6276 39.5393L21.1372 35.0382L19.1415 33.034L17.1436 32.0297L14.6457 31.0244L3.14577 30.9999L3.16279 23L23.1627 23.0425L23.2053 3.04256L30.2053 3.05746Z\" stroke-width=\"4\"/>\n                </svg>\n                <span class=\"sr-only\"><hro-localize>Sign of the Cross</hro-localize></span>\n            </button></div>\n\n            <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n            <div class=\"bead-wrapper\"><button class=\"rosary-intro__our-father bead bead--our-father bead--correct-rotation\" id=\"intro-our-father-1\"><span class=\"sr-only\"><hro-localize>Our Father</hro-localize></span></button></div>\n            <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n\n            <div class=\"bead-wrapper\"><button class=\"rosary-intro__hail-mary bead bead--correct-rotation\" id=\"intro-hail-mary-1\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n            <div class=\"bead-wrapper\"><button class=\"rosary-intro__hail-mary bead bead--correct-rotation\" id=\"intro-hail-mary-2\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n            <div class=\"bead-wrapper\"><button class=\"rosary-intro__hail-mary bead bead--correct-rotation\" id=\"intro-hail-mary-3\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n\n            <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n            <div class=\"bead-wrapper\"><button class=\"rosary-intro__our-father bead bead--our-father bead--correct-rotation\" id=\"intro-our-father-2\"><span class=\"sr-only\"><hro-localize>Our Father</hro-localize></span></button></div>\n            <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n        </div>\n\n        <div class=\"rosary-main-wrapper\">\n            <div class=\"rosary-main\">\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n                <div class=\"bead-wrapper medallion\"><button class=\"bead bead--medallion\" id=\"medallion\">\n                    <!-- Medallion\n                    <div class=\"bead\"></div> -->\n                    <svg width=\"59\" height=\"52\" viewBox=\"0 0 59 52\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M35.6514 44.9919C32.7178 49.7185 25.8402 49.7185 22.9066 44.9919L3.64349 13.955C0.542614 8.95888 4.13567 2.5 10.0159 2.5H48.5421C54.4223 2.5 58.0154 8.95889 54.9145 13.955L35.6514 44.9919Z\" stroke-width=\"5\"/>\n                    </svg>\n                    <span class=\"sr-only\"><hro-localize>Medallion, end of rosary</hro-localize></span>\n                </button></div>\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-01\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-02\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-03\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-04\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-05\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-06\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-07\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-08\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-09\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-1-10\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n                <div class=\"bead-wrapper\"><button class=\"bead bead--our-father\" id=\"our-father-2\"><span class=\"sr-only\"><hro-localize><hro-localize>Our Father</hro-localize></hro-localize></span></button></div>\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-01\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-02\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-03\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-04\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-05\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-06\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-07\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-08\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-09\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-2-10\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n                <div class=\"bead-wrapper\"><button class=\"bead bead--our-father\" id=\"our-father-3\"><span class=\"sr-only\"><hro-localize>Our Father</hro-localize></span></button></div>\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-01\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-02\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-03\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-04\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-05\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-06\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-07\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-08\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-09\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-3-10\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n                <div class=\"bead-wrapper\"><button class=\"bead bead--our-father\" id=\"our-father-4\"><span class=\"sr-only\"><hro-localize>Our Father</hro-localize></span></button></div>\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-01\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-02\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-03\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-04\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-05\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-06\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-07\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-08\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-09\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-4-10\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n                <div class=\"bead-wrapper\"><button class=\"bead bead--our-father\" id=\"our-father-5\"><span class=\"sr-only\"><hro-localize>Our Father</hro-localize></span></button></div>\n                <div class=\"bead-wrapper bead-wrapper--filler\"><div class=\"bead bead--filler\"></div></div>\n\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-01\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-02\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-03\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-04\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-05\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-06\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-07\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-08\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-09\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n                <div class=\"bead-wrapper\"><button class=\"rosary-main__hail-mary bead\" id=\"hail-mary-5-10\"><span class=\"sr-only\"><hro-localize>Hail Mary</hro-localize></span></button></div>\n            </div>\n        </div>\n    <button id=\"next-prayer-btn-within-beads\"><span class=\"sr-only\">Next Prayer</span></button>\n    </div>\n    </div>\n    </div>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_glorious_1.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_glorious_1.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">John 20:1-9 (RSVCE)</h1>\n\n        <p>Now on the first day of the week Mary Mag&prime;dalene came to the tomb early, while it was still dark, and saw that the stone had been taken away from the tomb. So she ran, and went to Simon Peter and the other disciple, the one whom Jesus loved, and said to them, &ldquo;They have taken the Lord out of the tomb, and we do not know where they have laid him.&rdquo; Peter then came out with the other disciple, and they went toward the tomb. They both ran, but the other disciple outran Peter and reached the tomb first; and stooping to look in, he saw the linen cloths lying there, but he did not go in. Then Simon Peter came, following him, and went into the tomb; he saw the linen cloths lying, and the napkin, which had been on his head, not lying with the linen cloths but rolled up in a place by itself. Then the other disciple, who reached the tomb first, also went in, and he saw and believed; for as yet they did not know the scripture, that he must rise from the dead.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">www.biblegateway.com</a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_glorious_2.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_glorious_2.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Luke 24:44-53 (RSVCE)</h1>\n\n        <p>Then he said to them, &ldquo;These are my words which I spoke to you, while I was still with you, that everything written about me in the law of Moses and the prophets and the psalms must be fulfilled.&rdquo; Then he opened their minds to understand the scriptures, and said to them, &ldquo;Thus it is written, that the Christ should suffer and on the third day rise from the dead, and that repentance and forgiveness of sins should be preached in his name to all nations, beginning from Jerusalem. You are witnesses of these things. And behold, I send the promise of my Father upon you; but stay in the city, until you are clothed with power from on high.&rdquo;</p>\n\n        <p>Then he led them out as far as Bethany, and lifting up his hands he blessed them. While he blessed them, he parted from them and was carried up into heaven. And they worshiped him, and returned to Jerusalem with great joy, and were continually in the temple blessing God.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">www.biblegateway.com</a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_glorious_3.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_glorious_3.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Acts 2:1-4 (RSVCE)</h1>\n\n        <p>When the day of Pentecost had come, they were all together in one place. And suddenly a sound came from heaven like the rush of a mighty wind, and it filled all the house where they were sitting. And there appeared to them tongues as of fire, distributed and resting on each one of them. And they were all filled with the Holy Spirit and began to speak in other tongues, as the Spirit gave them utterance.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">www.biblegateway.com</a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_glorious_4.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_glorious_4.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">From the Sermons of St. John of Damascus. Second on the Falling-asleep of Blessed Mary.</h1>\n\n        <p>This day the holy and animated Ark of the living God, which had held within it its own Maker, is borne to rest in that Temple of the Lord, which is not made with hands. David, whence it sprang, leapeth before it, and in company with him the Angels dance, the Archangels sing aloud, the Virtues ascribe glory, the Princedoms shout for joy, the Powers make merry, the Lordships rejoice, the Thrones keep holiday, the Cherubim utter praise, and the Seraphim proclaim its glory. This day the Eden of the new Adam receiveth the living garden of delight, wherein the condemnation was annulled, wherein the Tree of Life was planted, wherein our nakedness was covered.</p>\n\n        <hr>\n\n        <p>\n            Divinum Officium Project. Matins for August 15, 2018, 1960 rubrics.\n            <a href=\"http://divinumofficium.com\">\n                divinumofficium.com\n            </a>\n        </p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_glorious_5.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_glorious_5.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Sermon of St. Peter Canisius, Priest On the Incomparable Virgin Mary, Mother of God</h1>\n\n        <p>If we follow St. John Damascene, St. Athanasius and others, are we not forced to call Mary Queen, since her father David receiveth the highest praise in Scripture as a renowned king, and her son as King of kings and Lord of lords, reigning forever? She is Queen, moreover, when compared with the Saints who reign like kings in the heavenly kingdom, co-heirs with Christ, the great King, placed on the same throne with him, as the Scripture saith. And as Queen she is second to none of the elect, but in dignity is raised so high above both Angels and men that nothing can be higher or holier than she, who alone hath the same Son as God the Father, and who seeth above her only God and Christ, and below her creatures other than herself.</p>\n\n        <hr>\n\n        <p>\n            Divinum Officium Project. Matins for May 31, 2019, 1960 rubrics.\n            <a href=\"http://divinumofficium.com\">\n                divinumofficium.com\n            </a>\n        </p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_joyful_1.html":
/*!***********************************************************!*\
  !*** ./src/js/templates/meditations/med_en_joyful_1.html ***!
  \***********************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Luke 1:26-31 (RSVCE)</h1>\n\n        <p>In the sixth month the angel Gabriel was sent from God to a\n        city of Galilee named Nazareth, to a virgin betrothed to a man whose\n        name was Joseph, of the house of David; and the virgin&rsquo;s name was Mary.\n        And he came to her and said, &ldquo;Hail, full of grace, the Lord\n        is with you!&rdquo; But she was greatly troubled at the\n        saying, and considered in her mind what sort of greeting this might be.\n        And the angel said to her, &ldquo;Do not be afraid, Mary, for you have\n        found favor with God. And behold, you will conceive in your womb\n        and bear a son, and you shall call his name Jesus.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_joyful_2.html":
/*!***********************************************************!*\
  !*** ./src/js/templates/meditations/med_en_joyful_2.html ***!
  \***********************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Luke 1:39-45 (RSVCE)</h1>\n\n        <p>In those days Mary arose and went with haste into the hill\n        country, to a city of Judah, and she entered the house of\n        Zechari&prime;ah and greeted Elizabeth. And when Elizabeth\n        heard the greeting of Mary, the babe leaped in her womb; and Elizabeth\n        was filled with the Holy Spirit and she exclaimed with a\n        loud cry, &ldquo;Blessed are you among women, and blessed is the fruit\n        of your womb! And why is this granted me, that the mother\n        of my Lord should come to me? For behold, when the voice of\n        your greeting came to my ears, the babe in my womb leaped for joy.\n        And blessed is she who believed that there would be a\n        fulfilment of what was spoken to her from the Lord.&rdquo;\n        \n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_joyful_3.html":
/*!***********************************************************!*\
  !*** ./src/js/templates/meditations/med_en_joyful_3.html ***!
  \***********************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Luke 2:1-7 (RSVCE)</h1>\n\n        <p>In those days a decree went out from Caesar Augustus that\n        all the world should be enrolled. This was the first\n        enrollment, when Quirin&prime;i-us was governor of Syria.\n        And all went to be enrolled, each to his own city.\n        And Joseph also went up from Galilee, from the city of\n        Nazareth, to Judea, to the city of David, which is called Bethlehem,\n        because he was of the house and lineage of David, to be\n        enrolled with Mary, his betrothed, who was with child. And\n        while they were there, the time came for her to be delivered.\n        And she gave birth to her first-born son and wrapped him in\n        swaddling cloths, and laid him in a manger, because there was no place\n        for them in the inn.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_joyful_4.html":
/*!***********************************************************!*\
  !*** ./src/js/templates/meditations/med_en_joyful_4.html ***!
  \***********************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Luke 2:25-32 (RSVCE)</h1>\n\n        <p>Now there was a man in Jerusalem, whose\n        name was Simeon, and this man was righteous and devout, looking for the\n        consolation of Israel, and the Holy Spirit was upon him.\n        And it had been revealed to him by the Holy Spirit that he\n        should not see death before he had seen the Lord&rsquo;s Christ.\n        And inspired by the Spirit he came into the temple; and\n        when the parents brought in the child Jesus, to do for him according to\n        the custom of the law, he took him up in his arms and\n        blessed God and said,</p>\n\n        <blockquote>&ldquo;Lord, now lettest thou thy servant depart in peace,<br>\n        according to thy word;<br>\n        for mine eyes have seen thy salvation<br>\n        which thou hast prepared in the presence of all peoples,<br>\n        a light for revelation to the Gentiles,<br>\n        and for glory to thy people Israel.&rdquo;</blockquote>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_joyful_5.html":
/*!***********************************************************!*\
  !*** ./src/js/templates/meditations/med_en_joyful_5.html ***!
  \***********************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Luke 2:41-51 (RSVCE)</h1>\n\n        <p>Now his parents went to Jerusalem every year at the feast of the\n        Passover. And when he was twelve years old, they went up\n        according to custom; and when the feast was ended, as they\n        were returning, the boy Jesus stayed behind in Jerusalem. His parents\n        did not know it, but supposing him to be in the company they went a\n        day&rsquo;s journey, and they sought him among their kinsfolk\n        and acquaintances; and when they did not find him, they\n        returned to Jerusalem, seeking him. After three days they\n        found him in the temple, sitting among the teachers, listening\n        to them and asking them questions; and all who heard him were\n        amazed at his understanding and his answers. And when they saw\n        him they were astonished; and his mother said to him,\n        &ldquo;Son, why have you treated us so? Behold, your father and\n        I have been looking for you anxiously.&rdquo; And he said\n        to them, &ldquo;How is it that you sought me? Did you not know\n        that I must be in my Father&rsquo;s house?&rdquo; And they did\n        not understand the saying which he spoke to them. And he went\n        down with them and came to Nazareth, and was obedient to them;\n        and his mother kept all these things in her heart.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_luminous_1.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_luminous_1.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 3:13-16 (RSVCE)</h1>\n\n        <p><sup>13</sup>Then Jesus came from Galilee to the Jordan to John, to be\n        baptized by him. <sup>14</sup>John would have prevented him, saying,\n        &ldquo;I need to be baptized by you, and do you come to me?&rdquo;\n        <sup>15</sup>But Jesus answered him, &ldquo;Let it be so now; for thus\n        it is fitting for us to fulfil all righteousness.&rdquo; Then he\n        consented. <sup>16</sup>And when Jesus was baptized, he went up\n        immediately from the water, and behold, the heavens were opened and he\n        saw the Spirit of God descending like a dove, and alighting on him;</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_luminous_2.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_luminous_2.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">John 2:1-11 (RSVCE)</h1>\n\n        <p><sup>1</sup>On the third day there was a marriage at Cana in Galilee,\n        and the mother of Jesus was there; <sup>2</sup>Jesus also was invited to\n        the marriage, with his disciples. <sup>3</sup>When the wine failed, the\n        mother of Jesus said to him, &ldquo;They have no wine.&rdquo;\n        <sup>4</sup>And Jesus said to her, &ldquo;O woman, what have you to do\n        with me? My hour has not yet come.&rdquo; <sup>5</sup>His mother said to\n        the servants, &ldquo;Do whatever he tells you.&rdquo; <sup>6</sup>Now\n        six stone jars were standing there, for the Jewish rites of\n        purification, each holding twenty or thirty gallons. <sup>7</sup>Jesus\n        said to them, &ldquo;Fill the jars with water.&rdquo; And they filled\n        them up to the brim. <sup>8</sup>He said to them, &ldquo;Now draw some\n        out, and take it to the steward of the feast.&rdquo; So they took it.\n        <sup>9</sup>When the steward of the feast tasted the water now become\n        wine, and did not know where it came from (though the servants who had\n        drawn the water knew), the steward of the feast called the bridegroom\n        <sup>10</sup>and said to him, &ldquo;Every man serves the good wine\n        first; and when men have drunk freely, then the poor wine; but you have\n        kept the good wine until now.&rdquo; <sup>11</sup>This, the first of his\n        signs, Jesus did at Cana in Galilee, and manifested his glory; and his\n        disciples believed in him.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_luminous_3.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_luminous_3.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Mark 1:14-15 (RSVCE)</h1>\n\n        <p><sup>14</sup>Now after John was arrested, Jesus came into Galilee,\n        preaching the gospel of God, <sup>15</sup>and saying, &ldquo;The time is\n        fulfilled, and the kingdom of God is at hand; repent, and believe in the\n        gospel.&rdquo;</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_luminous_4.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_luminous_4.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 17:1-8 (RSVCE)</h1>\n\n        <p><sup>17</sup>And after six days Jesus took with him Peter and James and\n        John his brother, and led them up a high mountain apart. <sup>2</sup>And\n        he was transfigured before them, and his face shone like the sun, and\n        his garments became white as light. <sup>3</sup>And behold, there\n        appeared to them Moses and Eli&prime;jah, talking with him.\n        <sup>4</sup>And Peter said to Jesus, &ldquo;Lord, it is well that we are\n        here; if you wish, I will make three booths here, one for you and one\n        for Moses and one for Eli′jah.&rdquo; <sup>5</sup>He was still speaking,\n        when lo, a bright cloud overshadowed them, and a voice from the cloud\n        said, &ldquo;This is my beloved Son, with whom I am well pleased; listen\n        to him.&rdquo; <sup>6</sup>When the disciples heard this, they fell on\n        their faces, and were filled with awe. <sup>7</sup>But Jesus came and\n        touched them, saying, &ldquo;Rise, and have no fear.&rdquo;\n        <sup>8</sup>And when they lifted up their eyes, they saw no one but\n        Jesus only.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_luminous_5.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_luminous_5.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 26:17-29 (RSVCE)</h1>\n\n        <p><sup>17</sup>Now on the first day of Unleavened Bread the disciples came\n        to Jesus, saying, &ldquo;Where will you have us prepare for you to eat\n        the passover?&rdquo; <sup>18</sup>He said, &ldquo;Go into the city to\n        such a one, and say to him, &lsquo;The Teacher says, My time is at hand;\n        I will keep the passover at your house with my disciples.&lsquo;&rdquo;\n        <sup>19</sup>And the disciples did as Jesus had directed them, and they\n        prepared the passover.</p>\n\n        <p><sup>20</sup>When it was evening, he sat at table with the twelve\n        disciples; <sup>21</sup>and as they were eating, he said, &ldquo;Truly,\n        I say to you, one of you will betray me.&rdquo; <sup>22</sup>And they\n        were very sorrowful, and began to say to him one after another,\n        &ldquo;Is it I, Lord?&rdquo; <sup>23</sup>He answered, &ldquo;He who has\n        dipped his hand in the dish with me, will betray me. <sup>24</sup>The\n        Son of man goes as it is written of him, but woe to that man by whom the\n        Son of man is betrayed! It would have been better for that man if he had\n        not been born.&rdquo; <sup>25</sup>Judas, who betrayed him, said,\n        &ldquo;Is it I, Master?&rdquo; He said to him, &ldquo;You have said\n        so.&rdquo;</p>\n\n        <p><sup>26</sup>Now as they were eating, Jesus took bread, and blessed, and\n        broke it, and gave it to the disciples and said, &ldquo;Take, eat; this\n        is my body.&rdquo; <sup>27</sup>And he took a cup, and when he had given\n        thanks he gave it to them, saying, &ldquo;Drink of it, all of you;\n        <sup>28</sup>for this is my blood of the covenant, which is poured out\n        for many for the forgiveness of sins. <sup>29</sup>I tell you I shall\n        not drink again of this fruit of the vine until that day when I drink it\n        new with you in my Father&rsquo;s kingdom.&rdquo;</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_sorrowful_1.html":
/*!**************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_sorrowful_1.html ***!
  \**************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 26:36-56 (RSVCE)</h1>\n\n        <p><sup>36</sup>Then Jesus went with them to a place called\n        Gethsem&prime;ane, and he said to his disciples, &ldquo;Sit here, while\n        I go yonder and pray.&rdquo; <sup>37</sup>And taking with him Peter and\n        the two sons of Zeb&prime;edee, he began to be sorrowful and troubled.\n        <sup>38</sup>Then he said to them, &ldquo;My soul is very sorrowful,\n        even to death; remain here, and watch with me.&rdquo; <sup>39</sup>And\n        going a little farther he fell on his face and prayed, &ldquo;My Father,\n        if it be possible, let this cup pass from me; nevertheless, not as I\n        will, but as thou wilt.&rdquo; <sup>40</sup>And he came to the disciples\n        and found them sleeping; and he said to Peter, &ldquo;So, could you not\n        watch with me one hour? <sup>41</sup>Watch and pray that you may not\n        enter into temptation; the spirit indeed is willing, but the flesh is\n        weak.&rdquo; <sup>42</sup>Again, for the second time, he went away and\n        prayed, &ldquo;My Father, if this cannot pass unless I drink it, thy\n        will be done.&rdquo; <sup>43</sup>And again he came and found them\n        sleeping, for their eyes were heavy. <sup>44</sup>So, leaving them\n        again, he went away and prayed for the third time, saying the same\n        words. <sup>45</sup>Then he came to the disciples and said to them,\n        &ldquo;Are you still sleeping and taking your rest? Behold, the hour is\n        at hand, and the Son of man is betrayed into the hands of sinners.\n        <sup>46</sup>Rise, let us be going; see, my betrayer is at hand.&rdquo;</p>\n\n        <p><sup>47</sup>While he was still speaking, Judas came, one of the twelve,\n        and with him a great crowd with swords and clubs, from the chief priests\n        and the elders of the people. <sup>48</sup>Now the betrayer had given\n        them a sign, saying, &ldquo;The one I shall kiss is the man; seize\n        him.&rdquo; <sup>49</sup>And he came up to Jesus at once and said,\n        &ldquo;Hail, Master!&rdquo; And he kissed him. <sup>50</sup>Jesus said\n        to him, &ldquo;Friend, why are you here?&rdquo; Then they came up and\n        laid hands on Jesus and seized him. <sup>51</sup>And behold, one of\n        those who were with Jesus stretched out his hand and drew his sword, and\n        struck the slave of the high priest, and cut off his ear.\n        <sup>52</sup>Then Jesus said to him, &ldquo;Put your sword back into its\n        place; for all who take the sword will perish by the sword.\n        <sup>53</sup>Do you think that I cannot appeal to my Father, and he will\n        at once send me more than twelve legions of angels? <sup>54</sup>But how\n        then should the scriptures be fulfilled, that it must be so?&rdquo;\n        <sup>55</sup>At that hour Jesus said to the crowds, &ldquo;Have you come\n        out as against a robber, with swords and clubs to capture me? Day after\n        day I sat in the temple teaching, and you did not seize me.\n        <sup>56</sup>But all this has taken place, that the scriptures of the\n        prophets might be fulfilled.&rdquo; Then all the disciples forsook him\n        and fled.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>\n\n\n\n\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_sorrowful_2.html":
/*!**************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_sorrowful_2.html ***!
  \**************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 27:24-26 (RSVCE)</h1>\n\n        <p><sup>24</sup>So when Pilate saw that he was gaining nothing, but rather\n        that a riot was beginning, he took water and washed his hands before the\n        crowd, saying, &ldquo;I am innocent of this righteous man&rsquo;s blood;\n        see to it yourselves.&rdquo; <sup>25</sup>And all the people answered,\n        &ldquo;His blood be on us and on our children!&rdquo; <sup>26</sup>Then\n        he released for them Barab&prime;bas, and having scourged Jesus,\n        delivered him to be crucified.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>\n\n\n\n\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_sorrowful_3.html":
/*!**************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_sorrowful_3.html ***!
  \**************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 27:27-31 (RSVCE)</h1>\n\n        <p><sup>27</sup>Then the soldiers of the governor took Jesus into the\n        praetorium, and they gathered the whole battalion before him.\n        <sup>28</sup>And they stripped him and put a scarlet robe upon him,\n        <sup>29</sup>and plaiting a crown of thorns they put it on his head, and\n        put a reed in his right hand. And kneeling before him they mocked him,\n        saying, &ldquo;Hail, King of the Jews!&rdquo; <sup>30</sup>And they spat\n        upon him, and took the reed and struck him on the head. <sup>31</sup>And\n        when they had mocked him, they stripped him of the robe, and put his own\n        clothes on him, and led him away to crucify him.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>\n\n\n\n\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_sorrowful_4.html":
/*!**************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_sorrowful_4.html ***!
  \**************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 27:32 (RSVCE)</h1>\n\n        <p><sup>32</sup>As they were marching out, they came upon a man of\n        Cyre&prime;ne, Simon by name; this man they compelled to carry his\n        cross.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>\n\n\n\n\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_en_sorrowful_5.html":
/*!**************************************************************!*\
  !*** ./src/js/templates/meditations/med_en_sorrowful_5.html ***!
  \**************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n\n        <h1 class=\"label\">Matthew 27:33-56 (RSVCE)</h1>\n\n        <p><sup>33</sup>And when they came to a place called Gol&prime;gotha (which\n        means the place of a skull), <sup>34</sup>they offered him wine to\n        drink, mingled with gall; but when he tasted it, he would not drink it.\n        <sup>35</sup>And when they had crucified him, they divided his garments\n        among them by casting lots; <sup>36</sup>then they sat down and kept\n        watch over him there. <sup>37</sup>And over his head they put the charge\n        against him, which read, &ldquo;This is Jesus the King of the\n        Jews.&rdquo; <sup>38</sup>Then two robbers were crucified with him, one\n        on the right and one on the left. <sup>39</sup>And those who passed by\n        derided him, wagging their heads <sup>40</sup>and saying, &ldquo;You who\n        would destroy the temple and build it in three days, save yourself! If\n        you are the Son of God, come down from the cross.&rdquo; <sup>41</sup>So\n        also the chief priests, with the scribes and elders, mocked him, saying,\n        <sup>42</sup>&ldquo;He saved others; he cannot save himself. He is the\n        King of Israel; let him come down now from the cross, and we will\n        believe in him. <sup>43</sup>He trusts in God; let God deliver him now,\n        if he desires him; for he said, &lsquo;I am the Son of\n        God.&rsquo;&rdquo; <sup>44</sup>And the robbers who were crucified with\n        him also reviled him in the same way.<p>\n\n        <p><sup>45</sup>Now from the sixth hour there was darkness over all the land\n        until the ninth hour. <sup>46</sup>And about the ninth hour Jesus cried with a\n        loud voice, &ldquo;Eli, Eli, la&prime;ma sabach-tha&prime;ni?&rdquo;\n        that is, &ldquo;My God, my God, why hast thou forsaken me?&rdquo;\n        <sup>47</sup>And some of the bystanders hearing it said, &ldquo;This man is\n        calling Eli&prime;jah.&rdquo; <sup>48</sup>And one of them at once ran and\n        took a sponge, filled it with vinegar, and put it on a reed, and\n        gave it to him to drink. <sup>49</sup>But the others said, &ldquo;Wait, let us\n        see whether Eli&prime;jah will come to save him.&rdquo; <sup>50</sup>And\n        Jesus cried again with a loud voice and yielded up his spirit.</p>\n\n        <p><sup>51</sup>And behold, the curtain of the temple was torn in two, from\n        top to bottom; and the earth shook, and the rocks were split;\n        <sup>52</sup>the tombs also were opened, and many bodies of the saints who\n        had fallen asleep were raised, <sup>53</sup>and coming out of the tombs\n        after his resurrection they went into the holy city and appeared\n        to many. <sup>54</sup>When the centurion and those who were with him,\n        keeping watch over Jesus, saw the earthquake and what took place,\n        they were filled with awe, and said, &ldquo;Truly this was the\n        Son of God!&rdquo;</p>\n\n        <p><sup>55</sup>There were also many women there, looking on from afar, who\n        had followed Jesus from Galilee, ministering to him; <sup>56</sup>among\n        whom were Mary Mag&prime;dalene, and Mary the mother of James and\n        Joseph, and the mother of the sons of Zeb&prime;edee.</p>\n\n        <hr>\n\n        <p><em>The Revised Standard Version of the Bible: Catholic Edition</em>.\n        The Division of Christian Education of the\n        National Council of the Churches of Christ in the United States of\n        America, 1965, 1966.\n        <a href=\"https://www.biblegateway.com/\">\n            www.biblegateway.com\n        </a></p>\n    </div>\n</div>\n\n\n\n\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_es_glorious_1.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_es_glorious_1.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">San Juan 20, 1-9 (Nácar-Colunga)</h1>\n\n        <p>El día primero de la semana, María Magdalena vino muy de madrugada, cuando aún era de noche, al monumento, y vio la piedra quitada del monumento. Corrió, pues, y vino a Simón Pedro y al otro discípulo a quien Jesús amaba, y les dijo: Han quitado al Señor del monumento y no sabemos dónde le han puesto.</p>\n\n        <p>Salió, pues, Pedro y con él otro discípulo, y fueron al monumento. Ambos corrían, pero el otro discípulo corrió más aprisa que Pedro y llegó primero al monumento, e inclinándose vió las bandas; sin embargo, no entró. Llegó, pues, Simón Pedro después de él, y entró en el monumento, y vió las fajas allí colocadas, y el sudario que estaba sobre su cabeza, no puesto con las fajas, sino envuelto en un sitio aparte. Entonces entró también el otro discípulo, que vino primero al monumento, y vió y creyó; porque aún no se habían dado cuenta de la Escritura, según la cual era preciso que El resucitase de entre los muertos.</p>\n\n\n\n        <hr>\n\n        <p><em>Sagrada Biblia</em>.\n        Eloíno Nácar Fuster y Alberto Colunga.\n        La Editorial Católica: Madrid, 1944\n        <a href=\"https://archive.org/details/SagradaBibliaNacarColunga19441Edicin/\">archive.org</a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_es_glorious_2.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_es_glorious_2.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">San Lucas 24, 44-53 (Nácar-Colunga)</h1>\n\n        <p>Les dijo: Esto es lo que yo os decía estando aún con vosotros: que era preciso que se cumpliera todo lo que está escrito en la ley de Moisés y en los Profetas y en los Salmos de mí. Entonces les abrió la inteligencia para que entendiesen las Escrituras, y les dijo: Que así estaba escrito, que el Mesías padeciese y al tercer día resucitase de entre los muertos. Y que se predicase en su nombre la penitencia para la remisión de los pecados a todas las naciones, comenzando por Jerusalén.</p>\n\n        <p>Vosotros daréis testimonio de esto. Pues yo os enviaré lo prometido por mi Padre: pero habéis de permanecer en la ciudad hasta que seáis revestidos de lo alto.</p>\n\n        <p>Los llevó hasta cerca de Betania, y levantando sus manos los bendijo, y mientras los bendecía se alejaba de ellos, y era llevado al cielo. Ellos se postraron ante El, y se volvieron a Jerusalén con grande gozo y estaban de continuo en el templo bendiciendo a Dios.</p>\n\n        <hr>\n\n        <p><em>Sagrada Biblia</em>.\n        Eloíno Nácar Fuster y Alberto Colunga.\n        La Editorial Católica: Madrid, 1944\n        <a href=\"https://archive.org/details/SagradaBibliaNacarColunga19441Edicin/\">archive.org</a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_es_glorious_3.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_es_glorious_3.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Apóstoles 2, 1-4 (Nácar-Colunga)</h1>\n\n        <p>Cuando llegó el día de Pentecostés, estando todos juntos en un lugar, se produjo de repente un ruido del cielo, así como el de un viento impetuoso, que invadió toda la casa en que residían. Y aparecieron, como divididas, lenguas de fuego, que se posaron sobre cada uno de ellos, quedando todos llenos del Espíritu Santo; y comenzaron a hablar en lenguas extrañas, según que el Espíritu les daba.</p>\n\n        <hr>\n\n        <p><em>Sagrada Biblia</em>.\n        Eloíno Nácar Fuster y Alberto Colunga.\n        La Editorial Católica: Madrid, 1944\n        <a href=\"https://archive.org/details/SagradaBibliaNacarColunga19441Edicin/\">archive.org</a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_es_glorious_4.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_es_glorious_4.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Sermón de San Juan Damasceno. Segundo sobre la dormición de la Santísima Virgen.</h1>\n\n        <p>El arca santa y animada del Dios viviente, que concibió en su seno a su Criador, descansa hoy en el templo del Señor no construido por mano de hombre. David exulta de alegría, y con él, le cantan himnos los Ángeles, la celebran los Arcángeles, la glorifican las Virtudes, se estremecen de júbilo los Principados, se regocijan con ellos las Potestades, manifiestan su alegría las Dominaciones, la festejan los Tronos y repiten sus alabanzas los Serafines. Hoy es recibido en el celestial Edén el paraíso animado del nuevo Adán, en el cual fue revocada nuestra condenación, plantado el árbol de la vida y cubierta nuestra desnudez.</p>\n\n        <hr>\n\n        <p>\n            Divinum Officium Project. Maitines del 15 de agosto de 2018, rúbrica de 1960.\n            <a href=\"http://divinumofficium.com\">\n                divinumofficium.com\n            </a>\n        </p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_es_glorious_5.html":
/*!*************************************************************!*\
  !*** ./src/js/templates/meditations/med_es_glorious_5.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">Sermón de San Pedro Canisio, Presbítero. De María Madre de Dios, Virgen incomparable</h1>\n\n        <p>Si seguimos a San Juan Damasceno, San Atanasio y otros, ¿por qué no llamar a María Reina, ya que su padre David recibe la mayor alabanza en la Escritura como un rey famoso, y su hijo como Rey de reyes y Señor de señores, reinando para siempre? Ella es la reina, además, en comparación con los santos que reinan como reyes en el reino celestial, coherederos con Cristo, el gran Rey, puestos en el mismo trono con Él, como dice la Escritura. Y como Reina supera en dignidad a los elegidos, y se eleva tanto más arriba que los Ángeles y los santos, que nada puede ser más elevado o más santo que ella, que es la única que tiene al mismo Hijo que Dios Padre, y que ve por encima de ella solo Dios y Cristo, y debajo de Ella sus criaturas.</p>\n\n        <hr>\n\n        <p>\n            Divinum Officium Project. Maitines del 31 de mayo de 2019, rúbrica de 1960.\n            <a href=\"http://divinumofficium.com\">\n                divinumofficium.com\n            </a>\n        </p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_es_joyful_1.html":
/*!***********************************************************!*\
  !*** ./src/js/templates/meditations/med_es_joyful_1.html ***!
  \***********************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">San Lucas 1, 26-31 (Nácar-Colunga)</h1>\n\n        <p>En el mes sexto fué enviado el ángel Gabriel de parte de Dios a una ciudad de Galilea llamada Nazaret, a una virgen, desposada con un varón de nombre José, de la casa de David; el nombre de la virgen era María. Y entrando a ella le dijo: Dios te salve, llena de gracia, el Señor es contigo. Y ella se turbó al oír estas palabras y discurría qué podría significar aquella salutación. Y el ángel le dijo: No temas, María, porque has hallado gracia delante de Dios y concebirás en tu seno y darás a luz un hijo, a quien pondrás por nombre Jesús.</p>\n\n        <hr>\n\n        <p><em>Sagrada Biblia</em>.\n            Eloíno Nácar Fuster y Alberto Colunga.\n            La Editorial Católica: Madrid, 1944\n            <a href=\"https://archive.org/details/SagradaBibliaNacarColunga19441Edicin/\">archive.org</a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_es_joyful_2.html":
/*!***********************************************************!*\
  !*** ./src/js/templates/meditations/med_es_joyful_2.html ***!
  \***********************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">San Lucas 1, 39-45 (Nácar-Colunga)</h1>\n\n        <p>En aquellos días se puso María en camino y con presteza se fué a la montaña, a una ciudad de Judá y entró en casa de Zacarías y saludó a Isabel. Y así que oyó Isabel el saludo de María saltó el niño en su seno, e Isabel se llenó del Espíritu Santo, y clamó con fuerte voz: ¡Bendita tú entre las mujeres y bendito el fruto de tu vientre! ¿De dónde a mí, que la madre de mi Señor venga a mí? Porque apenas sonó la voz de tu salutación en mis oídos ha saltado de gozo el niño en mi seno. Dichosa tú que has creído, porque se cumplirá lo que se te ha dicho de parte del Señor.</p>\n\n        <hr>\n\n        <p><em>Sagrada Biblia</em>.\n            Eloíno Nácar Fuster y Alberto Colunga.\n            La Editorial Católica: Madrid, 1944\n            <a href=\"https://archive.org/details/SagradaBibliaNacarColunga19441Edicin/\">archive.org</a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_es_joyful_3.html":
/*!***********************************************************!*\
  !*** ./src/js/templates/meditations/med_es_joyful_3.html ***!
  \***********************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">San Lucas 2, 1-7 (Nácar-Colunga)</h1>\n\n        <p>Aconteció, pues, en los días aquellos que salió un edicto de César Augusto para que se empadronase todo el mundo. Fué este empadronamiento anterior al hecho siendo gobernador de Siria Cirino. Iban todos a empadronarse, cada uno en su ciudad. Y subió de Galilea José, de la ciudad de Naret, a Judea, a la ciudad de David, que se llama de Belén, por ser de la casa y de la familia de David, para empadronarse con María su esposa, que estaba encinta. Y estando allí, se cumplieron los días de su parto y dió a luz a su hijo primogénito y le envolvió en pañales y le acostó en un pesebre, por no haber sitio para ellos en el mesón.</p>\n\n        <hr>\n\n        <p><em>Sagrada Biblia</em>.\n            Eloíno Nácar Fuster y Alberto Colunga.\n            La Editorial Católica: Madrid, 1944\n            <a href=\"https://archive.org/details/SagradaBibliaNacarColunga19441Edicin/\">archive.org</a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_es_joyful_4.html":
/*!***********************************************************!*\
  !*** ./src/js/templates/meditations/med_es_joyful_4.html ***!
  \***********************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">San Lucas 2, 25-32 (Nácar-Colunga)</h1>\n\n        <p>Había en Jerusalén un hombre llamado Simeón, que era justo y piadoso y esperaba la consolación de Israel, y el Espíritu Santo estaba en él. 26 Y le había sido revelado por el Espíritu Santo que no vería la muerte antes de ver al Cristo del Señor. 27 Movido del Espíritu vino al templo, y al entrar los padres con el niño Jesús para cumplir lo que prescribe la Ley sobre El, Simeón le tomó en sus brazos (1), y bendi¬ ciendo a Dios, dijo:</p>\n\n        <blockquote>Ahora, Señor, puedes dejar ir a tu siervo<br>\n            en paz según tu palabra;<br>\n            porque han visto mis ojos tu salud,<br>\n            la que has preparado ante la faz de todos los pueblos,<br>\n            luz para iluminación de las gentes,<br>\n            y gloria de tu pueblo Israel.</blockquote>\n\n        <hr>\n\n        <p><em>Sagrada Biblia</em>.\n            Eloíno Nácar Fuster y Alberto Colunga.\n            La Editorial Católica: Madrid, 1944\n            <a href=\"https://archive.org/details/SagradaBibliaNacarColunga19441Edicin/\">archive.org</a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/meditations/med_es_joyful_5.html":
/*!***********************************************************!*\
  !*** ./src/js/templates/meditations/med_es_joyful_5.html ***!
  \***********************************************************/
/***/ ((module) => {

// Module
var code = "<div class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\">Home</span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n\n        <h1 class=\"label\">San Lucas 2, 41-51 (Nácar-Colunga)</h1>\n\n        <p>Sus padres iban cada año a Jerusalén en la fiesta de la Pascua. Y cuando era ya de doce años, al subir sus padres según el rito festivo, al volverse acabados los días, el niño Jesús se quedó en Jerusalén, sin que sus padres lo echasen de ver. Pensando que estaba en la caravana, anduvieron camino de un día. Buscáronle entre los parientes y conocidos, y al no hallarlo, se volvieron a Jerusalén en busca suya. Y aconteció que al cabo de tres días le hallaron en el templo, sentado en medio de los doctores, oyéndolos y preguntándoles. Y cuantos le oían se maravillaban de su inteligencia y de sus respuestas</p>\n\n        <p>Cuando sus padres le vieron se maravillaron, y le dijo su madre: Hijo, ¿por qué nos has hecho así? Mira que tu padre y yo, apenados, te andábamos buscando. Y El les dijo: ¿Y por qué me buscábais? ¿No sabíais que conviene que me ocupe en las cosas de mi Padre? Y ellos no entendieron lo que les decía. Bajó con ellos, y vino a Nazaret, y les estaba sujeto, y su madre conservaba todo esto en su corazón.</p>\n\n        <hr>\n\n        <p><em>Sagrada Biblia</em>.\n            Eloíno Nácar Fuster y Alberto Colunga.\n            La Editorial Católica: Madrid, 1944\n            <a href=\"https://archive.org/details/SagradaBibliaNacarColunga19441Edicin/\">archive.org</a></p>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/partials/header.html":
/*!***********************************************!*\
  !*** ./src/js/templates/partials/header.html ***!
  \***********************************************/
/***/ ((module) => {

// Module
var code = "<header class=\"header\">\n    <h1 class=\"sr-only\"><hro-localize>Holy Rosary Online</hro-localize></h1>\n\n    <nav>\n        <ul>\n            <li>\n                <a href=\"/about\" data-navigo title=\"About\">\n                    <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M10.5 7.125C10.5 6.50625 11.0063 6 11.625 6H12.375C12.9938 6 13.5 6.50625 13.5 7.125V7.875C13.5 8.49375 12.9938 9 12.375 9H11.625C11.0063 9 10.5 8.49375 10.5 7.875V7.125Z\"/>\n                        <path d=\"M15 18H9V16.5H10.5V12H9V10.5H13.5V16.5H15V18Z\"/>\n                        <path d=\"M12 0C5.37225 0 0 5.37225 0 12C0 18.6278 5.37225 24 12 24C18.6278 24 24 18.6278 24 12C24 5.37225 18.6278 0 12 0ZM12 21.75C6.615 21.75 2.25 17.385 2.25 12C2.25 6.615 6.615 2.25 12 2.25C17.385 2.25 21.75 6.615 21.75 12C21.75 17.385 17.385 21.75 12 21.75Z\"/>\n                    </svg>\n                    <span class=\"sr-only\"><hro-localize>About</hro-localize></span>\n                </a>\n            </li>\n            <li>\n                <a href=\"/settings\" data-navigo title=\"Settings\">\n                    <svg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" xmlns=\"http://www.w3.org/2000/svg\">\n                        <path d=\"M22.2469 14.8263C20.9416 12.5656 21.7268 9.66888 24 8.35192L21.555 4.11726C20.8569 4.52697 20.0444 4.76175 19.1776 4.76175C16.5647 4.76175 14.447 2.63004 14.447 0H9.55771C9.56393 0.811635 9.3618 1.63493 8.92721 2.38671C7.62191 4.64747 4.72055 5.41635 2.44424 4.1056L0 8.34025C0.703573 8.74063 1.31308 9.32603 1.7461 10.077C3.04908 12.3339 2.26854 15.2259 0.00388714 16.5445L2.4489 20.7791C3.1447 20.3733 3.95322 20.1416 4.81539 20.1416C7.41978 20.1416 9.53205 22.2601 9.54527 24.8777H14.4345C14.4322 24.0739 14.6359 23.2607 15.065 22.5159C16.368 20.259 19.2623 19.4886 21.5371 20.7908L23.9821 16.5561C23.2832 16.1557 22.6776 15.5719 22.2469 14.8256V14.8263ZM11.9996 17.4766C9.21797 17.4766 6.96265 15.2213 6.96265 12.4396C6.96265 9.658 9.21797 7.40268 11.9996 7.40268C14.7813 7.40268 17.0366 9.658 17.0366 12.4396C17.0366 15.2213 14.7813 17.4766 11.9996 17.4766Z\"/>\n                    </svg>\n                    <span class=\"sr-only\"><hro-localize>Settings</hro-localize></span>\n                </a>\n            </li>\n        </ul>\n    </nav>\n</header>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/js/templates/settings.html":
/*!****************************************!*\
  !*** ./src/js/templates/settings.html ***!
  \****************************************/
/***/ ((module) => {

// Module
var code = "<div id=\"template-settings\" class=\"modal\">\n    <div class=\"modal__inner\">\n        <a href=\"/\" data-navigo class=\"modal__close\">\n            <span class=\"sr-only\"><hro-localize>Home</hro-localize></span>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z\"/></svg>\n        </a>\n        <h1><hro-localize>Settings</hro-localize></h1>\n        <form action=\"\" method=\"post\" id=\"form-settings\">\n            <label for=\"form-settings-language\"><hro-localize>Language</hro-localize></label>\n            <select id=\"form-settings-language\" name=\"language\">\n                <option value=\"EN\">English</option>\n                <option value=\"ES\">Español</option>\n            </select>\n\n            <label for=\"form-settings-mysteries\"><hro-localize>Mysteries</hro-localize></label>\n            <select id=\"form-settings-mysteries\" name=\"mysteries\">\n                <option value=\"byday\" data-hro-localize>By day</option>\n                <option value=\"joyful\" data-hro-localize>Joyful</option>\n                <option value=\"luminous\" data-hro-localize>Luminous</option>\n                <option value=\"sorrowful\" data-hro-localize>Sorrowful</option>\n                <option value=\"glorious\" data-hro-localize>Glorious</option>\n            </select>\n\n            <label for=\"form-settings-rosary-language\"><hro-localize>Rosary Language</hro-localize></label>\n            <select id=\"form-settings-rosary-language\" name=\"rosary-language\">\n                <option value=\"EN\">English</option>\n                <option value=\"EN_TRAD\">English - Traditional</option>\n                <option value=\"LA\" data-hro-localize>Latin</option>\n                <option value=\"ES\">Español</option>\n            </select>\n\n            <label for=\"form-settings-rosary-color\">\n                <hro-localize>Rosary Color</hro-localize>\n            </label>\n            <input id=\"form-settings-rosary-color\" value=\"\"\n                name=\"rosary-color\">&nbsp;\n            <button id=\"form-settings-reset-rosary-color\" type=\"button\">\n                <hro-localize>Reset Color</hro-localize>\n            </button>\n\n            <label for=\"form-settings-hide-images\">\n                <hro-localize>Hide the prayer images.</hro-localize>\n            </label>\n            <input type=\"checkbox\" name=\"hide-images\"\n                id=\"form-settings-hide-images\">\n\n            <label for=\"form-settings-hide-prayers\">\n                <hro-localize>Hide the words to the prayers. Click blank space to go to the next prayer.</hro-localize>\n            </label>\n            <input type=\"checkbox\" name=\"hide-prayers\"\n                id=\"form-settings-hide-prayers\">\n\n            <label for=\"form-settings-divine-mercy\">\n                <hro-localize>Pray the Divine Mercy Chaplet instead.</hro-localize>\n            </label>\n            <input id=\"form-settings-divine-mercy\" name=\"divine-mercy\"\n                type=\"checkbox\">\n\n            <input type=\"submit\" value=\"Saved!\">\n\n        </form>\n    </div>\n</div>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/navigo/lib/navigo.min.js":
/*!***********************************************!*\
  !*** ./node_modules/navigo/lib/navigo.min.js ***!
  \***********************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function n(e,n,o){this.root=null,this._routes=[],this._useHash=n,this._hash=void 0===o?"#":o,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!n&&t(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=n?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):n&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function o(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function i(e){return e.replace(/\/$/,"").split("/").length}function s(e,t){return i(t)-i(e)}function r(e,t){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(t){var i=function(e){var t=[];return{regexp:e instanceof RegExp?e:new RegExp(e.replace(n.PARAMETER_REGEXP,function(e,o,i){return t.push(i),n.REPLACE_VARIABLE_REGEXP}).replace(n.WILDCARD_REGEXP,n.REPLACE_WILDCARD)+n.FOLLOWED_BY_SLASH_REGEXP,n.MATCH_REGEXP_FLAGS),paramNames:t}}(o(t.route)),s=i.regexp,r=i.paramNames,a=e.replace(/^\/+/,"/").match(s),h=function(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}(a,r);return!!a&&{match:a,route:t,params:h}}).filter(function(e){return e})}(e,t)[0]||!1}function a(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),i=o(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:i}function h(e,n,o){var i,s=function(e){return e.split(/\?(.*)?$/)[0]};return void 0===o&&(o="#"),t()&&!n?s(e).split(o)[0]:(i=e.split(o)).length>1?s(i[1]):s(i[0])}function u(t,n,o){if(n&&"object"===(void 0===n?"undefined":e(n))){if(n.before)return void n.before(function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(t(),n.after&&n.after(o))},o);if(n.after)return t(),void(n.after&&n.after(o))}t()}return n.prototype={helpers:{match:r,root:a,clean:o,getOnlyURL:h},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/")).replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var t=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];if("function"==typeof o[0])this._defaultHandler={handler:o[0],hooks:o[1]};else if(o.length>=2)if("/"===o[0]){var r=o[1];"object"===e(o[1])&&(r=o[1].uses),this._defaultHandler={handler:r,hooks:o[2]}}else this._add(o[0],o[1],o[2]);else"object"===e(o[0])&&Object.keys(o[0]).sort(s).forEach(function(e){t.on(e,o[0][e])});return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var n,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var a=function(e){return e.split(/\?(.*)?$/).slice(1).join("")}(e||this._cLoc()),l=h(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&l===this._lastRouteResolved.url&&a===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=r(l,this._routes))?(this._callLeave(),this._lastRouteResolved={url:l,query:a,hooks:o.route.hooks,params:o.params,name:o.route.name},n=o.route.handler,u(function(){u(function(){o.route.route instanceof RegExp?n.apply(void 0,o.match.slice(1,o.match.length)):n(o.params,a)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===l||"/"===l||l===this._hash||function(e,n,o){if(t()&&!n)return!1;if(!e.match(o))return!1;var i=e.split(o);return i.length<2||""===i[1]}(l,this._useHash,this._hash))?(u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(a)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(a)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){if((n.ctrlKey||n.metaKey)&&"a"==n.target.tagName.toLowerCase())return!1;var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e)for(i in n=o.route,t)n=n.toString().replace(":"+i,t[i]);return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,this._historyAPIUpdateMethod=e?"replaceState":"pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return void 0===e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){t()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof t&&(t=encodeURI(t)),this._routes.push("object"===(void 0===n?"undefined":e(n))?{route:t,handler:n.uses,name:n.as,hooks:o||n.hooks}:{route:t,handler:n,hooks:o}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=a(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if("undefined"!=typeof window&&"onhashchange"in window)window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;(o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)})()}},_cLoc:function(){return"undefined"!=typeof window?void 0!==window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:o(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){var e=this._lastRouteResolved;e&&e.hooks&&e.hooks.leave&&e.hooks.leave(e.params)}},n.PARAMETER_REGEXP=/([:*])(\w+)/g,n.WILDCARD_REGEXP=/\*/g,n.REPLACE_VARIABLE_REGEXP="([^/]+)",n.REPLACE_WILDCARD="(?:.*)",n.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",n.MATCH_REGEXP_FLAGS="",n});
//# sourceMappingURL=navigo.min.js.map


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrosary"] = self["webpackChunkrosary"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/sass/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;