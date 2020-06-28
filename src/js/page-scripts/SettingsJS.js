import store from '../store';
import { getMysteriesForCurrDay } from '../utils';

export default function SettingsJS() {
    updateFields();

    $('#form-settings-rosary-color').spectrum({
        type: "color",
        showPalette: false,
        showInitial: true,
        showAlpha: false,
        allowEmpty: false,
        change: function(color) {
            $('#form-settings-rosary-color').val(color.toHexString());
            $('#form-settings').submit();
        }
    });

    $('#form-settings-reset-rosary-color').click(function(event) {
        event.preventDefault();
        $('#form-settings-rosary-color').spectrum('set', '#fff4d9');
        $('#form-settings').submit();
    });

    $('#form-settings').change(function(event) {
        //$(this).find('input[type="submit"').val('Save Changes');
        $(this).submit();
    });

    $('#form-settings').submit(function(event) {
        event.preventDefault();

        var fields = $(this).serializeArray();
        var hidePrayersCheckoxExists = false;
        var hideImagesCheckoxExists = false;
        var anotherDevotionCheckoxExists = false;

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

            if(field['name'] === 'rosary-color') {
                store.settings.rosaryColor = field['value'];
                localStorage.setItem('rosaryColor', field['value']);
            }

            if(field['name'] === 'hide-images') {
                store.settings.hideImages = true;
                localStorage.setItem('hideImages', true);
                hideImagesCheckoxExists = true;
            }

            if(field['name'] === 'hide-prayers') {
                store.settings.hidePrayers = true;
                localStorage.setItem('hidePrayers', true);
                hidePrayersCheckoxExists = true;
            }

            if(field['name'] === 'divine-mercy') {
                store.settings.divineMercy = true;
                localStorage.setItem('divineMercy', true);
                anotherDevotionCheckoxExists = true;
            }
        }

        // Unchecked checkboxes don't show up in the form data.
        if(!hideImagesCheckoxExists) {
            store.settings.hideImages = false;
            localStorage.setItem('hideImages', false);
        }
        if(!hidePrayersCheckoxExists) {
            store.settings.hidePrayers = false;
            localStorage.setItem('hidePrayers', false);
        }
        if(!anotherDevotionCheckoxExists) {
            store.settings.divineMercy = false;
            localStorage.setItem('divineMercy', false);
        }
        
        $(this).find('input[type="submit"]').val('Saved!');
    });

    function updateFields() {
        updateRosaryLanguage();
        updateHidePrayers();
        updateHideImages();
        updateMysteries();
        updateDivineMercy();
        updateRosaryColor()
    }

    function updateRosaryLanguage() {
        $('#form-settings-rosary-language')
            .find('option[value="'+store.settings.rosaryLanguage+'"]')
            .attr('selected', 'selected');
    }

    function updateRosaryColor() {
        $('#form-settings-rosary-color').val(store.settings.rosaryColor);
    }

    function updateHideImages() {
        $('#form-settings-hide-images').attr('checked', store.settings.hideImages);
    }

    function updateHidePrayers() {
        $('#form-settings-hide-prayers').attr('checked', store.settings.hidePrayers);
    }

    function updateMysteries() {
        $('#form-settings-mysteries')
            .find('option[value="'+localStorage.getItem('mysteries')+'"]')
            .attr('selected', 'selected');
    }

    function updateDivineMercy() {
        $('#form-settings-divine-mercy').attr('checked', store.settings.divineMercy);
    }
};