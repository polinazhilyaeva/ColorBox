'use strict';

function ColorCountersView (colorCounters) {
    this.render = function () {
        var container = document.querySelector('#counters-container'),
            counterList = colorCounters.toJSON(),
            html = '',
            countersBox,
            color, 
            counter;

        container.innerHTML = colorCountersTpl;
        countersBox = container.querySelector('#counters')
        
        for (color in counterList) {
            counter = counterList[color];

            html += colorCounterTpl.replace(':color', color)
                    .replace(':colorCounter', counter);
        }

        countersBox.innerHTML = html;
    };
}