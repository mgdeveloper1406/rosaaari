import store from '../store';
import { getMysteriesForCurrDay } from '../utils';

export default function SettingsJS() {
    updateFields();

    $('#form-settings').change(function(event) {
        $(this).find('input[type="submit"').val('Save Changes');
    });    

    $('#form-settings').submit(function(event) {
        event.preventDefault();

        var fields = $(this).serializeArray();
        var hidePrayersCheckoxExists = false;

        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];

            if(field['name'] === 'mysteries') {
                if(
                    field['value'] === 'joyful' ||
                    field['value'] === 'luminous' ||
                    field['value'] === 'sorrowful' ||
                    field['value'] === 'glorious'
                ) {
                    store.settings.mysteries = field['value'];
                    localStorage.setItem('mysteries', field['value']);
                }

                if(field['value'] === 'byday') {
                    store.settings.mysteries = getMysteriesForCurrDay();
                    localStorage.setItem('mysteries', '');
                }
            }

            if(field['name'] === 'rosary-language') {
                if(field['value'] === 'EN' || field['value'] === 'EN_TRAD' ||
                    field['value'] === 'LA') {

                    store.settings.rosaryLanguage = field['value'];
                    localStorage.setItem('rosaryLanguage', field['value']);
                    
                }
            }

            if(field['name'] === 'hide-prayers') {
                store.settings.hidePrayers = true;
                localStorage.setItem('hidePrayers', true);
                hidePrayersCheckoxExists = true;
            }

            if(field['name'] === 'another-devotion') {
                if(field['value'] === 'none' || field['value'] === 'divine-mercy-chaplet') {

                    store.settings.anotherDevotion = field['value'];
                    localStorage.setItem('anotherDevotion', field['value']);
                    
                }
            }
        }

        // Unchecked checkboxes don't show up in the form data.
        if(!hidePrayersCheckoxExists) {
            store.settings.hidePrayers = false;
            localStorage.setItem('hidePrayers', false);
        }

        $(this).find('input[type="submit"').val('Saved!');
    });

    function updateFields() {
        updateRosaryLanguage();
        updateHidePrayers();
        updateMysteries();
        updateAnotherDevotion();
    }

    function updateRosaryLanguage() {
        $('#form-settings-rosary-language')
            .find('option[value="'+store.settings.rosaryLanguage+'"]')
            .attr('selected', 'selected');
    }

    function updateHidePrayers() {
        $('#form-settings-hide-prayers').attr('checked', store.settings.hidePrayers)
    }

    function updateMysteries() {
        $('#form-settings-mysteries')
            .find('option[value="'+localStorage.getItem('mysteries')+'"]')
            .attr('selected', 'selected');
    }

    function updateAnotherDevotion() {
        $('#form-settings-another-devotion')
            .find('option[value="'+store.settings.anotherDevotion+'"]')
            .attr('selected', 'selected');
    }
};