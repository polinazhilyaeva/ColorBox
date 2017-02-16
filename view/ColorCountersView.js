'use strict';

function ColorCountersView (colorCounters) {
    this.render = function () {
        var container = document.getElementById('counters-container'),
            counterList = colorCounters.getCounterList(),
            countersBox,
            html = '',
            color, counter;

        container.innerHTML = colorCountersTpl;
        countersBox = document.getElementById('counters')
        
        for (color in counterList) {
            counter = counterList[color];

            html += colorCounterTpl.replace(':color', color)
                    .replace(':colorCounter', counter);
        }

        countersBox.innerHTML = html;
    };
}