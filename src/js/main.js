import Navigo from 'navigo';
import renderView from './renderView';
import HomeJS from './page-scripts/HomeJS';
import SettingsJS from './page-scripts/SettingsJS';

// Comment out during development
// if('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js', { scope: '/' });
// };

$( document ).ready(function() {
    window.nvgo_root = window.location.hostname === 'holyrosaryonline.com' ? 'https://holyrosaryonline.com' : 'http://'+window.location.hostname;
    window.nvgo_useHash = false; // Defaults to: false
    window.nvgo_hash = '#!'; // Defaults to: '#'
    window.nvgo_router = new Navigo(nvgo_root, nvgo_useHash, nvgo_hash);
    window.nvgo_router
    .on({
        'settings': function () {
            renderView('/settings');
            SettingsJS();
            window.nvgo_router.updatePageLinks();
        },
        'about': function () {
            renderView('/about');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_joyful_1': function () {
            renderView('/med_en_joyful_1');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_joyful_2': function () {
            renderView('/med_en_joyful_2');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_joyful_3': function () {
            renderView('/med_en_joyful_3');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_joyful_4': function () {
            renderView('/med_en_joyful_4');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_joyful_5': function () {
            renderView('/med_en_joyful_5');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_luminous_1': function () {
            renderView('/med_en_luminous_1');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_luminous_2': function () {
            renderView('/med_en_luminous_2');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_luminous_3': function () {
            renderView('/med_en_luminous_3');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_luminous_4': function () {
            renderView('/med_en_luminous_4');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_luminous_5': function () {
            renderView('/med_en_luminous_5');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_sorrowful_1': function () {
            renderView('/med_en_sorrowful_1');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_sorrowful_2': function () {
            renderView('/med_en_sorrowful_2');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_sorrowful_3': function () {
            renderView('/med_en_sorrowful_3');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_sorrowful_4': function () {
            renderView('/med_en_sorrowful_4');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_sorrowful_5': function () {
            renderView('/med_en_sorrowful_5');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_glorious_1': function () {
            renderView('/med_en_glorious_1');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_glorious_2': function () {
            renderView('/med_en_glorious_2');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_glorious_3': function () {
            renderView('/med_en_glorious_3');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_glorious_4': function () {
            renderView('/med_en_glorious_4');
            window.nvgo_router.updatePageLinks();
        },
        'med_en_glorious_5': function () {
            renderView('/med_en_glorious_5');
            window.nvgo_router.updatePageLinks();
        }
    })
    .resolve();

    // Seems for home and 404, we have to do it this way :(
    window.nvgo_router.on('/', function () {
        renderView('/');
        HomeJS();
        window.nvgo_router.updatePageLinks();
    }).resolve();

    window.nvgo_router.notFound(function () {
        renderView('404');
        window.nvgo_router.updatePageLinks();
    }).resolve();
});