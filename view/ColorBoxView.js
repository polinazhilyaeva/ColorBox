'use strict';

function ColorBoxView (color) {
    this.render = function () {
        var colorBoxContainer = document.querySelector('#target'),
            html = colorBoxTpl.replace(':color', color);
            
        colorBoxContainer.innerHTML = html;
    };
}