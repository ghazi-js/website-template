// =========================================================
// Gulp Task: clean
// Description: deletes dist folder
// npm install --save-del del gulp-load-plugins
// =========================================================
var config              = require('../config.js'),
    del                 = require('del');

module.exports = function(gulp, plugins) {
    return function (cb) {
        return del(config.clean.folders, cb);
    };
};