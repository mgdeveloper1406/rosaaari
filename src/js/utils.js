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