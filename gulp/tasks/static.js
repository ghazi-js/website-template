// =========================================================
// Gulp Task: static
// Description: Copy assets and statics
// npm install --save-dev
// =========================================================
const config              = require('../config.js');
const merge               = require('merge-stream');

module.exports = function(gulp, plugins) {
    return function() {
        return merge([
            gulp.src(config.assets.src)
                .pipe(gulp.dest(config.assets.dest)),
            gulp.src(config.statics.src)
                .pipe(gulp.dest(config.statics.dest))
        ]);
    }
};