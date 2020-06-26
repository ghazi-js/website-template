var customSnackbar = (function(snackbar) {
    snackbar.wrapper = document.querySelector('.ab-snackbar-wrapper');

    snackbar.show = function(message) {
        if (!snackbar.wrapper) return;
        
        var _snackbar = document.createElement('div');
        _snackbar.classList.add('ab-snackbar');
        _snackbar.innerHTML = '<p class="text-white m-0 text-center">'+ message +'</p>';

        // show message when parent gets updated
        new MutationObserver(function () {
            _snackbar.classList.add('d-block');
            setTimeout(function() {
                _snackbar.classList.add('show');
                snackbar.hide(_snackbar, 10);
            }, 100);

            this.disconnect();
        }).observe(snackbar.wrapper, { childList: true });
        
        snackbar.wrapper.appendChild(_snackbar);
    };

    snackbar.hide = function(_el, seconds) {
        setTimeout(function () {
            _el.classList.remove('show');
            setTimeout(function() {
                snackbar.wrapper.removeChild(_el);
            }, 300);
        }, seconds * 1000);
    };

    return snackbar;
}(customSnackbar || {}));