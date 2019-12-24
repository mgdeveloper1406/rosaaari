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