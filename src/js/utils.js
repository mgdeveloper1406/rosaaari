import store from './store';

export const getMysteriesForCurrDay = function() {
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

// Source: https://stackoverflow.com/questions/10240110/how-do-you-cache-an-image-in-javascript
export const preloadImages = function(array) {
    if (!window.preloadImagesList) {
        window.preloadImagesList = [];
    }
    var list = window.preloadImagesList;
    for (var i = 0; i < array.length; i++) {
        if(window.preloadImagesList.indexOf(array[i]) !== -1)
            return;
        window.preloadImagesList.push(array[i]);
        var img = new Image();
        img.src = array[i];
    }
};

// Localize. We either surround the text in the <hro-localize> tag, or when that's not
// possible, as in, for some reason, select options, then we put the data-hro-localize
// attribute on the element, with it not set to equal anything
export const hroLocalize = function() {
    $('hro-localize, [data-hro-localize]').text(function(idx, text) {
        if(store.settings.language === 'ES') {
            if(store.localization[store.settings.language][text]) {
                text = store.localization[store.settings.language][text];
            }
        }
        return text;
    });

    // quick fix
    $('a[href^="/med_en"').each(function(idx, el) {
        if(store.settings.language === 'ES') {
            $(this).attr('href', $(this).attr('href').replace('/med_en', '/med_es'));
        }
    });
};