'use strict';

function ColorPickersView (_colorCounters) {
    var colorCounters = _colorCounters;

    this.render = function () {
        var container = document.querySelector('#colors'),
            colors = colorCounters.toJSON(),
            html = '',
            eventListenerColor,
            pickersContainer,
            button, 
            color;

        container.innerHTML = colorPickersTpl;
        pickersContainer = container.querySelector('#color-pickers');

        for (color in colors) {
            html += colorPickerTpl.replace(/:color/g, color); 
        }

        pickersContainer.innerHTML = html;

        for (color in colors) {
            button = container.querySelector('button[name="' + color + '"]');
            eventListenerColor = eventListener(color);
            button.addEventListener('click', eventListenerColor, false);
        }
    };

    function eventListener (color) {
        return function () {
            colorCounters.increaseCounter(color);
        };
    }
}