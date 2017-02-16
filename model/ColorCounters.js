'use strict';

function ColorCounters () {
    var counterList = {
        blue: 0,
        red: 0,
        green: 0
    };

    this.getCounterList = function () {
        var list = {},
            color;

        for (color in counterList) {
            list[color] = counterList[color];
        }

        return list;
    };
    
    this.addClick = function (color) {
        counterList[color]++;
    };
}