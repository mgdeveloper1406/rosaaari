import Home from './templates/home.html';
import Settings from './templates/settings.html';
import About from './templates/about.html';
import Artwork from './templates/artwork.html';
import NotFound from './templates/404.html';
import med_en_joyful_1 from './templates/meditations/med_en_joyful_1.html';
import med_en_joyful_2 from './templates/meditations/med_en_joyful_2.html';
import med_en_joyful_3 from './templates/meditations/med_en_joyful_3.html';
import med_en_joyful_4 from './templates/meditations/med_en_joyful_4.html';
import med_en_joyful_5 from './templates/meditations/med_en_joyful_5.html';
import med_en_sorrowful_1 from './templates/meditations/med_en_sorrowful_1.html';
import med_en_sorrowful_2 from './templates/meditations/med_en_sorrowful_2.html';
import med_en_sorrowful_3 from './templates/meditations/med_en_sorrowful_3.html';
import med_en_sorrowful_4 from './templates/meditations/med_en_sorrowful_4.html';
import med_en_sorrowful_5 from './templates/meditations/med_en_sorrowful_5.html';
import med_en_glorious_1 from './templates/meditations/med_en_glorious_1.html';
import med_en_glorious_2 from './templates/meditations/med_en_glorious_2.html';
import med_en_glorious_3 from './templates/meditations/med_en_glorious_3.html';
import med_en_glorious_4 from './templates/meditations/med_en_glorious_4.html';
import med_en_glorious_5 from './templates/meditations/med_en_glorious_5.html';
import med_en_luminous_1 from './templates/meditations/med_en_luminous_1.html';
import med_en_luminous_2 from './templates/meditations/med_en_luminous_2.html';
import med_en_luminous_3 from './templates/meditations/med_en_luminous_3.html';
import med_en_luminous_4 from './templates/meditations/med_en_luminous_4.html';
import med_en_luminous_5 from './templates/meditations/med_en_luminous_5.html';
import header from './templates/partials/header.html';

export default function renderView(pathname, params) {
    $('div#app').html(' ');
    // Remove our crazy mystery image
    $('body > .prayer__image').remove();

    switch (pathname) {
        case '/':
            $('body').addClass('fixed');
            $('div#app').append(header+Home);
            break;

        case '/settings':
            $('body').removeClass('fixed');
            $('div#app').append(Settings);
            break;

        case '/about':
            $('body').removeClass('fixed');
            $('div#app').append(About);
            break;

        case '/artwork':
            $('body').removeClass('fixed');
            $('div#app').append(Artwork);
            break;

        case '/med_en_joyful_1':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_joyful_1);
            break;

        case '/med_en_joyful_2':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_joyful_2);
            break;

        case '/med_en_joyful_3':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_joyful_3);
            break;

        case '/med_en_joyful_4':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_joyful_4);
            break;

        case '/med_en_joyful_5':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_joyful_5);
            break;

        case '/med_en_luminous_1':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_luminous_1);
            break;

        case '/med_en_luminous_2':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_luminous_2);
            break;

        case '/med_en_luminous_3':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_luminous_3);
            break;

        case '/med_en_luminous_4':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_luminous_4);
            break;

        case '/med_en_luminous_5':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_luminous_5);
            break;

        case '/med_en_sorrowful_1':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_sorrowful_1);
            break;

        case '/med_en_sorrowful_2':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_sorrowful_2);
            break;

        case '/med_en_sorrowful_3':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_sorrowful_3);
            break;

        case '/med_en_sorrowful_4':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_sorrowful_4);
            break;

        case '/med_en_sorrowful_5':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_sorrowful_5);
            break;

        case '/med_en_glorious_1':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_glorious_1);
            break;

        case '/med_en_glorious_2':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_glorious_2);
            break;

        case '/med_en_glorious_3':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_glorious_3);
            break;

        case '/med_en_glorious_4':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_glorious_4);
            break;

        case '/med_en_glorious_5':
            $('body').removeClass('fixed');
            $('div#app').append(med_en_glorious_5);
            break;

        case '404':
            $('body').removeClass('fixed');
            $('div#app').append(NotFound);
            break;

        default:
            $('body').removeClass('fixed');
            $('div#app').append(NotFound);
    }
}