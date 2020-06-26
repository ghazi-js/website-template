var ClassBulk = (function (classBulk) {

    classBulk.add = function (elem, classList) {
        classListRecursive(elem, classList, 'add');
    };

    classBulk.remove = function (elem, classList) {
        classListRecursive(elem, classList, 'remove');
    };

    /**
     * Recursivly add/remove classList
     * @param { HTML Element } elem
     * @param { Array } classList 
     * @param { String } action - add/remove
     */
    function classListRecursive(elem, classList, action) {
        if (!classList.length) return;
        if (action == 'add')
            elem.classList.add(classList.pop());
        else if (action == 'remove')
            elem.classList.remove(classList.pop());

        return classListRecursive(elem, classList, action);
    }

    return classBulk;
}(ClassBulk || {}));