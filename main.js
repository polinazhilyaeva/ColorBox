'use strict';

var colorCounters = new ColorCounters(),
    colorPickersView = new ColorPickersView(colorCounters),
    colorBoxView = new ColorBoxView(),
    colorCountersView = new ColorCountersView(colorCounters);

document.addEventListener('DOMContentLoaded', function () {
    colorBoxView.render('default');
    colorCountersView.render();
    colorPickersView.render();
    colorCounters.on('increase', colorCountersView.render);
    colorCounters.on('increase', colorBoxView.render);
}, false);