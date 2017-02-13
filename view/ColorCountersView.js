'use strict';

function ColorCountersView () {
    this.render = function (colorCounters) {
        var countersContainer = document.getElementById('counters'),
            counterList = colorCounters.getList(),
            html = colorCountersTpl,
            color;
        
        for (color in counterList) {
            var counter = counterList[color],
                toReplace = ':' + color + 'Counter';

            html = html.replace(toReplace, counter);
        }

        countersContainer.innerHTML = html;
    };
}