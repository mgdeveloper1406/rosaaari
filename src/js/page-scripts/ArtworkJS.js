// Default is reserved in js I think
import general from '../../../images/default/default.md';
import agony from '../../../images/default/agony.md';
import annunciation from '../../../images/default/annunciation.md';
import ascension from '../../../images/default/ascension.md';
import assumption from '../../../images/default/assumption.md';
import baptism from '../../../images/default/baptism.md';
import cana from '../../../images/default/cana.md';
import coronation from '../../../images/default/coronation.md';
import cross from '../../../images/default/cross.md';
import crucifixion from '../../../images/default/crucifixion.md';
import descent from '../../../images/default/descent.md';
import eucharist from '../../../images/default/eucharist.md';
import finding from '../../../images/default/finding.md';
import nativity from '../../../images/default/nativity.md';
import presentation from '../../../images/default/presentation.md';
import proclamation from '../../../images/default/proclamation.md';
import resurrection from '../../../images/default/resurrection.md';
import scourging from '../../../images/default/scourging.md';
import thorns from '../../../images/default/thorns.md';
import transfiguration from '../../../images/default/transfiguration.md';
import visitation from '../../../images/default/visitation.md';

export default function ArtworkJS() {
    appendHTML('#artwork-general', general, 'default');
    appendHTML('#artwork-joyful', annunciation, 'annunciation');
    appendHTML('#artwork-joyful', visitation, 'visitation');
    appendHTML('#artwork-joyful', nativity, 'nativity');
    appendHTML('#artwork-joyful', presentation, 'presentation');
    appendHTML('#artwork-joyful', finding, 'finding');
    appendHTML('#artwork-sorrowful', agony, 'agony');
    appendHTML('#artwork-sorrowful', scourging, 'scourging');
    appendHTML('#artwork-sorrowful', thorns, 'thorns');
    appendHTML('#artwork-sorrowful', cross, 'cross');
    appendHTML('#artwork-sorrowful', crucifixion, 'crucifixion');
    appendHTML('#artwork-glorious', resurrection, 'resurrection');
    appendHTML('#artwork-glorious', ascension, 'ascension');
    appendHTML('#artwork-glorious', descent, 'descent');
    appendHTML('#artwork-glorious', assumption, 'assumption');
    appendHTML('#artwork-glorious', coronation, 'coronation');
    appendHTML('#artwork-luminous', baptism, 'baptism');
    appendHTML('#artwork-luminous', cana, 'cana');
    appendHTML('#artwork-luminous', proclamation, 'proclamation');
    appendHTML('#artwork-luminous', transfiguration, 'transfiguration');
    appendHTML('#artwork-luminous', eucharist, 'eucharist');

    function appendHTML(el, copy, img) {
        $(el).append('<div id="img-copy'+img+'">'+copy+'</div>');
        var title = $('#img-copy'+img).find('h1').html();
        $('#img-copy'+img).find('h1').remove();
        $('#img-copy'+img).prepend('<h3>&ldquo;'+title+'&rdquo;</h3>');
        var url = document.createElement('a');
        url.href = $('#img-copy'+img).find('a').attr('href');
        $('#img-copy'+img).find('a').text(url.hostname+' ...');
        $('<img src="/images/default/'+img+'.jpg" alt="Image of this mystery"'+
            'style="width: 100%; height: auto;">')
            .insertAfter('#img-copy'+img+' > h3');

    }
}