'use strict';

function ColorCounters () {
    var counterList = {
        blue: 0,
        red: 0,
        green: 0
    },
    listeners = {
        increase: []
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
        triggerEvent('increase', color);
    };

    this.on = function (eventName, callback) {
        if (!listeners.hasOwnProperty(eventName)) {
            listeners[eventName] = [];
        }       
        listeners[eventName].push(callback);
    };

    function triggerEvent (eventName, args) {
        if (listeners.hasOwnProperty(eventName)) {                
            listeners[eventName].forEach(function (callback) {
                callback(args);
            });         
        }                           
    };
}