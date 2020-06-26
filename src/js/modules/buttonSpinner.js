var buttonSpinner = (function(spinner) {

    spinner.show = function(wrapper) {
        if (!wrapper) return;
        
        var _spinner = document.createElement('div');
        _spinner.classList.add('btn-spinner');
        _spinner.classList.add('d-flex');
        _spinner.classList.add('align-items-center');
        _spinner.innerHTML = ' \
            <svg class="mr-2 spinner" width="20px" height="20px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"> \
                <circle class="path" stroke="#FFF" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle> \
            </svg> \
        ';
        wrapper.classList.add('disabled');
        wrapper.classList.add('pr-4');
        wrapper.insertBefore(_spinner, wrapper.querySelector('span'));
    };

    spinner.hide = function(wrapper) {
        var svgEl = wrapper.querySelector('.btn-spinner');
        if (!wrapper || !svgEl) return;

        wrapper.classList.remove('pr-4');
        wrapper.classList.remove('disabled');
        wrapper.removeChild(svgEl);
    };

    return spinner;
}(buttonSpinner || {}));