var Modal = (function(modal) {

    modal.opened = false;
    modal._backdrop = document.querySelector('.modal-backdrop');

    modal.open = function (_anchor) {
    
        var _target = document.querySelector(_anchor.dataset.target);
        if (!_target || modal.opened || !modal._backdrop) return;

        modal.opened = true;
        ClassBulk.add(_target, ['show', 'pr-3']);
        modal._backdrop.classList.add('show');
        document.body.classList.add('overflow-h');

        // close event listener
        _target.addEventListener('click', function (e) {
            if (_target == e.target) modal.close();
        });
        // close event listener - Esc key
        window.addEventListener('keyup', function (e) {
            e.which == 27 && modal.close();
        });
    };

    modal.close = function () {
        var _target = document.querySelector('.modal.show');
        if (!_target || !modal.opened || !modal._backdrop) return;

        var iframe = _target.querySelector('iframe');
        var src = iframe.src;
        iframe.src = '';
        setTimeout(function() {
            iframe.src = src;
        }, 1000);

        modal.opened = false;
        ClassBulk.remove(_target, ['show', 'pr-3']);
        modal._backdrop.classList.remove('show');
        document.body.classList.remove('overflow-h');
    }

    return modal;
}(Modal || {}));