'use strict';

function ColorPickersView () {
    this.render = function (colorCounters, colorBoxView, colorCountersView) {
        var container = document.getElementById('colors'),
            colors = colorCounters.getList(),
            color;

        container.innerHTML = colorPickersTpl;

        for (color in colors) {
            addListener(color);
        }
    };

    function addListener (color) {
        var query = '#colors button[name="' + color + '"]',
            button = document.querySelector(query);

        button.addEventListener('click', function () {
            colorCounters.addClick(color);
            colorCountersView.render(colorCounters);
            colorBoxView.render(color);
        }, false);
    }
}