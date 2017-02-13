'use strict';

function ColorCounters () {
    var counterList = {
        blue: 0,
        red: 0,
        green: 0
    };

    this.getList = function () {
        return counterList;
    };
    
    this.addClick = function (color) {
        counterList[color]++;
    };
}