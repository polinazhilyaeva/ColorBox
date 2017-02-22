'use strict';

function ColorBoxView () {
    this.render = function (color) {
        var colorBoxContainer = document.querySelector('#target'),
            html = colorBoxTpl.replace(':color', color);
            
        colorBoxContainer.innerHTML = html;
    };
}