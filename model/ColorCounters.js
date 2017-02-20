'use strict';

function ColorCounters () {
    var counterList = {
        blue: 0,
        red: 0,
        green: 0
    };

    this.toJSON = function () {
        var json = {},
            color;

        for (color in counterList) {
            json[color] = counterList[color];
        }

        return json;
    };
    
    this.increaseCounter = function (color) {
        counterList[color]++;
    };
}