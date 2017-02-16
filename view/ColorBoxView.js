'use strict';

function ColorBoxView (color) {
    this.render = function () {
        var colorBoxContainer = document.getElementById('target'),
            html = colorBoxTpl.replace(':color', color);
            
        colorBoxContainer.innerHTML = html;
    };
}