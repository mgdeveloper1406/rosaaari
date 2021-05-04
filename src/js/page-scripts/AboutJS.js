import readme from '../../../README.md';
import readme_es from '../../../README_es.md';
import store from '../store';


export default function ArtworkJS() {
    if(store.settings.language === 'ES') {
        $('#about-content').append(readme_es);
    } else {
        $('#about-content').append(readme);
    }
}