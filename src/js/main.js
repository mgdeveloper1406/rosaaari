import Navigo from 'navigo';
import renderView from './renderView';
import store from './store';
import HomeJS from './page-scripts/HomeJS';
import SettingsJS from './page-scripts/SettingsJS';
import ArtworkJS from './page-scripts/ArtworkJS';

// Comment out during development
/* if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' });
}; */

// Fix any legacy rosary language settings
if(store.settings.rosaryLanguage !== 'ES' || store.settings.rosaryLanguage !== 'EN' ||
    store.settings.rosaryLanguage !== 'LA') {
    store.settings.rosaryLanguage = 'EN';
}

$( document ).ready(function() {
    window.nvgo_root = window.location.hostname === 'holyrosaryonline.com' ? 'https://holyrosaryonline.com' : 'http://'+window.location.host;
    window.nvgo_useHash = false; // Defaults to: false
    window.nvgo_hash = '#!'; // Defaults to: '#'
    window.nvgo_router = new Navigo(nvgo_root, nvgo_useHash, nvgo_hash);
    window.nvgo_router
    .on({
        'settings': function () {
            renderView('/settings');
            SettingsJS();
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'about': function () {
            renderView('/about');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'artwork': function () {
            renderView('/artwork');
            ArtworkJS();
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_joyful_1': function () {
            renderView('/med_en_joyful_1');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_joyful_2': function () {
            renderView('/med_en_joyful_2');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_joyful_3': function () {
            renderView('/med_en_joyful_3');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_joyful_4': function () {
            renderView('/med_en_joyful_4');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_joyful_5': function () {
            renderView('/med_en_joyful_5');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_luminous_1': function () {
            renderView('/med_en_luminous_1');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_luminous_2': function () {
            renderView('/med_en_luminous_2');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_luminous_3': function () {
            renderView('/med_en_luminous_3');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_luminous_4': function () {
            renderView('/med_en_luminous_4');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_luminous_5': function () {
            renderView('/med_en_luminous_5');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_sorrowful_1': function () {
            renderView('/med_en_sorrowful_1');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_sorrowful_2': function () {
            renderView('/med_en_sorrowful_2');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_sorrowful_3': function () {
            renderView('/med_en_sorrowful_3');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_sorrowful_4': function () {
            renderView('/med_en_sorrowful_4');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_sorrowful_5': function () {
            renderView('/med_en_sorrowful_5');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_glorious_1': function () {
            renderView('/med_en_glorious_1');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_glorious_2': function () {
            renderView('/med_en_glorious_2');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_glorious_3': function () {
            renderView('/med_en_glorious_3');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_glorious_4': function () {
            renderView('/med_en_glorious_4');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_en_glorious_5': function () {
            renderView('/med_en_glorious_5');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },

        // SPANISH
        'med_es_joyful_1': function () {
            renderView('/med_es_joyful_1');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_es_joyful_2': function () {
            renderView('/med_es_joyful_2');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_es_joyful_3': function () {
            renderView('/med_es_joyful_3');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_es_joyful_4': function () {
            renderView('/med_es_joyful_4');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_es_joyful_5': function () {
            renderView('/med_es_joyful_5');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_es_glorious_1': function () {
            renderView('/med_es_glorious_1');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_es_glorious_2': function () {
            renderView('/med_es_glorious_2');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_es_glorious_3': function () {
            renderView('/med_es_glorious_3');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_es_glorious_4': function () {
            renderView('/med_es_glorious_4');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
        'med_es_glorious_5': function () {
            renderView('/med_es_glorious_5');
            window.nvgo_router.updatePageLinks();
            hro_localize();
        },
    })
    .resolve();

    // Seems for home and 404, we have to do it this way :(
    window.nvgo_router.on('/', function () {
        renderView('/');
        HomeJS();
        window.nvgo_router.updatePageLinks();
        hro_localize();
    }).resolve();

    window.nvgo_router.notFound(function () {
        renderView('404');
        window.nvgo_router.updatePageLinks();
        hro_localize();
    }).resolve();

    // Localize. We either surround the text in the <hro-localize> tag, or when that's not
    // possible, as in, for some reason, select options, then we put the data-hro-localize
    // attribute on the element, with it not set to equal anything
    function hro_localize() {
        $('hro-localize, [data-hro-localize]').text(function(idx, text) {
            if(store.localization.ES[text]) {
                text = store.localization.ES[text];
            }
            return text;
        });
    }
});