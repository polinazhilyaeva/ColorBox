'use strict';

function ColorPickersView (_colorCounters) {
    var colorCounters = _colorCounters;

    this.render = function () {
        var container = document.getElementById('colors'),
            colors = colorCounters.getCounterList(),
            eventListenerColor,
            pickersContainer,
            button, color;

        container.innerHTML = colorPickersTpl;
        pickersContainer = document.getElementById('color-pickers');

        for (color in colors) {
            pickersContainer.innerHTML += colorPickerTpl.replace(/:color/g, color);
        }

        for (color in colors) {
            button = container.querySelector('button[name="' + color + '"]');
            eventListenerColor = eventListener(color);
            button.addEventListener('click', eventListenerColor, false);
        }
    };

    function eventListener (color) {
        return function () {
            var colorBoxView = new ColorBoxView(color),
                colorCountersView = new ColorCountersView(colorCounters);

            colorCounters.addClick(color);
            colorCountersView.render();
            colorBoxView.render();
        };
    }
}