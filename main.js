'use strict';

var colorCounters = new ColorCounters(),
    colorPickersView = new ColorPickersView(),
    colorBoxView = new ColorBoxView(),
    colorCountersView = new ColorCountersView();

document.addEventListener('DOMContentLoaded', function () {
    colorBoxView.render('default');
    colorCountersView.render(colorCounters);
    colorPickersView.render(colorCounters, colorBoxView, colorCountersView);
}, false);