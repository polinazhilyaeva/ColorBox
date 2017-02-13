'use strict';

function ColorBoxView () {
    this.render = function (color) {
        var colorBoxContainer = document.getElementById('target'),
            html = colorBoxTpl.replace(':color', color);
            
        colorBoxContainer.innerHTML = html;
    };
}