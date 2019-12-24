import store from '../store';

export default function HomeJS() {
    if(store.settings.hidePrayers) {
        $('.prayers').css({display: 'none'})
    }
    // Add index data to each bead, main loop and intro separated
    $('.rosary-main .bead').each(function(idx, el) {
        // index - 1 because medallion is actually second bead, the one before
        // it being an unclickable filler bead.
        $(this).data('bead-idx', idx-1);
    });
    $('.rosary-intro .bead').each(function(idx, el) {
        $(this).data('bead-idx', idx);
        $('.bead').removeClass('bead--selected');
        $(this).addClass('bead--selected');
    });
    // Set initial rotation variables
    var turnIncrement = 1/65;
    var lastRotation = 0;
    var lastBeadIdx = 0;
    // Rotate on click
    $('.rosary-main button.bead').click(function(event) {
        var currBeadIdx = $(this).data('bead-idx');
        rotateRosary(currBeadIdx);
        setBeadSelectedClass($(this));
        // reset intro drag
        $('.rosary-wrapper-wrapper').css({
            transform: getRosaryWrapperTransformRotation()+' translateY(0)',
            transition: 'transform .3s ease'
        });
        updatePrayers($(this).attr('id'));
        localStorage.setItem('beadId', $(this).attr('id'))
        centerPrayers();
    });

    // Rotate back to beginning if necessary, then pull up/down to selected bead
    $('.rosary-intro button.bead').click(function(event) {
        rotateRosary(0);
        var currBeadIdx = $(this).data('bead-idx');
        var dragDist = ((currBeadIdx - 10)*42);
        $('.rosary-wrapper-wrapper').css({
            transform: getRosaryWrapperTransformRotation()+' translateY('+dragDist+'px)',
            transition: 'transform .3s ease'
        });
        setBeadSelectedClass($(this));
        updatePrayers($(this).attr('id'));
        localStorage.setItem('beadId', $(this).attr('id'));
        leftAlignPrayers();
    });

    // Next Prayer button
    $('#next-prayer, #next-prayer-btn-within-beads').click(nextPrayer);

    // Activate first click
    var savedBeadId = localStorage.getItem('beadId');
    if(savedBeadId) {
        $('#'+savedBeadId).click();
    } else {
        $('.bead--crucifix').click();
    }

    function rotateRosary(currBeadIdx) {
        var rotationAmount = (currBeadIdx - lastBeadIdx)*turnIncrement;
        if(rotationAmount < -.5) {
            rotationAmount = 1 + rotationAmount;
        } else if(rotationAmount > .5) {
            rotationAmount = -(1 - rotationAmount);
        }
        var rotation = rotationAmount+lastRotation;
        $('.rosary-wrapper').css({
            transition: 'transform .3s ease',
            transform: 'rotate(' + -(rotation) + 'turn)'
        });
        lastRotation = rotation;
        lastBeadIdx = currBeadIdx;
    }
    function setBeadSelectedClass($bead) {
        $('.bead').removeClass('bead--selected');
        $bead.addClass('bead--selected');
    }
    function updatePrayers(beadId) {
        var prayers = [];
        var language = store.settings.rosaryLanguage;
        var mysteries = store.settings.mysteries;
        if(beadId === 'crucifix') {
            prayers = [
                {
                    title: store.prayers.signOfTheCross[language].title,
                    text: store.prayers.signOfTheCross[language].text
                },
                {
                    title: store.prayers.apostlesCreed[language].title,
                    text: store.prayers.apostlesCreed[language].text
                }
            ];
        } else if(beadId.slice(0, 9) === 'intro-hai' || beadId.slice(0, 9) === 'hail-mary') {
            prayers = [
                {
                    title: store.prayers.hailMary[language].title,
                    text: store.prayers.hailMary[language].text
                }
            ];
        } else if(beadId === 'intro-our-father-1') {
            prayers = [
                {
                    title: store.prayers.ourFather[language].title,
                    text: store.prayers.ourFather[language].text
                }
            ];
        } else if(beadId === 'intro-our-father-2') {
            prayers = [
                {
                    title: store.prayers.gloryBe[language].title,
                    text: store.prayers.gloryBe[language].text
                },
                {
                    title: store.prayers.fatimaPrayer[language].title,
                    text: store.prayers.fatimaPrayer[language].text
                },
                {
                    title: store.prayers.mysteries[mysteries][language][0].title,
                    text: store.prayers.mysteries[mysteries][language][0].text
                },
                {
                    title: store.prayers.ourFather[language].title,
                    text: store.prayers.ourFather[language].text
                }
            ];
        } else if(beadId === 'our-father-2') {
            prayers = [
                {
                    title: store.prayers.gloryBe[language].title,
                    text: store.prayers.gloryBe[language].text
                },
                {
                    title: store.prayers.fatimaPrayer[language].title,
                    text: store.prayers.fatimaPrayer[language].text
                },
                {
                    title: store.prayers.mysteries[mysteries][language][1].title,
                    text: store.prayers.mysteries[mysteries][language][1].text
                },
                {
                    title: store.prayers.ourFather[language].title,
                    text: store.prayers.ourFather[language].text
                }
            ];
        } else if(beadId === 'our-father-3') {
            prayers = [
                {
                    title: store.prayers.gloryBe[language].title,
                    text: store.prayers.gloryBe[language].text
                },
                {
                    title: store.prayers.fatimaPrayer[language].title,
                    text: store.prayers.fatimaPrayer[language].text
                },
                {
                    title: store.prayers.mysteries[mysteries][language][2].title,
                    text: store.prayers.mysteries[mysteries][language][2].text
                },
                {
                    title: store.prayers.ourFather[language].title,
                    text: store.prayers.ourFather[language].text
                }
            ];
        } else if(beadId === 'our-father-4') {
            prayers = [
                {
                    title: store.prayers.gloryBe[language].title,
                    text: store.prayers.gloryBe[language].text
                },
                {
                    title: store.prayers.fatimaPrayer[language].title,
                    text: store.prayers.fatimaPrayer[language].text
                },
                {
                    title: store.prayers.mysteries[mysteries][language][3].title,
                    text: store.prayers.mysteries[mysteries][language][3].text
                },
                {
                    title: store.prayers.ourFather[language].title,
                    text: store.prayers.ourFather[language].text
                }
            ];
        } else if(beadId === 'our-father-5') {
            prayers = [
                {
                    title: store.prayers.gloryBe[language].title,
                    text: store.prayers.gloryBe[language].text
                },
                {
                    title: store.prayers.fatimaPrayer[language].title,
                    text: store.prayers.fatimaPrayer[language].text
                },
                {
                    title: store.prayers.mysteries[mysteries][language][4].title,
                    text: store.prayers.mysteries[mysteries][language][4].text
                },
                {
                    title: store.prayers.ourFather[language].title,
                    text: store.prayers.ourFather[language].text
                }
            ];
        } else if(beadId === 'medallion') {
            prayers = [
                {
                    title: store.prayers.gloryBe[language].title,
                    text: store.prayers.gloryBe[language].text
                },
                {
                    title: store.prayers.fatimaPrayer[language].title,
                    text: store.prayers.fatimaPrayer[language].text
                },
                {
                    title: store.prayers.hailHolyQueen[language].title,
                    text: store.prayers.hailHolyQueen[language].text
                },
                {
                    title: store.prayers.prayerAfterRosary[language].title,
                    text: store.prayers.prayerAfterRosary[language].text
                },
                {
                    title: store.prayers.signOfTheCross[language].title,
                    text: store.prayers.signOfTheCross[language].text
                }
            ];
        }
        var prayersHTML = prayers.reduce(function(output, prayer, idx, srcArr) {
            if(prayer.title) {
                output += '<h2 class="label">'+prayer.title+'</h2>';
            }
            if(prayer.text) {
                output += '<p>'+prayer.text+'</p>';
            }
            return output;
        }, '');
        $('#prayers-content').html(prayersHTML);
        window.nvgo_router.updatePageLinks();
    }

    function centerPrayers() {
        $('.prayers').addClass('prayers--centered');
    }

    function leftAlignPrayers() {
        $('.prayers').removeClass('prayers--centered');
    }

    function getRosaryWrapperTransformRotation() {
        return window.matchMedia('(min-width: 1000px)').matches ? 'rotate(-45deg)' : ''
    }

    function nextPrayer() {
        if(
            $(this).attr('id') === 'next-prayer' &&
            !store.settings.hidePrayers
        ) {
            return;
        }
        if($('button.bead--selected').attr('id') === 'intro-our-father-2') {
            $('#hail-mary-1-01').click();
            return;
        }

        var $next = $('button.bead--selected')
            .parent()
            .next();

        if(!$next.hasClass('bead-wrapper--filler') && $next.length) {
            $next.find('.bead').click();
        } else if($next.next().length) {
            $next.next().find('.bead').click();
        } else {
            $('.bead--medallion').click();
        }
    }
};