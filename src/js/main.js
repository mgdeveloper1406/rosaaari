import Navigo from 'navigo';
import renderView from './renderView';
import store from './store';
import HomeJS from './page-scripts/HomeJS';
import SettingsJS from './page-scripts/SettingsJS';
import ArtworkJS from './page-scripts/ArtworkJS';
import AboutJS from './page-scripts/AboutJS';
import { hroLocalize } from './utils';

// Comment out during development
/* if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' });
}; */

// Fix any legacy rosary language settings, namely removes EN_TRAD rosary language
if(store.settings.rosaryLanguage !== 'LA') {
    store.settings.rosaryLanguage = store.settings.language;
    localStorage.setItem('rosaryLanguage', store.settings.language)
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
            hroLocalize();
        },
        'about': function () {
            renderView('/about');
            AboutJS();
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'artwork': function () {
            renderView('/artwork');
            ArtworkJS();
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_joyful_1': function () {
            renderView('/med_en_joyful_1');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_joyful_2': function () {
            renderView('/med_en_joyful_2');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_joyful_3': function () {
            renderView('/med_en_joyful_3');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_joyful_4': function () {
            renderView('/med_en_joyful_4');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_joyful_5': function () {
            renderView('/med_en_joyful_5');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_luminous_1': function () {
            renderView('/med_en_luminous_1');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_luminous_2': function () {
            renderView('/med_en_luminous_2');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_luminous_3': function () {
            renderView('/med_en_luminous_3');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_luminous_4': function () {
            renderView('/med_en_luminous_4');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_luminous_5': function () {
            renderView('/med_en_luminous_5');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_sorrowful_1': function () {
            renderView('/med_en_sorrowful_1');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_sorrowful_2': function () {
            renderView('/med_en_sorrowful_2');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_sorrowful_3': function () {
            renderView('/med_en_sorrowful_3');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_sorrowful_4': function () {
            renderView('/med_en_sorrowful_4');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_sorrowful_5': function () {
            renderView('/med_en_sorrowful_5');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_glorious_1': function () {
            renderView('/med_en_glorious_1');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_glorious_2': function () {
            renderView('/med_en_glorious_2');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_glorious_3': function () {
            renderView('/med_en_glorious_3');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_glorious_4': function () {
            renderView('/med_en_glorious_4');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_en_glorious_5': function () {
            renderView('/med_en_glorious_5');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },

        // SPANISH
        'med_es_joyful_1': function () {
            renderView('/med_es_joyful_1');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_es_joyful_2': function () {
            renderView('/med_es_joyful_2');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_es_joyful_3': function () {
            renderView('/med_es_joyful_3');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_es_joyful_4': function () {
            renderView('/med_es_joyful_4');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_es_joyful_5': function () {
            renderView('/med_es_joyful_5');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_es_glorious_1': function () {
            renderView('/med_es_glorious_1');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_es_glorious_2': function () {
            renderView('/med_es_glorious_2');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_es_glorious_3': function () {
            renderView('/med_es_glorious_3');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_es_glorious_4': function () {
            renderView('/med_es_glorious_4');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
        'med_es_glorious_5': function () {
            renderView('/med_es_glorious_5');
            window.nvgo_router.updatePageLinks();
            hroLocalize();
        },
    })
    .resolve();

    // Seems for home and 404, we have to do it this way :(
    window.nvgo_router.on('/', function () {
        renderView('/');
        HomeJS();
        window.nvgo_router.updatePageLinks();
        hroLocalize();
    }).resolve();

    window.nvgo_router.notFound(function () {
        renderView('404');
        window.nvgo_router.updatePageLinks();
        hroLocalize();
    }).resolve();
});