'use strict';

var colorCounters = new ColorCounters(),
    colorPickersView = new ColorPickersView(colorCounters),
    colorBoxView = new ColorBoxView('default'),
    colorCountersView = new ColorCountersView(colorCounters);

document.addEventListener('DOMContentLoaded', function () {
    colorBoxView.render();
    colorCountersView.render();
    colorPickersView.render();
}, false);