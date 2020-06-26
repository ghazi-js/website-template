// =========================================================
// Gulp Task: sass
// Description: transpiles sass
// Dependencies: npm install --save-dev gulp-sass node-sass gulp-filesize
// =========================================================
const config        = require('../config.js');

module.exports = function(gulp, plugins) {
    return function () {
        return (
            gulp.src(config.styles.src)
                .pipe(plugins.sass({ outputStyle: 'compressed' }))
                .on("error", plugins.sass.logError)
                .pipe(gulp.dest(config.styles.dest))
                .pipe(plugins.filesize())
        );
    };
};