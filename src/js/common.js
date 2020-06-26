"use-strict";

/** Modal Handler */
initAnimation('.animate-element');

window.addEventListener('load', function () {
    
});

function initAnimation(selector) {
    // Initialize Animation.js
    new Animate({
        target: selector,
        reverse: false,
        remove: false,
        removeAnimations: false,
        offset: 0.4,
    }).init();
}

// TODO: Add your common utilities functions